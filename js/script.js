$(document).ready(function( ){
    $('#imglogo').show();
    $("#imgmouse").hide();
    $('#imgmouse','#imglogo').onclick(function(){
        $('#imgmouse','#imglogo').show();
        $('this').hide();
    });


});