import express from "express";
import MyUserController from "../controllers/MyUserController";
import { jwtCheck, jwtParse } from "../middleware/auth";
import { validateMyUserRequest } from "../middleware/validation";

const router = express.Router();

// /api/my/user
router.get("/", jwtCheck, jwtParse, MyUserController.getCurrentUser)
router.post("/", jwtCheck, MyUserController.createCurrentUser);
router.put(
    "/", 
    jwtCheck, //check if the user is logged in and has a valid acess token
    jwtParse, // get the user info and check if user exists
    validateMyUserRequest, //validate the request
    MyUserController.updateCurrentUser
);

export default router;