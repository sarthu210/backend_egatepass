import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const ParentSchema = new mongoose.Schema({
    email: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    name: {
        type: String,
        require: true
    },
    EnNumber: {
        type: String,
        require: true
    },
    number: {
        type: String,
        require: true
    },
    address: {
        type: String,
        require: true
    },
    role: {
        type: String,
        default: "parent"
    },
    refreshToken: {
        type: String
    }
});

ParentSchema.methods.isPasswordCorrect = async function (password) {
    return await bcrypt.compare(password, this.password);
}

ParentSchema.methods.generateAccessToken = function () {
    return jwt.sign(
        {
            _id: this._id,
            EnNumber: this.EnNumber,
            email: this.email
        },
        process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn: process.env.EXPIRE_ACCESS_TOKEN
        }
    )
}

ParentSchema.methods.generateRefreshToken = function(){
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

const ParentModel = mongoose.model('ParentModel', ParentSchema);
export { ParentModel };


