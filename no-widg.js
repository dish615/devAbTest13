$(document).ready(function(){
   var web= "https://staging-thesavyapp.herokuapp.com";
    
    
    
     var btnVar;
      if($("script[src*='s3.amazonaws.com/shopify-apps/pre-order/js/jquery.spur.cart.api.js']" && $(".tooltipstered").is(":visible")).length>0) {
           
            btnVar= $(".tooltipstered").first();
            
                
                
         } else if($("input[type='submit'][name='add']").length>0) {
        
        
          btnVar= $("input[type='submit'][name='add']").first();
         
          
      } else if($("button[type='submit'][name='add']").length>0) {
         
          btnVar= $("button[type='submit'][name='add']").first();
         
          
      } else if($("script:contains('\"name\":\"Canopy\"')").length>0) {
               
         
          btnVar= $("button[name='add']").first();
          
      }
    console.log(btnVar);
    
    //$.get(web+"/cartButton?width="+btn); REVERT TO THIS 622ae3df385a7cd5b1755e9715c95db5617d3ad7
    
    btnVar.click(function(){
        var socket = io.connect(web);
        var dat= {
            page: window.location.href
        };
       socket.emit("ab-test-no-widg-add-to-cart-clicked", dat);
        
    });
    
    
    
    
    
});