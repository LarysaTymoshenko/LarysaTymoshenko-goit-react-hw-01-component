import PropTypes from 'prop-types';
import s from './FriendList.module.css';

export default function FriendList({ friends }) {
  return (
    <ul className={s.list}>
      {friends.map(({ id, avatar, name, isOnline }) => (
        <li key={id} className={s.item}>
          <span
            className={`${s.status} ${isOnline ? s.green : s.red}`}
          />
          <img className={s.avatar} src={avatar} alt={name} width="48" />
          <p className={s.name}>{name}</p>
        </li>
      ))}
    </ul>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.shape({ id: PropTypes.number })),
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
