"use client"
import { Cell, Legend, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts"

type AnalyticsChartProps = {
  data: { status: string }[]
}

const COLORS = [
  "#0088FE", "#00C49F", "#FFBB28", "#FF8042",
  "#A28CFE", "#FF4F81", "#28C76F", "#FF9F43"
]

export default function AnalyticsChart({ data }: AnalyticsChartProps) {
  // Aggregate counts by status
  const statusCounts = data.reduce((acc, item) => {
    acc[item.status] = (acc[item.status] || 0) + 1
    return acc
  }, {} as Record<string, number>)

  const chartData = Object.entries(statusCounts).map(([status, count]) => ({
    name: status,
    value: count,
  }))

  return (
    <div className="w-full h-[400px] bg-background rounded-xl  shadow-md">
      <h2 className="text-lg font-semibold mb-4">Parcel Status Overview: {data.length}</h2>
      <ResponsiveContainer  width="100%" height="100%">
        <PieChart>
          <Pie
            data={chartData}
            cx="50%"
            cy="50%"
            labelLine={false}
            outerRadius={window.innerWidth < 640 ? 90 : 140} 
            dataKey="value"
            label={({ name, value }) => `${name}: ${value}`}
          >
            {chartData.map((_, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          
            <Tooltip />
            <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  )
}
