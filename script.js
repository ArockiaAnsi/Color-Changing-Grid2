var randomColor =["red", "green", "blue", "aqua", "teal", "salmon", "yellow", "purple"];

for(var i = 0; i < 10; i++) {
	var div1 = document.createElement('div');
	
	for(var j = 0; j< 10; j++) {
		var div = document.createElement("div");
		div.style.width = "50px";
		div.style.height = "50px";
		div.style.background = "null";
		div.style.border ='1px solid black';
		div.style.display = 'inline-block';
		div.style.margin= '-2px 0';
		
		div.addEventListener("mouseover", function (event1){
			console.info('mouseover');
			this.style.backgroundColor =randomColor[Math.floor(Math.random()*8)];
			this.style.transition = 'background-color .1s';
		});            
		div.addEventListener("mouseout", function (event2){
			console.info('mouseout');
			this.style.backgroundColor = null;
			this.style.transition = 'background-color .1s';
			});

		div1.appendChild(div);
	}
	document.getElementById('container').appendChild(div1);
}