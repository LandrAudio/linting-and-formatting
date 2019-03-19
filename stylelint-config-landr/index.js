module.exports = {
    extends: ["stylelint-config-standard"],
    plugins: [
        "stylelint-scss"
    ],
    rules: {
        "indentation": 4,
        "string-quotes": "single",
        "no-duplicate-selectors": true,
        "color-hex-case": "lower",
        "color-hex-length": "short",
        "color-named": "never",
        "selector-max-type": 1,
        "selector-combinator-space-after": "always",
        "selector-attribute-quotes": "always",
        "selector-attribute-operator-space-before": "never",
        "selector-attribute-operator-space-after": "never",
        "selector-attribute-brackets-space-inside": "never",
        "declaration-block-trailing-semicolon": "always",
        "declaration-colon-space-before": "never",
        "declaration-colon-space-after": "always",
        "property-no-vendor-prefix": true,
        "value-no-vendor-prefix": true,
        "number-leading-zero": "always",
        "function-name-case": null,
        "function-url-quotes": "always",
        "font-weight-notation": "numeric",
        "font-family-name-quotes": "always-where-recommended",
        "comment-whitespace-inside": "always",
        "comment-empty-line-before": "always",
        "at-rule-empty-line-before": null,
        "at-rule-no-vendor-prefix": true,
        "at-rule-no-unknown": null,
        "rule-empty-line-before": ["always", {
            "except": ["after-single-line-comment", "first-nested"],
            "ignore": ["after-comment"]
        }],
        "scss/at-extend-no-missing-placeholder": true,
        "scss/at-function-pattern": "^([a-z]+)([a-z-A-Z]([a-z]+))+$",
        "scss/at-import-no-partial-leading-underscore": true,
        "scss/at-import-partial-extension-blacklist": ["scss"],
        "scss/at-mixin-pattern": "^([a-z]+)([a-z-A-Z]([a-z]+))+$",
        "scss/dollar-variable-colon-space-after": "always",
        "scss/dollar-variable-colon-space-before": "never",
        "scss/dollar-variable-pattern": "^[_]?[a-z-A-Z]+([a-z0-9-]+[a-z0-9]+)?$",
        "scss/percent-placeholder-pattern": "^([A-Z]|is-|u-|o-|ng-|&)[a-z](\\w+(-[a-z]\\w+|)){1,2}(--[a-z]\\w+|)$",
        "scss/selector-no-redundant-nesting-selector": true,
        "selector-class-pattern": [
            "^([A-Z]|is-|u-|o-|ng-|&)[a-z](\\w+(-[a-z]\\w+|)){1,2}(--[a-z]\\w+|)$",
            {
                "resolveNestedSelectors": true,
                "message": "Selector should be written in Suit-CSS convention, refer to styleguide (selector-class-pattern)"
            }
        ],
        "selector-pseudo-element-colon-notation": "single",
        "selector-pseudo-class-parentheses-space-inside": "never",
        "selector-no-vendor-prefix": true,
        "media-feature-range-operator-space-before": "always",
        "media-feature-range-operator-space-after": "always",
        "media-feature-parentheses-space-inside": "never",
        "media-feature-name-no-vendor-prefix": true,
        "media-feature-colon-space-before": "never",
        "media-feature-colon-space-after": "always"
    }
}
