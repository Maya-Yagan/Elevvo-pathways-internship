import React from 'react'
import { NavLink } from 'react-router-dom'
import { Home, FileText, User, X } from 'lucide-react'

const links = [
  { to: '/overview', label: 'Overview', icon: <Home size={18} /> },
  { to: '/projects', label: 'Projects', icon: <FileText size={18} /> },
  { to: '/profile', label: 'Profile', icon: <User size={18} /> },
]

export default function Sidebar({ isOpen, onClose }) {
  return (
    <>
      {isOpen && (
        <div
          onClick={onClose}
          className="fixed inset-0 bg-black/40 z-30 md:hidden"
        />
      )}

      <aside
        className={`fixed md:static z-40 top-0 left-0 h-full w-64 bg-gradient-to-b to-purple-400 from-indigo-800 border-r transform transition-transform duration-300
          flex flex-col justify-between
          ${isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
        `}
      >
        <div>
          <div className="h-16 flex items-center justify-between px-4 border-b">
            <span className="text-lg text-white font-semibold">FreeDash</span>
            <button onClick={onClose} className="md:hidden text-white">
              <X />
            </button>
          </div>

          <nav className="p-4">
            <ul className="space-y-2">
              {links.map((l) => (
                <li key={l.to}>
                  <NavLink
                    to={l.to}
                    onClick={onClose}
                    className={({ isActive }) =>
                      'flex items-center gap-3 p-2 rounded-md hover:bg-purple-300 ' +
                      (isActive ? 'bg-purple-400 font-medium' : 'text-white')
                    }
                  >
                    {l.icon}
                    <span>{l.label}</span>
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="p-4 border-t">
          <div className="text-xs text-white">Version 1.0</div>
        </div>
      </aside>
    </>
  )
}