import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

import HistoryItem from '../components/HistoryItem';
import { createSelector } from 'reselect';

const History = ({ imageHistory }) => {
  const HistoryItems = imageHistory.map((data) => (
    <HistoryItem key={data.id} imgData={data} />
  ));

  return (
    <main>
      <div className="title">
        <Link to={'/'}>
          <FontAwesomeIcon icon={faArrowLeft} />
        </Link>
        &nbsp;История
      </div>
      <div className="history-items">{HistoryItems}</div>
    </main>
  );
};

const getHistory = createSelector(
  (state) => state.imageHistory,
  (imageHistory) => imageHistory
);
// нужен ли здесь reselect? не вижу здесь ситуаций, как в этом видео
// https://www.youtube.com/watch?v=6Xwo5mVxDqI

// const mapStateToProps = (state) => ({ imageHistory: state.imageHistory });
const mapStateToProps = (state) => ({ imageHistory: getHistory(state) });

export default connect(mapStateToProps)(History);
