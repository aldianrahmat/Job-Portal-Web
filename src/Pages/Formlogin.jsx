import React from "react";

const Login = () => {
  return (
    <div className="container">
      <h1>Silahkan Masuk!</h1>
      <div className="form-group">
        <label htmlFor="email">Alamat Email</label>
        <input type="email" id="email" placeholder="nama@email.com" />
      </div>
      <div className="form-group">
        <label htmlFor="password">Kata Sandi</label>
        <input type="password" id="password" placeholder="********" />
      </div>
      <button className="btn btn-primary">Masuk</button>
      <p className="forgot-password">Lupa Kata Sandi?</p>
      <h2>Daftar dengan Sosial</h2>
      <div className="social-buttons">
        <button className="btn btn-google">
          <i className="fab fa-google"></i>
        </button>
        <button className="btn btn-facebook">
          <i className="fab fa-facebook-f"></i>
        </button>
        <button className="btn btn-linkedin">
          <i className="fab fa-linkedin-in"></i>
        </button>
      </div>
    </div>
  );
};

export default Login;
