/**
 * AttendanceBar – Renders a course attendance row with a coloured progress bar.
 *
 * Props:
 *   course     {string} – Course name
 *   percentage {number} – Attendance percentage (0-100)
 */
export default function AttendanceBar({ course, percentage }) {
  const barColor =
    percentage >= 85 ? '#28a745' : percentage >= 75 ? '#F2A900' : '#dc3545';

  const label =
    percentage >= 75 ? 'On Track' : 'At Risk';

  const labelStyle =
    percentage >= 75
      ? { backgroundColor: '#28a745', color: '#fff', padding: '4px 8px', borderRadius: '4px', fontSize: '12px' }
      : { backgroundColor: '#ffc107', color: '#000', padding: '4px 8px', borderRadius: '4px', fontSize: '12px' };

  return (
    <li style={styles.listItem}>
      <div>
        <strong>{course}</strong>
        <div style={styles.barTrack}>
          <div
            style={{
              ...styles.barFill,
              width: `${percentage}%`,
              backgroundColor: barColor,
            }}
          >
            {percentage}%
          </div>
        </div>
      </div>
      <span style={labelStyle}>{label}</span>
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
  barTrack: {
    marginTop: '6px',
    backgroundColor: '#eee',
    borderRadius: '4px',
    overflow: 'hidden',
    maxWidth: '200px',
  },
  barFill: {
    padding: '4px 0',
    textAlign: 'center',
    color: '#fff',
    fontSize: '12px',
  },
};
