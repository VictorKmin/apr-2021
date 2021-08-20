module.exports = {
    env: {
        es6: true,
        node: true
    },
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module'
    },
    extends: [
        'eslint:recommended'
    ],
    rules: {
    // "array-bracket-newline": ["error", { "minItems": 2 }],
    // "array-element-newline": ["error", { "minItems": 2 }],
    // "arrow-body-style": "error",
        'block-scoped-var': 'error',
        'comma-dangle': ['error', 'never'],
        complexity: 'error',
        'constructor-super': 'error',
        curly: 'error',
        'default-case': 'off',
        'dot-notation': 'error',
        'eol-last': 'error',
        eqeqeq: 'error',
        'guard-for-in': 'error',
        indent: ['error', 4, {SwitchCase: 1}],
        'max-classes-per-file': 'off',
        'max-len': ['error', {code: 140}],
        // "newline-per-chained-call": "error",
        'new-parens': 'error',
        'newline-before-return': 'error',
        'no-alert': 'error',
        'no-bitwise': 'error',
        'no-caller': 'error',
        'no-case-declarations': 'off',
        'no-cond-assign': 'error',
        'no-console': 'off',
        'no-else-return': 'error',
        'no-empty': 'off',
        'no-empty-functions': 'off',
        'no-eval': 'error',
        'no-extend-native': 'error',
        'no-extra-bind': 'error',
        'no-fallthrough': 'error',
        'no-floating-decimal': 'error',
        'no-implicit-globals': 'error',
        'no-implied-eval': 'error',
        'no-invalid-this': 'off',
        'no-iterator': 'error',
        'no-labels': 'error',
        'no-lone-blocks': 'error',
        'no-loop-func': 'error',
        // "no-magic-numbers": ["error", {"ignoreArrayIndexes": true}],
        'no-multi-spaces': 'error',
        'no-multi-str': 'error',
        'no-multiple-empty-lines': ['error', {max: 1, maxEOF: 1}],
        'no-new': 'error',
        'no-new-func': 'error',
        'no-new-wrappers': 'error',
        'no-octal-escape': 'error',
        // "no-param-reassign": "error",
        'no-proto': 'error',
        'no-return-assign': 'error',
        'no-return-await': 'error',
        'no-script-url': 'error',
        'no-self-compare': 'error',
        'no-sequences': 'error',
        'no-throw-literal': 'error',
        'no-trailing-spaces': 'error',
        'no-undef-init': 'error',
        'no-unsafe-finally': 'error',
        'no-unused-expressions': 'error',
        // "no-unused-vars": "error",
        'no-use-before-define': 'error',
        'no-useless-call': 'error',
        'no-useless-concat': 'error',
        'no-useless-return': 'error',
        'no-var': 'error',
        'no-void': 'error',
        'object-shorthand': 'error',
        'one-var': ['error', 'never'],
        'padding-line-between-statements': 'error',
        'prefer-arrow-callback': 'error',
        'prefer-const': 'error',
        'quote-props': [
            'error',
            'as-needed'
        ],
        quotes: ['error', 'single', {allowTemplateLiterals: true}],
        radix: 'error',
        'require-atomic-updates': 'off',
        'require-await': 'error',
        semi: ['error', 'always'],
        'sort-imports': [
            'error',
            {
                ignoreCase: true,
                ignoreDeclarationSort: true,
                ignoreMemberSort: false
            }
        ],
        'keyword-spacing': [
            'error',
            {
                overrides: {
                    if: {after: true},
                    for: {after: true},
                    while: {after: true}
                }
            }
        ],
        'space-before-function-paren': [
            'error',
            {
                anonymous: 'never',
                asyncArrow: 'always',
                named: 'never'
            }
        ],
        'use-isnan': 'error',
        'wrap-iife': 'error',
        yoda: 'error'
    }
};
