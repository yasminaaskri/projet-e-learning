let sideBar = document.querySelector('.side-bar'); // pour le bouton menu 

document.querySelector('#menu-btn').onclick = () =>{
   sideBar.classList.toggle('active');
   body.classList.toggle('active');}
  
   document.querySelector('#close-btn').onclick = () =>{ // pour le bouton close dans le side-bar
      sideBar.classList.remove('active');
      body.classList.remove('active');
   }
   
  
  
 let profile = document.querySelector('.header .letop .profile');//pour le bouton de profil dans le header

document.querySelector('#user-btn').onclick = () =>{
   profile.classList.toggle('active');
   search.classList.remove('active');
}
let toggleBtn = document.getElementById('toggle-btn');
let body = document.body;
let darkMode = localStorage.getItem('dark-mode');

const enableDarkMode = () =>{
   toggleBtn.classList.replace('fa-sun', 'fa-moon');
   body.classList.add('dark');
   localStorage.setItem('dark-mode', 'enabled');
}

const disableDarkMode = () =>{
   toggleBtn.classList.replace('fa-moon', 'fa-sun');
   body.classList.remove('dark');
   localStorage.setItem('dark-mode', 'disabled');
}

if(darkMode === 'enabled'){
   enableDarkMode();
}

toggleBtn.onclick = (e) =>{
   darkMode = localStorage.getItem('dark-mode');
   if(darkMode === 'disabled'){
      enableDarkMode();
   }else{
      disableDarkMode();
   }
}


 
 let search = document.querySelector('.header .letop .search-form');

 document.querySelector('#search-btn').onclick = () =>{
    search.classList.toggle('active');
    profile.classList.remove('active');
 }