/**
 * AssignmentCard – Displays a single assignment with status and submit action.
 *
 * Props:
 *   subject  {string}  – Course / subject name
 *   title    {string}  – Assignment title
 *   status   {string}  – 'Pending' | 'Submitted'
 *   dueDate  {string}  – Due date string
 *   onSubmit {function}– Callback to mark this assignment as submitted
 */
export default function AssignmentCard({ subject, title, status, dueDate, onSubmit }) {
  return (
    <li style={styles.listItem}>
      <div>
        <strong>{title}</strong>
        <p style={styles.subText}>
          {subject} &bull; Due: {dueDate}
        </p>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <span style={status === 'Submitted' ? styles.badgeSuccess : styles.badgePending}>
          {status}
        </span>
        {status === 'Pending' && (
          <button style={styles.actionBtn} onClick={onSubmit}>
            Mark as Submitted
          </button>
        )}
      </div>
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
  badgeSuccess: {
    backgroundColor: '#28a745',
    color: '#fff',
    padding: '4px 8px',
    borderRadius: '4px',
    fontSize: '12px',
  },
  badgePending: {
    backgroundColor: '#ffc107',
    color: '#000',
    padding: '4px 8px',
    borderRadius: '4px',
    fontSize: '12px',
  },
};
