//<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>


$.ajax({
    //url del archivo
    url: "json.txt",
    //tipo del archivo
    dataType: "JSON",
    //funcuion donde se obtienen los datos
    success: function(data, index){
          console.log(data);
          console.log(data.Paulina);
      $.each(data, function(index, element) {
        console.log(index + data.Paulina.children+" "+data.Paulina.children.Juan.dob+"'");
         //obtiene fechas
         console.log(data.Paulina.dob + " " + data.Paulina.children.Juan.children.Mathew.dob);
      });
    }
  });