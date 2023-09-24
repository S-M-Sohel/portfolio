let display = document.getElementById("calc-display");
let currentInput = "";

function appendToDisplay(value) {
    currentInput += value;
    display.value = currentInput;
}

function clearDisplay() {
    currentInput = "";
    display.value = "";
}

function calculateResult() {
    try {
        let result = eval(currentInput);
        display.value = result;
        currentInput = result.toString();
    } catch (error) {
        display.value = "Error";
        currentInput = "";
    }
}
//cgpa 
function calculateCGPA() {
    // Get the input values
    const courseCredits = parseFloat(document.getElementById("course-credits").value);
    const courseGrade = parseFloat(document.getElementById("course-grade").value);

    if (!isNaN(courseCredits) && !isNaN(courseGrade)) {
        // Calculate CGPA (Cumulative Grade Point Average)
        const cgpaResult = (courseGrade / courseCredits).toFixed(2); // Calculate CGPA and format to two decimal places
        // Display the result
        document.getElementById("cgpa-result").innerHTML = `CGPA: ${cgpaResult}`;
    } else {
        // Display an error message if inputs are invalid
        document.getElementById("cgpa-result").innerHTML = "Invalid input. Please check your values.";
    }
}
