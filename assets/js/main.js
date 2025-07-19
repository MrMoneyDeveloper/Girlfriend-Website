(function(){
  document.addEventListener('DOMContentLoaded', function(){
    // ---- Tilt effect ----
    document.querySelectorAll('[data-tilt]').forEach(function(el){
      var height = el.clientHeight;
      var width  = el.clientWidth;
      el.addEventListener('mousemove', function(ev){
        var x = (ev.offsetX - width/2) / width * 20;
        var y = (ev.offsetY - height/2) / height * -20;
        el.style.transform = 'rotateX(' + y + 'deg) rotateY(' + x + 'deg)';
      });
      el.addEventListener('mouseleave', function(){
        el.style.transform = '';
      });
    });

    // ---- Vanta Fog background ----
    if(window.VANTA && window.THREE){
      VANTA.FOG({
        el: '#vanta-bg',
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        highlightColor: 0xff00f0,
        lowlightColor: 0xff00af
      });
    }

    // ---- Anime.js & Textillate section animations ----
    var hasAnime = window.anime;
    var hasText = window.jQuery && jQuery.fn.textillate;
    if(hasAnime || hasText){
      document.querySelectorAll('section').forEach(function(sec){
        var observer = new IntersectionObserver(function(entries){
          entries.forEach(function(entry){
            if(entry.isIntersecting){
              var heading = entry.target.querySelector('h1, h2');
              var imgs = entry.target.querySelectorAll('img');
              var extras = entry.target.querySelectorAll('p, a.btn');
              var listItems = entry.target.querySelectorAll('li');
              if(heading){
                if(hasText){
                  $(heading).textillate({ in: { effect: 'fadeInDown' } });
                } else if(hasAnime){
                  anime({targets: heading, translateY:[-20,0], opacity:[0,1], duration:700, easing:'easeOutQuad'});
                }
              }
              if(imgs.length && hasAnime){
                anime({targets: imgs, scale:[0.8,1], opacity:[0,1], delay:200, duration:700, easing:'easeOutBack'});
              }
              if(listItems.length && hasAnime){
                anime({targets: listItems, translateY:[20,0], opacity:[0,1], delay:anime.stagger(100,{start:300}), duration:600, easing:'easeOutQuad'});
              }
              observer.unobserve(entry.target);
            }
          });
        }, {threshold:0.3});
        observer.observe(sec);
      });
    }

    // ---- Textillate hero text ----
    if(window.jQuery && jQuery.fn.textillate){
      $('.hero-title').textillate({ in: { effect: 'fadeInDown' } });
      $('.hero-tagline').textillate({ in: { effect: 'fadeInUp', delayScale: 1.5 } });
    }
  });
})();
