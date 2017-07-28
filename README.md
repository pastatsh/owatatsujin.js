# owatatsujin.js

## ローカルでテストする

1. このリポジトリを Fork または Clone する
2. ディレクトリに移動
3. `bgm.mp3` と `data.txt` を用意して、 `index.html` と同じ階層に置く
4. `npm install`
5. `npm start`
6. http://localhost:8080/ を開くとテストできる

ホットリロードに対応しているので、`src/`フォルダの js などを書き換えると自動でページが更新されます

## ビルドする

4. まで同じ
5. `npm run build`
6. `dist/` に js が生成される
