const wasm = import("wasm-image-to-black-white");

const fileUploader = document.querySelector("#uploadfile");
const results = document.querySelector("#results");

fileUploader.addEventListener('change', (event) => {
  const file = event.target.files[0];
  results.style.opacity = 1;

  var img = document.querySelector("#original");

  img.onload = function() {
    wasm.then(bnw => {

      const withLum = document.querySelector("#luminocity");
      withLum.src = bnw.grayscale_with_luminocity(img);
      withLum.style.width = img.width;
      withLum.style.height = img.height;

      const avg = document.querySelector("#average");
      avg.src = bnw.grayscale_with_average(img);
      avg.style.width = img.width;
      avg.style.height = img.height;
    }).catch(console.error);
  }

  img.src = URL.createObjectURL(file);
})


