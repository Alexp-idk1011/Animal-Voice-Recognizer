function startClassification() {
    navigator.mediaDevices.getUserMedia({audio: true, video: false});
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/c_HTO9mds/model.json", {probabilityThreshold: 0.7}, modelReady);
}

function modelReady() {
    classifier.classify(gotResults);
}
var dog = 0;
var cat = 0;

function gotResults(error, results) {
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
        random_r = Math.floor(Math.random()*255) + 1;
        random_g = Math.floor(Math.random()*255) + 1;
        random_b = Math.floor(Math.random()*255) + 1;
        document.getElementById("result_label").innerHTML = "Detected voice is of - " + results[0].label;
        document.getElementById("result_count").innerHTML = "Detected dog - " + dog + " Detected cat - " + cat;
        document.getElementById("result_count").style.color = "rgb(" + random_r + "," + random_g + "," + random_b + ")";
        document.getElementById("result_label").style.color = "rgb(" + random_r + "," + random_g + "," + random_b + ")";
        img = document.getElementById("animal_image");
        console.log("result label" + results[0].label)
        if(results[0].label == "Dog") {
            img.src = "bark.gif";
            dog = dog + 1;
        } else if (results[0].label == "Cat"){
            img.src = "meow.gif";
            cat = cat + 1;
        }
        else {
            img.src = "ear.gif";
        }
    }

}