import React from 'react';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

import { deleteImage } from '../redux';

const HistoryItem = ({ imgData, deleteImage }) => {
  return (
    <>
      <div className="history-image-container">
        <FontAwesomeIcon
          icon={faTrash}
          className="trash-icon"
          onClick={() => deleteImage(imgData.id)}
        />
        <img
          src={imgData.url}
          alt={imgData.title.trim() || 'image with no title'}
        />
      </div>
      <div className="history-text">
        <h5>{imgData.title.trim() || `id ${imgData.id}`}</h5>
        <p>{imgData.import_datetime}</p>
      </div>
    </>
  );
};

export default connect(null, { deleteImage })(HistoryItem);
