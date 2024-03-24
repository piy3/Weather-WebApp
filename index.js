

let searchbar = document.querySelector('.inp');
let searchicon = document.querySelector('i');
let b2 = document.querySelectorAll('.b2');
let searchkbox = document.querySelector('.f');

let loca = "Gorakhpur";
 
let searchfor = document.querySelector('.xyz');

searchicon.addEventListener("click",function(){
  loca = searchbar.value;
  searchfor.innerHTML =  loca.toUpperCase();
  searchfor.style.fontSize = "16px";
  

    showdetails();  
  })
  
  searchkbox.addEventListener("submit",(e)=>{
    e.preventDefault();
    loca = searchbar.value;
    searchfor.innerHTML = loca.toUpperCase();
    searchfor.style.fontSize = "16px";
    
    showdetails();

  })
  
// }

// clickhere();
let currtemp;
const API_KEY="d1845658f92b31c64bd94f06f7188c9c";

async function showdetails(){
  // loca = searchbar.value;
  // console.log(loca);
  

  
  try{
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${loca}&appid=${API_KEY}`);

    let data = await response.json();
    console.log(data);
    currtemp = data.main.temp-273;
    console.log(currtemp)
    b2[0].style.fontSize = "30px"
   
    b2[0].innerHTML = Math.floor(currtemp)+'<i class="fa-solid fa-circle-dot fa-2xs" style="font-size:10px; position:relative; top:-10px;"></i>'+'C';
    b2[1].innerHTML = data.main.humidity+'%';
    b2[1].style.fontSize="30px";
    b2[2].innerHTML = data.wind.speed+'m/s';
    b2[2].style.fontSize="30px";
   
  }
  catch(e){
    
    alert("Enter valid city");
    searchbar.value ="";
    searchfor.innerHTML = ""; 
  }
  }
  

  //dealing with your current location
  let content = document.querySelector('.content');
  let lat;
  let lon;
  
  //  try{
    navigator.geolocation.getCurrentPosition((position) => {
    lat  = position.coords.latitude;
    lon = position.coords.longitude;
    console.log(lat);
    console.log(lon);
    showweather();
  },(error)=>{
    content.innerHTML = "Please Allow Access to Your Location to get your current weather here."
    content.style.color = "white";

  });
  //  }

    
  
let print_loc  = document.querySelector('span')  ;
let y_div = document.querySelectorAll('.val');

  let API_key = '1193fefae6b4a3a88882fc7cab6994cc';
  async function showweather(){
    // await coordinates();
    let info = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_key}` )
    let data= await info.json();  
    console.log(data);
    print_loc.innerHTML = data.name;
    y_div[0].innerHTML = Math.floor(data.main.temp-273.15)+'<i class="fa-solid fa-circle-dot fa-2xs" style="font-size:10px; position:relative; top:-10px;"></i>'+'C';
    y_div[0].style.fontSize = "30px";

    y_div[1].innerHTML = data.main.humidity+'%';
    y_div[1].style.fontSize = "30px";

    y_div[2].innerHTML = data.wind.speed+'m/s'
    y_div[2].style.fontSize = "30px";

  }



 



 
