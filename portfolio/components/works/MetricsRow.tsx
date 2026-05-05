import type { Metric } from "@/data/works";

type Props = {
  metrics: Metric[];
};

export default function MetricsRow({ metrics }: Props) {
  if (metrics.length === 0) return null;

  return (
    <div className="py-12 px-6 max-w-6xl mx-auto">
      <h3 className="text-lg font-black mb-6">
        Current vs. Expected Traffic: Measuring the Impact
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {metrics.map((m) => (
          <div key={m.label} className="border border-gray-200 p-5 rounded-sm">
            <p className="text-xs text-gray-500 mb-4">{m.label}</p>
            <div className="flex gap-6">
              <div>
                <p className="text-xs text-gray-400">Current Score</p>
                <p className="text-sm font-bold mt-1">{m.current}</p>
              </div>
              <div>
                <p className="text-xs text-gray-400">Expected Score</p>
                <p className="text-sm font-bold mt-1">{m.expected}</p>
              </div>
            </div>
            <p className="text-xs text-green-600 font-semibold mt-3">{m.change}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
