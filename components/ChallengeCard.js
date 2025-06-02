export default function ChallengeCard({ title, points, onClick }) {
  return (
    <div onClick={onClick}
      className="bg-gray-900 text-white rounded-xl shadow-md hover:shadow-lg w-60 p-6 cursor-pointer flex flex-col items-center transition">
      <h3 className="text-lg font-semibold text-center">{title}</h3>
      <span className="mt-4 text-sm">{points} pts</span>
    </div>
  );
}