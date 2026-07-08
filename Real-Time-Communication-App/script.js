const socket = io();

const localVideo =
document.getElementById("localVideo");

const remoteVideo =
document.getElementById("remoteVideo");

let localStream;

async function startCall(){

  localStream =
  await navigator.mediaDevices.getUserMedia({
    video:true,
    audio:true
  });

  localVideo.srcObject = localStream;

  alert("Video Call Started");
}

async function shareScreen(){

  const screenStream =
  await navigator.mediaDevices.getDisplayMedia({
    video:true
  });

  localVideo.srcObject = screenStream;

  alert("Screen Sharing Started");
}

/* WHITEBOARD */

const canvas =
document.getElementById("whiteboard");

const ctx = canvas.getContext("2d");

let drawing = false;

canvas.addEventListener("mousedown", ()=>{
  drawing = true;
});

canvas.addEventListener("mouseup", ()=>{
  drawing = false;

  ctx.beginPath();
});

canvas.addEventListener("mousemove", draw);

function draw(event){

  if(!drawing) return;

  ctx.lineWidth = 3;

  ctx.lineCap = "round";

  ctx.lineTo(event.offsetX,event.offsetY);

  ctx.stroke();

  ctx.beginPath();

  ctx.moveTo(event.offsetX,event.offsetY);
}