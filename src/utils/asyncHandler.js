const asyncHadler = (requestHandler) => {
    (req,res,next)=>{
        Promise.resolve(requestHandler(req,res,next)).catch((err) => next (err)) 
    }
}

export {asyncHadler}


5
// const asyncHadler = (fn) => async (req,res,next) => {
//     try {
//         await fn(req,res,next)
//     } catch (error) {
//         res.status(err.code || 500).json ({
//             success: false,
//             message: err.message
//         })
//     }
// }

