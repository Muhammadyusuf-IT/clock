function getTime() {
  // clock
  const d = new Date();
  let soat = document.querySelector(".hh");
  let minut = document.querySelector(".mm");
  let sicund = document.querySelector(".ss");

  soat.innerHTML = d.getHours();
  minut.innerHTML = d.getMinutes();
  sicund.innerHTML = d.getSeconds();

  if (d.getHours() < 10) {
    soat.innerHTML = "0" + d.getHours();
  } else if (d.getMinutes() < 10) {
    minut.innerHTML = "0" + d.getMinutes();
  } else if (d.getSeconds() < 10) {
    sicund.innerHTML = "0" + d.getSeconds();
  }
  // timePeriod
  let today = new Date();
  let hours = today.getHours();
  let period = hours >= 12 ? "PM" : "AM";
  document.getElementById("timePeriod").innerText = period;
}

setInterval(getTime, 1000);
