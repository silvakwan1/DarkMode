const buttonDarkMode = document.getElementById('button');
const body = document.getElementsByTagName('body')[0];

buttonDarkMode.addEventListener('click', DarkMode);

function DarkMode(){
    ChageClass();
    ChageText()
};

function ChageClass(){
    body.classList.toggle('dark_mode')
    
}

function ChageText(){
    if(body.classList.contains('dark_mode')){
        buttonDarkMode.innerHTML = "light mode"
        return;
    }
    buttonDarkMode.innerHTML = "dark mode"
}
