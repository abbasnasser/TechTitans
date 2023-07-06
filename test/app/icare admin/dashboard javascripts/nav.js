//----------patient vars----
var patients_button = document.getElementById("patients");
var patientbtntextcolor = document.getElementById("patientbtntextcolor");
var patients_sign = document.getElementById("patients_sign");
//----------scheduale vars----
var Scheduale_button = document.getElementById("Scheduale");
var Schedualebtntextcolor = document.getElementById("Schedualebtntextcolor");
var Schedualelock = document.getElementById("Schedualelock");
//--------accounts var-----
var Accounts = document.getElementById("Accounts");
var Accountsbtntextcolor = document.getElementById("Accountsbtntextcolor");
var Accountslock = document.getElementById("Accountslock");
//--------supply var-----
var Supply = document.getElementById("Supply");
var Supplybtntextcolor = document.getElementById("Supplybtntextcolor");
var supplylock = document.getElementById("supplylock");
//--------finance var-----
var Finance = document.getElementById("Finance");
var Financebtntextcolor = document.getElementById("Financebtntextcolor");
var Financelock = document.getElementById("Financelock");
//--------setting var-----
var Setting = document.getElementById("Setting");
var Settingbtntextcolor = document.getElementById("Settingbtntextcolor");
var Settinglock = document.getElementById("Settinglock");

//-----------------############################
patientbtntextcolor.style.color = "#e64aff";
patients_sign.style.width = "3px";
patients_button.addEventListener("click", function () {
  //focus button
  patientbtntextcolor.style.color = "#e64aff";
  patients_sign.style.width = "3px";
  //defocus else button
  Schedualebtntextcolor.style.color = "black";
  Schedualelock.style.width = "0px";
  Accountsbtntextcolor.style.color = "black";
  Accountslock.style.width = "0px";
  Supplybtntextcolor.style.color = "black";
  supplylock.style.width = "0px";
  Financebtntextcolor.style.color = "black";
  Financelock.style.width = "0px";
  Settingbtntextcolor.style.color = "black";
  Settinglock.style.width = "0px";
});
//-------------

Scheduale_button.addEventListener("click", function () {
  //focus button
  Schedualebtntextcolor.style.color = "#e64aff";
  Schedualelock.style.width = "3px";

  //defocus else button
  patientbtntextcolor.style.color = "black";
  patients_sign.style.width = "0px";

  Accountsbtntextcolor.style.color = "black";
  Accountslock.style.width = "0px";
  Supplybtntextcolor.style.color = "black";
  supplylock.style.width = "0px";
  Financebtntextcolor.style.color = "black";
  Financelock.style.width = "0px";
  Settingbtntextcolor.style.color = "black";
  Settinglock.style.width = "0px";
});

//---------------

Accounts.addEventListener("click", function () {
  //focus button
  Accountsbtntextcolor.style.color = "#e64aff";
  Accountslock.style.width = "3px";

  //defocus else button
  patientbtntextcolor.style.color = "black";
  patients_sign.style.width = "0px";
  Schedualebtntextcolor.style.color = "black";
  Schedualelock.style.width = "0px";

  Supplybtntextcolor.style.color = "black";
  supplylock.style.width = "0px";
  Financebtntextcolor.style.color = "black";
  Financelock.style.width = "0px";
  Settingbtntextcolor.style.color = "black";
  Settinglock.style.width = "0px";
});
//------------------

Supply.addEventListener("click", function () {
  //focus button
  Supplybtntextcolor.style.color = "#e64aff";
  supplylock.style.width = "3px";

  //defocus else button
  patientbtntextcolor.style.color = "black";
  patients_sign.style.width = "0px";
  Schedualebtntextcolor.style.color = "black";
  Schedualelock.style.width = "0px";
  Accountsbtntextcolor.style.color = "black";
  Accountslock.style.width = "0px";
  Financebtntextcolor.style.color = "black";
  Financelock.style.width = "0px";
  Settingbtntextcolor.style.color = "black";
  Settinglock.style.width = "0px";
});
//---------------

Finance.addEventListener("click", function () {
  //focus button
  Financebtntextcolor.style.color = "#e64aff";
  Financelock.style.width = "3px";

  //defocus else button
  patientbtntextcolor.style.color = "black";
  patients_sign.style.width = "0px";
  Schedualebtntextcolor.style.color = "black";
  Schedualelock.style.width = "0px";
  Accountsbtntextcolor.style.color = "black";
  Accountslock.style.width = "0px";
  Supplybtntextcolor.style.color = "black";
  supplylock.style.width = "0px";
  Settingbtntextcolor.style.color = "black";
  Settinglock.style.width = "0px";
});
//-----------------

Setting.addEventListener("click", function () {
  //focus button
  Settingbtntextcolor.style.color = "#e64aff";
  Settinglock.style.width = "3px";

  //defocus else button
  patientbtntextcolor.style.color = "black";
  patients_sign.style.width = "0px";
  Schedualebtntextcolor.style.color = "black";
  Schedualelock.style.width = "0px";
  Accountsbtntextcolor.style.color = "black";
  Accountslock.style.width = "0px";
  Supplybtntextcolor.style.color = "black";
  supplylock.style.width = "0px";
  Financebtntextcolor.style.color = "black";
  Financelock.style.width = "0px";
});
