import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Brain,
  Trophy,
  Gamepad2,
  Users,
  Target,
  Sparkles,
  BookOpen,
  Timer,
  Award,
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
      icon: Gamepad2,
      title: 'Mode Défi Multijoueur',
      description: 'Affrontez vos amis en temps réel dans des duels de connaissances palpitants.',
      badge: 'Multijoueur',
    },
    {
      icon: Users,
      title: 'Communauté Active',
      description:
        'Rejoignez plus de 500,000 apprenants passionnés et partagez vos créations de quiz.',
      badge: 'Communauté',
    },
    {
      icon: Target,
      title: 'Suivi de Progression',
      description:
        'Visualisez vos progrès avec des graphiques détaillés et des statistiques personnalisées.',
      badge: 'Analytics',
    },
    {
      icon: Sparkles,
      title: 'Effets Visuels Époustouflants',
      description:
        'Animations fluides, particules magiques et transitions spectaculaires pour une expérience immersive.',
      badge: 'Expérience',
    },
    {
      icon: BookOpen,
      title: 'Bibliothèque Infinie',
      description:
        'Accédez à plus de 10,000 quiz dans 50+ matières : maths, sciences, histoire, langues et plus.',
      badge: 'Contenu',
    },
    {
      icon: Timer,
      title: 'Sessions Chronométrées',
      description:
        "Modes blitz, marathon et détente pour s'adapter à votre rythme d'apprentissage.",
      badge: 'Flexibilité',
    },
    {
      icon: Award,
      title: 'Certificats Personnalisés',
      description: 'Obtenez des certificats de réussite à partager sur vos réseaux sociaux.',
      badge: 'Reconnaissance',
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-background via-primary/5 to-accent/10 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 size-32 bg-primary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-40 right-20 size-24 bg-accent/30 rounded-full blur-2xl animate-bounce" />
        <div className="absolute bottom-32 left-1/4 size-40 bg-secondary/15 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-1/3 size-28 bg-primary/25 rounded-full blur-2xl animate-pulse" />

        {/* Floating Quiz Icons */}
        <div className="absolute top-16 right-1/4 text-primary/20 animate-bounce">
          <Brain className="size-8" />
        </div>
        <div className="absolute bottom-40 left-1/3 text-accent/30 animate-pulse">
          <Trophy className="size-10" />
        </div>
        <div className="absolute top-1/3 left-16 text-secondary/25 animate-bounce">
          <Sparkles className="size-6" />
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4 px-6 py-2 bg-primary/10 border-primary/20">
            🎯 Fonctionnalités Mega Quiz
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            L'Apprentissage Devient
            <span className="block bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent animate-pulse">
              Une Aventure Épique ! 🚀
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Découvrez une plateforme révolutionnaire qui transforme l'étude en jeu passionnant. Avec
            Mega Quiz, chaque question est une nouvelle quête vers la connaissance ! ✨
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card
                key={index}
                className="group relative overflow-hidden border-border/50 hover:border-primary/30 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 hover:scale-105 bg-card/80 backdrop-blur-sm"
              >
                {/* Animated Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/5 to-secondary/10 opacity-0 group-hover:opacity-100 transition-all duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-primary/5 group-hover:animate-pulse" />

                {/* Sparkle Effects */}
                <div className="absolute top-4 right-4 text-primary/20 group-hover:text-primary/40 transition-colors duration-300">
                  <Sparkles className="size-4 animate-pulse" />
                </div>

                <CardHeader className="relative">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="size-14 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center group-hover:from-primary/30 group-hover:to-accent/30 transition-all duration-300 group-hover:rotate-6 group-hover:scale-110">
                      <Icon className="size-7 text-primary group-hover:text-primary animate-pulse" />
                    </div>
                    <Badge
                      variant="secondary"
                      className="text-xs bg-primary/10 text-primary border-primary/20 group-hover:bg-primary/20 transition-colors duration-300"
                    >
                      {feature.badge}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300 font-bold">
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

                {/* Floating Particles */}
                <div className="absolute bottom-4 left-4 size-2 bg-primary/30 rounded-full group-hover:animate-bounce opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-8 right-8 size-1 bg-accent/40 rounded-full group-hover:animate-ping opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Card>
            );
          })}
        </div>

        {/* Bottom CTA with Decorations */}
        <div className="text-center mt-20 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent rounded-3xl" />
          <div className="relative bg-card/50 backdrop-blur-sm rounded-3xl p-8 border border-primary/20">
            <p className="text-muted-foreground mb-6 text-lg">
              🎮 Prêt à révolutionner votre façon d'apprendre ? 🎮
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-primary to-accent text-primary-foreground rounded-xl font-bold hover:from-primary/90 hover:to-accent/90 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/25">
                🚀 Enroll Now - C'est Parti !
              </button>
              <button className="px-8 py-4 border-2 border-primary/30 rounded-xl font-bold hover:bg-primary/10 transition-all duration-300 hover:scale-105 bg-card/80 backdrop-blur-sm">
                📚 Course Catalog - Explorer
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
