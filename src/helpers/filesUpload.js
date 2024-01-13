
export const fileUpload = async( file ) => {
    
    if (!file) throw new Error("Files to upload don't exist!");
    const cloudURL = 'https://api.cloudinary.com/v1_1/dgtp56wvw/upload';

    // Create a form Obj... to send with images files later to the backend(Cloudinary)
    const formData = new FormData();
    formData.append('upload_preset','react-Journal');
    formData.append('file', file);

    try {
        const resp = await fetch( cloudURL, {
            method: 'POST',
            body: formData,
        });
        if (!resp.ok) throw new Error("Can not upload the image(s) file(s)");

        const cloudResp = await resp.json();
        return cloudResp.secure_url;

    } catch (error) {
        throw new Error( error.message )
    }
}