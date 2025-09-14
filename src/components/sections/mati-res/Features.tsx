import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Brain,
  BookOpen,
  Calculator,
  Atom,
  Globe2,
  Palette,
  Music,
  Trophy,
  Target,
} from 'lucide-react';

export default function Features() {
  const features = [
    {
      icon: Brain,
      title: 'Quiz Adaptatifs',
      description:
        "Des questions qui s'adaptent à votre niveau pour un apprentissage personnalisé et efficace.",
      badge: 'IA Avancée',
      gradient: 'from-purple-500/20 to-pink-500/20',
    },
    {
      icon: BookOpen,
      title: 'Littérature & Français',
      description:
        'Explorez les grands classiques, la grammaire et enrichissez votre vocabulaire avec style.',
      badge: 'Langues',
      gradient: 'from-blue-500/20 to-cyan-500/20',
    },
    {
      icon: Calculator,
      title: 'Mathématiques Ludiques',
      description:
        "Transformez les équations en jeu ! Algèbre, géométrie et calculs n'auront plus de secrets.",
      badge: 'Sciences',
      gradient: 'from-green-500/20 to-emerald-500/20',
    },
    {
      icon: Atom,
      title: 'Sciences Physiques',
      description:
        'Découvrez les lois de la physique et de la chimie à travers des quiz interactifs passionnants.',
      badge: 'Laboratoire',
      gradient: 'from-orange-500/20 to-red-500/20',
    },
    {
      icon: Globe2,
      title: 'Histoire & Géographie',
      description:
        "Voyagez dans le temps et l'espace ! Explorez civilisations, pays et événements marquants.",
      badge: 'Culture',
      gradient: 'from-indigo-500/20 to-purple-500/20',
    },
    {
      icon: Palette,
      title: 'Arts & Créativité',
      description:
        "Plongez dans l'univers artistique : peinture, sculpture, architecture et mouvements artistiques.",
      badge: 'Créatif',
      gradient: 'from-pink-500/20 to-rose-500/20',
    },
    {
      icon: Music,
      title: 'Musique & Rythme',
      description:
        'Testez vos connaissances musicales : compositeurs, instruments, genres et théorie musicale.',
      badge: 'Audio',
      gradient: 'from-yellow-500/20 to-orange-500/20',
    },
    {
      icon: Trophy,
      title: 'Défis & Tournois',
      description:
        'Participez à des compétitions épiques et grimpez dans les classements mondiaux !',
      badge: 'Compétition',
      gradient: 'from-amber-500/20 to-yellow-500/20',
    },
    {
      icon: Target,
      title: 'Objectifs Personnalisés',
      description:
        "Fixez vos buts d'apprentissage et suivez vos progrès avec des statistiques détaillées.",
      badge: 'Progression',
      gradient: 'from-teal-500/20 to-cyan-500/20',
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-background via-accent/10 to-muted/30 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-accent/30 rounded-full blur-2xl animate-bounce"></div>
        <div className="absolute bottom-32 left-1/4 w-40 h-40 bg-secondary/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 right-1/3 w-28 h-28 bg-primary/15 rounded-full blur-2xl animate-bounce delay-500"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <div className="flex justify-center mb-6">
            <Badge
              variant="outline"
              className="mb-4 px-6 py-3 text-lg border-primary/30 bg-primary/5"
            >
              🎯 Matières Disponibles
            </Badge>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-8 leading-tight">
            Explorez Toutes les
            <span className="block bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent animate-pulse">
              Matières Scolaires
            </span>
            <span className="text-3xl sm:text-4xl lg:text-5xl block mt-2">avec Mega Quiz ! 🚀</span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Des milliers de questions dans chaque matière pour transformer votre apprentissage en
            aventure passionnante et ludique !
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card
                key={index}
                className="group relative overflow-hidden border-border/50 hover:border-primary/40 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2 bg-card/80 backdrop-blur-sm"
              >
                {/* Animated Background */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-100 transition-all duration-500`}
                />
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Sparkle Effects */}
                <div className="absolute top-4 right-4 text-2xl opacity-0 group-hover:opacity-100 transition-all duration-300 animate-bounce">
                  ✨
                </div>
                <div className="absolute bottom-4 left-4 text-xl opacity-0 group-hover:opacity-100 transition-all duration-500 delay-200 animate-pulse">
                  🎉
                </div>

                <CardHeader className="relative z-10">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="size-16 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg">
                      <Icon className="size-8 text-primary group-hover:text-accent transition-colors duration-300" />
                    </div>
                    <Badge
                      variant="secondary"
                      className="text-sm px-3 py-1 bg-accent/20 group-hover:bg-primary/20 transition-colors duration-300"
                    >
                      {feature.badge}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors duration-300">
                    {feature.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="relative z-10">
                  <CardDescription className="text-base leading-relaxed text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">
                    {feature.description}
                  </CardDescription>
                </CardContent>

                {/* Glowing Border Effect */}
                <div className="absolute inset-0 rounded-lg border-2 border-transparent group-hover:border-primary/30 transition-all duration-500" />
                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-primary/20 via-accent/20 to-secondary/20 opacity-0 group-hover:opacity-20 blur-xl transition-all duration-500" />
              </Card>
            );
          })}
        </div>

        {/* Decorative Quiz Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20">
            <div className="text-3xl font-bold text-primary mb-2">50,000+</div>
            <div className="text-sm text-muted-foreground">Questions Disponibles 📚</div>
          </div>
          <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-accent/10 to-secondary/10 border border-accent/20">
            <div className="text-3xl font-bold text-accent mb-2">25+</div>
            <div className="text-sm text-muted-foreground">Matières Couvertes 🎓</div>
          </div>
          <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-secondary/10 to-primary/10 border border-secondary/20">
            <div className="text-3xl font-bold text-secondary mb-2">100,000+</div>
            <div className="text-sm text-muted-foreground">Étudiants Actifs 👥</div>
          </div>
          <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/20">
            <div className="text-3xl font-bold text-primary mb-2">98%</div>
            <div className="text-sm text-muted-foreground">Taux de Satisfaction 🌟</div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-primary/10 via-accent/10 to-secondary/10 rounded-3xl p-8 border border-primary/20">
            <p className="text-xl text-muted-foreground mb-6 font-medium">
              Prêt à devenir un champion des quiz ? 🏆
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-primary to-accent text-primary-foreground rounded-xl font-bold text-lg hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 hover:scale-105">
                Commencer les Quiz 🚀
              </button>
              <button className="px-8 py-4 border-2 border-primary/30 rounded-xl font-bold text-lg hover:bg-primary/10 transition-all duration-300 hover:border-primary/50">
                Explorer les Matières 📖
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
