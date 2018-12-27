
### Install

```
npm i wasm-image-to-black-white --save
```


### Example

```js
const wasm = import("wasm-image-to-black-white");

const fileUploader = document.querySelector("#uploadfile");

fileUploader.addEventListener('change', (event) => {
  const file = event.target.files[0];

  var img = new Image;

  img.onload = function() {
    wasm.then(bnw => {
      bnw.grayscale_with_luminocity(img);
      bnw.grayscale_with_average(img);
    });
  }

  img.src = URL.createObjectURL(file);
})
```
