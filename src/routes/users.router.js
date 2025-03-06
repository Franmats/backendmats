import { Router } from "express";
import { accessProfile, logOut, currentDTO, registerJWT, loginJWT, passAuthToken } from "../controllers/users.controller.js";
import { passportCall,authorization } from "../utils.js";
import passport from "passport";

const router = Router()

router.post("/login",passport.authenticate("login"),loginJWT)

router.post("/register",passport.authenticate("register"),registerJWT)


router.get("/profile",passportCall("jwt",{ session: false }),authorization( "user" ),accessProfile)

router.get("/profile/admin",passportCall("jwt",{ session: false }),authorization( "admin" ),accessProfile)

/* router.post("/pass-auth/:token",passAuthToken) */
/* router.get("/current",passportCall("jwt",{ session: false }),authorization("usuario"), current) */
router.get("/logout",logOut)



export default router