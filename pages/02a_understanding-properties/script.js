import {gsap} from "gsap";
gsap.to('.box',{
    
        opacity: 1,
        rotation: 360,
        background: '#ff6f61', 
        borderRadius: '50%',
        scale: 1.5,
        duration:2,
        
        ease:'bounce',
        // yoyo: true,
        //  repeat: -1,
        repeatDelay: 1,
        // paused: true,
        stagger:{
            amount: 0.5,
            from: "start",
            grid: "auto",
            ease: "power1.inOut"
        }

    })

