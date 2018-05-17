const subcategories: any = {
  announcement: [
    {
      english: 'Site Matters',
      french: 'En relation avec le site',
    },
    {
      english: 'Book Release',
      french: "Parution d'un livre",
    },
    {
      english: 'Software Release',
      french: 'Nouveau logiciel',
    },
    {
      english: 'New Story Alert',
      french: 'Parution nouvelle',
    },
  ],
  cs: [
    {
      english: 'Web',
      french: 'Web',
    },
    {
      english: 'Mobile',
      french: 'Mobile',
    },
    {
      english: 'Design',
      french: 'Design',
    },
    {
      english: 'Tutorial',
      french: 'Tutoriel',
    },
    {
      english: 'Natural Language Processing',
      french: 'Traitement du Langage Naturel',
    },
  ],
  reading: [
    {
      english: 'Fiction',
      french: 'Fiction',
    },
    {
      english: 'Nonfiction',
      french: 'Non Fiction',
    },
    {
      english: 'Mystery',
      french: 'Mystères',
    },
    {
      english: 'Science Fiction',
      french: 'Science-Fiction',
    },
    {
      english: 'Fantasy',
      french: 'Fantastique',
    },
    {
      english: 'Romance',
      french: 'Romance',
    },
    {
      english: 'Thriller',
      french: 'Suspense',
    },
    {
      english: 'Academic',
      french: 'Académique',
    },
  ],
  writing: [
    {
      english: 'Advice',
      french: 'Conseils',
    },
    {
      english: 'Point of View',
      french: 'Point de Vue',
    },
    {
      english: 'Technique',
      french: 'Techniques',
    },
    {
      english: 'Conventions',
      french: 'Conférences',
    },
  ],
  entertainment: [
    {
      english: 'Review',
      french: 'Critique',
    },
    {
      english: 'Rant',
      french: 'Coup de gueule',
    },
    {
      english: 'Series',
      french: 'Séries',
    },
    {
      english: 'Movies',
      french: 'Cinéma',
    },
    {
      english: 'Theater',
      french: 'Théatre',
    },
  ],
  news: [
    {
      english: 'Politics',
      french: 'Politique',
    },
    {
      english: 'Education',
      french: 'Enseignement',
    },
    {
      english: 'Immigration',
      french: 'Immmigration',
    },
    {
      english: 'Crime',
      french: 'Crime',
    },
    {
      english: 'Culture',
      french: 'Culture',
    },
  ],
  society: [
    {
      english: 'Gender Issues',
      french: 'Affaires des Sexes',
    },
    {
      english: 'Race Issues',
      french: 'Affaires des Races',
    },
    {
      english: 'Love',
      french: 'Amour',
    },
    {
      english: 'Philosophy',
      french: 'Philosophie',
    },
    {
      english: 'Culture',
      french: 'Culture',
    },
  ],
};

export default function subcats() {
  const subcats = [];

  for (const catkey in subcategories) {
    for (const subcat of subcategories[catkey]) {
      subcats.push({
        labels: subcat,
        parent:
          catkey === 'cs'
            ? 'Computer Science'
            : catkey
                .split('')
                .map((c, i) => (i === 0 ? c.toUpperCase() : c))
                .join(''),
      });
    }
  }

  return subcats;
}
