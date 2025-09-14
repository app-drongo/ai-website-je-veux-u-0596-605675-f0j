import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import {
  ChevronLeft,
  ChevronRight,
  X,
  Expand,
  Grid3x3,
  BookOpen,
  Users,
  Trophy,
  Star,
  Play,
  Brain,
} from 'lucide-react';

export default function Gallery() {
  const subjects = [
    {
      id: 1,
      title: 'Mathématiques Avancées',
      category: 'Sciences Exactes',
      mainImage:
        'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&h=600&fit=crop',
      images: [
        'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1596495578065-6e0763fa1178?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1509228627152-72ae9ae6848d?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1518133910546-b6c2fb7d79e3?w=800&h=600&fit=crop',
      ],
      stats: { quizzes: 156, players: 12500, difficulty: 'Expert' },
      badge: '🏆 Populaire',
      color: 'bg-primary/10',
    },
    {
      id: 2,
      title: 'Histoire de France',
      category: 'Sciences Humaines',
      mainImage:
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop',
      images: [
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=800&h=600&fit=crop',
      ],
      stats: { quizzes: 89, players: 8900, difficulty: 'Intermédiaire' },
      badge: '⭐ Nouveau',
      color: 'bg-secondary/10',
    },
    {
      id: 3,
      title: 'Biologie Cellulaire',
      category: 'Sciences de la Vie',
      mainImage: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=600&fit=crop',
      images: [
        'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1576086213369-97a306d36557?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=800&h=600&fit=crop',
      ],
      stats: { quizzes: 203, players: 15600, difficulty: 'Avancé' },
      badge: '🔥 Tendance',
      color: 'bg-accent/10',
    },
    {
      id: 4,
      title: 'Littérature Française',
      category: 'Langues & Lettres',
      mainImage:
        'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800&h=600&fit=crop',
      images: [
        'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=800&h=600&fit=crop',
      ],
      stats: { quizzes: 134, players: 9800, difficulty: 'Intermédiaire' },
      badge: '📚 Classique',
      color: 'bg-muted/20',
    },
    {
      id: 5,
      title: 'Physique Quantique',
      category: 'Sciences Exactes',
      mainImage:
        'https://images.unsplash.com/photo-1636466497217-26a8cbeaf0aa?w=800&h=600&fit=crop',
      images: [
        'https://images.unsplash.com/photo-1636466497217-26a8cbeaf0aa?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1518133910546-b6c2fb7d79e3?w=800&h=600&fit=crop',
      ],
      stats: { quizzes: 78, players: 5400, difficulty: 'Expert' },
      badge: '🧠 Défi',
      color: 'bg-primary/15',
    },
    {
      id: 6,
      title: 'Géographie Mondiale',
      category: 'Sciences Humaines',
      mainImage:
        'https://images.unsplash.com/photo-1519302959554-a75be0afc82a?w=800&h=600&fit=crop',
      images: [
        'https://images.unsplash.com/photo-1519302959554-a75be0afc82a?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&h=600&fit=crop',
      ],
      stats: { quizzes: 167, players: 11200, difficulty: 'Facile' },
      badge: '🌍 Aventure',
      color: 'bg-accent/15',
    },
  ];

  return (
    <section className="py-16 bg-background relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 text-6xl">🎯</div>
        <div className="absolute top-20 right-20 text-4xl">🧠</div>
        <div className="absolute bottom-20 left-20 text-5xl">⚡</div>
        <div className="absolute bottom-10 right-10 text-6xl">🏆</div>
        <div className="absolute top-1/2 left-1/4 text-3xl">🎪</div>
        <div className="absolute top-1/3 right-1/3 text-4xl">🎨</div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header with Mega Quiz Branding */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="text-4xl">🎯</div>
            <h1 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Mega Quiz
            </h1>
            <div className="text-4xl">🧠</div>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
            Explorez Toutes Nos Matières
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Découvrez des milliers de quiz interactifs dans toutes les disciplines. Testez vos
            connaissances et défiez vos amis ! 🚀
          </p>
        </div>

        {/* Subject Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {subjects.map(subject => (
            <Card
              key={subject.id}
              className={`group overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 ${subject.color} border-2 hover:border-primary/30`}
            >
              {/* Main Image Container */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={subject.mainImage}
                  alt={subject.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />

                {/* Animated Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button
                    variant="secondary"
                    size="sm"
                    className="absolute bottom-4 right-4 gap-2 animate-pulse"
                  >
                    <Brain className="size-4" />
                    {subject.images.length} Quiz Types
                  </Button>
                </div>

                {/* Play Button */}
                <Button
                  size="icon"
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 scale-75 group-hover:scale-100 bg-primary hover:bg-primary/90"
                >
                  <Play className="size-6 fill-current" />
                </Button>

                {/* Badge */}
                <div className="absolute top-4 left-4">
                  <div className="bg-background/95 backdrop-blur-sm px-3 py-1 rounded-full border-2 border-primary/20">
                    <span className="font-bold text-sm">{subject.badge}</span>
                  </div>
                </div>

                {/* Difficulty Badge */}
                <div className="absolute top-4 right-4">
                  <div className="bg-accent/90 backdrop-blur-sm px-2 py-1 rounded-full">
                    <span className="font-semibold text-xs text-white">
                      {subject.stats.difficulty}
                    </span>
                  </div>
                </div>
              </div>

              {/* Subject Info */}
              <div className="p-5">
                <div className="flex items-center gap-2 mb-2">
                  <div className="text-xl">📚</div>
                  <span className="text-xs font-medium text-accent uppercase tracking-wide">
                    {subject.category}
                  </span>
                </div>

                <h3 className="font-bold text-xl text-foreground mb-3 group-hover:text-primary transition-colors">
                  {subject.title}
                </h3>

                {/* Subject Stats */}
                <div className="grid grid-cols-3 gap-3 text-sm text-muted-foreground mb-4">
                  <div className="flex flex-col items-center gap-1 p-2 bg-muted/30 rounded-lg">
                    <BookOpen className="size-4 text-primary" />
                    <span className="font-semibold text-foreground">{subject.stats.quizzes}</span>
                    <span className="text-xs">Quiz</span>
                  </div>
                  <div className="flex flex-col items-center gap-1 p-2 bg-muted/30 rounded-lg">
                    <Users className="size-4 text-secondary" />
                    <span className="font-semibold text-foreground">
                      {subject.stats.players.toLocaleString()}
                    </span>
                    <span className="text-xs">Joueurs</span>
                  </div>
                  <div className="flex flex-col items-center gap-1 p-2 bg-muted/30 rounded-lg">
                    <Trophy className="size-4 text-accent" />
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="size-3 fill-accent text-accent" />
                      ))}
                    </div>
                    <span className="text-xs">Top</span>
                  </div>
                </div>

                {/* Preview Thumbnails */}
                <div className="grid grid-cols-4 gap-1 mb-4">
                  {subject.images.slice(0, 4).map((img, idx) => (
                    <div
                      key={idx}
                      className="aspect-square rounded-lg overflow-hidden cursor-pointer hover:opacity-80 transition-opacity border-2 border-transparent hover:border-primary/50"
                    >
                      <img
                        src={img}
                        alt={`${subject.title} ${idx + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>

                {/* Action Button */}
                <Button className="w-full gap-2 bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 font-semibold">
                  <Play className="size-4" />
                  Commencer les Quiz
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Bottom Action */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-4 mb-6">
            <div className="text-3xl">🎪</div>
            <div className="text-3xl">🎯</div>
            <div className="text-3xl">🏆</div>
          </div>
          <Button
            size="lg"
            variant="outline"
            className="gap-3 text-lg px-8 py-6 border-2 hover:border-primary/50"
          >
            <Grid3x3 className="size-5" />
            Découvrir Toutes les Matières
            <ChevronRight className="size-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}
