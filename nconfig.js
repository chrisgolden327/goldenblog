/**
 * Project config for your site.
 * All variables declared in `meta` will be accessible in your Nunjucks
 * templates. Variables changed in `config` affect the build process.
 *
 */
module.exports = {
    // The `meta` object is sent to every template.
    meta: {
        title: "Christopher Golden's Blog",
        description: "This blog is statically awesome!",
        author: "Christopher Golden",
    },
    // All authors must be defined here.
    authors: {
        "christopher-golden": {
            name: "First Author",
            short_bio: "short bio catchphrase",
            bio: "a whole HTML paragraph."
        }
    },
    config: {

    },
}