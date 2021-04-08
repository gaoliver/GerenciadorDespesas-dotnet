$(".escolhaMes").on('change', function () {
    var mesId = $(".escolhaMes").val();

    $.ajax({
        url: "Despesas/GastoMes",
        method: "POST",
        data: { mesId: mesId },
        success: function (dados) {
            $("canvas#GraficoGastoMes").remove();
            $("div.GraficoGastoMes").append('<canvas id="GraficoGastoMes" style="height: 400px; width: 400px;"></canvas>');

            var ctx = document.getElementById('GraficoGastoMes').getContext('2d');

            var grafico = new Chart(ctx, {
                type: 'doughnut',

                data:
                {
                    labels: PegasTiposDespesas(dados),
                    datasets: [{
                        label: "Gastos por despesa",
                        backgroundColor: PegarCores(dados.length),
                        hoverBackgroundColor: PegarCores(dados.length),
                        data: PegarValores(dados)
                    }]
                },
                options: {
                    responsive: false,
                    title: {
                        display: true,
                        text: "Gastos por despesa"
                    }
                }
            });
        }
    });
});



function CarregarDadosGastosMes() {
    var mesId = $(".escolhaMes").val();

    $.ajax({
        url: "Despesas/GastoMes",
        method: "POST",
        data: { mesId: mesId },
        success: function (dados) {
            $("canvas#GraficoGastoMes").remove();
            $("div.GraficoGastoMes").append('<canvas id="GraficoGastoMes" style="height: 400px; width: 400px;"></canvas>');

            var ctx = document.getElementById('GraficoGastoMes').getContext('2d');

            var grafico = new Chart(ctx, {
                type: 'doughnut',

                data:
                {
                    labels: PegarTiposDespesas(dados),
                    datasets: [{
                        label: "Gastos por despesa",
                        backgroundColor: PegarCores(dados.length),
                        hoverBackgroundColor: PegarCores(dados.length),
                        data: PegarValores(dados)
                    }]
                },
                options: {
                    responsive: false,
                    title: {
                        display: true,
                        text: "Gastos por despesa"
                    }
                }
            });
        }
    });
};