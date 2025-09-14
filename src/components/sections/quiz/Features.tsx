import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Brain, Trophy, Gamepad2, Users, Clock, Star, Target, Sparkles, Zap } from 'lucide-react';

export default function Features() {
  const features = [
    {
      icon: Brain,
      title: 'Quiz Adaptatifs Intelligents',
      description:
        'Notre IA ajuste automatiquement la difficulté selon vos performances pour un apprentissage optimal.',
      badge: 'IA Avancée',
      decoration: '🧠',
    },
    {
      icon: Trophy,
      title: 'Système de Récompenses',
      description:
        'Gagnez des badges, débloquez des niveaux et grimpez dans les classements mondiaux.',
      badge: 'Gamification',
      decoration: '🏆',
    },
    {
      icon: Gamepad2,
      title: 'Mode Défi Multijoueur',
      description: 'Affrontez vos amis en temps réel dans des duels de connaissances palpitants.',
      badge: 'Multijoueur',
      decoration: '🎮',
    },
    {
      icon: Users,
      title: 'Communauté Active',
      description: 'Rejoignez plus de 500 000 apprenants passionnés et partagez vos connaissances.',
      badge: 'Social',
      decoration: '👥',
    },
    {
      icon: Clock,
      title: 'Sessions Express',
      description:
        'Apprenez efficacement avec des quiz de 5 minutes adaptés à votre emploi du temps.',
      badge: 'Flexibilité',
      decoration: '⚡',
    },
    {
      icon: Star,
      title: 'Contenu Premium',
      description: 'Accédez à des milliers de quiz créés par des experts dans chaque domaine.',
      badge: 'Qualité',
      decoration: '⭐',
    },
    {
      icon: Target,
      title: 'Objectifs Personnalisés',
      description: "Définissez vos objectifs d'apprentissage et suivez vos progrès en temps réel.",
      badge: 'Suivi',
      decoration: '🎯',
    },
    {
      icon: Sparkles,
      title: 'Effets Visuels Époustouflants',
      description:
        'Animations colorées, particules magiques et transitions fluides pour une expérience immersive.',
      badge: 'Expérience',
      decoration: '✨',
    },
    {
      icon: Zap,
      title: 'Boost de Motivation',
      description:
        'Streaks quotidiennes, défis hebdomadaires et événements spéciaux pour rester motivé.',
      badge: 'Motivation',
      decoration: '🚀',
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-background via-primary/5 to-accent/10 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 text-6xl animate-bounce opacity-20">🎓</div>
        <div className="absolute top-40 right-20 text-5xl animate-pulse opacity-30">📚</div>
        <div
          className="absolute bottom-40 left-20 text-7xl animate-spin opacity-15"
          style={{ animationDuration: '10s' }}
        >
          🌟
        </div>
        <div
          className="absolute bottom-20 right-10 text-4xl animate-bounce opacity-25"
          style={{ animationDelay: '1s' }}
        >
          🎯
        </div>
        <div
          className="absolute top-60 left-1/2 text-5xl animate-pulse opacity-20"
          style={{ animationDelay: '2s' }}
        >
          🧠
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <Badge
            variant="outline"
            className="mb-4 px-6 py-3 text-lg border-primary/30 bg-primary/10"
          >
            🎮 Fonctionnalités Mega Quiz
          </Badge>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            Transformez Votre
            <span className="block bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-pulse">
              Apprentissage en Aventure
            </span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Découvrez une nouvelle façon d'apprendre avec des quiz interactifs, des défis
            passionnants et une communauté bienveillante ! 🚀
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card
                key={index}
                className="group relative overflow-hidden border-border/50 hover:border-primary/40 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20 hover:scale-105 bg-card/80 backdrop-blur-sm"
              >
                {/* Animated Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/5 to-primary/5 opacity-0 group-hover:opacity-100 transition-all duration-500" />
                <div
                  className="absolute -top-20 -right-20 text-8xl opacity-5 group-hover:opacity-20 transition-opacity duration-500 group-hover:animate-spin"
                  style={{ animationDuration: '8s' }}
                >
                  {feature.decoration}
                </div>

                <CardHeader className="relative">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="size-14 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center group-hover:from-primary/30 group-hover:to-accent/30 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6">
                      <Icon className="size-7 text-primary group-hover:text-accent transition-colors duration-300" />
                    </div>
                    <Badge
                      variant="secondary"
                      className="text-sm px-3 py-1 bg-primary/10 text-primary border-primary/20"
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

                {/* Sparkle Effect */}
                <div className="absolute top-4 right-4 text-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse">
                  ✨
                </div>
              </Card>
            );
          })}
        </div>

        {/* Bottom CTA with decorations */}
        <div className="text-center mt-20 relative">
          <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 text-4xl animate-bounce">
            🎉
          </div>
          <p className="text-xl text-muted-foreground mb-6 font-medium">
            Prêt à devenir un champion du savoir ? 🏆
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="px-8 py-4 bg-gradient-to-r from-primary to-accent text-primary-foreground rounded-xl font-bold text-lg hover:from-primary/90 hover:to-accent/90 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
              🚀 Commencer l'Aventure
            </button>
            <button className="px-8 py-4 border-2 border-primary/30 rounded-xl font-bold text-lg hover:bg-primary/10 transition-all duration-300 hover:scale-105 hover:border-primary/50">
              📖 Explorer les Matières
            </button>
          </div>
          <div className="mt-8 flex justify-center gap-8 text-3xl">
            <span className="animate-pulse">🎯</span>
            <span className="animate-bounce" style={{ animationDelay: '0.5s' }}>
              🧠
            </span>
            <span className="animate-pulse" style={{ animationDelay: '1s' }}>
              ⚡
            </span>
            <span className="animate-bounce" style={{ animationDelay: '1.5s' }}>
              🌟
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
