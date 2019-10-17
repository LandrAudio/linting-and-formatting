module.exports = {
    extends: ['plugin:react/recommended', './index.js'],
    plugins: ['react'],

    settings: {
        react: {
            version: 'detect',
        },
    },
    rules: {
        'react/self-closing-comp': [
            'error',
            {
                component: true,
                html: false,
            },
        ],
    },
};
