$(document).ready(() => {
    $("#btn-modal").click(() => {
        $("#modal").show();
    });

    $("#btn-modal-close").click(() => {
        $("#modal").hide();
        $("#player").attr("src", $("#player").attr("src"));
    });
});