module.exports = {
    extends: ['plugin:react/recommended', './index.js'],
    plugins: ['react'],

    settings: {
        react: {
            version: 'detect',
        },
    },
    rules: {
        'react/prop-types': 0,
        'react/self-closing-comp': [
            'error',
            {
                component: true,
                html: false,
            },
        ],
    },
};
