# Atelierウィジェット統合ガイド

このドキュメントでは、ECサイトにAtelierウィジェットを統合した実装について説明します。

## 📋 概要

Atelierウィジェットは、商品ページに3D試着機能を提供するウィジェットです。開発環境と本番環境で自動的に適切なURLが使用されるように実装されています。

## 🏗️ 実装構造

### コンポーネント構成

```
app/
├── components/
│   └── AtelierWidget.tsx          # ウィジェットコンポーネント
└── product/
    └── [id]/
        └── ProductPageContent.tsx  # 商品ページ（ウィジェットを配置）
```

### 主要ファイル

- **`app/components/AtelierWidget.tsx`**: ウィジェットの読み込みと表示を担当
- **`app/product/[id]/ProductPageContent.tsx`**: 商品ページにウィジェットを配置

## 🔧 実装の仕組み

### 1. 環境の自動判定

`process.env.NODE_ENV`を使用して、開発環境と本番環境を自動判定します。

```typescript
const isDevelopment = process.env.NODE_ENV === 'development';
```

### 2. URLの自動設定

環境に応じて、以下のURLが自動的に設定されます：

#### 開発環境（`npm run dev`実行時）

- **Widget URL**: `http://localhost:3001/widget.js`
- **API URL**: `http://localhost:3001`

#### 本番環境（ビルド・デプロイ時）

- **Widget URL**: `https://atelier-rho-red.vercel.app/widget.js`
- **API URL**: `https://atelier-rho-red.vercel.app`

### 3. URLの優先順位

以下の優先順位でURLが決定されます：

1. **コンポーネントのprops**（`widgetUrl`, `apiUrl`）
2. **環境変数**（`NEXT_PUBLIC_ATELIER_WIDGET_URL`, `NEXT_PUBLIC_ATELIER_API_URL`）
3. **デフォルト値**（環境に応じて自動選択）

```typescript
const finalWidgetUrl = widgetUrl || process.env.NEXT_PUBLIC_ATELIER_WIDGET_URL || defaultWidgetUrl;
const finalApiUrl = apiUrl || process.env.NEXT_PUBLIC_ATELIER_API_URL || defaultApiUrl;
```

## 📝 コードの詳細

### AtelierWidgetコンポーネント

```typescript
'use client';

import { useEffect, useRef } from 'react';

interface AtelierWidgetProps {
  productId: string;
  publicKey?: string;
  widgetUrl?: string;
  apiUrl?: string;
}
```

#### 主な機能

1. **スクリプトの動的読み込み**
   - `useEffect`でクライアント側でスクリプトを動的に読み込む
   - 重複読み込みを防止
   - `defer`と`async`属性を設定

2. **要素の配置**
   - ウィジェット要素の直後にスクリプトを挿入
   - ドキュメントの推奨順序に従う

3. **環境対応**
   - 開発環境と本番環境で自動的に適切なURLを使用

### 生成されるHTML

#### 開発環境

```html
<div 
  data-atelier-public-key="pub_live_030b64caa84e2995672163c125d600bd"
  data-atelier-external-product-id="g115651016134"
  data-atelier-api-url="http://localhost:3001">
</div>
<script defer async src="http://localhost:3001/widget.js"></script>
```

#### 本番環境

```html
<div 
  data-atelier-public-key="pub_live_030b64caa84e2995672163c125d600bd"
  data-atelier-external-product-id="g115651016134"
  data-atelier-api-url="https://atelier-rho-red.vercel.app">
</div>
<script defer async src="https://atelier-rho-red.vercel.app/widget.js"></script>
```

## 🎯 使用方法

### 基本的な使用

商品ページで`AtelierWidget`コンポーネントを使用します：

```tsx
<AtelierWidget productId={product.id} />
```

### カスタム設定

必要に応じて、propsでURLを上書きできます：

```tsx
<AtelierWidget 
  productId={product.id}
  widgetUrl="https://custom-domain.com/widget.js"
  apiUrl="https://custom-domain.com"
  publicKey="custom_public_key"
/>
```

## ⚙️ 環境変数の設定（オプション）

`.env.local`ファイルを作成して、設定を上書きできます：

```env
# 開発環境用（通常は不要、自動でlocalhost:3001が使われる）
NEXT_PUBLIC_ATELIER_WIDGET_URL=http://localhost:3001/widget.js
NEXT_PUBLIC_ATELIER_API_URL=http://localhost:3001

# 本番環境用（必要に応じて）
NEXT_PUBLIC_ATELIER_PUBLIC_KEY=pub_live_030b64caa84e2995672163c125d600bd
NEXT_PUBLIC_ATELIER_WIDGET_URL=https://atelier-rho-red.vercel.app/widget.js
NEXT_PUBLIC_ATELIER_API_URL=https://atelier-rho-red.vercel.app
```

