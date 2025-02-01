import axios from 'axios';

export const fetchGallery = async (
    searchImages,
    API_KEY,
    page
) => {
    const response = await axios.get(`https://api.unsplash.com/search/photos?per_page=20&page=${page}&query=${searchImages}&client_id=${API_KEY}`
    );
    return response.data;
};