'use client';

import Link from 'next/link';

export default function LeftSideMenu() {

  return (
    <div className="pane-left-menu-area">
      <div className="pane-left-menu pane-left-menu-1">
        <div id="block_of_leftmenu_top" className="block-left-menu-top">
          <div id="block_of_searchbox" className="block-search-box">
            <h2 className="block-search-box--header">
              <Link href="/">キーワードで探す</Link>
            </h2>
            <form action="/" method="get" name="frmSearch">
              <div className="block-search-box--form">
                <input type="hidden" name="search" value="x" />
                <input
                  name="q"
                  type="text"
                  className="block-search-box--keyword js-suggest-search"
                  tabIndex={1}
                  defaultValue=""
                  size={8}
                  autoComplete="off"
                />
                <button
                  type="submit"
                  name="search"
                  value="search"
                  className="block-search-box--search-submit btn btn-default"
                >
                  <i className="fa fa-search" aria-hidden="true"></i>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="block-left-menu-page-top" id="top-btn">
        <a href="#top">TOP</a>
      </div>
    </div>
  );
}
