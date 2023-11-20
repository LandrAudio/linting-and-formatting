module.exports = {
    extends: [],
    plugins: ['lingui'],
    rules: {
        'no-restricted-imports': [
            'error',
            {
                paths: [
                    {
                        name: '@lingui/react',
                        importNames: ['Trans'],
                        message: 'Please import Trans from @lingui/macro instead.',
                    },
                ],
            },
        ],
        'lingui/t-call-in-function': 'error',
        'lingui/no-expression-in-message': 'warn',
        'lingui/no-single-tag-to-translate': 'warn',
        'lingui/no-trans-inside-trans': 'warn',
    },
};
