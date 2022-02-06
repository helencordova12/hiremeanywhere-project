var counter = 0;
var confirm = 0;
var yes = 0;

var exp = 0;
var consoft = 0;

function cont() {
  counter += 1;
  console.log("counter" + counter);
  var mjr = document.getElementById("mjr").value;
  document.getElementById("mage").innerHTML = "Major: " + mjr;

  if (counter == 1) {
    document.getElementById("major").style.display = "none";
    document.getElementById("skill").style.display = "block";
  }
  if (counter == 2) {
    document.getElementById("skill").style.display = "none";
    document.getElementById("addSkill").style.display = "none";
    document.getElementById("exp").style.display = "block";
  }
  if (counter == 3){
    document.getElementById("chest").style.display = "none";
    document.getElementById("results").style.display = "block";
    document.getElementById("p").style.display = "none";
  }
}
//functions for adding skills
function addS() {
  document.getElementById("addSkill").style.display = "block";
  document.getElementById("skill").style.display = "none";
}
function another() {
  if (confirm == 1) {
    document.getElementById("skillz1").style.display = "none";
    document.getElementById("skillz2").style.display = "block";
    document.getElementById("other").style.display = "none";
    document.getElementById("confirm").style.display = "flex";
  }
  if (confirm == 2) {
    document.getElementById("skillz2").style.display = "none";
    document.getElementById("skillz3").style.display = "block";
    document.getElementById("other").style.display = "none";
    document.getElementById("confirm").style.display = "flex";
  }
  if (confirm == 3) {
    document.getElementById("skillz3").style.display = "none";
    document.getElementById("skillz4").style.display = "block";
    document.getElementById("other").style.display = "none";
    document.getElementById("confirm").style.display = "flex";
  }
}
function confirms() {
  confirm += 1;
  console.log(confirm);
  if (confirm == 1) {
    document.getElementById("skillz1").style.display = "none";
    var skl1 = document.getElementById("title").value;
    var skl1b = document.getElementById("descr").value;
    document.getElementById("skill1").innerHTML = skl1;
    document.getElementById("skill1b").innerHTML = skl1b;
  }
  if (confirm == 2) {
    document.getElementById("skillz2").style.display = "none";
    var skl2 = document.getElementById("title2").value;
    var skl2b = document.getElementById("descr2").value;
    document.getElementById("skill2").innerHTML = skl2;
    document.getElementById("skill2b").innerHTML = skl2b;
  }
  if (confirm == 3) {
    document.getElementById("skillz3").style.display = "none";
    var skl3 = document.getElementById("title3").value;
    var skl3b = document.getElementById("descr3").value;
    document.getElementById("skill3").innerHTML = skl3;
    document.getElementById("skill3b").innerHTML = skl3b;
  }
  if (confirm == 4) {
      document.getElementById("ends").innerHTML = "How about we move onto experiences now?"
    document.getElementById("skillz4").style.display = "none";
    document.getElementById("other").style.display = "inline";
    document.getElementById("confirm").style.display = "none";
    document.getElementById("anotherSkl").disabled = true;
    document.getElementById("anotherSkl").style.display = "none";
  }

  document.getElementById("confirm").style.display = "none";
  document.getElementById("other").style.display = "inline";
}

//function for adding exp
function addExp(){
    document.getElementById("exp").style.display = "none";
    document.getElementById("chest").style.display = "block";
    document.getElementById("exp2").style.display = "none";
    document.getElementById("exp3").style.display = "none";
    document.getElementById("exp4").style.display = "none";
    document.getElementById("other2").style.display = "none";
}
function consofts(){
    consoft += 1;
    console.log("consoft: " + consoft);
    if (consoft == 1){
        document.getElementById("exp1").style.display = "none";
        var exp1 = document.getElementById("head").value;
        var exp1b = document.getElementById("ibe").value;
        document.getElementById("expz1").innerHTML = exp1;
        document.getElementById("expz1b").innerHTML = exp1b;
        document.getElementById("consoft").style.display = "none";
        document.getElementById("other2").style.display = "inline";
    }
    if (consoft == 2){
        document.getElementById("exp2").style.display = "none";
        var exp2 = document.getElementById("head2").value;
        var exp2b = document.getElementById("ibe2").value;
        document.getElementById("expz2").innerHTML = exp2;
        document.getElementById("expz2b").innerHTML = exp2b;
        document.getElementById("consoft").style.display = "none";
        document.getElementById("other2").style.display = "inline";
    }
    if (consoft == 3){
        document.getElementById("exp3").style.display = "none";
        var exp3 = document.getElementById("head3").value;
        var exp3b = document.getElementById("ibe3").value;
        document.getElementById("expz3").innerHTML = exp3;
        document.getElementById("expz3b").innerHTML = exp3b;
        document.getElementById("consoft").style.display = "none";
        document.getElementById("other2").style.display = "inline";
    }
    if (consoft == 4){
        document.getElementById("exp4").style.display = "none";
        document.getElementById("ends2").innerHTML = "Now its time to create your resume!"
        document.getElementById("other2").style.display = "inline";
        document.getElementById("consoft").style.display = "none";
        document.getElementById("anotherExp").disabled = true;
        document.getElementById("anotherExp").style.display = "none";
    }
}
function another2(){
    if (consoft == 1){
        document.getElementById("exp1").style.display = "none";
        document.getElementById("exp2").style.display = "block";
        document.getElementById("other2").style.display = "none";
        document.getElementById("consoft").style.display = "flex";
    }
    if (consoft == 2){
        document.getElementById("exp2").style.display = "none";
        document.getElementById("exp3").style.display = "block";
        document.getElementById("other2").style.display = "none";
        document.getElementById("consoft").style.display = "flex";
    }
    if (consoft == 3){
        document.getElementById("exp3").style.display = "none";
        document.getElementById("exp4").style.display = "block";
        document.getElementById("other2").style.display = "none";
        document.getElementById("consoft").style.display = "flex";
    }
}

window.onload = function () {
  document.getElementById("addSkill").style.display = "none";
  document.getElementById("skill").style.display = "none";
  document.getElementById("results").style.display = "none";
  document.getElementById("other").style.display = "none";
  document.getElementById("skillz2").style.display = "none";
  document.getElementById("skillz3").style.display = "none";
  document.getElementById("skillz4").style.display = "none";
  document.getElementById("exp").style.display = "none";
  document.getElementById("chest").style.display = "none";
};

function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

function dwnld(){
    document.getElementById("dwnld").style.display = "none";
    var element = document.getElementById('results'); 
    html2pdf().from(element).save();
}
