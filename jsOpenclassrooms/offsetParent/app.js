var parent=document.getElementById('parent'),
    child=document.getElementById('child');

alert('Sans notre fonction la position de l\'élement enfant est :\n\n'+
        'offsetTop: '+child.offsetTop+'\n'+
        'offsetLeft: '+child.offsetLeft);
function getAbsoluteOffset(element){
    var top=0,
        left=0;
    do{
        top+=element.offsetTop;
        left+=element.offsetLeft;

    }while(element=element.offsetParent);
	//element possède une référence vers un objet valide 

    return {
        top:top,
        left:left
    };
}
alert('Avec la fonction de calcul la position de l\'element enfant est \n\n'+
       'offsetTop:'+getAbsoluteOffset(child).top+'\n'+
        'offsetLeft:'+getAbsoluteOffset(child).left);