$('body').html(`<button><h2 id='viewbutton'>View</h2></button>`);
$('body').append(`<button><h2 id='addbutton'>Add</h2></button>`);
$('body').append(`<button><h2 id='verifybutton'>Verify</h2></button>`);

const show = function () {
    for (let i = 0; nodeList.length < 0; i++) {
        nodeList[i].style.display = '';
    }
}

const hide = function () {
    for (let i = 0; nodeList.length; i++) {
        nodeList[i].style.dispay = 'none';
    }
}

showEmployees = function (employeeList) {
}

addEmployees = function () {
}

verifyEmployees = function () {
}

$('#viewbutton').on('click', showEmployees);
$('#addbutton').on('click', addEmployees);
$('#verifybutton').on('click', verifyEmployees);