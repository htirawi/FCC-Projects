$("ul").on("click","li",function(){
	$(this).toggleClass("completed");

});

// Using on
$("ul").on("click","span",function(e){

	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	})
	e.stopPropagation();

});	

$("input[type='text']").keypress(function(e){
	if(e.which === 13){
		var text = $(this).val();
		$(this).val("") ;
		$("ul").append("<li><span><i class='fa fa-trash-o' aria-hidden='true'></i></span> "+text+"</li>")

	}


});


$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle();
});