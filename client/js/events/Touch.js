var Touch = (function(){
	'use strict'
	var dgcn = function(el){
	return document.getElementsByClassName(el)
	}
	var dgid = function(el){
		return document.getElementById(el)
	}


	function addTouchEventsWatcher (el){


		var touchDisplayHTML=  `<div class='touchDislay'>
			<div class='touchBox'>touchMove<br><span id="touchMove"></span></div>
			<div class='touchBox'>touchLeave <br><span id="touchLeave"></span></div>
			<div class='touchBox'>touchEnd <br><span id="touchEnd"></span></div>
			<div class='touchBox'>touchStart <br><span id="touchStart"></span></div>
			<div class='touchBox'>touchCancel <br><span id="touchCancel"></span></div>
			<div class='touchBox'>touchEnter <br><span id="touchEnter"></span></div>
			<div class='touchBox'>touchCount <br><span id="touchCount"></span></div>
		</div>`

		el.addEventListener('touchstart', Touch.touchStartDisplay, true)
		el.addEventListener('touchenter', Touch.touchEnterDisplay, true)
		el.addEventListener('touchcancel', Touch.touchCancelDisplay, true)
		el.addEventListener('touchend', Touch.touchEndDisplay, true)
		el.addEventListener('touchleave', Touch.touchLeaveDisplay, true)
		el.addEventListener('touchmove', Touch.touchMoveDisplay, true)
		el.addEventListener('touchmove', Touch.touchCount, true)
	}



	function _addEXYToSpan(span, event){
		 // var touchobj = event.changedTouches[0]
		 var touchobj = event
		 var text = event.type + "<br>"
		 text += "clientX: "+touchobj.clientX + 'px <br>'
		 text += "clientY: "+touchobj.clientY +"px <br>"
		 text += "screenX: "+touchobj.screenX +"px <br>"
		 text += "screenY: "+touchobj.screenY +"px <br>"
		 text += "pageX: "+touchobj.pageX +"px <br>"
		 text += "pageY: "+touchobj.pageY +"px <br>"
		 text += "layerX: "+touchobj.layerX +"px <br>"
		 text += "layerY: "+touchobj.layerY +"px <br>"

		span.innerText = text
		console.log(event)

	}

	function touchCount(e){
		console.log('touchCountDisplay')
		var span = dgid('touchCount')
		if(e.changedTouches && e.changedTouches[0].clientX){
			var clientX = e.changedTouches[0].clientX;
			var initialY = e.changedTouches[0].clientY;
			span.innerText = e.changedTouches.length

		}else{
			var clientX = e.clientX;
			var initialY = e.clientY;
			span.innerText = 'no can'

		}
		s
		// _addEXYToSpan(span, e)

		
	}


	function touchStartDisplay(e){
		console.log('touchStartDisplay')
		var span = dgid('touchStart')
		_addEXYToSpan(span, e)

		
	}
	function touchEndDisplay(e){
		console.log('touchEndDisplay')
		var span = dgid('touchEnd')
		_addEXYToSpan(span, e)

		
	}
	function touchLeaveDisplay(e){
		console.log('touchLeaveDisplay')
		var span = dgid('touchLeave')
		_addEXYToSpan(span, e)

		
	}
	function touchMoveDisplay(e){
		console.log('touchMoveDisplay')
		var span = dgid('touchMove')
		_addEXYToSpan(span, e)

		
	}

	function touchEnterDisplay(e){
		console.log('touchEnterDisplay')
		var span = dgid('touchEnter')
		_addEXYToSpan(span, e)

		
	}
		function touchCancelDisplay(e){
		console.log('touchCancelDisplay')
		var span = dgid('touchCancel')
		_addEXYToSpan(span, e)
	}





	return{
		touchStartDisplay:touchStartDisplay,
		touchEndDisplay:touchEndDisplay,
		touchLeaveDisplay:touchLeaveDisplay,
		touchMoveDisplay:touchMoveDisplay,
		touchEnterDisplay:touchEnterDisplay,
		touchCancelDisplay:touchCancelDisplay,
		touchCount:touchCount
	}
	
})()
