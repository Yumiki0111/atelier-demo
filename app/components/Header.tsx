'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <header id="header" className="pane-header"></header>
      <nav className="pane-globalnav">
        <div className="container">
          <div className="block-globalnav">
            {/* ロゴ */}
            <div className="block-header-logo">
              <Link href="/" className="block-header-logo--link" onClick={closeMenu}>
                <span className="block-header-logo--text">Atelier</span>
              </Link>
            </div>

            {/* 右側エリア（検索・ナビゲーション・モバイル用アイコン・ハンバーガーメニュー） */}
            <div className="block-header-right">
              {/* 検索バー（デスクトップのみ） */}
              <div className="block-global-search block-global-search-desktop">
                <form name="frmSearch" method="get" action="/" className="search-form">
                  <div className="block-global-search--wrapper">
                    <input
                      type="text"
                      className="block-global-search--keyword"
                      name="q"
                      id="q"
                      placeholder="商品を検索"
                      autoComplete="off"
                      onFocus={() => setIsSearchFocused(true)}
                      onBlur={() => setIsSearchFocused(false)}
                    />
                    <input type="hidden" name="charset" value="UTF-8" />
                    <button
                      type="submit"
                      className="block-global-search--submit"
                      aria-label="検索"
                    >
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="11" cy="11" r="8"></circle>
                        <path d="m21 21-4.35-4.35"></path>
                      </svg>
                    </button>
                  </div>
                </form>
              </div>

              {/* ナビゲーション（デスクトップ：テキスト） */}
              <div className="blcok-globalnav-left block-globalnav-right">
                <ul className="block-globalnav--item-list">
                  <li className="block-globalnav--item-list-item">
                    <Link href="/" className="block-globalnav--item-list-item-link">
                      <span className="block-globalnav--item-list-item-link-text">ホーム</span>
                    </Link>
                  </li>
                  <li className="block-globalnav--item-list-item">
                    <Link href="/login" className="block-globalnav--item-list-item-link">
                      <span className="block-globalnav--item-list-item-link-text">ログイン</span>
                    </Link>
                  </li>
                  <li className="block-globalnav--item-list-item">
                    <Link href="/cart" className="block-globalnav--item-list-item-link">
                      <span className="block-globalnav--item-list-item-link-text">カート</span>
                    </Link>
                  </li>
                </ul>
              </div>

              {/* ユーザー・カート（モバイルのみ：アイコン） */}
              <div className="block-headernav block-headernav-mobile">
                <ul className="block-headernav--item-list">
                  <li className="block-headernav--item">
                    <Link href="/login" className="block-headernav--link block-headernav--link-text" title="ログイン">
                      <span className="block-headernav--link-text-desktop">ログイン</span>
                      <svg className="block-headernav--link-icon-mobile" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                        <circle cx="12" cy="7" r="4"></circle>
                      </svg>
                    </Link>
                  </li>
                  <li className="block-headernav--item">
                    <Link href="/cart" className="block-headernav--link block-headernav--link-cart block-headernav--link-text" title="カート">
                      <span className="block-headernav--link-text-desktop">カート</span>
                      <svg className="block-headernav--link-icon-mobile" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="9" cy="21" r="1"></circle>
                        <circle cx="20" cy="21" r="1"></circle>
                        <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                      </svg>
                      <span className="block-headernav--cart-count js-cart-count"></span>
                    </Link>
                  </li>
                </ul>
              </div>

              {/* ハンバーガーメニュー（モバイルのみ） */}
              <button
                className="mobile-menu-toggle"
                onClick={toggleMenu}
                aria-label="メニューを開く"
                aria-expanded={isMenuOpen}
              >
                {isMenuOpen ? (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </svg>
                ) : (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="3" y1="12" x2="21" y2="12"></line>
                    <line x1="3" y1="6" x2="21" y2="6"></line>
                    <line x1="3" y1="18" x2="21" y2="18"></line>
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* モバイルメニュー */}
      <div className={`mobile-menu-overlay ${isMenuOpen ? 'active' : ''}`} onClick={closeMenu}></div>
      <div className={`mobile-menu ${isMenuOpen ? 'active' : ''}`}>
        <div className="mobile-menu-content">
          <ul className="mobile-menu-list">
            <li>
              <Link href="/" className="mobile-menu-link" onClick={closeMenu}>
                ホーム
              </Link>
            </li>
            <li>
              <Link href="/login" className="mobile-menu-link" onClick={closeMenu}>
                ログイン
              </Link>
            </li>
            <li>
              <Link href="/cart" className="mobile-menu-link" onClick={closeMenu}>
                カート
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
