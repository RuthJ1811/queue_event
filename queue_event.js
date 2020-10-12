window.addEventListener('message', function (eventData) {
    try {
        if (JSON.parse(eventData.data)) {
            let event = JSON.parse(eventData.data);
            if (event.event_code === "custom-event" && event.data && event.data.code === "queue_position_updated") {
                console.log("Received queued event");
                const queue_position = event.data.data.queue_position
                console.log(queue_position, "postition")
                var iframe = document.getElementById('ymIframe');
                iframe.src = "http://127.0.0.1:5500/queue.html?queuePosition=00&estimatedWaitTime=000";
            }
        }
    } catch (error) {
        console.log(error);
        return;
    }
}, false)
