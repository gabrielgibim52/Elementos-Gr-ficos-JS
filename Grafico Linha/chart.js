//Carregar API de visualização e o pacote corechart
//Ou seja, carregar as funções e processamentos gráficos do Google
google.charts.load('current',{packages: ['corechart']});

//Definiçãõ de uma função de retorno para plotar o gráfico
//Função é chamada quando a API do Google for carregada
google.charts.setOnLoadCallback(desenharGrafico);

function desenharGrafico() {

    //Dados
    let dados = google.visualization.arrayToDataTable([
        ['Meses', 'Dolar'],
        [1,5.34],[2,5.27], [3,5.23],
        [4,5.29],[5,5.33],[6,5.27],
        [7,5.16],[8,5.42],[9,5.39],
        [10,5.30],[11,5.04],[12,5.12]
    ]);
    //Opções de configuração do gráfico
    let opcoes = {
    title: 'Cotação do Dólar no ano de 2022',
    hAxis: {title:'Dólar'},
    vAxis: {title:'Meses'},
    lineWidth: 5,
    colors: ['black'],
    legend: 'none'
    };
    //Desenhar Gráfico
    let chart = new google.visualization.LineChart(document.getElementById('grafico'));
    chart.draw(dados, opcoes);
    
}