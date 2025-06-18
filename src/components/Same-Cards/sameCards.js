import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './sameCards.module.css';
import { FaCalendarAlt, FaUser } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

import image1 from '../../assets/bali.jpg';
import image2 from '../../assets/maldiva.jpeg';
import image3 from '../../assets/vietnam.avif';

const Cards = ({ tour }) => {

    const phoneNumber = "+998880100011"
    const [ t ] = useTranslation();
    const navigate = useNavigate();
 
    const handleBrowseAllClick = () => {
      const telLink = document.createElement('a');
      telLink.href = `tel:${phoneNumber}`;
      telLink.click();
      window.scrollTo(0,0);
      navigate('/contact'); 
    };
  return (  
    <div className={styles.card}>
      <img src={tour.image} alt={tour.title} className={styles.cardImage} />
      <div className={styles.cardContent}>
        <h2 className={styles.title}>{tour.title}</h2>
        <p className={styles.description}>{tour.description}</p>
        <div className={styles.price}>{tour.price}</div>
        <div className={styles.icons}>
          <div className={styles.icon}>
            <FaCalendarAlt />
            <span>{t("sameCards.date")}</span>
          </div>
          <div className={styles.icon}>
            <FaUser />
            <span>{t("sameCards.guests")}</span>
          </div>
        </div>
        <button className={styles.bookBtn} onClick={handleBrowseAllClick}>{t("sameCards.bookButton")}</button>
      </div>
    </div>
  );
};
 
const SameCards = () => {

  const [ t ] = useTranslation();

  const tours = [
    { image: image1, title: t("sameCards.bali"), description: t("sameCards.Description"), price: '$1200' },
    { image: image2, title: t("sameCards.maldiv"), description: t("sameCards.Description"), price: '$757' },
    { image: image3, title: t("sameCards.vietnam"), description: t("sameCards.Description"), price: '$610' },
  ];

  return (
    <div className={styles.cardContainer}>
      <div className={styles.topItem}>
        {tours.map((tour, index) => (
          <Cards key={index} tour={tour} />
        ))}
      </div>
    </div>
  );
};



export default SameCards;