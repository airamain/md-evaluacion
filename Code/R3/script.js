$(document).ready(() => {
    $("#videoModal").on('hidden.bs.modal', () => {
      $("#videoModal iframe").attr("src", $("#videoModal iframe").attr("src"));
    });
  
    $("#btn-modal").click(() => {
      $("#modal").show();
    });
  
    $("#btn-modal-close").click(() => {
      $("#modal").hide();
    });
  });
  
  function openModal() {
  
  }