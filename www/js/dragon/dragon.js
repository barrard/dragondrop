

(function(){
	document.getElementById("dragonFly").addEventListener('click', function(){
		document.getElementById('dragon').style.animation = 'fly 1.0s steps(11) infinite'
	}, true)

	document.getElementById("manRun").addEventListener('click', function(){
		document.getElementById('runningman').style.animation = 'runv 2.5s steps(5) infinite, runh 0.5s steps(6) infinite'
	}, true)


function $(name){
	return document.getElementById(name)
}

var robotButtonsArray = []
robotButtonsArray.push($('robot_walk'))
robotButtonsArray.push($('robot_stop'))
robotButtonsArray.push($('robot_shoot'))
robotButtonsArray.push($('robot_down'))
robotButtonsArray.push($('robot_up'))

function animationEndHandler(e){
	e.target.removeEventListener('animationend', animationEndHandler)
	console.log('cool animation bro')
	e.target.style.animation = 'none'
}

robotButtonsArray.forEach(function(i){
	i.addEventListener('click', function(){
		var animation_clicked = i.id
		//robot is being hard coded here and should be refactored ot more dyanmic
		var robot = $('robot')
		var robot_animation=robot.style.animation

		robot.addEventListener('animationend', animationEndHandler, false)
		console.log(animation_clicked)
		console.log(robot_animation)
		var robot_style=robot.style
		console.log(animation_clicked)

		if(animation_clicked == 'robot_shoot'){
			robot_style.animation='robot_shootH 0.5s steps(7) 2, robot_shootV steps(2) 1s'

		}else if(animation_clicked == 'robot_walk'){
			robot_style.animation='robot_walk 0.5s steps(7) infinite'

		}else if(animation_clicked == 'robot_down'){
			robot_style.animation='robot_walk 0.5s steps(7) infinite'

		}
		var robot_animation=robot.style.animation
		console.log(robot_animation)


		 
	}, false)
})




	var Context = {
		canvas: null,
		context:null,
		create:function(canvas_tag_id){
			this.canvas = document.getElementById(canvas_tag_id)
			this.context = this.canvas.getContext('2d');
			return this.context;
		}
	}

	var Sprite = function(filename, is_pattern){
		//construct
		this.image = null;
		this.pattern = null;
		this.loaded = false;
		this.TO_RADIANS = Math.PI/180;
		var self = this
		if(filename != undefined && filename != '' && filename !=null)
		{
			console.log('sprite made ' +filename)
			this.image = new Image();
			this.image.addEventListener('load', function(){
				console.log('img loaded')
				self.loaded=true
				if(is_pattern)
				{
					console.log(this+' is a patern')

					self.pattern = Context.context.createPattern(self.image, 'repeat');
				}
			})
			this.image.src = filename;
		
		}
		this.draw = function(x, y, w, h, dx, dy, dw, dh){
			//pattern?
			if(this.loaded===false){
				console.log('NOT YET LOADED')
			}else{
				console.log('all was loaded')
			}
			if(this.pattern != null){
				console.log(' draw is a patern')
				Context.context.fillStyle = this.pattern;
				Context.context.fillRect(x, y, w, h)
			}else{
				//image
				if(w ==undefined || h == undefined){
					console.log('no w or h')
					Context.context.drawImage(this.image, x, y, 
												this.image.width,
												this.image.height);
				}else if(dx!==undefined&&dy!==undefined&&dw!==undefined&&dh!==undefined){
					console.log('full on framing')
					Context.context.drawImage(this.image, x, y, w, h, dx, dy, dw, dh)

				}else{
					//stretched
					Context.context.drawImage(this.image, x, y, w, h)
				}

			}
		}

		this.rotate = function(x, y, angle){
			Context.context.save();
			Context.context.translate(x, y);
			Context.context.rotate(angle * this.TO_RADIANS);
			Context.context.drawImage(this.image,
										-(this.image.width/2),
										-(this.image.height/2));
			Context.context.restore();
		}

	}

	//initialize canvas
	window.addEventListener('DOMContentLoaded', function(){
	console.log('create canvas')
		// Context.create('canvas')
		// Context.context.fillRect(25, 25, 100, 100);
		    // Context.context.clearRect(45, 45, 60, 60);
		    // Context.context.strokeRect(50, 50, 50, 50);
		// var img = new Sprite('img/bat.png', false)
		// var wall = new Sprite('../img/wall.png', true)
		// var creat = new Sprite('../img/crate.jpg', false)
		// var creat2 = new Sprite('img/crate.jpg', true)
		// var falls = new Sprite('img/waterFall1x3.png', false)
		var angle = 0;
		var width = 0
		var count = 0
		// setInterval(function(){
			// count ++
			// if(width > 1000)width = 0
			// Context.context.fillStyle = '#333';
		// width+=330
		// console.log(width)
			// falls.draw(width-330,0, width, 940, 0, 0, 100, 300)
					// img.draw(0, 0, 65, 100, 10, 10, 100, 100)
					// img.draw(10, 10)
					// creat2.draw(0, 0, 600 , 400)
						// img.draw(65, 0, 110, 100, 10, 10, 110, 100)
						// img.draw(175, 0, 125, 100, 10, 10, 125, 100)
						// img.draw(310, 0, 165, 100, 10, 10, 165, 100)
						// img.draw(475, 0, 168, 100, 10, 10, 168, 100)
						// Context.canvas.width=645
						// Context.canvas.height=230				

						// wall.draw(0,0)

			// wall.draw(0,0)

			// Context.context.fillRect(0,0,800, 800);
			// wall.draw(0,0, 120, 120)
			// wall.draw(0,74, 256, 32);
			// creat2.draw(160, 160, 256, 180);

			// wall.rotate(115, 160, angle+=4.0);
			// creat.rotate(100, 100, angle);
		
		// }, 2500)


	}, false)
})()



