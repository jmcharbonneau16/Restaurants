var term = document.getElementById('srchbox').value;
var o = document.getElementById("ddlViewBy");
var strUser = o.options[o.selectedIndex].value;
var res = [];

function displayDetails(id){
	var restoSelect = null;
	for (var i = 0; i < resto.length; i+=1){
		if(resto[i].id == id){
			restoSelect = resto[i];
			break;
		}
	}
	var details = document.getElementById("details");
	details.innerHTML = "";
	var name = document.createElement("div");
	name.innerHTML = restoSelect.name + "<br/>" + restoSelect.formatted_address + "<br/>" + restoSelect.formatted_phone_number + "<br/>" + "<a href=\"" + restoSelect.website + "\"> Site internet </a>"; 
	
	
	details.appendChild(name);
	
	
	
}

function searchT(){
	var term = document.getElementById('srchbox').value
	var o = document.getElementById("dropmenu");
	var strUser = o.options[o.selectedIndex].value;
	var res = [];

	if (strUser == 1){
		for (var i = 0; i < resto.length; i+=1){
			var nom = resto[i].name;
			var lcnom = nom.toLowerCase();
			if (lcnom.search(term) >= 0){
				res.push(resto[i]);
			}
		}
	}

	document.getElementById("result").innerHTML = res[0].name + "<br>" + res[0].formatted_address + "<br>" + res[0].formatted_phone_number + "<br>" + "<br>";
	for (var i = 0; i < res.length; i+=1){
	  var para = document.createElement("p"+ i);
	  para.id = "p" + i;
	  para.innerHTML = res[i].name + "<br>" + res[i].formatted_address + "<br>" + res[i].formatted_phone_number + "<br>" + "<br>";
	  var element = document.getElementById("result");
	  element.appendChild(para);
	}
}

function searchF(){
  var term = document.getElementById('srchbox').value
  var o = document.getElementById("dropmenu");
  var strUser = o.options[o.selectedIndex].value;
  var res = [];

if (strUser == 1){
  for (var i = 0; i < resto.length; i+=1){
    var nom = resto[i].name;
    var lcnom = nom.toLowerCase();
    if (lcnom.search(term) >= 0){
    res.push(resto[i]);
  }
  }
}else if(strUser == 2){
  for (var i = 0; i < resto.length; i+=1){
    var local = resto[i].formatted_address;
    var lcLocal = local.toLowerCase();
    if (lcLocal.search(term) >= 0){
    res.push(resto[i]);
  }
  }
}

document.getElementById("result").innerHTML = "";
for (var i = 0; i < res.length; i+=1){
  var para = document.createElement("span");
  para.className = "cases";
  para.id = res[i].id;
  para.onclick = function(){
	 displayDetails(this.id);
  };
  var rName = document.createElement("span");
  rName.id = "name";
  rName.className = "infoTitre";
  rName.innerHTML = "<br>" + res[i].name;
  var rAddress = document.createElement("span");
  rAddress.className = "info";
  rAddress.id = "address";
  rAddress.innerHTML = "<br>" + res[i].formatted_address + "<br>";
  var rPhone = document.createElement("span");
  rPhone.id = "phone";
  rPhone.className = "info";
  rPhone.innerHTML = res[i].formatted_phone_number + "<br>";
  var icon = document.createElement("img");
  icon.src = res[i].icon;
  icon.width = 15;
  icon.height = 15;
  icon.className = "icon";
  para.appendChild(icon);
  para.appendChild(rName);
  para.appendChild(rAddress);
  para.appendChild(rPhone);
  var element = document.getElementById("result");
  element.appendChild(para);
}

}

function afficher(){

}
