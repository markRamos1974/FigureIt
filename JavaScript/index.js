const menus = document.querySelectorAll(".menu")
const navigation = document.querySelector(".navigation-container")

let activeMenu = 0;
for(let i = 0; i < menus.length; i++){
    menus[i].style.transform = "translateY(1000px)"
    menus[i].style.transition = "all 600ms ease-out"
    menus[i].style.opacity = "0"
    
    if (window.innerWidth <= 920){
        if (activeMenu == i) {
            menus[i].style.color = "#978269"
            menus[i].style.fontSize = "2.8125em"
            
        }
        else {
            menus[i].style.color = "#A9A9A9"
            menus[i].style.fontSize = "1.5625em"
        }
    }
    else {
        if (activeMenu == i) {
            menus[i].style.color = "#978269"
            menus[i].style.fontSize = "9.375em"
            
        }
        else {
            menus[i].style.color = "#A9A9A9"
            menus[i].style.fontSize = "5em"
        }
    }
   



    menus[i].addEventListener("mouseover", () => {
        if (window.innerWidth <= 920){
            if(activeMenu == i){
                menus[i].style.color = "#978269"
                menus[i].style.fontSize = "2.8125em"
                activeMenu = i
            }
            else{
                menus[i].style.color = "#978269"
                menus[i].style.fontSize = "2.8125em "
        
                menus[activeMenu].style.color = "#A9A9A9"
                menus[activeMenu].style.fontSize = "1.5625em"
                activeMenu = i
            }   
        }

        else {
            if(activeMenu == i){
                menus[i].style.color = "#978269"
                menus[i].style.fontSize = "9.375em"
                activeMenu = i
            }
            else{
                menus[i].style.color = "#978269"
                menus[i].style.fontSize = "9.375em"
        
                menus[activeMenu].style.color = "#A9A9A9"
                menus[activeMenu].style.fontSize = "5em"
                activeMenu = i
            }   
        }
            
    })

    window.addEventListener("resize", () => {
        console.log(true)
        if (window.innerWidth <= 920){
            if(activeMenu == i){
                menus[i].style.color = "#978269"
                menus[i].style.fontSize = "2.8125em "
                activeMenu = i
            }
            else{
                menus[i].style.color = "#978269"
                menus[i].style.fontSize = "2.8125em "
        
                menus[activeMenu].style.color = "#A9A9A9"
                menus[activeMenu].style.fontSize = "1.5625em"
                activeMenu = i
            }   
        }  
        
        else{
            if(activeMenu == i){
                menus[i].style.color = "#978269"
                menus[i].style.fontSize = "9.375em"
                activeMenu = i
            }
            else{
                menus[i].style.color = "#978269"
                menus[i].style.fontSize = "9.375em"
        
                menus[activeMenu].style.color = "#A9A9A9"
                menus[activeMenu].style.fontSize = "5em"
                activeMenu = i
            }   
        }
    }, true)
}

let delay = 1000
let currentList = 0
setTimeout(() => {
    setInterval(() => {
        if (currentList < menus.length){
           
            menus[currentList].style.transform = "translateY(0px)"
            menus[currentList].style.opacity = "1"
            currentList++
        }
        else{
            clearInterval()
        }

    }, 100)
}, 3500)
   
setTimeout(() => {
    
    for(let i = 0; i < menus.length; i++){
        menus[i].style.transition = "all 300ms ease-out"
    }
}, 4100)
