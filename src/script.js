export default function() {
    let hoursBox = document.querySelector(".box__hours");
    let minutesBox = document.querySelector(".box__minutes");
    let secondsBox = document.querySelector(".box__seconds");

    const entryTime = new Date();

    let hours = entryTime.getHours();
    let minutes = entryTime.getMinutes();
    let seconds = entryTime.getSeconds();

    hoursBox.innerHTML = hours.toString().padStart(2, "0");
    minutesBox.innerHTML = minutes.toString().padStart(2, "0");
    secondsBox.innerHTML = seconds.toString().padStart(2, "0");

    const addHour = () => {
        function *generator () {
            while (true) {
                hours++;
                if (hours > 23) {
                    hours = 0;
                }
                yield hours;
            }
        }
        generator().next();
        hoursBox.innerHTML = hours.toString().padStart(2, "0");
    };

    const addMin = () => {
        function *generator () {
            while (true) {
                minutes++;
                if (minutes > 59) {
                    minutes = 0;
                    addHour();
                }
                yield minutes;
            }
        }
        generator().next();
        minutesBox.innerHTML = minutes.toString().padStart(2, "0");
    };

    const addSec = () => {
        function *generator () {
            while (true) {
                seconds++;
                if (seconds > 59) {
                    seconds = 0;
                    addMin()
                }
                yield seconds;
            }
        }
        generator().next();
        secondsBox.innerHTML = seconds.toString().padStart(2, "0");
    };

    setInterval(function() {
        addSec()
    },1000);
};