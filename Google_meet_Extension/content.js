window.onload = function(){
    function clickbutton(){
        let voice_button = document.querySelector("#yDmH0d > c-wiz > div > div > div.TKU8Od > div.crqnQb > div > div.gAGjv > div.vgJExf > div > div > div.ZUpb4c > div.oORaUb.NONs6c > div > div.EhAUAc > div.Pr6Uwe > div > div > div > div > div.U26fgb.JRY2Pb.mUbCce.kpROve.yBiuPb.y1zVCf.Fjnqyb.y1zVCf.EZxqsf.M9Bg4d");
        let video_button = document.querySelector("#yDmH0d > c-wiz > div > div > div.TKU8Od > div.crqnQb > div > div.gAGjv > div.vgJExf > div > div > div.ZUpb4c > div.oORaUb.NONs6c > div > div.EhAUAc > div.utiQxe > div > div > div > div.U26fgb.JRY2Pb.mUbCce.kpROve.yBiuPb.y1zVCf.Fjnqyb.y1zVCf.EZxqsf.M9Bg4d");
        if(voice_button && video_button){
            voice_button.click();
            video_button.click();
            setTimeout(() => {
                join_Meet();
            }, 2000);
        } 
    }
    function join_Meet(){
        let join_button = document.querySelector("#yDmH0d > c-wiz > div > div > div.TKU8Od > div.crqnQb > div > div.gAGjv > div.vgJExf > div > div > div.d7iDfe.NONs6c > div.shTJQe > div.jtn8y > div.XCoPyb > div > div > div > button");
        if(join_button){
            join_button.click();
        }
    }
    setTimeout(() => {
    clickbutton();
}, 2000);
}

