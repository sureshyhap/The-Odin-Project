function ask(question, yes, no) {
    confirm(question) ? yes() : no();
}

ask("Do you agree?",
    () => alert("I agree!"),
    () => { alert("I disagree")}
);