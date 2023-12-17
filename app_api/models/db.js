var mongoose = require( 'mongoose' );
var dbURI = 'mongodb://localhost/mekanbul';
mongoose.connect(dbURI);
mongoose.connection.on("connected", function(){
    console.log(dbURI + "veritabanına bağlandı\n");
});
mongoose.connection.on("error", function(){
    console.log("bağlantı hatası\n");
});
mongoose.connection.on("disconnected", function(){
    console.log("bağlantı kesildi\n");
});
process.on("SIGINT", function(){
    mongoose.connection.close();
    console.log("Bağlantı Kapatıldı");
    process.exit(0);
});

require("./venue");