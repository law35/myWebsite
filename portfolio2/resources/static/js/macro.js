var bodyweight;
var fats;
var proteins;
var cal;
var carbs;
var bmr;
var choicepool;
var genderchoice;
var heightcm;
var heightft;
var userage;
var bodyweightkg;

	
function find_selection(field){
	/*Process values from the html physical activity radio buttons.*/
	choicepool = document.getElementsByName(field);
	var size = choicepool.length;
	
	for(i=0; i < size; i++){
		if(choicepool[i].checked == true){
			return choicepool[i].value;
		}
	}	
}
	

function gender_selection(field){
	/*Process values from the html gender choice radio buttons.*/
	genderchoice = document.getElementsByName(field);
	var size = genderchoice.length;
	
	for(i=0; i < size; i++){
		if(genderchoice[i].checked == true){
			return genderchoice[i].value;
		}
	}
}


function get_weight(){ 
	bodyweight = document.querySelector('#weightlbs').value;
	bodyweightkg = ((1 / 2.2) * (bodyweight));
	
	return bodyweightkg;
}


function get_height(){
	heightft = document.querySelector('#height').value;
	heightcm = ((1 / 0.0323) *(heightft));
	
	return heightcm;
}


function get_age(){
	userage = document.querySelector('#age').value;
	
	return userage;
}


function BMR(){
	/*Mifflin formula:*/
	bmr = ((10 * get_weight() ) + (6.25 * get_height()) - (5 * get_age()) + (gender_selection("gender")));
	
	return bmr;
}
	
	
function macro_cal(){	
	fats = (get_weight() * 0.6);
	proteins = (get_weight() * 0.8);
	cal = (BMR() * find_selection("activity"));
	carbo = (( cal - proteins) / (4));
	
	document.getElementById("fats").innerHTML = fats;
	document.getElementById("protein").innerHTML = proteins;
	document.getElementById("calories").innerHTML = cal;
	document.getElementById("carbs").innerHTML = carbo;

}