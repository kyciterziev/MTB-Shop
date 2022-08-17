import { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";

import styles from "./ProfilePage.module.css";
import useAuthApi from "../../hooks/useAuthApi";
import useReviewsApi from "../../hooks/useReviewsApi";
import AuthContext from "../../contexts/AuthContext";
import ReviewReviewStatic from "../../components/reviewResultStatic/ReviewResultStatic";
import LoadingContent from "../../components/loadingContent/LoadingContent";


const ProfilePage = () => {

    const numberOfCommentsToShow = 5;

    const { getUser } = useAuthApi();
    const { getReviewsByUser } = useReviewsApi();
    const [isLoading, setIsLoading] = useState(true);
    const { auth } = useContext(AuthContext);
    const [user, setUser] = useState({});
    const [userReviews, setUserReviews] = useState([]);

    useEffect(() => {
        getUser()
            .then(data => setUser(data))
            .finally(setIsLoading(false));

        getReviewsByUser(auth.id, numberOfCommentsToShow)
            .then(data => setUserReviews(data));

    }, [auth.accessToken, auth.id]);

    if (isLoading) {
        return <LoadingContent />
    }

    return (
        <>
            <div className="main-wrapper">
                <div className="large-wrapper app__container">
                    <div className={styles.pageWrapper}>
                        <div className={styles.accountBox}>
                            <div className={styles.boxHeader}>
                                Account information
                            </div>
                            <div className={styles.accountBoxContent}>
                                <div>
                                    <img src="/images/user.jpg" alt="user-avatar" className={styles.userAvatar}></img>
                                </div>
                                <div>
                                    <p className={styles.accountBoxHeadings}>Username</p>
                                    <h5 className="text-muted f-w-400">{user.username}</h5>
                                </div>
                                <div>
                                    <p className={styles.accountBoxHeadings}>Email</p>
                                    <h5 className="text-muted f-w-400">{user.email}</h5>
                                </div>
                            </div>
                        </div>
                        <div className={styles.reviewsBox}>
                            <div className={styles.boxHeader}>
                                Your latest 5 product reviews
                            </div>
                            {userReviews.length
                                ? userReviews.map((review) => {
                                    return (
                                        <div key={review._id} className={styles.commentCard}>
                                            <div className={styles.comment}>
                                                <div className={styles.commentHeader}>
                                                    <p className="text-muted pt-5 pt-sm-3">
                                                        <ReviewReviewStatic rating={review.rating} />
                                                    </p>
                                                    <Link to={`/details/${review._bikeId}`} >
                                                        <button className={styles.commentViewBtn}>
                                                            View
                                                        </button>
                                                    </Link>
                                                </div>
                                                <h5 className="text-primary mt-3">{review.description}</h5>
                                            </div>
                                        </div>
                                    )
                                })
                                : <div className={styles.emptyReviews}>
                                    No recent activities.
                                </div>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ProfilePage;