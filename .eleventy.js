const pluginWebc = require("@11ty/eleventy-plugin-webc");
const { EleventyRenderPlugin } = require("@11ty/eleventy");

module.exports = function (eleventyConfig) {
  // Watch targets
  eleventyConfig.addWatchTarget("./src/scss/");
  
	// FIXME: The passthrough behavior in the dev server doesn't seem to be working, so for now we'll go back to the copy behavior.
	// eleventyConfig.setServerPassthroughCopyBehavior("copy");
  eleventyConfig.addPassthroughCopy({"src/fonts": "fonts"});
  eleventyConfig.addPassthroughCopy({"src/images": "images"});

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