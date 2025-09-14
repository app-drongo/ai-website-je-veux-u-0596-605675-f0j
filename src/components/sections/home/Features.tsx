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
  Star,
} from 'lucide-react';

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
      description: 'Affrontez vos amis en temps réel dans des duels de connaissances épiques.',
      badge: 'Multijoueur',
      decoration: '⚡',
    },
    {
      icon: Users,
      title: 'Communauté Active',
      description:
        'Rejoignez plus de 500,000 apprenants passionnés et partagez vos créations de quiz.',
      badge: 'Communauté',
      decoration: '👥',
    },
    {
      icon: Target,
      title: 'Suivi de Progression',
      description:
        'Visualisez vos progrès avec des statistiques détaillées et des graphiques motivants.',
      badge: 'Analytics',
      decoration: '📊',
    },
    {
      icon: Sparkles,
      title: 'Effets Visuels Époustouflants',
      description:
        'Animations fluides, particules magiques et transitions spectaculaires pour chaque bonne réponse.',
      badge: 'Expérience',
      decoration: '✨',
    },
    {
      icon: BookOpen,
      title: 'Bibliothèque Infinie',
      description:
        'Accédez à plus de 10,000 quiz dans 50+ matières : maths, sciences, histoire, langues et plus.',
      badge: 'Contenu',
      decoration: '📚',
    },
    {
      icon: Timer,
      title: 'Quiz Express 60 Secondes',
      description: 'Testez vos réflexes avec nos quiz chronométrés ultra-rapides et addictifs.',
      badge: 'Rapidité',
      decoration: '⏰',
    },
    {
      icon: Star,
      title: 'Créateur de Quiz Magique',
      description:
        "Transformez n'importe quel sujet en quiz interactif avec notre éditeur révolutionnaire.",
      badge: 'Création',
      decoration: '🎨',
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-background via-primary/5 to-accent/10 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 text-6xl animate-bounce">🎯</div>
        <div className="absolute top-40 right-20 text-5xl animate-pulse">🌟</div>
        <div className="absolute bottom-40 left-20 text-4xl animate-spin">⚡</div>
        <div className="absolute bottom-20 right-10 text-6xl animate-bounce">🚀</div>
        <div className="absolute top-60 left-1/2 text-3xl animate-pulse">💡</div>
        <div className="absolute top-80 right-1/3 text-4xl animate-bounce">🎊</div>
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
            L'Apprentissage Devient
            <span className="block bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-pulse">
              Une Aventure Épique ! 🎉
            </span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Découvrez la plateforme de quiz la plus fun et addictive au monde ! Transformez chaque
            session d'étude en moment de plaisir intense. 🌈
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
                {/* Magical Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/5 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Floating Decoration */}
                <div className="absolute top-4 right-4 text-2xl group-hover:animate-spin transition-transform duration-300">
                  {feature.decoration}
                </div>

                <CardHeader className="relative">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="size-14 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center group-hover:from-primary/30 group-hover:to-accent/30 transition-all duration-300 group-hover:rotate-12">
                      <Icon className="size-7 text-primary group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <Badge
                      variant="secondary"
                      className="text-sm bg-primary/10 text-primary border-primary/20"
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
                <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div className="absolute top-2 left-2 w-1 h-1 bg-primary rounded-full animate-ping" />
                  <div className="absolute bottom-4 right-8 w-1 h-1 bg-accent rounded-full animate-ping delay-300" />
                  <div className="absolute top-8 right-4 w-1 h-1 bg-primary rounded-full animate-ping delay-700" />
                </div>
              </Card>
            );
          })}
        </div>

        {/* Bottom CTA with Decorations */}
        <div className="text-center mt-20 relative">
          <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 text-4xl animate-bounce">
            🎊
          </div>
          <p className="text-xl text-muted-foreground mb-6 font-medium">
            Prêt à devenir un champion du quiz ? 🏆
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="px-8 py-4 bg-gradient-to-r from-primary to-accent text-primary-foreground rounded-xl font-bold text-lg hover:from-primary/90 hover:to-accent/90 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
              🚀 Commencer l'Aventure
            </button>
            <button className="px-8 py-4 border-2 border-primary/30 rounded-xl font-bold text-lg hover:bg-primary/10 transition-all duration-300 hover:scale-105 bg-card/50 backdrop-blur-sm">
              📚 Explorer les Quiz
            </button>
          </div>
          <div className="mt-6 text-sm text-muted-foreground">
            ✨ Rejoignez 500,000+ apprenants heureux • 🎯 100% Gratuit pour commencer
          </div>
        </div>
      </div>
    </section>
  );
}