## 📍 ウィジェットの配置場所

ウィジェットは商品ページの以下の位置に配置されています：

```
商品情報
  ↓
【Atelier 3D試着ウィジェット】← ここ
  ↓
バリエーション選択（色・サイズ）
  ↓
カートに追加ボタン
```

## ✅ 動作確認

### 開発環境

1. 開発サーバーを起動：
   ```bash
   npm run dev
   ```

2. 商品ページにアクセス：
   - 例: `http://localhost:3000/product/g115651016134`

3. ブラウザのコンソール（F12）で確認：
   - `[Atelier Widget] Found X widget element(s)` のログが表示される
   - エラーがないことを確認

### 本番環境

1. ビルド：
   ```bash
   npm run build
   ```

2. 起動：
   ```bash
   npm run start
   ```

3. または、Vercelなどにデプロイ

## 🔍 トラブルシューティング

### ウィジェットが表示されない

1. **ブラウザのコンソールを確認**
   - エラーメッセージを確認
   - `[Atelier Widget]` で始まるログを確認

2. **Public Keyが正しいか確認**
   - デフォルト: `pub_live_030b64caa84e2995672163c125d600bd`
   - 環境変数で上書き可能

3. **許可ドメインが設定されているか確認**
   - Atelier管理画面の設定で、ECサイトのドメインが許可ドメインに含まれているか確認
   - 開発環境: `localhost:3000`（ECサイト側）
   - 本番環境: デプロイ先のドメイン

4. **widget.jsが正しく読み込まれているか確認**
   - ブラウザの開発者ツールのNetworkタブで`widget.js`の読み込みを確認
   - ステータスコードが200であることを確認

### 3Dモデルが表示されない

1. **商品IDが一致しているか確認**
   - Atelier管理画面の商品の`external_product_id`と、ECサイトの商品IDが一致しているか確認
   - 埋め込みコードの`data-atelier-external-product-id`が正しいか確認

2. **アセットがアップロードされているか確認**
   - 商品詳細ページでアセットを確認
   - GLBファイルまたはFBXファイルが正しくアップロードされているか確認

### CORSエラーが発生する

1. **許可ドメインを確認**
   - 設定ページで許可ドメインにECサイトのドメインが含まれているか確認
   - サブドメインも許可されているか確認

2. **API URLを確認**
   - `data-atelier-api-url`が正しく設定されているか確認

## 📊 商品ID一覧

現在のECサイトの商品ID：

| 商品ID | 商品名 | カテゴリ |
|--------|--------|----------|
| `g115651016134` | DOUBLE JACKET (BLACK) | アウター |
| `g115651016164` | DOUBLE JACKET (BEIGE) | アウター |
| `g115253154287` | TAILORED JACKET (BROWN) | アウター |
| `g115200229003` | OXFORD SHIRT (BROWN) | トップス |
| `g115223214104` | STRIPE SHIRT (STRIPE) | トップス |
| `g115540553736` | WOOL PANTS (BLACK) | パンツ |
| `g115540554166` | WOOL PANTS (WHITE) | パンツ |
| `g115250309163` | DENIM PANTS (BLUE) | パンツ |

## 🔗 関連リンク

- Atelier管理画面: `https://atelier-rho-red.vercel.app`（本番環境）
- Widget CDN: `https://atelier-rho-red.vercel.app/widget.js`（本番環境）

## 📝 注意事項

1. **商品IDの対応付け**
   - Atelier管理画面で商品を登録する際、`external_product_id`をECサイトの商品IDと一致させる必要があります

2. **許可ドメイン**
   - Atelier管理画面の設定で、ECサイトのドメインが許可ドメインに含まれている必要があります

3. **3Dアセット**
   - 商品に3Dモデルがアップロードされている場合のみ、3D表示が可能です

4. **スクリプトの読み込み順序**
   - ウィジェット要素の後にスクリプトが配置されるように実装されています
   - `defer`と`async`属性が設定されています

## 🚀 今後の改善点

- [ ] エラーハンドリングの強化
- [ ] ローディング状態の表示
- [ ] ウィジェットの表示/非表示の制御
- [ ] 複数商品ページでのパフォーマンス最適化
