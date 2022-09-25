const mix = require("laravel-mix");

mix.js("src/index.js", "dist").react().sass("src/index.scss", "dist", [
  //
]);
