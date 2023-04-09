const show_hide_navbar = () => {
    document.body.classList.toggle("separate-content")
    let icon = scroll_btn.querySelector(".fa")
    if(icon.classList.contains("fa-greater-than")){
        icon.className = icon.className.replace("fa-greater-than","fa-less-than")
    }else{
        icon.className = icon.className.replace("fa-less-than","fa-greater-than")
    }
}
const scroll_btn = document.querySelector(".scroll-btn")
scroll_btn.addEventListener("click",show_hide_navbar)


const tablinks = document.querySelectorAll(".tablinks")
tablinks.forEach(item => {
    item.addEventListener(
    "click",
        function(event){
            let tabcontent = document.querySelectorAll(".tabcontent")
            let tablinks = document.querySelectorAll(".tablinks")
            tabcontent.forEach(item => {
                item.style.display = "none"
            })
            tablinks.forEach(item => {
                item.className = item.className.replace(" active","")
            })
            document.getElementById(event.target.innerText.toLowerCase()).style.display = "block"
            event.target.className += " active"
            document.querySelector(".default-page").style.display = "none"
        }
    )
})