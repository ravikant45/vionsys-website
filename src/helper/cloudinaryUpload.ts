import cloudinary from "./cloudinary";


export type CloudinaryUploadResult = {
    secure_url: string;
    public_id: string;
}


const cloudinaryUpload = async (
    buffer: Buffer,
    folder: string
): Promise<CloudinaryUploadResult> => {
    return new Promise<CloudinaryUploadResult>((resolve, reject) => {
        const uploadStream = cloudinary.uploader.upload_stream(
            {
                resource_type: "auto",
                folder: folder,
            },
            (error, result) => {
                if (error) {
                    return reject("Error while uploading image to Cloudinary");
                }
                resolve(result as CloudinaryUploadResult);
            }
        );
        uploadStream.end(buffer);
    });
};

export default cloudinaryUpload;