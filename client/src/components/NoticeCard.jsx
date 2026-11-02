/**
 * NoticeCard – Displays a single campus notice/event.
 *
 * Props:
 *   title      {string} – Notice heading
 *   date       {string} – Date string
 *   department {string} – Department or organiser name
 */
export default function NoticeCard({ title, date, department }) {
  return (
    <li style={styles.listItem}>
      <div>
        <strong>{title}</strong>
        <p style={styles.subText}>
          {department} &bull; {date}
        </p>
      </div>
      <button style={styles.actionBtn}>View Details</button>
    </li>
  );
}

const styles = {
  listItem: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '12px',
    borderBottom: '1px solid #eee',
  },
  subText: {
    margin: '4px 0 0 0',
    fontSize: '12px',
    color: '#666',
  },
  actionBtn: {
    backgroundColor: '#0A2240',
    color: '#fff',
    border: 'none',
    padding: '6px 12px',
    borderRadius: '4px',
    cursor: 'pointer',
  },
};
