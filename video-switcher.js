var render = function(video, node) {
  if (!node) return;
  node.innerHTML = typeof video === "function" ? video() : video;
};
var desktopVideo = "";
var mobileVideo = "";
var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
// A function that returns a video embed based on viewport width
var video = function() {
  if (w >= 500) {
    // Desktop Video
    video = desktopVideo;
  } else {
    // Mobile Video
    video = mobileVideo;
  }
  return video;
};
render(video, document.querySelector("#videoBox"));
