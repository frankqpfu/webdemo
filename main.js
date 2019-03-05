
require.config({
    paths: {
        "rtmp-streamer": "rtmp-streamer.min"
    }
});

require(["rtmp-streamer"], function (RtmpStreamer) {

    var getUrl = function () {
        return document.getElementById('url').value;
    };

    var getName = function () {
        return document.getElementById('stream-name').value;
    };
    
    var getUrl2 = function () {
        return document.getElementById('url2').value;
    };

    var getName2 = function () {
        return document.getElementById('stream-name2').value;
    };

    var streamer = new RtmpStreamer(document.getElementById('rtmp-streamer'));
    var player = new RtmpStreamer(document.getElementById('rtmp-player'));
    
    streamer.setScreenSize(640, 480);
    streamer.setMicQuality(6);
    player.setScreenSize(640,480);
    
    document.getElementById("publish").addEventListener("click", function () {
        streamer.publish(getUrl(), getName());
    });
    
    document.getElementById("play").addEventListener("click", function () {
        player.play(getUrl2(), getName2());
    });
    

    document.getElementById("streamer-disconnect").addEventListener("click", function () {
        streamer.disconnect();
    });

    document.getElementById("player-disconnect").addEventListener("click", function () {
        player.disconnect();
    });

});
