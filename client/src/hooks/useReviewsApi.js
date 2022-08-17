import useTokenInHeader from "./useTokenInHeader"

const useReviewsApi = () => {

    const { getHeaderWithToken } = useTokenInHeader();

    const getReviewsByUser = (id, offset, pageSize) => {
        return fetch(`http://localhost:3030/data/reviews?where=_ownerId%3D%22${id}%22&load=product%3D_bikeId%3Abikes&offset=${offset}&pageSize=${pageSize}`)
            .then(response => response.json())
    }

    const getReviews = (bikeId) => {
        return fetch(`http://localhost:3030/data/reviews?where=_bikeId%3D%22${bikeId}%22&load=author%3D_ownerId%3Ausers%26&load=bike%3D_bikeId%3Abikes,author%3D_ownerId%3Ausers`)
            .then(response => response.json())
    }

    const getUserReviewsCount = (id) => {

        return fetch(`http://localhost:3030/data/reviews?where=_ownerId%3D%22${id}%22&count`)
            .then(response => response.json())
    }

    const deleteReview = (reviewId) => {
        return fetch(`http://localhost:3030/data/reviews/${reviewId}`, {
            method: 'DELETE',
            headers: getHeaderWithToken({
                Accept: 'application/json',
                'Content-Type': 'application/json',
            })
        })
    }

    return { getReviewsByUser, getReviews, getUserReviewsCount, deleteReview };
}

export default useReviewsApi;