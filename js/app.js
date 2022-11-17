let button  = document.querySelector('#button')


window.addEventListener('scroll' , function(e){
    let top =  document.documentElement.scrollTop
    console.log(top);
    if(top > 800){
        button.classList.add("show")
    } else{
        button.classList.remove("show")
    }
})

