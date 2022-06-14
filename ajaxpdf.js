const filedowload = document.getElementById("filedowload");

document.getElementById("filedowload").addEventListener("click", function () {
    fetch("https://eyerov-hiring-tasks-server-ujyffp74ba-el.a.run.app/api/pdf-report")
        .then(res => res.json())
        .then(json => {
        // Convert JSON to string
        const data = JSON.stringify(json);
            console.log(data)
        // Create a Blob object
        const blob = new Blob([data], { type: 'application/pdf' });
            console.log(blob)
        // Create an object URL
        const url = URL.createObjectURL(blob);
            console.log(url)
        // Download file
        download(url, 'pdfdownload.pdf');

        // Release the object URL
        URL.revokeObjectURL(url);
    })
    .catch(err => console.error(err));
})

// function filedowload() {
//     fetch("https://eyerov-hiring-tasks-server-ujyffp74ba-el.a.run.app/api/pdf-report")
//         .then(res => res.json())
//         .then(data => {
//             // filedowload.innerHTML = `<img id="ajaxdiverimg" src= "${data.diverImage}"/>`
//             filedowload.innerHTML = `<a href="images/pdfdownload.pdf" class="btn btn-primary" download="pdfdownload.pdf">Open Soft-Copy Report</a>`
//         })


// }



// function filedowload(data, name) {
//     const blob = new Blob([data], { type: 'application/pdf' });
//     const URL = "https://eyerov-hiring-tasks-server-ujyffp74ba-el.a.run.app/api/pdf-report";
//     const href = URL.createObjectURL(blob);
//     const a = Object.assign(document.createElement("a"), {
//         href,
//         style: "display:none",// download: "filedownload.pdf"
//         download: name
//     });
//     document.body.appendChild(a)
//     a.click();
//     URL.revokeObjectURL(href);
//     a.remove();
// }













// function filedowload(data) {
//     fetch("https://eyerov-hiring-tasks-server-ujyffp74ba-el.a.run.app/api/pdf-report")
//     .then(res => res.json())
//     .then(json => {
//         // Convert JSON to string
//         const data = JSON.stringify(json);

//         // Create a Blob object
//         const blob = new Blob([data], { type: 'application/pdf' });

//         // Create an object URL
//         const url = URL.createObjectURL(blob);

//         // Download file
//         download(url, 'pdfdownload.pdf');

//         // Release the object URL
//         URL.revokeObjectURL(url);
//     })
//     .catch(err => console.error(err));
// }
// var url = "https://storage.googleapis.com/eyerov-hiring-tasks/testReport.pdf";
// var url = "https://eyerov-hiring-tasks-server-ujyffp74ba-el.a.run.app/api/pdf-report";


// function download(file, text) {

//                 //creating an invisible element
//                 var element = document.createElement('a');
//                 element.setAttribute('https://storage.googleapis.com/eyerov-hiring-tasks/testReport.pdf', 
//                 'data:text/plain;charset=utf-8, '
//                 + encodeURIComponent(text));
//                 element.setAttribute('testReport.pdf', file);
              
//                 // Above code is equivalent to
//                 // <a href="path of file" download="file name">
              
//                 document.body.appendChild(element);
              
//                 //onClick property
//                 element.click();
              
//                 document.body.removeChild(element);
//             }
              
//             // Start file download.
//             document.getElementById("btn")
//             .addEventListener("click", function() {
//                 // Generate download of hello.txt 
//                 // file with some content
//                 var text = document.getElementById("text").value;
//                 var filename = "GFG.txt";
              
//                 download(filename, text);
//             }, false);












