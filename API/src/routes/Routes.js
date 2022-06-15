const express = require('express');
const router  = express.Router();
const auth = require('../middlewares/auth');
const passport = require('../middlewares/passport');

const CarsController = require('../controllers/CarsController');
const EnginesController = require('../controllers/EnginesController');
const ManufacturersController = require('../controllers/ManufacturersController');
const OwnersController = require('../controllers/OwnersController');
const CarsByEngineController = require('../controllers/CarsByEngineController');
const CarsByOwnerController = require('../controllers/CarsByOwnerController');
const CarsByManufacturerController = require('../controllers/CarsByManufacturerController');
const AuthController = require('../controllers/AuthController');


// ---------- CarsController ----------

router.get('/Cars/Count', CarsController.countCars);
router.get('/Cars', CarsController.retrieveCars);
router.post('/Cars', auth, CarsController.createCar);

router.get('/Car/:id', CarsController.retrieveCar);
router.put('/Car/:id', auth, CarsController.updateCar);
router.delete('/Car/:id', auth, CarsController.deleteCar);

// ---------- EnginesController ----------

router.get('/Engines/Count', EnginesController.countEngines);
router.get('/Engines', EnginesController.retrieveEngines);
router.post('/Engines', auth, EnginesController.createEngine);

router.get('/Engine/:id', EnginesController.retrieveEngine);
router.put('/Engine/:id', auth, EnginesController.updateEngine);
router.delete('/Engine/:id', auth, EnginesController.deleteEngine);

// ---------- ManufacturersController ----------

router.get('/Manufacturers/Count', ManufacturersController.countManufacturers);
router.get('/Manufacturers', ManufacturersController.retrieveManufacturers);
router.post('/Manufacturers', auth, ManufacturersController.createManufacturer);

router.get('/Manufacturer/:id', ManufacturersController.retrieveManufacturer);
router.put('/Manufacturer/:id', auth, ManufacturersController.updateManufacturer);
router.delete('/Manufacturer/:id', auth, ManufacturersController.deleteManufacturer);

// ---------- OwnersController ----------

router.get('/Owners/Count', OwnersController.countOwners);
router.get('/Owners', OwnersController.retrieveOwners);
router.post('/Owners', auth, OwnersController.createOwner);

router.get('/Owner/:id', OwnersController.retrieveOwner);
router.put('/Owner/:id', auth, OwnersController.updateOwner);
router.delete('/Owner/:id', auth, OwnersController.deleteOwner);

// ---------- CarsByEngineController ----------

router.get('/Engines/:id/Car', CarsByEngineController.retrieveCarsOnEngine);

// ---------- CarsByOwnerController ----------

router.get('/Owners/:id/Car', CarsByOwnerController.retrieveCarsOnOwner);

// ---------- CarsByManufacturerController ----------

router.get('/Manufacturers/:id/Car', CarsByManufacturerController.retrieveCarsOnManufacturer);

// ---------- AuthController ----------

router.get('/login', AuthController.login);
router.get('/logout', AuthController.logout);
router.get('/', auth, AuthController.protected);
router.get('/auth/github', passport.authenticate("github", { scope: ["user:email"] }), AuthController.authGitHub);
router.get('/auth/github/callback', passport.authenticate("github", { failureRedirect: "/login" }), AuthController.authCallback);
router.get('/me', auth, AuthController.me);
router.get('/githubme', auth, AuthController.gitHubMe);


module.exports = router;