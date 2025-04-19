function updateTime() {
    let timeElement = document.getElementById('time');
    let dateElement = document.getElementById('date');
    let now = new Date();

    let hours = String(now.getHours()).padStart(2, '0');
    let minutes = String(now.getMinutes()).padStart(2, '0');
    timeElement.textContent = `${hours}:${minutes}`;

    let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    dateElement.textContent = now.toLocaleDateString(undefined, options);
}

setInterval(updateTime, 1000);
updateTime();