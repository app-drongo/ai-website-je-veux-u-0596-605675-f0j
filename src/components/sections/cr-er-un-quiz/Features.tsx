import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Brain,
  Trophy,
  Sparkles,
  Target,
  Zap,
  Users,
  BookOpen,
  Star,
  Gamepad2,
} from 'lucide-react';

export default function Features() {
  const features = [
    {
      icon: Brain,
      title: 'Quiz Adaptatifs Intelligents',
      description:
        'Notre IA ajuste automatiquement la difficulté selon vos performances pour un apprentissage optimal.',
      badge: 'IA Avancée',
    },
    {
      icon: Trophy,
      title: 'Système de Récompenses',
      description:
        'Gagnez des badges, débloquez des niveaux et grimpez dans les classements mondiaux.',
      badge: 'Gamification',
    },
    {
      icon: Sparkles,
      title: 'Effets Visuels Époustouflants',
      description:
        'Animations magiques, particules scintillantes et transitions fluides pour une expérience immersive.',
      badge: 'Visuel',
    },
    {
      icon: Target,
      title: 'Apprentissage Ciblé',
      description:
        'Identifiez vos points faibles et renforcez vos connaissances avec des quiz personnalisés.',
      badge: 'Personnalisation',
    },
    {
      icon: Zap,
      title: 'Mode Éclair Chronométré',
      description:
        'Testez vos réflexes avec des quiz rapides et des défis contre la montre palpitants.',
      badge: 'Challenge',
    },
    {
      icon: Users,
      title: 'Défis Multijoueurs',
      description:
        'Affrontez vos amis en temps réel ou rejoignez des tournois communautaires épiques.',
      badge: 'Social',
    },
    {
      icon: BookOpen,
      title: 'Bibliothèque Infinie',
      description:
        'Plus de 50 000 questions dans 200+ matières : maths, sciences, histoire, langues et plus.',
      badge: 'Contenu',
    },
    {
      icon: Star,
      title: 'Progression Motivante',
      description:
        'Suivez vos statistiques détaillées et célébrez chaque victoire avec des animations festives.',
      badge: 'Motivation',
    },
    {
      icon: Gamepad2,
      title: 'Mini-Jeux Éducatifs',
      description: "Débloquez des mini-jeux bonus cachés pour apprendre en s'amusant encore plus.",
      badge: 'Divertissement',
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-background via-primary/5 to-accent/10 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-40 right-20 w-24 h-24 bg-accent/30 rounded-full blur-2xl animate-bounce" />
        <div className="absolute bottom-32 left-1/4 w-40 h-40 bg-secondary/15 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute bottom-20 right-1/3 w-28 h-28 bg-primary/25 rounded-full blur-2xl animate-bounce delay-500" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <Badge
            variant="outline"
            className="mb-4 px-6 py-2 text-sm font-semibold border-primary/30 bg-primary/10"
          >
            🎯 Fonctionnalités Magiques
          </Badge>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Découvrez l'Univers
            <span className="block bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent animate-pulse">
              Mega Quiz ✨
            </span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Plongez dans une aventure éducative extraordinaire où chaque question devient une quête
            passionnante vers la connaissance ! 🚀
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card
                key={index}
                className="group relative overflow-hidden border-border/50 hover:border-primary/40 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-2 bg-card/80 backdrop-blur-sm"
              >
                {/* Magical Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/5 to-secondary/10 opacity-0 group-hover:opacity-100 transition-all duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-all duration-700" />

                {/* Sparkle Effects */}
                <div className="absolute top-4 right-4 w-2 h-2 bg-primary rounded-full opacity-0 group-hover:opacity-100 animate-ping" />
                <div className="absolute top-8 right-8 w-1 h-1 bg-accent rounded-full opacity-0 group-hover:opacity-100 animate-ping delay-200" />

                <CardHeader className="relative">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="size-14 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center group-hover:from-primary/30 group-hover:to-accent/30 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3">
                      <Icon className="size-7 text-primary group-hover:text-accent transition-colors duration-300" />
                    </div>
                    <Badge
                      variant="secondary"
                      className="text-xs font-medium bg-secondary/20 hover:bg-secondary/30 transition-colors"
                    >
                      {feature.badge}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors duration-300">
                    {feature.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="relative">
                  <CardDescription className="text-base leading-relaxed text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">
                    {feature.description}
                  </CardDescription>
                </CardContent>

                {/* Magical Border Effect */}
                <div className="absolute inset-0 rounded-lg border-2 border-transparent group-hover:border-gradient-to-r group-hover:from-primary/30 group-hover:via-accent/30 group-hover:to-secondary/30 transition-all duration-500" />
              </Card>
            );
          })}
        </div>

        {/* Bottom CTA with Decorations */}
        <div className="text-center mt-20 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent rounded-3xl" />
          <div className="relative bg-card/50 backdrop-blur-sm rounded-3xl p-8 border border-primary/20">
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              🎉 Prêt pour l'Aventure Ultime ?
            </h3>
            <p className="text-muted-foreground mb-6 text-lg">
              Rejoignez plus de 100 000 apprenants qui transforment leurs connaissances en
              superpouvoir !
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-primary to-accent text-primary-foreground rounded-xl font-bold hover:from-primary/90 hover:to-accent/90 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/25">
                🚀 Enroll Now
              </button>
              <button className="px-8 py-4 border-2 border-primary/30 rounded-xl font-bold hover:bg-primary/10 transition-all duration-300 hover:scale-105 hover:border-primary/50">
                📚 Course Catalog
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
