import mongoose ,{Schema} from "mongoose";
import { Jwt } from "jsonwebtoken";
import bcrypt from "bcrypt";

const userSchema = new Schema(
    {
        userName:{
            type:'string',
            required:true,
            unique:true,
            lowercase:true,
            trim:true,
            index:true,
        },
        email:{
            type:'string',
            required:true,
            unique:true,
            lowercase:true,
            trim:true,    
        },
        fullName:{
            type:'string',
            required:true,
            trim:true,
            index:true,
        },
        avatar:{
            type:'string',
            required:true,
        },
        coverImage:{
            type:'string',
        },
        watchHistory:[
            {
                type:Schema.Types.ObjectId,
                ref:"Video"
            }
        ],
        password:{
            type:'string',
            required:true,
        },
        refreshToken:{
            type:'string',

        }

    },
    {
        timestamps:true
    }
    
    )

// bcrypt the password
userSchema.pre("save", async function(next){
    if(!this.isModified("password")) return next()
    this.password =  bcrypt.hash(this.password,10)
    next()

})

// validate the password we write or the password is bcrypt generated

userSchema.methods.isPasswordCorrect = async function(password){
   return await bcrypt.compare(password, this.password) 
    // return true/false
}
// jwt token generated
userSchema.methods.generatedAccesstoken = function(){
  return  jwt.sign(
        {
            _id: this._id,
            email:this.email,
            fullName: this.fullName,
            userName:this.userName
        },
         process.env.ACCESS_TOKEN_SECRET,
         {
            expiresIn: process.env.ACCESS_TOKEN_EXPIRY,
         }
    )
}
userSchema.methods.generateRefreshToken = function(){
   return  jwt.sign(
        {
            _id: this._id,
            
        },
         process.env.ACCESS_TOKEN_SECRET,
         {
            expiresIn: process.env.ACCESS_TOKEN_EXPIRY,
         }
    )
}
    export const User = mongoose.model('User', userSchema)