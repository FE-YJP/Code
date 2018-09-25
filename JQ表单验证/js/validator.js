$(function(){
	'use strict';
	
	window.Validator=function(val,rule){			//验证器
	
		this.is_valid=function(new_val){			//总体监测是否合理，哪些小监测执行
			var key;	
			if(new_val!==undefined)
			val = new_val;						
			//	如果不是必填项，且用户未填写内容，直接判定为合法
			if(!rule.required&&!val){return true;}	//必填项
			for(key in rule){						//
				//防止重复检查
				if(key==='rule.required')
				continue;						//此条已经执行类，执行下一条
				//调用rule中相对应的方法
			var r=this['validate_'+key]();		//动态获取用来检测的方法
			
			if(!r) return false;				//其中一条false则返回不需要继续执行类
			}
			return true;
		}
		this.validate_max=function(){		//监测最大值
			pre_max_min();
			return val<=rule.max;
		}
		this.validate_min=function(){		//监测最小值
			pre_max_min();
			return val>=rule.min;
		}
		this.validate_maxlength=function(){			//监测最大字符数
			pre_length();
			return val.length<=rule.maxlength;
		}
		this.validate_minlength=function(){			//监测最小字符数
			pre_length();
			return val.length>=rule.minlength;
		}
		this.validate_number=function(){		//监测输入是否为数字
			return $.isNumeric(val);
		}
		this.validate_required=function(){		//验证是否为必填项
			var rel=$.trim(val);//返回不带空格的字符
			if(!rel&&rel!==0){
				return false;
				}
			return true;
		}
		this.validate_use=function(){			//监测是否符合正则
			var reg=new RegExp(rule.use);
			return	reg.test(val);
		}
		//用于完成this.max或者this.min
		function pre_max_min(){				//输入类型转换为数字
			val=parseFloat(val);
		}
		//用于完成this.maxlength或者this.minlength
		function pre_length(){					//输入类型转化为字符串
			val=val.toString();
		}	
	}
	
	
	
	
	
	
});