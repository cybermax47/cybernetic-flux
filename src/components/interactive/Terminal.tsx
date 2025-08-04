import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

interface TerminalCommand {
  command: string;
  output: string[];
  timestamp?: string;
}

const Terminal = () => {
  const [commands, setCommands] = useState<TerminalCommand[]>([]);
  const [currentInput, setCurrentInput] = useState('');
  const [isMinimized, setIsMinimized] = useState(false);
  const terminalRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const availableCommands = {
    help: [
      'Available commands:',
      '  help      - Show this help message',
      '  about     - Display information about CyberGuardian',
      '  skills    - List technical skills and certifications',
      '  projects  - Show recent projects',
      '  contact   - Display contact information',
      '  whoami    - Current user information',
      '  ls        - List directory contents',
      '  clear     - Clear terminal screen',
      '  hack      - Initialize penetration testing tools',
      '  nmap      - Network discovery simulation',
      ''
    ],
    about: [
      'CyberGuardian - Senior Ethical Hacker & Security Developer',
      '================================================',
      'Experience: 8+ years in cybersecurity',
      'Specialization: Penetration Testing, Red Team Operations',
      'Certifications: OSCP, CEH, CISSP, Security+',
      'Location: Global (Remote)',
      'Status: Available for consulting',
      ''
    ],
    skills: [
      'Technical Skills Matrix:',
      '========================',
      'Programming: Python [████████████] 95%',
      'JavaScript:  [███████████░] 90%',
      'Go:          [████████░░░░] 80%',
      'Rust:        [███████░░░░░] 70%',
      'C++:         [██████░░░░░░] 60%',
      '',
      'Security Tools: Metasploit, Burp Suite, Nmap, Wireshark',
      'Frameworks: Django, React, Node.js, FastAPI',
      ''
    ],
    projects: [
      'Recent Security Projects:',
      '=========================',
      '1. Enterprise Network Penetration Test',
      '   - Fortune 500 company',
      '   - 50+ critical vulnerabilities identified',
      '   - Custom exploit development',
      '',
      '2. Web Application Security Audit',
      '   - OWASP Top 10 compliance assessment',
      '   - SQL injection and XSS remediation',
      '',
      '3. Red Team Engagement',
      '   - Social engineering campaign',
      '   - Physical security assessment',
      ''
    ],
    contact: [
      'Contact Information:',
      '===================',
      'Email: cyberguardian@securemail.com',
      'LinkedIn: /in/cyberguardian-security',
      'GitHub: /cyberguardian',
      'PGP Key: 0x1234567890ABCDEF',
      'Status: Available for new projects',
      ''
    ],
    whoami: [
      'cyberguardian@security-workstation:~$ whoami',
      'CyberGuardian',
      'UID=1337(cyberguardian) GID=1337(security)',
      'Groups: sudo,security,redteam,pentester',
      'Clearance: TOP_SECRET',
      ''
    ],
    ls: [
      'total 42',
      'drwxr-xr-x 2 cyberguardian security 4096 Jan 15 2024 exploits/',
      'drwxr-xr-x 2 cyberguardian security 4096 Jan 15 2024 reports/',
      'drwxr-xr-x 2 cyberguardian security 4096 Jan 15 2024 tools/',
      '-rw-r--r-- 1 cyberguardian security 1337 Jan 15 2024 credentials.txt',
      '-rwx------ 1 cyberguardian security 2048 Jan 15 2024 payload.sh',
      '-rw-r--r-- 1 cyberguardian security  666 Jan 15 2024 targets.list',
      ''
    ],
    hack: [
      'Initializing penetration testing framework...',
      '[✓] Loading Metasploit Framework',
      '[✓] Starting Burp Suite Professional',
      '[✓] Configuring custom wordlists',
      '[✓] Setting up VPN connections',
      '[✓] Preparing payload generators',
      '',
      'All systems ready for engagement.',
      'Remember: Only authorized testing permitted.',
      ''
    ],
    nmap: [
      'Starting Nmap network discovery...',
      '',
      'Nmap scan report for target-network.com',
      'Host is up (0.043s latency).',
      'PORT     STATE SERVICE',
      '22/tcp   open  ssh',
      '80/tcp   open  http',
      '443/tcp  open  https',
      '3389/tcp open  ms-wbt-server',
      '',
      'Scan complete. 4 services detected.',
      ''
    ]
  };

  const executeCommand = (cmd: string) => {
    const timestamp = new Date().toLocaleTimeString();
    const command = cmd.toLowerCase().trim();
    
    let output: string[];
    
    if (command === 'clear') {
      setCommands([]);
      return;
    }
    
    if (command in availableCommands) {
      output = availableCommands[command as keyof typeof availableCommands];
    } else if (command === '') {
      output = [''];
    } else {
      output = [
        `Command not found: ${cmd}`,
        'Type "help" for available commands.',
        ''
      ];
    }

    setCommands(prev => [...prev, { command: cmd, output, timestamp }]);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (currentInput.trim()) {
      executeCommand(currentInput);
      setCurrentInput('');
    }
  };

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [commands]);

  useEffect(() => {
    // Welcome message
    setCommands([{
      command: '',
      output: [
        'CyberGuardian Security Terminal v2.1.0',
        'Copyright (c) 2024 CyberGuardian Security Solutions',
        '',
        'Type "help" for available commands.',
        'All activities are logged and monitored.',
        ''
      ]
    }]);
  }, []);

  return (
    <div className={`fixed bottom-4 right-4 z-40 transition-all duration-300 ${isMinimized ? 'w-64 h-12' : 'w-96 h-96 md:w-[500px] md:h-[400px]'}`}>
      {/* Terminal Window */}
      <div className="bg-black/95 border border-primary/50 rounded-lg overflow-hidden cyber-border">
        {/* Terminal Header */}
        <div className="bg-card border-b border-primary/30 px-4 py-2 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 rounded-full bg-accent"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-primary"></div>
            <span className="text-xs font-mono text-primary ml-4">
              cyberguardian@security-terminal
            </span>
          </div>
          <Button
            variant="ghost"
            size="sm"
            className="text-primary hover:text-primary-glow h-6 w-6 p-0"
            onClick={() => setIsMinimized(!isMinimized)}
          >
            {isMinimized ? '□' : '_'}
          </Button>
        </div>

        {!isMinimized && (
          <>
            {/* Terminal Content */}
            <div
              ref={terminalRef}
              className="h-80 md:h-[320px] overflow-y-auto p-4 font-mono text-sm bg-black/50"
            >
              {commands.map((cmd, index) => (
                <div key={index} className="mb-2">
                  {cmd.command && (
                    <div className="text-primary">
                      <span className="text-secondary">cyberguardian@security:~$</span>{' '}
                      {cmd.command}
                    </div>
                  )}
                  {cmd.output.map((line, lineIndex) => (
                    <div key={lineIndex} className="text-foreground whitespace-pre">
                      {line}
                    </div>
                  ))}
                </div>
              ))}
            </div>

            {/* Terminal Input */}
            <div className="border-t border-primary/30 p-4 bg-black/50">
              <form onSubmit={handleSubmit} className="flex items-center space-x-2">
                <span className="text-secondary font-mono text-sm">
                  cyberguardian@security:~$
                </span>
                <Input
                  ref={inputRef}
                  value={currentInput}
                  onChange={(e) => setCurrentInput(e.target.value)}
                  className="flex-1 bg-transparent border-none text-primary font-mono text-sm p-0 focus:ring-0"
                  placeholder="Type command..."
                  autoComplete="off"
                />
              </form>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Terminal;