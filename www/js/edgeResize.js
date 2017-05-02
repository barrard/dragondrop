var EdgeResize = (function(){
	'use strict';

	function makeTableResizable(table){
		var rows = table.children
		var numberOfRows = table.children.length
		var rowObj = {}
		var proximityLimit = 15
		function mouseResize(e){

			if(e.touches && e.touches[0].clientX){
				var clientX = e.touches[0].clientX;
				var clientY = e.touches[0].clientY;
			}else{
				var clientX = e.clientX;
				var clientY = e.clientY;
			}

			// console.log(e.target.style.width)
			console.log('e.target.offsetWidth '+ e.target.offsetWidth)
			console.log("e.target.offsetLeft "+e.target.offsetLeft)
			console.log('e.clientX '+e.clientX)
			console.log('e.offsetX' + e.offsetX)
			var offsetX = clientX - e.target.offsetLeft - 2
			// console.log('width '+e.target.offsetWidth)
			// console.log('left '+e.target.offsetLeft)
			// console.log(e.offsetX)
			if( (e.target.offsetWidth + e.target.offsetLeft) - clientX < proximityLimit){
				e.target.style.cursor = 'e-resize'
				e.target.resize = 'e'
				// console.log('inside Right EDGE')
				e.target.classList.add('_resizeable')
			}else if(offsetX < proximityLimit){
				e.target.style.cursor = 'w-resize'
				e.target.resize = 'w'
				// console.log('inside left EDGE')
				e.target.classList.add('_resizeable')

			}else{
				e.target.resize = 'null'

				e.target.style.cursor = 'default'
				e.target.classList.remove('_resizeable')

			}
		}
		function mouseLeave(e){
			e.target.classList.remove('_resizeable')
		}
		function checkForResizeableClass(e){
			e.preventDefault()

			if(e.target.classList.contains('_resizeable')){
				if(e.touches && e.touches[0].clientX){
					var clientX = e.touches[0].clientX;
					var clientY = e.touches[0].clientY;
				}else{
					var clientX = e.clientX;
					var clientY = e.clientY;
				}
				var inititalX = clientX
				var inititalY = clientY
				var columnAfter = e.target.nextSibling
				var columnAfterWidth = columnAfter.offsetWidth - 17
				var width = e.target.offsetWidth - 17
				var columnBefore = e.target.previousSibling
				var columnBeforeWidth = columnBefore.offsetWidth - 17


				// console.log(e)
				// console.log('lets resize this')
				e.target.addEventListener('mouseleave', emitMouseUp ,true)
				e.target.addEventListener('touchend', emitMouseUp ,true)
				e.target.addEventListener('mouseup', removeMouseResizeListeners,true)
				e.target.addEventListener('touchend', removeMouseResizeListeners,true)
				e.target.addEventListener('mousemove', mouseMoveResize,true)
				e.target.addEventListener('touchmove', mouseMoveResize,true)



				function mouseMoveResize(e){
					e.preventDefault()
					if(e.target.classList.contains('_resizeable')){

						if(e.touches && e.touches[0].clientX){
							var clientX = e.touches[0].clientX;
							var clientY = e.touches[0].clientY;
						}else{
							var clientX = e.clientX;
							var clientY = e.clientY;
						}

						var movementX = clientX - inititalX 


					if(e.target.style.cursor == 'w-resize' ||  e.target.resize === 'w'){
						//smaller to the right (increase)
						//larget to the left(dec)
						var newWidth = width-(movementX)
						var columnBeforeNewWidth = columnBeforeWidth+movementX
				
						e.target.style.width=newWidth+'px'
						columnBefore.style.width=columnBeforeNewWidth+'px'
					}else if(e.target.style.cursor == 'e-resize'  ||  e.target.resize === 'e'){

						//larger to the right (increase)
						//smaller to the left(dec)
						var newWidth = width+(movementX)
						
						var columnAfterNewWidth = columnAfterWidth-movementX
						columnAfter.style.width=columnAfterNewWidth+'px'
						e.target.style.width=newWidth+'px'
					}


				}
			}
			function removeMouseResizeListeners(e){
				e.target.removeEventListener('mouseup', removeMouseResizeListeners, true)
				e.target.removeEventListener('mousemove', mouseMoveResize, true)
				e.target.removeEventListener('touchend', removeMouseResizeListeners, true)
				e.target.removeEventListener('touchmove', mouseMoveResize, true)

			}
		}
	}





		function emitMouseUp(e){
			e.target.removeEventListener('mouseleave', emitMouseUp, true)
			e.target.removeEventListener('touchend', emitMouseUp, true)
			// console.log('mouse leave   /    up')
			var mouseupEvent = document.createEvent ('MouseEvents');
			mouseupEvent.initEvent ('mouseup', true, true);
			e.target.dispatchEvent(mouseupEvent)
		}
		for(var x = 0;x<1;x++){//just add to first row
			rowObj[x]= rows[x]
			var columnCount = rows[x].children.length
			var dataColumn = rows[x].children
			for(var i = 0; i< columnCount;i++){
				dataColumn[i].addEventListener('mousemove', mouseResize , true)
				// dataColumn[i].addEventListener('touchmove', mouseResize , true)
				dataColumn[i].addEventListener('touchstart', mouseResize , true)
				dataColumn[i].addEventListener('mouseleave', mouseLeave, true)
				dataColumn[i].addEventListener('touchend', mouseLeave, true)
				dataColumn[i].addEventListener('mousedown', checkForResizeableClass , true)
				dataColumn[i].addEventListener('touchstart', checkForResizeableClass , true)
			}
		}
		// console.log(rowObj)
	}

	function makeElementResizable(el){

	}

return {
	makeTableResizable:makeTableResizable,
	makeElementResizable:makeElementResizable
}


})()