module.exports = {
  root: true,
  env: {
    browser: true
  },
  extends: [
    'plugin:vue/essential',
    'eslint:recommended',
    'plugin:prettier/recommended'
  ],
  plugins: [
    'vue',
    'prettier'
  ],
  rules: {
    //[off, 0]はルールを無効、[warn, 1]はルール違反時に警告を表示する、[error, 2]はルール違反時にエラーを表示する
    //ジェネレーター関数の中の * の周りのスペースを強制する
    'generator-star-spacing': 'off',
    //debuggerの使用をしないよう強制する
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    //アロー関数の引数でequire括弧、アロー関数の括弧の一貫した使用を強制する
    'arrow-parens': 0,
    //ブロックスコープ内では１度の宣言で必要なショートバンドで記載する
    'one-var': 0,
    //debuggerの使用をしないよう強制する
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    //インデントを2つに揃えることを強制する、HTMLのように4つに揃えたい時は ["error", 2]と記載する
    "vue/html-indent": ["error", 2],
    "no-undef": 'off'
  }
}