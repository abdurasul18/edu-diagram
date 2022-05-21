function Display() {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "/public/excels/MTM.xlsx", true);
    xhr.responseType = "blob";
    xhr.onload = function (e) {
        var file = this.response;
        var reader = new FileReader();
        //For Browsers other than IE.
        if (reader.readAsBinaryString) {
            reader.onload = function (e) {
                ProcessExcel(e.target.result);
            };
            reader.readAsBinaryString(file);
        } 
    };
    xhr.send();
};
function ProcessExcel(data) {
    //Read the Excel File data.
    var workbook = XLSX.read(data, {
        type: 'binary'
    });
    console.log(workbook);
    //Fetch the name of First Sheet.
    var firstSheet = workbook.SheetNames[0];

    //Read all rows from First Sheet into an JSON array.
    var excelRows = XLSX.utils.sheet_to_row_object_array(workbook.Sheets[firstSheet]);

    //Create a HTML Table element.
    var table = document.createElement("table");
    table.border = "1";

    //Add the header row.
    var row = table.insertRow(-1);

    //Add the header cells.
    var headerCell = document.createElement("TH");
    headerCell.innerHTML = "Id";
    row.appendChild(headerCell);

    headerCell = document.createElement("TH");
    headerCell.innerHTML = "Name";
    row.appendChild(headerCell);

    headerCell = document.createElement("TH");
    headerCell.innerHTML = "Country";
    row.appendChild(headerCell);

    //Add the data rows from Excel file.
    for (var i = 0; i < excelRows.length; i++) {
        //Add the data row.
        var row = table.insertRow(-1);

        //Add the data cells.
        var cell = row.insertCell(-1);
        cell.innerHTML = excelRows[i].Id;

        cell = row.insertCell(-1);
        cell.innerHTML = excelRows[i].Name;

        cell = row.insertCell(-1);
        cell.innerHTML = excelRows[i].Country;
    }

    var dvExcel = document.getElementById("dvExcel");
    dvExcel.innerHTML = "";
    dvExcel.appendChild(table);
};