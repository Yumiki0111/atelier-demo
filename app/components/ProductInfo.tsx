interface ProductInfoProps {
  brand: string;
  title: string;
  price: string;
}

export default function ProductInfo({ brand, title, price }: ProductInfoProps) {
  return (
    <>
      <div className="block-goods-name">
        <h2 className="h1 block-goods-name--text js-enhanced-ecommerce-goods-name block-goods-name--text-1">
          <a href={`/brands/${brand.toLowerCase().replace(/\s+/g, '-')}`}>
            {brand}
          </a>
        </h2>
        <h2 className="h1 block-goods-name--text js-enhanced-ecommerce-goods-name">
          {title}
        </h2>
      </div>

      <div className="block-goods-price">
        <div className="block-goods-price--price price">
          {price}
          <span>税込</span>
        </div>
        <div className="block-goods-comment" id="spec_goods_point">
          1400ポイント付与
        </div>
      </div>
    </>
  );
}
