// gsap.from(".box",{
//           x:300,
//           duration:2,
//           deley:2,
//           backgroundColor:"red",
//           rotate:360,
//           borderRadius:50,
//           scale:0.5,
//            yoyo:true,
//            repeat:-1,
// })


// gsap.from(".box",{
//          scale:0,
//          rotate:360,
//          duration:2,
//          scrollTrigger:{
//           trigger:'.box',
//           scroller:'body',
//           scrub:true,
//          }
        
// })


// gsap.from(".page3 #box",{
//           scale:0,
//           rotate:360,
//           duration:2,
//           markers:true,
//           scrollTrigger:{
//            trigger:'.page3 #box',
//            scroller:'body',
//            scrub:true,
//           }
         
//  })


//  var main = document.querySelector(".main")
//  var scroll = new LocomotiveScroll({
//         el:main,
//         smooth:true,
//  })



 const scroll = new LocomotiveScroll({
          el: document.querySelector("[data-scroll-container]"),
          smooth: true
        });
        
        scroll.on("scroll", () => {
          console.log("Locomotive Scroll is working!");
        });