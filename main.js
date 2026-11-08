const b=document.querySelector('.burger'),n=document.querySelector('nav');
if(b){b.addEventListener('click',()=>{const o=n.classList.toggle('open');b.setAttribute('aria-expanded',o)})}
const f=document.getElementById('book');
if(f){f.addEventListener('submit',e=>{
  e.preventDefault();
  const d=new FormData(f);
  const t=`Здравствуйте! Хочу записаться в Брэдфорд.\nУслуга: ${d.get('service')}\nУдобное время: ${d.get('when')||'—'}\nИмя: ${d.get('name')}`;
  window.open('https://wa.me/375291530103?text='+encodeURIComponent(t),'_blank');
})}

// плавное появление элементов при прокрутке
(()=>{
  if(!('IntersectionObserver' in window)||matchMedia('(prefers-reduced-motion: reduce)').matches)return;
  const sel='main section:not(.hero) h2, main section:not(.hero) .lead, main section h1, .group, .photo, .item, .facts>div, .note, .map, .cards>div, .row, .rating';
  const els=[...document.querySelectorAll(sel)].filter(e=>!e.closest('.hero'));
  const io=new IntersectionObserver((entries)=>{
    entries.forEach(en=>{if(en.isIntersecting){en.target.classList.add('in');io.unobserve(en.target)}});
  },{threshold:.12,rootMargin:'0px 0px -6% 0px'});
  els.forEach(e=>{
    e.classList.add('reveal');
    const sibs=[...e.parentElement.children].filter(c=>c.classList.contains('reveal')||els.includes(c));
    const i=sibs.indexOf(e);
    if(i>0)e.style.transitionDelay=Math.min(i,4)*.12+'s';
    io.observe(e);
  });
})();
