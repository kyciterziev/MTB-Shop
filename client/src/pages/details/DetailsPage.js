import { useEffect, useState, useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComments, faCartPlus } from "@fortawesome/free-solid-svg-icons";
import ReactPlayer from "react-player/youtube";
import styles from "../details/DetailsPage.module.css";
import useBikesApi from '../../hooks/useBikesApi';
import AuthContext from '../../contexts/AuthContext';
import ShoppingCartContext from '../../contexts/ShoppingCartContext';
import Reviews from '../../components/reviews/Reviews';

const DetailsPage = () => {

    const { bikeId } = useParams();
    const [bike, setBike] = useState({});
    const { auth } = useContext(AuthContext);
    const { onAdd } = useContext(ShoppingCartContext);
    const { getBike } = useBikesApi();

    const [showReviews, setShowReviews] = useState(false);

    const handleCloseReviews = () => setShowReviews(false);
    const handleShowReviews = () => setShowReviews(true);


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
                            <button
                                className={styles.reviewBtn}
                                onClick={() => handleShowReviews()}
                            >
                                View User reviews
                                <FontAwesomeIcon icon={faComments} className={styles.reviewsIcon} />
                            </button>
                            <Reviews show={showReviews} handleClose={handleCloseReviews} />
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
                                    Add to
                                    <FontAwesomeIcon icon={faCartPlus} className={styles.cartIcon} />
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