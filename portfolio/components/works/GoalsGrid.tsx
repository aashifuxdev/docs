import type { Goal } from "@/data/works";

type Props = {
  userGoals: Goal[];
  businessGoals: Goal[];
};

function GoalCard({ goal }: { goal: Goal }) {
  return (
    <div className="bg-gray-50 p-5 rounded-sm">
      <p className="text-xs text-gray-400 mb-2">{goal.number}</p>
      <p className="text-sm font-bold mb-2">{goal.title}</p>
      <p className="text-xs text-gray-500 leading-relaxed">{goal.description}</p>
    </div>
  );
}

export default function GoalsGrid({ userGoals, businessGoals }: Props) {
  if (userGoals.length === 0 && businessGoals.length === 0) return null;

  return (
    <div className="py-12 px-6 max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
      {userGoals.length > 0 && (
        <div>
          <h3 className="text-lg font-black mb-6">User Goals</h3>
          <div className="flex flex-col gap-4">
            {userGoals.map((g) => (
              <GoalCard key={g.number} goal={g} />
            ))}
          </div>
        </div>
      )}

      {businessGoals.length > 0 && (
        <div>
          <h3 className="text-lg font-black mb-6">Business Goals</h3>
          <div className="flex flex-col gap-4">
            {businessGoals.map((g) => (
              <GoalCard key={g.number} goal={g} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
