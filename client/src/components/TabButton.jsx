/**
 * TabButton – A reusable tab navigation button.
 *
 * Props:
 *   label    {string}  – Text displayed on the tab
 *   isActive {boolean} – Whether this tab is currently selected
 *   onClick  {function}– Callback fired when the tab is clicked
 */
export default function TabButton({ label, isActive, onClick }) {
  return (
    <button
      style={isActive ? styles.activeTab : styles.tab}
      onClick={onClick}
    >
      {label}
    </button>
  );
}

const styles = {
  tab: {
    flex: 1,
    padding: '12px',
    border: 'none',
    background: 'none',
    cursor: 'pointer',
    fontWeight: 'bold',
    color: '#333',
  },
  activeTab: {
    flex: 1,
    padding: '12px',
    border: 'none',
    backgroundColor: '#ffffff',
    color: '#0A2240',
    fontWeight: 'bold',
    borderTop: '3px solid #0A2240',
    cursor: 'pointer',
  },
};
