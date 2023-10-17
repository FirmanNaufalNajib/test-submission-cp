import React from 'react';
import ItemCatatan from './ItemCatatan';

function ListCatatan({notes}) {
  if (!notes.length) {
    return <p>The Note wasn't found</p>
  }

  return (
    <div>
      {notes.map((note) => (
        <ItemCatatan key={note.id} {...note} />
      ))}
    </div>
  );
}

export default ListCatatan