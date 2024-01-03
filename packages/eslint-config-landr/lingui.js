module.exports = {
    extends: [],
    plugins: ['lingui'],
    rules: {
        'lingui/t-call-in-function': 'error',
        'lingui/no-expression-in-message': 'warn',
        'lingui/no-single-tag-to-translate': 'warn',
        'lingui/no-trans-inside-trans': 'warn',
    },
};
