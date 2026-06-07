// HAMPDEN COUNTY MESH NETWORK
// Dispatch Console Effects

// ---------------------------
// RADIO SCANNER DISPLAY
// ---------------------------

const scanDisplay =
    document.getElementById("scan-frequency");

if (scanDisplay) {

    let freq = 902.300;

    setInterval(() => {

        freq += (Math.random() * 0.6);

        if (freq > 927.700) {
            freq = 902.300;
        }

        scanDisplay.textContent =
            freq.toFixed(3) + " MHz";

    }, 120);

}

document.addEventListener("DOMContentLoaded", () => {

    // -----------------------------------
    // LAST HEARD TIMER
    // -----------------------------------

    const lastHeard = document.getElementById("last-heard");

    function updateLastHeard() {
        if (!lastHeard) return;

        const seconds = Math.floor(Math.random() * 45) + 3;

        lastHeard.textContent = `${seconds} SEC`;
    }

    updateLastHeard();

    setInterval(updateLastHeard, 6000);

    // -----------------------------------
    // COUNTER ANIMATION
    // -----------------------------------

    function animateCounter(id, target) {

        const element = document.getElementById(id);

        if (!element) return;

        let current = 0;

        const step = Math.max(1, Math.floor(target / 40));

        const timer = setInterval(() => {

            current += step;

            if (current >= target) {
                current = target;
                clearInterval(timer);
            }

            element.textContent = current;

        }, 40);
    }

    animateCounter("nodes-count", 27);
    animateCounter("gateway-count", 4);

    // -----------------------------------
    // COMMUNICATIONS LOG ROTATOR
    // -----------------------------------

    const dispatchLog = document.getElementById("dispatch-log");

    const messages = [

        "07:14 — Gateway online",
        "07:31 — Coverage report received",
        "08:02 — New operator joined",
        "08:18 — Telemetry updated",
        "08:42 — Node health check completed",
        "09:03 — Infrastructure report submitted",
        "09:26 — Relay test successful",
        "09:48 — County network status verified",
        "10:05 — Mesh traffic observed",
        "10:27 — Signal report logged",
        "10:54 — Coverage expansion proposed",
        "11:11 — Operator check-in received"

    ];

    function rebuildLog() {

        if (!dispatchLog) return;

        dispatchLog.innerHTML = "";

        const shuffled = [...messages]
            .sort(() => Math.random() - 0.5)
            .slice(0, 6);

        shuffled.forEach(entry => {

            const li = document.createElement("li");

            li.textContent = entry;

            dispatchLog.appendChild(li);

        });

    }

    rebuildLog();

    setInterval(rebuildLog, 12000);

    // -----------------------------------
    // SIGNAL METER RANDOMIZATION
    // -----------------------------------

    const bars = document.querySelectorAll(".bar");

    function randomizeBars() {

        bars.forEach(bar => {

            const height =
                Math.floor(Math.random() * 130) + 40;

            bar.style.height = `${height}px`;

        });

    }

    setInterval(randomizeBars, 1800);

    // -----------------------------------
    // ONLINE INDICATOR FLASH
    // -----------------------------------

    const onlineValues =
        document.querySelectorAll(".online");

    setInterval(() => {

        onlineValues.forEach(el => {

            el.style.opacity =
                el.style.opacity === "0.5"
                    ? "1"
                    : "0.5";

        });

    }, 1000);

    // -----------------------------------
    // CONSOLE MESSAGE
    // -----------------------------------

    console.log(
        "Hampden County Mesh Network initialized."
    );

});
