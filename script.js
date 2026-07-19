
const menuButton=document.querySelector(".menu-button");
const drawer=document.querySelector(".drawer");
const backdrop=document.querySelector(".drawer-backdrop");
const closeButton=document.querySelector(".drawer-close");

function setMenu(open){
  drawer.classList.toggle("open",open);
  backdrop.classList.toggle("open",open);
  menuButton.setAttribute("aria-expanded",String(open));
  document.body.style.overflow=open?"hidden":"";
}

menuButton.addEventListener("click",()=>setMenu(!drawer.classList.contains("open")));
closeButton.addEventListener("click",()=>setMenu(false));
backdrop.addEventListener("click",()=>setMenu(false));
drawer.querySelectorAll("a").forEach(link=>link.addEventListener("click",()=>setMenu(false)));

const lightbox=document.querySelector(".lightbox");
const lightboxImage=lightbox.querySelector("img");
const lightboxCaption=lightbox.querySelector("p");

document.querySelectorAll(".gallery-item").forEach(item=>{
  item.addEventListener("click",()=>{
    lightboxImage.src=item.dataset.full;
    lightboxImage.alt=item.dataset.caption;
    lightboxCaption.textContent=item.dataset.caption;
    lightbox.showModal();
  });
});

lightbox.querySelector(".lightbox-close").addEventListener("click",()=>lightbox.close());
lightbox.addEventListener("click",event=>{
  if(event.target===lightbox) lightbox.close();
});
