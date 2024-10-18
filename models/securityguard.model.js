import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const SecurityGuardSchema = new mongoose.Schema({
    email: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    role: {
        type: String,
        default: "securityguard"
    },
    refreshToken: {
        type: String
    }
});

SecurityGuardSchema.methods.isPasswordCorrect = async function (password) { 
    return await bcrypt.compare(password, this.password);
}

SecurityGuardSchema.methods.generateAccessToken = function () {
    return jwt.sign(
        {
            _id: this._id,
            email: this.email
        },
        process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn: process.env.EXPIRE_ACCESS_TOKEN
        }
    )
}   

SecurityGuardSchema.methods.generateRefreshToken = function(){
    return jwt.sign(
        {
            _id: this._id
        },
        process.env.REFRESH_TOKEN_SECRET,
        {
            expiresIn: process.env.EXPIRE_REFRESH_TOKEN
        }
    )
}   

const SecurityGuardModel = mongoose.model('SecurityGuardModel', SecurityGuardSchema);
export { SecurityGuardModel };

   

