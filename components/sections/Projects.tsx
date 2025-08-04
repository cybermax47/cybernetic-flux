import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github, Shield, Code, Users, Calendar } from 'lucide-react';
import projectPentest from '@/assets/project-pentest.jpg';
import projectWebapp from '@/assets/project-webapp.jpg';
import projectRedteam from '@/assets/project-redteam.jpg';

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'ALL PROJECTS' },
    { id: 'pentest', label: 'PENETRATION TESTING' },
    { id: 'development', label: 'SECURE DEVELOPMENT' },
    { id: 'redteam', label: 'RED TEAM OPS' },
  ];

  const projects = [
    {
      id: 1,
      title: 'Enterprise Network Penetration Test',
      category: 'pentest',
      description: 'Comprehensive security assessment of a Fortune 500 company\'s network infrastructure, identifying 50+ critical vulnerabilities and providing detailed remediation strategies.',
      image: projectPentest,
      technologies: ['Metasploit', 'Nmap', 'Burp Suite', 'Cobalt Strike', 'BloodHound'],
      features: [
        'Network reconnaissance and enumeration',
        'Custom exploit development',
        'Active Directory privilege escalation',
        'Comprehensive vulnerability report',
        'Executive summary with risk ratings'
      ],
      timeline: '6 weeks',
      team: '4 specialists',
      impact: '99% vulnerability remediation',
      status: 'completed',
      confidential: true
    },
    {
      id: 2,
      title: 'Secure Banking Application',
      category: 'development',
      description: 'Full-stack development of a secure banking application with advanced authentication, encryption, and fraud detection capabilities.',
      image: projectWebapp,
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Docker', 'AWS KMS'],
      features: [
        'Multi-factor authentication system',
        'End-to-end encryption implementation',
        'Real-time fraud detection',
        'OWASP security compliance',
        'Secure API development'
      ],
      timeline: '12 weeks',
      team: '6 developers',
      impact: 'Zero security incidents',
      status: 'completed',
      github: 'https://github.com/cyberguardian/secure-banking',
      demo: 'https://secure-banking-demo.com'
    },
    {
      id: 3,
      title: 'Advanced Red Team Campaign',
      category: 'redteam',
      description: 'Multi-phase red team engagement simulating advanced persistent threat (APT) scenarios for critical infrastructure assessment.',
      image: projectRedteam,
      technologies: ['Cobalt Strike', 'Empire', 'Mimikatz', 'PowerShell', 'Custom C2'],
      features: [
        'Social engineering campaigns',
        'Physical security assessment',
        'Command and control infrastructure',
        'Lateral movement techniques',
        'Data exfiltration simulation'
      ],
      timeline: '8 weeks',
      team: '5 operators',
      impact: '100% initial access achieved',
      status: 'completed',
      confidential: true
    },
    {
      id: 4,
      title: 'Cloud Security Automation Platform',
      category: 'development',
      description: 'Automated cloud security monitoring and compliance platform for multi-cloud environments with real-time threat detection.',
      image: projectWebapp,
      technologies: ['Python', 'AWS', 'Azure', 'Terraform', 'Kubernetes'],
      features: [
        'Multi-cloud security scanning',
        'Automated compliance reporting',
        'Real-time threat detection',
        'Infrastructure as Code security',
        'Security metrics dashboard'
      ],
      timeline: '16 weeks',
      team: '8 engineers',
      impact: '90% faster security audits',
      status: 'ongoing',
      github: 'https://github.com/cyberguardian/cloud-security'
    },
    {
      id: 5,
      title: 'Mobile Application Security Audit',
      category: 'pentest',
      description: 'Comprehensive security assessment of iOS and Android applications for a major fintech company, focusing on data protection and secure communication.',
      image: projectPentest,
      technologies: ['OWASP Mobile', 'Frida', 'MobSF', 'Burp Suite', 'Jadx'],
      features: [
        'Static and dynamic analysis',
        'Runtime manipulation testing',
        'Secure storage evaluation',
        'Network communication audit',
        'Compliance verification (PCI DSS)'
      ],
      timeline: '4 weeks',
      team: '3 specialists',
      impact: '25 critical issues resolved',
      status: 'completed',
      confidential: true
    },
    {
      id: 6,
      title: 'Vulnerability Management System',
      category: 'development',
      description: 'Enterprise-grade vulnerability management platform with automated scanning, prioritization, and remediation tracking capabilities.',
      image: projectWebapp,
      technologies: ['Vue.js', 'Django', 'Redis', 'Elasticsearch', 'Docker'],
      features: [
        'Automated vulnerability scanning',
        'Risk-based prioritization',
        'Integration with security tools',
        'Remediation workflow management',
        'Executive reporting dashboard'
      ],
      timeline: '20 weeks',
      team: '10 developers',
      impact: '70% faster remediation',
      status: 'completed',
      demo: 'https://vuln-mgmt-demo.com'
    }
  ];

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            <span className="glitch" data-text="SECURITY PROJECTS">
              SECURITY PROJECTS
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real-world cybersecurity engagements showcasing advanced technical expertise
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={selectedCategory === category.id ? "default" : "outline"}
              onClick={() => setSelectedCategory(category.id)}
              className={`font-mono tracking-wider cyber-border transition-all duration-300 ${
                selectedCategory === category.id ? 'glow-primary' : 'hover:glow-secondary'
              }`}
            >
              {category.label}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <Card 
              key={project.id} 
              className="cyber-border hover:glow-primary transition-all duration-300 hover-lift overflow-hidden"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-bold text-foreground">{project.title}</h3>
                  <div className="flex items-center space-x-2">
                    {project.status === 'completed' && (
                      <Badge className="bg-primary/20 text-primary border-primary/40">
                        COMPLETED
                      </Badge>
                    )}
                    {project.status === 'ongoing' && (
                      <Badge className="bg-secondary/20 text-secondary border-secondary/40">
                        ONGOING
                      </Badge>
                    )}
                    {project.confidential && (
                      <Badge className="bg-accent/20 text-accent border-accent/40">
                        CONFIDENTIAL
                      </Badge>
                    )}
                  </div>
                </div>

                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Project Stats */}
                <div className="grid grid-cols-3 gap-4 mb-4 text-center">
                  <div className="bg-card/50 rounded-lg p-2">
                    <Calendar size={16} className="mx-auto mb-1 text-primary" />
                    <div className="text-xs font-mono text-muted-foreground">Timeline</div>
                    <div className="text-xs font-bold text-foreground">{project.timeline}</div>
                  </div>
                  <div className="bg-card/50 rounded-lg p-2">
                    <Users size={16} className="mx-auto mb-1 text-secondary" />
                    <div className="text-xs font-mono text-muted-foreground">Team</div>
                    <div className="text-xs font-bold text-foreground">{project.team}</div>
                  </div>
                  <div className="bg-card/50 rounded-lg p-2">
                    <Shield size={16} className="mx-auto mb-1 text-accent" />
                    <div className="text-xs font-mono text-muted-foreground">Impact</div>
                    <div className="text-xs font-bold text-foreground">{project.impact}</div>
                  </div>
                </div>

                {/* Technologies */}
                <div className="mb-4">
                  <h4 className="text-sm font-bold text-foreground mb-2">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.map((tech, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Key Features */}
                <div className="mb-6">
                  <h4 className="text-sm font-bold text-foreground mb-2">Key Features:</h4>
                  <ul className="text-xs text-muted-foreground space-y-1">
                    {project.features.slice(0, 3).map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <div className="w-1 h-1 bg-primary rounded-full mr-2"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-3">
                  {project.github && (
                    <Button
                      variant="outline"
                      size="sm"
                      className="cyber-border hover:glow-secondary transition-all duration-300 flex-1"
                    >
                      <Github size={16} className="mr-2" />
                      Code
                    </Button>
                  )}
                  {project.demo && (
                    <Button
                      variant="outline"
                      size="sm"
                      className="cyber-border hover:glow-primary transition-all duration-300 flex-1"
                    >
                      <ExternalLink size={16} className="mr-2" />
                      Demo
                    </Button>
                  )}
                  {project.confidential && (
                    <Button
                      variant="outline"
                      size="sm"
                      className="cyber-border hover:glow-accent transition-all duration-300 flex-1"
                      disabled
                    >
                      <Shield size={16} className="mr-2" />
                      NDA
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <Card className="cyber-border max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-primary mb-4">
                Ready to Secure Your Organization?
              </h3>
              <p className="text-muted-foreground mb-6">
                Get a comprehensive security assessment tailored to your specific needs and threat landscape.
              </p>
              <Button 
                size="lg" 
                className="cyber-border hover:glow-primary transition-all duration-300 px-8"
              >
                Request Security Consultation
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Projects;