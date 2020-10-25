const imagePreview = document.querySelector('#img-preview');
const imageUploader = document.querySelector('#img-uploader');

const cloudinary_url = 'https://api.cloudinary.com/v1_1/dbo3qnf6v/image/upload';
const cloudinary_preset = 't27scigf';

imageUploader.addEventListener('change', async (e) =>{

    const archivo = e.target.files[0];
    
    const formData = new FormData();
    formData.append('file',archivo);
    formData.append('upload_preset',cloudinary_preset);
    
    const resultado = await axios.post(cloudinary_url, formData, {
        headers: {
            'Content-Type': 'multipart/form-data'
            

        }

    });
   
    console.log(resultado);
    imagePreview.src= resultado.data.secure_url;
});