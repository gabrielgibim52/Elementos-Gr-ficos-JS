google.charts.load('current',{packages: ['corechart']});
google.charts.setOnLoadCallback(desenharGrafico);

function desenharGrafico() {


    let dados = google.visualization.arrayToDataTable([
        ['Mencoes', 'Quantidade'],
        ['MB',54],
        ['B',75],
        ['R',22],
        ['I',5]
    ]);
   
    let opcoes = {
    title: 'Menções Finais dos Alunos da Etec em 2022',
    colors: ['black','red','blue','pink']
    //legend: 'none'
    };
  
    let chart = new google.visualization.BarChart(document.getElementById('grafico'));
    chart.draw(dados, opcoes);
    
}