import { memo } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { infos } from "@/data/portfolio";
import { Github, Linkedin, Mail, Phone, Download, MapPin, Copy, Check } from "lucide-react";
import { Button } from "./ui/button";
import { translations } from "@/data/translations";
import { useState } from "react";
import { toast } from 'react-toastify';
import { ScrollAnimation } from "./ScrollAnimation";

const Hero = memo(() => {
  const currentLanguage = useSelector(
    (state: RootState) => state.language.currentLanguage
  );
  const { hero } = infos(currentLanguage);
  const t = translations[currentLanguage];
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const copyToClipboard = async (text: string, type: 'email' | 'phone') => {
    try {
      await navigator.clipboard.writeText(text);
      if (type === 'email') {
        setCopiedEmail(true);
        setTimeout(() => setCopiedEmail(false), 2000);
        toast.success(t.notifications.emailCopied, {
          position: "bottom-right",
          autoClose: 3000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          className: 'toast-success',
          style: {
            background: '#f8f9fa',
            color: '#1a1a1a',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
            borderLeft: '4px solid #4a5568',
            borderRadius: '4px',
            fontSize: '14px',
            padding: '16px',
          }
        });
      } else {
        setCopiedPhone(true);
        setTimeout(() => setCopiedPhone(false), 2000);
        toast.success(t.notifications.phoneCopied, {
          position: "bottom-right",
          autoClose: 3000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          className: 'toast-success',
          style: {
            background: '#f8f9fa',
            color: '#1a1a1a',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
            borderLeft: '4px solid #4a5568',
            borderRadius: '4px',
            fontSize: '14px',
            padding: '16px',
          }
        });
      }
    } catch (err) {
      toast.error(t.notifications.copyError, {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        className: 'toast-error',
        style: {
          background: '#f8f9fa',
          color: '#1a1a1a',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
          borderLeft: '4px solid #e53e3e',
          borderRadius: '4px',
          fontSize: '14px',
          padding: '16px',
        }
      });
    }
  };

  const handleDownloadCV = async (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    try {
      const cvUrl = `${import.meta.env.BASE_URL}Kassimi Youssef.pdf`;
      const link = document.createElement('a');
      link.href = cvUrl;
      link.download = 'Kassimi Youssef.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      toast.success(t.notifications.cvDownloaded, {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        className: 'toast-success',
        style: {
          background: '#f8f9fa',
          color: '#1a1a1a',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
          borderLeft: '4px solid #4a5568',
          borderRadius: '4px',
          fontSize: '14px',
          padding: '16px',
        }
      });
    } catch (error) {
      toast.error(t.notifications.downloadError, {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        className: 'toast-error',
        style: {
          background: '#f8f9fa',
          color: '#1a1a1a',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
          borderLeft: '4px solid #e53e3e',
          borderRadius: '4px',
          fontSize: '14px',
          padding: '16px',
        }
      });
    }
  };

  return (
    <section className="min-h-[90vh] flex items-center justify-center px-4 py-12 w-full bg-background dark:bg-[#0A0A0A]">
      <ScrollAnimation className="max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <div className="flex items-center justify-center gap-6 mb-6">
            <div className="relative w-32 h-32 rounded-full overflow-hidden ring-4 ring-primary/20 transition-transform duration-300 hover:scale-125 cursor-pointer">
              <img
                src={`${import.meta.env.BASE_URL}Kassimi Youssef.jpg`}
                alt="Profile"
                className="w-full h-full object-cover object-top"
              />
            </div>
            <h1 className="text-4xl font-bold animate-fade-in">
              Youssef Kassimi
            </h1>
          </div>
          <div className="inline-block px-6 py-2 rounded-full bg-secondary/50 mb-4">
            <span className="text-sm">{t.hiThere}</span>
          </div>
          <h2 className="text-4xl font-bold mb-4">{hero.title}</h2>
          <p className="text-xl text-muted-foreground mb-4 max-w-2xl mx-auto">
            {hero.subtitle}
          </p>
          <div className="flex items-center justify-center text-muted-foreground mb-8">
            <MapPin className="w-4 h-4 mr-2" />
            <span>{t.location.city}, {t.location.country}</span>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
          <Button
            variant="outline"
            className="w-full sm:w-auto px-6 py-2 bg-white/5 backdrop-blur-sm border-primary/20 hover:border-primary/40 flex items-center gap-2 rounded-full"
            onClick={() => copyToClipboard(hero.contacts.phone, 'phone')}
          >
            {copiedPhone ? <Check className="text-green-500" /> : <Phone />}
            {hero.contacts.phone}
          </Button>

          <Button
            variant="outline"
            className="w-full sm:w-auto px-6 py-2 bg-white/5 backdrop-blur-sm border-primary/20 hover:border-primary/40 flex items-center gap-2 rounded-full"
            onClick={() => copyToClipboard(hero.contacts.email, 'email')}
          >
            {copiedEmail ? <Check className="text-green-500" /> : <Mail />}
            {hero.contacts.email}
          </Button>

          <Button
            variant="outline"
            className="w-full sm:w-auto px-6 py-2 bg-white/5 backdrop-blur-sm border-primary/20 hover:border-primary/40 flex items-center gap-2 rounded-full"
            asChild
          >
            <a
              href={`https://github.com/${hero.contacts.github}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github />
              GitHub
            </a>
          </Button>

          <Button
            variant="outline"
            className="w-full sm:w-auto px-6 py-2 bg-white/5 backdrop-blur-sm border-primary/20 hover:border-primary/40 flex items-center gap-2 rounded-full"
            asChild
          >
            <a
              href={`https://linkedin.com/in/${hero.contacts.linkedin}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin />
              LinkedIn
            </a>
          </Button>

          <Button
            variant="default"
            className="w-full sm:w-auto px-6 py-2 bg-primary hover:bg-primary/90 flex items-center gap-2 rounded-full"
            asChild
          >
            <a
              href="/CV.pdf"
              onClick={handleDownloadCV}
              className="flex items-center gap-2"
            >
              <Download />
              {t.downloadCV}
            </a>
          </Button>
        </div>
      </ScrollAnimation>
    </section>
  );
});

Hero.displayName = "Hero";
export default Hero;