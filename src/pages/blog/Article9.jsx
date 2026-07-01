import React from 'react';
import { Link } from 'react-router-dom';
import BlogLayout from './BlogLayout';
import { getPost } from './posts';

const meta = getPost('temoignages-artisans');

export default function Article9() {
  return (
    <BlogLayout {...meta}>
      <div className="blog-callout">
        <p>
          <strong>Note de transparence.</strong> Les témoignages ci-dessous sont{' '}
          <strong>représentatifs</strong> des retours que nous font les artisans
          utilisateurs de Fixlyy. Les prénoms ont été modifiés et les profils
          reconstitués pour préserver la confidentialité. Ils illustrent des
          situations typiques, pas des personnes nommément identifiables.
        </p>
      </div>

      <p>
        Les discours marketing, c'est bien. Les chiffres du terrain, c'est mieux. Un
        appel qui bascule sur messagerie est un chantier qui part chez le concurrent —
        on l'a chiffré dans{' '}
        <Link to="/blog/appels-manques-cout">
          combien vous coûtent vraiment vos appels manqués
        </Link>
        . Voici à quoi ressemble le «&nbsp;avant/après&nbsp;» quand on bouche ce trou.
      </p>

      <h2>Thomas, plombier indépendant à Lyon — «&nbsp;Je récupère 2 chantiers par semaine&nbsp;»</h2>
      <p>
        <strong>Avant&nbsp;:</strong> Thomas ratait 3 à 4 appels par jour en chantier.
        «&nbsp;Je voyais les appels manqués le soir, je rappelais, et une fois sur
        deux la personne avait déjà trouvé quelqu'un d'autre. C'était rageant.&nbsp;»
      </p>
      <p>
        <strong>Après&nbsp;:</strong> «&nbsp;Maintenant Mia décroche, elle note tout,
        je reçois le SMS. Je rappelle avec le contexte complet — les clients sont
        bluffés que je sache déjà de quoi ils parlent. Je récupère facilement 2
        chantiers par semaine que j'aurais perdus avant.&nbsp;» Ce profil illustre
        bien le quotidien décrit dans{' '}
        <Link to="/blog/artisan-solo-ne-plus-rater-client">
          comment ne plus rater un seul client quand on travaille seul
        </Link>
        .
      </p>

      <h2>Karim, électricien en Île-de-France — «&nbsp;Mes nuits sont enfin calmes&nbsp;»</h2>
      <p>
        <strong>Avant&nbsp;:</strong> Karim dormait avec son téléphone sur la table de
        nuit, par peur de rater une urgence. «&nbsp;Je répondais à moitié endormi, mal,
        ou je culpabilisais de ne pas répondre. Ma femme n'en pouvait plus.&nbsp;»
      </p>
      <p>
        <strong>Après&nbsp;:</strong> «&nbsp;Mia prend les appels de nuit. Les vraies
        urgences, elle me les transfère ; le reste, je le vois au réveil dans mes SMS.
        Je dors. Et paradoxalement je capte plus d'urgences qu'avant, parce que celui
        qui appelle à 2h du matin, il est content que quelqu'un décroche.&nbsp;»
      </p>

      <h2>Sophie, garagiste en Bretagne — «&nbsp;Mes clients sont mieux accueillis&nbsp;»</h2>
      <p>
        <strong>Avant&nbsp;:</strong> Sophie, seule sous les voitures toute la journée,
        laissait sonner. «&nbsp;Un garage, ça sonne non-stop. Je ne pouvais pas
        m'arrêter à chaque fois, mes mains sont pleines de cambouis.&nbsp;»
      </p>
      <p>
        <strong>Après&nbsp;:</strong> «&nbsp;Mes clients me disent qu'ils sont mieux
        accueillis au téléphone que dans certains garages où ça décroche jamais. Mia
        prend le rendez-vous, note la marque, le problème. Je gère l'atelier tranquille
        et je rappelle entre deux réparations.&nbsp;»
      </p>

      <h2>Les chiffres moyens après 3 mois</h2>
      <p>
        Au-delà des ressentis, voici les ordres de grandeur qui reviennent le plus
        souvent chez les artisans après quelques mois d'usage. Ce sont des tendances
        observées, pas des garanties&nbsp;:
      </p>
      <ul>
        <li><strong>Zéro appel manqué non traité</strong> : chaque appel donne au minimum un SMS récap.</li>
        <li><strong>Plusieurs chantiers récupérés par semaine</strong> qui seraient partis à la concurrence.</li>
        <li><strong>Un délai de rappel divisé</strong> : on rappelle informé, au bon moment, au lieu de rappeler tard et à l'aveugle.</li>
        <li><strong>Une charge mentale nettement allégée</strong> : le téléphone cesse d'être une source de stress permanent.</li>
      </ul>

      <h2>Ce qui surprend le plus les artisans</h2>
      <p>Trois choses reviennent presque à chaque fois :</p>
      <ol>
        <li>
          <strong>«&nbsp;Je ne pensais pas en rater autant.&nbsp;»</strong> Une fois que
          chaque appel laisse une trace, on découvre le volume réel qu'on perdait —
          souvent bien plus qu'estimé. C'est tout le sujet de{' '}
          <Link to="/blog/artisans-perdent-clients">
            pourquoi les artisans perdent des clients sans le savoir
          </Link>
          .
        </li>
        <li>
          <strong>«&nbsp;Les clients ne se rendent pas compte.&nbsp;»</strong> La voix
          naturelle de Mia fait qu'ils croient parler à une secrétaire humaine.
        </li>
        <li>
          <strong>«&nbsp;C'est le rappel avec contexte qui change tout.&nbsp;»</strong>{' '}
          Rappeler en sachant déjà qui, quoi et où, ça transforme la conversation
          commerciale.
        </li>
      </ol>

      <h2>Envie de voir vos propres chiffres ?</h2>
      <p>
        Le meilleur témoignage, c'est le vôtre. L'essai de 7 jours vous permet de
        mesurer, sur votre propre activité, combien d'appels Mia vous récupère avant
        de vous engager. Pour savoir exactement ce qu'elle sait faire, lisez{' '}
        <Link to="/blog/mia-assistante-ia-fixlyy">
          tout ce que Mia peut faire pour votre activité
        </Link>
        .
      </p>
    </BlogLayout>
  );
}
