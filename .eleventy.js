const { DateTime } = require("luxon");
const fs = require("fs");

module.exports = function(eleventyConfig) {
  setupRSS();
  setupSyntaxHighlight();
  setupPWA();

  eleventyConfig.setDataDeepMerge(true);

  setupLayouts();
  setupFilters();

  setupPassThrough();
  setupMarkdown();
  setupBrowserSync();
  setupCollections();

  function setupRSS() {
    const pluginRss = require("@11ty/eleventy-plugin-rss");
    eleventyConfig.addPlugin(pluginRss);
  }

  function setupSyntaxHighlight() {
    const pluginSyntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
    eleventyConfig.addPlugin(pluginSyntaxHighlight);
  }

  function setupPWA() {
    const pluginPWA = require("eleventy-plugin-pwa");
    eleventyConfig.addPlugin(pluginPWA);
  }

 function setupLayouts() {
    eleventyConfig.addLayoutAlias("post", "layouts/post.njk");
  }

  function setupCollections() {
    eleventyConfig.addCollection("tagList", require("./_11ty/getTagList"));
  }

  function setupFilters() {
    eleventyConfig.addFilter("readableDate", dateObj => {
      return DateTime.fromJSDate(dateObj, {zone: 'utc'}).toFormat("dd LLL yyyy");
    });

    // https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#valid-date-string
    eleventyConfig.addFilter('htmlDateString', (dateObj) => {
      return DateTime.fromJSDate(dateObj, {zone: 'utc'}).toFormat('yyyy-LL-dd');
    });

    // Get the first `n` elements of a collection.
    eleventyConfig.addFilter("head", (array, n) => {
      if( n < 0 ) {
        return array.slice(n);
      }

      return array.slice(0, n);
    });
  }

  function setupPassThrough() {
    eleventyConfig.addPassthroughCopy("img");
    eleventyConfig.addPassthroughCopy("docs");
    eleventyConfig.addPassthroughCopy("css");
    eleventyConfig.addPassthroughCopy("manifest.json");
  }

  function setupMarkdown() {
    let markdownIt = require("markdown-it");
    let markdownItAnchor = require("markdown-it-anchor");
    let options = {
      html: true,
      breaks: true,
      linkify: true
    };
    let opts = {
      permalink: true,
      permalinkClass: "direct-link",
      permalinkSymbol: "#"
    };

    eleventyConfig.setLibrary("md", markdownIt(options)
      .use(markdownItAnchor, opts)
    );
  }


  function setupBrowserSync() {
    eleventyConfig.setBrowserSyncConfig({
      callbacks: {
        ready: function(err, browserSync) {
          const content_404 = fs.readFileSync('_site/404.html');

          browserSync.addMiddleware("*", (req, res) => {
            // Provides the 404 content without redirect.
            res.write(content_404);
            res.end();
          });
        }
      }
    });
  }

  return {
    templateFormats: [
      "md",
      "njk",
      "html",
      "liquid"
    ],

    // If your site lives in a different subdirectory, change this.
    // Leading or trailing slashes are all normalized away, so don’t worry about it.
    // If you don’t have a subdirectory, use "" or "/" (they do the same thing)
    // This is only used for URLs (it does not affect your file structure)
    pathPrefix: "/",

    markdownTemplateEngine: "liquid",
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk",
    passthroughFileCopy: true,
    dir: {
      input: ".",
      includes: "_includes",
      data: "_data",
      output: "_site"
    }
  };
};
