import React from 'react';
import LegalLayout from '../components/LegalLayout';

const APP_URL = 'https://app.fixlyy.fr';

export default function CGU() {
  return (
    <LegalLayout title="Conditions Générales d'Utilisation" lastUpdated="7 avril 2025">
      <div className="info-box">
        <p className="!mb-0 text-sm">
          Les présentes Conditions Générales d'Utilisation (CGU) régissent l'accès et l'utilisation du service Fixlyy accessible à l'adresse <a href={APP_URL}>{APP_URL}</a>. En créant un compte, vous acceptez sans réserve l'intégralité des présentes CGU.
        </p>
      </div>

      <h2>1. Définitions</h2>
      <ul>
        <li><strong>« Fixlyy » / « nous » :</strong> Fixlyy, SASU représentée par son Président Irnand ANIHOUVI, dont les coordonnées figurent dans les Mentions légales</li>
        <li><strong>« Service » :</strong> la plateforme SaaS de secrétariat IA accessible sur app.fixlyy.fr</li>
        <li><strong>« Utilisateur » / « vous » :</strong> tout artisan ou professionnel ayant créé un compte sur le Service</li>
        <li><strong>« Caller » :</strong> personne physique appelant le numéro de téléphone configuré par l'Utilisateur</li>
        <li><strong>« Abonnement » :</strong> formule tarifaire choisie par l'Utilisateur (Solo, Pro ou Équipe)</li>
      </ul>

      <h2>2. Objet du service</h2>
      <p>
        Fixlyy est une solution de secrétariat téléphonique basée sur l'intelligence artificielle. Elle permet à des artisans indépendants (plombiers, électriciens, et autres corps de métier) de :
      </p>
      <ul>
        <li>Ne manquer aucun appel entrant, 24h/24 et 7j/7</li>
        <li>Recevoir un résumé SMS de chaque appel dans les 30 secondes</li>
        <li>Générer automatiquement des devis en fonction de la demande du caller</li>
        <li>Qualifier et planifier des rendez-vous</li>
      </ul>
      <p>
        Fixlyy agit en qualité de <strong>sous-traitant au sens du RGPD</strong> pour le traitement des données des callers, dans les limites définies par l'Utilisateur (responsable de traitement).
      </p>

      <h2>3. Inscription et compte</h2>
      <h3>3.1 Conditions d'éligibilité</h3>
      <p>
        Le Service est réservé aux professionnels exerçant une activité artisanale ou commerciale légalement constituée. L'Utilisateur doit être majeur et avoir la capacité juridique pour s'engager contractuellement.
      </p>

      <h3>3.2 Création du compte</h3>
      <p>
        L'Utilisateur s'engage à fournir des informations exactes, complètes et à jour lors de son inscription. Il est responsable de la confidentialité de ses identifiants de connexion et de toute activité effectuée depuis son compte.
      </p>
      <p>
        Fixlyy se réserve le droit de suspendre ou supprimer tout compte en cas d'informations frauduleuses ou de violation des présentes CGU.
      </p>

      <h2>4. Période d'essai gratuite</h2>
      <p>
        Fixlyy offre une période d'essai gratuite de <strong>30 jours</strong> à compter de la création du compte, sans engagement et sans nécessité de renseigner une carte bancaire. À l'issue de cette période, l'accès au Service est conditionné à la souscription d'un Abonnement payant.
      </p>

      <h2>5. Abonnements et facturation</h2>
      <h3>5.1 Formules disponibles</h3>
      <ul>
        <li><strong>Solo :</strong> jusqu'à 150 appels/mois — 79 €/mois HT</li>
        <li><strong>Pro :</strong> appels illimités, fonctionnalités avancées — 149 €/mois HT</li>
        <li><strong>Équipe :</strong> appels illimités multi-lignes, jusqu'à 5 utilisateurs — 249 €/mois HT</li>
      </ul>
      <p>
        Les tarifs annuels bénéficient d'une remise de 20%. TVA applicable selon la réglementation en vigueur.
      </p>

      <h3>5.2 Paiement</h3>
      <p>
        Le paiement est prélevé mensuellement (ou annuellement) par avance, par carte bancaire via notre prestataire de paiement sécurisé. Tout abonnement commencé est dû dans son intégralité.
      </p>

      <h3>5.3 Renouvellement</h3>
      <p>
        L'abonnement se renouvelle automatiquement à son échéance. L'Utilisateur peut résilier à tout moment depuis son espace client ou en nous contactant, avec effet à la fin de la période en cours.
      </p>

      <h2>6. Garantie satisfait ou remboursé</h2>
      <p>
        Si l'Utilisateur n'est pas satisfait du Service dans les <strong>30 premiers jours suivant son premier paiement</strong>, Fixlyy s'engage à le rembourser intégralement, sur simple demande à <a href="mailto:support@fixlyy.fr">support@fixlyy.fr</a>, sans question posée.
      </p>
      <p>
        Cette garantie est valable une seule fois par compte utilisateur et ne s'applique pas aux renouvellements.
      </p>

      <h2>7. Obligations de l'utilisateur</h2>
      <p>L'Utilisateur s'engage à :</p>
      <ul>
        <li>Utiliser le Service uniquement à des fins professionnelles légales</li>
        <li>Ne pas détourner le Service à des fins de spam, harcèlement ou fraude</li>
        <li>Informer ses callers que les appels sont traités par un service IA (obligatoire légalement)</li>
        <li>Respecter la réglementation applicable au traitement des données personnelles de ses callers</li>
        <li>Ne pas tenter de contourner, compromettre ou surcharger l'infrastructure technique de Fixlyy</li>
        <li>Maintenir à jour ses informations de compte et de facturation</li>
      </ul>

      <h2>8. Niveau de service et disponibilité</h2>
      <p>
        Fixlyy s'efforce de maintenir une disponibilité du Service de <strong>99,5 %</strong> en base mensuelle, hors maintenances planifiées (notifiées 48h à l'avance) et événements de force majeure.
      </p>
      <p>
        En cas d'indisponibilité significative, l'Utilisateur peut demander un avoir proportionnel. Fixlyy ne saurait être tenu responsable des pertes de revenus ou d'opportunités commerciales résultant d'une indisponibilité du Service.
      </p>

      <h2>9. Propriété intellectuelle</h2>
      <p>
        Fixlyy concède à l'Utilisateur une licence d'utilisation personnelle, non exclusive, non transmissible et révocable du Service, pour la durée de son abonnement actif.
      </p>
      <p>
        L'Utilisateur conserve la propriété de ses données (contacts clients, devis, historique d'appels). Fixlyy ne revendique aucun droit sur ces contenus. L'Utilisateur autorise Fixlyy à les traiter dans le seul but de fournir le Service.
      </p>

      <h2>10. Limitation de responsabilité</h2>
      <p>
        Dans les limites permises par la loi, la responsabilité de Fixlyy est limitée aux dommages directs prouvés, plafonnée au montant des sommes versées par l'Utilisateur au cours des 3 derniers mois précédant le sinistre.
      </p>
      <p>
        Fixlyy ne peut être tenu responsable des dommages indirects, perte de chiffre d'affaires, perte de données, ni de la qualité des réponses générées par l'IA qui doit être considérée comme indicative et non comme un conseil professionnel certifié.
      </p>

      <h2>11. Résiliation</h2>
      <h3>11.1 Par l'Utilisateur</h3>
      <p>
        L'Utilisateur peut résilier son abonnement à tout moment depuis son espace client. La résiliation prend effet à la fin de la période d'abonnement en cours. Aucun remboursement prorata temporis n'est effectué (sauf garantie 30 jours, art. 6).
      </p>

      <h3>11.2 Par Fixlyy</h3>
      <p>
        Fixlyy peut résilier ou suspendre l'accès d'un Utilisateur sans préavis en cas de violation grave des présentes CGU, de fraude, ou d'utilisation contraire à la loi. En cas de résiliation pour motif légitime de l'Utilisateur, les sommes versées d'avance sont remboursées au prorata.
      </p>

      <h3>11.3 Export des données</h3>
      <p>
        À la résiliation, l'Utilisateur dispose de <strong>30 jours</strong> pour exporter ses données (contacts, devis, historique) depuis son espace client. Passé ce délai, les données sont supprimées de manière irréversible.
      </p>

      <h2>12. Modification des CGU</h2>
      <p>
        Fixlyy se réserve le droit de modifier les présentes CGU. Les utilisateurs actifs seront notifiés par email au moins <strong>30 jours avant</strong> l'entrée en vigueur de toute modification substantielle. La poursuite de l'utilisation du Service après ce délai vaut acceptation des nouvelles CGU.
      </p>

      <h2>13. Droit applicable et juridiction</h2>
      <p>
        Les présentes CGU sont soumises au droit français. En cas de litige non résolu amiablement dans un délai de 60 jours, les tribunaux de Paris seront seuls compétents.
      </p>
      <p>
        Conformément à l'article L. 612-1 du Code de la consommation, tout utilisateur peut recourir gratuitement à un médiateur de la consommation. Le médiateur désigné par Fixlyy est le <strong>CM2C — Centre de la Médiation de la Consommation de Conciliateurs de Justice</strong>, 14 rue Saint-Jean, 75017 Paris — <a href="https://www.cm2c.net" target="_blank" rel="noopener noreferrer">www.cm2c.net</a>.
      </p>

      <h2>14. Contact</h2>
      <p>
        Pour toute question relative aux présentes CGU : <a href="mailto:support@fixlyy.fr">support@fixlyy.fr</a>
      </p>
    </LegalLayout>
  );
}
