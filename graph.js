const graphContainer = document.getElementById('outerLayer');
const graphContainer2 = document.getElementById('outerLayer2');

let graphs = '';
let graphs2 = '';

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
        const GBP = rateObj ? rateObj.GBP :0;
        graphs += `
        <div class="bar-container">
            <div class="bar1-content" style="height: ${InrRate}%" title="${InrRate}">
                
            </div>
        </div>
        `;

        graphs2 += `
        <div class="bar-container">
            <div class="bar1-content" style="height: ${InrRate}%" title="${InrRate}">
                
            </div>
            <div class="bar1-content" style="height: ${GBP}%;background-color:red; border:1px solid red ;" title="${GBP}">
                
            </div>
        </div>
        `;
        graphContainer.innerHTML = graphs;
        graphContainer2.innerHTML = graphs2;

    }
})