const useReviewsApi = () => {

    const getReviewsByUser = (id, offset, pageSize) => {
        return fetch(`http://localhost:3030/data/reviews?where=_userId%3D%22${id}%22&load=author%3D_userId%3Ausers&offset=${offset}&pageSize=${pageSize}`)
            .then(response => response.json())
    }

    const getReviews = (bikeId) => {
        return fetch(`http://localhost:3030/data/reviews?where=_bikeId%3D%22${bikeId}%22&load=author%3D_userId%3Ausers%26&load=bike%3D_bikeId%3Abikes,author%3D_userId%3Ausers`)
            .then(response => response.json())
    }

    const getUserReviewsCount = (id) => {

        return fetch(`http://localhost:3030/data/reviews?where=_userId%3D%22${id}%22&count`)
            .then(response => response.json())
    }

    return { getReviewsByUser, getReviews, getUserReviewsCount };
}

export default useReviewsApi;