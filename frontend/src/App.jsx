import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PhoneMockup from './components/PhoneMockup';

function App() {
  return (
    <div className="min-h-screen bg-olive-50 flex flex-col font-sans overflow-x-hidden relative">
      {/* Background radial gradient for premium depth */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,_rgba(163,198,68,0.08)_0%,_transparent_70%)] pointer-events-none"></div>
      
      <Navbar />
      <main className="flex-grow flex flex-col items-center w-full max-w-[1400px] mx-auto pb-24 relative z-10">
        <Hero />
        <PhoneMockup />
      </main>
      
      {/* Decorative gradient overlay at the bottom if needed to match the soft fade */}
      <div className="fixed bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-olive-50 to-transparent pointer-events-none z-50"></div>
    </div>
  );
}

export default App;
