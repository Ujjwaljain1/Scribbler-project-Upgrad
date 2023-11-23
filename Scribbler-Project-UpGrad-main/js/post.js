var Inclose = document.getElementsByClassName("inClose")[0];
var Upclose = document.getElementsByClassName("upClose")[0];
var signInModal = document.getElementsByClassName("signInModel")[0];
var signUpModal = document.getElementsByClassName("signUpModel")[0];
var notMember = document.getElementById("blueText");
var likeButton = document.getElementById("likeBtn")
function signInFn(){
    signInModal.style.display = "block";
}

function signUpFn(){
    signUpModal.style.display = "block";
}

Inclose.onclick = function()  {
    console.log("jbcsjd")
    signInModal.style.display = "none";
}

Upclose.onclick = () => {
    signUpModal.style.display = "none";
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

// js 

var flag=0;
var likee=0;


function changeText()
{
if(flag==0)
{
    var a=document.getElementById("blogBody").innerHTML;
    var x=document.getElementById("temp").innerHTML;
    document.getElementById("text").innerHTML='Save';
    document.getElementById("text2").innerHTML=x;
    document.getElementById("textarea").value=a;
    document.getElementById("blogBody").style.display="none";
    document.getElementById("textarea").style.display="block";
    document.getElementById("textarea").style.width="95%";
    document.getElementById("textarea").style.height="260px";

    var title=document.getElementById("blogTitleNew").innerHTML;
		document.getElementById("titleArea").value=title;
		document.getElementById("blogTitleNew").style.display="none";
        document.getElementById("titleArea").style.display="block";
        flag=1;
}
else{
    var c = document.getElementById("textarea").value;
    document.getElementById("blogBody").innerHTML=c;
    document.getElementById("blogBody").style.display="block";
    document.getElementById("textarea").style.display="none";
    var d=document.getElementById("titleArea").value;
    document.getElementById("blogTitleNew").innerHTML=d;
    document.getElementById("blogTitleNew").style.display="block";
    document.getElementById("titleArea").style.display="none";
    var d=document.getElementById("temp2").innerHTML;
    document.getElementById("text").innerHTML='Edit';
    document.getElementById("text2").innerHTML=d;
    flag=0;
}
}

likeButton.onclick = function(){
    console.log("clikc")
    likee++;
    document.getElementById("liked").innerHTML="Liked!";
    if(likee==1)
    {
        document.getElementById("likeText").innerHTML="1 person likes this!";
    }
    else if(likee>1)
    {
        document.getElementById("likeText").innerHTML=likee+" people have liked this!";
    }
    // document.getElementById("commentBox").style.display="block";
}

function comment()
{
    console.log("ewref")
    // document.getElementById("commentArea").style.display="block";
	var text=document.getElementById("commentBox").value;
	document.getElementById("allComments").innerHTML+="<p style='background-color:white; margin-left:10px; margin-right:10px; margin-top:-5px; '>"+text+"</p>";
    var text=document.getElementById("commentBox").value = ""
}
