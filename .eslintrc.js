module.exports = {
  root: true,
  env: {
    node: true,
    es2021: true,
    browser: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:prettier/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:import/recommended",
    "plugin:import/typescript",
    "plugin:import/errors",
    "plugin:import/warnings",
  ],
  parser: "@typescript-eslint/parser",
  plugins: ["prettier", "@typescript-eslint", "import"],
  rules: {
    "prettier/prettier": ["error", { endOfLine: "auto" }],
    "import/order": [
      "error",
      {
        groups: [
          "builtin",
          "external",
          "internal",
          "parent",
          "sibling",
          "index",
        ],
        "newlines-between": "always", // 그룹 간에 줄 바꿈을 항상 추가
      },
    ],
    "import/no-unresolved": "error", // import 시 모듈을 찾을 수 없는 경우 오류로 처리
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-unused-vars": "off",
    "@typescript-eslint/no-empty-object-type": "off",
    "@typescript-eslint/ban-ts-comment": "off",
  },
  settings: {
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx"],
    },
    "import/resolver": {
      typescript: {
        alwaysTryTypes: true,
        project: "./tsconfig.json",
      },
    },
  },
};
