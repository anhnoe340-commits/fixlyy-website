import React from 'react';
import { Link } from 'react-router-dom';
import BlogLayout from './BlogLayout';
import { getPost } from './posts';

const meta = getPost('ia-artisans-mythe-realite');

export default function Article10() {
  return (
    <BlogLayout {...meta}>
      <p>
        «&nbsp;L'intelligence artificielle, c'est pas pour nous, ça.&nbsp;» C'est la
        réaction spontanée de beaucoup d'artisans. Et c'est compréhensible : entre le
        battage médiatique et les promesses irréalistes, difficile de démêler le vrai
        du faux. Alors soyons pragmatiques. On prend les 6 idées reçues les plus
        courantes, et pour chacune on regarde ce qui est vrai — et ce qui ne l'est
        pas. Sans vous vendre du rêve.
      </p>

      <h2>Idée reçue 1 — «&nbsp;C'est trop compliqué à configurer&nbsp;»</h2>
      <p>
        <strong>Faux, en grande partie.</strong> Il y a dix ans, monter une solution
        d'IA vocale demandait des développeurs. Aujourd'hui, une assistante comme Mia
        se configure en quelques minutes : vous renseignez le contexte de votre
        activité, vous activez un renvoi d'appel, c'est tout. Pas de logiciel à
        installer, pas de matériel. La partie la plus «&nbsp;technique&nbsp;» est le
        renvoi d'appel, et elle se résume à taper un code — voir le{' '}
        <Link to="/blog/renvoi-appel-guide-operateurs">guide du renvoi d'appel</Link>.
        Ce qui est vrai : plus vous prenez le temps de bien décrire votre métier lors
        de la config, meilleur est le résultat.
      </p>

      <h2>Idée reçue 2 — «&nbsp;Les clients détestent parler à une machine&nbsp;»</h2>
      <p>
        <strong>Vrai… pour les vieux serveurs vocaux. Faux pour l'IA moderne.</strong>{' '}
        Personne n'aime les menus «&nbsp;tapez 1 pour ceci, tapez 2 pour cela&nbsp;».
        Mais une IA conversationnelle avec une voix naturelle, ce n'est pas ça du tout.
        Elle comprend ce qu'on lui dit et répond normalement. Dans les faits, la
        plupart des clients ne se rendent même pas compte. Et surtout : un client
        préfère mille fois parler à Mia que de tomber sur une messagerie. Le choix
        réel n'est pas «&nbsp;humain ou machine&nbsp;», c'est «&nbsp;quelqu'un décroche
        ou personne ne décroche&nbsp;».
      </p>

      <h2>Idée reçue 3 — «&nbsp;C'est trop cher pour ce que c'est&nbsp;»</h2>
      <p>
        <strong>Faux, si on compare au bon repère.</strong> 497 €/mois peut sembler un
        budget. Mais comparez : une secrétaire à temps plein coûte 2 500 € et plus par
        mois. Et surtout, comparez au coût de <em>ne rien faire</em> : un artisan qui
        rate 3 à 4 appels par jour perd plusieurs milliers d'euros de chiffre chaque
        mois. Le calcul est détaillé dans{' '}
        <Link to="/blog/appels-manques-cout">
          combien vous coûtent vraiment vos appels manqués
        </Link>
        . La vraie question n'est pas «&nbsp;est-ce cher&nbsp;» mais «&nbsp;est-ce que
        ça me rapporte plus que ça ne me coûte&nbsp;». Pour la plupart des artisans, la
        réponse est oui, largement.
      </p>

      <h2>Idée reçue 4 — «&nbsp;Elle va faire des erreurs&nbsp;»</h2>
      <p>
        <strong>Nuancé.</strong> Une IA n'est pas infaillible, c'est vrai. Mais
        comparez au scénario réel qu'elle remplace : une messagerie qui ne prend
        <em> aucune</em> information, ou un rappel tardif qui rate le client. Mia, elle,
        capte le nom, le problème, l'adresse et l'urgence, et vous les transmet. Même
        si elle se trompe sur un détail, vous rappelez le client de toute façon et vous
        corrigez. Le filet de sécurité, c'est <em>vous</em> : Mia qualifie, vous
        décidez. Elle ne s'engage jamais à votre place sur un prix ou un diagnostic
        (voir ses limites dans{' '}
        <Link to="/blog/mia-assistante-ia-fixlyy">
          tout ce que Mia peut faire
        </Link>
        ).
      </p>

      <h2>Idée reçue 5 — «&nbsp;Je perds le contrôle de mes clients&nbsp;»</h2>
      <p>
        <strong>Faux, c'est l'inverse.</strong> Mia ne s'interpose pas entre vous et
        vos clients : elle vous <em>redonne</em> le contrôle. Vous décrochez toujours
        quand vous voulez (en renvoi «&nbsp;sur non-réponse&nbsp;»), vous rappelez
        vous-même, vous gardez la relation. Mia ne fait que capter ce que vous auriez
        perdu et vous le transmettre. Vous êtes plus au courant de ce qui se passe,
        pas moins.
      </p>

      <h2>Idée reçue 6 — «&nbsp;Ça va me remplacer&nbsp;»</h2>
      <p>
        <strong>Non.</strong> Et c'est le point le plus important. Une IA ne pose pas
        un diagnostic sous un évier, ne monte pas sur un toit, ne rassure pas un client
        anxieux avec vingt ans de métier dans la voix. L'expertise terrain et la
        relation humaine, c'est vous, et ça le restera. Mia s'occupe uniquement de la
        partie où l'artisan solo est structurellement faible : décrocher quand il a les
        mains prises.
      </p>

      <h2>Ce que l'IA NE remplace pas</h2>
      <p>Pour être parfaitement clair, l'IA ne touche pas à :</p>
      <ul>
        <li><strong>Votre expertise technique</strong> — le cœur de votre valeur.</li>
        <li><strong>La relation de confiance</strong> avec vos clients fidèles.</li>
        <li><strong>Le jugement humain</strong> sur un cas complexe ou sensible.</li>
        <li><strong>Le travail physique</strong> — évidemment.</li>
      </ul>

      <h2>L'IA comme extension, pas remplacement</h2>
      <p>
        La bonne façon de voir l'IA pour un artisan, ce n'est pas «&nbsp;un robot qui
        prend ma place&nbsp;», c'est «&nbsp;une paire de mains en plus quand les
        miennes sont occupées&nbsp;». Elle étend votre capacité à répondre sans changer
        qui vous êtes ni comment vous travaillez. Le mythe, c'est l'IA qui remplace
        l'artisan. La réalité, c'est l'IA qui empêche l'artisan de perdre des clients
        pendant qu'il fait son métier. C'est exactement ce que vivent les artisans dans{' '}
        <Link to="/blog/temoignages-artisans">
          avant/après Fixlyy
        </Link>
        .
      </p>
    </BlogLayout>
  );
}
