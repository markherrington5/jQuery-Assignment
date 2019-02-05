$("#viewPage").hide();
$("#addPage").hide();
$('#verifyPage').hide();

const showViewPage = function (e) {
    e.preventDefault();
    $("#addPage").hide();
    $('#verifyPage').hide();
    $("#viewPage").show();
}

const showAddPage = function () {
    $("#viewPage").hide();
    $('#verifyPage').hide();
    $("#addPage").show();
}

const showVerifyPage = function () {
    $("#viewPage").hide();
    $("#addPage").hide();
    $('#verifyPage').show()
}
console.log('about to assign click event listeners')

$('#viewbtn').on('click', showViewPage);
$('#addbtn').on('click', showAddPage);
$('#verifybtn').on('click', showVerifyPage)