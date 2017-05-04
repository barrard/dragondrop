var Chatter = (function(coreModule){
	'use strict';
	var dgcn = function(el){
	return document.getElementsByClassName(el)
	}
	var dgid = function(el){
		return document.getElementById(el)
	}
	

function checkForChatterBox(){
	if(dgcn('chatter').length > 0){
		return false
	}else{
		return true
	}
}

var socket={};

function createChatLogo(chatBox){
	var talkBubble = document.createElement('div')
	talkBubble.innerText = 'CHAT'
	var tbs = talkBubble.style
				tbs.padding='15%';
				tbs.fontFamily= 'Rock Salt, cursive';
				tbs.textAlign='center';
				tbs.position='absolute';
				tbs.top='0px';
				tbs.bottom='0px';
				tbs.left='0px';
				tbs.right='0px';
				tbs.border='3px solid green';
				tbs.background='linear-gradient(to right, red, orange, yellow, green, blue, indigo, violet)';
				tbs.borderRadius='50%';
				tbs.marginTop='15px';
				tbs.marginBottom='15px';	

	var chatTriangle = document.createElement('div')
	//cts
	var cts= chatTriangle.style
				cts.position='absolute';
				cts.right='9%';
				cts.bottom='-11%';
				cts.width='44px';
				cts.height='15px';
				cts.borderWidth='10px 5px 5px 15px';
				cts.borderColor='transparent green red transparent';
				cts.borderStyle='solid';
				cts.transform='rotate(17deg)';
				cts.background='linear-gradient(green, red)';
				cts.zIndex='-1';
		


	talkBubble.appendChild(chatTriangle)
	chatBox.appendChild(talkBubble)
}
	
	createChatter()

// (function(){
// 		document.getElementById('elementsList').innerText+="THIS WONT LOAD"

// 	var chatBox = document.createElement('div')
// 	document.body.appendChild(chatBox)
// 	chatBox.style.width="100px"
// 	chatBox.style.height='100px'; 
// 	chatBox.style.border='1px solid red';
// 	chatBox.style.backgroundColor='black';

// })()


function createChatter(){
	// document.getElementById('elementsList').innerText+="THIS WONT LOAD"

	coreModule.original = 'this is the original'
	if(!checkForChatterBox()) {
		console.log('done already');
		return
	}else{
		console.log('first')

			var chatBox = document.createElement('div')
			chatBox.classList.add('chatter')
			var cbs = chatBox.style;
					cbs.width='100px';
					cbs.height='100px';
					cbs.position='absolute';
					cbs.top='0px';
					cbs.right='0px';
					cbs.margin='10px';
					cbs.borderRadius='10px';
					cbs.overflow='hidden';
					cbs.zIndex='100';
					cbs.border='1px solid red';
			createChatLogo(chatBox)
			document.body.appendChild(chatBox)
			// dgcn(_HTMLeleemnt)[0].appendChild(chatBox)

			chatBox.addEventListener('mouseover', function(e){
				// e.stopPropagation()
				chatBox.style.backgroundColor = 'tomato'
				console.log('mouseover')
			}, false)
			chatBox.addEventListener('mouseleave', function(e){
				// e.stopPropagation()
				chatBox.style.backgroundColor = 'white'
				console.log('mouseleave')
			}, false)

			chatBox.addEventListener('click', function openChatApp(e){
				e.stopPropagation()
				if(dgid('chatterChatWindow')){
					var cw = dgid('chatterChatWindow')
					if(cw.style.display == "block"){
						console.log('its block, hide it now')
						cw.style.display='none'
					}else if(cw.style.display == "none"){
						console.log('its hide make me see it now')
						cw.style.display='block'

					}
				}else{
					// socket = io.connect('http://192.168.200.93:8081');
					socket = io.connect('http://72.234.41.20:8081');
					var chatWindow = document.createElement('div')
					chatWindow.id = 'chatterChatWindow'
					console.log(chatWindow.style)
					console.log(chatWindow.style.height)
					var container = chatBox.parentNode
					var cws = chatWindow.style;
						cws.display='block';
						cws.position='absolute';
						cws.width='250%';
						cws.height='400%';
						cws.top='-350%';
						cws.right='10px';
						cws.backgroundColor='tomato';


				
					chatBox.appendChild(chatWindow)
					chatWindow.addEventListener('mouseover', function(e){
						e.stopPropagation()
						// chatBox.style.backgroundColor = 'tomato'
						console.log('mouseover chatWindow')
					}, false)
					chatWindow.addEventListener('mouseleave', function(e){
						e.stopPropagation()
						// chatBox.style.backgroundColor = 'white'
						console.log('mouseleave chatWindow')
					}, false)

					chatWindow.addEventListener('click', function openChatApp(e){
						e.stopPropagation()
					}, true)
				}


			}, false)


			var googlefontlink = document.createElement('link')
			googlefontlink.href = 'https://fonts.googleapis.com/css?family=Rock+Salt'
			googlefontlink.rel="stylesheet"
			document.getElementsByTagName('head')[0].appendChild(googlefontlink)

				var script = document.createElement('script')
				script.src = 'http://72.234.41.20:8081/socket.io/socket.io.js'
				// script.src = 'http://192.168.200.93:8081/socket.io/socket.io.js'
				document.getElementsByTagName('head')[0].appendChild(script)
}
	

		



		

}





	  





coreModule.createChatter = createChatter



return coreModule

}(Chatter || {}))


