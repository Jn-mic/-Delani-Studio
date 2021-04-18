$(document).ready(function( ){
    $('#imglogo').show();
    $("#imgmouse").hide();
    $('#imgmouse','#imglogo').onclick(function(){
        $('#imgmouse','#imglogo').show();
        $('this').hide();
    });

    $('p.para1').css( 'color','green');

});