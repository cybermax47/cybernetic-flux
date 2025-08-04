import { useState, useEffect, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Shield, Code, Database, Network, Lock, Terminal } from 'lucide-react';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const skillCategories = [
    {
      title: 'Penetration Testing',
      icon: Shield,
      color: 'primary',
      skills: [
        { name: 'Web Application Testing', level: 95, description: 'OWASP Top 10, Custom Exploits' },
        { name: 'Network Penetration', level: 90, description: 'Internal/External Assessments' },
        { name: 'Mobile Security', level: 85, description: 'iOS/Android App Testing' },
        { name: 'Social Engineering', level: 88, description: 'Phishing, Physical Security' },
      ]
    },
    {
      title: 'Development & Scripting',
      icon: Code,
      color: 'secondary',
      skills: [
        { name: 'Python', level: 95, description: 'Automation, Exploit Development' },
        { name: 'JavaScript/TypeScript', level: 90, description: 'Full-stack Development' },
        { name: 'Go', level: 80, description: 'High-performance Tools' },
        { name: 'Bash/PowerShell', level: 92, description: 'System Administration' },
      ]
    },
    {
      title: 'Infrastructure Security',
      icon: Network,
      color: 'accent',
      skills: [
        { name: 'Cloud Security (AWS/Azure)', level: 88, description: 'Container & Serverless Security' },
        { name: 'Network Security', level: 93, description: 'Firewalls, IDS/IPS, VPN' },
        { name: 'Active Directory', level: 87, description: 'Domain Enumeration & Exploitation' },
        { name: 'Kubernetes Security', level: 82, description: 'Pod Security & RBAC' },
      ]
    }
  ];

  const tools = [
    { name: 'Metasploit Framework', category: 'Exploitation', level: 95 },
    { name: 'Burp Suite Professional', category: 'Web Testing', level: 98 },
    { name: 'Nmap', category: 'Network Discovery', level: 95 },
    { name: 'Wireshark', category: 'Traffic Analysis', level: 90 },
    { name: 'OWASP ZAP', category: 'Security Testing', level: 88 },
    { name: 'Nessus', category: 'Vulnerability Scanning', level: 92 },
    { name: 'Cobalt Strike', category: 'Red Team', level: 85 },
    { name: 'BloodHound', category: 'AD Enumeration', level: 90 },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="py-20 bg-card/20" ref={sectionRef}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            <span className="glitch" data-text="TECHNICAL ARSENAL">
              TECHNICAL ARSENAL
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Advanced cybersecurity skills forged through years of real-world engagements
          </p>
        </div>

        {/* Skill Categories */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => {
            const Icon = category.icon;
            return (
              <Card 
                key={categoryIndex} 
                className="cyber-border hover:glow-primary transition-all duration-300 hover-lift"
              >
                <CardContent className="p-6">
                  <div className="flex items-center mb-6">
                    <div className={`p-3 rounded-lg bg-${category.color}/20 mr-4`}>
                      <Icon className={`text-${category.color}`} size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-foreground">{category.title}</h3>
                  </div>
                  
                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="font-mono text-sm text-foreground">{skill.name}</span>
                          <span className={`text-${category.color} font-mono text-xs`}>
                            {skill.level}%
                          </span>
                        </div>
                        <Progress 
                          value={isVisible ? skill.level : 0} 
                          className="h-2 bg-muted"
                        />
                        <p className="text-xs text-muted-foreground">{skill.description}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Tools Matrix */}
        <Card className="cyber-border">
          <CardContent className="p-8">
            <div className="flex items-center mb-8">
              <Terminal className="text-primary mr-3" size={28} />
              <h3 className="text-2xl font-bold text-foreground">Security Tools Proficiency</h3>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {tools.map((tool, index) => (
                <div 
                  key={index}
                  className="bg-card/50 rounded-lg p-4 border border-primary/20 hover:border-primary/40 transition-all duration-300"
                >
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="font-mono text-sm font-bold text-foreground truncate">
                      {tool.name}
                    </h4>
                    <span className="text-primary font-mono text-xs">{tool.level}%</span>
                  </div>
                  <p className="text-xs text-muted-foreground mb-3">{tool.category}</p>
                  <Progress 
                    value={isVisible ? tool.level : 0} 
                    className="h-1.5 bg-muted"
                  />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Expertise Summary */}
        <div className="mt-16 grid md:grid-cols-3 gap-8 text-center">
          <div className="space-y-4">
            <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto">
              <Shield className="text-primary" size={32} />
            </div>
            <h4 className="text-xl font-bold text-primary">Offensive Security</h4>
            <p className="text-muted-foreground">
              Advanced penetration testing methodologies and exploit development
            </p>
          </div>
          
          <div className="space-y-4">
            <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mx-auto">
              <Database className="text-secondary" size={32} />
            </div>
            <h4 className="text-xl font-bold text-secondary">Secure Development</h4>
            <p className="text-muted-foreground">
              Building security-first applications with modern frameworks
            </p>
          </div>
          
          <div className="space-y-4">
            <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto">
              <Lock className="text-accent" size={32} />
            </div>
            <h4 className="text-xl font-bold text-accent">Risk Assessment</h4>
            <p className="text-muted-foreground">
              Comprehensive security audits and compliance frameworks
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;