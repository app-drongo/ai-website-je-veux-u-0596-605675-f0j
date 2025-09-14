import { Button } from '@/components/ui/button';
import {
  ArrowRight,
  Play,
  Star,
  Users,
  Zap,
  Brain,
  Trophy,
  Target,
  Sparkles,
  BookOpen,
  Gamepad2,
} from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-background via-primary/5 to-accent/10">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      <div className="absolute top-10 left-10 size-32 bg-primary/20 rounded-full blur-2xl animate-pulse" />
      <div className="absolute top-40 right-20 size-48 bg-accent/30 rounded-full blur-3xl animate-pulse delay-1000" />
      <div className="absolute bottom-32 left-32 size-64 bg-secondary/20 rounded-full blur-3xl animate-pulse delay-500" />
      <div className="absolute bottom-10 right-10 size-40 bg-primary/15 rounded-full blur-2xl animate-pulse delay-2000" />

      {/* Floating Quiz Elements */}
      <div className="absolute top-20 left-1/4 animate-bounce delay-300">
        <div className="bg-card border border-primary/20 rounded-lg p-3 shadow-lg">
          <Brain className="size-6 text-primary" />
        </div>
      </div>
      <div className="absolute top-32 right-1/3 animate-bounce delay-700">
        <div className="bg-card border border-accent/20 rounded-lg p-3 shadow-lg">
          <Trophy className="size-6 text-accent" />
        </div>
      </div>
      <div className="absolute bottom-40 left-1/5 animate-bounce delay-1000">
        <div className="bg-card border border-secondary/20 rounded-lg p-3 shadow-lg">
          <Target className="size-6 text-secondary" />
        </div>
      </div>
      <div className="absolute bottom-20 right-1/4 animate-bounce delay-500">
        <div className="bg-card border border-primary/20 rounded-lg p-3 shadow-lg">
          <Sparkles className="size-6 text-primary" />
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative pt-20 pb-16 sm:pt-24 sm:pb-20 lg:pt-32 lg:pb-28">
          {/* Badge */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex items-center px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-sm font-medium text-primary animate-pulse">
              <Zap className="size-4 mr-2" />
              Nouveau: Quiz IA Personnalisés Disponibles
              <ArrowRight className="ml-2 size-4" />
            </div>
          </div>

          {/* Main Content */}
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-6">
              Maîtrisez Toutes les
              <span className="block bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent animate-pulse">
                Matières
              </span>
              Avec Mega Quiz
            </h1>

            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
              Transformez votre apprentissage en aventure ludique ! Créez des quiz personnalisés,
              défiez vos amis et progressez dans toutes les matières que vous souhaitez maîtriser.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button
                size="lg"
                className="group text-base px-8 bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70"
              >
                <Gamepad2 className="mr-2 size-5" />
                Commencer à Jouer
                <ArrowRight className="ml-2 size-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="group text-base px-8 border-primary/30 hover:bg-primary/5"
              >
                <Play className="mr-2 size-5 transition-transform group-hover:scale-110" />
                Voir la Démo
              </Button>
            </div>

            {/* Social Proof */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  <div className="size-8 rounded-full bg-gradient-to-br from-primary to-primary/60 border-2 border-background flex items-center justify-center">
                    <BookOpen className="size-4 text-background" />
                  </div>
                  <div className="size-8 rounded-full bg-gradient-to-br from-accent to-accent/60 border-2 border-background flex items-center justify-center">
                    <Brain className="size-4 text-background" />
                  </div>
                  <div className="size-8 rounded-full bg-gradient-to-br from-secondary to-secondary/60 border-2 border-background flex items-center justify-center">
                    <Trophy className="size-4 text-background" />
                  </div>
                </div>
                <span className="ml-2">
                  <Users className="inline size-4 mr-1" />
                  50,000+ apprenants actifs
                </span>
              </div>

              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="size-4 fill-primary text-primary" />
                ))}
                <span className="ml-2">4.8/5 étoiles</span>
              </div>
            </div>
          </div>

          {/* Hero Quiz Interface Mockup */}
          <div className="mt-16 relative">
            <div className="relative mx-auto max-w-4xl">
              <div className="rounded-2xl border bg-card p-6 shadow-2xl backdrop-blur-sm bg-card/80">
                <div className="rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 p-8">
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-foreground mb-2">
                      Quiz Mathématiques - Niveau Lycée
                    </h3>
                    <div className="flex justify-center items-center gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Target className="size-4" />
                        Question 7/15
                      </span>
                      <span className="flex items-center gap-1">
                        <Trophy className="size-4" />
                        Score: 850 pts
                      </span>
                    </div>
                  </div>

                  <div className="bg-background/50 rounded-lg p-6 mb-6">
                    <p className="text-lg font-medium text-foreground mb-4">
                      Quelle est la dérivée de f(x) = 3x² + 2x - 1 ?
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {[
                        "f'(x) = 6x + 2",
                        "f'(x) = 3x + 2",
                        "f'(x) = 6x - 1",
                        "f'(x) = 3x² + 2",
                      ].map((option, i) => (
                        <button
                          key={i}
                          className="p-3 text-left rounded-lg border border-muted hover:border-primary/50 hover:bg-primary/5 transition-colors"
                        >
                          <span className="font-medium text-primary mr-2">
                            {String.fromCharCode(65 + i)}.
                          </span>
                          {option}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Sparkles className="size-4" />
                      Temps restant: 45s
                    </div>
                    <Button className="bg-primary hover:bg-primary/90">Valider la Réponse</Button>
                  </div>
                </div>
              </div>

              {/* Floating Quiz Stats */}
              <div className="absolute -top-6 -left-6 bg-card border border-primary/20 rounded-lg p-4 shadow-lg animate-bounce delay-300">
                <div className="flex items-center gap-2">
                  <Brain className="size-5 text-primary" />
                  <div>
                    <p className="text-xs text-muted-foreground">Matières</p>
                    <p className="font-bold text-foreground">25+</p>
                  </div>
                </div>
              </div>

              <div className="absolute -top-6 -right-6 bg-card border border-accent/20 rounded-lg p-4 shadow-lg animate-bounce delay-700">
                <div className="flex items-center gap-2">
                  <Trophy className="size-5 text-accent" />
                  <div>
                    <p className="text-xs text-muted-foreground">Quiz Créés</p>
                    <p className="font-bold text-foreground">10K+</p>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-6 -left-6 bg-card border border-secondary/20 rounded-lg p-4 shadow-lg animate-bounce delay-1000">
                <div className="flex items-center gap-2">
                  <Target className="size-5 text-secondary" />
                  <div>
                    <p className="text-xs text-muted-foreground">Précision Moy.</p>
                    <p className="font-bold text-foreground">87%</p>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-6 -right-6 bg-card border border-primary/20 rounded-lg p-4 shadow-lg animate-bounce delay-500">
                <div className="flex items-center gap-2">
                  <Sparkles className="size-5 text-primary" />
                  <div>
                    <p className="text-xs text-muted-foreground">Niveaux</p>
                    <p className="font-bold text-foreground">Tous</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
