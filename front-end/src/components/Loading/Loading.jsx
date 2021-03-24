import React from 'react';
import PropTypes from 'prop-types';
import './Loading.scss'
import loadingGif from '../../assets/gifs/loading.gif'

const Loading = () => (
  <div className="loading">
    <img src={loadingGif} width="200px"/>
  </div>
)

export default Loading