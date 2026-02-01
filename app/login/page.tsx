import Layout from '@/app/components/Layout';

export default function LoginPage() {
  return (
    <Layout>
      <div className="login-page">
        <div className="login-container">
          <h1 className="login-title">ログイン</h1>
          <form className="login-form">
            <div className="form-group">
              <label htmlFor="email">メールアドレス</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="password">パスワード</label>
              <input type="password" id="password" name="password" required />
            </div>
            <button type="submit" className="btn-login">
              ログイン
            </button>
            <div className="login-links">
              <a href="/register">新規会員登録</a>
              <a href="/forgot-password">パスワードを忘れた方</a>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
}
