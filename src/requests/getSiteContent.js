import axios from 'axios';

const getStaticContent = (
  setArtistsPageCopy,
  setArtworksPageCopy,
  setCollectionsPageCopy
) => {
  const endpoint = `${process.env.REACT_APP_SITE_URL}/api/static-page-content`;
  return axios
    .get(endpoint)
    .then((response) => {
      setCollectionsPageCopy({
        title: response.data.data.attributes.CollectionsPageTitle,
        introductionText: response.data.data.attributes.CollectionsPageIntroduction
      })
      setArtworksPageCopy({
        title: response.data.data.attributes.ArtworksPageTitle,
        introductionText: response.data.data.attributes.ArtworksPageIntroduction
      })
      setArtistsPageCopy({
        title: response.data.data.attributes.ArtistsPageTitle,
        introductionText: response.data.data.attributes.ArtistsPageIntroduction
      })

    }, [])
    .catch((error) => {
      const { status } = error.response;
      if (status === 404) {
        console.error(error);
      }
      if (status === 500) {
        console.error("Server error", error);
      }
    });
}

export default getStaticContent;