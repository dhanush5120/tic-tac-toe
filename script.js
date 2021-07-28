let flag = 1;

function start(){
	let block1 = document.getElementById("block1");
	let block2 = document.getElementById("block2");
	let block3 = document.getElementById("block3");
	let block4 = document.getElementById("block4");
	let block5 = document.getElementById("block5");
	let block6 = document.getElementById("block6");
	let block7 = document.getElementById("block7");
	let block8 = document.getElementById("block8");
	let block9 = document.getElementById("block9");
	block1.disabled = false;
	block2.disabled = false;
	block3.disabled = false;
	block4.disabled = false;
	block5.disabled = false;
	block6.disabled = false;
	block7.disabled = false;
	block8.disabled = false;
	block9.disabled = false;


	if(flag == 1){
		document.getElementById("result").innerHTML = "Player X's turn";
	}
	else{
		document.getElementById("result").innerHTML = "Player O's turn";
	}

}

function reset(){
	location.reload();

}


function block1Check(){

	if(flag == 1){
		document.getElementById("block1").value = 'X';
		document.getElementById("block1").disabled = true;
		flag = 0;
	}
	else{

		document.getElementById("block1").value = 'O';
		document.getElementById("block1").disabled = true;
		flag = 1;
	}
}

function block2Check(){

	if(flag == 1){
		document.getElementById("block2").value = 'X';
		document.getElementById("block2").disabled = true;
		flag = 0;
	}
	else{

		document.getElementById("block2").value = 'O';
		document.getElementById("block2").disabled = true;
		flag = 1;
	}
}

function block3Check(){

	if(flag == 1){
		document.getElementById("block3").value = 'X';
		document.getElementById("block3").disabled = true;
		flag = 0;
	}
	else{

		document.getElementById("block3").value = 'O';
		document.getElementById("block3").disabled = true;
		flag = 1;
	}
}

function block4Check(){

	if(flag == 1){
		document.getElementById("block4").value = 'X';
		document.getElementById("block4").disabled = true;
		flag = 0;
	}
	else{

		document.getElementById("block4").value = 'O';
		document.getElementById("block4").disabled = true;
		flag = 1;
	}
}

function block5Check(){

	if(flag == 1){
		document.getElementById("block5").value = 'X';
		document.getElementById("block5").disabled = true;
		flag = 0;
	}
	else{

		document.getElementById("block5").value = 'O';
		document.getElementById("block5").disabled = true;
		flag = 1;
	}
}

function block6Check(){

	if(flag == 1){
		document.getElementById("block6").value = 'X';
		document.getElementById("block6").disabled = true;
		flag = 0;
	}
	else{

		document.getElementById("block6").value = 'O';
		document.getElementById("block6").disabled = true;
		flag = 1;
	}
}

function block7Check(){

	if(flag == 1){
		document.getElementById("block7").value = 'X';
		document.getElementById("block7").disabled = true;
		flag = 0;
	}
	else{

		document.getElementById("block7").value = 'O';
		document.getElementById("block7").disabled = true;
		flag = 1;
	}
}

function block8Check(){

	if(flag == 1){
		document.getElementById("block8").value = 'X';
		document.getElementById("block8").disabled = true;
		flag = 0;
	}
	else{

		document.getElementById("block8").value = 'O';
		document.getElementById("block8").disabled = true;
		flag = 1;
	}
}

function block9Check(){

	if(flag == 1){
		document.getElementById("block9").value = 'X';
		document.getElementById("block9").disabled = true;
		flag = 0;
	}
	else{

		document.getElementById("block9").value = 'O';
		document.getElementById("block9").disabled = true;
		flag = 1;
	}
}

