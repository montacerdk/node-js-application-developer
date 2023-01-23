"use strict";

const { watch } = require("fs");

// Change and rename '02-index.js'.

watch(".", (evt, filename) => console.log(evt, filename));
