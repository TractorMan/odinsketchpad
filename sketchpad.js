var side = 4;
var size = 500/4;
var colour = "black";
var random = false;
var weak = false;
var opacity = 0.1;

var squareFiller = function(x){
	
	for(var i = 0; i<x; i++){
	
	$('<tr>').appendTo($("table"))

	
	};
	
	
		for(var i =0; i<x; i++){																				// CREATES THE GRID
			
		var sizeHeight = size-2;	
		$('<td class="td" width = "'+size+'" height = "'+sizeHeight+'">').appendTo($("tr"))	
			
		};	
	
}




var normalButton= function(){

	$('.normal-mode').click(function(){
		
		random=false;
		weak=false;
		colour = "black";
		tableClear();
		main();
		
	});
	
}


var weakMode = function(){
	
	
	
	
}


var ink = function(){
	
	 
	 $("td").mouseover(function(){
		if(weak){
			$(this).css("background-color","black");
			opacity = $(this).css("opacity");
			opacity = Number(opacity)
			opacity+=0.1;
			$(this).css("opacity", opacity);
		
		}
		
		else{ if(random) colour = randomColour();															//mouse over adds colour to square
		$(this).css("background-color",colour)
		}
 });
 
 }




var resets = function(){
	
	$("#reset").click(function(){
		$("td").css("background-color","white");
		
	
	});
	

}
	
var tableClear = function(){
	$('table').text("");																		//clears grid
	
}


var buttons = function(){
	
		$(".button").mousedown(function(){
	$(this).addClass('active');
	
	})																							//when a button is clicked, it turns grey
	
		$(".button").mouseup(function(){
	$(this).removeClass('active');
	
	})
	
	
	
	
}


var changeGrid = function(){
		
	$(".grid").unbind().click(function(){
		side = prompt("Enter new side length, max 64.");          //this function is for the change grid button
		if(side<128){
		size = (500/side);
		tableClear();
		
		main();
	}
		else alert("Please enter a number less than 65.")
	});
};

var randomColour = function(){
	
	var colours = ["red","blue","green","yellow","orange","grey","black","pink","brown"];  //selects a random colour
	var i = Math.floor(Math.random()*9);
	return colours[i];
	
}
  
var randomButton= function(){
	$(".random-mode").click(function(){
		random=true;
		weak =false;
		tableClear();
		main();
	})
	
}
 

var weakButton = function(){
	
	$(".weak").click(function(){
		tableClear();
		weak = true;
		main();
		$(".td").addClass("opaque");
		
	});
	
}
 
 
 var main = function() {
	 squareFiller(side);
	 ink();
	 resets();												
	 buttons();
	 changeGrid();
	 randomButton();
	 normalButton();
	 weakButton();
 }
 
 
 

 $(document).ready(main);