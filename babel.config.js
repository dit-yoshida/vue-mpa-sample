module.exports = function(api){
  api.cache(true);

  const presets = [
    [
      //プリセットに@babel/preset-env を指定する
      '@babel/preset-env',
      {
        //サポートするブラウザ、この設定に応じて必要なpolyfillのみがimportされる
        targets:{
          ie:'11'
        },
        //必要なpolyfillのみをimportさせたい場合、'usage'を指定する
        useBuiltIns: 'usage',
        //polyfillを利用する core-js のバージョンを指定する(指定しないとバージョン２が利用され警告が出力される)
        corejs:3,
        //Stage 4 未満のプロボーザルのpolyfillもimportされる
        // corejs:{ version: 3, proposals: true },
        //trueにすると利用しているポリフィルなどの情報が出力される
        //polyfillがimportされているかどうかを確認するためのものなので必須ではない
        debug:true
      }
    ]
  ];
  return{
    presets
  };
};