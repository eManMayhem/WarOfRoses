// Function to update the pie chart based on the selected country
const updatePieChart = function(selectedCountry) {
    
    // Update chartData based on the selected country
    updateChartData(selectedCountry);

    // Update the pie chart data with fixed values from chartData
    pieChart.data.datasets[0].data = chartData[selectedCountry] || [0, 0, 0, 0, 100];
    pieChart.update();

    pieChart2.data.datasets[0].data = chartData[selectedCountry] || [0, 0, 0, 0, 100];
    pieChart2.update();

    if (selectedCountry === "choose") {
        return; // Return without executing any further code if "choose" is selected
    }

    // Ensure selectedCountry is properly set
    const rulingIdeology = selectedCountry !== "choose" ? countries[selectedCountry].ideology : "Democratic"; // Default to Democratic if no country is selected
    const percentage = 100 - chartData[selectedCountry][4]; // Calculate the percentage from the chart data
    const leadingMarker = (selectedCountry === rulingIdeology) ? ' ⭐' : ''; // Add a star if it's the leading ideology
    return `${selectedCountry}: ${percentage}%${leadingMarker}`;
};

// Pie chart initialization
const ctx = document.getElementById('pieChart').getContext('2d');
const pieChart = new Chart(ctx, {
    type: 'pie',
    data: {
        labels: ['Democratic', 'Monarchist', 'Communism', 'Fascism', 'None'],
        datasets: [{
            data: [0, 0, 0, 0, 100],
            backgroundColor: ['blue', 'green', 'red', 'yellow', 'white'],
        }]
    },
    options: {
        responsive: false,
        maintainAspectRatio: false,
        interaction: {
            mode: 'index',
        },
        plugins: {
            legend: {
                display: false,
            },
            tooltip: {
                titleFont: {
                    size: 30,
                },
                bodyFont: {
                    size: 20,
                },
                callbacks: {
                    label: function(context) {
                        const label = context.label || '';
                        if(label === 'None') return label;
                
                        const value = context.parsed || 0;
                        const total = context.dataset.data.reduce((a, b) => a + b, 0);
                        const percentage = Math.round((value / total) * 100);
                
                        const rulingIdeology = Object.keys(playerCountry).find(key => playerCountry[key]);
                        const leadingMarker = (label === countries[rulingIdeology].ideology) ? ' ⭐' : '';
                        return `${label}: ${percentage}%${leadingMarker}`;
                    }
                }
            },
        },
    }
});

const ctxa = document.getElementById('pieChart2').getContext('2d');
const pieChart2 = new Chart(ctxa, {
    type: 'pie',
    data: {
        labels: ['Democratic', 'Monarchist', 'Communism', 'Fascism', 'None'],
        datasets: [{
            data: [0, 0, 0, 0, 100],
            backgroundColor: ['blue', 'green', 'red', 'yellow', 'white'],
        }]
    },
    options: {
        responsive: false,
        maintainAspectRatio: false,
        interaction: {
            mode: 'index',
        },
        plugins: {
            legend: {
                display: false,
            },
            tooltip: {
                titleFont: {
                    size: 20,
                },
                bodyFont: {
                    size: 20,
                },
                callbacks: {
                    label: function(context) {
                        const label = context.label || '';
                        if(label === 'None') return label;
                
                        const value = context.parsed || 0;
                        const total = context.dataset.data.reduce((a, b) => a + b, 0);
                        const percentage = Math.round((value / total) * 100);
                
                        const rulingIdeology = Object.keys(playerCountry).find(key => playerCountry[key]);
                        const leadingMarker = (label === countries[rulingIdeology].ideology) ? ' ⭐' : '';
                        return `${label}: ${percentage}%${leadingMarker}`;
                    }
                }
            },
        },
    }
});

let chartData;

// Function to update chartData based on selected country
const updateChartData = function(selectedCountry) {
    chartData = {
        germany: [countries[selectedCountry].democratic, countries[selectedCountry].monarchist, countries[selectedCountry].communsit, countries[selectedCountry].fascist, 0], 
        poland: [countries[selectedCountry].democratic, countries[selectedCountry].monarchist, countries[selectedCountry].communsit, countries[selectedCountry].fascist, 0],
        italy: [countries[selectedCountry].democratic, countries[selectedCountry].monarchist, countries[selectedCountry].communsit, countries[selectedCountry].fascist, 0],
        choose: [0, 0, 0, 0, 100],
    };
};