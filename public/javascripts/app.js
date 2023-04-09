//display menu dropdown
const dropdown = document.querySelector('#dropdown');
function displayDropdown(){
    dropdown.style.display = 'block';
}
function removeDropdown(){
    dropdown.style.display = 'none';
}
//responsive navbar
let icon = document.querySelector('.menu-icon');
let menu = document.querySelector('.menu-list');
icon.addEventListener('click', () =>{
    menu.classList.toggle('is-active');
    icon.classList.toggle('fa-bars');
    icon.classList.toggle('fa-times');
});
document.addEventListener('click', function(e) {
    if(!menu.contains(e.target)&&!e.target.matches('.menu-icon')){
        menu.classList.remove('is-active');
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    }
})
//slider
const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');
const slider = document.querySelector('.slider');
let index = 0;
nextBtn.addEventListener('click', nextImg);
prevBtn.addEventListener('click', prevImg);
function nextImg(e){
    index++;
    if(index>2){
        index = 0;
        slider.style.transform = "translateX(0)";
    }else{
        slider.style.transform=`translateX(-${index}00%)`;
    }
    // console.log(index)

}
function prevImg(e){
    index--;
    if(index<0){
        index = 2;
        slider.style.transform = `translateX(-200%)`;
        
    }else{
        slider.style.transform=`translateX(-${index}00%)`;
    }
    // console.log(index)
}
setInterval(nextImg, 4000);

//Tab content
function tabContent(e, tab) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabcontent.length; i++) {
        console.log(tabcontent[i]);
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tab-item");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById('tab-main').style.display = "none";
    document.getElementById(tab).style.display = "block";
    e.currentTarget.className += " active";
}
