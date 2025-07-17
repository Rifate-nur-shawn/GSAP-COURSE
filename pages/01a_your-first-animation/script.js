import { gsap } from 'gsap';
gsap.to('.card',{
    x:-100,
    y:100,
    yoyo: true,
    opacity: 1,
    scale: 0.5,
    duration:1,
    onComplete:() => {
        gsap.to('.card',{
            x:100 ,
            y:-100,
            repeat:-1,
            yoyo: true,
            duration: 1,
            opacity: 1,
            

    })
}
})
