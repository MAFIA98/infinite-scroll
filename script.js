const imgContainer = document.getElementById('image-container');
const loader = document.getElementById('loader');

let photoArray = [] ;

let ready = false;
let imagesloaded = 0;
let totalImages = 0;

//Unsplash API
const count = 15;
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

//create element for links,photo add to DOM
function displayPhoto(){
    imagesloaded = 0;
    totalImages = photoArray.length;
    //run function forEach
    photoArray.forEach((photo) => {
        //create <a> to link unsplash
        const item = document.createElement('a');
        // item.setAttribute('href',photo.links.html);
        // item.setAttribute('target','_blank');
        setAttributes(item ,{
          href:photo.links.html,
          target:'_blank'
        });
        //create img for photo 
        const img = document.createElement('img');
        // img.setAttribute('src',photo.urls.regular);
        // img.setAttribute('atl',photo.alt_description);
        // img.setAttribute('title',photo.alt_description);
        setAttributes(img ,{
            src:photo.urls.regular,
            atl:photo.urls.regular,
            title:photo.urls.regular
        });
        //Event Listener ,check when each is finshed loading
        img.addEventListener('load', imageLoaded);
        //put <img> inside <a>,then put both inside imgContanier
        item.appendChild(img);
        imgContainer.appendChild(item); 
        loader.hidden = false;
    });
}

//add Healper Function
function setAttributes(element, atributes) {
    for(const key in atributes){
        element.setAttribute(key ,atributes[key]);
    }

}
// add addEventListener Scroll
window.addEventListener('scroll' ,(e) =>{
    if(window.innerHeight + window.scrollY >= document.body.offsetHeight - 1000 && ready){
        ready = false;
        getPhoto();
    }
});
//check if all image are loaded
function imageLoaded() {
   imagesloaded++;
   if(imagesloaded === totalImages) {
   ready = true;
   loader.hidden = true;
   }
}

//on Load
getPhoto();