function getAllSteps(){
    let tbody = document.querySelector('tbody');
    let sumMoney = document.querySelector('#sumMoney');

    axios.get(`${serverURL}/items/userID/eq/${loggedUser.ID}`).then(res=>{
        let i = 0;
        let sum = 0;
        res.data.sort((a,b) => a.date.localeCompare(b.date));
        res.data.forEach(item => {
            let tr = document.createElement('tr');
            let td1 = document.createElement('td');
            let td2 = document.createElement('td');
            let td3 = document.createElement('td');
            let td4 = document.createElement('td');

            i++;
            sum += item.amount;

            td1.innerHTML = i + '.';

            td2.innerHTML = item.type;

            td3.innerHTML = item.date.split('T')[0];

            td4.innerHTML = item.amount;
            td4.classList.add('text-end');

            tr.appendChild(td1);
            tr.appendChild(td2);
            tr.appendChild(td3);
            tr.appendChild(td4);
            tbody.appendChild(tr);
        });

        sumMoney.innerHTML = sum;
    })
}

function renderData(){
    setTimeout(()=>{getAllSteps();}, 200);
}