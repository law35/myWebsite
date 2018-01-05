/*+------------------------------------------------------------------+*/
/*|                       Random Password Generator                  |*/
/*+------------------------------------------------------------------+*/
/*|                       Developed by C.Lawshea.                    |*/
/*+------------------------------------------------------------------+*/


var alpha_numeric = "abcdefghijklmnopqrstuvwxyz0123456789!@#$%";


function getValue(){
	/*Process values from the html radio buttons.*/
	var assess = document.getElementsByName("pwlength");
	var size = assess.length;
	
	for(i=0; i < size; i++){
		if(assess[i].checked == true){
			return assess[i].value;
		}
	}	
}



function passwordGen() {
	/*Generates a random password.*/
	var  val = getValue();
	var new_password = ''

	for (i = 0; i != val; i++){
		new_password += alpha_numeric.charAt(Math.floor(Math.random() * alpha_numeric.length));
		}
	document.getElementById("newpw").innerHTML = new_password;
	}

