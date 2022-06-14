xhttp.onreadystatechange=function(){
    if(this.readyState==4 && this.status==200){
        var response= JSON.parse(this.responseText);
        var putout ="";
        for (var i=0; i< response.length; i++){
            if(response[i].completed==true){
                putout+='<li id="idli"><input type="checkbox" name="test" id="chkbxdisabled" checked disabled>' + `${response[i].title}` + '</li>'
            }else{
                putout+='<li id="idli"><input type="checkbox" name="test" id="chkbx2" onchange="listcheck()">' + `${response[i].title}` + '</li>'
            }
            // if(response[i].completed==true){
            //     putout+='<tr><td><input type="checkbox" name="test" id="c1" checked disabled>' + response[i].title + '</td></tr>';
            // }else{
            //     putout+='<tr><td><input type="checkbox" name="test" id="c1" value="" >' + response[i].title + '</td></tr>';
            // }
            // putout+="<li>" + response[i].title + "</li>";
           

        }
        document.getElementById("ajax").innerHTML=putout;
    }
}
function download(file, text) {
              
                //creating an invisible element
                var element = document.createElement('a');
                element.setAttribute('href', 
                'data:text/plain;charset=utf-8, '
                + encodeURIComponent(text));
                element.setAttribute('download', file);
              
                // Above code is equivalent to
                // <a href="path of file" download="file name">
              
                document.body.appendChild(element);
              
                //onClick property
                element.click();
              
                document.body.removeChild(element);
            }
              
            // Start file download.
            document.getElementById("btn")
            .addEventListener("click", function() {
                // Generate download of hello.txt 
                // file with some content
                var text = document.getElementById("text").value;
                var filename = "GFG.txt";
              
                download(filename, text);
            }, false);