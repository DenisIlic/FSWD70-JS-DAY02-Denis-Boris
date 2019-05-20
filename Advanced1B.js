  function time(minutes){
      var remin = minutes % 60;
      var hours = minutes / 60;
      var hours = Math.floor(hours);
      document.write(hours +"hours and " + remin + " minutes")
    }
    time(31234123)