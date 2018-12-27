const js = import("./wasm_image_to_black_white");

const fileUploader = document.querySelector("#uploadfile");

fileUploader.addEventListener('change', (event) => {
  const file = event.target.files[0];

  var img = new Image;

  img.onload = function() {
    js.then(wasm => {
      console.log(wasm.grayscale_with_luminocity(img));
      console.log(wasm.grayscale_with_average(img));
    });
  }

  img.src = URL.createObjectURL(file);
})


