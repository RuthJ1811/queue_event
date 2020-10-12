window.addEventListener('message', function (eventData) {
    try {
        if (JSON.parse(eventData.data)) {
            let event = JSON.parse(eventData.data);
            if (event.event_code === "custom-event" && event.data && event.data.code === "queue_position_updated") {
                console.log("Received queued event");
                const queue_position = event.data.data.queue_position;
                const estimated_time = event.data.data.estimated_time;
                [...document.getElementById("ymIframe").contentWindow.document.querySelectorAll("iframe")]
                .reverse()[1].contentWindow
                .postMessage({
                    queue_message: "queue_message", 
                    queue_position: queue_position, 
                    estimated_time: estimated_time 
                    },"http://127.0.0.1:5500")
            }
        }
    } catch (error) {
        console.log(error);
        return;
    }
}, false)
