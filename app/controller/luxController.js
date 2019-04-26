const LuxDao = require("../dao/luxDao");

const ControllerCommon = require("../common/controllerCommon");

const { User, Home, Amenities } = require("../model/");

class LuxController {
    constructor() {
        this.luxDao = new LuxDao();
        this.common = new ControllerCommon();
    };

    findAll(res) {
        this.luxDao.findAll()
            .then(this.common.findSuccess(res))
            .catch(this.common.findError(res));
    };

    findOne(req, res) {
        let id = req.params.id

        this.luxDao.findOne(id)
            .then(this.common.findSuccess(res))
            .catch(this.common.findError(res));
    };

    findByName(req, res) {
        let firstName = req.params.firstName;

        this.luxDao.findByName(firstName)
            .then(this.common.findSuccess(res))
            .catch(this.common.findError(res));
    };

    findById(req, res) {
        let id = req.params.id;

        this.luxDao.findById(id)
            .then(this.common.findSuccess(res))
            .catch(this.common.findError(res));
    };

    createUser(req, res) {
        let luxUser = new User();
        
        luxUser.firstName = req.body.firstName;
        luxUser.lastName = req.body.lastName;
        luxUser.userName = req.body.userName;
        luxUser.phone = req.body.phone;
        luxUser.email = req.body.email;
        luxUser.password = req.body.password;


        return this.luxDao.createUser(luxUser)
            .then(this.common.findSuccess(res))
            .catch(this.common.findError(res));
    };

    createHome(req, res) {
        let luxHome = new Home();
        
        luxHome.address = req.body.address;
        luxHome.fName = req.body.fName;
        luxHome.lName = req.body.lName;
        luxHome.primary_image = req.body.primary_image;


        return this.luxDao.createHome(luxHome)
            .then(this.common.findSuccess(res))
            .catch(this.common.findError(res));
    };


    createAmenities(req, res) {
        let luxAmenities = new Amenities();

        luxAmenities.bedrooms = req.body.bedrooms;
        luxAmenities.bathrooms = req.body.bathrooms;
        luxAmenities.private_land = req.body.private_land;
        luxAmenities.theater = req.body.theater;
        luxAmenities.pool = req.body.pool;
        luxAmenities.remote = req.body.remote;
        luxAmenities.special = req.body.special;


        return this.luxDao.createAmenities(luxAmenities)
            .then(this.common.findSuccess(res))
            .catch(this.common.findError(res));
    }

    deleteById(req, res) {
        let id = req.params.id;

        return this.luxDao.deleteById(id)
            .then(this.common.findSuccess(res))
            .catch(this.common.findError(res));
    };
};

module.exports = LuxController;