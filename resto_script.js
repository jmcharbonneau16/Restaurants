var term = document.getElementById('srchbox').value
var o = document.getElementById("ddlViewBy");
var strUser = o.options[o.selectedIndex].value;
var res = [];

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
for (var i = 1; i < res.length; i+=1){
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
  var para = document.createElement("p");
  var rName = document.createElement("span")
  rName.id = "name";
  rName.innerHTML = res[i].name + "<br>";
  var rAddress = document.createElement("span")
  rAddress.id = "address";
  rAddress.innerHTML = res[i].formatted_address + "<br>";
  var rPhone = document.createElement("span")
  rPhone.id = "phone";
  rPhone.innerHTML = res[i].formatted_phone_number + "<br>" + "<br>";
  para.appendChild(rName);
  para.appendChild(rAddress);
  para.appendChild(rPhone);
  var element = document.getElementById("result");
  element.appendChild(para);
}

}

function afficher(){

}
