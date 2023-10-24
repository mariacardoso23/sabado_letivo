$(document).ready(function() {
    $("#adicionar-tarefa").click(function() {
        var novaTarefa = $("#nova-tarefa").val();
        if (novaTarefa) {
            $("#lista-tarefas").append("<li>" + novaTarefa + "</li>");
            $("#nova-tarefa").val("");
        }
    });
});
