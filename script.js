document.addEventListener('DOMContentLoaded',()=>{
  const toggle=document.querySelector('.nav-toggle');
  const nav=document.querySelector('.site-nav');
  if(toggle && nav){
    toggle.addEventListener('click',()=>{
      nav.style.display = nav.style.display === 'block' ? 'none' : 'block';
    });
    nav.querySelectorAll('a').forEach(link=>{
      link.addEventListener('click',()=>{
        if(window.innerWidth <= 768) nav.style.display = 'none';
      });
    });
  }

  const revealElements=document.querySelectorAll('[data-animate]');
  const observer=new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){
        entry.target.classList.add('animate-visible');
        observer.unobserve(entry.target);
      }
    });
  },{threshold:.2});
  revealElements.forEach(el=>observer.observe(el));
});