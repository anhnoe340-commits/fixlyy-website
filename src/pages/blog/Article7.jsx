import React from 'react';
import { Link } from 'react-router-dom';
import BlogLayout from './BlogLayout';
import { getPost } from './posts';

const meta = getPost('artisan-solo-ne-plus-rater-client');

export default function Article7() {
  return (
    <BlogLayout {...meta}>
      <p>
        Quand on travaille seul, on est à la fois l'ouvrier, le commercial, le
        comptable et le standard téléphonique. Le problème, c'est qu'on ne peut pas
        faire ces quatre métiers en même temps. Et c'est souvent le standard qui
        trinque : impossible de décrocher quand on a les deux mains prises. Résultat,
        l'artisan solo perd des clients non pas par manque de compétence, mais par
        manque d'ubiquité. Voici comment régler ce problème sans embaucher.
      </p>

      <h2>Le dilemme irrésoluble : décrocher ou bosser ?</h2>
      <p>
        Vous connaissez cette scène par cœur. Vous êtes concentré sur une soudure
        délicate, ou en train de porter une charge lourde, et le téléphone sonne.
        Deux choix, tous les deux mauvais :
      </p>
      <ul>
        <li>
          <strong>Vous décrochez&nbsp;:</strong> vous interrompez votre travail,
          parfois dangereusement, vous répondez de façon expéditive, et le client
          actuel voit que vous êtes distrait.
        </li>
        <li>
          <strong>Vous ne décrochez pas&nbsp;:</strong> l'appel bascule sur
          messagerie, le prospect raccroche et appelle le concurrent. Vous ne saurez
          jamais ce que vous avez perdu.
        </li>
      </ul>
      <p>
        Ce dilemme est structurel : il ne se résout pas par de la volonté ou de la
        discipline. Tant que vous êtes seul, vous ne pouvez pas être à deux endroits.
        C'est mathématique. On le développe dans{' '}
        <Link to="/blog/artisans-perdent-clients">
          pourquoi les artisans perdent des clients sans le savoir
        </Link>
        .
      </p>

      <h2>Les solutions testées (et leurs limites)</h2>
      <p>Les artisans solo ont tout essayé. Faisons le bilan honnête :</p>
      <h3>La messagerie vocale</h3>
      <p>
        Mieux que rien, mais faible : la majorité des prospects ne laissent pas de
        message. Et ceux qui le font attendent un rappel qui arrive souvent trop tard.
      </p>
      <h3>Le répondeur avec message rassurant</h3>
      <p>
        Un peu mieux qu'une messagerie brute, car il rassure. Mais il ne{' '}
        <em>qualifie</em> rien : vous rappelez à l'aveugle, sans savoir si c'est une
        urgence ou un simple renseignement.
      </p>
      <h3>La sous-traitance du standard (télésecrétariat)</h3>
      <p>
        Efficace en journée, mais coûteux et limité aux heures de bureau. Or beaucoup
        d'urgences — donc les chantiers les mieux payés — tombent le soir, la nuit ou
        le week-end. Le comparatif complet est ici :{' '}
        <Link to="/blog/secretaire-vs-ia">secrétaire classique vs assistante IA</Link>
        .
      </p>
      <h3>Embaucher une secrétaire</h3>
      <p>
        Disproportionné pour un solo : 2 500 € et plus par mois chargés, plus la
        gestion RH, les congés, la formation. Un investissement qui n'a de sens qu'à
        partir d'un certain volume et d'une équipe.
      </p>

      <h2>Pourquoi l'IA change la donne pour les solos</h2>
      <p>
        L'assistante IA résout précisément le dilemme «&nbsp;décrocher ou
        bosser&nbsp;», parce qu'elle décroche <em>à votre place</em>, sans que vous
        ayez à faire quoi que ce soit. Elle est disponible 24h/24, elle ne prend
        jamais de congé, elle ne tombe pas malade, et elle coûte une fraction du prix
        d'un salarié. Pour un artisan seul, c'est la première fois qu'être à deux
        endroits en même temps devient possible.
      </p>
      <p>
        Surtout, elle ne se contente pas de prendre l'appel : elle le{' '}
        <em>qualifie</em>. Vous ne rappelez plus à l'aveugle. Vous savez déjà qui,
        quoi, où, et à quel point c'est urgent. Le détail du fonctionnement est dans{' '}
        <Link to="/blog/receptionniste-ia-comment-ca-marche">
          comment fonctionne une réceptionniste IA
        </Link>
        .
      </p>

      <h2>Comment Mia s'intègre sans changer vos habitudes</h2>
      <p>
        Le plus important pour un artisan débordé : Mia ne bouleverse rien.
      </p>
      <ul>
        <li><strong>Vous gardez votre numéro.</strong> Un simple renvoi d'appel suffit.</li>
        <li><strong>Vous décrochez toujours quand vous voulez.</strong> En renvoi «&nbsp;sur non-réponse&nbsp;», Mia ne prend l'appel que si vous ne répondez pas.</li>
        <li><strong>Vous êtes prévenu par SMS.</strong> Chaque appel qualifié arrive sur votre téléphone en 30 secondes.</li>
        <li><strong>Vous rappelez à votre rythme,</strong> entre deux interventions, avec tout le contexte.</li>
      </ul>
      <p>
        La mise en place prend quelques minutes. Voir le guide du{' '}
        <Link to="/blog/renvoi-appel-guide-operateurs">renvoi d'appel</Link> pour la
        partie technique.
      </p>

      <h2>Témoignage type : la journée d'un plombier avec Mia</h2>
      <p>
        <strong>8h</strong> — Premier chantier. Le téléphone sonne, Mia décroche, note
        une demande de devis. SMS reçu, à traiter plus tard.<br />
        <strong>11h</strong> — Une urgence fuite. Mia détecte l'urgence, transfère
        l'appel. Le plombier répond en direct et cale une intervention l'après-midi.<br />
        <strong>14h</strong> — Deux appels pendant l'intervention. Mia les qualifie.
        Deux SMS.<br />
        <strong>18h</strong> — Le plombier consulte ses SMS de la journée, rappelle les
        prospects qualifiés, cale deux chantiers pour la semaine.<br />
        <strong>22h</strong> — Un appel tardif pour une porte de garage bloquée. Mia
        prend l'info. Le lendemain matin, le plombier rappelle : le client est encore
        preneur car personne d'autre n'avait décroché à cette heure-là.
      </p>
      <p>
        Zéro appel perdu, zéro stress, zéro interruption dangereuse. C'est exactement
        ce que recherche l'artisan solo. Ce profil est représentatif des retours
        clients — vous en trouverez d'autres dans{' '}
        <Link to="/blog/temoignages-artisans">
          avant/après Fixlyy : ce que disent les artisans
        </Link>
        .
      </p>
    </BlogLayout>
  );
}
