## dist ディレクトリ構想

```
dist/
├── assets
│   ├── fonts
│   ├── images
│   │   ├── icons
│   │   └── logos
├── favicon.ico
├── [page name].html
├── [page name].js
└── vendor.js
```

### 詳細

| 1 | 2 | 3 | 概要 |
| --- | --- | --- | --- |
| assets |  |  | 静的ファイル系を出力 |
|  | fonts |  | フォント系 |
|  | images |  | 画像系 |
|  |  | icons | アイコン群 |
|  |  | logos | ロゴ群 |
| favicon.ico |  |  | ページの共通 favicon.ico |
| [page name].html |  |  | 各ページの html<br>1ページ1htmlファイル<br>vendor.js と 各ページ js をロードする |
| [page name].js |  |  | 各ページの js<br>1ページ1jsファイル<br>ページ用処理と、各コンポーネントのコードが含まれる |
| vendor.js |  |  | 共通モジュール系の js<br>Vue や lodash などを含む<br>各ページからロードされる |
