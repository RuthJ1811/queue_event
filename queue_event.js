window.addEventListener('message', function (eventData) {
    try {
        if (JSON.parse(eventData.data)) {
            let event = JSON.parse(eventData.data);
            if (event.event_code === "custom-event" && event.data && event.data.code === "queue_position_updated") {
                console.log("Received queued event");
                const queue_position = event.data.data.queue_position
                console.log(queue_position, "postition")
            }
        }
    } catch (error) {
        console.log(error);
        return;
    }
}, false)
