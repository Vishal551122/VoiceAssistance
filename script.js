let btn = document.querySelector("#btn")
let content=document.querySelector("#content")
let voice = document.querySelector("#voice")

function speak(text){
    let text_speak=new SpeechSynthesisUtterance(text)
    text_speak.rate=1
    text_speak.pitch=1
    text_speak.volume=1
    text_speak.lang="hi-IN"
    window.speechSynthesis.speak(text_speak)

}
function wishMe(){
    let day = new Date()
    let hours=day.getHours()
    if(hours >=0 && hours<12){
        speak("Good Morning ji")
    }
    else if(hours >=12 && hours < 16){
        speak("Good Afternoon ji")
    }else{
        speak("Good Evening ji") 
    }
}
window.addEventListener('load',()=>{wishMe()})
let speechRecognition=window.SpeechRecognition || window.webkitSpeechRecognition 
let recognition = new speechRecognition()
recognition.onresult=(event)=>{
    let currentIndex=event.resultIndex 
    let transcript = event.results[currentIndex][0].transcript
    content.innerText=transcript
    takeCommand(transcript.toLowerCase())
    
}

btn.addEventListener("click",()=>{
    recognition.start()
    btn.style.display="none"
    voice.style.display="block"
})
function takeCommand(message){
    btn.style.display="flex"
    voice.style.display="none"
    if(message.includes("hello") || message.includes("hey") ){
        speak("hello ji, what can i help you?")
    }
    else if(message.includes("who are you")){
        speak("It's me Vamika, your virtual assistant")
    }
    else if(message.includes("open youtube")){
        speak("opening youtube...")
        window.open("https://youtube.com/","_blank")
    }
    else if(message.includes("open google")){
        speak("opening google...")
        window.open("https://google.com/","_blank")
    }
    else if(message.includes("open instagram")){
        speak("opening instagram...")
        window.open("https://instagram.com/","_blank")
    }
    else if(message.includes("open facebook")){
        speak("opening facebook...")
        window.open("https://facebook.com/","_blank")
    }
    else if(message.includes("open whatsapp")){
        speak("opening whatsapp...")
        window.open("https://whatsapp.com/","_blank")
    } else if(message.includes("open twitter")){
        speak("opening twitter...")
        window.open("https://twitter.com/","_blank")
    }
    else if(message.includes("play song")){
        speak("playing song...")
        window.open("https://open.spotify.com/album/0Rkv5iqjF2uenfL0OVB8hg","_blank")
    }
    else if(message.includes("play music")){
        speak("playing music...")
        window.open("https://open.spotify.com/album/0Rkv5iqjF2uenfL0OVB8hg","_blank")
    }
    else if(message.includes("open spotify")){
        speak("playing song...")
        window.open("https://open.spotify.com/","_blank")
    }
    else if(message.includes("open calculator")){
        speak("opening calculator...")
        window.open("calculator://")
    }
    else if(message.includes("open camera")){
        speak("opening camera...")
        window.open("camera://")
    }
    else if(message.includes("time")){
        let time=new Date().toLocaleString(undefined,{hour:"numeric",minute:"numeric"})
            speak(time)
    }
    else if(message.includes("date")){
        let date = new Date().toLocaleString(undefined,{day:"numeric",month:"short"})
        speak(time)
    }

    else{
        let msg="this is what i found on internet" + message.replace("vamika","")
        speak(msg)
        window.open(`https://www.google.com/search?q=${message.replace("vamika","")}`,"_blank")
    }

}