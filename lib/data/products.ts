import { Product } from '../types';

// 商品データ（1画像1商品）
export const products: Product[] = [
  {
    id: 'g1771040664',
    title: 'RETHER JACKET',
    brand: 'Atelier',
    price: '￥82,000',
    image: '/clothes/rether_jacket.jpg',
    href: '/product/g1771040664',
    categoryId: 'outer',
    categoryName: 'アウター',
    images: [
      '/clothes/rether_jacket.jpg',
    ],
    colors: [
      {
        name: 'BLACK',
        image: '/clothes/rether_jacket.jpg',
        sizes: [
          { size: 'M', inStock: true, productId: 'g1771040664' },
          { size: 'L', inStock: true, productId: 'g1771040664' },
        ],
      },
    ],
    description: `
      <b>デザイン</b><br>
      ブラックカラーのレザージャケット。クラシックなデザインに現代的なテイストを加えたジャケットです。<br>
      上質なレザー素材で、耐久性とスタイリッシュなシルエットを両立しています。<br>
      <br>
      <b>特徴</b><br>
      • ブラックのモノトーンカラー<br>
      • レザー素材で高級感のある仕上がり<br>
      • クラシックなデザインで長く愛用可能
    `,
    sizeTable: {
      headers: ['サイズ', '着丈', '肩幅', '身幅', '袖丈'],
      rows: [
        { size: 'M', measurements: ['75', '47', '55', '62'] },
        { size: 'L', measurements: ['77', '49', '57', '63'] },
      ],
    },
    details: {
      material: 'レザー',
      origin: '日本',
      care: 'ドライクリーニング',
      code: '1771040664',
    },
    isNew: true,
  },
  {
    id: 'g1770489191',
    title: 'MODS COAT',
    brand: 'Atelier',
    price: '￥95,000',
    image: '/clothes/moz_coat.jpg',
    href: '/product/g1770489191',
    categoryId: 'outer',
    categoryName: 'アウター',
    images: [
      '/clothes/moz_coat.jpg',
    ],
    colors: [
      {
        name: 'NAVY',
        image: '/clothes/moz_coat.jpg',
        sizes: [
          { size: 'M', inStock: true, productId: 'g1770489191' },
          { size: 'L', inStock: true, productId: 'g1770489191' },
        ],
      },
    ],
    description: `
      <b>デザイン</b><br>
      ネイビーカラーのモッズコート。クラシックなモッズスタイルを現代的な解釈で表現したコートです。<br>
      ウール混紡素材で、保温性とスタイリッシュなシルエットを両立しています。<br>
      <br>
      <b>特徴</b><br>
      • ネイビーの上品なカラーリング<br>
      • モッズスタイルのクラシックなデザイン<br>
      • ウール混紡で快適な着心地
    `,
    sizeTable: {
      headers: ['サイズ', '着丈', '肩幅', '身幅', '袖丈'],
      rows: [
        { size: 'M', measurements: ['85', '50', '60', '65'] },
        { size: 'L', measurements: ['87', '52', '62', '66'] },
      ],
    },
    details: {
      material: 'ウール混紡',
      origin: '日本',
      care: 'ドライクリーニング',
      code: '1770489191',
    },
    isNew: true,
  },
  {
    id: 'g115651016134',
    title: 'DOUBLE JACKET',
    brand: 'Atelier',
    price: '￥89,000',
    image: '/clothes/double_jacket_black.png',
    href: '/product/g115651016134',
    categoryId: 'outer',
    categoryName: 'アウター',
    images: [
      '/clothes/double_jacket_black.png',
    ],
    colors: [
      {
        name: 'BLACK',
        image: '/clothes/double_jacket_black.png',
        sizes: [
          { size: 'M', inStock: true, productId: 'g115651016134' },
          { size: 'L', inStock: true, productId: 'g115651016134' },
        ],
      },
    ],
    description: `
      <b>デザイン</b><br>
      ブラックカラーのダブルジャケット。シンプルで機能的なデザインが特徴です。<br>
      季節を問わず着用できる素材を使用し、レイヤードスタイルにも最適です。<br>
      <br>
      <b>特徴</b><br>
      • ブラックのモノトーンカラー<br>
      • ダブル仕様でスタイリッシュに<br>
      • 通年着用可能な素材
    `,
    sizeTable: {
      headers: ['サイズ', '着丈', '肩幅', '身幅', '袖丈'],
      rows: [
        { size: 'M', measurements: ['78', '48', '56', '63'] },
        { size: 'L', measurements: ['80', '50', '58', '64'] },
      ],
    },
    details: {
      material: 'ウール100%',
      origin: '日本',
      care: 'ドライクリーニング',
      code: '115651016134',
    },
    isNew: false,
  },
  {
    id: 'g115651016164',
    title: 'DOUBLE JACKET',
    brand: 'Atelier',
    price: '￥85,000',
    image: '/clothes/double_jacket.png',
    href: '/product/g115651016164',
    categoryId: 'outer',
    categoryName: 'アウター',
    images: [
      '/clothes/double_jacket.png',
    ],
    colors: [
      {
        name: 'BEIGE',
        image: '/clothes/double_jacket.png',
        sizes: [
          { size: 'M', inStock: true, productId: 'g115651016164' },
          { size: 'L', inStock: true, productId: 'g115651016164' },
        ],
      },
    ],
    description: `
      <b>デザイン</b><br>
      ベージュカラーのダブルジャケット。シンプルで機能的なデザインが特徴です。<br>
      季節を問わず着用できる素材を使用し、レイヤードスタイルにも最適です。<br>
      <br>
      <b>特徴</b><br>
      • ベージュの落ち着いたカラーリング<br>
      • ダブル仕様でスタイリッシュに<br>
      • 通年着用可能な素材
    `,
    sizeTable: {
      headers: ['サイズ', '着丈', '肩幅', '身幅', '袖丈'],
      rows: [
        { size: 'M', measurements: ['75', '46', '54', '61'] },
        { size: 'L', measurements: ['77', '48', '56', '62'] },
      ],
    },
    details: {
      material: 'コットン100%',
      origin: '日本',
      care: '洗濯可',
      code: '115651016164',
    },
    isNew: false,
  },
  {
    id: 'g115253154287',
    title: 'TAILORED JACKET',
    brand: 'Atelier',
    price: '￥78,000',
    image: '/clothes/jacket_brown.png',
    href: '/product/g115253154287',
    categoryId: 'outer',
    categoryName: 'アウター',
    images: [
      '/clothes/jacket_brown.png',
    ],
    colors: [
      {
        name: 'BROWN',
        image: '/clothes/jacket_brown.png',
        sizes: [
          { size: 'M', inStock: true, productId: 'g115253154287' },
          { size: 'L', inStock: true, productId: 'g115253154287' },
        ],
      },
    ],
    description: `
      <b>デザイン</b><br>
      ブラウンカラーのテーラードジャケット。クラシックなシルエットに現代的なテイストを加えたデザインです。<br>
      ウール混紡素材で、しなやかな着心地と適度な保温性を実現しています。<br>
      <br>
      <b>特徴</b><br>
      • ブラウンの上品なカラーリング<br>
      • テーラードカットでスタイリッシュに<br>
      • ウール混紡で快適な着心地
    `,
    sizeTable: {
      headers: ['サイズ', '着丈', '肩幅', '身幅', '袖丈'],
      rows: [
        { size: 'M', measurements: ['72', '44', '52', '59'] },
        { size: 'L', measurements: ['74', '46', '54', '60'] },
      ],
    },
    details: {
      material: 'ウール混紡',
      origin: '日本',
      care: 'ドライクリーニング',
      code: '115253154287',
    },
    isNew: true,
  },
  {
    id: 'g115200229003',
    title: 'OXFORD SHIRT',
    brand: 'Atelier',
    price: '￥18,000',
    image: '/clothes/shirt_brown.png',
    href: '/product/g115200229003',
    categoryId: 'tops',
    categoryName: 'トップス',
    images: [
      '/clothes/shirt_brown.png',
    ],
    colors: [
      {
        name: 'BROWN',
        image: '/clothes/shirt_brown.png',
        sizes: [
          { size: 'M', inStock: true, productId: 'g115200229003' },
          { size: 'L', inStock: true, productId: 'g115200229003' },
        ],
      },
    ],
    description: `
      <b>デザイン</b><br>
      ブラウンカラーのオックスフォードシャツ。クラシックなオックスフォード織りの質感が特徴です。<br>
      上質なコットン100%素材で、通気性と吸湿性に優れ、快適な着心地を実現しています。<br>
      <br>
      <b>特徴</b><br>
      • オックスフォード織りの質感<br>
      • コットン100%の自然素材<br>
      • ブラウンの落ち着いたカラー
    `,
    sizeTable: {
      headers: ['サイズ', '着丈', '肩幅', '身幅', '袖丈'],
      rows: [
        { size: 'M', measurements: ['70', '42', '50', '58'] },
        { size: 'L', measurements: ['72', '44', '52', '59'] },
      ],
    },
    details: {
      material: 'コットン100%',
      origin: '日本',
      care: '洗濯可',
      code: '115200229003',
    },
    isNew: true,
  },
  {
    id: 'g115223214104',
    title: 'STRIPE SHIRT',
    brand: 'Atelier',
    price: '￥22,000',
    image: '/clothes/shirt_stripe.png',
    href: '/product/g115223214104',
    categoryId: 'tops',
    categoryName: 'トップス',
    images: [
      '/clothes/shirt_stripe.png',
    ],
    colors: [
      {
        name: 'STRIPE',
        image: '/clothes/shirt_stripe.png',
        sizes: [
          { size: 'M', inStock: true, productId: 'g115223214104' },
          { size: 'L', inStock: true, productId: 'g115223214104' },
        ],
      },
    ],
    description: `
      <b>デザイン</b><br>
      ストライプパターンのシャツ。クラシックなストライプデザインがアクセントになります。<br>
      コットン100%素材で、カジュアルからビジネスカジュアルまで幅広く着用できます。<br>
      <br>
      <b>特徴</b><br>
      • ストライプパターンでスタイリッシュに<br>
      • コットン100%の快適な素材<br>
      • カジュアルからビジネスまで対応
    `,
    sizeTable: {
      headers: ['サイズ', '着丈', '肩幅', '身幅', '袖丈'],
      rows: [
        { size: 'M', measurements: ['70', '42', '50', '58'] },
        { size: 'L', measurements: ['72', '44', '52', '59'] },
      ],
    },
    details: {
      material: 'コットン100%',
      origin: '日本',
      care: '洗濯可',
      code: '115223214104',
    },
    isNew: true,
  },
  {
    id: 'g115540553736',
    title: 'WOOL PANTS',
    brand: 'Atelier',
    price: '￥38,000',
    image: '/clothes/wool_pants_black.png',
    href: '/product/g115540553736',
    categoryId: 'pants',
    categoryName: 'パンツ',
    images: [
      '/clothes/wool_pants_black.png',
    ],
    colors: [
      {
        name: 'BLACK',
        image: '/clothes/wool_pants_black.png',
        sizes: [
          { size: 'M', inStock: true, productId: 'g115540553736' },
          { size: 'L', inStock: true, productId: 'g115540553736' },
        ],
      },
    ],
    description: `
      <b>デザイン</b><br>
      ブラックカラーのウールパンツ。ストレートシルエットで、スーツスタイルからカジュアルまで幅広くコーディネートできます。<br>
      ウール100%の高品質素材で、保温性と通気性に優れ、一年を通して快適に着用いただけます。<br>
      <br>
      <b>特徴</b><br>
      • ブラックのモノトーンカラー<br>
      • ウール100%の高品質素材<br>
      • ストレートシルエットでスタイリッシュに
    `,
    sizeTable: {
      headers: ['サイズ', 'ウエスト', '股上', '股下', '裾幅'],
      rows: [
        { size: 'M', measurements: ['76', '30', '90', '22'] },
        { size: 'L', measurements: ['80', '32', '92', '23'] },
      ],
    },
    details: {
      material: 'ウール100%',
      origin: '日本',
      care: 'ドライクリーニング',
      code: '115540553736',
    },
    isNew: true,
  },
  {
    id: 'g115540554166',
    title: 'WOOL PANTS',
    brand: 'Atelier',
    price: '￥38,000',
    image: '/clothes/wool_pants_white.png',
    href: '/product/g115540554166',
    categoryId: 'pants',
    categoryName: 'パンツ',
    images: [
      '/clothes/wool_pants_white.png',
    ],
    colors: [
      {
        name: 'WHITE',
        image: '/clothes/wool_pants_white.png',
        sizes: [
          { size: 'M', inStock: true, productId: 'g115540554166' },
          { size: 'L', inStock: true, productId: 'g115540554166' },
        ],
      },
    ],
    description: `
      <b>デザイン</b><br>
      ホワイトカラーのウールパンツ。ストレートシルエットで、クリーンでモダンな印象を与えます。<br>
      ウール100%の高品質素材で、保温性と通気性に優れ、一年を通して快適に着用いただけます。<br>
      <br>
      <b>特徴</b><br>
      • ホワイトのクリーンなカラー<br>
      • ウール100%の高品質素材<br>
      • ストレートシルエットでスタイリッシュに
    `,
    sizeTable: {
      headers: ['サイズ', 'ウエスト', '股上', '股下', '裾幅'],
      rows: [
        { size: 'M', measurements: ['76', '30', '90', '22'] },
        { size: 'L', measurements: ['80', '32', '92', '23'] },
      ],
    },
    details: {
      material: 'ウール100%',
      origin: '日本',
      care: 'ドライクリーニング',
      code: '115540554166',
    },
    isNew: true,
  },
  {
    id: 'g115250309163',
    title: 'DENIM PANTS',
    brand: 'Atelier',
    price: '￥32,000',
    image: '/clothes/denim_pants.png',
    href: '/product/g115250309163',
    categoryId: 'pants',
    categoryName: 'パンツ',
    images: [
      '/clothes/denim_pants.png',
    ],
    colors: [
      {
        name: 'BLUE',
        image: '/clothes/denim_pants.png',
        sizes: [
          { size: 'M', inStock: true, productId: 'g115250309163' },
          { size: 'L', inStock: true, productId: 'g115250309163' },
        ],
      },
    ],
    description: `
      <b>デザイン</b><br>
      クラシックなデニムパンツ。ストレートシルエットで、カジュアルスタイルに最適です。<br>
      上質なデニム素材を使用し、耐久性と快適な着心地を両立しています。<br>
      <br>
      <b>特徴</b><br>
      • クラシックなデニムブルー<br>
      • デニム100%の耐久性のある素材<br>
      • ストレートシルエットでカジュアルに
    `,
    sizeTable: {
      headers: ['サイズ', 'ウエスト', '股上', '股下', '裾幅'],
      rows: [
        { size: 'M', measurements: ['76', '30', '90', '22'] },
        { size: 'L', measurements: ['80', '32', '92', '23'] },
      ],
    },
    details: {
      material: 'デニム100%',
      origin: '日本',
      care: '洗濯可',
      code: '115250309163',
    },
    isNew: true,
  },
  {
    id: 'g177200100001',
    title: 'CARGO PANTS',
    brand: 'Atelier',
    price: '￥45,000',
    image: '/clothes/cargo_pants.png',
    href: '/product/g177200100001',
    categoryId: 'pants',
    categoryName: 'パンツ',
    images: [
      '/clothes/cargo_pants.png',
    ],
    colors: [
      {
        name: 'BLACK',
        image: '/clothes/cargo_pants.png',
        sizes: [
          { size: 'M', inStock: true, productId: 'g177200100001' },
          { size: 'L', inStock: true, productId: 'g177200100001' },
        ],
      },
    ],
    description: `
      <b>デザイン</b><br>
      ブラックカラーのカーゴパンツ。機能的なポケットデザインが特徴のカジュアルパンツです。<br>
      ストレッチ素材を使用し、動きやすさとスタイリッシュなシルエットを両立しています。<br>
      <br>
      <b>特徴</b><br>
      • ブラックのモノトーンカラー<br>
      • 機能的なカーゴポケット<br>
      • ストレッチ素材で快適な着心地
    `,
    sizeTable: {
      headers: ['サイズ', 'ウエスト', '股上', '股下', '裾幅'],
      rows: [
        { size: 'M', measurements: ['78', '32', '92', '24'] },
        { size: 'L', measurements: ['82', '34', '94', '25'] },
      ],
    },
    details: {
      material: 'コットン混紡',
      origin: '日本',
      care: '洗濯可',
      code: '177200100001',
    },
    isNew: true,
  },
  {
    id: 'g177200100002',
    title: 'LONG DOWN COAT',
    brand: 'Atelier',
    price: '￥128,000',
    image: '/clothes/long_down_coat.png',
    href: '/product/g177200100002',
    categoryId: 'outer',
    categoryName: 'アウター',
    images: [
      '/clothes/long_down_coat.png',
    ],
    colors: [
      {
        name: 'BLACK',
        image: '/clothes/long_down_coat.png',
        sizes: [
          { size: 'M', inStock: true, productId: 'g177200100002' },
          { size: 'L', inStock: true, productId: 'g177200100002' },
        ],
      },
    ],
    description: `
      <b>デザイン</b><br>
      ブラックカラーのロングダウンコート。防寒性に優れたロング丈のダウンコートです。<br>
      高品質なダウン素材を使用し、厳しい寒さにも対応できる保温性を実現しています。<br>
      <br>
      <b>特徴</b><br>
      • ブラックのモノトーンカラー<br>
      • ロング丈で防寒性抜群<br>
      • 高品質ダウン素材で快適な保温性
    `,
    sizeTable: {
      headers: ['サイズ', '着丈', '肩幅', '身幅', '袖丈'],
      rows: [
        { size: 'M', measurements: ['110', '52', '62', '68'] },
        { size: 'L', measurements: ['112', '54', '64', '69'] },
      ],
    },
    details: {
      material: 'ナイロン、ダウン',
      origin: '日本',
      care: '洗濯可',
      code: '177200100002',
    },
    isNew: true,
  },
  {
    id: 'g177200100003',
    title: 'CARDIGAN',
    brand: 'Atelier',
    price: '￥58,000',
    image: '/clothes/cardigan.png',
    href: '/product/g177200100003',
    categoryId: 'outer',
    categoryName: 'アウター',
    images: [
      '/clothes/cardigan.png',
    ],
    colors: [
      {
        name: 'GRAY',
        image: '/clothes/cardigan.png',
        sizes: [
          { size: 'M', inStock: true, productId: 'g177200100003' },
          { size: 'L', inStock: true, productId: 'g177200100003' },
        ],
      },
    ],
    description: `
      <b>デザイン</b><br>
      グレーカラーのカーディガン。クラシックなVネックデザインのカーディガンです。<br>
      ウール混紡素材で、保温性と通気性に優れ、季節の変わり目に最適です。<br>
      <br>
      <b>特徴</b><br>
      • グレーの落ち着いたカラーリング<br>
      • Vネックデザインでスタイリッシュに<br>
      • ウール混紡で快適な着心地
    `,
    sizeTable: {
      headers: ['サイズ', '着丈', '肩幅', '身幅', '袖丈'],
      rows: [
        { size: 'M', measurements: ['68', '46', '54', '60'] },
        { size: 'L', measurements: ['70', '48', '56', '61'] },
      ],
    },
    details: {
      material: 'ウール混紡',
      origin: '日本',
      care: 'ドライクリーニング',
      code: '177200100003',
    },
    isNew: true,
  },
  {
    id: 'g177200100004',
    title: 'SWEAT',
    brand: 'Atelier',
    price: '￥28,000',
    image: '/clothes/sweat.png',
    href: '/product/g177200100004',
    categoryId: 'tops',
    categoryName: 'トップス',
    images: [
      '/clothes/sweat.png',
    ],
    colors: [
      {
        name: 'BLACK',
        image: '/clothes/sweat.png',
        sizes: [
          { size: 'M', inStock: true, productId: 'g177200100004' },
          { size: 'L', inStock: true, productId: 'g177200100004' },
        ],
      },
    ],
    description: `
      <b>デザイン</b><br>
      ブラックカラーのスウェット。シンプルで着心地の良いスウェットシャツです。<br>
      コットン混紡素材で、柔らかく快適な着心地を実現しています。<br>
      <br>
      <b>特徴</b><br>
      • ブラックのモノトーンカラー<br>
      • コットン混紡で快適な着心地<br>
      • カジュアルスタイルに最適
    `,
    sizeTable: {
      headers: ['サイズ', '着丈', '肩幅', '身幅', '袖丈'],
      rows: [
        { size: 'M', measurements: ['68', '48', '56', '62'] },
        { size: 'L', measurements: ['70', '50', '58', '63'] },
      ],
    },
    details: {
      material: 'コットン混紡',
      origin: '日本',
      care: '洗濯可',
      code: '177200100004',
    },
    isNew: true,
  },
  {
    id: 'g177200100005',
    title: 'WIDE PANTS',
    brand: 'Atelier',
    price: '￥42,000',
    image: '/clothes/wide_pants.png',
    href: '/product/g177200100005',
    categoryId: 'pants',
    categoryName: 'パンツ',
    images: [
      '/clothes/wide_pants.png',
    ],
    colors: [
      {
        name: 'BLACK',
        image: '/clothes/wide_pants.png',
        sizes: [
          { size: 'M', inStock: true, productId: 'g177200100005' },
          { size: 'L', inStock: true, productId: 'g177200100005' },
        ],
      },
    ],
    description: `
      <b>デザイン</b><br>
      ブラックカラーのワイドパンツ。ゆったりとしたシルエットが特徴のパンツです。<br>
      ストレッチ素材を使用し、動きやすさとスタイリッシュなシルエットを両立しています。<br>
      <br>
      <b>特徴</b><br>
      • ブラックのモノトーンカラー<br>
      • ワイドシルエットでスタイリッシュに<br>
      • ストレッチ素材で快適な着心地
    `,
    sizeTable: {
      headers: ['サイズ', 'ウエスト', '股上', '股下', '裾幅'],
      rows: [
        { size: 'M', measurements: ['76', '30', '90', '28'] },
        { size: 'L', measurements: ['80', '32', '92', '29'] },
      ],
    },
    details: {
      material: 'コットン混紡',
      origin: '日本',
      care: '洗濯可',
      code: '177200100005',
    },
    isNew: true,
  },
  {
    id: 'g177200100006',
    title: 'DOUBLE COAT',
    brand: 'Atelier',
    price: '￥98,000',
    image: '/clothes/double_coat.png',
    href: '/product/g177200100006',
    categoryId: 'outer',
    categoryName: 'アウター',
    images: [
      '/clothes/double_coat.png',
    ],
    colors: [
      {
        name: 'NAVY',
        image: '/clothes/double_coat.png',
        sizes: [
          { size: 'M', inStock: true, productId: 'g177200100006' },
          { size: 'L', inStock: true, productId: 'g177200100006' },
        ],
      },
    ],
    description: `
      <b>デザイン</b><br>
      ネイビーカラーのダブルコート。クラシックなダブルブレストデザインのコートです。<br>
      ウール混紡素材で、保温性とスタイリッシュなシルエットを両立しています。<br>
      <br>
      <b>特徴</b><br>
      • ネイビーの上品なカラーリング<br>
      • ダブルブレストデザインでスタイリッシュに<br>
      • ウール混紡で快適な着心地
    `,
    sizeTable: {
      headers: ['サイズ', '着丈', '肩幅', '身幅', '袖丈'],
      rows: [
        { size: 'M', measurements: ['95', '50', '60', '66'] },
        { size: 'L', measurements: ['97', '52', '62', '67'] },
      ],
    },
    details: {
      material: 'ウール混紡',
      origin: '日本',
      care: 'ドライクリーニング',
      code: '177200100006',
    },
    isNew: true,
  },
  {
    id: 'g177200100007',
    title: 'BOMBER JACKET',
    brand: 'Atelier',
    price: '￥72,000',
    image: '/clothes/bomber_jacket.png',
    href: '/product/g177200100007',
    categoryId: 'outer',
    categoryName: 'アウター',
    images: [
      '/clothes/bomber_jacket.png',
    ],
    colors: [
      {
        name: 'BLACK',
        image: '/clothes/bomber_jacket.png',
        sizes: [
          { size: 'M', inStock: true, productId: 'g177200100007' },
          { size: 'L', inStock: true, productId: 'g177200100007' },
        ],
      },
    ],
    description: `
      <b>デザイン</b><br>
      ブラックカラーのボンバージャケット。クラシックなボンバージャケットデザインです。<br>
      ナイロン素材で、軽量で防風性に優れ、カジュアルスタイルに最適です。<br>
      <br>
      <b>特徴</b><br>
      • ブラックのモノトーンカラー<br>
      • クラシックなボンバージャケットデザイン<br>
      • ナイロン素材で軽量で快適
    `,
    sizeTable: {
      headers: ['サイズ', '着丈', '肩幅', '身幅', '袖丈'],
      rows: [
        { size: 'M', measurements: ['65', '48', '56', '61'] },
        { size: 'L', measurements: ['67', '50', '58', '62'] },
      ],
    },
    details: {
      material: 'ナイロン',
      origin: '日本',
      care: '洗濯可',
      code: '177200100007',
    },
    isNew: true,
  },
  {
    id: 'g177200100008',
    title: 'PANTS',
    brand: 'Atelier',
    price: '￥35,000',
    image: '/clothes/pants.png',
    href: '/product/g177200100008',
    categoryId: 'pants',
    categoryName: 'パンツ',
    images: [
      '/clothes/pants.png',
    ],
    colors: [
      {
        name: 'BLACK',
        image: '/clothes/pants.png',
        sizes: [
          { size: 'M', inStock: true, productId: 'g177200100008' },
          { size: 'L', inStock: true, productId: 'g177200100008' },
        ],
      },
    ],
    description: `
      <b>デザイン</b><br>
      ブラックカラーのパンツ。シンプルでスタイリッシュなストレートシルエットのパンツです。<br>
      コットン混紡素材で、快適な着心地と適度なストレッチ性を実現しています。<br>
      <br>
      <b>特徴</b><br>
      • ブラックのモノトーンカラー<br>
      • ストレートシルエットでスタイリッシュに<br>
      • コットン混紡で快適な着心地
    `,
    sizeTable: {
      headers: ['サイズ', 'ウエスト', '股上', '股下', '裾幅'],
      rows: [
        { size: 'M', measurements: ['76', '30', '90', '22'] },
        { size: 'L', measurements: ['80', '32', '92', '23'] },
      ],
    },
    details: {
      material: 'コットン混紡',
      origin: '日本',
      care: '洗濯可',
      code: '177200100008',
    },
    isNew: true,
  },
];

// 商品をIDで検索
export function getProductById(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}

// カテゴリIDで商品を検索
export function getProductsByCategoryId(categoryId: string): Product[] {
  return products.filter((p) => p.categoryId === categoryId);
}

// カテゴリスラッグで商品を検索
export function getProductsByCategorySlug(slug: string): Product[] {
  return products.filter((p) => {
    // カテゴリデータと照合する必要がある場合は、categories.tsから取得
    // ここでは簡易的にcategoryIdで判定
    return true; // 実装は後で改善
  });
}

// 新着商品を取得
export function getNewProducts(limit?: number): Product[] {
  const newProducts = products.filter((p) => p.isNew);
  return limit ? newProducts.slice(0, limit) : newProducts;
}

// 全商品を取得
export function getAllProducts(): Product[] {
  return products;
}
