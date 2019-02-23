const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");

module.exports = function(eleventyConfig) {
  /** Plugins */
  definePlugins(eleventyConfig);
  defineAliases(eleventyConfig);
  defineI18nEnConfig(eleventyConfig);
  defineStylesPath(eleventyConfig);
  defineImagesPath(eleventyConfig);
  defineDocs(eleventyConfig);
};

function definePlugins(eleventyConfig) {
  eleventyConfig.addPlugin(syntaxHighlight);
}

function defineAliases(eleventyConfig) {
  eleventyConfig.addLayoutAlias('base', 'layouts/base.njk');
  eleventyConfig.addLayoutAlias('post', 'layouts/post.njk');
  eleventyConfig.addLayoutAlias('page', 'layouts/page.njk');
}

function defineI18nEnConfig(eleventyConfig) {
  eleventyConfig.addLayoutAlias('post-en', 'layouts/post-en.njk');
  eleventyConfig.addLayoutAlias('page-en', 'layouts/page-en.njk');
}

function defineStylesPath(eleventyConfig) {
   eleventyConfig.addPassthroughCopy('styles');
}

function defineImagesPath(eleventyConfig) {
   eleventyConfig.addPassthroughCopy('wp-content');
}

function defineDocs(eleventyConfig) {
  eleventyConfig.addPassthroughCopy('README.md');
}
