
let mtmData1 = []
let mtmData3 = []
let labels = []
const labelKey = '__EMPTY'
const dataKey1 = '__EMPTY_5'
const dataKey2 = '__EMPTY_21'
function Display() {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", "/public/excels/professional.xlsx", true);
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
    let firstSheet = workbook.SheetNames[0];
    //Read all rows from First Sheet into an JSON array.
    let excelRows = XLSX.utils.sheet_to_row_object_array(workbook.Sheets[firstSheet]);
    console.log(excelRows);
    mtmData1 = Array.from(excelRows).slice(5, 14)
    labels = mtmData1.map(el => el[labelKey])

};

const mtmData = {
    labels: ['Toshkent viloyati', 'Qashqadaryo viloyati', 'QQR', 'Andijon viloyati',
        'Fargʻona viloyati', 'Samarqand viloyati', 'Namangan viloyati', 'Xorazm viloyati',
        'Sirdaryo viloyati', 'Navoiy viloyati ', 'Surxondaryo viloyati', 'Jizzax viloyati',
        'Toshkent shahar'
    ],
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
    labels: ['Toshkent viloyati', 'Qashqadaryo viloyati', 'QQR', 'Andijon viloyati',
        'Fargʻona viloyati', 'Samarqand viloyati', 'Namangan viloyati', 'Xorazm viloyati',
        'Sirdaryo viloyati', 'Navoiy viloyati ', 'Surxondaryo viloyati', 'Jizzax viloyati',
        'Toshkent shahar'
    ],
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
        mtmData.labels = labels
        mtmData.datasets[0].data = mtmData1.map(el => el[dataKey1])
        mtmData2.labels = labels
        mtmData2.datasets[0].data = mtmData1.map(el => el[dataKey2])

        let doughnut = document.getElementById('doughnut');
        let doughnutConfig = new Chart(doughnut, {
            type: 'bar',
            data: mtmData,
            options: {
                responsive: true, // Instruct chart js to respond nicely.
                maintainAspectRatio: true, // Add to prevent default behaviour of full-width/height 
            }
        });
        let doughnut2 = document.getElementById('doughnut2');
        let doughnut2Config = new Chart(doughnut2, {
            type: 'bar',
            data: mtmData2,
            options: {
                responsive: true, // Instruct chart js to respond nicely.
                maintainAspectRatio: true, // Add to prevent default behaviour of full-width/height 
            }
        });
        // let bar = document.getElementById('bar');
        // bar.height = 400
        // let barConfig = new Chart(bar, {
        //     type: 'horizontalBar',
        //     data: mtmData,
        //     options: {
        //         scales: {
        //             yAxes: [{
        //                 ticks: {
        //                     beginAtZero: true
        //                 }
        //             }]
        //         },
        //         responsive: true, // Instruct chart js to respond nicely.
        //         maintainAspectRatio: false, // Add to prevent default behaviour of full-width/height 
        //     }
        // })
        //line chart
        let line = document.getElementById('line1');
        line.height = 400
        let lineConfig = new Chart(line, {
            type: 'pie',
            data: mtmData,
            options: {
                responsive: true, // Instruct chart js to respond nicely.
                maintainAspectRatio: false, // Add to prevent default behaviour of full-width/height 
            }
        })
        let line2 = document.getElementById('line2');
        line2.height = 400
        let lineConfig2 = new Chart(line2, {
            type: 'pie',
            data: mtmData2,
            options: {
                maintainAspectRatio: false, // Add to prevent default behaviour of full-width/height 
            }
        })
        // //pie chart
        // let pie = document.getElementById('pie');
        // let pieConfig = new Chart(pie, {
        //     type: 'pie',
        //     data: mtmData,
        //     options: {
        //         responsive: true, // Instruct chart js to respond nicely.
        //         maintainAspectRatio: true, // Add to prevent default behaviour of full-width/height 
        //     }
        // });
        // //polar area chart
        // let polar = document.getElementById('polar');
        // let polarConfig = new Chart(polar, {
        //     type: 'polarArea',
        //     data: mtmData,
        //     options: {
        //         responsive: true, // Instruct chart js to respond nicely.
        //         maintainAspectRatio: true, // Add to prevent default behaviour of full-width/height 
        //     }
        // });
        // //mixed chart
        // let mixed = document.getElementById('mixed');
        // let mixedConfig = new Chart(mixed, {
        //     type: 'bar',
        //     data: mtmData,
        //     options: {
        //         scales: {
        //             yAxes: [{
        //                 ticks: {
        //                     beginAtZero: true
        //                 }
        //             }]
        //         },
        //         responsive: true, // Instruct chart js to respond nicely.
        //         maintainAspectRatio: false, // Add to prevent default behaviour of full-width/height 
        //     }
        // })
    }, 500)
    //bar chart
    //doughnut chart

}