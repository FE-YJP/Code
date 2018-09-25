$(function(){
	'use strict'
// 	$('#signup').click(function(e){
// 		e.preventDefault();
// 	});
	
	var $inputs=$('[data-rule]'); 
	var $form=$("#sign");
	var inputs=[];
		$inputs.each(function(index,node){
			//解析每个input的验证规则
			var tmp=new Input(node);
			inputs.push(tmp);
		});
	console.log(inputs);
	$form.on('submit',function(e){
		e.preventDefault();
		$inputs.trigger('blur');
		for(var i=0;i<inputs.length;i++){
			var item=inputs[i];
			var r=item.validator.is_valid();
			if(!r){
				alert('invalid');
				return;
			}
		}
		alert("注册成功");
	});
	function signup(){
		$.post('/api/signup',{});
	}
	
});
// 	if($('.info').is(':visible')){
// 	console.log(1);}                  //判断可见元素(demo.is(':visible'))
// var b='min:18|max:100|maxlength:10|minlength:5|"^[a-zA-Z0-9]+$"';