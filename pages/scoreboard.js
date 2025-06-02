import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function Scoreboard() {
  const [board, setBoard] = useState([]);

  useEffect(() => {
    fetch('/api/score').then(r=>r.json()).then(setBoard).catch(()=>{});
  }, []);

  return (
    <div className="min-h-screen p-10">
      <nav className="mb-10">
        <Link href="/" className="text-blue-600 hover:underline">← Back to Challenges</Link>
      </nav>
      <h1 className="text-3xl font-bold mb-6">Scoreboard</h1>
      {board.length === 0 ? (
        <p>No solves yet 🚀</p>
      ) : (
        <ul className="space-y-2 max-w-md">
          {board.map((row, i)=>(
            <li key={row.name} className="bg-white shadow rounded px-4 py-2 flex justify-between">
              <span><span className="font-bold mr-2">#{i+1}</span>{row.name}</span>
              <span className="font-semibold">{row.score} pts</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}