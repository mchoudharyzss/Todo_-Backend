import { Router } from "express";
import {UserLogin,RegisterUser} from '../controllers/User.Controller.js'
const router =Router()
router.route("/Register").post(RegisterUser);
router.route("/Login").post(UserLogin);
export default router;