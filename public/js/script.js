// drop your system JavaScript in here.. (import form home)

numGen = document.getElementById("number-generator");
congrats = document.getElementById("congrats");
const jsConfetti = new JSConfetti();
running = false;
undian = 0;
start = 001;
end = 700;

function startRunning() {
  running = true;
  congrats.style.position = "absolute";
  /*atur position text ngacak nya dibawah ini (martop)*/
  congrats.style.marginTop = "45%";
  congrats.style.fontSize = "2.2em";
  numGen.classList.add("animationText");
  congrats.style.animation = "acakP .8s ease infinite alternate";
  congrats.innerHTML = "mengacak..";
  inv = setInterval(() => {
    undian = start + Math.round(Math.random() * (end - start));
    numGen.innerHTML = Math.round(Math.random() * 1000)
      .toString()
      .padStart(3, "0");
    /* numGen.innerHTML = Math.round(Math.random() * 1000)
                    .toString()
                    .padStart(3, "0"); */
  }, 70);
}

function stopRunning() {
  running = false;
  numGen.classList.remove("animationText");
  clearInterval(inv);
  numGen.innerHTML = undian;
        jsConfetti.addConfetti({
          confettiRadius: 6,
          confettiNumber: 200,
        });
  congrats.style.animation = "bouceP 2s ease infinite alternate";
  congrats.style.possition = "absolute";
  congrats.innerHTML = `Selamat kepada undian <font class="fw-bold text-center" style="color: #99c9e5;">${undian} </font> ! , Silakan maju kedepan`;

  var winUndian = document.getElementById("txt-win");
  winUndian.innerHTML = `SELAMAT KEPADA UNDIAN<br><font style="background: url('https://raw.githubusercontent.com/zeru-program/Logo_LK_2023/main/bgUd.jpg'); color: white; padding: 0 20px; text-shadow: 0 0 5px rgba(35, 35, 35, 0.7);"> ${undian}</font>`;
}

// Detect click and spacebar
document.addEventListener("keypress", handleKeyPress);
document.addEventListener("click", handleKeyPress);

function handleKeyPress(e) {
  // Ignore keypress except SPACE (key code 32) and clicks
  if (e.type === "keypress" && e.keyCode !== 32) return;

  if (running) {
    stopRunning();
    // hapus setTimeout sampe 4000); untuk menghilangkan efek muncul hilang otomatis, dan yang akan aktif sistem keyboard nya yang bisa munculin dan hilangin pop up. hapus atau block dengan coment /* */
    /*    setTimeout(function () {
            const winBox = document.getElementById("popup-win");
            winBox.style.display = "flex";
            winBox.style.animation = "muncul 3s ease";
        }, 2000);
        setTimeout(function () {
            const conPopup = document.getElementById("popup-win");
            conPopup.style.animation = "fadeOut 1s ease";
            conPopup.addEventListener("animationend", function () {
                conPopup.style.display = "none";
            });
        }, 4000);*/
  } else {
    startRunning();
  }
}

// full screen toggle 
function toggleFullscreen() {
  const doc = window.document;
  const docEl = doc.documentElement;

  const requestFullScreen =
    docEl.requestFullscreen ||
    docEl.mozRequestFullScreen ||
    docEl.webkitRequestFullScreen ||
    docEl.msRequestFullscreen;
  const cancelFullScreen =
    doc.exitFullscreen ||
    doc.mozCancelFullScreen ||
    doc.webkitExitFullscreen ||
    doc.msExitFullscreen;

  if (
    !doc.fullscreenElement &&
    !doc.mozFullScreenElement &&
    !doc.webkitFullscreenElement &&
    !doc.msFullscreenElement
  ) {
    requestFullScreen.call(docEl);
  } else {
    cancelFullScreen.call(doc);
  }
}



// sistem muuncul dan close pop up pake ctrl + d/c
document.addEventListener("keydown", function(event) {
  if (event.ctrlKey && (event.key === "d" || event.key === "D")) {
    const winBox = document.getElementById("popup-win");
    winBox.style.animation = "muncul 3s ease";
    winBox.style.display = "flex";
  }
  if (event.ctrlKey && (event.key === "c" || event.key === "C")) {
    const conPopup = document.getElementById("popup-win");
    conPopup.style.animation = "fadeOut 2s ease";
    conPopup.addEventListener("animationend", function() {
      conPopup.style.display = "none";
    });
  }
  /* lgsg klik d atau c utk close dan muncul pop up*/
  if (event.key === "d" || event.key === "D") {
    const winBox = document.getElementById("popup-win");
    winBox.style.animation = "muncul 3s ease";
    winBox.style.display = "flex";
  }
  if (event.key === "c" || event.key === "C") {
    const conPopup = document.getElementById("popup-win");
    conPopup.style.animation = "fadeOut 2s ease";
    conPopup.addEventListener("animationend", function() {
      conPopup.style.display = "none";
    });
  }
});
