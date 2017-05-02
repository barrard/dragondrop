var MakeDraggable = (function(){
	'use strict'
	var dgcn = function(el){
	return document.getElementsByClassName(el)
	}
	var dgid = function(el){
		return document.getElementById(el)
	}




	function _ListenForDrag(e){
		console.log(e)
		e.preventDefault()
		if(e.touches && e.touches[0].clientX){
			var clientX = e.touches[0].clientX;
			var clientY = e.touches[0].clientY;
		}else{
			var clientX = e.clientX;
			var clientY = e.clientY;
		}

		var inititalX = clientX
 		var inititalY = clientY



		var currentTop = parseInt(e.target.style.top)
		var currentLeft = parseInt(e.target.style.left)


		function dragAction(e){
			e.preventDefault()

			if(e.touches && e.touches[0].clientX){
				var clientX = e.touches[0].clientX;
				var clientY = e.touches[0].clientY;
			}else{
				var clientX = e.clientX;
				var clientY = e.clientY;
			}
			var movementX = clientX - inititalX 
			var movementY = clientY - inititalY 
			// console.log(e)
				console.log('dragAction')


			console.log(e.target.style.top)
			console.log(e.target.style.left)
			console.log(movementX)
			console.log(movementY)

			var moveX = movementX
			var moveY = movementY
			var newTop = currentTop +moveY
			var newLeft = currentLeft + moveX
			e.target.style.top = newTop+'px'
			e.target.style.left = newLeft+'px'


		
		}


		// e.target.draggon=true
		console.log('_ListenForDrag')
		console.log(e)
		e.target.addEventListener('mousemove', dragAction, true)
		e.target.addEventListener('mouseup', dragStop, true)
		e.target.addEventListener('mouseleave', dragStop, true)
		e.target.addEventListener('touchmove', dragAction, true)
		e.target.addEventListener('touchend', dragStop, true)
		e.target.addEventListener('touchcancel', dragStop, true)


		// e.target.addEventListener('mouseup')
		console.log('drag?')

		function dragStop(e){
			// e.target.draggon = false
			console.log('dragStop')
			console.log(e)
			e.preventDefault()

			e.target.removeEventListener('mouseup', dragStop, true)
			e.target.removeEventListener('touchend', dragStop, true)
			e.target.removeEventListener('mousemove', dragAction, true)
			e.target.removeEventListener('touchmove', dragAction, true)
			e.target.removeEventListener('mouseleave', dragStop, true)
			e.target.removeEventListener('touchcancel', dragStop, true)

		}


	}

	
	function draggon(el){
		el.style.top='10px'
		el.style.left='10px'
		console.log('draggon function on this  ')
		console.log(el)
		// el.draggon = false
		el.addEventListener('mousedown', _ListenForDrag, false)
		el.addEventListener('touchstart', _ListenForDrag, false)
	}

	return {
		draggon:draggon
	}


})()