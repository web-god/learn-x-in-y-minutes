let w;

// startWorker
function startWorker() {
  if (typeof Worker !== "undefined") {
    w = new Worker("webworker.js");
    console.log(w);
  }

  w.onmessage = function (event) {
    document.getElementById("result").innerHTML = event.data;
  };

  //   w.addEventListener('message', function(event) {
  //     document.getElementById('result').innerHTML = event.data;
  //   });
}

// stopWorker

function stopWorker() {
    w.terminate();
    w=undefined;
}
