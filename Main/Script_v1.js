// Usage: wait(SecondsToWait,Function to run after delay,If you want to display the time left on a html element put the id on here)
window.wait=function (secs,func,ID){
var _towait=secs;var waited=0;
var INsT = null
function _int(){
    waited=++waited
if (ID){
document.getElementById(ID).innerHTML=_towait-waited
}
    if(waited >= _towait){
try {
func();
} catch( __ERROR ){console.log(__ERROR.message)}
window.clearInterval(INsT)
}
}
INsT=window.setInterval(_int,1000);
}  
// Example: wait(1,function(){console.log('Hello')},'MyTimeLeft')
