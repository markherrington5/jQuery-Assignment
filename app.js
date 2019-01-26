$('body').html(`<button><h2 id='viewbutton'>View</h2></button>`);
$('body').append(`<button><h2 id='addbutton'>Add</h2></button>`);
$('body').append(`<button><h2 id='verifybutton'>Verify</h2></button>`);

showEmployees = function (employeeList) {
    $('body').html(``);
    $('body').html(`<button><h2 id='viewbutton'>View</h2></button>`);
    $('body').append(`<button><h2 id='addbutton'>Add</h2></button>`);
    $('body').append(`<button><h2 id='verifybutton'>Verify</h2></button>`);
    for (i = 0; i < employeeList.length; i++)
        $('body').append(`<div>${employeeList[i]}</div>`)
    }

addEmployees = function () {
    $('body').html(``);
    $('body').html(`<button><h2 id='viewbutton'>View</h2></button>`);
    $('body').append(`<button><h2 id='addbutton'>Add</h2></button>`);
    $('body').append(`<button><h2 id='verifybutton'>Verify</h2></button>`);
    $('body').append(`<form id='nameform'>Name</form>`);
    $('body').append(`<form id='numberform'>Office Number</form>`);
    $('body').append(`<form id='phoneform'>Phone Number</form>`);
}

verifyEmployees = function () {
    $('body').html(``);
    $('body').html(`<button><h2 id='viewbutton'>View</h2></button>`);
    $('body').append(`<button><h2 id='addbutton'>Add</h2></button>`);
    $('body').append(`<button><h2 id='verifybutton'>Verify</h2></button>`);
    
}

$('#viewbutton').on('click', showEmployees);
$('#addbutton').on('click', addEmployees);
$('#verifybutton').on('click', verifyEmployees);