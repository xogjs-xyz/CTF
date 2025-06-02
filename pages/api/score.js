 import scoreboard from '../../lib/scoreboard';

 export default function handler(req, res) {
   res.status(200).json(scoreboard);
}
