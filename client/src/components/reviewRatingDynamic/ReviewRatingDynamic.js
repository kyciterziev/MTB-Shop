import styles from './ReviewRatingDynamic.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSmile, faAngry } from "@fortawesome/free-regular-svg-icons";
import { useState } from "react";

const ReviewRatingDynamic = (props) => {

    const [hover, setHover] = useState(0);
    const { newReview, setNewReview } = props;

    return (
        <div className={styles.ratingFaces}>
            {
                [...Array(2)].map((star, index) => {
                    index += 1;
                    console.log(hover);
                    return (
                        <button
                            type="button"
                            key={index}
                            className={index <= (hover || newReview.rating) ? `${styles.angryFace}` : `${styles.angryFaceOff}`}
                            onClick={() => setNewReview((state) => {
                                return ({
                                    ...state,
                                    rating: index
                                })
                            })}
                            onMouseEnter={() => setHover(index)}
                            onMouseLeave={() => setHover(newReview.rating)}
                        >
                            <FontAwesomeIcon icon={faAngry} className={styles.ratingFaces} />
                        </button>
                    );
                })
            }
            {[...Array(3)].map((star, index) => {
                index += 3;
                console.log(hover);
                return (
                    <button
                        type="button"
                        key={index}
                        className={index <= (hover || newReview.rating) ? `${styles.smileFace}` : `${styles.smileFaceOff}`}
                        onClick={() => setNewReview((state) => {
                            return ({
                                ...state,
                                rating: index
                            })
                        })}
                        onMouseEnter={() => setHover(index)}
                        onMouseLeave={() => setHover(newReview.rating)}
                    >
                        <FontAwesomeIcon icon={faSmile} className={styles.ratingFaces} />
                    </button>
                );
            })}
        </div>
    );
}

export default ReviewRatingDynamic;