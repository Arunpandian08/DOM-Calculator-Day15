document.addEventListener("DOMContentLoaded", function() {
    const resultInput = document.getElementById("result");
    const buttons = document.querySelectorAll(".container button");

    // Add event listener to each button
    buttons.forEach(button => {
        button.addEventListener("click", handleClick);
    });

    // Add event listener for keyboard input
    document.addEventListener("keydown", handleKeyboard);

    function handleClick() {
        const buttonValue = this.textContent;
        handleInput(buttonValue);
    }

    function handleKeyboard(event) {
        const key = event.key;
        if (/[0-9.+\-*/]|Enter|Backspace|Delete|Escape/.test(key)) {
            event.preventDefault();
            handleInput(key);
            if(/[a-z]/.test(key)){
                alert="only numeric and operators are allowed"
            }
        }
    }

    function handleInput(input) {
        switch (input) {
            case "C":
                resultInput.value = "";
                break;
            case "=":
            case "Enter":
                resultInput.value = eval(resultInput.value);
                break;
            case "Backspace":
            case "Delete":
                resultInput.value = resultInput.value.slice(0, -1);
                break;
            case "Escape":
                resultInput.value = "";
                break;
            default:
                resultInput.value += input;
        }
    }
});
