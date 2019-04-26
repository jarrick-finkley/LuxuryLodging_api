let sqlite3 = require('sqlite3').verbose();
let db = new sqlite3.Database('./db/luxuryLodging.db');

let init = function(){

    db.run("CREATE TABLE if not exists users (" +
        " id INTEGER PRIMARY KEY AUTOINCREMENT," +
        " firstName TEXT," +
        " lastName TEXT," +
        " userName TEXT," +
        " phone TEXT," +
        " email TEXT," +     
        " password TEXT," +
        " owner INTEGER DEFAULT 0," +
        " home_id INTEGER REFERENCES homes(id)" +
        ")"
    );

    db.run("CREATE TABLE if not exists homes (" + 
        " id INTEGER PRIMARY KEY AUTOINCREMENT," +
        " address TEXT," +
        " fName TEXT," +
        " lName TEXT," + 
        " primary_image TEXT," +
        " images_id INTEGER REFERENCES images(id)," +
        " user_id INTEGER REFERENCES users(id)," +
        " amenities_id INTEGER REFERENCES amenities(id)" + 
        ")"
    );

    db.run("CREATE TABLE if not exists images (" +
        " id INTEGER PRIMARY KEY AUTOINCREMENT," +
        " image1 TEXT," + 
        " image2 TEXT," +
        " image3 TEXT" +
        ")"
    );

    db.run("CREATE TABLE if not exists amenities (" +
        " id INTEGER PRIMARY KEY AUTOINCREMENT," +
        " bedrooms INTEGER," +
        " bathrooms INTEGER," +
        " private_land INTEGER DEFAULT 0,"+
        " theater INTEGER DEFAULT 0," +
        " pool INTEGER DEFAULT 0," +
        " remote INTEGER DEFAULT 0," +
        " special INTEGER DEFAULT 0" +
        ")"
    );

}

module.exports = {
    init: init,
    db: db
}