import { useEffect, useState, useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import ReactPlayer from "react-player/youtube";
import styles from "../details/DetailsPage.module.css";
import useBikesApi from '../../hooks/useBikesApi';
import AuthContext from '../../contexts/AuthContext';
import ShoppingCartContext from '../../contexts/ShoppingCartContext';

const DetailsPage = () => {

    const { bikeId } = useParams();
    const [bike, setBike] = useState({});
    const { auth } = useContext(AuthContext);
    const { onAdd } = useContext(ShoppingCartContext);
    const { getBike } = useBikesApi();


    useEffect(() => {
        getBike(bikeId)
            .then(data => setBike(data));
    }, []);

    console.log(`Bike ${bike.features}`);
    return (
        <>
            <div className="main-wrapper">
                <div className="large-wrapper app__container">
                    <div className={styles.detailHeader}>
                        <div className={styles.detailTitle}>Bike Details</div>
                    </div>
                    <div className={styles.bikeTitle}>{bike.title}</div>
                </div>

                <div className={styles.bikeContainer}>
                    <div className={styles.bikeBoxLeft}>
                        <div className={styles.bikeVideoBox}>
                            <ReactPlayer
                                url={bike.video}
                            />
                        </div>

                        <div className={styles.bikeDescriptionBox}>
                            <div className={styles.bikeDetails}>
                                <div className={styles.bikeDetailsItem}>
                                    <div className={styles.bikeFeatures}>Bike Features:
                                        <button className={styles.reviewBtn}>
                                            View User reviews
                                        </button>
                                    </div>
                                    <div>
                                        {bike && bike.features && bike.features.map((feature, i) => {
                                            return (
                                                <span key={i} className={styles.featuresItem}>
                                                    {feature}
                                                </span>
                                            )
                                        })}
                                    </div>
                                </div>
                            </div>
                            <br />
                            <div className={styles.bikeDescription}>
                                <h4>
                                    Description
                                </h4>
                                <hr />
                                {bike.full_description}
                            </div>
                        </div>
                    </div>
                    <aside className={styles.bikeBoxRight}>
                        <img className={styles.bikeImage} src={`/images/${bike.image}`} />
                        <div className={styles.bikePrice}>Price: {bike.price}€
                            {auth.accessToken &&
                                <button
                                    className={styles.addCartBtn}
                                    onClick={() => onAdd(bike)}
                                >
                                    Add to Cart
                                </button>}
                        </div>
                        <div>
                            <Link to='/catalog' className={styles.backToCatalog}>
                                Back to Catalog page
                            </Link>
                        </div>
                    </aside>
                </div>
            </div>
        </>
    );

}

export default DetailsPage;