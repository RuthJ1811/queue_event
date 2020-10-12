window.addEventListener('message', function (eventData) {
    console.log("event listener active")
    try {
        if (JSON.parse(eventData.data)) {
            let event = JSON.parse(eventData.data);
            console.log("Received event");
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
