import PropTypes from 'prop-types';
import s from './FriendList.module.css';

export default function FriendList({ id, avatar, name, isOnline }) {
  return (
    <ul className="friend-list">
      <li className="item">
        <span className="status">{isOnline}</span>
        <img className={avatar} src="" alt={name} width="48" />
        <p className="name">{name}</p>
      </li>
    </ul>
  );
}
