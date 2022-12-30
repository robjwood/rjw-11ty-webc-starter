const CleanCSS = require("clean-css");

module.exports = function (eleventyConfig) {
  // Watch targets
  eleventyConfig.addWatchTarget("./src/scss/");
  
  // Copy the 'images' directory 
  eleventyConfig.addPassthroughCopy("src/images");
  eleventyConfig.addPassthroughCopy("src/fonts");
  // eleventyConfig.addPassthroughCopy("src/css");

  // Filters
  eleventyConfig.addFilter("cssmin", function(code) {
    return new CleanCSS({}).minify(code).styles;
  });

  return {
    dir: {
      input: "src",
      output: "public",
    },
  };
};