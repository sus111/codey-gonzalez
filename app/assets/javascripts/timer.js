function Timer(){

  var seconds;

  Timer.prototype.startTimer = function(){

    var start = new Date();

    globalTimer = setInterval(function() {
      seconds = ((new Date() - start) / parseFloat(1000)).toFixed(2);
      $('#timer').text(seconds + " Seconds");
    }, 10);

  };

  Timer.prototype.endTimer = function(){

    $('#timer').remove();
    $('#result-time').text("You finished in " + seconds + " seconds.");

  };

  Timer.prototype.getSeconds = function(){

    return seconds;

  };

}
