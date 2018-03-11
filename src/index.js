var realtime = new Ably.Realtime("URVcuw.7hQpXQ:eSwDZmRaXFDskybs");
var sendChannel = realtime.channels.get("vote-channel");
var score;
function yesClicked(){
  vote(1);
}
function noClicked(){
  vote(-1)
}
function maybeClicked(){
  vote(0);
}
function vote(score){
  sendChannel.publish("update", { "vote": score}, errCallback)
	document.getElementById('yesbtn').setAttribute("disabled", "true")
	document.getElementById('nobtn').setAttribute("disabled", "true")
	document.getElementById('maybebtn').setAttribute("disabled", "true")
  document.getElementById('yesbtn').style.cssText = 'background-color: grey;';
  document.getElementById('nobtn').style.cssText = 'background-color: grey;';
  document.getElementById('maybebtn').style.cssText = 'background-color: grey;';
}

function errCallback(err){
  window.alert(err.message);
}
