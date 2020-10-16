window.addEventListener('message', function (eventData) {
    try {
        if (JSON.parse(eventData.data)) {
            let event = JSON.parse(eventData.data);
            if (event.event_code === "custom-event" && event.data && event.data.code === "queue_position_updated") {
                console.log("Received queued event");
                const queue_position = event.data.data.queue_position;
                const estimated_time = event.data.data.estimated_time;
                const waitMessage = event.data.data.waitMessage;
                const estimatedWaitTimeMessage = event.data.data.estimatedWaitTimeMessage;
                [...document.getElementById("ymIframe").contentWindow.document.querySelectorAll("iframe")]
                .reverse()[1].contentWindow
                .postMessage({
                    waitMessage: waitMessage, 
                    queue_position: queue_position, 
                    estimated_time: estimated_time ,
                    estimatedWaitTimeMessage: estimatedWaitTimeMessage
                    },"https://ruthj1811.github.io/")
            }
        }
    } catch (error) {
        console.log(error);
        return;
    }
}, false)
