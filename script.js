function download(filename, textInput) {

            var element = document.createElement('a');
            element.setAttribute('href', 'data:text/plain;charset=utf-8, ' + encodeURIComponent(textInput));
            element.setAttribute('download', filename);
            document.body.appendChild(element);
            element.click();
            //document.body.removeChild(element);
        }
        document.getElementById("btn")
            .addEventListener("click", function () {
                var text = document.getElementById("text").value;
                var filename = "output.txt";
                download(filename, text);
            }, false);
    function download(testReport) {
        //Set the File URL.
        // var url = "https://storage.googleapis.com/eyerov-hiring-tasks/testReport.pdf";
        var url = "https://eyerov-hiring-tasks-server-ujyffp74ba-el.a.run.app/api/pdf-report";

        $.ajax({
            url: url,
            cache: false,
            xhr: function () {
                var xhr = new XMLHttpRequest();
                xhr.onreadystatechange = function () {
                    if (xhr.readyState == 2) {
                        if (xhr.status == 200) {
                            xhr.responseType = "blob";
                        } else {
                            xhr.responseType = "text";
                        }
                    }
                };
                return xhr;
            },
            success: function (data) {
                //Convert the Byte Data to BLOB object.
                var blob = new Blob([data], { type: "application/octetstream" });

                //Check the Browser type and download the File.
                var isIE = false || !!document.documentMode;
                if (isIE) {
                    window.navigator.msSaveBlob(blob, fileName);
                } else {
                    var url = window.URL || window.webkitURL;
                    link = url.createObjectURL(blob);
                    var a = $("<a />");
                    a.attr("download", fileName);
                    a.attr("href", link);
                    $("body").append(a);
                    a[0].click();
                    $("body").remove(a);
                }
            }
        });
    };