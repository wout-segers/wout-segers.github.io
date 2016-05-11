$(document).ready(function() {
  $("img").click(function(){
	$(this).addClass('highlighted')
	
	
}); 
var select = document.getElementsByClassName('highlighted');
	$("#test2").click(function(){
		var pos = $("#test").offset(); 
	

   

		var offsetCollection = new Array();
		$(select).each(function() {
		offsetCollection.push(
       $(this).offset()
     );
});

var eyesCollection = new Array(); 
		$(select).each(function() {
		eyesCollection.push(this);
});

	console.log(offsetCollection); 
	console.log(eyesCollection);
		
	
     
  // var nieuw =  $(select).appendTo("body");
   var k=0; 
    
	for(var k= 0; k<offsetCollection.length; k++)
	{
		$(eyesCollection[k]).appendTo("body"); 
			$(eyesCollection[k]).css({ 
        'position': 'absolute',
        'top': offsetCollection[k].top,
        'left': offsetCollection[k].left
		
    }); 
	$(eyesCollection[k]).toggleClass('highlighted'); 
	$(eyesCollection[k]).animate({"z-index": "2", top: pos.top, left: pos.left});
			$(eyesCollection[k]).fadeOut(); 
			$(eyesCollection[k]).fadeIn(); 
		
	} 
		
		
		
		 
		
		
	
		
	/*	var pos = 0;
		var i = 0; 
		for(var o=0; o<select.lenth; o++)
		{
			select[i].style.position = "absolute"; 
		}
		var id = setInterval(frame, 5);
    function frame() {
        if (pos == 500) {
            clearInterval(id);
        } else {
			pos++; 
			
			for(var t=0; t<select.length; t++)
			{
			
			select[i].style.top = pos + 'px';
			i++;
			}
			 
            
			
        }
    }  
}); */

 });
	
	
	
/*		var i;
for (i = 0; i < select.length; i++) {
select[i].style.position = "absolute";
select[i].style.left = "500px";
select[i].style.top =  "200px";
}
	}); */

 });
 
 