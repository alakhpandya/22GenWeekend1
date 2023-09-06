let hr=0, min=0, s=0, ms=0, i = 0;
const timing_function = () => {
    ms++;
    if (ms == 100){
        s++;
        ms=0;
        if (s == 60){
            min++;
            s = 0;
            if (min == 60){
                hr++;
                min = 0;
            }
        }
    }
    // timer.innerText = `${hr.toString().padStart(2, '0')}:${min.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}:${ms.toString().padStart(3, '0')}`
    hr_box.innerText = `${hr.toString().padStart(2, '0')}`
    min_box.innerText = `${min.toString().padStart(2, '0')}`
    s_box.innerText = `${s.toString().padStart(2, '0')}`
    ms_box.innerText = `${ms.toString().padStart(3, '0')}`
}

let play_icon = document.querySelector('.play');
let timer = document.querySelector('.timer');
let hr_box = document.querySelector('.hr-box')
let min_box = document.querySelector('.min-box')
let s_box = document.querySelector('.s-box')
let ms_box = document.querySelector('.ms-box')
let timing_interval;
let reset_icon = document.querySelector('.reset');

play_icon.addEventListener('click',()=>{
    if(play_icon.classList.contains('fa-play')){
        play_icon.classList.remove('fa-play');
        play_icon.classList.add('fa-pause');
        play_icon.style.paddingRight = "8px";
        // Timer Start Logic
        timing_interval = setInterval(timing_function, 10);
    }
    else if(play_icon.classList.contains('fa-pause')){
        play_icon.classList.remove('fa-pause');
        play_icon.classList.add('fa-play');
        console.log(play_icon.classList);
        play_icon.style.paddingRight = "5px";
        // Timer Pause Logic
        clearInterval(timing_interval);
    }
})

reset_icon.addEventListener('click', () => {
    hr = 0;
    min = 0;
    s = 0;
    ms = 0;
    hr_box.innerText = "00";
    min_box.innerText = "00";
    s_box.innerText = "00";
    ms_box.innerText = "000";
})