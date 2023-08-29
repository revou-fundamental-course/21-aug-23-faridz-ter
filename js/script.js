const popup = document.getElementById("popup");
const landingPage = document.getElementById("landingPage");
const namaInput = document.getElementById("namaInput");
const submitBtn = document.getElementById("submitBtn");
const welcomeMessage = document.getElementById("welcomeMessage");

// Tambahkan event listener untuk menampilkan pop-up saat halaman dimuat
document.addEventListener("DOMContentLoaded", function() {
  popup.style.display = "flex";
});

submitBtn.addEventListener("click", function() {
  const nama = namaInput.value;
  if (nama) {
    popup.style.display = "none";
    landingPage.style.display = "flex";
    welcomeMessage.textContent = "Hai " + nama+",";
  }
});

function formatTime(date) {
    const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const months = [
      "Jan", "Feb", "Mar", "Apr", "May", "Jun",
      "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ];
  
    const dayOfWeek = daysOfWeek[date.getDay()];
    const month = months[date.getMonth()];
    const day = date.getDate();
    const year = date.getFullYear();
    const time = date.toLocaleTimeString();
    const timezoneOffset = date.getTimezoneOffset();
    const timezoneOffsetHours = Math.floor(Math.abs(timezoneOffset) / 60);
    const timezoneOffsetMinutes = Math.abs(timezoneOffset) % 60;
    const timezone = timezoneOffset >= 0 ? `GMT+${timezoneOffsetHours}:${timezoneOffsetMinutes}` : `GMT-${timezoneOffsetHours}:${timezoneOffsetMinutes}`;
    return `${dayOfWeek} ${month} ${day} ${year} ${time} ${timezone}`;
}

function setSenderUI(name, birthDate, gender, messages) {
    document.getElementById("sender-full-name").innerHTML = name;
    document.getElementById("sender-birth-date").innerHTML = birthDate;
    document.getElementById("sender-gender").innerHTML = gender;
    document.getElementById("sender-messages").innerHTML = messages;
    const now = new Date();
    const formattedTime = formatTime(now);
    document.getElementById("sender-current-time").textContent = formattedTime;
}

function validateForm() {
    const name = document.forms["message-form"]["full-name"].value
    const birthDate = document.forms["message-form"]["birth-date"].value
    const gender = document.forms["message-form"]["gender"].value
    const messages = document.forms["message-form"]["messages"].value

    if (name == "" || birthDate == "" || gender== "" || messages == "") {
        alert("Tidak boleh kosong");
        return false;
    }

    setSenderUI(name, birthDate, gender, messages);
    return false;

}