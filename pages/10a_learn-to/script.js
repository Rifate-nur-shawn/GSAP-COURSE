import gsap from "gsap";
const showToastLoop =()=>{
    gsap.to(".toast", {
        y:-125,
        opacity: 1,
        scale:1,
        duration: 0.5,
        ease: "power4.out",
        onComplete:()=>{
            gsap.to(".toast", {
               y:0,
               opacity: 0,
                scale:0.95,
                duration: 0.7,
                ease: "power4.in",
                onComplete:()=>{
                    setTimeout(showToastLoop,2500)
                }
            });
        }
    })
}
showToastLoop()