function searchF(){
  var term = document.getElementById('srchbox').value.toLowerCase();
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
}else if(strUser == 3){
    for (var i = 0; i < resto.length; i+=1){
      for(var j = 0; j < resto[i].types.length; j+=1){
        var local = resto[i].types[j];
        var lcLocal = local.toLowerCase();
        if (local.search(term) >= 0){
        res.push(resto[i]);
      }
    }
  }
}


term = null;
o = null;
strUser = null;

document.getElementById("result").innerHTML = "";
for (var i = 0; i < res.length; i+=1){
  var para = document.createElement("div");
  para.id = "r" + i;

  var rImg = document.createElement("img");
  rImg.src = res[i].icon;
  rImg.style = "width: 50px; height 50px";
  para.appendChild(rImg);
  rImg = null;

  var rName = document.createElement("span")
  rName.id = "name";
  rName.innerHTML = res[i].name + "<br>";
  para.appendChild(rName);
  rName = null;

  var rAddress = document.createElement("span")
  rAddress.id = "address";
  if(res[i].formatted_address === undefined){
    rAddress.innerHTML = "No adress found" + "<br>"
  }else{
    rAddress.innerHTML = res[i].formatted_address + "<br>";
  }
  para.appendChild(rAddress);
  rAddress = null;

  var rPhone = document.createElement("span")
  rPhone.id = "phone";
  if(res[i].formatted_phone_number === undefined){
    rPhone.innerHTML = "No phone number found" + "<br>";
  }else{
    rPhone.innerHTML = res[i].formatted_phone_number + "<br>" + "<br>";
  }
  para.appendChild(rPhone);
  rPhone = null;

  var rHours = document.createElement("span") ;
  rHours.id = "hours";
  try{
    for (var j = 0; j < res[i].opening_hours.weekday_text.length; j+=1){
      var spH = document.createElement("span");
      spH.id = "horaire" + j;
      spH.innerHTML = res[i].opening_hours.weekday_text[j] + "<br>";
      rHours.appendChild(spH);
    }
  }
  catch(err){
    rHours.innerHTML = "No opening hours found";
  }
  para.appendChild(rHours);
  j = null;
  spH = null;
  rHours = null;

  var rReviews = document.createElement("p");
  rReviews.id = "Reviews";
  if (res[i].reviews === undefined){
    rReviews.innerHTML = "No reviews found";
  }
  else{
      for (var k = 0; k < res[i].reviews.length; k+=1){
        var rev = document.createElement("p");
        rev.id = "review";

        var revName = document.createElement("span");
        revName.id = "Auteur"
        if(res[i].reviews[k].author_name === undefined){
          revName.innerHTML = "Anonymous" + "<br>";}
        else{
          revName.innerHTML = res[i].reviews[k].author_name + "<br>";
        }

        var revRating = document.createElement("span");
        revRating.id = "Score";
        if(res[i].reviews[k].rating === undefined){
          revRating.innerHTML = "No rating" + "<br>";
        }else{
          revRating.innerHTML = res[i].reviews[k].rating + " out of 5" + "<br>";
        }

        var revTime = document.createElement("span");
        revTime.id = "Temps";
        if(res[i].reviews[k].relative_time_description === undefined){
          revTime.innerHTML = "";
        }else{
          revTime.innerHTML = res[i].reviews[k].relative_time_description + "<br>";
        }

        var revText = document.createElement("span");
        revText.id = "Texte";
        if(res[i].reviews[k].text === undefined){
          revText.innerHTML ="";
        }else{
          revText.innerHTML = res[i].reviews[k].text + "<br>";
        }


        rev.appendChild(revName);
        rev.appendChild(revRating);
        rev.appendChild(revTime);
        rev.appendChild(revText);

        rReviews.appendChild(rev);
      }
  }
  para.appendChild(rReviews);

var rNewRev = document.createElement("p");
rNewRev.id = "RevInput";

var NewR = document.createElement("span");
NewR.id = "NewReview";
NewR.innerHTML = "Write a review";
rNewRev.appendChild(NewR);

var radBut = document.createElement("form");
radBut.id = "Scores";
radBut.action = "";

  var radOne = document.createElement("input");
  radOne.id = "1star";
  radOne.name = "Score";
  radOne.type = "radio";
  radOne.value = "1";
  radBut.appendChild(radOne);

  var labelOne = document.createElement("label");
  labelOne.id = "label";
  labelOne.innerHTML = "1"
  radBut.appendChild(labelOne)

  var radTwo = document.createElement("input");
  radTwo.id = "2star";
  radTwo.name = "Score";
  radTwo.type = "radio";
  radTwo.value = "2"
  radBut.appendChild(radTwo);

  var labelTwo = document.createElement("span");
  labelTwo.id = "label";
  labelTwo.innerHTML = "2"
  radBut.appendChild(labelTwo)

  var radThree = document.createElement("input");
  radThree.id = "3star";
  radThree.name = "Score";
  radThree.type = "radio";
  radThree.value = "3"
  radBut.appendChild(radThree);

  var labelThree = document.createElement("span");
  labelThree.id = "label";
  labelThree.innerHTML = "3"
  radBut.appendChild(labelThree)

  var radFour = document.createElement("input");
  radFour.id = "4star";
  radFour.name = "Score";
  radFour.type = "radio";
  radFour.value = "4"
  radBut.appendChild(radFour);

  var labelFour = document.createElement("span");
  labelFour.id = "label";
  labelFour.innerHTML = "4"
  radBut.appendChild(labelFour)

  var radFive = document.createElement("input");
  radFive.id = "5star";
  radFive.name = "Score";
  radFive.type = "radio";
  radFive.value = "5"
  radBut.appendChild(radFive);

  var labelFive = document.createElement("span");
  labelFive.id = "label";
  labelFive.innerHTML = "5"
  radBut.appendChild(labelFive)

  rNewRev.appendChild(radBut);

  var nBox = document.createElement("input");
  nBox.id = "nInput"
  nBox.name = "nInput"
  nBox.type = "text"
  nBox.placeholder = "Your name";
  rNewRev.appendChild(nBox);

  var tBox = document.createElement("input");
  tBox.id = "rInput"
  tBox.name = "Input"
  tBox.type = "text"
  tBox.placeholder = "Write a review";
  rNewRev.appendChild(tBox);

  var rSBut = document.createElement("button");
  rSBut.type = "button";
  rSBut.innerHTML = "Publish Review"
  rSBut.addEventListener("click", function addReview(){
    if (this.parentNode.previousSibling.innerHTML === "No reviews found"){
      this.parentNode.previousSibling.innerHTML = "";
        }
        var nRev = document.createElement("p");
        nRev.id = "review";

        var nRevName = document.createElement("span");
        nRevName.id = "Auteur"
        var nTBox = this.previousSibling.previousSibling.value;
        if (nTBox === ""){
          nRevName.innerHTML = "Anonymous" + "<br>";
        }else{
          nRevName.innerHTML = nTBox + "<br>";
        }


        var nRevRating = document.createElement("span");
        nRevRating.id = "Score";
        var bCheck = false;
        var radStandin = this.parentNode.firstChild.nextSibling;
        for(var a = 0; a < radStandin.length; a++){
          if (radStandin[a].checked){
            var actScore = radStandin[a].value;
            bCheck = true;
        }
      }
        if(bCheck){
          nRevRating.innerHTML = actScore + " out of 5" + "<br>";
        }else{
          nRevRating.innerHTML = "No score given" + "<br>";
        }

        var nRevTime = document.createElement("span");
        nRevTime.id = "Today";
        nRevTime.innerHTML = "Today"+ "<br>";

        var nRevText = document.createElement("span");
        nRevText.id = "Texte";
        nRevText.innerHTML = this.previousSibling.value + "<br>";

        nRev.appendChild(nRevName);
        nRev.appendChild(nRevRating);
        nRev.appendChild(nRevTime);
        nRev.appendChild(nRevText);
        this.parentNode.previousSibling.appendChild(nRev)

  })
  rNewRev.appendChild(rSBut);

  para.appendChild(rNewRev);

  var element = document.getElementById("result");
  element.appendChild(para);
  para = null;

}
}
