const btn_12 = document.getElementById("btn-12")
const btn_24 = document.getElementById("btn-24")
const time = document.getElementById("time")
const ampmEl = document.getElementById("abbreviations")
const date = document.getElementById("date")
const day = document.getElementById("day")

let hour_12 = true;

function pad(n) {
    return String(n).padStart(2, "0")
}

const clock = () => {
    const now = new Date()

    let h = now.getHours()
    let m = now.getMinutes()
    let s = now.getSeconds()

    let suffix = "";

    if (hour_12) {
        suffix = h >= 12 ? "PM" : "AM";
        h = h % 12 || 12;
    }

    time.textContent = `${pad(h)}:${pad(m)}:${pad(s)}`
    ampmEl.textContent = suffix;
    ampmEl.style.display = hour_12 ? "block" : "none"

    let nowDate = now.toLocaleDateString("en-US", {
        day: "numeric",
        month: "long",
        year: "numeric"
    })

    let nowDay = now.toLocaleDateString("en-US", {
        weekday: "long"
    })

    date.textContent = nowDate;
    day.textContent = nowDay;
}

btn_12.addEventListener("click", () => {
    hour_12 = true;

    btn_12.classList.add("btn-active");
    btn_12.classList.remove("btn");

    btn_24.classList.add("btn");
    btn_24.classList.remove("btn-active");

    clock();
})

btn_24.addEventListener("click", () => {
    hour_12 = false;

    btn_24.classList.add("btn-active");
    btn_24.classList.remove("btn");

    btn_12.classList.add("btn");
    btn_12.classList.remove("btn-active");

    clock();
})

setInterval(clock, 1000)
clock(); 