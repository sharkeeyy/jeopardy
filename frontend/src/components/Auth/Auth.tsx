import React from 'react';

function Auth(): JSX.Element {
  return (
    <div className="form__container">
      <form>
        <div className="mb-3">
          <label>Email</label>
          <input name="email" type="email"></input>
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input name="password" type="password"></input>
        </div>
        <button className="btn btn-secondary" type="submit"></button>
      </form>
    </div>
  );
}

export default Auth;
