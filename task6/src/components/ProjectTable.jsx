import React from 'react'

function StatusPill({ status }){
  const map = {
    'Completed': 'bg-green-100 text-green-800',
    'In Progress': 'bg-yellow-100 text-yellow-800',
    'Pending': 'bg-slate-100 text-slate-700'
  }
  return <span className={`px-2 py-1 rounded-md text-xs ${map[status] || 'bg-slate-100'}`}>{status}</span>
}

export default function ProjectTable({ projects = [] }){
  return (
    <div className="bg-white rounded-lg border overflow-auto">
      <table className="min-w-full divide-y">
        <thead className="bg-slate-50">
          <tr>
            <th className="px-4 py-2 text-left text-sm">Project</th>
            <th className="px-4 py-2 text-left text-sm">Status</th>
            <th className="px-4 py-2 text-left text-sm">Deadline</th>
            <th className="px-4 py-2 text-left text-sm">Actions</th>
          </tr>
        </thead>
        <tbody className="divide-y">
          {projects.map(p => (
            <tr key={p.id}>
              <td className="px-4 py-3 text-sm">{p.name}</td>
              <td className="px-4 py-3"><StatusPill status={p.status} /></td>
              <td className="px-4 py-3 text-sm">{p.deadline}</td>
              <td className="px-4 py-3 text-sm">
                <button className="text-sm text-blue-600 hover:underline">View</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}