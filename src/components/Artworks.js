import React from 'react'
import '../styles/artworks.css'

const Artworks = ({ artworksData }) => {
  return (
    artworksData.map(artwork => {
      return (
        <div key={artwork.id} className={`artworks__artwork-block ${artwork.attributes.hide ? "artworks__artwork-block--hide" : ""}`}>
          <h2>Title: {artwork.attributes.title}</h2>
          <p>Artist: {artwork.attributes.artist.data.attributes.name}</p>
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