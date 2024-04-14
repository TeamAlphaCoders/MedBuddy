import express from "express";

import { signupUser, loginUser, checkUsername, logoutUser } from "../controller/user_controller.js";

import { authenticateToken, createNewToken } from "../controller/jwt-controller.js";

// import { RegisteredHospitalName, ShowdHospitalName, HospitalAddedMedRecords } from "../controller/HospitalMedRecController.js";

// import { UserAddedMedRecords } from "../controller/UserMedRecController.js"


const router = express.Router();

router.post('/signup', signupUser);
router.post('/username', checkUsername);
router.post('/login', loginUser);
router.post('/logout', logoutUser);

router.post('/token', createNewToken);

// router.post('/admin/registerhosps', RegisteredHospitalName);
// router.get('/admin/showhosps', ShowdHospitalName);

// router.post('/hospital-added-medical-records', HospitalAddedMedRecords);
// router.post('/user-added-medical-records', UserAddedMedRecords);

export default router;
