import PropTypes from 'prop-types';
import randomColor from '../../helpers/colorSwitch'
import s from  './Statistics.module.css';

export default function Statistics({ title, stats }) {
  return (
    <div className={s.container}>
      <h2 className={s.title}>{title}</h2>
      <ul className={s.item}>
        {stats.map(({id,label,percentage} )=> (
          <li key={id} className={s.list}
           style={{ backgroundColor: randomColor() }}>
            <span className={s.label}>{label}</span>
            <span className={s.percentage}>{percentage}%</span>
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
