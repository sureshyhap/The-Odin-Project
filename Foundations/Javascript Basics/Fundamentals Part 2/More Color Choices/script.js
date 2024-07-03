const select = document.querySelector("select");
const html = document.querySelector("html");

select.addEventListener("change", () => {
    const choice = select.value;
    let bg, fg;
    switch (choice) {
        case "white":
            bg = "white";
            fg = "black";
            break;
        case "black":
            bg = "black";
            fg = "white";
            break;
        case "purple":
            bg = "purple";
            fg = "white";
            break;
        case "yellow":
            bg = "yellow";
            fg = "purple";
            break;
        case "psychedelic":
            bg = "lime";
            fg = "purple";
            break;
        default:
            return
    }
    update_theme(bg, fg);
});

function update_theme(bgColor, fgColor) {
    html.style.backgroundColor = bgColor;
    html.style.color = fgColor;
}