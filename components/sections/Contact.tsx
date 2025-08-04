import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Mail, Phone, MapPin, Shield, Clock, CheckCircle } from 'lucide-react';
import { toast } from 'sonner';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
    serviceType: 'pentest'
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);

  const serviceTypes = [
    { id: 'pentest', label: 'Penetration Testing', icon: Shield },
    { id: 'audit', label: 'Security Audit', icon: CheckCircle },
    { id: 'redteam', label: 'Red Team Exercise', icon: Clock },
    { id: 'consultation', label: 'Security Consultation', icon: Mail },
  ];

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'cyberguardian@securemail.com',
      link: 'mailto:cyberguardian@securemail.com'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+1 (555) 123-4567',
      link: 'tel:+15551234567'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Global (Remote)',
      link: null
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleServiceTypeChange = (serviceType: string) => {
    setFormData(prev => ({
      ...prev,
      serviceType
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));

    toast.success(
      "Message sent successfully! I'll respond within 24 hours.",
      {
        description: "Your security consultation request has been received.",
      }
    );

    setFormData({
      name: '',
      email: '',
      company: '',
      message: '',
      serviceType: 'pentest'
    });

    setIsSubmitting(false);
  };

  const SecurityFeatures = () => (
    <Card className="cyber-border">
      <CardContent className="p-6">
        <h3 className="text-xl font-bold text-primary mb-4 flex items-center">
          <Shield className="mr-2" size={20} />
          Secure Communication
        </h3>
        <div className="space-y-3 text-sm">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-primary rounded-full"></div>
            <span className="text-muted-foreground">End-to-end encrypted messaging</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-secondary rounded-full"></div>
            <span className="text-muted-foreground">PGP key available upon request</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-accent rounded-full"></div>
            <span className="text-muted-foreground">Secure file transfer protocols</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-primary rounded-full"></div>
            <span className="text-muted-foreground">NDA agreements available</span>
          </div>
        </div>
        
        <div className="mt-6 pt-4 border-t border-primary/20">
          <p className="text-xs text-muted-foreground">
            <strong className="text-accent">PGP Fingerprint:</strong><br />
            1234 5678 9ABC DEF0 1234 5678 9ABC DEF0 12345678
          </p>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <section id="contact" className="py-20 bg-card/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            <span className="glitch" data-text="SECURE CONTACT">
              SECURE CONTACT
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to strengthen your security posture? Let's discuss how I can help protect your organization.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="cyber-border">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-primary mb-6">
                  Request Security Consultation
                </h3>

                {/* Service Type Selection */}
                <div className="mb-6">
                  <label className="block text-sm font-bold text-foreground mb-3">
                    Service Type
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    {serviceTypes.map((service) => {
                      const Icon = service.icon;
                      return (
                        <button
                          key={service.id}
                          type="button"
                          onClick={() => handleServiceTypeChange(service.id)}
                          className={`p-3 rounded-lg border-2 transition-all duration-300 text-left ${
                            formData.serviceType === service.id
                              ? 'border-primary bg-primary/10 glow-primary'
                              : 'border-border hover:border-primary/50'
                          }`}
                        >
                          <div className="flex items-center space-x-2">
                            <Icon size={18} className={formData.serviceType === service.id ? 'text-primary' : 'text-muted-foreground'} />
                            <span className={`text-sm font-mono ${formData.serviceType === service.id ? 'text-primary' : 'text-muted-foreground'}`}>
                              {service.label}
                            </span>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-bold text-foreground mb-2">
                        Full Name *
                      </label>
                      <Input
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Enter your full name"
                        required
                        className="cyber-border focus:glow-primary"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-foreground mb-2">
                        Email Address *
                      </label>
                      <Input
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your.email@company.com"
                        required
                        className="cyber-border focus:glow-primary"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-foreground mb-2">
                      Company/Organization
                    </label>
                    <Input
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      placeholder="Your company name"
                      className="cyber-border focus:glow-primary"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-foreground mb-2">
                      Project Details *
                    </label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Describe your security requirements, timeline, and any specific concerns..."
                      rows={6}
                      required
                      className="cyber-border focus:glow-primary resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full cyber-border hover:glow-primary transition-all duration-300 py-6 text-lg font-mono tracking-wider"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center space-x-2">
                        <div className="w-4 h-4 border-2 border-primary/30 border-t-primary rounded-full animate-spin"></div>
                        <span>SENDING ENCRYPTED MESSAGE...</span>
                      </div>
                    ) : (
                      'SEND SECURE MESSAGE'
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Info & Security Features */}
          <div className="space-y-8">
            {/* Contact Information */}
            <Card className="cyber-border">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-secondary mb-6">
                  Contact Information
                </h3>
                <div className="space-y-4">
                  {contactInfo.map((info, index) => {
                    const Icon = info.icon;
                    return (
                      <div key={index} className="flex items-start space-x-3">
                        <div className="p-2 bg-secondary/20 rounded-lg">
                          <Icon className="text-secondary" size={18} />
                        </div>
                        <div>
                          <p className="text-sm font-bold text-foreground">{info.label}</p>
                          {info.link ? (
                            <a
                              href={info.link}
                              className="text-sm text-muted-foreground hover:text-secondary transition-colors"
                            >
                              {info.value}
                            </a>
                          ) : (
                            <p className="text-sm text-muted-foreground">{info.value}</p>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>

            {/* Security Features */}
            <SecurityFeatures />

            {/* Response Time */}
            <Card className="cyber-border">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-accent mb-4">
                  Response Times
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Initial Response</span>
                    <Badge className="bg-primary/20 text-primary border-primary/40">
                      &lt; 24 hours
                    </Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Proposal Delivery</span>
                    <Badge className="bg-secondary/20 text-secondary border-secondary/40">
                      2-3 days
                    </Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Project Start</span>
                    <Badge className="bg-accent/20 text-accent border-accent/40">
                      1-2 weeks
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;