let totalAttendees = 0;

let waterWiseCount = 0;
let netZeroCount = 0;
let renewablesCount = 0;

const attendanceGoal = 50;

const checkInForm = document.getElementById("checkInForm");
const attendeeName = document.getElementById("attendeeName");
const teamSelect = document.getElementById("teamSelect");

const waterCount = document.getElementById("waterCount");
const zeroCount = document.getElementById("zeroCount");
const powerCount = document.getElementById("powerCount");

const attendeeCount = document.getElementById("attendeeCount");
const progressBar = document.getElementById("progressBar");
const greeting = document.getElementById("greeting");

checkInForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const attendee = attendeeName.value;
  const team = teamSelect.value;

  totalAttendees++;

  if (team === "water") {
    waterWiseCount++;
  } else if (team === "zero") {
    netZeroCount++;
  } else if (team === "power") {
    renewablesCount++;
  }

  waterCount.textContent = waterWiseCount;
  zeroCount.textContent = netZeroCount;
  powerCount.textContent = renewablesCount;

  attendeeCount.textContent = totalAttendees;

  greeting.textContent = `Welcome, ${attendee}! Thanks for checking in.`;
  greeting.style.display = "block";
  greeting.classList.add("success-message");

  const progressPercent = (totalAttendees / attendanceGoal) * 100;
  progressBar.style.width = progressPercent + "%";

  attendeeName.value = "";
  teamSelect.value = "";

  attendeeName.value = "";
  teamSelect.value = "";
});
