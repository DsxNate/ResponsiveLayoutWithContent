var stag = 0;
function last_stag() {
  if (stag == 0) {
    stag = 1;
    document.getElementById("main-image").src = "images/Last_stag.png";
    document.getElementById("textbox").innerHTML =
      "The Last Stag is the last surviving stag beetle in Hallownest, he can be found when a player finds a Stag Station. Each time a Stag Station is unlocked, he mentions how he used to carry passengers when he was young and that the highways and crossroads of Hallownest were full of life. After unlocking all Stag Stations, he finds the Stag Nest and is given hope that there are other Stags that may have survived and made their way out into the wider world.";
    document.getElementById("Slash").pause();
    document.getElementById("Transform").pause();
    document.getElementById("Heavenly").pause();
    document.getElementById("Gallop").play();
  } else if (stag == 1) {
    document.getElementById("main-image").src = "images/Hollow_Knight_Cover";
    document.getElementById("textbox").innerHTML = "";
    document.getElementById("Gallop").pause();
    stag = 0;
  } else {
  }
}

var hornetVar = 0;
function hornet() {
  if (hornetVar == 0) {
    hornetVar = 1;
    document.getElementById("main-image").src = "images/Real_Hornet.png";
    document.getElementById("textbox").innerHTML =
      "Hornet was raised in the Deepnest, and survived the fall and the Infection of the kingdom. She wanders around its ruins, chasing off all travelers and outsiders whom she automatically assumes are trying to desecrate the place (despite most of them being harmless). She puts on an imperious facade to compensate for her lack of ability to truly protect the kingdom crumbling around her.";
    document.getElementById("Gallop").pause();
    document.getElementById("Transform").pause();
    document.getElementById("Heavenly").pause();
    document.getElementById("Slash").play();
  } else if (hornetVar == 1) {
    document.getElementById("main-image").src = "images/Hollow_Knight_Cover";
    document.getElementById("textbox").innerHTML = "";
    document.getElementById("Slash").pause();

    hornetVar = 0;
  } else {
  }
}

var radienceVar = 0;
function radience() {
  if (radienceVar == 0) {
    radienceVar = 1;
    document.getElementById("main-image").src = "images/dope_radience.gif";
    document.getElementById("textbox").innerHTML =
      "The Radiance is a higher being of light similar to Essence, and as such, opposed to the Void, her ancient enemy. The Moth Tribe is born from her light and in return revered her.";
    document.getElementById("Gallop").pause();
    document.getElementById("Slash").pause();
    document.getElementById("Transform").pause();
    document.getElementById("Heavenly").play();
  } else if (radienceVar == 1) {
    document.getElementById("main-image").src = "images/Hollow_Knight_Cover";
    document.getElementById("textbox").innerHTML = "";
    document.getElementById("Heavenly").pause();
    radienceVar = 0;
  } else {
  }
}

var hollowVar = 0;
function hollow() {
  if (hollowVar == 0) {
    hollowVar = 1;
    document.getElementById("main-image").src = "images/THE_HOLLOW_KNIGHT.png";
    document.getElementById("textbox").innerHTML =
      "The old King of Hallownest... he must have been desperate to save his crumbling little world. The sacrifices he imposed on others... all for nothing.";
    document.getElementById("Gallop").pause();
    document.getElementById("Slash").pause();
    document.getElementById("Heavenly").pause();
    document.getElementById("Transform").play();
  } else if (hollowVar == 1) {
    document.getElementById("main-image").src = "images/Hollow_Knight_Cover";
    document.getElementById("textbox").innerHTML = "";
    document.getElementById("Transform").pause();
    hollowVar = 0;
  } else {
  }
}
