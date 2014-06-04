// JavaScript Document
function Resolver(operador){
	var F1=new Array(2);
	var F2=new Array(2);
	var R=new Array(2);
	
	F1[0]=document.getElementById("N1").value;
	F2[0]=document.getElementById("N2").value;
	F1[1]=document.getElementById("D1").value;
	F2[1]=document.getElementById("D2").value;
	
	switch(operador){
		case'+':
		document.getElementById("operador").src="imagenes/suma.jpg";
		R[0]=F1[0]*F2[1]+F1[1]*F2[0];
		R[1]=F1[1]*F2[1];
		break;
		
			case'-':
		document.getElementById("operador").src="imagenes/resta.jpg";
		R[0]=F1[0]*F2[1]-F1[1]*F2[0];
		R[1]=F1[1]*F2[1];
		break;
		
			case'*':
		document.getElementById("operador").src="imagenes/MULTIP1.jpg";
		R[0]=F1[0]*F2[0];
		R[1]=F1[1]*F2[1];
		break;
			
			case'/':
		document.getElementById("operador").src="imagenes/division.jpg";
		R[0]=F1[0]*F2[1];
		R[1]=F1[1]*F2[0];
		break;
		}
		document.getElementById("RN").value=R[0];
		document.getElementById("RD").value=R[1];
	}