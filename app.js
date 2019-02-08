$("#viewPage").hide();
$("#addPage").hide();
$('#verifyPage').hide();

const showViewPage = function (e) {
    e.preventDefault();
    $("#addPage").hide();
    $('#verifyPage').hide();
    $('#viewPage').empty();
    for (i = 0; i < employeeList.length; i++) {
        $('#viewPage').append(`<div id='employeeBox'>Name: ${employeeList[i].name}<br>Office Number: ${employeeList[i].officeNum}<br>Phone: ${employeeList[i].phoneNum}</div>`)
    };
    $("#viewPage").show();
}

const showAddPage = function () {
    $("#viewPage").hide();
    $('#verifyPage').hide();
    $('#addPage').empty();
    event.preventDefault();
    $('#addPage').append(`<div class='formBox'><form id='addForm'><h5>Add Employee:</h2><br>Name:<br><input type="text" name="Name"><br>
    Office Number:<br><input type="text" name="Office Number"><br>
    Phone Number:<br><input type="text" name="Phone"><br><br><input type='submit' value='Submit' id='addSubmit'></form></div>`)
    $("#addPage").show();
}

const showVerifyPage = function () {
    $("#viewPage").hide();
    $("#addPage").hide();
    $('#verifyPage').empty();
    event.preventDefault();
    $('#verifyPage').append(`<div class='formBox'><form id='verifyForm'><h5>Verify Employee:</h2><br>Name:<br><input type="text" name="Name"><br>
    Office Number:<br><input type="text" name="Office Number"><br>
    Phone Number:<br><input type="text" name="Phone"><br><br><input type='submit' value='Submit' id='verifySubmit'></form></div>`)
    $('#verifyPage').show()
}

const addNewEmployee = function() {
    event.preventDefault();
    let newEmployee = {};
    $("addform").submit(function(){
        alert("Submitted");
    });
};

$('#viewbtn').on('click', showViewPage);
$('#addbtn').on('click', showAddPage);
$('#verifybtn').on('click', showVerifyPage)
$('#addSubmit').on('click', addNewEmployee)