var createClose = document.getElementsByClassName("createClose")[0];
var createModel = document.getElementsByClassName("createPostModel")[0];

function allPost(){
    location.href = "./html/bloglist.html"
}

function createFn(){
    createModel.style.display = "block"
}

createClose.onclick = () => {
    createModel.style.display = "none"
}

// window.onclick = function(event) {
//     if (event.target == createModel) { 
//         createModel.style.display = "none"
//     }
// }
