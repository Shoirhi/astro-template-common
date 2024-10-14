Astroを使ったWebサイトのレイアウトテンプレート。

## サンプルサイト
[https://astro-template-layout.pages.dev/](https://astro-template-layout.pages.dev/)

## 要件
- Astro
- React
- Tailwind CSS
- shadcn/ui
- React Icons

## 機能
- 基本レイアウト（Base Layout）
- SEO
- OGP
- Twitter Card
- サイトマップ
- robots.txt
- RSS
- View Transition
- ビューポートが375px未満での表示倍率の縮小（Adjust Viewport）
- スムーススクロール
- Cloudflare Pagesへのデプロイ

## OGPの設定について
以下のサイトを参照する。
[https://ogp.me/](https://ogp.me/)

### OGP画像の大きさ
横1200px縦630pxのJPEGもしくはPNGで作成する。

## Faviconの生成について
以下のサイトでFavicon画像を生成する。
[https://realfavicongenerator.net/](https://realfavicongenerator.net/)

## 本番環境デプロイ時の注意
環境変数`NODE_ENV`に`production`を追加すること。

## 設定ファイルについて
`/src/config.ts`が設定ファイルとなっている。