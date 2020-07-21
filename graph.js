const graphContainer = document.getElementById('outerLayer');

let graphs = '';

fetch('./data.json')
    .then(response => {
        if (!response.ok) {
            throw new Error("HTTP error " + response.status);
        }
        return response.json();
})
.then(result=>{
    for (i = 1; i <= 31; i++) {
        let date = new Date('2019-01-01');
        date.setDate(i)
        date = date.toISOString().slice(0,10);
        console.log('>>>>>>>>>InrRate',date);
        const rateObj = result.rates[date];
        const InrRate = rateObj ? rateObj.INR : 0;
        graphs += `
        <div class="bar-container">
            <div class="bar1-content" style="height: ${InrRate}%" title="${InrRate}">
                
            </div>
        </div>
        `;
        graphContainer.innerHTML = graphs;
    }
})