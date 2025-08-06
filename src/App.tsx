import MatrixRain from '@/components/effects/MatrixRain';
import Navigation from '@/components/layout/Navigation';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Skills from '@/components/sections/Skills';
import Projects from '@/components/sections/Projects';
import Contact from '@/components/sections/Contact';
import Terminal from '@/components/interactive/Terminal';
import { Providers } from '@/providers';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";

export default function App() {
  return (
    <Providers>
      <TooltipProvider>
        <div className="min-h-screen bg-background text-foreground relative overflow-x-hidden">
          {/* Matrix Rain Background Effect */}
          <MatrixRain />
          
          {/* Navigation */}
          <Navigation />
          
          {/* Main Content */}
          <main>
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Contact />
          </main>
          
          {/* Interactive Terminal */}
          <Terminal />
          
          {/* Footer */}
          <footer className="bg-card/50 border-t border-primary/20 py-8">
            <div className="container mx-auto px-6 text-center">
              <p className="text-muted-foreground font-mono text-sm">
                © 2024 CyberGuardian. All rights reserved. | 
                <span className="text-primary"> Securing the digital frontier.</span>
              </p>
            </div>
          </footer>
        </div>
        <Toaster />
        <Sonner />
      </TooltipProvider>
    </Providers>
  );
}