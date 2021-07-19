# slack-block-builder-viewer

## A WYSIWYG REPL demo

Original issue: https://github.com/raycharius/slack-block-builder/issues/52

jsx-slack version: https://jsx-slack.netlify.app/

Another similar tool from MD to Slack: https://codesandbox.io/s/markdown-to-slack-converter-iphgn


## Known issues

* Using `eval`. Need to change this to use something else like vm2 or a non-evil version

* Page looks horrible

* No tests

* Generating the links differently from printPreviewUrl

## Todo

* Add copy to clipboard

* Update to use getPreviewUrl

* Reformat the JSON result
