const useReviewsApi = () => {

    const getReviewsByUser = (id, numberOfCommentsToShow) => {
        return fetch(`http://localhost:3030/data/reviews?where=_userId%3D%22${id}%22&pageSize=${numberOfCommentsToShow}`)
            .then(response => response.json())
    }

    return { getReviewsByUser };
}

export default useReviewsApi;