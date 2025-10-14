import React from 'react'
import SummaryCard from '../components/SummaryCard'
import ActivityList from '../components/ActivityList'
import EarningsChart from '../components/EarningsChart'
import { summary, activities } from '../data/mock'

export default function Overview(){
  return (
    <div className="grid gap-6 lg:grid-cols-3">
      <div className="lg:col-span-2 space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <SummaryCard title="Total Projects" value={summary.totalProjects} delta="+2 since last month" />
          <SummaryCard title="Earnings (this month)" value={`$${summary.earningsMonth}`} delta="+12%" />
          <SummaryCard title="Tasks Due" value={summary.tasksDue} delta="-1 since last week" />
        </div>

        <div className="bg-white p-4 rounded-lg border shadow-sm">
          <h2 className="font-semibold mb-4">Monthly Earnings</h2>
          <EarningsChart />
        </div>

        <div className="bg-white p-4 rounded-lg border shadow-sm">
          <h2 className="font-semibold mb-4">Recent Activity</h2>
          <ActivityList items={activities} />
        </div>
      </div>

      <aside className="space-y-6">
        <div className="bg-white p-4 rounded-lg border shadow-sm">
          <h3 className="font-semibold mb-2">Quick Stats</h3>
          <ul className="text-sm text-slate-600 space-y-2">
            <li>Open proposals: 4</li>
            <li>Unread messages: 2</li>
            <li>Pending invoices: 1</li>
          </ul>
        </div>

        <div className="bg-white p-4 rounded-lg border shadow-sm">
          <h3 className="font-semibold mb-2">Upcoming</h3>
          <div className="text-sm">No deadlines in the next 48 hours.</div>
        </div>
      </aside>
    </div>
  )
}