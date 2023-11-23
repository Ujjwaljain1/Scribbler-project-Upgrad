var Inclose = document.getElementsByClassName("inClose")[0];
var Upclose = document.getElementsByClassName("upClose")[0];
var signInModal = document.getElementsByClassName("signInModel")[0];
var signUpModal = document.getElementsByClassName("signUpModel")[0];
var delModel = document.getElementsByClassName("deleteModel")[0];
var notMember = document.getElementById("blueText");
var delBtn = document.getElementsByClassName("trash");
var threeDot = document.getElementsByClassName("menuIcon");
var closeBtn = document.getElementById("closeBtn");

function signInFn(){
    signInModal.style.display = "block";
}

function signUpFn(){
    signUpModal.style.display = "block";
}

delBtn[0].onclick = function() {
    delModel.style.display = "block";
}
delBtn[0].onclick = function() {
    delModel.style.display = "block";
}
delBtn[1].onclick = function() {
    delModel.style.display = "block";
}
delBtn[2].onclick = function() {
    delModel.style.display = "block";
}
delBtn[3].onclick = function() {
    delModel.style.display = "block";
}
delBtn[4].onclick = function() {
    delModel.style.display = "block";
}

// threeDot[0].onclick = function(){
//     location.href = "./post.html"
// }
// threeDot[1].onclick = function(){
//     location.href = "./post.html"
// }
// threeDot[2].onclick = function(){
//     location.href = "./post.html"
// }
// threeDot[3].onclick = function(){
//     location.href = "./post.html"
// }
// threeDot[4].onclick = function(){
//     location.href = "./post.html"
// }


Inclose.onclick = () => {
    signInModal.style.display = "none";
}

Upclose.onclick = () => {
    signUpModal.style.display = "none";
}

closeBtn.onclick = () =>{
    delModel.style.display = "none"
}

window.onclick = function(event) {
    if(event.target == signInModal || event.target == signUpModal) { 
        signInModal.style.display = "none";
        signUpModal.style.display = "none";
    }
}    

notMember.onclick = () => {
    signInModal.style.display = "none";
    signUpModal.style.display = "block";
}

threeDot.onclick = () => {
    location.href = "../html/post.html"
}


function viewPostDetails(id) {
    var post = document.getElementById(id);
    var author = post.querySelector(".postName").innerHTML;
    var title = post.querySelector(".postTitle").innerHTML;
    var content = post.querySelector(".post-desc").innerHTML;
    var postUrl = "post.html?author=" + author + "&title=" + title + "&content=" + content;
    window.location.href = postUrl;
    console.log(postUrl);
}