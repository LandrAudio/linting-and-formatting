module.exports = {
    extends: ['plugin:react/recommended', 'plugin:react-hooks/recommended', './index.js'],
    plugins: ['react'],

    settings: {
        react: {
            version: 'detect',
        },
    },
    rules: {
        'react/prop-types': 0,
        'react/display-name': 0,
        'react/self-closing-comp': [
            'error',
            {
                component: true,
                html: false,
            },
        ],
        'react/jsx-uses-react': 'error',
        'react/jsx-uses-vars': 'error',
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'error',
    },
};
