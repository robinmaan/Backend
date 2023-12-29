import { asyncHandler } from "../utils/asyncHandler.js";
import { APiError } from "../utils/APiError.js";
import { User } from "../models/user.model.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";
import { ApiResponse } from "../utils/ApiResponse.js";

const registerUser = asyncHandler( async (req,res)=>{
    
  //get user detail
    const {fullName,email,password,userName} = req.body
    console.log("email:",email);


     //Validation - any input value is not empty
    if(
        [fullName,email,password,userName].some((field)=>
        field?.trim() === ""
        )
    ){
        throw new APiError(400,"All feilds are required")
    }

    //check if user is already logged in
   const UserExisted = User.find({
    $or:[{userName},{email}]
 })
   if(UserExisted){
    throw new APiError(409,"User already existed")
   }

   //uploading avatar image
   const avatarLocalPath = req.field?.avatar[0]?.path
   const coverImageLocalPath = req.field?.coverImage[0]?.path
  
    //check for images and check for avatar images
   if(!avatarLocalPath){
    throw new APiError(400,"avatar image not found")
   }

    //upload them to cloudinary
 const avatar = await uploadOnCloudinary(avatarLocalPath)
 const coverImage = await uploadOnCloudinary(coverImageLocalPath)

 // check for avatar has uploaded successfully
 if(!avatar){
  throw new APiError(400,"avatar image not found")
 }

    const userDetail = await User.create({
      fullName,
      avatar:avatar.url,
      coverImage:coverImage.url || "",
      email,
      username:username.TolowerCase()
    })
     //removing the password fron the response object
    const createdUser = await User.findById(userDetail._id).select(
      "-password -refreshToken"
    )
    //check for user creation
    if(!createdUser){
      throw new APiError(500,"User not found")
    }

    return res.status(201).json(
      new ApiResponse(200,createdUser,"User register successfully")
    )
})

 
 


    //create user object  - create entry in db
    // remove the password and refresh toke form response
    // finally check response status

export {registerUser}