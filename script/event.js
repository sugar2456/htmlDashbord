// function changeClass(Id) {
//     let buttonClass = document.getElementById(Id);
//     buttonClass.classList = "main-article-show";
//     console.log("hello");
// }
function OnButtonClick(id) {
    createArticle(id);
}

function createArticle(id) {
    const article_id = id.split('_')[0];
    const mainElement = document.getElementById("main_id");
    while(mainElement.firstChild) {
        mainElement.removeChild(mainElement.firstChild);
    }
    let iframeElement = document.createElement("iframe");
    const path = "./article-" + article_id + ".html";
    iframeElement.src = path;
    iframeElement.className = "main-iframe-style";
    mainElement.appendChild(iframeElement);
}

const buttons = document.querySelectorAll('button');
buttons.forEach(function(button) {
    button.addEventListener('click', function() {OnButtonClick(button.id)});
});