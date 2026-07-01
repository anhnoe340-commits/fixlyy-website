import React from 'react';
import { Link } from 'react-router-dom';
import BlogLayout from './BlogLayout';
import { getPost } from './posts';

const meta = getPost('artisans-perdent-clients');

export default function Article2() {
  return (
    <BlogLayout {...meta}>
      <p>
        Voici un paradoxe que vivent des milliers d'artisans indépendants : ils
        sont débordés, ils courent du matin au soir, ils rentrent épuisés… et
        pourtant, à la fin du mois, le chiffre d'affaires ne suit pas comme il le
        devrait. Ils ont l'impression de travailler énormément pour un résultat qui
        stagne.
      </p>
      <p>
        La raison est simple, mais elle est invisible. Vous perdez des clients sans
        même vous en apercevoir, parce que ces clients ne laissent aucune trace.
        Un appel manqué ne fait pas de bruit. Il n'y a pas de facture non payée, pas
        de client mécontent qui vous engueule. Juste un silence. Et ce silence, mois
        après mois, représente une part énorme de votre potentiel.
      </p>

      <h2>L'illusion d'être occupé (être en chantier ≠ être rentable)</h2>
      <p>
        Être occupé, ce n'est pas la même chose qu'être rentable. C'est une confusion
        qui coûte cher. Quand vous êtes sur un chantier, vous générez du chiffre sur
        <em> ce</em> chantier. Mais pendant ce temps, la machine à prospects tourne
        à vide : les appels arrivent, personne ne répond, et le flux de futurs
        clients se tarit.
      </p>
      <p>
        Imaginez un seau percé. Vous versez de l'eau (des prospects) mais un trou au
        fond le vide en continu. Vous pouvez travailler dur toute la journée à
        remplir le seau, le niveau ne monte jamais vraiment. Le trou, ce sont vos
        appels manqués. Tant qu'il n'est pas bouché, tout votre effort commercial —
        vos cartes de visite, votre page Google, votre bouche-à-oreille — fuit par
        là.
      </p>
      <p>
        C'est pour ça que certains artisans peu occupés mais joignables gagnent plus
        que des artisans débordés mais injoignables. La disponibilité au téléphone
        est un multiplicateur silencieux. Si vous voulez le chiffrer précisément,
        notre article sur{' '}
        <Link to="/blog/appels-manques-cout">
          combien vous coûtent vraiment vos appels manqués
        </Link>{' '}
        pose la formule.
      </p>

      <h2>Le comportement du prospect quand il tombe sur messagerie</h2>
      <p>
        Pour comprendre l'ampleur du problème, il faut se mettre dans la tête du
        prospect. Que fait-il vraiment quand il tombe sur votre répondeur ?
      </p>
      <ul>
        <li>
          <strong>Il raccroche sans laisser de message.</strong> C'est le cas de la
          grande majorité. Laisser un message demande un effort, et il n'a aucune
          garantie d'être rappelé.
        </li>
        <li>
          <strong>Il appelle immédiatement le concurrent suivant.</strong> Sur
          Google ou les Pages Jaunes, il y a dix numéros. Le vôtre n'était que le
          premier de la liste.
        </li>
        <li>
          <strong>Il ne repense plus jamais à vous.</strong> Une fois qu'un autre
          artisan a décroché et pris rendez-vous, vous n'existez plus dans son
          esprit.
        </li>
      </ul>
      <p>
        Le prospect n'est pas fidèle par défaut. Il est pressé. Surtout en cas
        d'urgence — une fuite, une panne, une serrure bloquée — où la première
        réponse humaine gagne quasi systématiquement.
      </p>

      <h2>Le coût psychologique : le stress du téléphone</h2>
      <p>
        Il y a un coût qu'on chiffre rarement : la charge mentale. Le téléphone qui
        sonne devient une source d'anxiété permanente. Vous l'entendez vibrer en
        plein chantier et vous êtes tiraillé : décrocher et bâcler votre travail
        actuel, ou ignorer et perdre peut-être un gros client ?
      </p>
      <p>
        Ce stress vous suit le soir, le week-end, en vacances. Vous n'êtes jamais
        vraiment déconnecté parce que chaque appel raté est une occasion perdue. À
        la longue, ça épuise. Beaucoup d'artisans finissent par répondre de manière
        expéditive, presque agacée — ce qui donne une mauvaise première impression
        et fait fuir le prospect autant qu'un répondeur.
      </p>

      <h2>Comment briser ce cycle sans embaucher</h2>
      <p>
        La solution évidente serait d'embaucher une secrétaire. Mais pour un artisan
        solo, c'est disproportionné : un salaire chargé de 2 500 € et plus par mois,
        des congés, des absences, une formation à assurer. Ce n'est ni rentable ni
        pratique à ce stade. Nous comparons les options en détail dans{' '}
        <Link to="/blog/secretaire-vs-ia">
          secrétaire classique vs assistante IA
        </Link>
        .
      </p>
      <p>Les vraies pistes pour boucher le trou du seau sont :</p>
      <ol>
        <li>
          <strong>Une messagerie qui rassure vraiment</strong> et promet un rappel
          rapide — mieux que rien, mais insuffisant, car la plupart ne laissent
          quand même pas de message.
        </li>
        <li>
          <strong>Un système de rappel systématique</strong> des appels manqués dans
          l'heure. Efficace, mais chronophage et facile à oublier quand on enchaîne
          les chantiers.
        </li>
        <li>
          <strong>Une assistante IA qui décroche à votre place, 24h/24.</strong>{' '}
          C'est le seul moyen de répondre <em>en temps réel</em> sans être physiquement
          disponible.
        </li>
      </ol>
      <p>
        C'est exactement le rôle de Mia, l'assistante IA de Fixlyy. Elle répond dès
        la première sonnerie, se présente au nom de votre entreprise, qualifie la
        demande (nom, problème, adresse, urgence) et vous envoie un SMS récap en 30
        secondes. Le prospect a une réponse humaine et professionnelle. Vous rappelez
        quand vous êtes disponible, avec tout le contexte. Le trou est bouché.
      </p>

      <h2>Le déclic : ce que vous ne mesurez pas, vous ne pouvez pas le corriger</h2>
      <p>
        Le vrai problème des appels manqués, c'est leur invisibilité. Vous ne voyez
        que les clients qui passent, jamais ceux qui rebroussent chemin. En rendant
        ces pertes visibles — via un SMS pour chaque appel, même manqué — vous
        reprenez le contrôle. Vous arrêtez de perdre des clients «&nbsp;sans le
        savoir&nbsp;», parce que vous savez enfin.
      </p>
    </BlogLayout>
  );
}
