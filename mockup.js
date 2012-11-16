$(document).ready(function(){

	/* when the page loads, hide the update thingy */
	$('#VipCell2').find('input').slice(0,5).closest('table').addClass('update-inner');
	$('#VipCell2').find('select').slice(0).closest('table').addClass('update-inner');
	$('#VipCell2').find('input').slice(5,11).closest('table').addClass('update-work');
	$('#VipCell2').find('select').slice(-1).closest('table').addClass('update-work');
	$('.update-inner').hide();
	$('.update-work').hide();
	

	/* toggle the whole update section */
	$('#update-collapser').toggle (
			function () {
				$('.update-inner').slideDown();
	$('#update-collapser').html("&uarr; Click to close this section &uarr;");
				
			}, function () {
				$('.update-inner').slideUp();
	$('#update-collapser').html("&darr; Click to update your record &darr;");
			});


	/* toggle the work section */
	$('#work-collapser').toggle (
			function () {
				$('.update-work').slideDown();
				$('#update-submit').addClass('open');
				
			}, function () {
				$('.update-work').slideUp();
				$('#update-submit').removeClass('open');
			});
	
	
	
	/*zebra striping*/
	$('.datatable').find('tr:odd').addClass('even');
	
	/*hide*/
	$('.hide').hide();
	
	/*original toggler, toggels the next sibling*/
	$('.togglecontrol').next().hide();
	$('.togglecontrol').toggle(
	function () {
	$(this).next().slideDown();
	}, function () {
	$(this).next().slideUp();
	});

}); /* close the document */

