 $(function () {

     var barData = {
         labels: this.labels,
         datasets: [{
             label: "Biorad",
             backgroundColor: 'rgba(26,179,148,0.5)',
             borderColor: "rgba(26,179,148,0.7)",
             pointBackgroundColor: "rgba(26,179,148,1)",
             pointBorderColor: "#fff",
             data: [19, 29, 80, 81, 56, 55, 40, 62, 76]
         }]
     };

     var barOptions = {
         responsive: true
     };

    



     var ctx2 = document.getElementById("barChart").getContext("2d");
     new Chart(ctx2, {
         type: 'bar',
         data: barData,
         options: barOptions
     });
 });