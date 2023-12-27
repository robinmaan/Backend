const asyncHandler = (requestHandler)=>{
    (req,res,next) => {
        Promise.requestHandler(req,res,next).catch((err)=>{next(err)})
    }
}



export {asyncHandler} 


// try and catch wrapper

// const asyncHandler = (fn) => async(req,res,next) => {
//     try {
//         await fn(req,res,next)
//     } catch (error) {
//         res.status(err.code || 500).json({
//             success: true,
//             message:err.message  
//         })
//     }
// }