const pluginWebc = require("@11ty/eleventy-plugin-webc");
const { EleventyRenderPlugin } = require("@11ty/eleventy");

module.exports = function (eleventyConfig) {
  // Watch targets
  eleventyConfig.addWatchTarget("./src/scss/");
  
  // Copy the 'images' directory 
  eleventyConfig.addPassthroughCopy("src/images");
  eleventyConfig.addPassthroughCopy("src/fonts");

  // Plugins
  eleventyConfig.addPlugin(EleventyRenderPlugin);
  eleventyConfig.addPlugin(pluginWebc, {
    components: "src/components/**/*.webc",
  });

  return {
    dir: {
      input: "src/pages",
			includes: "../components",
			layouts: "../layouts",
			data: "../data",
      output: "public",
    },
    htmlTemplateEngine: "webc"
  };
};