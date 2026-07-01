import React from 'react';
import { Link } from 'react-router-dom';
import BlogLayout from './BlogLayout';
import { getPost } from './posts';

const meta = getPost('receptionniste-ia-comment-ca-marche');

export default function Article4() {
  return (
    <BlogLayout {...meta}>
      <p>
        «&nbsp;Une IA qui répond au téléphone à ma place ?&nbsp;» Pour beaucoup
        d'artisans, ça sonne comme de la science-fiction ou comme un serveur vocal
        pénible du genre «&nbsp;tapez 1 pour…&nbsp;». La réalité est différente. Une
        réceptionniste IA moderne comme Mia parle naturellement, comprend ce qu'on
        lui dit et tient une vraie conversation. Voici, concrètement et sans jargon,
        comment ça marche.
      </p>

      <h2>Ce qui se passe quand un client appelle (étape par étape)</h2>
      <h3>Étape 1 — Le renvoi d'appel est activé sur votre numéro</h3>
      <p>
        Vous gardez votre numéro habituel. Vous activez simplement un renvoi d'appel
        vers le numéro dédié que Fixlyy vous attribue. Quand vous ne décrochez pas
        (ou tout le temps, selon votre réglage), l'appel bascule automatiquement vers
        Mia. C'est une manipulation de quelques secondes, détaillée opérateur par
        opérateur dans notre{' '}
        <Link to="/blog/renvoi-appel-guide-operateurs">
          guide complet du renvoi d'appel
        </Link>
        .
      </p>
      <h3>Étape 2 — Mia décroche en moins de 3 secondes</h3>
      <p>
        Pas de sonnerie interminable, pas de messagerie. Mia répond quasi
        instantanément. Pour le client, la différence est énorme : quelqu'un a
        décroché. Il ne raccroche pas, il ne va pas voir le concurrent.
      </p>
      <h3>Étape 3 — Elle se présente au nom de votre entreprise</h3>
      <p>
        Mia ne dit pas «&nbsp;bonjour, vous êtes bien chez une IA&nbsp;». Elle se
        présente au nom de votre entreprise, avec le ton d'une vraie secrétaire.
        «&nbsp;Plomberie Martin, bonjour, que puis-je faire pour vous ?&nbsp;» Le
        client a l'impression de parler à votre standard.
      </p>
      <h3>Étape 4 — Elle qualifie la demande</h3>
      <p>
        C'est le cœur de son travail. Mia pose les bonnes questions, dans l'ordre
        logique :
      </p>
      <ul>
        <li><strong>Qui&nbsp;?</strong> Le nom et le numéro de rappel.</li>
        <li><strong>Quoi&nbsp;?</strong> La nature du problème (fuite, panne, devis…).</li>
        <li><strong>Où&nbsp;?</strong> L'adresse ou la zone de l'intervention.</li>
        <li><strong>Quel niveau d'urgence&nbsp;?</strong> Urgence immédiate ou rendez-vous planifiable.</li>
        <li><strong>Quelle disponibilité&nbsp;?</strong> Les créneaux qui arrangent le client.</li>
      </ul>
      <p>
        Si c'est une vraie urgence, Mia peut vous transférer l'appel directement. Si
        le client raccroche avant de parler, elle le rappelle automatiquement
        quelques minutes après.
      </p>
      <h3>Étape 5 — SMS récap en 30 secondes sur votre téléphone</h3>
      <p>
        Dès la fin de l'appel, vous recevez un SMS complet : nom, numéro, problème,
        adresse, urgence, disponibilité. Vous rappelez quand vous êtes disponible,
        avec tout le contexte en main. Le client est bluffé : «&nbsp;il a tout noté,
        il sait déjà de quoi je parle.&nbsp;»
      </p>

      <h2>La technologie derrière Mia (sans jargon)</h2>
      <p>
        Concrètement, trois briques travaillent ensemble en temps réel :
      </p>
      <ol>
        <li>
          <strong>La reconnaissance vocale</strong> transforme ce que dit le client en
          texte, instantanément.
        </li>
        <li>
          <strong>L'intelligence artificielle conversationnelle</strong> comprend le
          sens, décide quoi répondre et quelles questions poser. C'est elle qui rend
          la conversation naturelle, pas robotique.
        </li>
        <li>
          <strong>La synthèse vocale</strong> transforme la réponse en voix — une voix
          claire et humaine, pas métallique.
        </li>
      </ol>
      <p>
        Tout ça se passe en une fraction de seconde, en boucle, exactement comme une
        conversation humaine. Vous n'avez rien à installer ni à comprendre
        techniquement : vous paramétrez votre activité, et Mia s'occupe du reste. On
        démonte d'ailleurs les fausses idées sur cette techno dans{' '}
        <Link to="/blog/ia-artisans-mythe-realite">
          l'IA pour les artisans : mythe ou réalité
        </Link>
        .
      </p>

      <h2>Ce que Mia apprend sur votre activité</h2>
      <p>
        Pour bien répondre, Mia a besoin de connaître votre métier. Lors de la
        configuration, vous renseignez le contexte de votre entreprise : votre
        secteur, vos services, votre zone d'intervention, vos horaires, votre façon
        de gérer les urgences, vos tarifs indicatifs, les questions typiques de vos
        clients, etc. Plus vous êtes précis, plus Mia colle à votre réalité. Cette
        personnalisation, c'est ce qui la distingue d'un simple répondeur générique.
      </p>

      <h2>Exemple de conversation réelle</h2>
      <blockquote>
        <strong>Mia&nbsp;:</strong> Plomberie Martin, bonjour, que puis-je pour vous&nbsp;?<br />
        <strong>Client&nbsp;:</strong> Bonjour, j'ai une fuite sous mon évier, ça coule pas mal.<br />
        <strong>Mia&nbsp;:</strong> D'accord, je note. C'est une urgence, l'eau coule en continu&nbsp;?<br />
        <strong>Client&nbsp;:</strong> Oui, j'ai coupé mais ça goutte encore.<br />
        <strong>Mia&nbsp;:</strong> Très bien. Vous êtes à quelle adresse&nbsp;?<br />
        <strong>Client&nbsp;:</strong> 12 rue des Lilas à Lyon.<br />
        <strong>Mia&nbsp;:</strong> Parfait. Je prends votre numéro et M. Martin vous
        rappelle très vite pour convenir d'un passage. C'est noté, bonne journée&nbsp;!
      </blockquote>
      <p>
        Trente secondes plus tard, l'artisan reçoit le SMS complet. Il rappelle, déjà
        au courant. Le client se sent pris en charge. C'est exactement ce dont a
        besoin l'artisan solo — voir aussi{' '}
        <Link to="/blog/artisan-solo-ne-plus-rater-client">
          comment ne plus rater un seul client quand on travaille seul
        </Link>
        .
      </p>
    </BlogLayout>
  );
}
