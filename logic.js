
function compute(input){
    if(sign == "+"){
        ans = parseFloat(num1)+parseFloat(num2) 
    }
    if(sign == "-"){
        ans = parseFloat(num1)-parseFloat(num2) 
    }
    if(sign == "/"){
        ans = parseFloat(num1)/parseFloat(num2) 
    }
    if(sign == "x" | sign == "*"){
        ans = parseFloat(num1)*parseFloat(num2) 
    }
    sign = 0;
    num1 = "";
    num2 = "";
    
}
let ans = "", trigger = 0, num1 = "", num2 = "",sign = 0;

function loading(s){
    ans = "", trigger = 0, num1 = "", num2 = "",sign = 0;
    for(i = 0;i<s.length;i++){
        if(!isNaN(parseInt(s[i])) | s[i] == '.'){    
            if(trigger == 0){
                num1 += s[i]
            
            }
            else{
                if(ans != ""){
                    num1 = String(ans);
                }
                num2 += s[i]
            
            }
        }
        else{
            if(num1 != "" & num2 != ""){
                compute()
            }
            sign = s[i];
            trigger = 1;
        }
    }
    if(num1 != "" & num2 != ""){
        compute()
    }
    return ans
}
function displaying(event){
   
    audio.play();
    let a = document.getElementsByTagName("input")
    let target = event.target
    if(target.innerHTML != '=' & target.innerHTML != 'CLR' & target.innerHTML != 'AC'){
        a[0].value += target.innerHTML
    }
    else if(target.innerHTML == 'AC'){
        a[0].value = '';
        ans = "";
    }
    else if(target.innerHTML == 'CLR'){
        a[0].value = a[0].value.substring(0,a[0].value.length-1);
    }
    else{
        a[0].value = loading(a[0].value);
    }
}

let buttons = document.getElementsByTagName('button');
for(let i = 0;i<buttons.length;i++){
    buttons[i].addEventListener('click',displaying)
}

inputbox = document.getElementsByClassName("inputs")[0]
inputbox.addEventListener('keydown',function(event){
    if(!isNaN(parseInt(event.key)) | event.key == '*'| event.key == '/'| event.key == '+'| event.key == '-' | event.key == 'Backspace'){
        audio.currentTime = 0;
        audio.play();
    }
    else if (event.key == 'Enter'){
        audio.currentTime = 0;
        audio.play();
        inputbox.value = loading(inputbox.value)
    }
    else if (event.key == 'Escape'){
        audio.currentTime = 0; 
        audio.play();
         event.target.value = ""
    }
});
const audio = document.querySelector('#myAudio');