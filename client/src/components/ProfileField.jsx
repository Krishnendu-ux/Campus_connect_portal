/**
 * ProfileField – A single label/value row inside the student profile.
 *
 * Props:
 *   label {string} – Field name (e.g. "Full Name")
 *   value {string} – Field value (e.g. "Krishnendu")
 */
export default function ProfileField({ label, value }) {
  return (
    <li style={styles.listItem}>
      <strong>{label}</strong>
      <span>{value}</span>
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
};
