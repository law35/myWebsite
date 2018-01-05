//Education content(Biology)//

var h3bio146 = "Biology Major: California Baptist University (1 year 10 months):";
var h4bio146 = "Biology 146:";
var bio146 = "Topics covered include cell structure and function, genetics, reproduction and development of animal systems.";
var roman5 = ".V";

var h3bio148 = "";
var h4bio148 = "Biology 148:";
var bio148 = "Topics includes organismal biology of animals and plants, their behavior, ecology, evolution and adaptations.";
var roman6 = ".VI";

var h3genbio1 = "";
var h4genbio1 = "General Biology 1:";
var genbio1 = "Fundamental concepts of biochemistry, cell biology, genetics. Concepts include important organic molecules, cell structure and function, metabolism and enzyme activity, cellular respiration and photosynthesis, DNA structure, meiosis and mitosis, Mendelian genetics.";
var roman7 = ".VII"

var h3bio114 = "";
var h4bio114 = "Biology 114:";
var bio114 = "A study of the physiology, morphology, reproduction, and a survey of the plant kingdom, including fungi, algae, liverworts, mosses, ferns, gymnosperms and angiosperms. Emphasis will be placed on the development, reproduction and the relevance of plants to humans.";
var roman8 = ".VIII";

var h3genchem115 ="";
var h4genchem115 = "General Chemistry 115:";
var genchem115 = "Structure and behavior of inorganic matter and a mathematical treatment of chemical systems.";

var h3genchem125 = "";
var h4genchem125 = "General Chemistry";
var genchem125 = "A continuation of Chemistry 115, including qualitative inorganic analysis."

var h3genpsych ="";
var h4genpsych = "General Psychology:";
var genpsych = "introductory survey of the processes of adjustment, growth, learning, remembering, perception, sensation, socialization, and emotions.";

var h3algebra = "";
var h4algebra = "College Algebra 1 & 2:";
var algebra = "Instruction in the following areas; roots and radicals, quadratic equations and inequalities, graphing relations and functions, systems of equations and inequalities, and matrices and determinants, evaluate logarithmic and exponential expressions; calculate the probability of events with given sets of parameters, Evaluate and apply arithmetic and geometric sequences.";


function changecontent(){
	document.getElementById("contenttitle1").innerHTML = h3bio146;
	document.getElementById("subtitle1").innerHTML = h4bio146;
	document.getElementById("list1").innerHTML = bio146;
	document.getElementById("roman5").innerHTML = roman5;
	
	document.getElementById("contenttitle2").innerHTML = h3bio148;
	document.getElementById("subtitle2").innerHTML = h4bio148;
	document.getElementById("list2").innerHTML = bio148;
	document.getElementById("roman6").innerHTML = roman6;
	
	document.getElementById("contenttitle3").innerHTML = h3genbio1;
	document.getElementById("subtitle3").innerHTML = h4genbio1;
	document.getElementById("list3").innerHTML = genbio1;
	document.getElementById("roman7").innerHTML = roman7;
	
	document.getElementById("contenttitle4").innerHTML = h3bio114;
	document.getElementById("subtitle4").innerHTML = h4bio114;
	document.getElementById("list4").innerHTML = bio114;
	document.getElementById("roman8").innerHTML = roman8;
	
	document.getElementById("contenttitle5").innerHTML = h3genchem115;
	document.getElementById("subtitle5").innerHTML = h4genchem115;
	document.getElementById("list5").innerHTML = genchem115;
	
	document.getElementById("contenttitle6").innerHTML = h3genchem125;
	document.getElementById("subtitle6").innerHTML = h4genchem125;
	document.getElementById("list6").innerHTML = genchem125;
	
	document.getElementById("contenttitle7").innerHTML = h3genpsych;
	document.getElementById("subtitle7").innerHTML = h4genpsych;
	document.getElementById("list7").innerHTML = genpsych;
	
	document.getElementById("contenttitle8").innerHTML = h3algebra;
	document.getElementById("subtitle8").innerHTML = h4algebra;
	document.getElementById("list8").innerHTML = algebra;
	
	return false
}