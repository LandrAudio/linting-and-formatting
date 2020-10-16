module.exports = {
    singleQuote: true,
    semi: true,
    printWidth: 120,
    trailingComma: 'all',
    overrides: [
        {
            files: '*.tpl.html',
            options: {
                parser: 'angular',
            },
        },
        {
            files: '*.js',
            options: {
                trailingComma: 'es5',
            },
        },
        {
            files: '*.{js,ts,jsx,tsx,scss,json,html,mdx}',
            options: {
                tabWidth: 4,
            },
        },
    ],
};
