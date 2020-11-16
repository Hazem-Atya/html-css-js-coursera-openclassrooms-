/*
function billingFunction() {
    var check=document.getElementById('same');
    if(check.checked)
    {
        document.getElementById('billingName').value=document.getElementById('shippingName').value;
        document.getElementById('billingZip').value=document.getElementById('shippingZip').value;

    }else{
        document.getElementById('billingName').value="";
        document.getElementById('billingZip').value="";
    }
}*/
/*Add the JavaScript here for the function billingFunction().  It is responsible for setting and clearing the fields in Billing Information */
function billingFunction() {

    // If checked
    if (document.getElementById("same").checked) {
        document.getElementById("billingName").value = document.getElementById("shippingName").value;
        document.getElementById("billingZip").value = document.getElementById("shippingZip").value;
    }

    // If not checked
    else {
        document.getElementById("billingName").value = "";
        document.getElementById("billingZip").value = "";
    }
}