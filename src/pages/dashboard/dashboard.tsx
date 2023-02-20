import { useQuery } from '@apollo/client';
import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../context/provider';
import { GET_COMPANY } from '../../graphql/queries';
import { ICompany } from '../../interfaces/api';
import { IUserContext } from '../../interfaces/user';
import logoImg from '../../assets/logo.svg';
import timerImg from '../../assets/timer.svg';
import styles from './style.module.css';

const Dashboard = () => {
  const navigate = useNavigate();
  const userContext = useContext<IUserContext | null>(UserContext);
  const { data } = useQuery<ICompany>(GET_COMPANY);

  useEffect(() => {
    const loginTime = parseInt(sessionStorage.getItem('login') ?? '');
    if (userContext) {
      if (!userContext.user.authorized) {
        navigate('/');
      } else {
        if (Date.now() - loginTime > 120000) {
          userContext.setUser({ ...userContext.user, authorized: false });
          sessionStorage.clear();
        }
        setTimeout(() => {
          userContext.setUser({ ...userContext.user, authorized: false });
          sessionStorage.clear();
        }, 120000 - (Date.now() - loginTime));
      }
    }
  }, [userContext]);

  return (
    <div>
      <div className={styles.nav}>
        <div className={styles.navWrapper}>
          <img src={logoImg} alt="logo" />
        </div>
      </div>
      <div className={styles.bottom}>
        <div className={styles.bottomWrapper}>
          <div className={styles.left}>
            <div className={styles.company}>
              <div>
                <p>{data?.company?.name.toString().slice(0, 2)}</p>
              </div>
              <h1>{data?.company?.name}</h1>
            </div>
            <div className={styles.user}>
              <h3>CEO</h3>
              <p>{data?.company?.ceo}</p>
            </div>
            <div className={styles.user}>
              <h3>CTO</h3>
              <p>{data?.company?.cto}</p>
            </div>
          </div>
          <div className={styles.right}>
            <div className={styles.soon}>
              <img src={timerImg} alt="" />
              <span>Coming soon</span>
            </div>
            <div className={styles.list}>
              <div className={styles.card}>
                <div></div>
                <div className={styles.rcard}>
                  <div></div>
                  <div></div>
                </div>
              </div>
            </div>
            <h2 className={styles.head}>📫 Notifications</h2>
            <p className={styles.body}>
              Receive notifcations about your rider performance, efficiency reviews and a lot more
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
