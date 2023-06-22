https://teachablemachine.withgoogle.com/models/fTj_Ndp46/

prediction_1 = ""

Webcam.set({
    width: 350,
    height: 300,
    image_format: 'png',
    png_quality: 90
});

camera = document.getElementById("camera");

Webcam.attach('#camera');


function take_snapshot() {
    Webcam.snap(function (data_uri) {
        document.getElementById("result").innerHTML = '<img id="captured_image" src="' + data_uri + '"/>';
    });
}

console.log('ml5 version:', ml5.version);

//create your model and store it in var classifier 
classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/fTj_Ndp46/model.json",modelLoaded);

function modelLoaded(){
    console.log("model Loaded");
}
 function check(){
    image=document.getElementById("captured_image");
    classifier.classify(image,gotResult);
} 

function gotResult(error, results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
        document.getElementById("status").innerHTML=results[0].label;
        if(results[0].label=="With mask"){
            document.getElementById("update_emoji").innerHTML="&#x1F637;";
        }
        else if(results[0].label=="No mask"){
            document.getElementById("update_emoji").innerHTML="&#x26d4;";
        }
    }
}
