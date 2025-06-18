import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Cards.module.css';
import { FaCalendarAlt, FaUser } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import image1 from '../../assets/maldiva.jpeg';
import image2 from '../../assets/vietnam.avif'; 
import image3 from '../../assets/egypt.jpg';
import image4 from '../../assets/bali.jpg';
import image5 from '../../assets/jordan.jpg';
import image6 from '../../assets/shrilanka.jpg';
import image7 from '../../assets/dubai.jpg';
import image8 from '../../assets/azerbaijan.jpg';
import image9 from '../../assets/georgia.jpg';
import image10 from '../../assets/malaysia.jpg';
import image11 from '../../assets/zanzibar.jpg';
import image12 from '../../assets/montenegro.jpg';
import image13 from '../../assets/turkey.jpg';
import image14 from '../../assets/antalya.jpg';

const Another = ({ tour }) => {

    const [ t ] = useTranslation();
    const phoneNumber = "+998880100011"
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
            <span>{t("cards.date")}</span>
          </div>
          <div className={styles.icon}>
            <FaUser />
            <span>15 {t("cards.guests")}</span>
          </div>
        </div>
        <button className={styles.bookBtn} onClick={handleBrowseAllClick}>{t("cards.bookButton")}</button>
      </div>
    </div>
  );
};
 
const Cards = () => {

  const [ t ] = useTranslation();

  const tours = [ 
    { image: image1,  title: t("cards.maldiv"), description: t("cards.Description"), price: '$757' },
    { image: image2,  title: t("cards.vietnam"), description: t("cards.Description"), price: '$610' },
    { image: image3,  title: t("cards.egypt"), description: t("cards.Description"), price: '$450' },
    { image: image4,  title: t("cards.bali"), description: t("cards.Description"), price: '$1200' },
    { image: image5,  title: t("cards.jordan"), description: t("cards.Description"), price: '$600' },
    { image: image6,  title: t("cards.dubai"), description: t("cards.Description"), price: '$270' },
    { image: image7,  title: t("cards.shrilanka"), description: t("cards.Description"), price: '$850' },
    { image: image8,  title: t("cards.azerbaijan"), description: t("cards.Description"), price: '$566' },
    { image: image9,  title: t("cards.georgia"), description: t("cards.Description"), price: '$533' },
    { image: image10, title: t("cards.malaysia"), description: t("cards.Description"), price: "$1130"},
    { image: image11, title: t("cards.zanzibar"), description: t("cards.Description"), price: "$1485"},
    { image: image12, title: t("cards.montenegro"), description: t("cards.Description"), price: "$750"},
    { image: image13, title: t("cards.turkey"), description: t("cards.Description"), price: "$650"},
    { image: image14, title: t("cards.antalya"), description: t("cards.Description"), price: "$1033"}
  ];

  return (
    <div className={styles.cardContainer}>
      <div className={styles.topItem}>
        {tours.map((tour, index) => (
          <Another key={index} tour={tour} />
        ))}
      </div>
    </div>
  );
};

export default Cards;



