import React from 'react'

export default function ActivityList({ items = [] }){
  return (
    <ul className="space-y-3">
      {items.map(a => (
        <li key={a.id} className="flex items-start gap-3">
          <div className="w-2.5 h-2.5 bg-slate-400 rounded-full mt-2" />
          <div>
            <div className="text-sm">{a.text}</div>
            <div className="text-xs text-slate-400">{a.time}</div>
          </div>
        </li>
      ))}
    </ul>
  )
}