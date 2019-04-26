class User {
    constructor(user_id, firstName, lastName, userName, phone, email, password, userContent_id) {
        this.user_id = user_id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.userName = userName;
        this.phone = phone;
        this.email = email;
        this.password = password;
    }
}

class Home {
    constructor(address, fName, lName, primary_image){
        this.address = address;
        this.fName = fName;
        this.lName = lName
        this.primary_image = primary_image
    }
}

class Amenities {
    constructor(bedrooms, bathrooms, private_land, theater, pool, remote, special){

        this.bedrooms = bedrooms;
        this.private_land = private_land;
        this.theater = theater;
        this.pool = pool;
        this.remote = remote;
        this.special = special;
    }
}

module.exports = {
    User: User,
    Home: Home,
    Amenities: Amenities

}