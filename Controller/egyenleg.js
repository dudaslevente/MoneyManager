function showEgyChart(){
    let labels = [];
    let datas = [];

  axios.get(`${serverURL}/items/userID/eq/${loggedUser.ID}`).then((res) => {
    res.data.sort((a,b) => a.date.localeCompare(b.date));
    res.data.forEach((item) => {
      labels.push(item.date.toString().split("T")[0]);
      datas.push(item.amount);
    });
  });

  setTimeout(() => {
    const ctx = document.getElementById("myEgyenleg");

    new Chart(ctx, {
      type: "line",
      data: {
        labels: labels,
        datasets: [
          {
            label: "Money:",
            data: datas,
            borderWidth: 3,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  }, 500);
}
