


function openpage2(d,Catagory_selected){
          
          force.stop();
          var g=100;
          

         node 
         .attr('transform',function(e,i){
                  if(d!=e && i!=0){ return 'translate('+(-50)+','+(-70)+')';}
                   else return 'translate('+(500)+','+(282)+')'; }
            )
         .style('visibility',function(e,i){
                    if(i==4) {return 'hidden';}  
                    else{ return 'visible';};
                    }
                 )
            .transition().duration(700)
            .attr('transform',function(e,i){
                  if(d!=e && i!=0){ g+=70; return 'translate('+(50)+','+(g)+')';}
                   else return 'translate('+(500)+','+(282)+')'; }
            );

               setup_centercircle(Catagory_selected); 
            setTimeout(function() {   
              
              $('.component').css("visibility","visible");
              }, 100);

             

              setTimeout(function() {   
              handler();
              }, 400);
      




  
}
  