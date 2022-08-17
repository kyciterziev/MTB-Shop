const useReviewsApi = () => {

    const getReviewsByUser = (id, numberOfCommentsToShow) => {
        return fetch(`http://localhost:3030/data/reviews?where=_userId%3D%22${id}%22&pageSize=${numberOfCommentsToShow}`)
            .then(response => response.json())
    }

    const getReviews = (bikeId) => {
        return fetch(`http://localhost:3030/data/reviews?where=_bikeId%3D%22${bikeId}%22&load=author%3D_userId%3Ausers`)
            .then(response => response.json())
    }

    return { getReviewsByUser, getReviews };
}

export default useReviewsApi;