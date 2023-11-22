function setMaxDate(){
    let date = document.querySelector('#date');
    date.max =  new Date().toISOString().split("T")[0];
}

function getToday(){
    setTimeout(()=>{setMaxDate()}, 500);
}

function addMoney(){

    let date = document.querySelector('#date');
    let amount = document.querySelector('#amount');
    let tag = document.querySelector('#tag');
    let type = document.querySelector('#type');

    if (date.value == "" || amount.value == 0 || tag.value == "" || type.value == ""){
        showMessage("Nem adtál meg minden adatot!");
    }
    else{
        let data = {
            userID : loggedUser.ID,	
            date : date.value,	
            amount : amount.value,
            tag : tag.value,
            type : type.value
        };

        axios.post(`${serverURL}/items`, data).then((res)=>{
            alert('Adat rögzítve!');
            date.value = null;
            amount.value = 0;
            tag.value = null;
            type.value = "";
        });  
    }
}

getToday();
