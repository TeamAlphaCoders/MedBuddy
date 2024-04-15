import express from "express";

import { signupUser, loginUser, checkUsername, logoutUser } from "../controller/user_controller.js";

import { authenticateToken, createNewToken } from "../controller/jwt-controller.js";

import { RegisteredHospitalName, ShowdHospitalName} from "../controller/Hospital-Controller.js";

import { MedRecords, getAllRecords } from "../controller/Records-Controller.js";



const router = express.Router();

router.post('/signup', signupUser);
router.post('/username', checkUsername);
router.post('/login', loginUser);
router.post('/logout', logoutUser);

router.post('/token', createNewToken);

router.post('/admin/registerhosps', RegisteredHospitalName);
router.get('/admin/showhosps', ShowdHospitalName);
  
router.post('/create/med-records', MedRecords);
router.get('/records', authenticateToken, getAllRecords)


export default router;
