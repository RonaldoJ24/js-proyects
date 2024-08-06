homeScore = document.getElementById("home-score")
homeCount = 0

guestScore = document.getElementById("guest-score")
guestCount = 0

function changeScore(number, team) {
    if (team == 0) {
        homeCount += number;
        homeScore.textContent = homeCount

    } else {
        guestCount += number;
        guestScore.textContent = guestCount
    }

    if (homeCount == guestCount) {
        homeScore.style.color = '';
        guestScore.style.color = '';
    } else if (homeCount > guestCount) {
        homeScore.style.color = 'green';
        guestScore.style.color = '';
    } else {
        guestScore.style.color = 'green';
        homeScore.style.color = '';
    }
}

function resetCounters() {
    homeCount = 0;
    guestCount = 0;
    guestScore.textContent = guestCount
    homeScore.textContent = homeCount
}