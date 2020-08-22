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
    const mainElement = document.getElementById("hello");
    while(mainElement.firstChild) {
        mainElement.removeChild(mainElement.firstChild);
    }
    let articleElement = document.createElement("article");
    let addHeader = document.createElement("h1");
    addHeader.appendChild(document.createTextNode("header"))
    articleElement.appendChild(addHeader);
    articleElement.appendChild(document.createTextNode(article_id));
    articleElement.className = "main-article-show";
    mainElement.appendChild(articleElement);
}
const buttons = document.querySelectorAll('button');
buttons.forEach(function(button) {
    button.addEventListener('click', function() {OnButtonClick(button.id)});
});