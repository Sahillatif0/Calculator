function clicked(element){
    let disVal = document.getElementById("val");
    let Res = document.getElementById("res");
    let bg = document.getElementsByClassName("calculator")[0].style.background;
    element.style.background = "rgb(27 23 25)";
    setTimeout(() => {
        if(element.id==="kequal")
            element.style.background = "rgb(90, 5, 5)";
        element.style.background = bg;
    }, 200);
    let value=element.innerText;
    if(element.id==="kAC"){
        Res.innerText = "= 0";
        Res.style.display="none";
        disVal.innerText = "";
    }
    else if(element.id==="kDEL")
        disVal.innerText = disVal.innerText.substr(0, disVal.innerText.length - 1);
    else if(element.id==="kequal"){
        disVal.innerText = Res.innerText.substr(2, Res.innerText.length);
        Res.style.display="none";
    }
    else{
        Res.style.display="inline";
        let char1 = disVal.innerText[disVal.innerText.length - 1];
        let char2 = value;
        if((char1==="+" || char1==="-" || char1==="*" || char1==="/") && (char2==="+" || char2==="-" || char2==="*" || char2==="/"))
            disVal.innerText = disVal.innerText.substr(0, disVal.innerText.length - 1);
        disVal.innerText+=value;
    }
    let lastchar = disVal.innerText[disVal.innerText.length - 1];
    
    if(lastchar!="+" && lastchar!="-" && lastchar!="*" && lastchar!="/"){
        console.log(disVal.innerText);
        if(disVal.innerText[0]==='0')
            Res.innerText = "= "+eval(disVal.innerText.substr(1, disVal.innerText.length));
        else
            Res.innerText = "= "+eval(disVal.innerText);
    }
    if(disVal.innerText.length<15)
        disVal.style.fontSize = "30px";
    else if(disVal.innerText.length<30)
        disVal.style.fontSize = 30-(disVal.innerText.length-14)+"px";
}