import { useContext, useState, useEffect } from "react";
import { Link, useSearchParams, createSearchParams, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faUserPen, faTrashCan } from "@fortawesome/free-solid-svg-icons";

import styles from "./ProfilePage.module.css";
import useAuthApi from "../../hooks/useAuthApi";
import useReviewsApi from "../../hooks/useReviewsApi";
import AuthContext from "../../contexts/AuthContext";
import ReviewRatingStatic from "../../components/reviewRatingStatic/ReviewRatingStatic";
import LoadingContent from "../../components/loadingContent/LoadingContent";
import Pagination from "../../components/pagination/Pagination";


const ProfilePage = () => {

    const numberOfReviewsToShow = 3;

    const { getUser } = useAuthApi();
    const { getReviewsByUser, getUserReviewsCount, deleteReview } = useReviewsApi();

    const { auth } = useContext(AuthContext);

    const [searchParams] = useSearchParams();
    const navigate = useNavigate();

    const [isLoading, setIsLoading] = useState(true);
    const [user, setUser] = useState({});
    const [userReviews, setUserReviews] = useState([]);
    const [resultsCount, setResultsCount] = useState(0);

    const [query, setQuery] = useState({
        offset: searchParams.get('offset') || 0,
        pageSize: numberOfReviewsToShow,
    });

    const handleDelete = (reviewId) => {
        deleteReview(reviewId)
            .then((response) => {
                if (response.status == 200) {
                    setUserReviews(userReviews.filter((x) => x._id !== reviewId));
                    setQuery((state) => {
                        return {
                            ...state,
                            offset: query.offset
                        }
                    })
                }
            })
    }

    useEffect(() => {
        navigate({
            pathname: "/profile",
            search: `?${createSearchParams(query)}`
        });

        getUser()
            .then(data => setUser(data))
            .finally(setIsLoading(false));

        getReviewsByUser(auth.id, query.offset, query.pageSize)
            .then(data => setUserReviews(data));

        getUserReviewsCount(auth.id)
            .then(result => setResultsCount(result));

    }, [auth.accessToken, auth.id, query]);

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
                                Your reviews
                            </div>
                            {userReviews.length
                                ? userReviews.map((review) => {
                                    return (
                                        <div key={review._id} className={styles.reviewCard}>
                                            <div className={styles.review}>
                                                <div className={styles.reviewHeader}>
                                                    <p className="text-muted pt-5 pt-sm-3">
                                                        <ReviewRatingStatic rating={review.rating} />
                                                    </p>
                                                </div>
                                                <h5 className="text-primary mt-3">{review.description}</h5>
                                                <p className="text-muted pt-5 pt-sm-3">Review for product: {review.product.title}</p>
                                                <Link to={`/details/${review._bikeId}`} >
                                                    <button className={styles.cardActionIcon}>
                                                        <FontAwesomeIcon icon={faEye} />
                                                    </button>
                                                </Link>
                                                <button className={styles.cardActionIcon}>
                                                    <FontAwesomeIcon icon={faUserPen} />
                                                </button>
                                                <button className={styles.cardActionIcon} onClick={() => handleDelete(review._id)}>
                                                    <FontAwesomeIcon icon={faTrashCan} />
                                                </button>
                                            </div>
                                        </div>
                                    )
                                })
                                : <div className={styles.emptyReviews}>
                                    No recent activities.
                                </div>
                            }
                            <Pagination numberOfResults={resultsCount} pageSize={numberOfReviewsToShow} handleQuery={setQuery} offset={query.offset} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ProfilePage;