import { Bar, BarChart, Cell, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

export function AnalyticsBarChart({ data }: { data: { role: string }[] }) {
  const statusCounts = data.reduce((acc, item) => {
    acc[item.role] = (acc[item.role] || 0) + 1
    return acc
  }, {} as Record<string, number>)

  const chartData = Object.entries(statusCounts).map(([role, count]) => ({
    name: role,
    count,
  }))
console.log(chartData, 'chartData')
  const ROLE_COLORS: Record<string, string> = {
    SUPER_ADMIN: "#FF4F81",
    ADMIN: "#0088FE",
    SENDER: "#00C49F",
    RECEIVER: "#FFBB28",
    RIDER: "#A28CFE",
  }

  return (
    <div className="w-full h-[400px] bg-background rounded-xl shadow-md">
      <h2 className="text-lg font-semibold mb-4">All User Role Distribution: {data.length}</h2>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={chartData}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="count" radius={[6, 6, 0, 0]}>
            {chartData.map((entry, index) => (
              <Cell 
                key={`cell-${index}`} 
                fill={ROLE_COLORS[entry.name] || "#8884d8"} 
              />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}
