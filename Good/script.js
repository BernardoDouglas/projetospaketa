$("input").click(function() {

    if (document.getElementById('cheap').checked && document.getElementById('fast').checked) {
      $("#great").prop("checked", false);
    } else if (document.getElementById('fast').checked && document.getElementById('great').checked) {
      $("#cheap").prop("checked", false);
    } else if (document.getElementById('cheap').checked && document.getElementById('great').checked) {
      $("#fast").prop("checked", false);
    }
  
  });