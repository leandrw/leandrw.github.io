const syntaxHighlight = require('@11ty/eleventy-plugin-syntaxhighlight');
const { DateTime } = require('luxon');

module.exports = function(eleventyConfig) {
  eleventy(eleventyConfig)
    .define(
      plugins,
      aliases,
      i18nEn,
      stylesPath,
      imagesPath,
      docs,
      filters,
      collections,
    );
};

function eleventy(config) {
  return {
    define(...parts) {
      parts.forEach((part) => {
        part(config);
      });
    }
  };
}

function plugins(eleventyConfig) {
  eleventyConfig.addPlugin(syntaxHighlight);
}

function aliases(eleventyConfig) {
  eleventyConfig.addLayoutAlias('base', 'layouts/base.njk');
  eleventyConfig.addLayoutAlias('post', 'layouts/post.njk');
  eleventyConfig.addLayoutAlias('page', 'layouts/page.njk');
}

function i18nEn(eleventyConfig) {
  eleventyConfig.addLayoutAlias('post-en', 'layouts/post-en.njk');
  eleventyConfig.addLayoutAlias('page-en', 'layouts/page-en.njk');
}

function stylesPath(eleventyConfig) {
   eleventyConfig.addPassthroughCopy('_assets/css');
}

function imagesPath(eleventyConfig) {
   eleventyConfig.addPassthroughCopy('wp-content');
}

function docs(eleventyConfig) {
  eleventyConfig.addPassthroughCopy('README.md');
}

function collections(eleventyConfig) {
  eleventyConfig.addCollection('tagList', require('./_11ty/getTagList'));
}

function filters(eleventyConfig) {
  eleventyConfig.addFilter('head', filterHead.bind(this));
  eleventyConfig.addFilter('htmlDateString', (dateObj) =>
    DateTime.fromJSDate(dateObj, {zone: 'utc'}).toFormat('yyyy-LL-dd'));
  eleventyConfig.addFilter('readableDate', (dateObj) =>
    DateTime.fromJSDate(dateObj, {zone: 'utc'}).toFormat("dd LLL yyyy"));

  function filterHead(array, n) {
    if (n < 0) {
      return array.slice(n);
    }

    return array.slice(0, n);
  }
}

