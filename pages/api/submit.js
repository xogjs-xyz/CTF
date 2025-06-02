import challenges from '../../../data/challenges';

const FLAGS = {
  unlock: '0x5c6',
  speedometer: '0x36a',      // TODO: replace with real flag if different
  'simulation-vin': 'SIMVIN', // TODO: replace with actual VIN string
};

let scoreboard = []; // in-memory

export default function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();

  const { flag, name, problemId } = req.body;
  if (!flag || !name || !problemId) return res.status(400).json({ message: 'Name, flag, and problemId required' });

  const correctFlag = FLAGS[problemId];
  if (!correctFlag) return res.status(400).json({ message: 'Unknown problem' });

  if (flag.trim().toLowerCase() !== correctFlag.toLowerCase())
    return res.status(200).json({ message: '❌ Incorrect flag' });

  let user = scoreboard.find(u=>u.name===name);
  if (!user) { user = { name, score: 0, solves: [] }; scoreboard.push(user); }

  if (!user.solves.includes(problemId)) {
    const problem = challenges.flatMap(c=>c.problems).find(p=>p.id===problemId);
    user.score += problem.points;
    user.solves.push(problemId);
  }

  scoreboard.sort((a,b)=>b.score - a.score);
  res.status(200).json({ message: '✅ Correct! Score updated.', board: scoreboard });
}