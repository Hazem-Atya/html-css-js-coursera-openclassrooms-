var progress=document.getElementById("myTest");
progress.value=2;
var dim=document.getElementById('dim');
var aug=document.getElementById('aug');
aug.addEventListener("click",function(){
	if(progress.value <10)
	progress.value++;
})
dim.addEventListener("click",function(){
	if(progress.value >0)
	progress.value--;
})