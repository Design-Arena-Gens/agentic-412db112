export default function Page() {
  return (
    <main style={{display:'grid',placeItems:'center',minHeight:'100dvh',padding:'2rem'}}>
      <div style={{textAlign:'center'}}>
        <h1 style={{fontSize:'clamp(2rem,6vw,4rem)',margin:'0 0 1rem'}}>Agentic Next.js App</h1>
        <p style={{opacity:0.8,margin:0}}>Hello, world. Deployed to Vercel.</p>
      </div>
    </main>
  );
}
