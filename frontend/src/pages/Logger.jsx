import { useState, useEffect } from 'react';
import axios from 'axios';
import SplitOptions from '../components/SplitOptions';

function Logger() {
  const [split, setSplit] = useState('');
  const [content, setContent] = useState('');
  const [workouts, setWorkouts] = useState([]);

  const fetchWorkouts = async () => {
    const res = await axios.get('/api/workouts?split=' + split);
    setWorkouts(res.data);
  };

  const handleSave = async () => {
    if (!content.trim()) return;
    await axios.post('/api/workouts', { content: content.split('\n'), split });
    setContent('');
    fetchWorkouts();
  };

  useEffect(() => {
    if (split) fetchWorkouts();
  }, [split]);

  if (!split) {
    return <SplitOptions onSelect={setSplit} />;
  }

  return (
    <div style={{ maxWidth: '800px', margin: '2rem auto', padding: '1rem' }}>
      <h1 style={{ textAlign: 'center' }}>{split}</h1>

      <textarea
        rows={6}
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Log your workout (e.g. Lat Pulldown 3x12 → 60kg)"
        style={{
          width: '100%',
          fontSize: '1rem',
          padding: '1rem',
          marginBottom: '1rem',
          borderRadius: '8px',
          border: '1px solid #ccc',
          backgroundColor: '#fafafa'
        }}
      />

      <button
        onClick={handleSave}
        style={{
          backgroundColor: '#1f8ef1',
          color: 'white',
          border: 'none',
          padding: '0.75rem 1.5rem',
          fontSize: '1rem',
          borderRadius: '8px',
          cursor: 'pointer'
        }}
      >
        Save Workout
      </button>

      <div style={{ marginTop: '2rem' }}>
        <h2>Logged Workouts for {split}</h2>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {workouts.map((w) => (
            <li key={w._id} style={{ marginBottom: '1.5rem', background: '#f0f0f0', padding: '1rem', borderRadius: '8px' }}>
              {w.content.map((line, i) => (
                <div key={i}>{line}</div>
              ))}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Logger;
