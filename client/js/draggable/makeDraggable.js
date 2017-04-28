var MakeDraggable = (function(){
	'use strict'
	var dgcn = function(el){
	return document.getElementsByClassName(el)
	}
	var dgid = function(el){
		return document.getElementById(el)
	}

	function dragAction(e){
		console.log(e)
			console.log('dragAction')

		console.log(e.target.style.top)
		console.log(e.target.style.left)
		console.log(e.movementX)
		console.log(e.movementY)
		var currentTop = parseInt(e.target.style.top)
		var currentLeft = parseInt(e.target.style.left)
		var moveX = e.movementX
		var moveY = e.movementY
		var newTop = currentTop +moveY
		var newLeft = currentLeft + moveX
		e.target.style.top = newTop+'px'
		e.target.style.left = newLeft+'px'


	
	}

	function dragStop(e){
		// e.target.draggon = false
		console.log('dragStop')
		console.log(e)
		e.target.removeEventListener('mouseup', dragStop, true)
		e.target.removeEventListener('mousemove', dragAction, true)
		e.target.removeEventListener('mouseleave', dragStop, true)

	}

	function _ListenForDrag(e){
		// e.target.draggon=true
		console.log('_ListenForDrag')
		console.log(e)
		e.target.addEventListener('mousemove', dragAction, true)
		e.target.addEventListener('mouseup', dragStop, true)
		e.target.addEventListener('mouseleave', dragStop, true)


		// e.target.addEventListener('mouseup')
		console.log('drag?')

	}

	
	function draggon(el){
		el.style.top='10px'
		el.style.left='10px'
		console.log('draggon function on this  ')
		console.log(el)
		// el.draggon = false
		el.addEventListener('mousedown', _ListenForDrag, false)
	}

	return {
		draggon:draggon
	}


})()