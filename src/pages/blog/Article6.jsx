import React from 'react';
import { Link } from 'react-router-dom';
import BlogLayout from './BlogLayout';
import { getPost } from './posts';

const meta = getPost('renvoi-appel-guide-operateurs');

export default function Article6() {
  return (
    <BlogLayout {...meta}>
      <p>
        Le renvoi d'appel est l'étape technique qui fait fonctionner votre assistante
        IA. Sans lui, les appels continuent d'arriver sur votre téléphone et de
        basculer sur messagerie quand vous êtes en chantier. Avec lui, ils sont
        automatiquement redirigés vers Mia, qui décroche à votre place. Bonne
        nouvelle : c'est gratuit, ça prend 30 secondes, et les codes sont quasi
        identiques chez tous les opérateurs français. Voici le guide complet.
      </p>

      <div className="blog-callout">
        <p>
          <strong>Avant de commencer&nbsp;:</strong> munissez-vous du numéro dédié
          fourni par Fixlyy. C'est vers ce numéro que vous allez renvoyer vos appels.
          Dans les codes ci-dessous, remplacez <strong>NUMERO</strong> par ce numéro
          (sans espaces).
        </p>
      </div>

      <h2>Les 3 types de renvoi (immédiat / sur non-réponse / sur occupé)</h2>
      <p>Il existe trois façons de renvoyer vos appels. Choisissez selon votre besoin :</p>
      <ul>
        <li>
          <strong>Renvoi immédiat (inconditionnel)</strong> : tous les appels partent
          directement vers Mia, sans sonner chez vous. Idéal si vous voulez que Mia
          gère 100 % des appels.
        </li>
        <li>
          <strong>Renvoi sur non-réponse</strong> : le téléphone sonne d'abord chez
          vous ; si vous ne décrochez pas au bout de quelques sonneries, l'appel part
          vers Mia. Idéal pour décrocher vous-même quand vous êtes disponible, et
          laisser Mia prendre le relais sinon. <strong>C'est le réglage recommandé</strong>{' '}
          pour la plupart des artisans.
        </li>
        <li>
          <strong>Renvoi sur occupé</strong> : si vous êtes déjà en ligne, le nouvel
          appel bascule vers Mia au lieu de sonner occupé.
        </li>
      </ul>
      <p>
        Vous pouvez combiner «&nbsp;sur non-réponse&nbsp;» et «&nbsp;sur occupé&nbsp;»
        pour ne jamais rien rater. Les codes universels (norme GSM) sont :
      </p>
      <table>
        <thead>
          <tr>
            <th>Type de renvoi</th>
            <th>Activer</th>
            <th>Désactiver</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Renvoi immédiat</td>
            <td><strong>**21*NUMERO#</strong></td>
            <td><strong>##21#</strong></td>
          </tr>
          <tr>
            <td>Renvoi sur non-réponse</td>
            <td><strong>*61*NUMERO#</strong></td>
            <td><strong>##61#</strong></td>
          </tr>
          <tr>
            <td>Renvoi sur occupé</td>
            <td><strong>*67*NUMERO#</strong></td>
            <td><strong>##67#</strong></td>
          </tr>
        </tbody>
      </table>
      <p>
        Tapez le code comme un numéro de téléphone, puis appuyez sur la touche appel.
        Un message de confirmation s'affiche.
      </p>

      <h2>Orange — codes et étapes</h2>
      <p>Les codes GSM standards fonctionnent sur le réseau Orange :</p>
      <ol>
        <li>Ouvrez le clavier téléphonique.</li>
        <li>Pour un renvoi sur non-réponse : tapez <strong>*61*NUMERO#</strong> puis appuyez sur appeler.</li>
        <li>Pour un renvoi immédiat : tapez <strong>**21*NUMERO#</strong> puis appuyez sur appeler.</li>
        <li>Attendez le message de confirmation «&nbsp;renvoi activé&nbsp;».</li>
      </ol>
      <p>
        Vous pouvez aussi gérer le renvoi depuis l'application Orange ou l'espace
        client, dans les réglages d'appel de votre ligne.
      </p>

      <h2>SFR — codes et étapes</h2>
      <ol>
        <li>Ouvrez le clavier téléphonique.</li>
        <li>Renvoi sur non-réponse : <strong>*61*NUMERO#</strong> puis appeler.</li>
        <li>Renvoi immédiat : <strong>**21*NUMERO#</strong> puis appeler.</li>
        <li>Renvoi sur occupé : <strong>*67*NUMERO#</strong> puis appeler.</li>
      </ol>
      <p>
        SFR propose également le réglage «&nbsp;renvoi d'appel&nbsp;» directement dans
        les paramètres d'appel de votre smartphone (Android : Paramètres → Appels →
        Renvoi d'appel ; iPhone : Réglages → Téléphone → Renvoi d'appel).
      </p>

      <h2>Bouygues Telecom — codes et étapes</h2>
      <ol>
        <li>Ouvrez le clavier téléphonique.</li>
        <li>Renvoi sur non-réponse : <strong>*61*NUMERO#</strong> puis appeler.</li>
        <li>Renvoi immédiat : <strong>**21*NUMERO#</strong> puis appeler.</li>
        <li>Pour désactiver : <strong>##61#</strong> ou <strong>##21#</strong> selon le type.</li>
      </ol>
      <p>
        Le menu «&nbsp;Renvoi d'appel&nbsp;» de votre téléphone fonctionne aussi sur
        le réseau Bouygues si vous préférez éviter les codes.
      </p>

      <h2>Free Mobile — codes et étapes</h2>
      <ol>
        <li>Ouvrez le clavier téléphonique.</li>
        <li>Renvoi sur non-réponse : <strong>*61*NUMERO#</strong> puis appeler.</li>
        <li>Renvoi immédiat : <strong>**21*NUMERO#</strong> puis appeler.</li>
      </ol>
      <p>
        Free permet aussi de configurer certains renvois depuis l'espace abonné
        (Mon compte → Mes options), mais la méthode par code GSM reste la plus rapide
        et la plus fiable.
      </p>

      <h2>Comment vérifier que le renvoi fonctionne</h2>
      <p>
        Ne partez jamais du principe que c'est bon sans tester. La vérification prend
        une minute :
      </p>
      <ol>
        <li>Demandez à un proche (ou utilisez un second téléphone) d'appeler votre numéro pro.</li>
        <li>Si vous êtes en renvoi immédiat : Mia doit décrocher directement.</li>
        <li>Si vous êtes en renvoi sur non-réponse : laissez sonner sans décrocher — au bout de quelques sonneries, Mia doit prendre l'appel.</li>
        <li>Vérifiez que vous recevez bien le SMS récap après le test.</li>
      </ol>
      <p>
        Pour comprendre ce qui se passe côté Mia une fois l'appel renvoyé, lisez{' '}
        <Link to="/blog/receptionniste-ia-comment-ca-marche">
          comment fonctionne une réceptionniste IA
        </Link>
        .
      </p>

      <h2>FAQ renvoi d'appel</h2>
      <h3>Le renvoi d'appel est-il payant ?</h3>
      <p>
        L'activation du renvoi est gratuite chez tous les opérateurs. La communication
        renvoyée est décomptée de votre forfait comme un appel normal, mais dans la
        pratique cela représente des durées très courtes.
      </p>
      <h3>Est-ce que je peux toujours décrocher moi-même ?</h3>
      <p>
        Oui, avec le renvoi «&nbsp;sur non-réponse&nbsp;». Votre téléphone sonne
        d'abord ; vous décrochez si vous êtes dispo, sinon Mia prend le relais. Vous
        gardez le contrôle total.
      </p>
      <h3>Comment revenir en arrière ?</h3>
      <p>
        Il suffit de désactiver le renvoi avec le code correspondant (par exemple{' '}
        <strong>##21#</strong> pour le renvoi immédiat). Les appels reviennent
        aussitôt sur votre téléphone.
      </p>
      <h3>Ça marche avec un iPhone et un Android ?</h3>
      <p>
        Oui. Les codes GSM sont indépendants de la marque du téléphone. Vous pouvez
        aussi passer par le menu «&nbsp;Renvoi d'appel&nbsp;» de votre système si vous
        préférez une interface graphique.
      </p>
    </BlogLayout>
  );
}
