window.addEventListener('message', function (eventData) {
    console.log("event listener active")
    try {
        if (JSON.parse(eventData.data)) {
            let event = JSON.parse(eventData.data);
            console.log("Received event");
            console.log(event, "event");
        }
    } catch (error) {
        console.log(error);
        return;
    }
}, false)
