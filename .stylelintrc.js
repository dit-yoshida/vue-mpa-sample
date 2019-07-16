module.exports = {
  "extends": [
    "stylelint-config-standard",
    "stylelint-config-recommended-scss"
  ],
  "plugins": ["stylelint-scss"],
  "rurles": {
    //@mixinや@functionを使えるようにCSSルールから、SCSSルールに切り替える
    "at-rule-no-unknown": false,
    "scss/at-rule-no-unknows": true,
    //0のとき単位なし
    "number-zero-length-no-unit": true,
    //indent2文字
    "indentation": 2,
    //文字列をダブルクォートくくり
    "string-quotes": "double",
    //コロン直後にスペース
    "declaration-colon-space-after": true,
    //開き括弧の直前の改行不可
    "block-opening-brace-newline-before": false,
    //開き括弧の直前にスペース可
    "block-opening-brace-space-before": true,
    //セミコロンの直後のスペース可
    "declaration-block-semicolon-space-after":true,
    "declaration-block-trailing-semicolon": "always"
  }
}