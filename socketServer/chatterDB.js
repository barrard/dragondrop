var colors = require('colors');
var logger = require('tracer').colorConsole({
                    format : "{{timestamp.green}} <{{title.yellow}}> {{message.cyan}} (in {{file.red}}:{{line}})",
                    dateformat : "HH:MM:ss.L"
                })
var url = 'mongodb://localhost:27017/chatter';
var MongoClient = require('mongodb').MongoClient
var util = require('./util')

function connectMongo(callback){
	MongoClient.connect(url, function(err, db) {
	 	if(util.handleError(err)){
	     	logger.log("We are connected to ".rainbow + db.databaseName)
	     	callback(db)
		}
	 })

}

function connectionToMongoCollection(collectionName, callback){
	connectMongo(function(db){
		var col = db.collection(collectionName)
		callback(db, col)
	})
}

insertOne({me:'you'}, 'chats',{}, function(item){
 console.log(item.ops)
})


function insertOne(data, collection, options, callback){
	if((typeof options==='Object')&&(!Array.isArray(options))){
		var options = options
	}else{
		options={}
	}
	connectionToMongoCollection(collection, function(db, col){
		col.insertOne(data, function(err, item){
			if(util.handleError(err)){
				logger.log('Data inserted'.rainbow)
				logger.log(item.result)
				callback(item)
			}
		})
		db.close()
	})


}



function test(){
	console.log('test')
}

module.exports = 
	 {
	 	test:test
// 		test: function(){
// 	console.log('test')
// }
	}

