module.exports = {
    "singleQuote": true,
    "semi": true,
    "printWidth": 100,
    "trailingComma": "all",
    "overrides": [
        {
            "files": "*.tpl.html",
            "options": {
                "parser": "angular"
            }
        },
        {
            "files": "*.js",
            "options": {
                "trailingComma": "es5"
            }
        }
    ]
}
