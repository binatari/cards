//accessing all color pickers
const toggle = document.querySelectorAll(".item-color");
//accessing the image to be changed
const image = document.querySelector(".card-image");

//an object of the desired paths to the images
const loops = [
  {
    id: 1,
    url: "./images/iphone-8-gold.png",
    color:'gold'
  },
  {
    id: 2,
    url: "./images/iphone-8-black.png",
    color:'black'
  },
  {
    id: 3,
    url: "./images/iphone-8-red.png",
    color:'red'
  },
  {
    id: 4,
    url: "./images/iphone-8-white.png",
    color:'white'
  },
];

//loop through all the color picker elements and add an onclick event listener
toggle.forEach((item, i)=>{
    item.addEventListener("click", () => {
        //function loops through the loop object and changes the image based on the button clicked
        loops.forEach((loop)=>{
            if(loop.color === item.id){
                image.src = loop.url
            }
             
        })
    });
})

