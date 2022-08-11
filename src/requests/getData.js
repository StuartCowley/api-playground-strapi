import axios from "axios";

const getData = (setArtistsData, setArtworksData, setCollectionsData, type) => {
  let endpoint = `${process.env.REACT_APP_SITE_URL}/api/${type}?populate=%2A`;

  return axios
    .get(endpoint)
    .then((response) => {
      if (type === 'artists') {
        setArtistsData(response.data.data)
        setArtworksData([])
        setCollectionsData([])
      }
      if (type === 'artworks') {
        setArtistsData([])
        setArtworksData(response.data.data)
        setCollectionsData([])
      }
      if (type === 'collections') {
        setArtistsData([])
        setArtworksData([])
        setCollectionsData(response.data.data)
      }
    })
    .catch((error) => {
      const { status } = error.response;
      if (status === 404) {
        console.error(error);
      }
      if (status === 500) {
        console.error("Server error", error);
      }
    });
};

export default getData;