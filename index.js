var nav=document.getElementById("nav-bar");
var changeText=document.getElementById("change");
var bars=document.getElementById("bars");
var navigation=document.getElementById("navigation");
var viewBtn=document.getElementById("view");
var menuItems=document.getElementById("items");
var title=["SWEETNESS","CRISPINESS","FRESHNESS"];
var i=0;
var j=0;
var open=0;

// typewrting effect on homepage
function type(){
    if(i<title[j].length)
    {
        changeText.innerHTML+=title[j].charAt(i);
        i++;
        setTimeout(type,1000);
    } 
    else{
        changeText.innerHTML="";
        j++;
        i=0;
        setTimeout(type,2000);
    }
    if(j==3)
    {
        j=0;
        i=0;
    }
}
setTimeout(type,1000);

// setting the background of nav-bar after scroll
window.addEventListener("scroll",function(){
    nav.classList.toggle("show",window.scrollY > 0);
});


// working of view button in menu section
viewBtn.addEventListener("click",function(){
    if(viewBtn.innerHTML==="VIEW ALL")
    {
        menuItems.style.height="fit-content";
        viewBtn.innerHTML="VIEW LESS";
        console.log(viewBtn.innerHTML);
    }
    else
    {
        menuItems.style.height="265px";
        viewBtn.innerHTML="VIEW ALL";
        console.log(viewBtn.innerHTML);
    }
});

// navToggle effect for responsiveness
function toggleNav()
{
bars.addEventListener("click",function(){
    open++;
    if(open%2===0)
    {
        navigation.classList.remove("navShow");
        navigation.classList.add("navToggle");
    }
    else{
        navigation.classList.add("navShow");
        navigation.classList.remove("navToggle");
    }
});
}
navigation.addEventListener("click",function(){
    navigation.classList.add("navShow");
    navigation.classList.remove("navToggle");
});

toggleNav();
