const cronoapi = async () => {
    const url = "https://api.rootnet.in/covid19-in/stats/testing/history";
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        document.getElementById("corona-main").innerHTML =  ``;
        data.data.forEach(region => {
          let div = document.createElement("div");
          div.innerHTML = `
              <p>DATE:${region.day.slice(0, 10)}</p>
              <p>totalSamplesTested: ${region.totalSamplesTested}</p>
              <p>totalIndividualsTested: ${region.totalIndividualsTested}</p>
              <a href="#" download="${region.source}">Download</a>
              <hr>
          `;
          document.getElementById("corona-main").appendChild(div);
      });

        console.log(data);
      });
};
  
cronoapi();
