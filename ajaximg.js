const diverimg = document.getElementById("diverimg");
const roverimg = document.getElementById("roverimg");
const damimg = document.getElementById("damimg");
fetch("https://eyerov-hiring-tasks-server-ujyffp74ba-el.a.run.app/api/images")
    .then(res => res.json())
    .then(data => {
        diverimg.innerHTML = `<img id="ajaxdiverimg" src= "${data.diverImage}"/>`
        roverimg.innerHTML = `<img id="ajaxroverimg" src = "${data.rovImage}"/>`
        damimg.innerHTML = `<img id="ajaxdamimg" src = "${data.damImage}"/>`
    })

//  {"damImage":"https://storage.googleapis.com/eyerov-hiring-tasks/dam.jpeg",
//    "diverImage": "https://storage.googleapis.com/eyerov-hiring-tasks/diver.jpg",
//     "rovImage": "https://storage.googleapis.com/eyerov-hiring-tasks/rov.jpg"}