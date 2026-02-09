// ORIGINAL FROM - https://codepen.io/wisearts/pen/ExZGrbZ?editors=0010
// saved to the GSAP account to avoid losing the resource, thanks Rachelle
/* Encoding is important!!!
//--------------------------------
// ffmpeg settings used:
//--------------------------------

ffmpeg -i input.mp4 -vf scale=960:-1 -movflags faststart -vcodec libx264 -crf 20 -g 1 -pix_fmt yuv420p output.mp4

// scale filtergraph optional
// ffmpeg docs: http://ffmpeg.org/ffmpeg.html

*/
gsap.registerPlugin(ScrollTrigger);

const coolVideo = document.querySelector("video");

let tl = gsap.timeline({
  scrollTrigger: {
    trigger: "video",
    start: "top top",
    end: "bottom+=200% bottom",
    scrub: 2,
    markers: true
  }
});

// wait until video metadata is loaded, so we can grab the proper duration before adding the onscroll animation. Might need to add a loader for loonng videos
coolVideo.onloadedmetadata = function () {
  tl.to(coolVideo, { currentTime: coolVideo.duration });
};

// Dealing with devices
function isTouchDevice() {
  return (
    "ontouchstart" in window ||
    navigator.maxTouchPoints > 0 ||
    navigator.msMaxTouchPoints > 0
  );
}
if (isTouchDevice()) {
  coolVideo.play();
  coolVideo.pause();
}
