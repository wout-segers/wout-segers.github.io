$(document).ready(function() {
  $("img").click(function(){
	$(this).toggleClass('highlighted'), 
	$(this).toggleClass('gemarkeerd')
	
	
	
}); 
var select = document.getElementsByClassName('highlighted');
	$("#calculate").click(function(){
		var pos = $("#aankomst").offset(); 
	
		
   
	var blue = document.getElementsByClassName('blauw gemarkeerd'); 
	var brown = document.getElementsByClassName('bruin gemarkeerd'); 
	
			var green = document.getElementsByClassName('groen gemarkeerd'); 
			
	var kleurenCollectie = new Array(); 
		$(brown).each(function() {
		kleurenCollectie.push(this);
		
});
	
			
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
	console.log(brown); 
	
	console.log(kleurenCollectie); 
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
	
	
			
			
			for(var m=0; m<kleurenCollectie.length; m++)
			{
				console.log($(kleurenCollectie[m]).hasClass('highlighted')); 
				if($(kleurenCollectie[m]).hasClass('highlighted') == true)
					{
						
						 
					}
			
				
			}
				 
			
	 $(eyesCollection[k]).toggleClass('highlighted'); 
	$(eyesCollection[k]).animate({"z-index": "2", top: pos.top, left: pos.left});
			$(eyesCollection[k]).fadeOut(); 
			
			
			
		
	} 
		
			
			
			
			
			
					if(brown.length >= 1)
			{
				setTimeout(pauze, 2000); 
				function pauze(){
					
					var oImg=document.createElement("img");
					oImg.setAttribute('src', '1197149886129651796tonlima_Olhos_Castanhos_Brown_Eye.svg.hi.png');
					oImg.setAttribute('alt', 'na');
					oImg.setAttribute('height', '100px');
					oImg.setAttribute('width', '100px');
					
					$(oImg).appendTo("body");
					 
					$(oImg).css({
						'position': 'absolute', 
						'top': pos.top, 
						'left': pos.left,
						'display': 'none'
					});
					$(oImg).fadeIn();
				}
				
			}
						
					if(green.length >= 1 && brown.length == 0)
			{
				setTimeout(pauze, 2000); 
				function pauze(){
					
					var foto = document.createElement("img");
					foto.setAttribute('src', 'tonlima_Olhos_Verdes_Green_Eye.png');
					foto.setAttribute('alt', 'na');
					foto.setAttribute('height', '100px');
					foto.setAttribute('width', '100px');
					
					$(foto).appendTo("body");
					 
					$(foto).css({
						'position': 'absolute', 
						'top': pos.top, 
						'left': pos.left,
						'display': 'none'
					});
					$(foto).fadeIn();
				}
	
			
			}
			
			if(blue.length >= 1 && green.length == 0 && brown.length == 0)
			{
				setTimeout(pauze, 2000); 
				function pauze(){
					
					var pic = document.createElement("img");
					pic.setAttribute('src', 'tonlima_Olho_Azul_Blue_Eye.png');
					pic.setAttribute('alt', 'na');
					pic.setAttribute('height', '100px');
					pic.setAttribute('width', '100px');
					
					$(pic).appendTo("body");
					 
					$(pic).css({
						'position': 'absolute', 
						'top': pos.top, 
						'left': pos.left,
						'display': 'none'
					});
					$(pic).fadeIn();
				}
	
			
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
 
 