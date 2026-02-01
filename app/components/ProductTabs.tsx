'use client';

import { useState } from 'react';
import { SizeTable, ProductDetails } from '@/lib/types';

interface ProductTabsProps {
  description: string;
  sizeTable?: SizeTable;
  details?: ProductDetails;
}

export default function ProductTabs({
  description,
  sizeTable,
  details,
}: ProductTabsProps) {
  const [activeTab, setActiveTab] = useState<'size' | 'item'>('item');

  return (
    <div className="block-goods-comment-t">
      <div className="block-goods-information">
        <div className="block-goods-information-tab">
          <div
            className={`block-goods-information-tab-title js-tab-title-item ${
              activeTab === 'item' ? 'is-active' : ''
            }`}
            onClick={() => setActiveTab('item')}
          >
            アイテム説明
          </div>
          <div
            className={`block-goods-information-tab-title js-tab-title-size ${
              activeTab === 'size' ? 'is-active' : ''
            }`}
            onClick={() => setActiveTab('size')}
          >
            アイテムサイズ
          </div>
        </div>
        <div
          className={`block-goods-comment-left js-tab-content-item ${
            activeTab === 'item' ? 'is-active' : ''
          }`}
        >
          <p dangerouslySetInnerHTML={{ __html: description }}></p>
          {details && (
            <div className="block-goods-comment-list">
              {details.material && (
                <dl className="block-goods-comment3">
                  <dt>
                    <h3>素材</h3>
                  </dt>
                  <dd>{details.material}</dd>
                </dl>
              )}
              {details.origin && (
                <dl className="block-goods-comment3">
                  <dt>
                    <h3>原産地</h3>
                  </dt>
                  <dd>{details.origin}</dd>
                </dl>
              )}
              {details.care && (
                <dl className="block-goods-comment3">
                  <dt>
                    <h3>洗濯</h3>
                  </dt>
                  <dd>{details.care}</dd>
                </dl>
              )}
              {details.code && (
                <dl className="block-goods-comment3">
                  <dt>
                    <h3>品番</h3>
                  </dt>
                  <dd>{details.code}</dd>
                </dl>
              )}
            </div>
          )}
        </div>
        <div
          className={`block-goods-comment-right js-tab-content-size ${
            activeTab === 'size' ? 'is-active' : ''
          }`}
        >
          {sizeTable && (
            <div className="size-information">
              <table className="table-2">
                <thead>
                  <tr>
                    {sizeTable.headers.map((header, index) => (
                      <th key={index}>{header}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {sizeTable.rows.map((row, index) => (
                    <tr key={index}>
                      <td className="table-number">{row.size}</td>
                      {row.measurements.map((measurement, mIndex) => (
                        <td key={mIndex}>{measurement}</td>
                      ))}
                    </tr>
                  ))}
                  <tr>
                    <td></td>
                    {sizeTable.headers.slice(1).map((_, index) => (
                      <td key={index}></td>
                    ))}
                    <td className="size-table-note">
                      表記(cm)
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          )}
          <div className="size-line"></div>
        </div>
      </div>
    </div>
  );
}
