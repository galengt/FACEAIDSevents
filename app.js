
console.log("connecting..."); 

var orm = require("orm");
var mysql = require("mysql");

var client = mysql.createClient({
	host:'localhost',
	port:3306,
	user:'root',
	password:'password'
}); 
	
var db = orm.connect("mysql", client, function (success, db) {
	host:'localhost'
	port:3306
	user:'root'
	password:'password'
});
	
console.log("connected.");


var user_query = "Select id from faceaids.user";

client.query(
  user_query,
  function selectCb(err, results, fields) {
    if (err) {
      throw err;
    }
    console.log(results);
    console.log(fields);
    client.end();
  }
);

var Chapter = db.define("faceaids.chapter", {
    "id"   : { "type": "int" },
	"name"   : { "type": "string" },
	"leader_id"   : { "type": "int" },
    "school": { "type": "string"},
    "city"    : { "type": "string" },
	"state"    : { "type": "string" },
	"description"    : { "type": "string" },
	"additional_info"    : { "type": "string" },
	"active"    : { "type": "boolean" }

}, {
    "methods" : {
        "getChapterName" :function () {
            return this.name
        },

		"getChapterLocation" :function () {
            return this.city + ", " + this.that;
        },

		"getChapterLocation" :function () {
            return this.city + ", " + this.that;
        },
		
		"getLeader" :function () {
            return this.leader_id;
        }, 
		
		"getChapterDescription" :function () {
            return this.description;
        }
    }
});

//is this right??
Chapter.hasMany("members", Chapter, "user");
Chapter.hasMany("leader", Chapter, "user");

//TODO define a model for User



