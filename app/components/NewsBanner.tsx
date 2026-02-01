'use client';

import { useEffect, useState } from 'react';

export default function NewsBanner() {
  const [visibleNews, setVisibleNews] = useState<string>('');

  useEffect(() => {
    const now = new Date();
    const newsItems = [
      {
        text: 'セール終了まで残り5日',
        start: new Date('2026/01/27 00:00:00'),
        end: new Date('2026/01/27 23:59:59'),
      },
      {
        text: 'セール終了まで残り4日',
        start: new Date('2026/01/28 00:00:00'),
        end: new Date('2026/01/28 23:59:59'),
      },
      {
        text: 'セール終了まで残り3日',
        start: new Date('2026/01/29 00:00:00'),
        end: new Date('2026/01/29 23:59:59'),
      },
      {
        text: 'セール終了まで残り2日',
        start: new Date('2026/01/30 00:00:00'),
        end: new Date('2026/01/30 23:59:59'),
      },
      {
        text: 'セール終了まで残り1日',
        start: new Date('2026/01/31 00:00:00'),
        end: new Date('2026/01/31 23:59:59'),
      },
    ];

    const activeNews = newsItems.find(
      (item) => now >= item.start && now <= item.end
    );

    if (activeNews) {
      setVisibleNews(activeNews.text);
    }
  }, []);

  if (!visibleNews) return null;

  return (
    <div className="news">
      {visibleNews}
    </div>
  );
}
