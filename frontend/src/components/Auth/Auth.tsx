import React from 'react';
import styles from './auth.module.css';


function Auth(): JSX.Element {
  // const navigate = useNavigate();
  return (
    <div className={styles.form__container}>
      <form>
        <div className="mb-3">
         
          <label className={styles.formLabel}>
            Email
          <input className="form-control" name="email" type="email"></input>
          </label> 
        </div>
        
        <div className="mb-3">
          <label className="form-label">
            Password
          <input className="form-control" name="password" type="password"></input>
          </label>

        </div>
        <button className="btn btn-secondary" type="submit">ШААА</button>
      </form>
    </div>

  );
}

export default Auth;
