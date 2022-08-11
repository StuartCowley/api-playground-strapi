import React from 'react'
import '../styles/collections.css'

const Collections = ({ collectionsData }) => {
  return (
    collectionsData.map(collection => {
      return (
        <div key={collection.id} className={`collections__artwork-block ${collection.attributes.hide ? "collections__artwork-block--hide" : ""}`}>
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
    })
  )
}

export default Collections