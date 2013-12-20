$(document).ready(function(){

  $("#launch_default").click(function(){
    $("#pane_outer").hide();
  });


  $("#sim_id").onfocus(function(){
    this.value="";
  });


   $("#add").click(function(){
   
   $("#textnode1").append(" <li>[Text]</li><ul><li>[Text]</li></ul>");
  });

  $("#hjui").keyup(function(event){
   if(event.keyCode == 13){
    
   $("#textnode1").append(" <li>[Text]</li><ul><li>[Text]</li></ul>");
    
   }
  });
  
  
  
  
  
  $(function(){
    $(".makeEditable").click(function(){
        $('input:text').removeAttr("readonly");    
    });

 $(".clear_value").click(function(){
    $('input:text').onfocus("this.value='';");
    
    });

    $(".makeNonEditable").click(function(){
        $('input:text').attr("readonly", "readonly");    
    });               
});
  });




  
