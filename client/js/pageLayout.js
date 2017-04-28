PageLayout = (function(){
 
	'use strict';
	var dgcn = function(el){
	return document.getElementsByClassName(el)
	}
	var dgid = function(el){
		return document.getElementById(el)
	}


//some manual set up for items not in the table array
//mainly nodeName, // spaghetti code goes here
dgid('elText').addEventListener('input', function(e){
	var id = getCurrentSelectedElementId()
	var text = e.target.value
	dgid(id).innerHTML = text

}, true)
var selectedElementDetailsSection = dgcn('selectedElementDetailsSection')[0]
var table = document.createElement('table')
var headerRow = document.createElement('tr')
var dataRow = document.createElement('tr')
dataRow.id = 'currentSelectedElementData'
selectedElementDetailsSection.append(table)
var tableHeaderArray = ['id','zIndex','left','top', 'width', 'height','border','Font Size','Rotate','Scale','opacity', 'background color' ]
table.id = 'selectedElementDetailsTable'
table.append(headerRow)
table.append(dataRow)
for(var x = 0;x<tableHeaderArray.length;x++){

	var th = document.createElement('th')
	var td = document.createElement('td')
	var input = document.createElement('input')
	input.setAttribute('data-css', tableHeaderArray[x])
	if(tableHeaderArray[x]=='background color'){
		input.type='color'
		input.setAttribute('data-css', 'backgroundColor')
	}else if(tableHeaderArray[x]=='opacity'){
		input.type='range'
		input.max=1
		input.min=0
		input.step=.1


	}else if(tableHeaderArray[x]=='Rotate'){
		input.type='range'
		input.max=360
		input.min=0
		input.step=5


	}
	else if(tableHeaderArray[x]=='border'){
		input={}
		input.borderWidth = document.createElement('input')
		input.borderStyle = document.createElement('select')
		input.borderColor = document.createElement('input')
		input.borderRadius = document.createElement('input')
		input.borderColor.type='color'
		var borderStyleArray=['dotted', 'dashed', 'solid','double', 'groove', 'ridge', 'inset', 'outset', 'none', 'hidden']
		//make each option and append to selectionelement
		borderStyleArray.forEach(function(i){
			var op = document.createElement('option')
			op.value = i
			op.innerHTML = i
			input.borderStyle.append(op)

		})


	}else if(tableHeaderArray[x]=='Font Size'){
		input.setAttribute('data-css', 'fontSize')

		//create select eleemtn and append font options

	}

	else{
		input.type='text'
		if(input.type=='text'){
			function keyUpListern(e){
				console.log(e)
				if(e.key=="ArrowUp"){
					console.log('up')
				}else if(e.key=="ArrowDown"){
					console.log('down')
				}
			}
		
			input.addEventListener('focus', function(e){
				e.target.addEventListener('keyup', keyUpListern, true)
			},true)

			input.addEventListener('blur', function(e){
				e.target.removeEventListener('keyup', keyUpListern, true)

			},true)
		}
	}
	if(input.nodeName===undefined){
		console.log('multi')
		for(var k in input){

			input[k].setAttribute('data-css', k)

			input[k].addEventListener('input',styleChangeBinding, true)
			td.append(input[k])
		}
	}else{
		input.addEventListener('input',styleChangeBinding, true)
		td.append(input)	
	}
	
	th.innerHTML=tableHeaderArray[x]
	if(x==0){
		th.classList.add('displayNone')
		td.classList.add('displayNone')
	}
	headerRow.append(th)
	dataRow.append(td)


}//tableHeaderArray loop

var mainContent = dgcn('mainContent')[0]
var bottomSideToolBar = dgcn('bottomSideToolBar')[0]
var leftSideToolBar = dgcn('leftSideToolBar')[0]
// var mainPageTop = dgcn('topSideToolBar')[0].offsetHeight
var mainPageLeft = leftSideToolBar.offsetWidth
// var mainPageRight = dgcn('rightSideToolBar')[0].offsetWidth
var mainPageBottom = dgcn('bottomSideToolBar')[0].offsetHeight
// mainContent.style.top = mainPageTop+'px'
mainContent.style.top = 0+'px'
mainContent.style.left = mainPageLeft+'px'
// mainContent.style.bottom = mainPageBottom+'px'
// leftSideToolBar.style.bottom = mainPageBottom+'px'

// mainContent.style.right = mainPageRight+'px'

var mainContentHeight = window.innerHeight-document.getElementsByClassName('bottomSideToolBar')[0].offsetHeight-15
// var leftSideToolBarHeight = window.innerHeight-document.getElementsByClassName('bottomSideToolBar')[0].offsetHeight-15
mainContent.style.height = mainContentHeight+'px'
leftSideToolBar.style.height = mainContentHeight+'px'
mainContent.addEventListener('mousewheel', function(){
	console.log('wheel')
	//get all children on mainContent and shring, and
}, true)

EdgeResize.makeTableResizable(table)

function getCurrentSelectedElementId(){
	return dgid('currentSelectedElementData').children[0].children[0].value
}

function styleChangeBinding(e){
	var elId = getCurrentSelectedElementId()
	var val = e.target.value
	if(e.target.getAttribute('data-css')==='Rotate'){
		//this irder should always be such from the creation of the element
		var curentTransform = dgid(elId).style.transform.split(' ')
		// var currentRotate = parseInt(curentTransform[0].slice(7, -4))
		var rotateVal = 'rotate('+val+'deg)'
		curentTransform[0]=rotateVal
		
		
		dgid(elId).style.transform = curentTransform.join(' ')
	}else if(e.target.getAttribute('data-css')==='Scale'){
		//this irder should always be such from the creation of the element
		var curentTransform = dgid(elId).style.transform.split(' ')
		// var currentRotate = parseInt(curentTransform[0].slice(7, -4))
		var scaleVal = 'scale('+val+')'
		curentTransform[1]=scaleVal
		curentTransform.join(' ')
		dgid(elId).style.transform = curentTransform.join(' ')

	}
	else{
		console.log(e)
		console.log(e.target.getAttribute('data-css'))
		var cssProp = e.target.getAttribute('data-css')
		dgid(elId).style[cssProp] = val
	}

		var timeStampData = {
			cssText:dgid(getCurrentSelectedElementId()).style.cssText,
			id:getCurrentSelectedElementId()
		}
	UIFunctions.elementTimeLine.newTimeStamp(timeStampData)



}

// function handleUndoRedoBtns(command){

// 	getCurrentSelectedElementId()
// 	console.log('go forward')
// 	TimeLine.undoRedo('redo',e.target.id)
// 	console.log('go back')
// 	TimeLine.undoRedo('undo',e.target.id)

// }

dgid('redoBtn').addEventListener('click',  function(e){
	TimeLine.undoRedo('redo', getCurrentSelectedElementId())

}, true)
dgid('undoBtn').addEventListener('click', function(e){
	TimeLine.undoRedo('undo', getCurrentSelectedElementId())


	
})

//PUBLLIC API
return{
	tableHeaderArray:tableHeaderArray,
	getCurrentSelectedElementId:getCurrentSelectedElementId
}







})()