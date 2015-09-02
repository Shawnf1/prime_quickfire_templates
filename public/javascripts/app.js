/**
 * Created by Shawn on 9/2/15.
 */
$firstName = $('#firstName');
$lastName = $('#lastName');
$ul = $('#contents');
$(document).ready(function () {
	//console.log('ready');
	var $student = $('#student-template').html();
	var studentTmp = Handlebars.compile($student);

	var ajaxCall = $.ajax({
		type: 'GET',
		url: '/students'
	});

	ajaxCall.done(function(res) {
		console.log(res);
	});

	$('form').on('submit', function (e) {
		e.preventDefault();
		var firstName = $firstName.val().trim();
		var lastName = $lastName.val().trim();
		if(firstName.length == 0 || lastName.length == 0) {
			alert("Please enter both first and last name.");
		}else {
			//console.log("submit", $firstName.val(), $lastName.val());
			var student = {firstName: $firstName.val(), lastName: $lastName.val()};
			var ajaxCall = $.ajax({
				type: 'POST',
				url: '/students',
				data: student
			});

			ajaxCall.done(function (res) {
				//console.log("added one, new ul:", res);
				//$ul.empty();
				$ul.empty().append(studentTmp(res));
			});

			ajaxCall.fail(function (res) {
				alert("Failed to add student. Please try again... :'(");
			});

			ajaxCall.always(function (res) {
				$firstName.val('');
				$lastName.val('');
			});
		}
	});
});