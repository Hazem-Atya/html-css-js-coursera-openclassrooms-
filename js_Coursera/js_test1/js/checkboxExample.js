function nicknameFunction() {
    var nick = document.getElementById('nick');
    var yesNick = document.getElementById('yesNick');
    if (yesNick.value == 'yes') {
        yesNick.value = 'no';
        nick.style.display = "block";
        
    } else {
        yesNick.value='yes';
        nick.style.display="none";
    }
}
/*
function nicknameFunction(){
    if (document.getElementById('yesNick').checked){
        document.getElementById('nick').style.display="inline";
        document.getElementById('nickname').setAttribute('required',true);
    }
    else{
        document.getElementById('nickname').removeAttribute('required');
        document.getElementById('nick').style.display="none";
    }
}
*/
