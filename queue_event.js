window.addEventListener('message', function (eventData) {
    try {
        if (JSON.parse(eventData.data)) {
            let event = JSON.parse(eventData.data);
            if (event.event_code === "custom-event" && event.data && event.data.code === "queue_position_updated") {
                console.log("queued event received");
                const queue_position = event.data.data.queue_position;
                const estimated_time = event.data.data.estimated_time;
                var yellowFrame = document.getElementById("ymIframe")
                console.log("ymiframe done")
                console.log(yellowFrame)
                yellowFrame.contentWindow.document.querySelector("iframe").querySelector('#circle > div.queue_number').innerHTML = queue_position;
                yellowFrame.contentWindow.document.querySelector('#estimated_time > div').innerHTML = estimated_time;
                console.log("updated !")
            }
        }
    } catch (error) {
        console.log(error);
        return;
    }
}, false)
