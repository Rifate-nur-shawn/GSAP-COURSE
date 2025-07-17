import { gsap } from "gsap";

const play = document.querySelector(".play");
const pause = document.querySelector(".pause");
const reverse = document.querySelector(".reverse");
const restart = document.querySelector(".restart");
const repeat = document.querySelector(".repeat");
const resume = document.querySelector(".resume");
const kill = document.querySelector(".kill");
const yoyo = document.querySelector(".yoyo");

const animation = gsap.to(".box", {
  opacity: 1,
  rotation: 360,
  borderRadius: "50%",
  scale: 1.25,
  duration: 2,
});

play.addEventListener("click", () => {
  animation.play();
});
pause.addEventListener("click", () => {
  animation.pause();
});
reverse.addEventListener("click", () => {
  animation.reverse();
});
restart.addEventListener("click", () => {
  animation.restart();
});
repeat.addEventListener("click", () => {
  animation.repeat(2);
});
resume.addEventListener("click", () => {
  animation.resume();
});
kill.addEventListener("click", () => {
  animation.kill();
});
yoyo.addEventListener("click", () => {
  animation.yoyo(true);
});
