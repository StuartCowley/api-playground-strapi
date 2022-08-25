import React from 'react'
import '../styles/collections.css'

const Collections = ({ collectionsData, pageCopy }) => {
  return (
    <div>
      <h2>
        {pageCopy.title}
      </h2>
      <h4>
        {pageCopy.introductionText}
      </h4>

      {collectionsData.map(collection => {
        if (collection.attributes.hide) {
          return null;
        }

        return (
          <div key={collection.id} className={"collections__artwork-block"}>
            <h2>Title: {collection.attributes.title}</h2>
            <p>Description: {collection.attributes.description}</p>
            {
              collection.attributes.artworks.data.map(piece => {
                return (
                  <p key={piece.id}>Piece title: {piece.attributes.title}</p>
                )
              })
            }
          </div>
        )
      })}
    </div>
  )
}

export default Collections