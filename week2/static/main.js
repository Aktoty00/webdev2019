var myNodelist = document.getElementsByTagName("LI");

var i;
for (i = 0; i < myNodelist.length; i++) {
    var checkbox = document.createElement("input");
    checkbox.setAttribute("type", "checkbox");
    checkbox.setAttribute('height', '20px');
    checkbox.setAttribute('width', '60px');
    checkbox.className= "checkbox";
    myNodelist[i].appendChild(checkbox);
    myNodelist[i].onclick=itemFunctions;
}

for (i = 0; i < myNodelist.length; i++) {
  var image = document.createElement("img");
  image.setAttribute('src', 'static/del1.png');
  image.setAttribute('alt', 'deleteImage');
  image.setAttribute('height', '20px');
  image.setAttribute('width', '20px');
  image.className= "delete";
  myNodelist[i].appendChild(image);
  myNodelist[i].onclick=itemFunctions;
}

var close = document.getElementsByClassName("delete");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}


function newElement() {
    var newLine = document.createElement("li");

    var checkbox = document.createElement("input");
    checkbox.setAttribute("type", "checkbox");
    checkbox.setAttribute('height', '20px');
    checkbox.setAttribute('width', '60px');
    checkbox.className= "checkbox";
    newLine.appendChild(checkbox);

    var inputValue = document.getElementById("newTask").value;
    var newText = document.createTextNode(inputValue);
    newLine.appendChild(newText);
    if (inputValue === '') {
      alert("You must write something!");
    } else {
      document.getElementById("myList").appendChild(newLine);
    }
    document.getElementById("newTask").value = "";

    var image = document.createElement("img");
    image.setAttribute('src', 'static/del1.png');
    image.setAttribute('alt', 'deleteImage');
    image.setAttribute('height', '20px');
    image.setAttribute('width', '20px');
    image.className= "delete";
    newLine.appendChild(image);

    
    newLine.onclick=itemFunctions;
}
function itemFunctions(e){
    if(e.target.className==="delete"){
        for (i = 0; i < close.length; i++) {
            close[i].onclick = function() {
                var div = this.parentElement;
                div.style.display = "none";
            }
        }  
    }
    else if(e.target.className==="checkbox"){
        e.target.parentNode.classList.toggle('checked');
    }
}