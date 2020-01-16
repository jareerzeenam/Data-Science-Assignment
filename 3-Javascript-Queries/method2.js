var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    var dbo = db.db("Dataset");
    dbo.collection("GlobalTemperature").find({},
        { projection: { _id: 1, cartodb_id: 1, uid: 1, date: 1 } }).toArray(function (err, result) {
            if (err) throw err;
            console.log(result);
            db.close();
        });
});