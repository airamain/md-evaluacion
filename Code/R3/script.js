$(document).ready(() => {
    $("#videoModal").on('hidden.bs.modal', () => {
      $("#videoModal iframe").attr("src", $("#videoModal iframe").attr("src"));
    });
  });