import { Link } from 'react-router-dom';
import styles from './BikeCardItem.module.css'

const BikeCardItem = ({ bike }) => {

    return (
        <div className={styles.shopCard}>
            <div className={styles.title}>
                {bike.title}
            </div>
            <div className={styles.desc}>
                {bike.description}
            </div>
            <div className={styles.slider}>
                <figure data-color="#E24938, #A30F22">
                    <img
                        className={styles.cardImage}
                        src={`/images/${bike.image}`}
                    />
                </figure>
            </div>

            <div className={styles.cta}>
                <div className={styles.price}>{bike.price}$</div>
                <button className={styles.btn}>View<span></span></button>
            </div>
        </div>
    );
}

export default BikeCardItem;