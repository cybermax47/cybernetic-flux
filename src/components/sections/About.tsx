import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Shield, Code, Lock, Award, Users, Clock } from 'lucide-react';
import cyberPortrait from '@/assets/cyber-portrait.jpg';

const About = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const tabs = [
    { id: 'overview', label: 'OVERVIEW', icon: Shield },
    { id: 'experience', label: 'EXPERIENCE', icon: Clock },
    { id: 'certifications', label: 'CERTIFICATIONS', icon: Award },
  ];

  const certifications = [
    { name: 'OSCP', fullName: 'Offensive Security Certified Professional', year: '2020' },
    { name: 'CEH', fullName: 'Certified Ethical Hacker', year: '2019' },
    { name: 'CISSP', fullName: 'Certified Information Systems Security Professional', year: '2021' },
    { name: 'Security+', fullName: 'CompTIA Security+', year: '2018' },
    { name: 'GCIH', fullName: 'GIAC Certified Incident Handler', year: '2022' },
    { name: 'OSWE', fullName: 'Offensive Security Web Expert', year: '2023' },
  ];

  const experiences = [
    {
      title: 'Senior Penetration Tester',
      company: 'CyberDefense Corp',
      period: '2021 - Present',
      description: 'Lead red team operations and advanced persistent threat simulations for Fortune 500 clients.',
    },
    {
      title: 'Security Consultant',
      company: 'SecureNet Solutions',
      period: '2019 - 2021',
      description: 'Conducted comprehensive security assessments and vulnerability management for enterprise clients.',
    },
    {
      title: 'Cybersecurity Analyst',
      company: 'TechGuard Inc',
      period: '2017 - 2019',
      description: 'Specialized in threat hunting, incident response, and security tool development.',
    },
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            <span className="glitch" data-text="ABOUT CYBERGUARDIAN">
              ABOUT CYBERGUARDIAN
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Transforming digital landscapes through ethical hacking and advanced security solutions
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12 items-start">
          {/* Profile Image */}
          <div className="lg:col-span-1">
            <Card className="cyber-border hover:glow-primary transition-all duration-300">
              <CardContent className="p-6">
                <div className="aspect-square overflow-hidden rounded-lg mb-6">
                  <img
                    src={cyberPortrait}
                    alt="CyberGuardian Profile"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-primary mb-2">CyberGuardian</h3>
                  <p className="text-muted-foreground mb-4">Elite Security Professional</p>
                  <div className="flex justify-center space-x-4 text-sm">
                    <div className="flex items-center space-x-1">
                      <Users size={16} className="text-primary" />
                      <span>500+ Clients</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Shield size={16} className="text-secondary" />
                      <span>8+ Years</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Content Area */}
          <div className="lg:col-span-2">
            {/* Tab Navigation */}
            <div className="flex space-x-4 mb-8 border-b border-primary/20">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center space-x-2 px-4 py-3 font-mono text-sm transition-all duration-300 border-b-2 ${
                      activeTab === tab.id
                        ? 'border-primary text-primary'
                        : 'border-transparent text-muted-foreground hover:text-primary'
                    }`}
                  >
                    <Icon size={18} />
                    <span>{tab.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Tab Content */}
            <div className="space-y-6">
              {activeTab === 'overview' && (
                <div className="space-y-6">
                  <Card className="cyber-border">
                    <CardContent className="p-6">
                      <h4 className="text-xl font-bold text-primary mb-4 flex items-center">
                        <Shield className="mr-2" size={20} />
                        Mission Statement
                      </h4>
                      <p className="text-foreground leading-relaxed mb-4">
                        As a seasoned cybersecurity professional with over 8 years of experience, I specialize in 
                        identifying and mitigating advanced threats through ethical hacking methodologies. My expertise 
                        spans penetration testing, red team operations, and secure software development.
                      </p>
                      <p className="text-muted-foreground">
                        I'm passionate about bridging the gap between offensive and defensive security, 
                        helping organizations build resilient digital infrastructures that can withstand 
                        evolving cyber threats.
                      </p>
                    </CardContent>
                  </Card>

                  <div className="grid md:grid-cols-2 gap-6">
                    <Card className="cyber-border hover:glow-secondary transition-all duration-300">
                      <CardContent className="p-6">
                        <h4 className="text-lg font-bold text-secondary mb-3 flex items-center">
                          <Code className="mr-2" size={18} />
                          Development Skills
                        </h4>
                        <div className="space-y-2">
                          <Badge variant="outline" className="mr-2">Python</Badge>
                          <Badge variant="outline" className="mr-2">JavaScript</Badge>
                          <Badge variant="outline" className="mr-2">Go</Badge>
                          <Badge variant="outline" className="mr-2">Rust</Badge>
                          <Badge variant="outline" className="mr-2">C++</Badge>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="cyber-border hover:glow-accent transition-all duration-300">
                      <CardContent className="p-6">
                        <h4 className="text-lg font-bold text-accent mb-3 flex items-center">
                          <Lock className="mr-2" size={18} />
                          Security Tools
                        </h4>
                        <div className="space-y-2">
                          <Badge variant="outline" className="mr-2">Metasploit</Badge>
                          <Badge variant="outline" className="mr-2">Burp Suite</Badge>
                          <Badge variant="outline" className="mr-2">Nmap</Badge>
                          <Badge variant="outline" className="mr-2">Wireshark</Badge>
                          <Badge variant="outline" className="mr-2">Kali Linux</Badge>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              )}

              {activeTab === 'experience' && (
                <div className="space-y-6">
                  {experiences.map((exp, index) => (
                    <Card key={index} className="cyber-border hover:glow-primary transition-all duration-300">
                      <CardContent className="p-6">
                        <div className="flex justify-between items-start mb-3">
                          <div>
                            <h4 className="text-xl font-bold text-primary">{exp.title}</h4>
                            <p className="text-secondary font-mono">{exp.company}</p>
                          </div>
                          <Badge variant="outline" className="font-mono">
                            {exp.period}
                          </Badge>
                        </div>
                        <p className="text-muted-foreground">{exp.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              )}

              {activeTab === 'certifications' && (
                <div className="grid md:grid-cols-2 gap-4">
                  {certifications.map((cert, index) => (
                    <Card key={index} className="cyber-border hover:glow-primary transition-all duration-300">
                      <CardContent className="p-4">
                        <div className="flex justify-between items-center mb-2">
                          <h4 className="text-lg font-bold text-primary">{cert.name}</h4>
                          <Badge variant="outline" className="font-mono text-xs">
                            {cert.year}
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">{cert.fullName}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;