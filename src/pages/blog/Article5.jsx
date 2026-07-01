import React from 'react';
import { Link } from 'react-router-dom';
import BlogLayout from './BlogLayout';
import { getPost } from './posts';

const meta = getPost('5-erreurs-telephone-artisan');

export default function Article5() {
  return (
    <BlogLayout {...meta}>
      <p>
        Pour un artisan, le téléphone est l'outil commercial numéro un. C'est par lui
        que passent 90 % de vos nouveaux clients. Mais mal utilisé, il devient votre
        talon d'Achille : il fait fuir les prospects au lieu de les convertir. Voici
        les 5 erreurs les plus courantes — et les plus coûteuses — que commettent les
        artisans avec leur téléphone professionnel. Corrigez-les, et vous verrez la
        différence dès le mois prochain.
      </p>

      <h2>Erreur 1 — Utiliser son numéro personnel</h2>
      <p>
        Mélanger vie pro et perso sur un seul numéro est une erreur classique. Les
        conséquences&nbsp;:
      </p>
      <ul>
        <li>Vous ne pouvez jamais vraiment déconnecter : les clients vous appellent le dimanche soir.</li>
        <li>Impossible de déléguer ou de mettre en place un renvoi propre sans exposer votre vie privée.</li>
        <li>Le jour où vous changez d'organisation, vous êtes coincé avec un numéro que tout le monde a.</li>
      </ul>
      <p>
        <strong>La correction&nbsp;:</strong> séparez un numéro professionnel dédié.
        Cela vous permet de mettre en place un renvoi d'appel vers une assistante, de
        filtrer, et de garder votre vie perso à part.
      </p>

      <h2>Erreur 2 — Une messagerie qui rebute les prospects</h2>
      <p>
        Une messagerie vocale «&nbsp;par défaut&nbsp;» de l'opérateur, froide et
        impersonnelle, envoie un signal désastreux : «&nbsp;cet artisan n'est pas
        joignable, passez au suivant.&nbsp;» Pire, la plupart des prospects ne
        laissent aucun message — vous ne savez même pas qu'ils ont appelé.
      </p>
      <p>
        <strong>La correction&nbsp;:</strong> au minimum, enregistrez un message
        chaleureux qui rassure et promet un rappel rapide. Mais soyons lucides : même
        la meilleure messagerie ne rattrape que les prospects qui acceptent de
        laisser un message, soit une minorité. La vraie solution est de{' '}
        <em>décrocher</em>, pas de renvoyer sur répondeur. C'est tout l'enjeu détaillé
        dans{' '}
        <Link to="/blog/artisans-perdent-clients">
          pourquoi les artisans perdent des clients sans le savoir
        </Link>
        .
      </p>

      <h2>Erreur 3 — Rappeler trop tard</h2>
      <p>
        Vous voyez l'appel manqué à la pause déjeuner, ou le soir. Vous rappelez… mais
        c'est déjà trop tard. En dépannage, la fenêtre de réactivité est courte&nbsp;:
        passé un délai de quelques dizaines de minutes, le prospect a souvent déjà
        appelé un concurrent et pris rendez-vous. Un rappel qui arrive deux heures
        après l'appel initial tombe très souvent dans le vide.
      </p>
      <blockquote>
        La règle en dépannage : le premier qui décroche prend le chantier. La rapidité
        de réponse compte souvent plus que le prix.
      </blockquote>
      <p>
        <strong>La correction&nbsp;:</strong> réduisez le délai de réponse à quasi
        zéro. C'est impossible manuellement quand vous êtes en chantier — d'où
        l'intérêt d'une assistante qui décroche <em>en temps réel</em>.
      </p>

      <h2>Erreur 4 — Pas de suivi des appels manqués</h2>
      <p>
        Beaucoup d'artisans n'ont aucune trace organisée de qui a appelé et qui a été
        rappelé. Résultat : des prospects passent à travers les mailles du filet, on
        oublie de rappeler quelqu'un, on ne sait pas combien d'affaires on a laissées
        filer. Ce qui n'est pas mesuré ne peut pas être amélioré.
      </p>
      <p>
        <strong>La correction&nbsp;:</strong> mettez en place un système qui trace
        chaque appel, même manqué, et vous notifie. Avec Mia, chaque appel donne un
        SMS récap : vous avez la liste complète, rien ne se perd. Le vrai coût de ces
        oublis, on le chiffre dans{' '}
        <Link to="/blog/appels-manques-cout">
          combien vous coûtent vraiment vos appels manqués
        </Link>
        .
      </p>

      <h2>Erreur 5 — Décrocher pendant un chantier dangereux</h2>
      <p>
        À l'inverse, il y a l'erreur de trop décrocher. Répondre au téléphone en haut
        d'une échelle, sous une voiture sur pont, ou les mains dans un tableau
        électrique, c'est prendre un risque physique réel. Et l'appel bâclé en pleine
        intervention donne une mauvaise impression au prospect en plus de vous mettre
        en danger.
      </p>
      <p>
        <strong>La correction&nbsp;:</strong> ne choisissez plus entre votre sécurité
        et vos clients. Une assistante IA décroche pendant que vous restez concentré
        (et en sécurité) sur votre travail. Vous rappelez au bon moment, sans risque,
        avec le contexte. C'est particulièrement vital pour{' '}
        <Link to="/blog/artisan-solo-ne-plus-rater-client">
          les artisans qui travaillent seuls
        </Link>
        .
      </p>

      <h2>Conclusion : votre téléphone peut redevenir une arme</h2>
      <p>
        Ces cinq erreurs ont un point commun : elles créent un écart entre le moment
        où le client vous appelle et le moment où vous lui répondez vraiment. Chaque
        seconde de cet écart coûte des clients. Corrigez-les — numéro dédié, réponse
        immédiate, suivi systématique — et votre téléphone redevient ce qu'il devrait
        être : votre meilleur commercial, qui travaille pour vous 24h/24.
      </p>
    </BlogLayout>
  );
}
