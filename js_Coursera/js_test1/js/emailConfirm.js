function check() {
    var email1 = document.getElementById("email_addr");
    var email2 = document.getElementById("email_repeat");
    var form = document.getElementById('form');
    if (email1.value != email2.value) {
        var p = document.createElement('p');
        p.appendChild(document.createTextNode("Emails don't match"));
        form.insertBefore(p, form.childNodes[form.lastChild]);
        p.style.padding = "20px";
        p.style.backgroundColor = "#f44336";
        p.style.color = "#ffffff"
        p.style.fontSize = "20px";
        p.style.width = "300px";
        p.style.textAlign = "center";
        p.className="alert";
        return false;
    }


}

function deleteAlert() {

    var alerts= document.getElementsByClassName('alert');
    while (alerts.length!=0)
    {
        var alerts= document.getElementsByClassName('alert');

        for (let i = 0; i < alerts.length; i++) {
            alerts[i].remove();
        }
    }

}
