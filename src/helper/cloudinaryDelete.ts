import cloudinary from "./cloudinary";


const cloudinaryDelete = async (url: string) => {
    try {
        if (!url) {
            throw new Error("Empty url to delete the data from cloudinary!!");
        }

        const parts = url?.split("/");
        const filename = parts?.pop();

        if (!filename) {
            throw new Error("Invalid url format!!");
        }

        const filenameParts = filename.split(".");
        if (filenameParts.length < 2) {
            throw new Error("Invalid filename format");
        }
        const publicId = parts.pop() + "/" + filenameParts.slice(0, -1).join(".");

        if (!publicId) {
            throw new Error("Invalid publicId format");
        }

        const response = await cloudinary.uploader.destroy(publicId);
        if (!response) throw new Error("Not able to delete the assets");
        return response;
    } catch (error) {
        throw new Error("Error in deleting the assets");
    }
};

export default cloudinaryDelete;