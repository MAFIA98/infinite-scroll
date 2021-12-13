const imgContainer = document.getElementById('image-container');
const loader = document.getElementById('loader');

let photoArray = [] ;

//create element for links,photo add to DOM
function displayPhoto(){
    //run function forEach
    photoArray.forEach((photo) => {
        //create <a> to link unsplash
        const item = document.createElement('a');
        item.setAttribute('href',photo.links.html);
        item.setAttribute('target','_blank');
        //create img for photo 
        const img = document.createElement('img');
        img.setAttribute('src',photo.urls.regular);
        img.setAttribute('atl',photo.alt_description);
        img.setAttribute('title',photo.alt_description);
        //put <img> inside <a>,then put both inside imgContanier
        item.appendChild(img);
        imgContainer.appendChild(item); 
    });
}
//Unsplash API
const count = 10;
const apiKey = `3kSVx2dKk9nm4g02HwsCEToXUiHDb4RuUtxPXYAKiho`;
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

//get photo from unsplash api
async function getPhoto() {
     try{
         const response = await fetch(apiUrl);
         photoArray = await response.json();
         displayPhoto();
     }catch(error){
          //to catch errors
     }
}
//on Load
getPhoto();