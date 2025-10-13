import React from 'react'
import { Bell } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Topbar({ onMenuClick }) {
  return (
    <header className="h-16 border-b bg-gradient-to-r to-purple-400 from-indigo-800 flex items-center justify-between px-4 md:px-6">
      <div className="flex items-center gap-4">
        <button
          onClick={onMenuClick}
          className="md:hidden p-2 text-white rounded-md hover:bg-purple-300"
        >
          ☰
        </button>
      </div>

      <div className="flex items-center gap-4">
        <button className="p-2 rounded-md hover:bg-purple-300">
          <Bell />
        </button>
        <Link to="/profile" className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-slate-200" />
          <div className="hidden sm:block text-sm text-white">
            <div>Maya</div>
            <div className="text-xs text-white">Freelancer</div>
          </div>
        </Link>
      </div>
    </header>
  )
}