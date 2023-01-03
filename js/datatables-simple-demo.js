window.addEventListener('DOMContentLoaded', event => {
    // Simple-DataTables
    // https://github.com/fiduswriter/Simple-DataTables/wiki

    const datatablesSimple = document.getElementById('datatablesSimple');
    if (datatablesSimple) {
        new simpleDatatables.DataTable(datatablesSimple);
    }
});

google.script.run.withSuccessHandler(showData).getData();
 
  //THIS FUNCTION GENERATE THE DATA TABLE FROM THE DATA ARRAY
  function showData(dataArray){
    $(document).ready(function(){
      $('#data-table').DataTable({
        data: dataArray,
        //CHANGE THE TABLE HEADINGS BELOW TO MATCH WITH YOUR SELECTED DATA RANGE
        columns: [
          {"title":"Rating"},
          {"title":"Reviews"},
          {"title":"Book title"},
          {"title":"Number of Pages"},
          {"title":"Type"},
          {"title":"Price"}
        ]
      });
    });
  }
