window.addEventListener('message', function (eventData) {
    try {
        if (JSON.parse(eventData.data)) {
            let event = JSON.parse(eventData.data);
            if (event.event_code === "custom-event" && event.data && event.data.code === "queue_position_updated") {
                console.log("Received queued event");
                const queue_position = event.data.data.queue_position;
                const estimated_time = event.data.data.estimated_time;
                var yellowFrame = document.getElementById("ymIframe").contentWindow
                let src = yellowFrame.document.querySelector('iframe').src
                console.log(src)
            }
        }
    } catch (error) {
        console.log(error);
        return;
    }
}, false)
