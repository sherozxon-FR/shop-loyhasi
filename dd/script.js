// HTML teglari yordamida ustunli diagramma
function drawChart() {
    const labels = document.getElementById('labelsInput').value.split(',').map(s => s.trim()).filter(Boolean);
    const data = document.getElementById('dataInput').value.split(',').map(Number);
    const chart = document.getElementById('barChart');
    chart.innerHTML = '';
    if (labels.length === 0 || data.length === 0 || labels.length !== data.length) {
        chart.innerHTML = '<div style="color:red; width:100%">Maʼlumotlar toʻgʻri kiritilmadi!</div>';
        return;
    }
    const maxValue = Math.max(...data);
    labels.forEach((label, i) => {
        const bar = document.createElement('div');
        bar.className = 'bar';
        bar.style.height = (data[i] / maxValue * 180 + 20) + 'px';
        const value = document.createElement('div');
        value.className = 'bar-value';
        value.textContent = data[i];
        const barLabel = document.createElement('div');
        barLabel.className = 'bar-label';
        barLabel.textContent = label;
        bar.appendChild(value);
        bar.appendChild(barLabel);
        chart.appendChild(bar);
    });
}

// Diagramma uchun massivlar
const chartLabels = ['Yanvar', 'Fevral', 'Mart', 'Aprel', 'May'];
const chartData = [12, 19, 7, 15, 10];

function drawChartFromArray() {
    const labels = chartLabels;
    const data = chartData;
    const chart = document.getElementById('barChart');
    chart.innerHTML = '';
    if (labels.length === 0 || data.length === 0 || labels.length !== data.length) {
        chart.innerHTML = '<div style="color:red; width:100%">Maʼlumotlar toʻgʻri kiritilmadi!</div>';
        return;
    }
    const maxValue = Math.max(...data);
    labels.forEach((label, i) => {
        const bar = document.createElement('div');
        bar.className = 'bar';
        bar.style.height = (data[i] / maxValue * 180 + 20) + 'px';
        const value = document.createElement('div');
        value.className = 'bar-value';
        value.textContent = data[i];
        const barLabel = document.createElement('div');
        barLabel.className = 'bar-label';
        barLabel.textContent = label;
        bar.appendChild(value);
        bar.appendChild(barLabel);
        chart.appendChild(bar);
    });
}

// Progress diagramma uchun qiymatlar
const daysLeft = 15;
const totalDays = 15;
const drivingDays = 8;
const rolledDays = 7;
const expireSoon = 2;
const expireDate = '05/26/2020';
const periodEnd = 'May 16th';

// Progress aylana chizish
function setProgress(percent) {
    const circle = document.querySelector('.progress-bar');
    const radius = 54;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference * (1 - percent / 100);
    circle.setAttribute('stroke-dasharray', `${circumference}`);
    circle.setAttribute('stroke-dashoffset', `${offset}`);
}

window.onload = function() {
    document.getElementById('labelsInput').value = 'Yanvar,Fevral,Mart,Aprel,May';
    document.getElementById('dataInput').value = '12,19,7,15,10';
    if (!document.getElementById('barChart')) {
        const chartDiv = document.createElement('div');
        chartDiv.id = 'barChart';
        document.body.insertBefore(chartDiv, document.getElementById('myChart'));
    }
    drawChart();
    // drawChartFromArray() funksiyasini chaqirish uchun misol:
    // drawChartFromArray();
    document.getElementById('daysLeft').textContent = daysLeft;
    document.getElementById('periodEnd').innerHTML = `Current driving period ends on<br><b>${periodEnd}</b>`;
    document.getElementById('drivingDays').textContent = `${drivingDays} driving days`;
    document.getElementById('rolledDays').textContent = `${rolledDays} rolled-over driving days`;
    document.querySelector('.expire').textContent = `${expireSoon} days expire soon`;
    document.querySelector('.expire-date').textContent = expireDate;
    setProgress(daysLeft / totalDays * 100);
};
