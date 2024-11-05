document.querySelectorAll(".code").forEach((button, index) => {
    const tooltips = document.querySelectorAll(".tooltip");
    const codes = [
        "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"
    ];

    button.addEventListener("click", () => {
        // Copy the corresponding code to clipboard
        navigator.clipboard.writeText(codes[index]);

        // Show visual feedback
        button.style.filter = "brightness(0.8)";
        tooltips[index].style.visibility = "visible";

        setTimeout(() => {
            button.style.filter = "brightness(1)";
        }, 100);

        setTimeout(() => {
            tooltips[index].style.visibility = "hidden";
        }, 500);
    });
});