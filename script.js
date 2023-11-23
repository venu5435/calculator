let buttons = document.getElementsByTagName('button');
let result = document.getElementById('result');

for (let i = 0; i < buttons.length; i++) {
    // Corrected variable name 'button' to 'buttons'
    buttons[i].onclick = function () {
        let input = this.innerText;
        updateDisplay(input);
    }
}

function updateDisplay(input) {
    let currentDisplay = result.innerText;

    // Corrected the comparison operator in the following line
    if (currentDisplay == "0") {
        // Corrected the logical operators and the assignment operator in the following line
        if (input !== 'C' && input !== "DEL" && input !== "=") {
            result.innerText = "="; // It was not clear what you intended with this line, so I kept it as is
            result.innerText = input;
        }
    } else {
        // Corrected the comparison operator in the following line
        if (input == "DEL") {
            // Corrected the syntax error in the following line
            result.innerText = currentDisplay.substring(0, currentDisplay.length - 1);
        }
    }

    if (input === "C") {
        result.innerText = "0";
    }

    // Corrected the comparison operator in the following line
    if (input !== 'C' && input !== "DEL" && input !== "=") {
        result.innerText += input;
    }

    if (input === "=") {
        let display = result.innerText;
        // Corrected the use of 'eval' and added a check for invalid expressions
        try {
            result.innerText = eval(display);
        } catch (error) {
            result.innerText = "Error";
        }
    }
}
