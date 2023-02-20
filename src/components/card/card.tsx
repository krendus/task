import React, { FunctionComponent } from 'react';
import styles from './style.module.css';
import tickCircle from '../../assets/tick-circle.svg';

interface ICardProps {
  imgSrc: string;
  heading: string;
  body: string;
  active?: boolean;
}

const Card: FunctionComponent<ICardProps> = ({ imgSrc, heading, body, active }) => {
  return (
    <div className={active ? styles.aContainer : styles.container}>
      <img src={imgSrc} alt="" />
      <div className={styles.bodyWrapper}>
        <h3>{heading}</h3>
        <p>{body}</p>
      </div>
      <img src={tickCircle} alt="" style={active ? { opacity: '1' } : { opacity: '0' }} />
    </div>
  );
};

export default Card;
