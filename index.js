var button = document.getElementById('button');
var input = document.getElementById('url');
function iframeDidLoad(){
    alert("Done loading");
}
function buttonHandler(event){
    event.preventDefault()
    var url = input.value;
    document.getElementById('iframe').src = url; 
}
button.addEventListener('click',buttonHandler);