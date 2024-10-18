import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken"

const StudentSchema = new mongoose.Schema({
    EnNumber: {
        type: String,
        require: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        require: true
    },
    name: {
        type: String,
        require: true

    },
    number: {
        type: String,
        require: true,
        unique: true
    },
    department: {
        type: String,
        require: true
    },
    tg_batch: {
        type: String,
        require: true
    },
    parentNumber: {
        type: String,
        require: true,
        unique: true
    },
    yearOfStudy: {
        type: String,
        require: true
    },
    role: {
        type: String,
        default: "student"
    },
    refreshToken: {
        type: String
    }
})

StudentSchema.methods.isPasswordCorrect = async function (password) {
    return await bcrypt.compare(password, this.password);
}

StudentSchema.methods.generateAccessToken = function () {
    return jwt.sign(
        {
            _id: this._id,
            EnNumber: this.EnNumber,
            email: this.email,
            role: this.role
        },
        process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn: process.env.EXPIRE_ACCESS_TOKEN
        }
    )
}

StudentSchema.methods.generateRefreshToken = function(){
    return jwt.sign(
        {
            _id: this._id,
            role: this.role
        },
        process.env.REFRESH_TOKEN_SECRET,
        {
            expiresIn: process.env.EXPIRE_REFRESH_TOKEN
        }
    )
}

const StudModel = mongoose.model('StudModel', StudentSchema);
export { StudModel };