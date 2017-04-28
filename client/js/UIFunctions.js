UIFunctions= (function(){
	'use strict';
	var dgcn = function(el){
	return document.getElementsByClassName(el)
	}
	var dgid = function(el){
		return document.getElementById(el)
	}

	
	
	var elementTimeLine = new TimeLine.createTimeLine()
	function addDataAndLinkageToElemenetNameandDetailsTable(el){

		var timeStampData = {
			cssText:el.style.cssText,
			id:el.id
		}

		elementTimeLine.newTimeStamp(timeStampData)


//manula set up of data not in table array
//this is closely coupled to pageLayout.js module
		var selectedElementNameandDetails = dgid('selectedElementNameandDetails')
		var elText = dgid('elText')
		selectedElementNameandDetails.innerHTML = el.nodeName
		elText.value = el.innerText
		selectedElementNameandDetails.classList.add('selectedElementNameandDetails')
		var tableData = PageLayout.tableHeaderArray
		// console.log(el)
		// console.log(el.style)
		for(var x = 0; x<tableData.length;x++){
			// console.log(tableData[x])
			//the input (v = value )element of heach iteration
			var v = dgid('currentSelectedElementData').children[x].children[0]
			var i = tableData[x]
			if(i == 'id'){
				v.value = el.id
			}else if(i == 'zIndex'){
				v.value = el.style.zIndex

			}else if(i == 'left'){
				v.value = el.style.left

			}else if(i == 'top'){
				v.value = el.style.top

			}else if(i == 'width'){
				v.value = el.style.width

			}else if(i == 'height'){
				v.value = el.style.height

			}else if(i == 'border'){
				// console.log('border '+el.style.border)
				// console.log('borderRadius '+el.style.borderRadius)
				var br = el.style.borderRadius
				//handle the three elemeents of a border style
				//b is an array of three items,[1px, solid, black]
				var b = el.style.border.split(' ')
				// console.log(b)
				dgid('currentSelectedElementData').children[x].children[0].value = b[0]
				dgid('currentSelectedElementData').children[x].children[1].value = b[1]
				function componentToHex(c) {
				    var hex = c.toString(16);
				    return hex.length == 1 ? "0" + hex : hex;
				}

				function rgbToHex(r, g, b) {
				    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
				}
				var r = parseInt(b[2].slice(4))
				var g = parseInt(b[3])
				var b = parseInt(b[4])
				dgid('currentSelectedElementData').children[x].children[2].value = rgbToHex(r, g, b)
				dgid('currentSelectedElementData').children[x].children[3].value = br


			}else if(i == 'Font Size'){
				v.value = el.style.fontSize

			}else if(i == 'Rotate'){
				var curentTransform = el.style.transform.split(' ')
				// var currentRotate = parseInt(curentTransform[0].slice(7, -4))
				
				v.value = parseInt(curentTransform[0].slice(7, -4))

			}else if(i == 'Scale'){
				var curentTransform = el.style.transform.split(' ')
				// var currentRotate = parseInt(curentTransform[0].slice(7, -4))
				
				v.value = curentTransform[1].slice(6, -1)

			}else if(i == 'opacity'){
				v.value = el.style.opacity

			}else if(i == 'background color'){
				// console.log(el.style[tableData[x]])
				var b = el.style.backgroundColor.split(' ')
				console.log(b)

				function componentToHex(c) {
				    var hex = c.toString(16);
				    return hex.length == 1 ? "0" + hex : hex;
				}

				function rgbToHex(r, g, b) {
				    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
				}
				var r = parseInt(b[0].slice(4, -1))
				var g = parseInt(b[1])
				var b = parseInt(b[2])
				dgid('currentSelectedElementData').children[x].children[0].value = rgbToHex(r, g, b)

				// v.value = el.style.backgroundColor

			}
			// console.log(el.style[tableData[x]])
		}

	}


	function appendInnerDiv(elId){
		console.log('toggle = ' + appendInnerDiv.prototype.toggle)
		console.log(elId)
		var el = dgid(elId)
	//create some kind of pop up with shapes
	if(!appendInnerDiv.prototype.toggle){
		appendInnerDiv.prototype.toggle = !appendInnerDiv.prototype.toggle
		console.log(appendInnerDiv.prototype)
		RenderComponent.shapesContainer(el)

	}else{
		if(elId === dgcn('shapesContainer')[0].getAttribute('data-link')){
			console.log('same link')
			dgcn('shapesContainer')[0].remove()

			appendInnerDiv.prototype.toggle = !appendInnerDiv.prototype.toggle

		}else{
			console.log('diffferrrntntn DATA LINKS')
			dgcn('shapesContainer')[0].remove()
			RenderComponent.shapesContainer(el)

		}
	}


}



appendInnerDiv.prototype.toggle = false






	return{
		addDataAndLinkageToElemenetNameandDetailsTable:addDataAndLinkageToElemenetNameandDetailsTable,
		elementTimeLine:elementTimeLine,
		appendInnerDiv:appendInnerDiv
	}


})()