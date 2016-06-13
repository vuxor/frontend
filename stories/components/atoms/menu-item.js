import React from 'react';
import { Link } from 'react-router';
import gear from '../../../media/img/gear.svg';

export default (props) => {
  if (props === undefined) {
    props = {
      link: '/',
      name: 'Item',
    }
  }
  return (
    <li className={props.className}>
      <Link to={props.link}>{props.name}</Link>
    </li>
  )
};