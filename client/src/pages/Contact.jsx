import React, { useState } from 'react';

export default function Contact(){
  const [form, setForm] = useState({name:'',email:'',message:''});
  const [status, setStatus] = useState('');

  async function send(e){
    e.preventDefault();
    setStatus('sending...');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify(form)
      });
      const data = await res.json();
      if (res.ok) {
        setStatus('Message sent — thank you!');
        setForm({name:'',email:'',message:''});
      } else {
        setStatus(data.error || 'Failed to send');
      }
    } catch (err) {
      setStatus('Network error');
    }
  }

  return (
    <section>
      <h2>Contact</h2>
      <form onSubmit={send} style={{maxWidth:480}}>
        <input value={form.name} onChange={e=>setForm({...form,name:e.target.value})} placeholder="Name" required />
        <br />
        <input value={form.email} onChange={e=>setForm({...form,email:e.target.value})} placeholder="Email" type="email" required />
        <br />
        <textarea value={form.message} onChange={e=>setForm({...form,message:e.target.value})} placeholder="Message" required />
        <br />
        <button type="submit">Send</button>
      </form>
      <p>{status}</p>
    </section>
  );
}
