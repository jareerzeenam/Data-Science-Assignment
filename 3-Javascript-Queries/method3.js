var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    var dbo = db.db("Dataset", { useUnifiedTopology: true });
    dbo.collection("GlobalTemperature").find({}, { projection: { _id:0, cartodb_id: 0 } }).toArray(function (err, result) {
        if (err) throw err;
        console.log(result);
        db.close();
    });
});