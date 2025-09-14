import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  Mail,
  MapPin,
  Phone,
  ArrowRight,
  Heart,
  Brain,
  Trophy,
  BookOpen,
  Users,
  Zap,
  Star,
} from 'lucide-react';

export default function Footer() {
  const footerSections = [
    {
      title: 'Matières Quiz',
      links: [
        { name: 'Mathématiques', href: '/quiz/mathematiques' },
        { name: 'Sciences', href: '/quiz/sciences' },
        { name: 'Histoire', href: '/quiz/histoire' },
        { name: 'Géographie', href: '/quiz/geographie' },
        { name: 'Langues', href: '/quiz/langues' },
        { name: 'Littérature', href: '/quiz/litterature' },
      ],
    },
    {
      title: 'Niveaux',
      links: [
        { name: 'École Primaire', href: '/niveaux/primaire' },
        { name: 'Collège', href: '/niveaux/college' },
        { name: 'Lycée', href: '/niveaux/lycee' },
        { name: 'Université', href: '/niveaux/universite' },
        { name: 'Adultes', href: '/niveaux/adultes' },
        { name: 'Quiz Personnalisés', href: '/quiz-personnalises' },
      ],
    },
    {
      title: 'Communauté',
      links: [
        { name: 'Créer un Quiz', href: '/creer-quiz' },
        { name: 'Classements', href: '/classements' },
        { name: 'Défis Quotidiens', href: '/defis' },
        { name: 'Forum', href: '/forum' },
        { name: 'Tutoriels', href: '/tutoriels' },
        { name: 'Événements', href: '/evenements' },
      ],
    },
    {
      title: 'Support',
      links: [
        { name: "Centre d'Aide", href: '/aide' },
        { name: 'Confidentialité', href: '/confidentialite' },
        { name: 'Conditions', href: '/conditions' },
        { name: 'Sécurité', href: '/securite' },
        { name: 'Nous Contacter', href: '/contact' },
        { name: 'Signaler un Bug', href: '/bug-report' },
      ],
    },
  ];

  const socialLinks = [
    { name: 'Twitter', icon: Twitter, href: 'https://twitter.com/megaquiz' },
    { name: 'Facebook', icon: Facebook, href: 'https://facebook.com/megaquiz' },
    { name: 'Instagram', icon: Instagram, href: 'https://instagram.com/megaquiz' },
    { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com/company/megaquiz' },
    { name: 'YouTube', icon: Youtube, href: 'https://youtube.com/megaquiz' },
  ];

  return (
    <footer className="bg-gradient-to-br from-primary/5 via-accent/10 to-secondary/5 border-t border-primary/20 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-10 size-20 bg-primary/10 rounded-full blur-xl"></div>
        <div className="absolute top-32 right-20 size-16 bg-accent/15 rounded-full blur-lg"></div>
        <div className="absolute bottom-20 left-1/4 size-24 bg-secondary/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-10 right-10 size-12 bg-primary/20 rounded-full blur-md"></div>

        {/* Floating Quiz Icons */}
        <Brain className="absolute top-16 right-1/4 size-6 text-primary/20 animate-pulse" />
        <Trophy
          className="absolute top-40 left-1/3 size-5 text-accent/30 animate-bounce"
          style={{ animationDelay: '1s' }}
        />
        <BookOpen
          className="absolute bottom-32 right-1/3 size-4 text-secondary/25 animate-pulse"
          style={{ animationDelay: '2s' }}
        />
        <Zap
          className="absolute bottom-16 left-1/5 size-5 text-primary/30 animate-bounce"
          style={{ animationDelay: '0.5s' }}
        />
        <Star
          className="absolute top-24 left-1/2 size-4 text-accent/20 animate-pulse"
          style={{ animationDelay: '1.5s' }}
        />
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <Link href="/" className="flex items-center space-x-3 mb-6">
                <div className="size-12 rounded-xl bg-gradient-to-br from-primary via-accent to-secondary flex items-center justify-center shadow-lg">
                  <Brain className="size-7 text-primary-foreground" />
                </div>
                <div>
                  <span className="font-bold text-2xl bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    Mega Quiz
                  </span>
                  <div className="flex items-center gap-1 mt-1">
                    <Star className="size-3 text-accent fill-current" />
                    <Star className="size-3 text-accent fill-current" />
                    <Star className="size-3 text-accent fill-current" />
                  </div>
                </div>
              </Link>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                🎯 La plateforme ultime pour apprendre en s'amusant ! Créez, jouez et maîtrisez
                toutes les matières avec nos quiz interactifs. Plus de 50,000 questions dans tous
                les domaines vous attendent !
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 p-4 bg-card/50 rounded-lg border border-primary/10">
              <div className="text-center">
                <div className="font-bold text-lg text-primary">250K+</div>
                <div className="text-xs text-muted-foreground">Quiz Complétés</div>
              </div>
              <div className="text-center">
                <div className="font-bold text-lg text-accent">15K+</div>
                <div className="text-xs text-muted-foreground">Apprenants Actifs</div>
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm">
                <Mail className="size-4 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">support@megaquiz.fr</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Phone className="size-4 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">+33 1 23 45 67 89</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <MapPin className="size-4 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">Paris, France 🇫🇷</span>
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="space-y-3 p-4 bg-gradient-to-r from-primary/5 to-accent/5 rounded-lg border border-primary/20">
              <div className="flex items-center gap-2">
                <Zap className="size-4 text-primary" />
                <h4 className="font-semibold text-sm">Quiz Hebdomadaire</h4>
              </div>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Votre email pour les défis"
                  className="flex-1 px-3 py-2 text-sm border border-border rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                />
                <Button size="sm" className="px-3 bg-gradient-to-r from-primary to-accent">
                  <ArrowRight className="size-4" />
                </Button>
              </div>
              <p className="text-xs text-muted-foreground">
                🎁 Recevez des quiz exclusifs et des défis personnalisés !
              </p>
            </div>
          </div>

          {/* Footer Links */}
          <div className="lg:col-span-4 grid grid-cols-2 md:grid-cols-4 gap-8">
            {footerSections.map((section, index) => (
              <div key={index} className="space-y-4">
                <h4 className="font-semibold text-sm flex items-center gap-2">
                  {index === 0 && <BookOpen className="size-4 text-primary" />}
                  {index === 1 && <Trophy className="size-4 text-accent" />}
                  {index === 2 && <Users className="size-4 text-secondary" />}
                  {index === 3 && <Heart className="size-4 text-primary" />}
                  {section.title}
                </h4>
                <ul className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link
                        href={link.href}
                        className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200 hover:translate-x-1 transform inline-block"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary/20 bg-gradient-to-r from-muted/30 via-card/20 to-muted/30 backdrop-blur-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span>© 2024 Mega Quiz. Tous droits réservés.</span>
              <span className="hidden sm:inline">•</span>
              <span className="hidden sm:inline flex items-center gap-1">
                Créé avec <Heart className="size-3 text-accent fill-current animate-pulse" /> pour
                l'apprentissage
              </span>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              <span className="text-sm text-muted-foreground mr-2">Rejoignez-nous :</span>
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <Link
                    key={index}
                    href={social.href}
                    aria-label={social.name}
                    className="size-9 rounded-lg bg-gradient-to-br from-muted to-card hover:from-primary/20 hover:to-accent/20 flex items-center justify-center transition-all duration-300 group shadow-sm hover:shadow-md hover:scale-110"
                  >
                    <Icon className="size-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Additional Links */}
          <div className="flex flex-wrap justify-center md:justify-start gap-6 mt-4 pt-4 border-t border-border/30">
            <Link
              href="/plan-du-site"
              className="text-xs text-muted-foreground hover:text-primary transition-colors"
            >
              Plan du Site
            </Link>
            <Link
              href="/accessibilite"
              className="text-xs text-muted-foreground hover:text-primary transition-colors"
            >
              Accessibilité
            </Link>
            <Link
              href="/cookies"
              className="text-xs text-muted-foreground hover:text-primary transition-colors"
            >
              Gestion Cookies
            </Link>
            <Link
              href="/partenaires"
              className="text-xs text-muted-foreground hover:text-primary transition-colors"
            >
              Partenaires Éducatifs
            </Link>
            <div className="flex items-center gap-1 text-xs text-muted-foreground">
              <span>🏆 Certifié Éducation Numérique</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
