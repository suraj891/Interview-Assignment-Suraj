document.getElementById('marks').addEventListener('input', function () {
    let suraj = document.getElementById("marks").value
    let LiveNumber = document.getElementById("number")
    LiveNumber.textContent = suraj
    var marks = parseInt(this.value);
    var circle = document.querySelector('.circle-progress');
    var message = document.getElementById('message');

    if (marks < 40) {
        circle.style.strokeDashoffset = 339.292;
        message.textContent = 'You are not eligible';
        message.style.color = "red"
    } else {
        circle.style.strokeDashoffset = (439.292 * (100 - marks)) / 100;
        message.textContent = 'You are eligible';
        message.style.color = "green"

    }
});

