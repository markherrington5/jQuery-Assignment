showViewPage = function () {
    $("#viewPage").show();
    $("#addPage").hide();
}

showAddPage = function () {
    $("#viewPage").hide();
    $("#addPage").show();
}

$('#view').on('click', showViewPage);
$('#add').on('click', showAddPage);