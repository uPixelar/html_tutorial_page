var codeBoxTogglers = document.querySelectorAll(".code_box_toggle");
var codeBoxCopiers = document.querySelectorAll(".code_box_copy");
var resultBoxes = document.querySelectorAll(".result_box");
var navmenu = document.getElementById("navmenu");
var isNavOpen = false;

codeBoxTogglers.forEach(button => {//Show/Hide Code button handlers
    button.addEventListener('click', event => {
        if (button.innerHTML == "Show Code") {
            button.innerHTML = "Hide Code";
            button.classList.add("edited");
            button.parentElement.children[1].classList.remove("hidden");
            button.parentElement.children[2].classList.remove("hidden");
        } else {
            button.innerHTML = "Show Code";
            button.classList.remove("edited");
            button.parentElement.children[1].classList.add("hidden");
            button.parentElement.children[2].classList.add("hidden");
        }
    });
});

codeBoxCopiers.forEach(button => {//Copy Code button handlers
    button.addEventListener('click', event => {
        let elepre = button.parentElement.children[2];
        let content = elepre.innerText;
        navigator.clipboard.writeText(content);
        button.disabled = true;
        button.innerHTML = "Copied!";
        setTimeout(() => {
            button.innerHTML = "Copy Code";
            button.disabled = false;
        }, 500)
    })
});

resultBoxes.forEach(element => { //Auto generation of <code></code> fields before .result_box divs.
    let code = document.createElement("code");
    code.innerHTML = element.innerHTML.replace(/</g, "&lt;").replace(/>/g, "&gt;");
    element.parentNode.insertBefore(code, element)
})

function handleNavMenu(){
    if(isNavOpen){
        navmenu.children[0].classList.add("hidden");
        document.getElementById("collapser").innerText = ">";
        isNavOpen = false;
    }else{
        navmenu.children[0].classList.remove("hidden");
        document.getElementById("collapser").innerText = "<";
        isNavOpen = true;
    }
}