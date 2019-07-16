module.exports = {
  root: true,
  env:{
    browser: true
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/recommended'
  ],
  plugins: [
    'vue'
  ],
  rules: {
    //[off, 0]はルールを無効、[warn, 1]はルール違反時に警告を表示する、[error, 2]はルール違反時にエラーを表示する
    //ジェネレーター関数の中の * の周りのスペースを強制する
    // 'generator-star-spacing': 'off',
    // //debuggerの使用をしないよう強制する
    // 'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    // //アロー関数の引数でequire括弧、アロー関数の括弧の一貫した使用を強制する
    // 'arrow-parens': 0,
    // //debuggerの使用をしないよう強制する
    // 'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    //未定義の変数を使っていないかのチェック
    "no-undef": 2,
    // 無駄なスペースは削除
    "no-multi-spaces": 2,
    // 不要な空白行は削除。2行開けてたらエラー
    "no-multiple-empty-lines": [2, {"max": 1}],
    // セミコロンは禁止
    "semi": [2, "never"],
    // 文字列はダブルルクオートのみ
    "quotes": [2, "double"],
    // varは禁止
    "no-var": 2,
    // jsのインデントは２
    "indent": [2, 2],
    // コンソールは許可
    "no-console": 0,
    // キー
    "key-spacing": 2,
  }
}