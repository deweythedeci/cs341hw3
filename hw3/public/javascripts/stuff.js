//Ben Chong

$('#jan').click(function() {
    $('#dropbtn').text('Jan');
});
$('#feb').click(function() {
    $('#dropbtn').text('Feb');
});
$('#mar').click(function() {
    $('#dropbtn').text('Mar');
});
$('#apr').click(function() {
    $('#dropbtn').text('Apr');
});
$('#may').click(function() {
    $('#dropbtn').text('May');
});
$('#jun').click(function() {
    $('#dropbtn').text('Jun');
});
$('#jul').click(function() {
    $('#dropbtn').text('Jul');
});
$('#aug').click(function() {
    $('#dropbtn').text('Aug');
});
$('#sep').click(function() {
    $('#dropbtn').text('Sep');
});
$('#oct').click(function() {
    $('#dropbtn').text('Oct');
});
$('#nov').click(function() {
    $('#dropbtn').text('Nov');
});
$('#dec').click(function() {
    $('#dropbtn').text('Dec');
});
$(function(){
    $('#orderBtn').on('click', function(){
        if($('#orderTxtArea').val().match('vegan') != null){
            alert('Cheesecakes are not vegan.');
        }
        else{
            $("#orderTxt").text("Thank you.");
            $("#orderTble").remove();
            $("#orderLbl").remove();
            $("#orderTxtArea").remove();
            $("#orderBtn").remove();
        }
    })
});