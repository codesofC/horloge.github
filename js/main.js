/*========================Horloge==================*/
const heure=document.getElementById('clock_hour'),
      minute=document.getElementById('clock_minute'),
      seconde=document.getElementById('clock_second');

const horloge = ()=>{
    let date=new Date();
    let hh=date.getHours() * 30,
        mm=date.getMinutes() * 6,
        ss=date.getSeconds() * 6;
    heure.style.transform= 'rotateZ('+ (hh+mm/12) +'deg)';
    minute.style.transform='rotateZ('+ mm +'deg)';
    seconde.style.transform='rotateZ('+ ss +'deg)';
}
setInterval(horloge, 1000);

/*=======================Affichage=================*/
const text_heure=document.getElementById('text_hour'),
      text_minute=document.getElementById('text_minute'),
      text_am=document.getElementById('text_ampm');
const jour=document.getElementById('date_day'),
      mois=document.getElementById('date_month'),
      annee=document.getElementById('date_year');

const textHorloge=()=>{
    let txtDate=new Date();
    let h=txtDate.getHours(),
        m=txtDate.getMinutes();
    // let j=txtDate.getDate(),
    //     mo=txtDate.getMonth(),
    //     a=txtDate.getFullYear();
    if(h==0)
        h=12; 
        
   if(h<10){
        text_am.innerHTML='AM';
        text_heure.innerHTML='0'+h;
   }
    else{
        text_am.innerHTML='PM';
        h=h-12;
        text_heure.innerHTML=''+h;
    }
     
    
    if(m<10)
        text_minute.innerHTML=' 0'+m;
    else
        text_minute.innerHTML=' '+m;

    let moisTab=['Jan','Fev', 'Mar', 'Avr', 'Mai', 'Juin', 'Juil',
                'Aout', 'Sept', 'Oct', 'Nov', 'Dec'];   
        
    jour.innerHTML=''+txtDate.getDate();
    mois.innerHTML=' '+moisTab[txtDate.getMonth()];
    annee.innerHTML=' '+txtDate.getFullYear();
}
setInterval(textHorloge, 1000);

//===============================Dark/Light mode=========================
const themeButton = document.getElementById('theme_button');
const darkTheme = 'dark_theme';
const iconTheme = 'uil-sun';

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme');
const selectedIcon = localStorage.getItem('selected-icon');

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light';
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun';

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme);
  themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](iconTheme);
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme);
    themeButton.classList.toggle(iconTheme);
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme());
    localStorage.setItem('selected-icon', getCurrentIcon());
});