module.exports = {
    plugins: ['jest', 'testing-library'],
    overrides: [
        {
            files: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)'],
            extends: ['plugin:jest/recommended', 'plugin:jest/style', 'plugin:testing-library/react'],
        },
    ],
};
