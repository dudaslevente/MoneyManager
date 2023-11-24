function showCalendar(){
    let myEvents = [];
    axios.get(`${serverURL}/items/userID/eq/${loggedUser.ID}`).then(res=>{
        res.data.forEach(item => {
            myEvents.push({
                title: item.amount,
                start: item.date,
                allDay: true,
            })
        });
    });

    setTimeout(()=>{

        var calendarEl = document.getElementById('calendar');

        var calendar = new FullCalendar.Calendar(calendarEl, {
        headerToolbar: {
            left: 'prevYear,prev,next,nextYear',
            center: 'title',
            right: 'dayGridMonth,dayGridWeek,dayGridDay,listWeek'
        },
        initialDate: new Date(),
        navLinks: true,
        editable: false,
        dayMaxEvents: true,
        eventColor: 'blue',
        events: myEvents
        });
        
        calendar.render();
    }, 100);
}
