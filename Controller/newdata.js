function setMaxDate(){
    let date = document.querySelector('#date');
    date.max =  new Date().toISOString().split("T")[0];
}

function getToday(){
    setTimeout(()=>{setMaxDate()}, 500);
}

function addMoney(){

    let date = document.querySelector('#date');
    let money = document.querySelector('#money');
    let cim = document.querySelector('#cim');
    let bevKiad = document.querySelector('#bevKiad');

    if (date.value == "" || money.value == 0 ){
        showMessage("Nem adtál meg minden adatot!");
    }
    else{
        let data = {
            userID : loggedUser.ID,	
            date : date.value,	
            money : money.value,
            cim : cim.value,
            bevKiad : bevKiad.value
        };

        axios.post(`${serverURL}/items`, data).then((res)=>{
            alert('Adat rögzítve!');
            date.value = null;
            money.value = 0;
            cim.value = null;
            bevKiad = null;
        });  
    }
}

getToday();
