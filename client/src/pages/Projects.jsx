import React from 'react';
const projects = [
  { title: 'Podcast Streaming Service', desc: 'React + MongoDB + Spotify API', link: '#' },
  { title: 'Stock Price Predictor', desc: 'Flask + Deep Learning', link: '#' }
];

export default function Projects(){
  return (
    <section>
      <h2>Projects</h2>
      {projects.map((p,i)=>(
        <article key={i} style={{marginBottom:12}}>
          <h3>{p.title}</h3>
          <p>{p.desc}</p>
          <a href={p.link}>View</a>
        </article>
      ))}
    </section>
  );
}
