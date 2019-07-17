## ソースディレクトリ構造

```
src/
├── assets
│   ├── fonts
│   ├── images
│   │   ├── icons
│   │   └── logos
│   └── styles
├── components
│   ├── Common
│   │   ├── Heading
│   │   │   ├── index.vue
│   │   │   ├── Aaa
│   │   │   └── ...
│   │   ├── Bbb
│   │   └── ...
│   └── Pages
│       ├── Login
│       │   ├── index.vue
│       │   ├── Aaa
│       │   └── ...
│       ├── Top
│       └── ...
├── pages
│   ├── login
│   │   ├── index.html
│   │   └── index.js
│   ├── top
│   │   ├── index.html
│   │   └── index.js
│   └── ...
├── stores
│   ├── login
│   ├── top
│   └── ...
└── utils
    └── helper
        └── ...
```

### 詳細

| 1 | 2 | 3 | 概要 |
| --- | --- | --- | --- |
| assets |  |  | 静的ファイル系を配置 |
|  | fonts |  | フォント系 |
|  | images |  | 画像系 |
|  |  | icons | アイコン群 |
|  |  | logos | ロゴ群 |
|  | styles |  | 共通スタイル群 |
| components |  |  | 画面以下の Vue コンポーネント系を配置 |
|  | Common |  | 共通で使用するコンポーネントを配置<br>1コンポーネント1ディレクトリ<br>子コンポーネントに分割する場合は以下にディレクトリを掘っていく |
|  | Pages |  | 画面で使用するコンポーネントを配置<br>1コンポーネント1ディレクトリ<br>子コンポーネントに分割する場合は以下にディレクトリを掘っていく |
| pages |  |  | 画面毎の html, js を配置<br>1画面1ディレクトリ |
| stores |  |  | 画面毎の vuex store を配置<br>1画面1ファイル |
| utils |  |  | 共通関数系を配置