window.onload = function () {
    Display()
}
let mtmData1 = []
let labels = {
    label1: ['3-7 yoshli bolalar soni', '6 yoshli bolalar soni', 'Jami MTTlar soni', 'Davlat MTTlari'],
    label2: ['3-7 yoshli bolalar soni', '6 yoshli bolalar soni', 'Jami MTTlar soni']
}
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
    //Fetch the name of First Sheet.
    var firstSheet = workbook.SheetNames[0];
    //Read all rows from First Sheet into an JSON array.
    var excelRows = XLSX.utils.sheet_to_row_object_array(workbook.Sheets[firstSheet]);
    console.log(excelRows);
    mtmData1 = Array.from(excelRows).slice(4, 17)
    mtmData1.forEach(el => {
        delete el.__EMPTY
    })
    console.log(mtmData1)
};



