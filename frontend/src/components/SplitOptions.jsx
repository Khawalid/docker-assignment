import { FaDumbbell } from 'react-icons/fa';

const splits = [
  'Push Pull Legs',
  'Arnold Split',
  'Bro Split',
  'Upper Lower Split',
  'Double Part Split',
  'Custom Split'
];

function SplitOptions({ onSelect }) {
  return (
    <div style={{ textAlign: 'center', marginTop: '2rem' }}>
      <h2>Select Your Training Split</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center' }}>
        {splits.map((split) => (
          <button
            key={split}
            onClick={() => onSelect(split)}
            style={{
              padding: '1rem 2rem',
              fontSize: '1rem',
              borderRadius: '12px',
              border: '1px solid #ccc',
              cursor: 'pointer',
              backgroundColor: '#f8f8f8',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
            }}
          >
            <FaDumbbell />
            {split}
          </button>
        ))}
      </div>
    </div>
  );
}

export default SplitOptions;
