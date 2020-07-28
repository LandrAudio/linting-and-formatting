module.exports = {
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true,
        },
    },
    plugins: ['import'],
    extends: ['eslint:recommended', 'plugin:prettier/recommended'],
    rules: {
        eqeqeq: 'error',
        'array-callback-return': 'error',
        'new-cap': [
            'error',
            {
                capIsNewExceptions: [
                    'Selector', // Imported from testcafe
                    'WhenUserReady', // Decorator
                ],
            },
        ],
        strict: ['error', 'global'],
        'no-undef': 'error',
        'spaced-comment': [
            'error',
            'always',
            {
                block: {
                    exceptions: ['*'],
                    balanced: true,
                },
            },
        ],
        curly: 'error',
        'eol-last': 'error',
        'guard-for-in': 'error',
        'no-labels': 'error',
        'no-caller': 'error',
        'no-bitwise': 'error',
        'no-console': ['error', { allow: ['debug', 'info', 'time', 'timeEnd', 'trace'] }],
        'no-new-wrappers': 'error',
        'no-debugger': 'error',
        'no-eval': 'error',
        'no-redeclare': 'error',
        'no-fallthrough': 'error',
        'no-return-await': 'error',
        'no-trailing-spaces': 'error',
        'no-var': 'error',
        'brace-style': 'error',
        'prefer-template': 'error',
        radix: 'error',
        'space-before-blocks': 'error',
        'prefer-destructuring': [
            'error',
            {
                array: false,
                object: true,
            },
            {
                enforceForRenamedProperties: false,
            },
        ],
        'import/order': ['error', { 'newlines-between': 'never' }],
    },
    env: {
        browser: true,
        node: true,
        es6: true,
    },
    overrides: [
        {
            files: ['**/*.{ts,tsx}'],
            parser: '@typescript-eslint/parser',
            extends: [
                'eslint:recommended',
                'plugin:@typescript-eslint/eslint-recommended',
                'plugin:@typescript-eslint/recommended',
                'prettier/@typescript-eslint',
            ],
            plugins: ['@typescript-eslint'],
            rules: {
                'no-undef': 'off', // this rule returns false-positives with typescript files
                '@typescript-eslint/camelcase': [
                    'error',
                    {
                        allow: [
                            'utm_campaign',
                            'utm_content',
                            'utm_medium',
                            'utm_source',
                            'utm_term',
                            'utm_invalid',
                            'content_name',
                            'content_category',
                            'api_plan',
                        ],
                    },
                ],
                '@typescript-eslint/class-name-casing': 'error',
                '@typescript-eslint/no-inferrable-types': 'error',
                '@typescript-eslint/type-annotation-spacing': 'error',
                '@typescript-eslint/no-use-before-define': 'error',
                '@typescript-eslint/no-unused-vars': [
                    'error',
                    {
                        args: 'none',
                        ignoreRestSiblings: true,
                    },
                ],
            },
        },
    ],
};
