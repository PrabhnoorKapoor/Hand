Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:100
});
camera=document.getElementById("camera");
Webcam.attach(camera);
function take_snapshot(){
Webcam.snap(function(data_uri){
document.getElementById("result").innerHTML="<img id='captured_image' src='"+data_uri+"'>";
});
}
console.log("ml5 version-",ml5.version);
classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/train/image/model.json",modelloaded);
function modelloaded(){
    console.log("model is loaded");
}
function speak(){
    var synth=window.speechSynthesis;
    speak_1="the first pridiction is"+prediction_1;
    speak_2="and the second pridiction is"+prediction_2;
    var utterthis = new SpeechSynthesisUtterance(speak_1+speak_2);
    synth.speak(utterthis);
}