import React from 'react'
import PropTypes from 'prop-types'

function ItemCatatan({id, title, createdAt, body}) {
  return (
    <article>
      <h3>
        <Link to={`/notes/${id}`}>{title}</Link>
        </h3>
      <p>{createdAt}</p>
      <p>{body}</p>
    </article>
  )
}

ItemCatatan.propTypes ={
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired
}

export default ItemCatatan