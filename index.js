const wasm = import("./docs/wasm_image_to_black_white");

setTimeout(() => {
  const fileUploader = document.querySelector("#uploadfile");
  const results = document.querySelector("#results");

  fileUploader.addEventListener('change', (event) => {
    const file = event.target.files[0];
    results.style.opacity = 1;
    console.info('Open File');
  
    var img = document.querySelector("#original");
  
    img.onload = function() {

      setTimeout(()=> {
        wasm.then(bnw => {
          const withLum = document.querySelector("#luminocity");
          withLum.src = bnw.grayscale_with_luminocity(img);
          withLum.width = img.width;
          withLum.height = img.height;
    
          const avg = document.querySelector("#average");
          avg.src = bnw.grayscale_with_average(img);
          avg.width = img.width;
          avg.height = img.height;

          const bt601 = document.querySelector("#bt601");
          bt601.src = bnw.grayscale_with_BT601(img);
          bt601.width = img.width;
          bt601.height = img.height;

          const desaturation = document.querySelector("#desaturation");
          desaturation.src = bnw.grayscale_with_desaturation(img);
          desaturation.width = img.width;
          desaturation.height = img.height;
        }).catch(console.error);
      }, 100);
    }
  
    img.src = URL.createObjectURL(file);
  })
}, 1000);



