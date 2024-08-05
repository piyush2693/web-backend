// import { v2 as cloudinary } from 'cloudinary';

// (async function() {

//     // Configuration
//     cloudinary.config({
//         cloud_name: 'web-backend',
//         api_key: '179477373698935',
//         api_secret: '<your_api_secret>' // Click 'View Credentials' below to copy your API secret
//     });

import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const uploadOnCloudinary = async (localfilePath) =>{
    try {
        if( !localfilePath ) return null;

        //upload the file on cloudinary
        const response = await cloudinary.uploader.upload(localfilePath,{
            resource_type: "auto"
        });

        // file has been uploaded successfull
        // consloe.log("file is uploaded on cloudinary", response.url)

        fs.unlinkSync(localfilePath);
        return response;
    } catch (error) {
        // remove the locally saved temporary file as the upload operation got failed.
        fs.unlinkSync(localfilePath);
        return null;
    }
}


export {uploadOnCloudinary}