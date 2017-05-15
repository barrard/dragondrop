var TimeLine = (function(){
	'use strict'
	var dgcn = function(el){
	return document.getElementsByClassName(el)
	}
	var dgid = function(el){
		return document.getElementById(el)
	}

	events.on('elementClicked', function(d){
		console.log(d)
	})

	console.log('timeline function')
	var masterTimeLine = {}
	function createTimeLine(){
		// console.log('new timeline created')
		
		var timeLineObj = {}
		this.newTimeStamp = function(timeStampData){
			if(masterTimeLine[timeStampData.id]===undefined){
				masterTimeLine[timeStampData.id]=[]}
	
			var count = masterTimeLine[timeStampData.id].length
			console.log('newtimeStampData')
			timeStampData.timestamp = new Date()
			masterTimeLine[timeStampData.id].push(timeStampData)
			console.log('count '+count)
			console.log("masterTimeLine")
			console.log(masterTimeLine)

		}


	}

	function undoRedo(command, id){
		if(id.length==0 || !masterTimeLine[id]){return false}
	

		console.log(command)
		console.log(id)
		var length = masterTimeLine[id].length
		console.log(length)
		console.log(masterTimeLine[id])
		if(command == 'redo'){
			if(masterTimeLine[id+'redo']===undefined || masterTimeLine[id+'redo'].length === 0){
				return false
			}else{
				console.log(masterTimeLine[id+'redo'])
				dgid(id).style.cssText = masterTimeLine[id+'redo'][masterTimeLine[id+'redo'].length-1].cssText
				dgid(id).style.transition = 'all 1s ease'
				var savedUndoTimeStmp = masterTimeLine[id+'redo'].pop()
				masterTimeLine[id].push(savedUndoTimeStmp)



			}

		}else if(command == 'undo'){
			if(masterTimeLine[id].length===1){return false}
			console.log(length)
			console.log('rolling bakc style')
			console.log(masterTimeLine[id])
			var savedRedoTimeStmp = masterTimeLine[id].pop()
			if(masterTimeLine[id+'redo']===undefined){
				masterTimeLine[id+'redo']=[]

			}
			masterTimeLine[id+'redo'].push(savedRedoTimeStmp)

			console.log(length)
			console.log(masterTimeLine[id][masterTimeLine[id].length-1].cssText)
			console.log(masterTimeLine[id])




			dgid(id).style.cssText = masterTimeLine[id][masterTimeLine[id].length-1].cssText
			dgid(id).style.transition = 'all 1s ease'

		}		
	
		
	}





return{
	//some timeline functions
	createTimeLine:createTimeLine,
	undoRedo:undoRedo
}


})()