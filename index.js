$(document).ready(function() {

    $( "#opener" ).on( "click", function() {
     $( ".modal-body" ).css('display','block');
    });	
	 $( ".close, .close_button" ).on( "click", function() {
      $( ".modal-body" ).hide();
    });
	
	$( ".close_button, .close, #opener" ).hover(function(){
	$(this).css('cursor', 'pointer');
	});
	

		$( ".close_modal, .header" ).hover(function(){
	$(this).css('background', '#5FB220');
	},
	function(){
	$(this).css('background', '#7FFA21');
	}
	);
	
	
  } );