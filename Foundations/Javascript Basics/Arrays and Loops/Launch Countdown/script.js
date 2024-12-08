const output = document.querySelector(".output");
for (let i = 10; i >= 0; --i) {
    const p = document.createElement("p");
    if (i > 0 && i < 10) {
        p.textContent = i;
    }
    else if (i == 10) {
        p.textContent = "Countdown 10";
    }
    else if (i == 0) {
        p.textContent = "Blast off!";
    }
    output.appendChild(p);
}