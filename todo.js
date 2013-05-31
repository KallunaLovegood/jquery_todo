$(document).ready(function() {

	// first we're going to make it so CLICKING the #button does something
	$('#button').click(function(){
		var newTodo = $('input[name=newTodoItem]').val();
		$('.todoList').append('<div class="item">' + newTodo + '</div>');
		$(':input', '#todoForm').not(':button, :submit, :reset, :hidden').val('')
	});



	// Now we'll make it so when you click the .item div, it deletes
	$(document).on('click', '.item', function(){
		$(this).remove();
	});

	$('.item').sortable();
});