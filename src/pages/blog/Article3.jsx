import React from 'react';
import { Link } from 'react-router-dom';
import BlogLayout from './BlogLayout';
import { getPost } from './posts';

const meta = getPost('secretaire-vs-ia');

export default function Article3() {
  return (
    <BlogLayout {...meta}>
      <p>
        C'est la question que tout artisan solo finit par se poser quand il en a
        assez de rater des appels : «&nbsp;Est-ce que je devrais prendre une
        secrétaire ?&nbsp;» Aujourd'hui, une troisième option est apparue :
        l'assistante IA. Alors, secrétaire à temps plein, secrétaire partagée
        (télésecrétariat) ou intelligence artificielle ? Comparons honnêtement, sans
        vendre du rêve.
      </p>

      <h2>Tableau comparatif : les 3 options en face à face</h2>
      <table>
        <thead>
          <tr>
            <th>Critère</th>
            <th>Secrétaire temps plein</th>
            <th>Secrétaire partagée</th>
            <th>Assistante IA (Mia)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Coût mensuel</strong></td>
            <td>2 500 € et plus (chargé)</td>
            <td>300 à 600 €</td>
            <td>497 €</td>
          </tr>
          <tr>
            <td><strong>Disponibilité</strong></td>
            <td>35 h/semaine</td>
            <td>Heures de bureau</td>
            <td>24h/24, 7j/7</td>
          </tr>
          <tr>
            <td><strong>Temps de formation</strong></td>
            <td>Plusieurs semaines</td>
            <td>Quelques heures</td>
            <td>Quelques minutes</td>
          </tr>
          <tr>
            <td><strong>Congés / maladie</strong></td>
            <td>Problème récurrent</td>
            <td>Partiellement couvert</td>
            <td>Jamais absente</td>
          </tr>
          <tr>
            <td><strong>Connaît votre métier</strong></td>
            <td>Oui, avec le temps</td>
            <td>Rarement en profondeur</td>
            <td>Oui, vous la paramétrez</td>
          </tr>
          <tr>
            <td><strong>Gestion sociale (RH)</strong></td>
            <td>Contrat, paie, URSSAF</td>
            <td>Aucune</td>
            <td>Aucune</td>
          </tr>
        </tbody>
      </table>
      <p>
        Le tableau parle de lui-même sur les coûts et la disponibilité. Une
        assistante IA comme Mia coûte environ 3,6 fois moins qu'une secrétaire à
        temps plein tout en répondant la nuit, le week-end et les jours fériés — là
        où justement tombent les urgences les plus rentables. Pour voir combien ces
        heures «&nbsp;mortes&nbsp;» vous coûtent, lisez{' '}
        <Link to="/blog/appels-manques-cout">
          combien vous coûtent vraiment vos appels manqués
        </Link>
        .
      </p>

      <h2>Les limites de la secrétaire IA (ce qu'elle ne fait pas)</h2>
      <p>
        Soyons clairs, sinon on vous ment. Une assistante IA n'est pas magique et ne
        remplace pas tout. Voici ce que Mia <strong>ne fait pas</strong> :
      </p>
      <ul>
        <li>
          <strong>Elle ne pose pas de diagnostic technique.</strong> Elle ne dira
          jamais à un client «&nbsp;c'est votre joint de culasse&nbsp;». Elle qualifie
          la demande, pas plus. Le diagnostic, c'est votre métier.
        </li>
        <li>
          <strong>Elle ne négocie pas de prix.</strong> Elle ne s'engage pas sur un
          tarif à votre place. Elle prend l'info et vous laisse chiffrer.
        </li>
        <li>
          <strong>Elle ne gère pas les tâches administratives complexes.</strong>{' '}
          Comptabilité, relations fournisseurs, litiges : ce n'est pas son rôle.
        </li>
        <li>
          <strong>Elle ne remplace pas le lien humain.</strong> Sur un dossier
          sensible ou un client fidèle qui veut «&nbsp;vous&nbsp;», rien ne vaut votre
          voix.
        </li>
      </ul>
      <p>
        Ce que Mia fait très bien, en revanche : décrocher instantanément, se
        présenter au nom de votre entreprise, qualifier (nom, problème, adresse,
        urgence, disponibilité) et vous envoyer un SMS récap en 30 secondes. Le
        détail complet est dans{' '}
        <Link to="/blog/mia-assistante-ia-fixlyy">
          tout ce que Mia peut faire pour votre activité
        </Link>
        .
      </p>

      <h2>Quand préférer une vraie secrétaire</h2>
      <p>
        Par honnêteté, voici les cas où une secrétaire humaine reste préférable :
      </p>
      <ul>
        <li>
          Vous avez déjà <strong>plusieurs salariés</strong> et un vrai volume
          administratif (plannings d'équipe, facturation lourde, gestion de dépôt).
        </li>
        <li>
          Votre activité implique beaucoup de <strong>relationnel complexe</strong> :
          gros comptes, appels d'offres, suivi client très personnalisé.
        </li>
        <li>
          Vous voulez quelqu'un qui fait aussi de la <strong>gestion physique</strong>{' '}
          au bureau : accueil, courrier, classement.
        </li>
      </ul>
      <p>
        Dans ces cas, une secrétaire — ou même les deux combinées : l'IA pour filtrer
        et qualifier 24h/24, l'humain pour le reste — a du sens. Mais pour l'artisan
        solo ou la petite structure, l'assistante IA couvre justement le besoin le
        plus douloureux (ne plus rater d'appel) au coût le plus bas.
      </p>

      <h2>Le verdict pour un artisan solo</h2>
      <p>
        Si votre problème numéro un est de <strong>ne plus rater d'appel sans vous
        ruiner ni gérer un salarié</strong>, l'assistante IA gagne sans discussion :
        moins chère qu'une secrétaire temps plein, disponible quand la secrétaire
        partagée dort, et opérationnelle en quelques minutes. Vous pouvez la tester 7
        jours gratuitement et voir par vous-même combien d'appels elle vous récupère,
        avant de vous engager.
      </p>
    </BlogLayout>
  );
}
