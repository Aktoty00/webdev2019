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
        image.setAttribute('src', 'del1.png');
        image.setAttribute('alt', 'deleteImage');
        image.setAttribute('height', '20px');
        image.setAttribute('width', '20px');
        image.className= "delete";
        newLine.appendChild(image);
        
        newLine.onclick=itemFunctions;
    }
    var close = document.getElementsByClassName("delete");
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
    var timer = setInterval(tick, 1000);

    function tick(){
        var date = new Date();
        var h = date.getHours();
        var m = date.getMinutes();
        h = checkTime(h);
        m = checkTime(m);
        document.getElementById('clock').innerHTML = "<h1>" + h + ":" + m + "</h1>";
    }
    function checkTime(t) {
        if (t < 10) {
            t = "0" + t
        } 
        return t;
    }   