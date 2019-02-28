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

const showAddPage = function (e) {
    $("#viewPage").hide();
    $('#verifyPage').hide();
    $('#addPage').empty();
    e.preventDefault();
    $('#addPage').append(`<div class='formBox'>
    <form id='addForm'><h5>Add Employee:</h2>
    <br>Name:<br>
    <input type="text" name="Name"><br>
    Office Number:<br>
    <input type="text" name="Office Number"><br>
    Phone Number:<br>
    <input type="text" name="Phone"><br><br>
    <input type='submit' value='Submit' id='addSubmit'>
    </form><br>
    <p id='addPageConfirmation></p>
    </div>`)
    $("#addPage").show();
}

const addNewEmployee = function(e) {
    e.preventDefault();
    let newEmployee = {};
    newEmployee.name = $(`input[name="Name"]`).val();
    newEmployee.officeNum = $(`input[name="Office Number"]`).val();
    newEmployee.phoneNum = $(`input[name="Phone"]`).val();
    $(`input[name="Name"]`).val('');
    $(`input[name="Office Number"]`).val('');
    $(`input[name="Phone"]`).val(''); 
    employeeList.push(newEmployee); 
    console.log(newEmployee);
    $('#addPageConfirmation').append("Employee Added!");
};

const showVerifyPage = function (e) {
    $("#viewPage").hide();
    $("#addPage").hide();
    $('#verifyPage').empty();
    e.preventDefault();
    $('#verifyPage').append(`<div class='formBox'>
    <form id='verifyForm'><h5>Verify Employee:</h2>
    <br>Name:<br>
    <input type="text" id='verifyName' name="Name"><br>
    <br>
    <input type='submit' value='Submit' id='verifySubmit'>
    </form><br>
    <p><b>Result:</b></p>
    <p id='verifyResult'></p>
    </div>`)
    $('#verifyPage').show()
}

const verifyEmployee = function(event) {
    event.preventDefault();
    $(".result").empty();
    const verName = $("#verifyName").val();
    let result = "Employee does not exist";
    for (i=0; i < employeeList.length; i++){
        if (employeeList[i].name === verName) {
            result = "Employee exists";
            break;
        }
    };
    $("#verifyResult").text(result)  ;  
}

$('#viewbtn').on('click', showViewPage);
$('#addbtn').on('click', showAddPage);
$('#verifybtn').on('click', showVerifyPage)
$('.container').on('click', '#addSubmit', addNewEmployee)
$('.container').on('click', '#verifySubmit', verifyEmployee)