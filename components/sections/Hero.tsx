import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronDown, Shield, Code, Lock } from 'lucide-react';

const Hero = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  const roles = [
    'Ethical Hacker',
    'Penetration Tester',
    'Security Developer',
    'Red Team Specialist',
    'OSCP Certified'
  ];

  useEffect(() => {
    const role = roles[currentRole];
    const isComplete = displayText === role;
    const isAtStart = displayText === '';

    if (isComplete && !isDeleting) {
      setTimeout(() => setIsDeleting(true), 2000);
    } else if (isAtStart && isDeleting) {
      setIsDeleting(false);
      setCurrentRole((prev) => (prev + 1) % roles.length);
    } else {
      const timeout = setTimeout(() => {
        setDisplayText(prev => {
          if (isDeleting) {
            return role.substring(0, prev.length - 1);
          } else {
            return role.substring(0, prev.length + 1);
          }
        });
      }, isDeleting ? 50 : 100);

      return () => clearTimeout(timeout);
    }
  }, [displayText, isDeleting, currentRole, roles]);

  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,65,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,65,0.1)_1px,transparent_1px)] bg-[size:20px_20px] animate-pulse"></div>
      </div>

      {/* Floating Icons */}
      <div className="absolute top-20 left-10 text-primary/30 animate-bounce">
        <Shield size={40} />
      </div>
      <div className="absolute top-32 right-20 text-secondary/30 animate-pulse">
        <Code size={35} />
      </div>
      <div className="absolute bottom-32 left-16 text-accent/30 animate-bounce delay-1000">
        <Lock size={30} />
      </div>

      <div className="container mx-auto px-6 text-center z-10">
        {/* Main Content */}
        <div className="max-w-4xl mx-auto">
          {/* Welcome Message */}
          <div className="text-primary font-mono text-sm md:text-base mb-6 tracking-wider">
            [SYSTEM ACCESS GRANTED]
          </div>

          {/* Name */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-foreground">
            <span className="glitch" data-text="CYBERGUARDIAN">
              CYBERGUARDIAN
            </span>
          </h1>

          {/* Dynamic Role */}
          <div className="text-xl md:text-3xl lg:text-4xl mb-8 h-16 flex items-center justify-center">
            <span className="text-primary font-mono">
              {displayText}
              <span className="cursor animate-pulse">|</span>
            </span>
          </div>

          {/* Description */}
          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            Elite cybersecurity professional with 8+ years of experience in{' '}
            <span className="text-primary">penetration testing</span>,{' '}
            <span className="text-secondary">vulnerability assessment</span>, and{' '}
            <span className="text-accent">secure development</span>.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button
              size="lg"
              className="cyber-border hover:glow-primary transition-all duration-300 px-8 py-6 text-lg font-mono tracking-wider"
              onClick={() => scrollToAbout()}
            >
              EXPLORE PORTFOLIO
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="cyber-border hover:glow-secondary transition-all duration-300 px-8 py-6 text-lg font-mono tracking-wider"
            >
              VIEW PROJECTS
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-primary mb-2">8+</div>
              <div className="text-sm text-muted-foreground font-mono">YEARS EXP</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-secondary mb-2">500+</div>
              <div className="text-sm text-muted-foreground font-mono">PENTESTS</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-accent mb-2">1000+</div>
              <div className="text-sm text-muted-foreground font-mono">VULNS FOUND</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-primary mb-2">100%</div>
              <div className="text-sm text-muted-foreground font-mono">SUCCESS RATE</div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button
            onClick={scrollToAbout}
            className="text-primary hover:text-primary-glow transition-colors duration-300"
          >
            <ChevronDown size={32} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;