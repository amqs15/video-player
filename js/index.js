const $video = document.querySelector('#video')
const $play = document.querySelector('#play')
const $pause = document.querySelector('#pause')
const $backward = document.querySelector('#backward')
const $forward = document.querySelector('#forward')

$play.addEventListener('click', handlePlay)
$pause.addEventListener('click', handlePause)

function handlePlay(){
    $video.play()
    $play.hidden = true
    $pause.hidden = false
    console.log('le diste click al boton de play')

}
function handlePause(){
    $video.pause()
    $pause.hidden = true
    $play.hidden = false
    console.log('le diste click al boton de pausa')
}

$backward.addEventListener('click',handBackward)
function handBackward(){
    $video.currentTime -= 10
    console.log('para atras', $video.currentTime)
}

$forward.addEventListener('click',handForward)
function handForward(){
    $video.currentTime += 10
    console.log('para adelante', $video.currentTime)
}

const $progress = document.querySelector('#progress')
$video.addEventListener('loadmetadata', handleLoaded)
$video.addEventListener('timeupdate', handleTimeUpdate)

function handleLoaded(){
    $progress.max = $video.duration
}

function handleTimeUpdate(){
$progress.value = $video.currentTime
// console.log('tiempo actual', $video.currentTime)
}

$progress.addEventListener('input', handleInput)
function handleInput(){
    $video.currentTime = $progress.value
    console.log($progress.value)
}