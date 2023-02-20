import React, { useContext, useEffect, useState } from 'react';
import logoImg from '../../assets/logo.svg';
import frame1Img from '../../assets/frame1.svg';
import frame2Img from '../../assets/frame2.svg';
import frame3Img from '../../assets/frame3.svg';
import styles from './style.module.css';
import Card from '../../components/card';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../context/provider';
import { IUserContext } from '../../interfaces/user';

const Login = () => {
  const userContext = useContext<IUserContext | null>(UserContext);
  const navigate = useNavigate();
  const [error, setError] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  useEffect(() => {
    if (userContext) {
      if (userContext.user.authorized) {
        navigate('/dashboard');
      }
    }
  }, [userContext]);
  const handleLogin = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    if (password === userContext?.user.password && email === userContext?.user.email) {
      setError(false);
      userContext.setUser({ ...userContext.user, authorized: true });
      sessionStorage.setItem('login', JSON.stringify(Date.now()));
    } else {
      setError(true);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.leftContainer}>
        <div className={styles.left}>
          <img src={logoImg} alt="logo" />
          <h1 className={styles.leftH}>Hi there, see what&apos;s new</h1>
          <p className={styles.leftP}>
            Here&apos;s how Foodcourt helps you manage your daily operations and ensure your riders
            are efficient
          </p>
          <Card
            heading="Monitor your Earnings"
            body="Easily see how much your busineses are earning  on each transaction and watch your earnings rise."
            imgSrc={frame1Img}
          />
          <Card
            heading="Manage your Businesses"
            body="Easily see how much your busineses are earning  on each transaction and watch your earnings rise."
            imgSrc={frame2Img}
          />
          <Card
            heading="Delegate to Staffs"
            body="Easily see how much your busineses are earning  on each transaction and watch your earnings rise."
            imgSrc={frame3Img}
            active
          />
        </div>
      </div>
      <div className={styles.rightContainer}>
        <div className={styles.right}>
          <div className={styles.formContainer}>
            <h3>Login to your dashboard</h3>
            <p>Provide details to login to your account </p>
            {error && <p className={styles.errorp}>Invalid Credentials</p>}
            <form>
              <div className={styles.inputContainer}>
                <label>Email</label>
                <div>
                  <input
                    type="email"
                    name=""
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>
              <div className={styles.inputContainer}>
                <label>Password</label>
                <div>
                  <input
                    type="password"
                    name=""
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
              </div>
              <button type="submit" onClick={handleLogin}>
                <span>Login</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
