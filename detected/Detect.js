$(function()
{
    let all=$('#inform_all');
    let closest=$('#inform_closest');
    let x=$('.btn-danger');
    let y=$('.btn-primary');
    console.log("Hello")

// When the user clicks on the button, open the modal 
x.click(function() {
    console.log('all clicked!');
    //modal.css(display = "block");
    window.alert('ALL GUARDS HAVE BEEN INFORMED!');
    window.location.replace('../','_self');
    //window.open('./index.html',"_self");
    
})
y.click(function(){
    console.log('all clicked!');
    //modal.css(display = "block");
    window.alert('Suresh stationed at Platform 12 has been informed!');
    window.location.replace('../','_self');

})
all.click(function() {
    console.log('all clicked!');
    //modal.css(display = "block");
    window.alert('ALL GUARDS HAVE BEEN INFORMED!');
    window.location.replace('./index.html','_self');
    //window.open('./index.html',"_self");
    
})

closest.click(function(){
    console.log('all clicked!');
    //modal.css(display = "block");
    window.alert('Suresh stationed at Platform 12 has been informed!');
    window.location.replace('./index','_self');

})
// When the user clicks on <span> (x), close the modal
// When the user clicks anywhere outside of the modal, close it
/*window.click(function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
})*/
});