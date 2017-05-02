var CratedElementsGlobal = (function(){
	'use strict';
	var dgcn = function(el){
	return document.getElementsByClassName(el)
	}
	var dgid = function(el){
		return document.getElementById(el)
	}
	//add click listner to fire createElement
	dgid('createElement').addEventListener('click', CreateElement, false)
	var elementCounter = 0;
	var UserCreatedElement_id_Prepend='ucel_'

	function CreateElement(e){
		e.preventDefault()
	var type = dgid('elementTypeSelection').value
	var width = dgid('elementWidthValue').value
	var height = dgid('elementHeightValue').value
	var BGColor = dgid('BGColor').value
	var fontColor = dgid('BGColor').fontColor
	var innerTextarea = dgid('innerTextarea').value
	var el = document.createElement(type)
	el.style.border='1px solid #c1d644'
	el.style.display = 'inline-block'
	el.style.userSelect= 'none'
	el.style.position='absolute'
	el.style.opacity = 1;
	el.style.top='10px'
	el.style.left='10px'
	el.style.textAlign = 'center'
	//this order is important for linking the transform property
	el.style.transform='rotate(0deg) scale(1)';
	el.style.transition = 'all 1s ease';
	el.style.width = width+'px';
	el.style.height = height+'px'
	el.style.backgroundColor = BGColor
	el.style.color = fontColor
	el.style.fontSize='12px'
	el.style.zIndex = 1
	el.innerHTML = innerTextarea
	el.classList.add('userCreatedElement')
	el.id = UserCreatedElement_id_Prepend+elementCounter
	el.addEventListener('contextmenu', listenForRightClick, true)

	el.addEventListener('click', function(){
		console.log('clicky clicky event')
		if(el.dragg){

		events.emit('elementClicked', this)
		}
	}, false)


	makeDraggable(el)
	// addBorderRezizeAbility(el)
	dgcn('mainContent')[0].appendChild(el)
	elementCounter++
	// console.log('element count '+elementCounter)
	appendToElementList(el)
}

function listenForRightClick(e){
	e.preventDefault()
	//simulate clicking on the menu item with data-link attribute == this.id
	var evObj = document.createEvent('Events');
	evObj.initEvent('click', true, false);
	var id = e.target.id
	var el = document.querySelector("[data-link="+id+"]")
	el.dispatchEvent(evObj);
	
	// console.log(e)
}

function appendToElementList(el){
	var type = el.nodeName
	var id = el.id
	var classList = el.classList
	var elWidth = el.style.width

	var newListItem = document.createElement('li')
	newListItem.setAttribute('data-link', id)
	newListItem.innerHTML = type + ' id:'+id
	newListItem.addEventListener('click', getDataLinkDetails, false)
	addHoverEvent(newListItem)
	dgid('elementsList').appendChild(newListItem)
	}

function addHoverEvent(el){
	el.addEventListener('mouseover', mouseHover, true )
	el.addEventListener('touchstart', mouseHover, true )
	function mouseHover(){
		var linkTag = el.getAttribute('data-link')
		dgid(linkTag).classList.add('Hovered')
	}
	el.addEventListener('mouseleave',mouseLeave, true)
	el.addEventListener('touchend',mouseLeave, true)
	 function mouseLeave(){
			var linkTag = el.getAttribute('data-link')
			dgid(linkTag).classList.remove('Hovered')
		}
}



	function addResizeElementWithMouse(el, side, initialX, initialY){
		console.log('addresizeelemtnwithmpouyse function side '+side)
		console.log(el)
		var height = parseInt(el.style.height)
		var left = parseInt(el.style.left)
		var width = parseInt(el.style.width)
		var top = parseInt(el.style.top)

		function removeAlistner(e){
					el.resizeEgde=false

					removeLargerDiv(e)
					e.target.removeEventListener('mouseup', removeAlistner, true)
					e.target.removeEventListener('mousemove', resizeLeftSideWithMouse, true)
					e.target.removeEventListener('mousemove', resizeRightSideWithMouse, true)
					e.target.removeEventListener('mousemove', resizeTopSideWithMouse, true)
					e.target.removeEventListener('mousemove', resizeBottomSideWithMouse, true)
					e.target.removeEventListener('touchend', removeAlistner, true)
					e.target.removeEventListener('touchend', removeLargerDiv, true)

					e.target.removeEventListener('touchmove', resizeLeftSideWithMouse, true)
					e.target.removeEventListener('touchmove', resizeRightSideWithMouse, true)
					e.target.removeEventListener('touchmove', resizeTopSideWithMouse, true)
					e.target.removeEventListener('touchmove', resizeBottomSideWithMouse, true)
					e.target.removeEventListener('touchcancel', removeAlistner, true)
					e.target.removeEventListener('touchcancel', removeLargerDiv, true)
					e.target.removeEventListener('touchleave', removeLargerDiv, true)		
					e.target.removeEventListener('touchleave', removeAlistner, true)
					// console.log('MOUSE UP!!!!')
				}
		el.addEventListener('mouseup', removeAlistner, true)
		el.addEventListener('mouseleave', removeLargerDiv, true)
		el.addEventListener('touchend', removeAlistner, true)
		el.addEventListener('touchend', removeLargerDiv, true)
		el.addEventListener('touchcancel', removeAlistner, true)
		el.addEventListener('touchleave', removeLargerDiv, true)		
		el.addEventListener('touchleave', removeAlistner, true)		
		el.addEventListener('touchcancel', removeLargerDiv, true)


		if(side === 'left'){
			el.addEventListener('mousemove', resizeLeftSideWithMouse, true)
			el.addEventListener('touchmove', resizeLeftSideWithMouse, true)
			// console.log('adding mouse move listener to rezise element form the left')
		}else if(side === 'bottom'){
			// console.log('adding mouse move listener to rezise element form the bottom')
			el.addEventListener('mousemove', resizeBottomSideWithMouse, true)
			el.addEventListener('touchmove', resizeBottomSideWithMouse, true)
		}else if(side === 'top'){
			el.addEventListener('mousemove', resizeTopSideWithMouse, true)
			el.addEventListener('touchmove', resizeTopSideWithMouse, true)
			// console.log('adding mouse move listener to rezise element form the top')
		}else if(side === 'right'){
			el.addEventListener('mousemove', resizeRightSideWithMouse, true)
			el.addEventListener('touchmove', resizeRightSideWithMouse, true)
			// console.log('adding mouse move listener to rezise element form the right')
		}

		function resizeBottomSideWithMouse(e){
			if(e.touches && e.touches[0].clientX){
				var clientX = e.touches[0].clientX;
				var clientY = e.touches[0].clientY;
			}else{
				var clientX = e.clientX;
				var clientY = e.clientY;
			}
			console.log('resize bottom')
			e.target.classList.add('largerDiv')
			var movementY = initialY - clientY
			var newHeight = height - movementY
			e.target.style.height = newHeight+'px'
			// e.target.innerText = 'movementY '+ movementY + ' newHeight '+newHeight

		}

		function resizeLeftSideWithMouse(e){
			if(e.touches && e.touches[0].clientX){
				var clientX = e.touches[0].clientX;
				var clientY = e.touches[0].clientY;
			}else{
				var clientX = e.clientX;
				var clientY = e.clientY;
			}
			e.target.classList.add('largerDiv')
			var movementX = initialX - clientX
			var newLeft = left-movementX
			var newWidth = width+movementX
			e.target.style.left = newLeft+'px'
			e.target.style.width = newWidth+'px'
			var touchFlag = 0
	

			// e.target.innerText = touchFlag+'<br> movementX '+ movementX + ' newWidth '+newWidth + ' newLeft '+newLeft


		}

		function resizeRightSideWithMouse(e){
			if(e.touches && e.touches[0].clientX){
				var clientX = e.touches[0].clientX;
				var clientY = e.touches[0].clientY;
			}else{
				var clientX = e.clientX;
				var clientY = e.clientY;
			}
			e.target.classList.add('largerDiv')
			var movementX = initialX - clientX
			var newWidth = width-movementX
			e.target.style.width = newWidth+'px'
			// e.target.innerText = 'movementX '+ movementX + ' newHeight '+newWidth

		}

		function resizeTopSideWithMouse(e){
			console.log(initialY)
			if(e.touches && e.touches[0].clientX){
				var clientX = e.touches[0].clientX;
				var clientY = e.touches[0].clientY;
			}else{
				var clientX = e.clientX;
				var clientY = e.clientY;
			}

			e.target.classList.add('largerDiv')
			var movementY = clientY - initialY
			var newTop = top+movementY
			var newHeight = height-movementY
			e.target.style.top = newTop+'px'
			e.target.style.height = newHeight+'px'
			// e.target.innerText = 'initialY '+initialY+ ' e.clientY '+clientY+' movementY '+ movementY + ' newHeight '+newHeight + ' newTop '+newTop

		}

	}


	function removeLargerDiv(e){
		e.target.removeEventListener('mouseleave', removeLargerDiv, true)
		e.target.classList.remove('largerDiv')
	}

function makeDraggable(el){
	var difY;
	var difX;
	el.dragg=false
	el.edge=false
	el.addEventListener('mouseleave', mouseLeave, false)
	el.addEventListener('touchleave', mouseLeave, false)
	function mouseLeave(e){
			if(e.target!=this)return

			if(el.dragg||el.resizeEgde){
				el.resizeEgde=false
						// console.log('mouse elave')
			var mouseupEvent = document.createEvent ('MouseEvents');
			mouseupEvent.initEvent ('mouseup', true, true);
			el.dispatchEvent(mouseupEvent)
			}else{
				// console.log('mouse leaving un draggable')
			}
		}
	el.addEventListener('mousedown',resiseOrDrag, true)
	el.addEventListener('touchstart',resiseOrDrag, true)

	function resiseOrDrag(e){
		e.preventDefault()

		if(e.target!=this)return
			if(e.touches && e.touches[0].clientX){
				var initialX = e.touches[0].clientX;
				var initialY = e.touches[0].clientY;

			}else{
				var initialX = e.clientX;
				var initialY = e.clientY;

			}
		console.log(e)
		if(el.classList.contains('resizableElement')){
			(function(el){
				console.log('mouse down iffy resizable tranny function')
				el.style.transition='none'
				el.addEventListener('mouseup', addTranny, true)
				el.addEventListener('touchend', addTranny, true)
				function addTranny(e){
					if(e.target!=this)return

					this.removeEventListener('mouseup', addTranny, true)
					this.removeEventListener('touchend', addTranny, true)
					this.style.transition='all 1s ease'
				}
			})(e.target)
			var elStyle = e.target.style
			elStyle.cursor = '-webkit-grabbing'
			if(e.layerX < 10 ){
				console.log('left edge')
				// e.target.style.backgroundColor = 'green'
				el.resizeEgde=true
				addResizeElementWithMouse(el, 'left', initialX, initialY)
			}else if(e.layerY < 10){
				console.log('top edge')
				// e.target.style.backgroundColor = 'yellow'
				el.resizeEgde=true
				addResizeElementWithMouse(el, 'top', initialX, initialY)
			}else if((parseInt(elStyle.width) - e.layerX < 10)){
				console.log('RIGHT SIDE')
				// e.target.style.backgroundColor = 'red'
				el.resizeEgde=true
				addResizeElementWithMouse(el, 'right', initialX, initialY)
			}else if((parseInt(elStyle.height) - e.layerY < 10)){
				console.log('BOTTOM???')
				el.resizeEgde=true	
				// e.target.style.backgroundColor = 'orange'
				addResizeElementWithMouse(el, 'bottom', initialX, initialY)
			}else{
				console.log(e)
				e.target.dragg=true;

				e.target.style.cursor = '-webkit-grabbing'
				console.log(e.target.dragg)
				var mY = parseInt(e.pageY)
				var mX = parseInt(e.pageX)
				var elY = e.target.offsetTop
				var elX = e.target.offsetLeft
				difY = mY-elY
				difX = mX-elX

			}
		}else{
			// console.log('not editable')
		}

	}

	el.addEventListener('mouseup', stopDragingMe, true)
	el.addEventListener('touchend', stopDragingMe, true)
	function stopDragingMe(e){
			if(e.target!=this)return

			e.preventDefault()
			e.target.dragg=false
			e.target.style.cursor = 'default'
			// console.log(e.target.dragg+' Drag?')
			if(e.target.classList.contains('resizableElement')){
				UIFunctions.addDataAndLinkageToElemenetNameandDetailsTable(e.target)
			}
		}
	el.addEventListener('mousemove', draggingFunction, true)
	el.addEventListener('touchmove', draggingFunction, true)
	function draggingFunction(e){
			if(e.target!=this)return
			if(el.classList.contains('resizableElement')){
				e.preventDefault()
				var cornerCase = 10
				var edgeCase = 5
				var elStyle = e.target.style

				var width = parseInt(elStyle.width)
				var height = parseInt(elStyle.height)
				var mouseX = e.layerX
				var mouseY = e.layerY

				if(e.target.dragg){
					var X = e.pageX-difX
					var Y = e.pageY-difY
					e.target.style.top=Y+'px'
					e.target.style.left=X+'px'
					elStyle.cursor = 'move'
				}else if(mouseX < cornerCase && mouseY < cornerCase){
						// console.log('corner!')
					elStyle.cursor = 'se-resize'
				}else if((mouseY < edgeCase )|| (height - mouseY < edgeCase)){
					// console.log('TOP OR BOTTOM')
					elStyle.cursor = 'n-resize'
				}else if((mouseX < edgeCase )|| (width - mouseX < edgeCase)){
					// console.log('LEFT OR Right')
					elStyle.cursor = 'e-resize'
				}
				else{

					elStyle.cursor = 'pointer'
					// console.log('not draggable')
					return
				}
			}else{
				// console.log(' no can movve')
			}
		}
}

//this gets fired on list click or element right-click, which also emits a click on the list 
function getDataLinkDetails(e){
	console.log('getDataLinkDetails FIRED')
		console.log(dgid(e.target.getAttribute('data-link')).classList.contains('userCreatedElement'))


	e.preventDefault()
	function appendPludBtn(el){
		var plusBtn = document.createElement('button')
		plusBtn.innerHTML='+'
		plusBtn.classList.add('addInnerDivBtn')
		plusBtn.id = el.id+'_plusBtn'
		plusBtn.addEventListener('click', function(e){
			if(e.target!=this)return
				console.log(e.target.id.slice(0, -8))
				//slice off the button tag and call the UIFunctions with just the ucel_id
				UIFunctions.appendInnerDiv(e.target.id.slice(0, -8))

		}, false)
		el.appendChild(plusBtn)

	}
	// console.log(e.target.getAttribute('data-link'))
	var selectedElement = dgid(e.target.getAttribute('data-link'))
	if(dgid(e.target.getAttribute('data-link')).classList.contains('resizableElement')){
		console.log('RESIZE TRUE')
	}else{
		appendPludBtn(selectedElement)

	}
	selectedElement.classList.toggle('resizableElement')
	e.target.classList.toggle('resizableElement')
	// console.log(selectedElement)

	this.addEventListener('click', removeEditableity, false)
	// UIFunctions.addDataAndLinkageToElemenetNameandDetailsTable(selectedElement)
}
 
function removeEditableity(e){
	e.preventDefault()
	console.log('remove editablity')
	// console.log(this.getAttribute('data-link'))
	// console.log('remove editability')
	e.target.removeEventListener('click', removeEditableity)
	
	var dataLinkedElement = dgid(this.getAttribute('data-link'))
	console.log(dataLinkedElement)
	var plusBtn = this.getAttribute('data-link')
	console.log('remove '+plusBtn)
	var pb = 	document.getElementById(plusBtn+'_plusBtn')
	console.log(pb)
	pb.remove()
	// plusBtn.remove()
	console.log(plusBtn)
	this.classList.remove('resizableElement')

	dataLinkedElement.style.cursor = 'default'
	dataLinkedElement.classList.remove('resizableElement')
}

function activeMouseEditability(e){
	e.preventDefault()
	var cornerCase = 10
	var edgeCase = 5
	var elStyle = e.target.style
	var width = parseInt(elStyle.width)
	var height = parseInt(elStyle.height)
	var mouseX = e.layerX
	var mouseY = e.layerY
	if(mouseX < cornerCase && mouseY < cornerCase){
		// console.log('corner!')
		elStyle.cursor = 'se-resize'
	}else if((mouseY < edgeCase )|| (height - mouseY < edgeCase)){
		// console.log('TOP OR BOTTOM')
		elStyle.cursor = 'n-resize'
	}else if((mouseX < edgeCase )|| (width - mouseX < edgeCase)){
		// console.log('LEFT OR Right')
		elStyle.cursor = 'e-resize'
	}else if(e.target.dragg){
		elStyle.cursor = 'move'
	}
	else{
		elStyle.cursor = 'default'
	}
}
return {
	UserCreatedElement_id_Prepend:UserCreatedElement_id_Prepend
}

})();
