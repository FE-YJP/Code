$(function(){
	'use strict';
	window.Input=function(selector){
		var $ele,
			me=this,
			$error_ele,
			rule={
				required:true,
			};
		this.load_validator=function(){
			var val=this.get_val();
			this.validator=new Validator(val,rule);
		}
		this.get_val=function(){	//获取input的值
		
			return $ele.val();
		}
		function init(){			//初始化
			find_ele();			//找到元素
			get_error_ele();	//
			parse_rule();		//解析规则
			me.load_validator(); 
			listen();
		}
		function listen(){
			$ele.on('blur',function(){      //监听keyup监测每一次按键盘change=blur
				var valid=me.validator.is_valid(me.get_val());
				if(valid){
				$error_ele.hide();
				//console.log("hide");
				}else{
					$error_ele.show();
					//console.log("show");

				}
			});
		}
		function get_error_selector(){
			return '#'+$ele.attr('name')+'-input-error';
		}
		function get_error_ele(){
			$error_ele=$(get_error_selector());

		}
		function find_ele(){
			if(selector instanceof jQuery){
				$ele=selector;
				
			}else{
				$ele=$(selector);
			}
		}
		function parse_rule(){
			var rule_str=$ele.data('rule');
			if(!rule_str) return;
			var rule_arr=rule_str.split('|');//分割rule里面的字符串
			for(var i=0;i<rule_arr.length;i++){
				var item_str=rule_arr[i];			
					var item_arr=item_str.split(':');//['min','18']
			rule[item_arr[0]]=JSON.parse(item_arr[1]);//{min:18}
			}
		
		}
		init();
	}




});