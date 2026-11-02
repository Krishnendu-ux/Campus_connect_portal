import { useState } from 'react';
import TabButton from './TabButton';
import NoticeCard from './NoticeCard';
import AssignmentCard from './AssignmentCard';
import AttendanceBar from './AttendanceBar';
import ProfileField from './ProfileField';

/**
 * StudentPortal – Parent component that owns all state and composes
 * reusable child components via props. Data flows down; events flow up.
 */
export default function StudentPortal({ onBackToHome }) {
  // ---------- State owned by the parent ----------
  const [activeTab, setActiveTab] = useState('notices');

  const [assignments, setAssignments] = useState([
    { id: 1, subject: 'CS3301 - Full Stack', title: 'Lab Assignment 2: React State', status: 'Pending', dueDate: 'Sept 15, 2026' },
    { id: 2, subject: 'CS3302 - DBMS', title: 'ER Diagram Project Report', status: 'Submitted', dueDate: 'Sept 01, 2026' },
  ]);

  // ---------- Static data passed as props ----------
  const notices = [
    { id: 1, title: 'Mid-Term Exam Schedule Released', date: 'Sept 10, 2026', dept: 'SOCSE' },
    { id: 2, title: 'Hackathon Registration Open', date: 'Sept 20, 2026', dept: 'RVU Tech Club' },
  ];

  const attendance = [
    { id: 1, course: 'CS3301 - Full Stack', percentage: 92 },
    { id: 2, course: 'CS3302 - DBMS', percentage: 85 },
    { id: 3, course: 'CS3303 - OS Concepts', percentage: 78 },
  ];

  const profileFields = [
    { label: 'Full Name', value: 'Krishnendu' },
    { label: 'Student ID', value: 'RVU22SOCSE-017' },
    { label: 'Program', value: 'B.Tech CSE' },
    { label: 'Semester', value: '5th Semester' },
    { label: 'Email', value: 'krishnendu@rvu.edu.in' },
    { label: 'Campus', value: 'RV University, Bengaluru' },
  ];

  // ---------- Event handler – receives events from child components ----------
  const handleAssignmentSubmit = (id) => {
    setAssignments((prev) =>
      prev.map((item) =>
        item.id === id && item.status !== 'Submitted'
          ? { ...item, status: 'Submitted' }
          : item
      )
    );
  };

  // ---------- Tab definitions for the reusable TabButton ----------
  const tabs = [
    { key: 'notices', label: 'Notices & Events' },
    { key: 'assignments', label: 'Assignments' },
    { key: 'attendance', label: 'Track Attendance' },
    { key: 'profile', label: 'Profile' },
  ];

  return (
    <div style={styles.container}>
      {/* Top Header Navigation */}
      <header style={styles.header}>
        <div style={{ minWidth: 0 }}>
          <h2 style={{ margin: 0, color: '#F2A900' }}>👨‍🎓 Student Portal View</h2>
          <span style={{ fontSize: '13px', color: '#e0e0e0' }}>Welcome, RVU Student</span>
        </div>
        <button onClick={onBackToHome} style={styles.backBtn}>
          ← Back to Main Campus View
        </button>
      </header>

      {/* Portal Tab Navigation – Reusable TabButton rendered with different props */}
      <div style={styles.tabContainer}>
        {tabs.map((tab) => (
          <TabButton
            key={tab.key}
            label={tab.label}
            isActive={activeTab === tab.key}
            onClick={() => setActiveTab(tab.key)}
          />
        ))}
      </div>

      {/* Main Feature Content Area */}
      <div style={styles.contentCard}>

        {/* SECTION 1: NOTICES – NoticeCard reused for each notice */}
        {activeTab === 'notices' && (
          <div>
            <h3>📢 Campus Notices & Events</h3>
            <ul style={styles.list}>
              {notices.map((item) => (
                <NoticeCard
                  key={item.id}
                  title={item.title}
                  date={item.date}
                  department={item.dept}
                />
              ))}
            </ul>
          </div>
        )}

        {/* SECTION 2: ASSIGNMENTS – AssignmentCard receives data + callback via props */}
        {activeTab === 'assignments' && (
          <div>
            <h3>📚 Assignments & Submissions</h3>
            <ul style={styles.list}>
              {assignments.map((item) => (
                <AssignmentCard
                  key={item.id}
                  subject={item.subject}
                  title={item.title}
                  status={item.status}
                  dueDate={item.dueDate}
                  onSubmit={() => handleAssignmentSubmit(item.id)}
                />
              ))}
            </ul>
          </div>
        )}

        {/* SECTION 3: ATTENDANCE – AttendanceBar renders a coloured progress bar */}
        {activeTab === 'attendance' && (
          <div>
            <h3>📊 Track Attendance</h3>
            <ul style={styles.list}>
              {attendance.map((item) => (
                <AttendanceBar
                  key={item.id}
                  course={item.course}
                  percentage={item.percentage}
                />
              ))}
            </ul>
          </div>
        )}

        {/* SECTION 4: PROFILE – ProfileField reused for every field */}
        {activeTab === 'profile' && (
          <div>
            <h3>👤 Student Profile</h3>
            <ul style={styles.list}>
              {profileFields.map((field) => (
                <ProfileField
                  key={field.label}
                  label={field.label}
                  value={field.value}
                />
              ))}
            </ul>
          </div>
        )}

      </div>
    </div>
  );
}

// Shared styles for the portal shell (header, tabs, content card)
const styles = {
  container: { maxWidth: '850px', margin: '30px auto', fontFamily: 'Arial, sans-serif' },
  header: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px', flexWrap: 'wrap', backgroundColor: '#0A2240', padding: '15px 20px', borderRadius: '8px 8px 0 0', color: '#fff' },
  backBtn: { backgroundColor: '#F2A900', border: 'none', padding: '6px 12px', fontSize: '12px', fontWeight: 'bold', borderRadius: '4px', cursor: 'pointer', color: '#0A2240', flexShrink: 0, whiteSpace: 'nowrap' },
  tabContainer: { display: 'flex', backgroundColor: '#e0e0e0', borderBottom: '2px solid #0A2240' },
  contentCard: { backgroundColor: '#ffffff', padding: '25px', borderRadius: '0 0 8px 8px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' },
  list: { listStyle: 'none', padding: 0 },
};
