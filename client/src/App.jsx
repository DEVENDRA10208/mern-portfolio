import React from 'react';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

export default function App() {
  const [route, setRoute] = React.useState('home');
  return (
    <div>
      <header style={{padding:20, borderBottom:'1px solid #ddd'}}>
        <h1 style={{margin:0}}>My Portfolio</h1>
        <nav style={{marginTop:8}}>
          <button onClick={()=>setRoute('home')}>Home</button>
          <button onClick={()=>setRoute('projects')}>Projects</button>
          <button onClick={()=>setRoute('contact')}>Contact</button>
        </nav>
      </header>
      <main style={{padding:20}}>
        {route === 'home' && <Home />}
        {route === 'projects' && <Projects />}
        {route === 'contact' && <Contact />}
      </main>
      <footer style={{padding:20, borderTop:'1px solid #ddd', textAlign:'center'}}>
        © {new Date().getFullYear()} — Your Name
      </footer>
    </div>
  );
}
