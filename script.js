let team1Score = 0;
let team2Score = 0;

function addPoint(team) {
    if (team === 'team1') {
        team1Score++;
        document.getElementById('team1Score').textContent = formatScore(team1Score);
    } else if (team === 'team2') {
        team2Score++;
        document.getElementById('team2Score').textContent = formatScore(team2Score);
    }
}

function resetPoints() {
    team1Score = 0;
    team2Score = 0;
    document.getElementById('team1Score').textContent = formatScore(team1Score);
    document.getElementById('team2Score').textContent = formatScore(team2Score);
}

function savePoints() {
    // You can add save logic, for example, saving in localStorage or database
    alert('Points saved!');
}

function formatScore(score) {
    return score < 10 ? '0' + score : score;
}