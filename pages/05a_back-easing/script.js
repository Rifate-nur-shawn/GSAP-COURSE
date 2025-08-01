import gsap from 'gsap';
const tabs = document.querySelectorAll('.tab');
const indicator = document.querySelector('.indicator');
const tabRow = document.querySelector('.tab-row');

const updateindicator = (target)=>{
    const tabBounds = target.getBoundingClientRect();
    const rowBounds = tabRow.getBoundingClientRect();
    const width = tabBounds.width;
    const offset = tabBounds.left - rowBounds.left;
    gsap.to(indicator,{
        x: offset,
        width: width,
        duration: 0.4,
        ease: 'back.out(1.7)',
    })
}
tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        tabs.forEach(t => t.classList.remove('active'));
       tab.classList.add('active');
        updateindicator(tab);
    })
    
})
updateindicator(document.querySelector('.tab.active'));