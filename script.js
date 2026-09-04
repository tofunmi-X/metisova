const progress=document.getElementById('progress');
window.addEventListener('scroll',()=>{const h=document.documentElement.scrollHeight-window.innerHeight;progress.style.width=(window.scrollY/h*100)+'%';document.getElementById('nav').classList.toggle('scrolled',window.scrollY>40)});
const divisions=document.querySelectorAll('.division');
divisions.forEach(d=>d.addEventListener('mouseenter',()=>{divisions.forEach(x=>x.classList.remove('active'));d.classList.add('active')}));
const pins=document.querySelectorAll('.pin');pins.forEach((p,i)=>p.addEventListener('click',()=>{p.animate([{transform:'scale(1)'},{transform:'scale(1.8)'},{transform:'scale(1)'}],{duration:500});}));
const menu=document.getElementById('menu');
menu?.addEventListener('click',()=>{document.querySelector('.nav-links').classList.toggle('open')});
// Subtle pointer parallax for the hero, disabled on touch devices.
if(matchMedia('(pointer:fine)').matches){const hero=document.querySelector('.hero');hero.addEventListener('pointermove',e=>{const x=(e.clientX/innerWidth-.5),y=(e.clientY/innerHeight-.5);document.querySelector('.orb-a').style.transform=`translate(${x*-20}px,${y*-15}px)`;document.querySelector('.hero-lines').style.transform=`translate(${x*12}px,${y*12}px)`});hero.addEventListener('pointerleave',()=>{document.querySelector('.orb-a').style.transform='';document.querySelector('.hero-lines').style.transform=''})}
