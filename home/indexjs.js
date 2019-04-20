$(function(){
    /*setTimeout(function() { 
      window.alert('UNATTENDED BAG DETECTED!!!!!!')
        
        //vid1.pause();
        //vid2.pause();
        /*const video1 = document.querySelector("#video1");
        video1.pause();
        const video2 = document.querySelector("#video2");
        video2.pause();
        window.location.replace('./detected','_self');
      }, 20800);
*/
console.log('HELLO');
var btn=$('#btn1');
btn.click((data)=>{
  
$.post('/unattended2',{},
function(data){
  console.log(data.unattended_timestamp);
if(data.timestamp-data.unattended_timestamp>2){
  window.alert('UNATTENDED BAG DETECTED!!!!!!' + data.unattended_timestamp + ' to ' + data.timestamp);
  window.location.replace('./detected','_self');
}
})
})
});