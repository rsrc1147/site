var mainVideo = $('#whatWeDoVideo');
if ($(window).width() < 500) {
    mainVideo.append("<source type='video/mp4' src='img/what we do-tiny.mp4' />");
} else if ($(window).width() < 800){
  mainVideo.append("<source type='video/mp4' src='img/what we do-small.mp4' />");
}else{
    mainVideo.append("<source type='video/mp4' src='img/what we do.mp4' />");
}