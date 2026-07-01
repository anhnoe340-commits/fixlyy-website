// Métadonnées centralisées des articles de blog Fixlyy.
// Sert à l'index /blog et au maillage interne entre articles.

export const POSTS = [
  {
    slug: 'appels-manques-cout',
    title: 'Combien vous coûtent vraiment vos appels manqués ?',
    description:
      'Calculez précisément le coût de vos appels sans réponse. Un plombier perd en moyenne 3 600€/mois. Découvrez comment Mia récupère ce CA perdu.',
    excerpt:
      "Un appel manqué n'est pas un chiffre abstrait : c'est un chantier qui part chez le concurrent. On fait le calcul, sans langue de bois.",
    keyword: 'gestion appels manqués artisan',
    date: '2 juillet 2026',
    readTime: '6 min',
  },
  {
    slug: 'artisans-perdent-clients',
    title: 'Pourquoi les artisans perdent des clients sans le savoir',
    description:
      "Les appels manqués sont invisibles mais coûteux. Voici pourquoi les artisans perdent 30% de leur CA potentiel chaque mois sans s'en rendre compte.",
    excerpt:
      "Le paradoxe de l'artisan débordé qui n'a pas assez de clients. Le trou dans le seau est invisible — mais il se vide quand même.",
    keyword: 'ne plus rater appels artisan',
    date: '2 juillet 2026',
    readTime: '6 min',
  },
  {
    slug: 'secretaire-vs-ia',
    title: 'Secrétaire classique vs assistante IA : le comparatif complet pour artisans',
    description:
      'Secrétaire à temps plein, secrétaire partagée ou assistante IA ? Comparatif complet coûts, disponibilité et qualité pour les artisans indépendants.',
    excerpt:
      "Secrétaire temps plein, secrétaire partagée ou IA ? Le vrai comparatif coûts et disponibilité, sans faire semblant que l'IA fait tout.",
    keyword: 'réceptionniste IA artisan',
    date: '2 juillet 2026',
    readTime: '7 min',
  },
  {
    slug: 'receptionniste-ia-comment-ca-marche',
    title: 'Comment fonctionne une réceptionniste IA pour artisans ?',
    description:
      'Comment Mia décroche vos appels, qualifie les demandes et vous envoie un SMS récap en 30 secondes. Explication technique vulgarisée.',
    excerpt:
      "Du renvoi d'appel au SMS récap : ce qui se passe vraiment, étape par étape, quand un client tombe sur Mia au lieu de votre messagerie.",
    keyword: 'assistante virtuelle plombier',
    date: '2 juillet 2026',
    readTime: '7 min',
  },
  {
    slug: '5-erreurs-telephone-artisan',
    title: '5 erreurs que font les artisans avec leur téléphone professionnel',
    description:
      'Messagerie mal configurée, numéro personnel, rappels oubliés… Les 5 erreurs téléphoniques qui coûtent des milliers d\'euros par mois aux artisans.',
    excerpt:
      "Le téléphone est votre premier commercial. Voici les 5 réglages ratés qui font fuir vos prospects sans que vous le voyiez.",
    keyword: 'gestion appels artisan',
    date: '2 juillet 2026',
    readTime: '6 min',
  },
  {
    slug: 'renvoi-appel-guide-operateurs',
    title: "Guide complet du renvoi d'appel pour artisans (Orange, SFR, Bouygues, Free)",
    description:
      "Les codes USSD et étapes complètes pour configurer le renvoi d'appel sur Orange, SFR, Bouygues et Free. Guide pratique pour artisans.",
    excerpt:
      "Les vrais codes à taper (**21*, *61*, *67*) pour renvoyer vos appels vers Mia, opérateur par opérateur, plus comment vérifier que ça marche.",
    keyword: "renvoi d'appel artisan",
    date: '2 juillet 2026',
    readTime: '7 min',
  },
  {
    slug: 'artisan-solo-ne-plus-rater-client',
    title: 'Comment les artisans qui travaillent seuls peuvent ne plus rater un seul client',
    description:
      'Artisan solo : vous ne pouvez pas être partout à la fois. Voici les solutions concrètes pour ne plus rater un appel sans embaucher.',
    excerpt:
      "Décrocher ou bosser : le dilemme du solo. Les solutions testées, leurs limites, et pourquoi l'IA change enfin la donne.",
    keyword: 'secrétaire IA électricien',
    date: '2 juillet 2026',
    readTime: '6 min',
  },
  {
    slug: 'mia-assistante-ia-fixlyy',
    title: "Mia, l'assistante IA de Fixlyy : tout ce qu'elle peut faire pour votre activité",
    description:
      'Découvrez toutes les fonctionnalités de Mia : réception 24h/24, qualification, SMS récap, rappels automatiques, 10 langues. Guide complet.',
    excerpt:
      "Réception 24h/24, qualification, SMS récap en 30s, rappels automatiques : le tour complet de ce que Mia fait — et de ce qu'elle ne fait pas.",
    keyword: 'Mia assistante IA Fixlyy',
    date: '2 juillet 2026',
    readTime: '7 min',
  },
  {
    slug: 'temoignages-artisans',
    title: 'Avant/Après Fixlyy : ce que disent les artisans',
    description:
      'Découvrez comment des plombiers, électriciens et serruriers ont transformé leur relation client avec Mia. Résultats concrets et chiffrés.',
    excerpt:
      "Trois profils d'artisans, avant et après Mia. Témoignages représentatifs (noms modifiés) et chiffres moyens observés après 3 mois.",
    keyword: 'avis Fixlyy artisan',
    date: '2 juillet 2026',
    readTime: '6 min',
  },
  {
    slug: 'ia-artisans-mythe-realite',
    title: "L'intelligence artificielle pour les artisans : mythe ou réalité ?",
    description:
      "L'IA est-elle vraiment utile pour les artisans ? On démonte 6 idées reçues et on montre ce que l'IA peut (et ne peut pas) faire pour votre activité.",
    excerpt:
      "\"L'IA c'est pas pour nous\" : on prend les 6 idées reçues les plus courantes et on regarde ce qui est vrai — et ce qui ne l'est pas.",
    keyword: 'appels entrants artisan automatique',
    date: '2 juillet 2026',
    readTime: '7 min',
  },
];

export function getPost(slug) {
  return POSTS.find((p) => p.slug === slug);
}

// Retourne 3 autres articles pour le maillage interne "À lire aussi".
export function getRelated(slug, count = 3) {
  const others = POSTS.filter((p) => p.slug !== slug);
  const start = Math.max(0, POSTS.findIndex((p) => p.slug === slug));
  const rotated = [...others.slice(start), ...others.slice(0, start)];
  return rotated.slice(0, count);
}
