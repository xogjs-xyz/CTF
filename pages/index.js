import { useState } from 'react';
import Link from 'next/link';
import ChallengeCard from '../components/ChallengeCard';
import challenges from '../data/challenges';

export default function Home() {
  const [open, setOpen] = useState(null);
  const [flag, setFlag] = useState('');
  const [name, setName] = useState('');
  const [result, setResult] = useState('');

  const submit = async () => {
    const res = await fetch('/api/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ flag, name, problemId: open.id }),
    });
    const data = await res.json();
    setResult(data.message);
  };

  return (
    <div className="min-h-screen p-10">
      <nav className="mb-10 flex justify-end">
        <Link href="/scoreboard" className="text-blue-600 hover:underline">
          Scoreboard →
        </Link>
      </nav>

      {challenges.map(cat => (
        <section key={cat.category} className="mb-12">
          <h2 className="text-3xl font-bold mb-6">{cat.category}</h2>
          <div className="flex flex-wrap gap-6">
            {cat.problems.map(p => (
              <ChallengeCard key={p.id} title={p.title} points={p.points}
                onClick={() => { setOpen(p); setFlag(''); setName(''); setResult(''); }} />
            ))}
          </div>
        </section>
      ))}

      {open && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl shadow-xl max-w-lg w-full p-8 relative">
            <button onClick={() => setOpen(null)}
              className="absolute top-3 right-4 text-2xl text-gray-400 hover:text-gray-600">&times;</button>
            <h3 className="text-2xl font-bold">{open.title}</h3>
            <p className="text-sm text-gray-500 mb-4">{open.points} pts</p>
            <p className="whitespace-pre-wrap mb-6">{open.description}</p>

            <input value={name} onChange={e=>setName(e.target.value)} placeholder="Your name / handle"
              className="w-full border rounded-md px-3 py-2 mb-3" />
            <input value={flag} onChange={e=>setFlag(e.target.value)} placeholder="Enter flag"
              className="w-full border rounded-md px-3 py-2 mb-4" />
            <button onClick={submit}
              className="w-full bg-blue-600 text-white rounded-md py-2 hover:bg-blue-700">Submit</button>
            {result && <p className="mt-4 text-center font-semibold">{result}</p>}
          </div>
        </div>
      )}
    </div>
  );
}