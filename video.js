var myvid = document.getElementById('myvid');
var video = document.getElementById('video');
myvid.addEventListener("change", function() {
    var source = document.getElementById('video_here');
    console.log(source);
    source.src = URL.createObjectURL(this.files[0]);
    video.load();
    video.addEventListener('ended', function(e) {



        // get the active source and the next video source.
        // I set it so if there's no next, it loops to the first one

        var activesource = document.querySelector("#video source.active");
        var nextsource = document.querySelector("#video source.active + source") || document.querySelector("#myvideo source:first-child");
        console.log("nextsource" + nextsource);
        // deactivate current source, and activate next one
        activesource.className = "";
        nextsource.className = "active";

        // update the video source and play
        video.src = nextsource.src;
        video.play();

    });
});

var myvid = document.getElementById('newmyvid');
//var video = document.getElementById('video');
myvid.addEventListener("change", function() {
            var source = document.getElementById('newvideo_here');
            console.log(source);
            source.src = URL.createObjectURL(this.files[0]);
            console.log(source.src);