function winCheck(){
	let block1 = document.getElementById("block1");
	let block2 = document.getElementById("block2");
	let block3 = document.getElementById("block3");
	let block4 = document.getElementById("block4");
	let block5 = document.getElementById("block5");
	let block6 = document.getElementById("block6");
	let block7 = document.getElementById("block7");
	let block8 = document.getElementById("block8");
	let block9 = document.getElementById("block9");

	if(block1.value == 'X' && block2.value == 'X' && block3.value == 'X'){

		document.getElementById("result").innerHTML = "Player X Won";
		block1.className = "success";
		block2.className = "success";
		block3.className = "success";
		
		block4.disabled = true;
		block5.disabled = true;
		block6.disabled = true;
		block7.disabled = true;
		block8.disabled = true;
		block9.disabled = true;
	}

	else if(block1.value == 'O' && block2.value == 'O' && block3.value == 'O'){

		document.getElementById("result").innerHTML = "Player O Won";
		block1.className = "success";
		block2.className = "success";
		block3.className = "success";
		
		block4.disabled = true;
		block5.disabled = true;
		block6.disabled = true;
		block7.disabled = true;
		block8.disabled = true;
		block9.disabled = true;
	}

	else if(block1.value == 'X' && block4.value == 'X' && block7.value == 'X'){

		document.getElementById("result").innerHTML = "Player X Won";
		block1.className = "success";
		block4.className = "success";
		block7.className = "success";
		
		block2.disabled = true;
		block3.disabled = true;
		block5.disabled = true;
		block6.disabled = true;
		block8.disabled = true;
		block9.disabled = true;
	}

	else if(block1.value == 'O' && block4.value == 'O' && block7.value == 'O'){

		document.getElementById("result").innerHTML = "Player O Won";
		block1.className = "success";
		block4.className = "success";
		block7.className = "success";

		block2.disabled = true;
		block3.disabled = true;
		block5.disabled = true;
		block6.disabled = true;
		block8.disabled = true;
		block9.disabled = true;
	}

	else if(block1.value == 'X' && block5.value == 'X' && block9.value == 'X'){

		document.getElementById("result").innerHTML = "Player X Won";
		block1.className = "success";
		block5.className = "success";
		block9.className = "success";

		block2.disabled = true;
		block3.disabled = true;
		block4.disabled = true;
		block6.disabled = true;
		block7.disabled = true;
		block8.disabled = true;
	}

	else if(block1.value == 'O' && block5.value == 'O' && block9.value == 'O'){

		document.getElementById("result").innerHTML = "Player O Won";
		block1.className = "success";
		block5.className = "success";
		block9.className = "success";

		block2.disabled = true;
		block3.disabled = true;
		block5.disabled = true;
		block6.disabled = true;
		block8.disabled = true;
		block9.disabled = true;
	}

	else if(block2.value == 'X' && block5.value == 'X' && block8.value == 'X'){

		document.getElementById("result").innerHTML = "Player X Won";
		block2.className = "success";
		block5.className = "success";
		block8.className = "success";

		block1.disabled = true;
		block3.disabled = true;
		block4.disabled = true;
		block6.disabled = true;
		block7.disabled = true;
		block9.disabled = true;
	}

	else if(block2.value == 'O' && block5.value == 'O' && block8.value == 'O'){

		document.getElementById("result").innerHTML = "Player O Won";
		block2.className = "success";
		block5.className = "success";
		block8.className = "success";

		block1.disabled = true;
		block3.disabled = true;
		block4.disabled = true;
		block6.disabled = true;
		block7.disabled = true;
		block9.disabled = true;
	}

	else if(block3.value == 'X' && block6.value == 'X' && block9.value == 'X'){

		document.getElementById("result").innerHTML = "Player X Won";
		block3.className = "success";
		block6.className = "success";
		block9.className = "success";

		block1.disabled = true;
		block2.disabled = true;
		block4.disabled = true;
		block5.disabled = true;
		block7.disabled = true;
		block8.disabled = true;
	}

	else if(block3.value == 'O' && block6.value == 'O' && block9.value == 'O'){

		document.getElementById("result").innerHTML = "Player O Won";
		block3.className = "success";
		block6.className = "success";
		block9.className = "success";

		block1.disabled = true;
		block2.disabled = true;
		block4.disabled = true;
		block5.disabled = true;
		block7.disabled = true;
		block8.disabled = true;
	}

	else if(block4.value == 'X' && block5.value == 'X' && block6.value == 'X'){

		document.getElementById("result").innerHTML = "Player X Won";
		block4.className = "success";
		block5.className = "success";
		block6.className = "success";

		block1.disabled = true;
		block2.disabled = true;
		block3.disabled = true;
		block7.disabled = true;
		block8.disabled = true;
		block9.disabled = true;
	}

	else if(block4.value == 'O' && block5.value == 'O' && block6.value == 'O'){

		document.getElementById("result").innerHTML = "Player O Won";
		block4.className = "success";
		block5.className = "success";
		block6.className = "success";

		block1.disabled = true;
		block2.disabled = true;
		block3.disabled = true;
		block7.disabled = true;
		block8.disabled = true;
		block9.disabled = true;
	}

	else if(block7.value == 'X' && block8.value == 'X' && block9.value == 'X'){

		document.getElementById("result").innerHTML = "Player X Won";
		block7.className = "success";
		block8.className = "success";
		block9.className = "success";

		block1.disabled = true;
		block2.disabled = true;
		block3.disabled = true;
		block4.disabled = true;
		block5.disabled = true;
		block6.disabled = true;
	}

	else if(block7.value == 'O' && block8.value == 'O' && block9.value == 'O'){

		document.getElementById("result").innerHTML = "Player O Won";
		block7.className = "success";
		block8.className = "success";
		block9.className = "success";

		block1.disabled = true;
		block2.disabled = true;
		block3.disabled = true;
		block4.disabled = true;
		block5.disabled = true;
		block6.disabled = true;
	}

	else if(block3.value == 'X' && block5.value == 'X' && block7.value == 'X'){

		document.getElementById("result").innerHTML = "Player X Won";
		block3.className = "success";
		block5.className = "success";
		block7.className = "success";

		block1.disabled = true;
		block2.disabled = true;
		block4.disabled = true;
		block6.disabled = true;
		block8.disabled = true;
		block9.disabled = true;
	}

	else if(block3.value == 'O' && block5.value == 'O' && block7.value == 'O'){

		document.getElementById("result").innerHTML = "Player O Won";
		block3.className = "success";
		block5.className = "success";
		block7.className = "success";

		block1.disabled = true;
		block2.disabled = true;
		block4.disabled = true;
		block6.disabled = true;
		block8.disabled = true;
		block9.disabled = true;
	}

	else if((block1.value == 'X' || block1.value == 'O') && (block2.value == 'X' || block2.value == 'O') &&
			(block3.value == 'X' || block3.value == 'O') && (block4.value == 'X' || block4.value == 'O') &&
			(block5.value == 'X' || block5.value == 'O') && (block6.value == 'X' || block6.value == 'O') &&
			(block7.value == 'X' || block7.value == 'O') && (block8.value == 'X' || block8.value == 'O') &&
			(block9.value == 'X' || block9.value == 'O')){

		document.getElementById("result").innerHTML = "Match tied";
		block1.className = "danger";
		block2.className = "danger";
		block3.className = "danger";
		block4.className = "danger";
		block5.className = "danger";
		block6.className = "danger";
		block7.className = "danger";
		block8.className = "danger";
		block9.className = "danger";

	}

	else{
		if(flag == 1){
			document.getElementById("result").innerHTML = "Player X's turn";
		}
		else{
			document.getElementById("result").innerHTML = "Player O's turn";
		}
	}


}


