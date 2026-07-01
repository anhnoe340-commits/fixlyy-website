import React from 'react';
import { Link } from 'react-router-dom';
import BlogLayout from './BlogLayout';
import { getPost } from './posts';

const meta = getPost('mia-assistante-ia-fixlyy');

export default function Article8() {
  return (
    <BlogLayout {...meta}>
      <p>
        Mia, c'est l'assistante IA vocale de Fixlyy : elle décroche vos appels
        24h/24, qualifie chaque demande et vous envoie un SMS récap en 30 secondes.
        En une phrase : c'est votre secrétaire, disponible tout le temps, qui ne rate
        jamais un appel. Mais elle fait plus que décrocher. Voici le tour complet de
        ce qu'elle peut faire pour votre activité — et, par honnêteté, de ce qu'elle
        ne fait pas.
      </p>

      <h2>Réception des appels : 24h/24, 10 langues</h2>
      <p>
        Le cœur du métier de Mia, c'est de répondre. Toujours.
      </p>
      <ul>
        <li>
          <strong>Disponible 24h/24, 7j/7.</strong> Même le dimanche à 23h, même un
          jour férié. Vos urgences sont toujours prises en charge — et ce sont souvent
          les chantiers les mieux payés.
        </li>
        <li>
          <strong>Voix naturelle.</strong> Mia parle comme une vraie secrétaire, avec
          un ton posé et humain. Pas de voix métallique, pas de menu «&nbsp;tapez
          1&nbsp;».
        </li>
        <li>
          <strong>10 langues.</strong> Français, anglais, arabe, espagnol, portugais,
          allemand, italien, néerlandais, polonais et russe. Elle s'adapte à la langue
          de votre client — pratique dans les grandes agglomérations.
        </li>
        <li>
          <strong>Elle se présente au nom de votre entreprise.</strong> Le client a
          l'impression d'avoir votre standard au bout du fil.
        </li>
      </ul>

      <h2>Qualification intelligente</h2>
      <p>
        Mia ne se contente pas de prendre un nom. Elle pose les bonnes questions pour
        que vous rappeliez avec le contexte complet :
      </p>
      <ul>
        <li><strong>Nom</strong> et numéro de rappel du client.</li>
        <li><strong>Problème</strong> : la nature de la demande (fuite, panne, devis, etc.).</li>
        <li><strong>Adresse</strong> ou zone de l'intervention.</li>
        <li><strong>Urgence</strong> : besoin immédiat ou rendez-vous planifiable.</li>
        <li><strong>Disponibilité</strong> : les créneaux qui arrangent le client.</li>
      </ul>
      <p>
        Si un client se montre impoli, elle reste professionnelle et prend quand même
        les coordonnées. Si c'est une vraie urgence, elle peut vous transférer l'appel
        directement. Le déroulé complet est expliqué dans{' '}
        <Link to="/blog/receptionniste-ia-comment-ca-marche">
          comment fonctionne une réceptionniste IA
        </Link>
        .
      </p>

      <h2>SMS récap en 30 secondes</h2>
      <p>
        Dès la fin de chaque appel, vous recevez un SMS complet sur votre téléphone :
        nom, numéro, problème, adresse, urgence, disponibilité. Vous n'avez plus à
        deviner ni à rappeler à l'aveugle. Vous ouvrez le SMS, vous rappelez au bon
        moment, et le client est bluffé de constater que vous savez déjà tout de sa
        demande.
      </p>

      <h2>Appels sortants automatiques</h2>
      <p>Mia ne fait pas que recevoir. Elle relance aussi, automatiquement :</p>
      <ul>
        <li>
          <strong>Rappel du client manqué.</strong> Un prospect a raccroché avant de
          parler à Mia&nbsp;? Elle le rappelle automatiquement quelques minutes après.
          Zéro client perdu.
        </li>
        <li>
          <strong>Suivi de devis.</strong> Quand un devis a été évoqué pendant
          l'appel, Mia peut recontacter le prospect environ 48h après pour faire le
          suivi et relancer.
        </li>
        <li>
          <strong>Relance de client inactif.</strong> Un client qui n'a pas donné
          signe depuis un moment&nbsp;? Mia peut le recontacter pour reprendre le lien,
          sans que vous ayez à y penser.
        </li>
      </ul>

      <h2>Elle apprend votre métier</h2>
      <p>
        Ce qui rend Mia pertinente, c'est qu'elle n'est pas générique. Lors de la
        configuration, vous renseignez le contexte de votre activité : secteur,
        services proposés, zone d'intervention, horaires, gestion des urgences, tarifs
        indicatifs, questions fréquentes de vos clients, façon de vous présenter, etc.
        Plus vous êtes précis, plus elle colle à votre réalité de terrain. C'est ce
        paramétrage qui fait la différence entre un répondeur bête et une vraie
        assistante.
      </p>

      <h2>Suivi de vos appels</h2>
      <p>
        Chaque appel laisse une trace : vous avez la liste de tout ce qui est entré,
        même les appels manqués rattrapés par Mia. Fini les prospects qui passent à
        travers les mailles du filet. C'est aussi ce qui vous permet de{' '}
        <em>mesurer</em> ce que vous récupériez avant de perdre — voir{' '}
        <Link to="/blog/appels-manques-cout">
          combien vous coûtent vraiment vos appels manqués
        </Link>
        .
      </p>

      <h2>Les limites actuelles (transparence)</h2>
      <p>
        Par honnêteté, Mia n'est pas une baguette magique. Ce qu'elle ne fait{' '}
        <strong>pas</strong> :
      </p>
      <ul>
        <li>Elle ne pose pas de diagnostic technique — ça reste votre expertise.</li>
        <li>Elle ne fixe pas de prix ferme ni ne négocie à votre place.</li>
        <li>Elle ne gère pas votre comptabilité ni vos relations fournisseurs.</li>
        <li>Elle ne remplace pas le lien humain sur vos dossiers sensibles.</li>
      </ul>
      <p>
        Elle est faite pour une chose, et elle la fait très bien : faire en sorte que
        vous ne rateriez plus jamais un appel, et que vous rappeliez toujours avec le
        contexte. Le comparatif avec une secrétaire humaine est dans{' '}
        <Link to="/blog/secretaire-vs-ia">secrétaire classique vs assistante IA</Link>
        .
      </p>

      <h2>Combien ça coûte ?</h2>
      <p>
        Mia est proposée à <strong>497 €/mois</strong>, avec un essai gratuit de 7
        jours (carte bancaire requise, aucun prélèvement avant le 8e jour) et un
        engagement de 3 mois. Vous pouvez donc la tester une semaine sur votre propre
        activité et mesurer combien d'appels elle vous récupère avant de vous engager.
      </p>
    </BlogLayout>
  );
}
