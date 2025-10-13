import React from 'react'

export default function SummaryCard({title, value, delta, children}){
  return (
    <div className="bg-white p-4 rounded-lg shadow-sm border">
      <div className="flex items-center justify-between">
        <div>
          <div className="text-sm text-slate-500">{title}</div>
          <div className="text-2xl font-semibold">{value}</div>
        </div>
        {children}
      </div>
      {delta && <div className={`text-sm mt-2 ${delta.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>{delta}</div>}
    </div>
  )
}