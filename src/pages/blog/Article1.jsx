import React from 'react';
import { Link } from 'react-router-dom';
import BlogLayout from './BlogLayout';
import { getPost } from './posts';

const meta = getPost('appels-manques-cout');

export default function Article1() {
  return (
    <BlogLayout {...meta}>
      <p>
        Il est 14h. Vous êtes à genoux devant un chauffe-eau, les mains dans le
        cambouis, un client qui attend la fin de l'intervention. Et là, votre
        téléphone se met à vibrer dans votre poche. Vous ne pouvez pas décrocher.
        Trois sonneries. Puis le silence. L'appel bascule sur messagerie. Et neuf
        fois sur dix, la personne ne laisse aucun message.
      </p>
      <p>
        Ce petit moment, vous le vivez plusieurs fois par jour sans y penser. Le
        problème, c'est que ce téléphone qui sonne dans le vide n'est pas un
        détail. C'est de l'argent qui sort de votre poche. Un prospect qui
        n'obtient pas de réponse ne rappelle presque jamais : il compose le numéro
        suivant sur Google. Et ce numéro, c'est celui de votre concurrent.
      </p>
      <p>
        La plupart des artisans n'ont jamais fait le calcul. Ils <em>sentent</em>{' '}
        qu'ils ratent des appels, mais ils ne mettent pas de chiffre dessus.
        Faisons-le ensemble, franchement, sans arrondir dans le bon sens.
      </p>

      <h2>Le calcul brutal : combien ça coûte vraiment</h2>
      <p>
        La formule est simple. Il vous suffit de trois chiffres que vous connaissez
        déjà, au moins approximativement :
      </p>
      <blockquote>
        Appels manqués par jour × jours travaillés par mois × taux de conversion ×
        panier moyen = CA perdu chaque mois
      </blockquote>
      <p>Prenons un exemple concret, celui d'un plombier indépendant :</p>
      <ul>
        <li><strong>3 appels manqués par jour</strong> (un chiffre très bas — beaucoup en ratent 5 ou 6 en chantier)</li>
        <li><strong>22 jours travaillés</strong> dans le mois</li>
        <li><strong>Panier moyen de 250 €</strong> par intervention</li>
        <li><strong>1 appel sur 3 qui aurait signé</strong> (taux de conversion prudent de 33 %)</li>
      </ul>
      <p>
        Calcul : 3 × 22 = 66 appels manqués par mois. Sur ces 66, un tiers auraient
        donné une intervention, soit environ 22 chantiers. À 250 € pièce, cela fait{' '}
        <strong>5 500 € de chiffre d'affaires potentiel perdu chaque mois</strong>.
      </p>
      <p>
        Même en divisant ce chiffre par deux pour rester très conservateur, on
        tourne autour de <strong>2 500 à 3 600 € par mois</strong> qui partent chez
        les autres. Sur une année, c'est l'équivalent d'un salarié à temps plein
        que vous financez… pour votre concurrent.
      </p>

      <h2>Les 3 types d'appels que vous perdez sans le savoir</h2>
      <p>
        Tous les appels manqués ne se ressemblent pas. Il y en a trois catégories,
        et chacune vous coûte différemment :
      </p>
      <h3>1. L'urgence qui ne peut pas attendre</h3>
      <p>
        Fuite d'eau, panne de chauffage en plein hiver, porte claquée. Ce client-là
        ne vous laissera pas de message : il a besoin de quelqu'un{' '}
        <em>maintenant</em>. S'il tombe sur votre répondeur, il appelle le suivant
        dans les 30 secondes. C'est souvent l'appel au panier le plus élevé, et
        c'est celui que vous perdez le plus vite.
      </p>
      <h3>2. Le devis qui compare</h3>
      <p>
        Ce prospect appelle trois artisans pour comparer. Si vous ne décrochez pas,
        vous n'êtes tout simplement pas dans la liste. Vous ne perdez pas seulement
        ce chantier : vous perdez aussi tous les suivants que ce client vous aurait
        confiés une fois qu'il vous aurait trouvé fiable.
      </p>
      <h3>3. Le client existant qui a un besoin</h3>
      <p>
        Un ancien client qui rappelle et tombe sur la messagerie se dit que vous
        êtes «&nbsp;devenu difficile à joindre&nbsp;». Sa confiance s'érode. La
        prochaine fois, il testera quelqu'un d'autre.
      </p>

      <h2>Ce que font vos concurrents pendant que vous ne décrochez pas</h2>
      <p>
        Soyons directs : le marché de l'artisanat est saturé de demandes, mais le
        prospect est impatient. La règle est simple et implacable —{' '}
        <strong>le premier qui décroche prend le chantier</strong>. Peu importe que
        vous soyez meilleur, moins cher ou plus proche. Si vous êtes en train de
        souder un tuyau, celui qui a un standard, une secrétaire ou une assistante
        qui répond, lui, encaisse.
      </p>
      <p>
        Ce n'est pas une question de talent. C'est une question de disponibilité.
        Et c'est précisément le point faible structurel de l'artisan solo : vous ne
        pouvez pas être sur le chantier <em>et</em> au téléphone en même temps.
        C'est le cœur du problème, qu'on détaille dans notre article sur{' '}
        <Link to="/blog/artisans-perdent-clients">
          pourquoi les artisans perdent des clients sans le savoir
        </Link>
        .
      </p>

      <h2>Le simulateur de pertes : testez votre situation</h2>
      <p>
        Reprenez la formule et remplissez-la avec <em>vos</em> chiffres réels.
        Soyez honnête. Voici trois profils pour situer où vous en êtes :
      </p>
      <table>
        <thead>
          <tr>
            <th>Profil</th>
            <th>Appels manqués/jour</th>
            <th>Panier moyen</th>
            <th>CA perdu/mois (estimé)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Artisan tranquille</td>
            <td>2</td>
            <td>180 €</td>
            <td>~2 600 €</td>
          </tr>
          <tr>
            <td>Artisan actif</td>
            <td>4</td>
            <td>250 €</td>
            <td>~7 300 €</td>
          </tr>
          <tr>
            <td>Artisan débordé</td>
            <td>6</td>
            <td>320 €</td>
            <td>~14 000 €</td>
          </tr>
        </tbody>
      </table>
      <p>
        Même le scénario le plus modeste dépasse largement le coût d'une assistante
        qui décrocherait à votre place. C'est là que Mia, l'assistante IA de
        Fixlyy, entre en jeu : elle répond 24h/24, qualifie la demande et vous
        envoie un SMS récap en 30 secondes. Vous rappelez avec le contexte complet,
        quand vous êtes disponible. Pour comprendre comment elle fonctionne
        concrètement, lisez{' '}
        <Link to="/blog/receptionniste-ia-comment-ca-marche">
          comment fonctionne une réceptionniste IA pour artisans
        </Link>
        .
      </p>

      <h2>Conclusion : le vrai coût n'est pas celui que vous croyez</h2>
      <p>
        Le coût d'un appel manqué n'est pas «&nbsp;zéro parce que je ne l'ai pas
        vu&nbsp;». C'est un chantier perdu, un client qui ne reviendra pas, et une
        réputation qui s'effrite lentement. Le paradoxe cruel, c'est que plus vous
        êtes bon et occupé, plus vous en ratez.
      </p>
      <p>
        Faites le calcul une bonne fois. Si le chiffre vous fait mal, c'est
        justement pour ça qu'il faut le regarder en face.
      </p>
    </BlogLayout>
  );
}
