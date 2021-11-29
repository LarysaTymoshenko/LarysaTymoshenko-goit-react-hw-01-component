import PropTypes from 'prop-types';
import s from './Transactions.module.css';

export default function TransactionHistory({ items }) {
  return (
    <table className={s.table}>
      <thead className={s.head}>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      {items.map(item => (
        <tbody className={s.row}>
          <tr key={item.id}>
            <td>{item.type}</td>
            <td>{item.amount}</td>
            <td>{item.currency}</td>
          </tr>
        </tbody>
      ))}
    </table>
  );
}
TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({ id: PropTypes.number })),
  type: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
  currency: PropTypes.string.isRequired,
};
