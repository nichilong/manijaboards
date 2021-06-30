
			window.addEventListener('deviceorientation', handleOrientation);
			
			function handleOrientation(event){
				//var output=document.getElementById("output");
				//simpleOutput(event, output);
				
				var canvas=document.getElementById("canvas_output");
				betterOutput(event, canvas);
			}
			
			function simpleOutput(event, div){
				var properties="";
				for(var prop in event){
					properties+=prop+": "+event[prop]+"<br>";
				}
				div.innerHTML=properties;
			}
			
			function betterOutput(event, canvas){
				canvas.width=window.innerWidth;
				canvas.height=window.innerHeight;
				
				var context=canvas.getContext("2d");
				var radius=Math.min(canvas.width,canvas.height)/10;
				
				var location0={
					x:canvas.width/2,
					y:canvas.height/2
				}
				
				var location={
					x:location0.x,
					y:location0.y+event["beta"]*3
				}
				
				context.beginPath();
				context.arc(location.x,location.y,radius,0,2*Math.PI);
				context.stroke();
			}
			
		