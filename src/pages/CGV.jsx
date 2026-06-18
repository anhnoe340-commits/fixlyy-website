import React from 'react';
import LegalLayout from '../components/LegalLayout';

export default function CGV() {
  return (
    <LegalLayout title="Conditions Générales de Vente" lastUpdated="18 juin 2026">
      <div className="info-box">
        <p className="!mb-0 text-sm">
          Les présentes Conditions Générales de Vente (CGV) s'appliquent à tout abonnement souscrit sur la plateforme Fixlyy accessible à l'adresse <a href="https://app.fixlyy.fr">app.fixlyy.fr</a>. Elles complètent les Conditions Générales d'Utilisation (CGU) et prévalent en cas de conflit sur les questions tarifaires et contractuelles.
        </p>
      </div>

      <h2>1. Durée d'engagement</h2>
      <p>
        Fixlyy propose deux formules de facturation, chacune assortie d'une durée d'engagement initiale :
      </p>
      <ul>
        <li>
          <strong>Facturation mensuelle :</strong> durée initiale de <strong>3 mois</strong> à compter de la date de premier paiement (hors période d'essai gratuite). À l'issue de ces 3 mois, l'abonnement devient résiliable à tout moment avec un préavis d'un mois.
        </li>
        <li>
          <strong>Facturation annuelle :</strong> durée initiale de <strong>12 mois</strong>, facturés en une seule fois à la souscription. Aucune résiliation partielle n'est possible avant l'échéance annuelle ; à l'issue des 12 mois, l'abonnement est reconduit tacitement pour une nouvelle période annuelle, sauf résiliation notifiée au moins 30 jours avant l'échéance.
        </li>
      </ul>
      <p>
        La durée d'engagement constitue la contrepartie de la mise à disposition du numéro dédié, de la configuration personnalisée de l'assistante et du support à l'onboarding fournis par Fixlyy.
      </p>

      <h2>2. Résiliation pendant la période d'engagement</h2>
      <p>
        Si l'Utilisateur résilie son abonnement avant la fin de la période d'engagement :
      </p>
      <ul>
        <li>Les sommes déjà réglées restent acquises à Fixlyy</li>
        <li>
          <strong>Formule mensuelle :</strong> les mensualités restantes jusqu'à la fin des 3 mois sont exigibles et feront l'objet d'une facturation, sauf accord contraire écrit de Fixlyy
        </li>
        <li>
          <strong>Formule annuelle :</strong> aucun remboursement prorata n'est effectué sur la période annuelle en cours, sauf activation de la garantie satisfait ou remboursé (art. 4)
        </li>
        <li>L'accès au Service est maintenu jusqu'à la date d'effet de la résiliation</li>
      </ul>
      <p>
        La résiliation s'effectue via le portail client Stripe accessible depuis le tableau de bord, ou sur demande à <a href="mailto:support@fixlyy.fr">support@fixlyy.fr</a>.
      </p>

      <h2>3. Résiliation après la période d'engagement</h2>
      <p>
        <strong>Formule mensuelle :</strong> après la période initiale de 3 mois, l'Utilisateur peut résilier à tout moment depuis son espace client. La résiliation prend effet à la fin de la période mensuelle en cours.
      </p>
      <p>
        <strong>Formule annuelle :</strong> la résiliation doit être notifiée au moins 30 jours avant la date de renouvellement annuel. Sans notification dans ce délai, l'abonnement est automatiquement reconduit pour une nouvelle période de 12 mois.
      </p>
      <p>
        Aucun remboursement prorata temporis n'est effectué au-delà de la garantie satisfait ou remboursé 30 jours (voir art. 4).
      </p>

      <h2>4. Garantie satisfait ou remboursé</h2>
      <p>
        La garantie satisfait ou remboursé de 30 jours s'applique au premier paiement de l'abonnement, toutes formules confondues. Si l'Utilisateur active cette garantie dans les 30 premiers jours suivant le premier paiement :
      </p>
      <ul>
        <li>L'engagement (3 mois ou 12 mois) est automatiquement levé</li>
        <li>Le montant du premier paiement est intégralement remboursé</li>
        <li>L'abonnement est résilié sans frais supplémentaires</li>
      </ul>
      <p>
        La demande de remboursement s'effectue par email à <a href="mailto:support@fixlyy.fr">support@fixlyy.fr</a> en précisant le motif.
      </p>

      <h2>5. Tarifs</h2>
      <p>Les tarifs en vigueur au moment de la souscription sont :</p>
      <p><strong>Facturation mensuelle</strong></p>
      <ul>
        <li><strong>Solo — 97 €/mois HT :</strong> 300 minutes incluses — engagement 3 mois</li>
        <li><strong>Pro — 197 €/mois HT :</strong> 500 minutes incluses — engagement 3 mois</li>
        <li><strong>Max — 347 €/mois HT :</strong> 1 000 minutes incluses — engagement 3 mois</li>
      </ul>
      <p><strong>Facturation annuelle</strong> (−20%, facturé en une fois)</p>
      <ul>
        <li><strong>Solo — 931,20 €/an HT</strong> (soit 77,60 €/mois) — engagement 12 mois</li>
        <li><strong>Pro — 1 891,20 €/an HT</strong> (soit 157,60 €/mois) — engagement 12 mois</li>
        <li><strong>Max — 3 331,20 €/an HT</strong> (soit 277,60 €/mois) — engagement 12 mois</li>
      </ul>
      <p>
        Les minutes au-delà du forfait sont facturées <strong>0,25 €/min (Solo, Pro) / 0,20 €/min (Max)</strong>, apparaissant sur la facture mensuelle (ou annuelle) suivante.
      </p>
      <p>
        Fixlyy se réserve le droit de modifier ses tarifs avec un préavis de 30 jours par email. En cas d'augmentation tarifaire pendant une période d'engagement, l'Utilisateur peut résilier sans frais dans les 30 jours suivant la notification.
      </p>

      <h2>6. Facturation et paiement</h2>
      <p>
        La facturation est effectuée par avance via Stripe (certifié PCI-DSS), selon la périodicité choisie :
      </p>
      <ul>
        <li><strong>Mensuelle :</strong> prélèvement automatique chaque mois à la date anniversaire de souscription</li>
        <li><strong>Annuelle :</strong> prélèvement unique au moment de la souscription, renouvelé automatiquement chaque année</li>
      </ul>
      <p>
        Les factures sont disponibles dans le portail client Stripe accessible depuis le tableau de bord Fixlyy. En cas d'échec de prélèvement, Fixlyy se réserve le droit de suspendre l'accès au Service jusqu'à régularisation. Un second échec dans les 7 jours suivants peut entraîner la résiliation de l'abonnement.
      </p>

      <h2>7. Droit de rétractation</h2>
      <p>
        Conformément à l'article L.221-28 du Code de la consommation, le droit de rétractation de 14 jours ne s'applique pas aux services d'abonnement dont l'exécution a commencé avant l'expiration du délai de rétractation, avec l'accord exprès du consommateur.
      </p>
      <p>
        L'accès au Service étant fourni immédiatement à la souscription (ou à l'issue de l'essai gratuit), l'Utilisateur renonce expressément à son droit de rétractation. La garantie satisfait ou remboursé 30 jours (art. 4) offre une protection équivalente et plus favorable.
      </p>

      <h2>8. Droit applicable et litiges</h2>
      <p>
        Les présentes CGV sont soumises au droit français. Tout litige relatif à la facturation ou à l'exécution du contrat sera soumis, à défaut de résolution amiable, aux tribunaux compétents de Paris.
      </p>

      <h2>9. Contact</h2>
      <p>
        Pour toute question commerciale ou litige de facturation : <a href="mailto:support@fixlyy.fr">support@fixlyy.fr</a>
      </p>
    </LegalLayout>
  );
}
