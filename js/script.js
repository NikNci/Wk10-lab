let rotate = 0
function toggle(){
	if (rotate % 2 ==0){
		document.getElementById("fish").style.display="inline";
		document.getElementById("tree").style.display="none";
	}else{
		document.getElementById("fish").style.display="none";
		document.getElementById("tree").style.display="inline";
	}
	rotate++
}

function hide(){
	document.getElementById("fish").style.display="none";
}

function radius(){
	let allTDs = document.querySelectorAll('td'); //CODE CONTRIBUTED BY CHAT.GPT, IT SELECTS ALL TDS AND AFFECTS THEM
	let sliderValue=document.getElementById("slider").value;
	allTDs.forEach(td => {
    td.style.borderRadius = sliderValue+"px" ; 
	});//END OF CODE CONTRIBUTED BY CHAT.GPT
}
