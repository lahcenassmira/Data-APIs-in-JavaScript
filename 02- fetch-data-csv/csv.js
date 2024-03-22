



const xYears = [];
const ytemp = [];
chartIt();


 async function chartIt() {
    await getDataFromCsvFile();
    const ctx = document.getElementById('myChart');

    const myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: xYears,
            datasets: [{
        label: 'Combined Land-Surface Air and Sea-Surface Water Temperature  C°',
                data: ytemp,
                fill: false,
                backgroundColor: 'rgba(255,99,132,0.2)',
                borderColor: 'rgba(5,66,255,1)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    ticks: {

                        callback: function(value, index, ticks) {
                            return  value  + "°";
                        }
                    }
                }
            }
        }
    });
}










async function getDataFromCsvFile() {
    const response = await fetch('ZonAnn.Ts+dSST.csv'); // using small.csv file for testing
    const data = await response.text();
    // console.log(data);
    const rows = data.split('\n').slice(1);
    rows.forEach(el => {
        const colums = el.split(",");
        const year = colums[0];
        const temp = colums[1];
        xYears.push(year);
        ytemp.push(parseFloat(temp) + 14); //convert temp to Number


    });

}


