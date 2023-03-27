import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers } from '@fortawesome/free-solid-svg-icons';
const MovieInfo = ({popularity , adult, vote_average}) => {
  return (
    <>
        <span><img width={20} src='https://ia.media-imdb.com/images/M/MV5BODc4MTA3NjkzNl5BMl5BcG5nXkFtZTgwMDg0MzQ2OTE@._V1_.png' />&nbsp;{vote_average}</span>
        <span className="imb-score"><FontAwesomeIcon icon={faUsers} />&nbsp;{popularity}</span>
        <span className={adult ? 'adult-text adult-over' : 'adult-text adult-under'}>{adult ? "over 18" : "under 18"}</span>
    </>
  )
}

export default MovieInfo