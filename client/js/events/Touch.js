var Touch = (function(){
	'use strict'
	var dgcn = function(el){
	return document.getElementsByClassName(el)
	}
	var dgid = function(el){
		return document.getElementById(el)
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
