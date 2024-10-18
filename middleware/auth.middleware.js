import jwt from "jsonwebtoken";
import { StudModel } from "../models/student.model.js";

async function verifyHandler(req,res,next) {
    try {
        const token = req.cookies?.accessToken || req.body?.accessToken;
        console.log(token);
        if(!token)
        {
            return res.status(400).json({
                message: "Unauthorized User"
            })
        }
    
        const decodeToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);

        console.log("decoded: " ,decodeToken);
    
        const user = await StudModel.findById(decodeToken._id).select("-password -accessToken");

        console.log(user);
    
        if(!user)
        {
            return res.status(400).json({
                message: "User not found"
            })
        }
    
        req.user = user;
        
        next();
    } catch (error) {
        console.log("Invalid Access Token");
        return res.status(400).json({
            message: "Invalid Access Token"
        })
    }
}

export default verifyHandler;