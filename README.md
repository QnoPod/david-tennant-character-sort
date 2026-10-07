# David Tennant Character Sort — Prototype

単独サイト用の試作版です。

## できること
- 4キャラずつ表示
- その中から好きな2人を選択
- 「知らない」キャラを除外
- ラウンドごとに候補を絞り込み
- 最後にTOP9を3×3で表示
- テーマ切替
  - 一番好き
  - 付き合いたい
  - 顔が好き
  - 危険だけど惹かれる

## 画像の入れ方
`images/` フォルダに、`app.js` に書かれているファイル名で画像を置いてください。

例:
- `images/alec-hardy.jpg`
- `images/crowley.jpg`
- `images/richard-ii.jpg`

画像が無い場合は、キャラクター名の頭文字が表示されます。

## キャラクター追加
`app.js` の先頭にある `characters` 配列に追加します。

```js
{
  name: "Alec Hardy",
  work: "Broadchurch",
  image: "images/alec-hardy.jpg"
}
```

## 起動
`index.html` をブラウザで開くだけで動きます。

GitHub Pages / Netlify / Vercel にそのまま置くこともできます。

## 次に追加すると良いもの
- TOP9を画像として保存
- X共有
- 全キャラ一覧・検索
- TV / 映画 / 舞台で絞り込み
- 作品ごとに「未視聴」をまとめて除外
- 100キャラ以上でも偏りにくい順位計算
