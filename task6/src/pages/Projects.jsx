import React, { useState } from 'react'
import ProjectTable from '../components/ProjectTable'
import { projects as mockProjects } from '../data/mock'

export default function Projects(){
  const [projects] = useState(mockProjects)

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold">Projects</h2>
        <button className="bg-purple-400 text-white px-3 py-1 rounded-md">New Project</button>
      </div>

      <ProjectTable projects={projects} />
    </div>
  )
}