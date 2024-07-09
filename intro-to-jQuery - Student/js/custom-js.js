$(document).ready(function(){

   $(function(){
      $("#head").load("meta.html");
      $("#header").load("header.html");
      $("#footer").load("footer.html");
   });
   // here we will find the dimensions of the div with the ID div 1
   $(".btn-1").click(function(){
      var txt = "";
      txt += "<p>Width of div: " + $('#div1').width() + "px</p>";
      txt += "<p>Height of div: " + $('#div1').height() + "px</p>";
      $("#div1").html(txt);
   });
   //filter my table
   $("#myInput").on("keyup", function(){
      var value = $(this).val().toLowerCase();
      $("#myTable tr").filter(function(){
         $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
      });
   });
   $("#accordian li h3").click(function(){
      var $parent = $(this).parent();
      if($parent.hasClass("active")) return;
      $("#accordian ul .row").not().slideUp();
      $(this).next().slideDown(function(){
         $parent.addClass("active").siblings().removeClass("active");
      });
   });
});
