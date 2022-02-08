//Ben Chong

//Creates a hover over dropdown menu on the webpage that allows users to select a month
$('#jan').click(function() {
    $('#dropbtn').text('Jan');
    //$.post('/orders', { month: 'jan' });
});
$('#feb').click(function() {
    $('#dropbtn').text('Feb');
    //$.post('/orders', { month: 'jan' });
});
$('#mar').click(function() {
    $('#dropbtn').text('Mar');
    //$.post('/orders', { month: 'mar' });
});
$('#apr').click(function() {
    $('#dropbtn').text('Apr');
    //$.post('/orders', { month: 'apr' });
});
$('#may').click(function() {
    $('#dropbtn').text('May');
    //$.post('/orders', { month: 'may' });
});
$('#jun').click(function() {
    $('#dropbtn').text('Jun');
    //$.post('/orders', { month: 'jun' });
});
$('#jul').click(function() {
    $('#dropbtn').text('Jul');
    //$.post('/orders', { month: 'jul' });
});
$('#aug').click(function() {
    $('#dropbtn').text('Aug');
    //$.post('/orders', { month: 'aug' });
});
$('#sep').click(function() {
    $('#dropbtn').text('Sep');
    //$.post('/orders', { month: 'sep' });
});
$('#oct').click(function() {
    $('#dropbtn').text('Oct');
    //$.post('/orders', { month: 'oct' });
});
$('#nov').click(function() {
    $('#dropbtn').text('Nov');
    //$.post('/orders', { month: 'nov' });
});
$('#dec').click(function() {
    $('#dropbtn').text('Dec');
    //$.post('/orders', { month: 'dec' });
});

//if an order is placed an appropriate message is displayed
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