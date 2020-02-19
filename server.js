module.exports = {
  "root": true,
  "env": {
    "es6": true,
    "node": true
  },
  "extends": [
    "plugin:@typescript-eslint/recommended",
    "airbnb-base"
  ],
  "plugins": [
    "@typescript-eslint",
    "mocha"
  ],
  "rules": {
    "indent": [2, 2, {"SwitchCase": 1}],
    "max-len": ["error", { "code": 150 }],
    "no-unused-vars": 0,
    "no-underscore-dangle": 0,
    "no-console": "error",
    "consistent-return": 0,
    "func-names": 0,
    "no-unused-expressions": 0,
    "no-use-before-define": 0,
    "radix": 0,
    "import/first": 0,
    "linebreak-style": 0,
    "no-param-reassign": 0,
    "arrow-parens": 0,
    "no-return-await": 0,
    "prefer-destructuring": 0,
    "no-plusplus": 0,
    "camelcase": 0,
    "semi": ["error", "never", { "beforeStatementContinuationChars": "always"}],
    "strict": "off",
    "prefer-const": "off",
    "import/no-extraneous-dependencies": "off",
    "import/prefer-default-export": "off",
    "no-await-in-loop": "off",
    "@typescript-eslint/indent": "off",
    "@typescript-eslint/camelcase": "off",
    "@typescript-eslint/no-empty-interface": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/no-unused-vars": "off",
    "@typescript-eslint/no-use-before-define": "off",
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        "js": "never",
        "jsx": "never",
        "ts": "never",
        "tsx": "never"
      }
    ]
  },
  "globals":  {
    "_": true,
    "describe": true,
    "it": true,
    "before": true,
    "after": true
  },

  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaVersion": 8,
    "ecmaFeatures": {
      "experimentalObjectRestSpread": true
    },
    "sourceType": "module",
    "project": "./tsconfig.json"
  },
  "settings": {
    "import/resolver": {
      "node": {
        "extensions": [
          ".js",
          ".ts",
          ".sql"
        ]
      },
      "babel-module": {
        "extensions": [".js", ".ts", ".tsx", ".d.ts", ".sql"],
        "alias": {
          "@models/*": "./models/*"
        }
      }
    }
  }

}
