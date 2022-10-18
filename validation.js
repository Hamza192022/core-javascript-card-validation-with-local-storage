// step 1: Show stored data on history table

let cartable = document.getElementById('cartable');
let storedData = JSON.parse(localStorage.getItem('transactions'));

// if data is available in localstorage then show it on history table
if (storedData == null || storedData == []) {

    localStorage.setItem("transactions", JSON.stringify([]));

} else {


    for (let trans of storedData) {

        let row = document.createElement('tr');
        row.innerHTML = `<td>${trans.name}</td><td>${trans.brandname}</td><td>${trans.color}</td><td>${trans.model}</td>`

        cartable.appendChild(row);

    }

}







// step 3: add transaction into history table list and also store it in 
// localstorage on clicking add button
let submitbtn = document.getElementById('submitbtn');


submitbtn.addEventListener('click', async () => {

    let carname = document.getElementById('name');
    let carbrand = document.getElementById('brand');
    let carcolor = document.getElementById('color');
    let carmodel = document.getElementById('model');

    let alreadyStoredData = JSON.parse(localStorage.getItem('transactions'));
    let carproperty = {
        name: carname.value,
        brandname: carbrand.value,
        color: carcolor.value,
        model: carmodel.value
    }

    alreadyStoredData.push(carproperty)

    await localStorage.setItem("transactions", JSON.stringify(alreadyStoredData));

    let row = document.createElement('tr');
    row.innerHTML = `<td>${carname.value}</td><td>${carbrand.value}</td><td>${carcolor.value}</td><td>${carmodel.value}</td>`

    cartable.appendChild(row);

    // calling balance calculate function to show latest data on screen
    // await calculateAndShowAamounts();

})