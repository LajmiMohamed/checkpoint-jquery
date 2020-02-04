var x;
var y;
var v1;
var op;
var v2;
function myClick(x){
     document.getElementById("button1").value+=x;

}
function myClickres(){
    document.getElementById("button1").value="";
}

function opr(x){
   v1=  document.getElementById("button1").value;
   document.getElementById("button1").value="";
   op=x;
   
   

}

function myClickegal(){
v2=document.getElementById("button1").value;

switch (op){
case '-':
    document.getElementById("button1").value=v1*1-v2*1;
    break;
case '+':
    document.getElementById("button1").value=v1*1+v2*1;
    break;
case '*':
    document.getElementById("button1").value=v1*1*v2*1;
    break;
case '/':
    document.getElementById("button1").value=v1*1/v2*1;
    break;
        

}


}

      $(document).ready(function(){
$("#hide").click(function(){
    $("#page").css('visibility', 'hidden');


});
$("#show").click(function(){

    $("#page").css('visibility', 'visible');
});

});
let xy=0;
$("#color3").click(function(){
    
    if(xy==0)
    {
    $("#color3").css('color', 'red');
    xy=1;
    console.log(xy);
    }

    else {
        $("#color3").css('color', 'black');
        xy=0;
    }
    

});
$("#color2").click(function(){
    if(xy==0)
    {
    $("#color2").css('color', 'red');
    xy=1;
    console.log(xy);
    }

    else {
        $("#color2").css('color', 'black');
        xy=0;
    }
    


});
$("#color1").click(function(){
    if(xy==0)
    {
    $("#color1").css('color', 'red');
    xy=1;
    console.log(xy);
    }

    else {
        $("#color1").css('color', 'black');
        xy=0;
    }
    

});
$("#color4").click(function(){
    if(xy==0)
    {
    $("#color4").css('color', 'red');
    xy=1;
    console.log(xy);
    }

    else {
        $("#color4").css('color', 'black');
        xy=0;
    }
    


});
$("#color5").click(function(){
    if(xy==0)
    {
    $("#color5").css('color', 'red');
    xy=1;
    console.log(xy);
    }

    else {
        $("#color5").css('color', 'black');
        xy=0;
    }
    


});
$("#color6").click(function(){
    if(xy==0)
    {
    $("#color6").css('color', 'red');
    xy=1;
    console.log(xy);
    }

    else {
        $("#color6").css('color', 'black');
        xy=0;
    }
    


});
$("#color7").click(function(){
    if(xy==0)
    {
    $("#color7").css('color', 'red');
    xy=1;
    console.log(xy);
    }

    else {
        $("#color7").css('color', 'black');
        xy=0;
    }
    


});
$("#color8").click(function(){
    if(xy==0)
    {
    $("#color8").css('color', 'red');
    xy=1;
    console.log(xy);
    }

    else {
        $("#color8").css('color', 'black');
        xy=0;
    }
    


});
$("#color9").click(function(){
  
    if(xy==0)
    {
    $("#color9").css('color', 'red');
    xy=1;
    console.log(xy);
    }

    else {
        $("#color9").css('color', 'black');
        xy=0;
    }
    


});
$("#color0").click(function(){
    if(xy==0)
    {
    $("#color0").css('color', 'red');
    xy=1;
    console.log(xy);
    }

    else {
        $("#color0").css('color', 'black');
        xy=0;
    }
    
});
$("#egal").click(function(){
$("#button1").css('background-color', 'green');


});
$("#res").click(function(){
    if($("#button1").css('background-color', 'green'));
    $("#button1").css('background-color', 'white');
    
    
    });

   