'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Brain,
  Sparkles,
  Trophy,
  Zap,
  Plus,
  BookOpen,
  Users,
  Target,
  Lightbulb,
  Rocket,
  Star,
  Gamepad2,
} from 'lucide-react';

export default function Contact() {
  const [quizData, setQuizData] = useState({
    title: '',
    subject: '',
    difficulty: '',
    description: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Quiz créé:', quizData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setQuizData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const quizTypes = [
    {
      icon: Brain,
      title: 'Quiz Académique',
      description: 'Mathématiques, Sciences, Histoire',
      subjects: '15+ matières',
      color: 'bg-primary/10 text-primary',
    },
    {
      icon: Gamepad2,
      title: 'Quiz Ludique',
      description: 'Culture générale, Divertissement',
      subjects: 'Quiz amusants',
      color: 'bg-accent/10 text-accent',
    },
    {
      icon: Trophy,
      title: 'Quiz Compétitif',
      description: 'Défis chronométrés, Classements',
      subjects: 'Mode tournoi',
      color: 'bg-secondary/10 text-secondary',
    },
  ];

  const subjects = [
    'Mathématiques',
    'Physique',
    'Chimie',
    'Biologie',
    'Histoire',
    'Géographie',
    'Français',
    'Anglais',
    'Philosophie',
    'Économie',
    'Informatique',
    'Art',
    'Musique',
    'Sport',
    'Culture Générale',
  ];

  const difficulties = [
    { value: 'facile', label: '🟢 Facile', desc: 'Niveau débutant' },
    { value: 'moyen', label: '🟡 Moyen', desc: 'Niveau intermédiaire' },
    { value: 'difficile', label: '🔴 Difficile', desc: 'Niveau expert' },
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/5 relative overflow-hidden">
      {/* Décorations de fond */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 text-primary/20">
          <Brain className="size-32 animate-pulse" />
        </div>
        <div className="absolute top-40 right-20 text-accent/20">
          <Trophy className="size-24 animate-bounce" />
        </div>
        <div className="absolute bottom-32 left-1/4 text-secondary/20">
          <Lightbulb className="size-28 animate-pulse" />
        </div>
        <div className="absolute bottom-20 right-1/3 text-primary/20">
          <Rocket className="size-20 animate-bounce" />
        </div>
        <div className="absolute top-1/3 left-1/2 text-accent/10">
          <Star className="size-16 animate-spin" />
        </div>
        <div className="absolute top-60 left-1/3 text-secondary/15">
          <Zap className="size-12 animate-pulse" />
        </div>
        <div className="absolute bottom-1/2 right-10 text-primary/15">
          <Sparkles className="size-14 animate-bounce" />
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* En-tête avec décorations */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="flex justify-center items-center gap-4 mb-6">
            <div className="p-3 bg-primary/10 rounded-full animate-pulse">
              <Plus className="size-8 text-primary" />
            </div>
            <Badge variant="outline" className="px-6 py-3 text-lg border-primary/20 bg-primary/5">
              <Sparkles className="size-4 mr-2" />
              Créateur de Quiz
            </Badge>
            <div className="p-3 bg-accent/10 rounded-full animate-bounce">
              <Target className="size-8 text-accent" />
            </div>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            Créez Votre
            <span className="block bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent animate-pulse">
              Mega Quiz
            </span>
            <span className="text-3xl sm:text-4xl lg:text-5xl">Personnalisé ! 🎯</span>
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Transformez n'importe quelle matière en quiz interactif et amusant ! Apprentissage
            ludique garanti ! ✨
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          {/* Formulaire de création */}
          <Card className="border-primary/20 shadow-xl bg-card/80 backdrop-blur-sm">
            <CardHeader className="text-center pb-8">
              <div className="flex justify-center mb-4">
                <div className="p-4 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full">
                  <Brain className="size-12 text-primary animate-pulse" />
                </div>
              </div>
              <CardTitle className="text-3xl flex items-center justify-center gap-3">
                <Rocket className="size-8 text-accent" />
                Lancez Votre Quiz
                <Zap className="size-8 text-secondary" />
              </CardTitle>
              <CardDescription className="text-lg">
                Remplissez les détails et créez un quiz époustouflant en quelques clics ! 🚀
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="title"
                    className="block text-lg font-semibold mb-3 flex items-center gap-2"
                  >
                    <Star className="size-5 text-primary" />
                    Titre du Quiz Magique ✨
                  </label>
                  <input
                    type="text"
                    id="title"
                    name="title"
                    value={quizData.title}
                    onChange={handleChange}
                    required
                    className="w-full px-6 py-4 border-2 border-primary/20 rounded-xl bg-background focus:outline-none focus:ring-4 focus:ring-primary/20 focus:border-primary transition-all text-lg"
                    placeholder="Ex: Quiz Ultime de Mathématiques 🧮"
                  />
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-lg font-semibold mb-3 flex items-center gap-2"
                  >
                    <BookOpen className="size-5 text-accent" />
                    Matière Passionnante 📚
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={quizData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-6 py-4 border-2 border-accent/20 rounded-xl bg-background focus:outline-none focus:ring-4 focus:ring-accent/20 focus:border-accent transition-all text-lg"
                  >
                    <option value="">Choisissez votre aventure d'apprentissage...</option>
                    {subjects.map((subject, index) => (
                      <option key={index} value={subject}>
                        {subject}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="difficulty"
                    className="block text-lg font-semibold mb-3 flex items-center gap-2"
                  >
                    <Trophy className="size-5 text-secondary" />
                    Niveau de Défi 🎯
                  </label>
                  <div className="grid grid-cols-1 gap-3">
                    {difficulties.map((diff, index) => (
                      <label
                        key={index}
                        className="flex items-center p-4 border-2 border-secondary/20 rounded-xl cursor-pointer hover:bg-secondary/5 transition-all"
                      >
                        <input
                          type="radio"
                          name="difficulty"
                          value={diff.value}
                          onChange={handleChange}
                          className="mr-4 scale-125 text-secondary"
                        />
                        <div>
                          <span className="font-semibold text-lg">{diff.label}</span>
                          <p className="text-muted-foreground">{diff.desc}</p>
                        </div>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="description"
                    className="block text-lg font-semibold mb-3 flex items-center gap-2"
                  >
                    <Lightbulb className="size-5 text-primary" />
                    Description Inspirante 💡
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    value={quizData.description}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-6 py-4 border-2 border-primary/20 rounded-xl bg-background focus:outline-none focus:ring-4 focus:ring-primary/20 focus:border-primary transition-all resize-none text-lg"
                    placeholder="Décrivez votre quiz fantastique et motivez vos apprenants ! 🌟"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full text-xl py-6 bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 group shadow-lg"
                >
                  <Rocket className="mr-3 size-6 transition-transform group-hover:translate-x-1" />
                  Créer Mon Mega Quiz ! 🚀
                  <Sparkles className="ml-3 size-6 animate-pulse" />
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Types de quiz disponibles */}
          <div className="space-y-8">
            <div className="text-center">
              <h3 className="text-2xl font-bold flex items-center justify-center gap-3 mb-4">
                <Gamepad2 className="size-8 text-primary animate-bounce" />
                Types de Quiz Mega Fun
                <Trophy className="size-8 text-accent animate-pulse" />
              </h3>
              <p className="text-muted-foreground text-lg">
                Choisissez votre style d'apprentissage préféré ! 🎨
              </p>
            </div>

            <div className="space-y-6">
              {quizTypes.map((type, index) => {
                const Icon = type.icon;
                return (
                  <Card
                    key={index}
                    className="border-2 border-muted/20 hover:border-primary/30 transition-all cursor-pointer group hover:shadow-xl bg-card/80 backdrop-blur-sm"
                  >
                    <CardContent className="p-8">
                      <div className="flex items-start gap-6">
                        <div
                          className={`size-16 rounded-2xl ${type.color} flex items-center justify-center group-hover:scale-110 transition-transform`}
                        >
                          <Icon className="size-8" />
                        </div>
                        <div className="flex-1">
                          <h4 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                            {type.title}
                          </h4>
                          <p className="text-muted-foreground mb-3 text-lg">{type.description}</p>
                          <Badge variant="secondary" className="text-sm px-3 py-1">
                            <Users className="size-3 mr-1" />
                            {type.subjects}
                          </Badge>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* Statistiques motivantes */}
            <Card className="border-2 border-accent/20 bg-gradient-to-br from-accent/5 to-primary/5">
              <CardContent className="p-8 text-center">
                <h4 className="text-2xl font-bold mb-6 flex items-center justify-center gap-3">
                  <Zap className="size-8 text-accent animate-pulse" />
                  Mega Quiz en Chiffres
                  <Star className="size-8 text-primary animate-spin" />
                </h4>
                <div className="grid grid-cols-2 gap-6">
                  <div className="p-4 bg-primary/10 rounded-xl">
                    <div className="text-3xl font-bold text-primary mb-2">50K+</div>
                    <div className="text-sm text-muted-foreground">Quiz Créés</div>
                  </div>
                  <div className="p-4 bg-accent/10 rounded-xl">
                    <div className="text-3xl font-bold text-accent mb-2">1M+</div>
                    <div className="text-sm text-muted-foreground">Questions Répondues</div>
                  </div>
                  <div className="p-4 bg-secondary/10 rounded-xl">
                    <div className="text-3xl font-bold text-secondary mb-2">25+</div>
                    <div className="text-sm text-muted-foreground">Matières Disponibles</div>
                  </div>
                  <div className="p-4 bg-primary/10 rounded-xl">
                    <div className="text-3xl font-bold text-primary mb-2">98%</div>
                    <div className="text-sm text-muted-foreground">Satisfaction</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
