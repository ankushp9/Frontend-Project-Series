// Toggle Mode Functionality
const toggleModeButton = document.getElementById("toggleMode");

function toggleMode() {
    const body = document.body;
    body.classList.toggle("night-mode");
    
    // Update button text
    toggleModeButton.innerText = body.classList.contains("night-mode") 
        ? "Day Mode" 
        : "Night Mode";
}

// Event Listener for Toggle Button
toggleModeButton.addEventListener("click", toggleMode);
// Age Calculator Logic
document.getElementById("btnAge").addEventListener("click", function() {
    const birthday = document.getElementById("birthday").value;
    if (!birthday) {
        alert("Please enter your date of birth");
        return;
    }

    const today = new Date();
    const birthDate = new Date(birthday);
    let years = today.getFullYear() - birthDate.getFullYear();
    let months = today.getMonth() - birthDate.getMonth();
    let days = today.getDate() - birthDate.getDate();

    if (days < 0) {
        days += 30;
        months--;
    }
    if (months < 0) {
        months += 12;
        years--;
    }

    document.getElementById("resultAge").innerText = 
        `You are ${years} years, ${months} months, and ${days} days old.`;
});

// Simple Calculator Logic
document.getElementById("btnSimpleCalc").addEventListener("click", function() {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    const operation = document.getElementById("operation").value;

    if (isNaN(num1) || isNaN(num2)) {
        alert("Please enter valid numbers");
        return;
    }

    let result;
    switch (operation) {
        case "add":
            result = num1 + num2;
            break;
        case "subtract":
            result = num1 - num2;
            break;
        case "multiply":
            result = num1 * num2;
            break;
        case "divide":
            if (num2 === 0) {
                result = "Cannot divide by zero";
            } else {
                result = num1 / num2;
            }
            break;
        default:
            result = "Invalid operation";
    }

    document.getElementById("resultSimpleCalc").innerText = `Result: ${result}`;
});

// BMI Calculator Logic
document.getElementById("btnBMI").addEventListener("click", function() {
    const weight = parseFloat(document.getElementById("weight").value);
    const height = parseFloat(document.getElementById("height").value);

    if (isNaN(weight) || isNaN(height) || height <= 0) {
        alert("Please enter valid weight and height");
        return;
    }

    const bmi = weight / (height * height);
    document.getElementById("resultBMI").innerText = `Your BMI is ${bmi.toFixed(2)}`;
});
