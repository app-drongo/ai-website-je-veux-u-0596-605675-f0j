import { ChevronRight, Home, Search, Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function Pageheader() {
  return (
    <section className="bg-background border-b">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-8 sm:py-12">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
            <Link
              href="/"
              className="hover:text-foreground transition-colors flex items-center gap-1"
            >
              <Home className="size-4" />
              <span>Accueil</span>
            </Link>
            <ChevronRight className="size-4" />
            <Link href="/matieres" className="hover:text-foreground transition-colors">
              Matières
            </Link>
            <ChevronRight className="size-4" />
            <span className="text-foreground font-medium">Quiz de Mathématiques Avancées</span>
          </nav>

          {/* Title and Description */}
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
            <div className="max-w-3xl">
              <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-2">
                Quiz de Mathématiques Niveau Terminale
              </h1>
              <p className="text-lg text-muted-foreground">
                Testez vos connaissances avec 12 quiz interactifs couvrant l'analyse, l'algèbre et
                la géométrie. Des exercices progressifs pour maîtriser le programme de terminale
                scientifique.
              </p>
            </div>

            {/* Actions */}
            <div className="flex gap-2">
              <Button variant="outline" className="gap-2">
                <Filter className="size-4" />
                Filtrer par Difficulté
              </Button>
              <Button className="gap-2">
                <Search className="size-4" />
                Rechercher Quiz
              </Button>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="flex flex-wrap gap-4 mt-6 pt-6 border-t">
            <div className="flex items-center gap-2">
              <div className="size-2 bg-accent rounded-full animate-pulse" />
              <span className="text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">12</span> Quiz Disponibles
              </span>
            </div>
            <div className="text-sm text-muted-foreground">
              <span className="font-semibold text-foreground">15-45 min</span> par quiz
            </div>
            <div className="text-sm text-muted-foreground">
              <span className="font-semibold text-foreground">4.7★</span> Note moyenne
            </div>
            <div className="text-sm text-muted-foreground">
              <span className="font-semibold text-foreground">Correction</span> Automatique
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
