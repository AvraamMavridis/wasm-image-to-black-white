# Description

Implementation of various algorithms that transform colourful images to black and white.

#### Install

```
npm i wasm-image-to-black-white --save
```

## Algorithms

Original Image

<img src="https://raw.githubusercontent.com/AvraamMavridis/wasm-image-to-black-white/master/images/index.jpg?token=AARUKn8CzUtvfPfWaHq4E2hPtvxrCHL4ks5cLiPHwA%3D%3D" />

### Averaging Color Channels

`Gray = (Red + Green + Blue) / 3`

```js
const wasm = import("wasm_image_to_black_white");
wasm.then(bnw => {
  img.src = bnw.grayscale_with_luminocity(img);
});
```

<img src="https://raw.githubusercontent.com/AvraamMavridis/wasm-image-to-black-white/master/images/average.png?token=AARUKkCBwXutBGdFrZyMy-7JSg-PlePUks5cLiQiwA%3D%3D" />

### Luminocity

`Gray = (Red * 0.21 + Green * 0.72 + Blue * 0.07)`

```js
const wasm = import("wasm_image_to_black_white");
wasm.then(bnw => {
  img.src = bnw.grayscale_with_average(img);
});
```

<img src="https://raw.githubusercontent.com/AvraamMavridis/wasm-image-to-black-white/master/images/luminocity.png?token=AARUKgXRUizvLUAkL8sjv2aMWqPMYjwIks5cLiVjwA%3D%3D" />



# Example

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
