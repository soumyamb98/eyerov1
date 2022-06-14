$(document).ready(function(){
    var xhttp= new XMLHttpRequest();
    
    
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var response = JSON.parse(this.responseText)
            // console.log(this.responseText)
            var key = Object.keys(response);
            var value = Object.values(response)
            console.log(key)
            console.log(value)
            // response.forEach((key, value) => {
            //     output += '<li >' + `${key}` + `${value}` + '</li>'
            //         // `<li>  ${key} ${value} </li>`
            // });
            var ajaxoutput = "";
            for (const key in response) {
                // var ajaxoutput = "";
                if (response.hasOwnProperty(key)) {
                    
                    ajaxoutput += `<li id="ajaxli"> ${key}: ${response[key]} </li>`;
                    document.getElementById("demo").innerHTML = ajaxoutput;
                    console.log(`${key}: ${response[key]}`);
                    // damName: Shirawata Dam ajaxscript.js: 21
                    // projectId: ER31 - MA - DM - 1 - 49820CH / 1 ajaxscript.js: 21
                    // inspectionStartDate: Feb 22, 2022 ajaxscript.js: 21
                    // inspectionEndDate: Mar 03, 2022 ajaxscript.js: 21
                    // river: Indrayani River ajaxscript.js: 21
                    // location: Maval, Pune District in the State of Maharashtra ajaxscript.js: 21
                }
            }
           
        }

        // console.log(this.responseText)
    }

    xhttp.open("GET","https://eyerov-hiring-tasks-server-ujyffp74ba-el.a.run.app/api/dam-details",true);
    xhttp.send();









});
