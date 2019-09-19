function fetchQuestion(q){
var x = q;
fetch('js/first.json')
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                appendData(data);
            })
            .catch(function (err) {
                console.log('error: ' + err);
            });
        function appendData(data) {
            var mainContainer = document.getElementById("demo");
            var question = data[x].q1;
            console.log(question);
            /*
            for (var i in data) {
                var div = document.createElement("div");
                div.innerHTML = 'q1: ' + data[i].question + 'answer: ' + data[i].correctAnswer;
                mainContainer.appendChild(div);
            }
            */
        }

}/**
 * 
 */