//Unsplash API
const count = 10;
const apiKey = `3kSVx2dKk9nm4g02HwsCEToXUiHDb4RuUtxPXYAKiho`;
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

//get photo from unsplash api
async function getPhoto() {
     try{
         const response = await fetch(apiUrl);
         const data = await response.json();
         console.log(data);
     }catch(error){

     }
}
//on Load
getPhoto();