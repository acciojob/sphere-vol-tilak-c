function volume_sphere() {
    //Write your code here
	event.preventDefault();
	const radiusValue=parseFloat(document.getElementById("radius").value);
	const result=4/3*3.14*radiusValue*radiusValue*radiusValue;
	const volumeValue=document.getElementById("volume")
	const buttonSubmit=document.getElementById("submit");
	// buttonSubmit.addEventListener("click",function(){
	if(result<0){
		volumeValue.value=NaN;
		return;
	}
	volumeValue.value=result.toFixed(4);	
	// })
  
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
