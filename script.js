function locoScroll(){
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});

// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}
locoScroll()

function cursorEffect(){
    var page1Content = document.querySelector("#page1-content")
    var cursor = document.querySelector("#cursor")

    page1Content.addEventListener("mousemove",function(dets){
        gsap.to(cursor,{
            x:dets.x,
            y:dets.y,
        })
    });

    page1Content.addEventListener("mouseenter",function(){
        gsap.to(cursor,{
            scale:1,
            opacity:1
        })
    })

    page1Content.addEventListener("mouseleave",function(){
        gsap.to(cursor,{
            scale:0,
            opacity:0
        })
    })  
}
cursorEffect()

function page1Animation(){
    gsap.from("#page1-content nav",{
        y:100,
        opacity:0,
        delay:0.3,
        duration:0.3,
        stagger:0.4,
    });
}
page1Animation()


function LineAnimation(){
    gsap.from(".elem2 h1",{
        y:120,
        stagger:0.2,
        opacity:0,
        duration:1,
        scrollTrigger:{
            trigger:"#page2",
            scroller:"#main",
            start:"top 49%",
            end:"top 47%",
            // markers:true,
            scrub:2
        }
    })
    gsap.from("#page6-bottom",{
        y:120,
        stagger:0.2,
        opacity:0,
        duration:1,
        scrollTrigger:{
            trigger:"#page6",
            scroller:"#main",
            start:"top 49%",
            end:"top 47%",
            // markers:true,
            scrub:2
        }
    })
    gsap.from(".elem1 h5",{
        y:120,
        stagger:0.1,
        opacity:0,
        duration:1,
        scrollTrigger:{
            trigger:"#page2",
            scroller:"#main",
            start:"top 47%",
            end:"top 46%",
            // markers:true,
            scrub:2
        }
    })
    gsap.to(".elem3",{
        width:"100%",
        duration:3,
        scrollTrigger:{
            trigger:"#page2",
            scroller:"#main",
            start:"top 46%",
            end:"top 47%",
            // markers:true,
            scrub:2
        }
    })
    
    gsap.from("#page3-top .box1",{
        x:120,
        opacity:0,
        duration:1,
        scrollTrigger:{
            trigger:"#page3",
            scroller:"#main",
            start:"top 67%",
            end:"top 66%",
            // markers:true,
            scrub:2
        }
    })
    gsap.from("#page3-top .box2",{
        x:120,
        opacity:0,
        duration:1,
        scrollTrigger:{
            trigger:"#page3",
            scroller:"#main",
            start:"top 67%",
            end:"top 66%",
            // markers:true,
            scrub:2
        }
    })
    gsap.from("#page3-top .box3",{
        x:120,
        stagger:0.1,
        opacity:0,
        duration:1,
        scrollTrigger:{
            trigger:"#page3",
            scroller:"#main",
            start:"top 67%",
            end:"top 66%",
            // markers:true,
            scrub:2
        }
    })
    
    gsap.from("#page3-mid",{
        opacity:0,
        scrollTrigger:{
            trigger:"#page3",
            scroller:"#main",
            start:"top 97%",
            stop:"top 96%",
            scrub:2
        }
    
    })
    gsap.from("#page3-elements",{
        y:120,
        scrollTrigger:{
            trigger:"#page3-mid",
            scroller:"#main",
            start:"top 97%",
            stop:"top 96%",
            scrub:2
        }
    })
    
    gsap.to(".elem4",{
        width:"100%",
        duration:2,
        scrollTrigger:{
            trigger:"#page4",
            scroller:"#main",
            start:"top 46%",
            end:"top 47%",
            // markers:true,
            scrub:2
        }
    })
    
    gsap.to(".elem5",{
        width:"100%",
        duration:2,
        scrollTrigger:{
            trigger:"#page6",
            scroller:"#main",
            start:"top 46%",
            end:"top 47%",
            scrub:2
        }
    })
    gsap.from(".page4-content",{
        y:120,
        opacity:0.9,
        scrollTrigger:{
            trigger:"#page4",
            scroller:"#main",
            start:"top 97%",
            stop:"top 96%",
            scrub:2
        }
    })
    
}
LineAnimation()

function sliderAnimation(){
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: true,
          },
      });
}
sliderAnimation()


var tl = gsap.timeline()

tl.from('#loader h3',{
    x:40,
    opacity:0,
    duration:1,
    stagger:0.1
})

tl.to('#loader h3',{
    x:-10,
    opacity:0,
    duration:1,
    stagger:0.1
})

tl.to('#loader',{
    opacity:0,
})
tl.from('#page1-content h1 span',{
    y:100,
    opacity:0,
    stagger:0.1,
    duration:0.5,
    delay:-0.5,
})

tl.to('#loader',{
    display:"none"
})


gsap.from('.wrap .top',{
    x:-100,
    opacity:0,
    stagger:0.1,
    duration:0.6,
    scrollTrigger:{
        trigger:"footer",
        scroller:"#main",
        scrub:2,
        start:'top 46%',
        end:"top 47%"
    }
})
gsap.from('.wrap .mid',{
    x:100,
    opacity:0,
    stagger:0.1,
    duration:0.6,
    scrollTrigger:{
        trigger:"footer",
        scroller:"#main",
        scrub:2,
        start:'top 46%',
        end:"top 47%"
    }
})


gsap.from('#footer-bottom h1 span',{
    y:-100,
    opacity:0,
    stagger:0.1,
    duration:0.6,
    scrollTrigger:{
        trigger:"footer",
        scroller:"#main",
        scrub:2,
        start:'top 46%',
        end:"top 47%"
    }
})


