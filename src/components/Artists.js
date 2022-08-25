import React from 'react'
import "../styles/artists.css"

const Artists = ({ artistsData, pageCopy }) => {
  return (
    <div>
      <h2>
        {pageCopy.title}
      </h2>
      <h4>
        {pageCopy.introductionText}
      </h4>


      {artistsData.map(artist => {
        return (
          <div key={artist.id} className="artists__artwork-block">
            <h2>Name (pseudonym if anon): {artist.attributes.anonymous ? artist.attributes.pseudonym : artist.attributes.name}</h2>
            <p>About the artist: {artist.attributes.introduction}</p>
            <p>Artists works: </p>
            {artist.attributes.artworks.data.length === 0 && <p>Nothing added yet</p>}
            {artist.attributes.artworks.data.length > 0 && <>
              <ul className='artists__list-of-work'>
                {
                  artist.attributes.artworks.data.map(artist => {
                    return (
                      <li key={artist.id}>{artist.attributes.title}</li>
                    )
                  })
                }
              </ul>
            </>
            }
          </div>
        )
      })}
    </div>
  )
}

export default Artists