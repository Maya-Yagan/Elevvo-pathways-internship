import React, { useState } from 'react'

export default function Profile(){
  const [form, setForm] = useState({ name: 'Maya', email: 'maya@example.com', password: '' })

  function handleChange(e){
    setForm({...form, [e.target.name]: e.target.value})
  }

  function handleSave(e){
    e.preventDefault()
    alert('Saved (mock): ' + JSON.stringify({ name: form.name, email: form.email }))
  }

  return (
    <div className="max-w-2xl bg-white p-6 rounded-lg border">
      <h2 className="text-lg font-semibold mb-4">Profile Settings</h2>
      <form onSubmit={handleSave} className="space-y-4">
        <div>
          <label className="block text-sm text-slate-600">Name</label>
          <input name="name" value={form.name} onChange={handleChange}
            className="w-full mt-1 p-2 border rounded-md" />
        </div>

        <div>
          <label className="block text-sm text-slate-600">Email</label>
          <input name="email" value={form.email} onChange={handleChange}
            className="w-full mt-1 p-2 border rounded-md" />
        </div>

        <div>
          <label className="block text-sm text-slate-600">Password</label>
          <input name="password" value={form.password} onChange={handleChange} type="password"
            className="w-full mt-1 p-2 border rounded-md" />
        </div>

        <div className="flex items-center gap-3">
          <button className="bg-purple-500 text-white px-4 py-2 rounded-md">Save</button>
          <button type="button" className="px-4 py-2 border rounded-md">Cancel</button>
        </div>
      </form>
    </div>
  )
}