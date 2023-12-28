const asyncHandler = (requestHandler)=>{
    return (req,res,next) => {
        Promise.resolve(requestHandler(req,res,)).catch((err)=>{next(err)})
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