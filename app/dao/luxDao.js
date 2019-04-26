const { User }= require('../model/index');
const daoCommon = require('../common/daoCommon');

class LuxDao {
    constructor() {
        this.common = new daoCommon();
    }

    findAll(){
        let sqlRequest = "SELECT * FROM users";

        return this.common.findAll(sqlRequest).then(rows => {
            let users = []
            for (const row of rows) {
                users.push(new User(
                    row.id,
                    row.firstName,
                    row.lastName,
                    row.userName,
                    row.phone,
                    row.email,
                    row.password
                ));
            }

            return users;
        })
    }


    findById(id) {
        let sqlRequest = "SELECT * FROM users WHERE id='" + id + "'";

        let sqlParams= {
            $id: user.id
        }

        return this.common.findAll(sqlRequest, sqlParams).then(rows => {
            let users = [];
            for (const row of rows) {
                users.push(new User(
                    row.id,
                    row.firstName,
                    row.lastName,
                    row.userName,
                    row.phone,
                    row.email,
                    row.password
                    )
                );
            }
            return users;
        });
    }


    createUser(luxUser) {
        let sqlRequest = "INSERT INTO users (firstName, lastName, userName, phone, email, password) " + "VALUES ($firstName, $lastName, $userName, $phone, $email, $password)";

        let sqlParams = {
            $firstName: luxUser.firstName,
            $lastName: luxUser.lastName,
            $userName: luxUser.userName,
            $phone: luxUser.phone,
            $email: luxUser.email,
            $password: luxUser.password
        };

        return this.common.run(sqlRequest, sqlParams);
    }

    createHome(luxHome) {
        let sqlRequest = "INSERT INTO homes (address, fName, lName, primary_image) " + "VALUES ($address, $fName, $lName, $primary_image); "

        let sqlParams = {
            $address: luxHome.address,
            $fName: luxHome.fName,
            $lName: luxHome.lName,
            $primary_image: luxHome.primary_image,
        };

        return this.common.run(sqlRequest, sqlParams);
    }

    createAmenities(luxAmenities) {
        let sqlRequest = "INSERT INTO amenities (bedrooms, bathrooms, private_land, theater, pool, remote, special)" + "VALUES($bedrooms, $bathrooms, $private_land, $theater, $pool, $remote, $special);"

        let sqlParams = {
            $bedrooms: luxAmenities.bedrooms,
            $bathrooms: luxAmenities.bathrooms, 
            $private_land: luxAmenities.private_land,
            $theater: luxAmenities.theater,
            $pool: luxAmenities.pool,
            $remote: luxAmenities.remote,
            $special: luxAmenities.special
        };

        return this.common.run(sqlRequest, sqlParams);
    }

    deleteById(id){
        let sqlRequest = "DELETE FROM users WHERE id = '" + id + "'";
        let sqlParams = {$id: id.id};

        return this.common.run(sqlRequest, sqlParams);
    }

}

module.exports = LuxDao;