
let mtmData1 = []
let mtmData3 = []
let labels = []

const labelKey = '__EMPTY'
function Display() {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", "/public/excels/ntt.xlsx", true);
    xhr.responseType = "blob";
    xhr.onload = function (e) {
        let file = this.response;
        let reader = new FileReader();
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
    let workbook = XLSX.read(data, {
        type: 'binary'
    });
    //Fetch the name of First Sheet.
    let firstSheet = workbook.SheetNames[1];
    //Read all rows from First Sheet into an JSON array.
    let excelRows = XLSX.utils.sheet_to_row_object_array(workbook.Sheets[firstSheet]);
    console.log(excelRows);
    mtmData1 = Array.from(excelRows).slice(2, 15)
    labels = mtmData1.map(el => el[labelKey])
     //Create a HTML Table element.
     var table = document.createElement("table");
     table.border = "1";
     table.classList.add("c-table")
     //Add the header row.
     var row = table.insertRow(-1);
     //Add the data rows from Excel file.
     for (var i = 1; i < excelRows.length-2; i++) {
         //Add the data row.
         var row = table.insertRow(-1);
 
         //Add the data cells.
         var cell = row.insertCell(-1);
         cell.innerHTML = excelRows[i].__EMPTY || '';
 
         cell = row.insertCell(-1);
         cell.innerHTML = excelRows[i].__EMPTY_1 || '';
 
         cell = row.insertCell(-1);
         cell.innerHTML = excelRows[i].__EMPTY_2 || '';

         cell = row.insertCell(-1);
         cell.innerHTML = excelRows[i].__EMPTY_3 || '';

         cell = row.insertCell(-1);
         cell.innerHTML = excelRows[i].__EMPTY_4 || '';

         cell = row.insertCell(-1);
         cell.innerHTML = excelRows[i].__EMPTY_5 || '';
       
     }
 
     var dvExcel = document.getElementById("dvExcel");
     dvExcel.innerHTML = "";
     dvExcel.appendChild(table);
};

const mtmData = {
    labels: [],
    datasets: [{
        label: 'Soni',
        data: [212851, 296449,
            153464, 265481, 303619, 340974, 242389, 152421, 68153,
            80671, 0, 120008, 136758, 191040],
        backgroundColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)', 'rgba(75, 192, 192, 1)', 'rgba(153, 102, 255, 1)', 'rgba(225, 50, 64, 1)', 'rgba(64, 159, 64, 1)',
            'rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)', 'rgba(75, 192, 192, 1)', 'rgba(153, 102, 255, 1)', 'rgba(225, 50, 64, 1)', 'rgba(64, 159, 64, 1)'
        ],
        borderWidth: 1
    }]
}
const mtmData2 = {
    labels: [],
    datasets: [{
        label: 'Soni',
        data: [212851, 296449,
            153464, 265481, 303619, 340974, 242389, 152421, 68153,
            80671, 0, 120008, 136758, 191040],
        backgroundColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)', 'rgba(75, 192, 192, 1)', 'rgba(153, 102, 255, 1)', 'rgba(225, 50, 64, 1)', 'rgba(64, 159, 64, 1)',
            'rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)', 'rgba(75, 192, 192, 1)', 'rgba(153, 102, 255, 1)', 'rgba(225, 50, 64, 1)', 'rgba(64, 159, 64, 1)'
        ],
        borderWidth: 1
    }]
}

window.onload = function () {
    Display()
    setTimeout(() => {
        mtmData.labels = mtmData1.map(el => el.__EMPTY || '')
        mtmData.datasets[0].data = mtmData1.map(el => +String(el.__EMPTY_1).replace(" ", ""))
        mtmData2.labels = mtmData1.map(el => el.__EMPTY_1 || '')
        mtmData2.datasets[0].data = mtmData1.map(el => el.__EMPTY_2)
        let doughnut = document.getElementById('doughnut');
        console.log(mtmData);
        let doughnutConfig = new Chart(doughnut, {
            type: 'line',
            data: mtmData,
            options: {
                responsive: true, // Instruct chart js to respond nicely.
                maintainAspectRatio: true, // Add to prevent default behaviour of full-width/height 
            }
        });
    }, 500)
    //bar chart
    //doughnut chart

}