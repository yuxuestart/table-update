document.getElementById("insert-row-btn").addEventListener('click', (e)=> {
    var row_val = document.getElementById("myTable").insertRow(-1);

    row_val.insertCell(0).innerHTML = document.getElementById("input1").value;
    row_val.insertCell(1).innerHTML = document.getElementById("input2").value;
    row_val.insertCell(2).innerHTML = document.getElementById("input3").value;
})