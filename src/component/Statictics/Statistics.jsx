import PropTypes from 'prop-types';
import s from './Statistics.module.css';

export default function Statistics({ title, stats }) {
  return (
    <div className={s.container}>
      <h2 className={s.title}>{title}</h2>
      <ul className={s.item}>
        {stats.map(date => (
          <li key={date.id} className={s.list}>
            <span className={s.label}>{date.label}</span>
            <span className={s.percentage}>{date.percentage}%</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

Statistics.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({ id: PropTypes.string })),
  label: PropTypes.string,
  percentage: PropTypes.number,
};
