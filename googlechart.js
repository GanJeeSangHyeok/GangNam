
  google.charts.load("current", {packages:["corechart"]});
  google.charts.setOnLoadCallback(drawChart);
  function drawChart() {
    let data = google.visualization.arrayToDataTable([
      ['Task', 'Hours per Day'],
      ['일본',     7538997],
      ['중국',      3854869],
      ['베트남',  3435406],
      ['미국', 2210597],
      ['필리핀',    1587959]
    ]);

    let options = {
      title: 'How many people visited in per year?',
      pieHole: 0.4,
    };

    let chart = new google.visualization.PieChart(document.getElementById('donutchart'));
    chart.draw(data, options);
  }
