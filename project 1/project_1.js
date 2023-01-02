const mobile_nav_btn=document.querySelector('.mobile-nav-btn');
const nav_header=document.querySelector('.header');

const toggle_nav_btn=()=>{
              console.log("clicked");
              nav_header.classList.toggle("active");
};
mobile_nav_btn.addEventListener("click",()=>toggle_nav_btn());