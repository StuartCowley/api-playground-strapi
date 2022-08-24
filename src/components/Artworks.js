import React from 'react'
import '../styles/artworks.css'

const Artworks = ({ artworksData }) => {
  return (
    artworksData.map(artwork => {
      if (artwork.attributes.hide) {
        return null;
      }

      // If artist name is not defined in the CMS, use "Anon" placeholder.
      // Otherwise, display the name or pseudonym provided
      // If no pseudonym is provided and artist is anonymous, also use "Anon"
      let artistDisplayName = "Anon"
      if (null !== artwork.attributes.artist.data) {
        const { anonymous, pseudonym, name } = artwork.attributes.artist.data.attributes
        if (pseudonym === null) {
          artistDisplayName = anonymous ? "Anon" : name
        } else {
          artistDisplayName = anonymous ? pseudonym : name
        }
      }

      return (
        <div key={artwork.id} className="artworks__artwork-block">
          <h2>Title: {artwork.attributes.title}</h2>
          <p>Artist: {artistDisplayName}</p>
          <p>Medium: {artwork.attributes.medium}</p>
          <p>Description: {artwork.attributes.description}</p>
          {artwork.attributes.textContent && <div className='artworks__text-content-wrap'>
            <p>Text Content: </p>
            <p className='artworks__text-content'>{artwork.attributes.textContent}</p>
          </div>
          }
          {
            artwork.attributes.medium === 'Painting' && <div className='artworks__media-content-wrap'>
              <p>Media Content:</p> <img alt={artwork.attributes.mediaContent.data.attributes.alternativeText} src={`${process.env.REACT_APP_SITE_URL}${artwork.attributes.mediaContent.data.attributes.url}`} />
            </div>
          }
        </div>
      )
    })
  )
}

export default Artworks