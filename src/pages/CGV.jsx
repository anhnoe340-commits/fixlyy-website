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
        L'abonnement Fixlyy est soumis à une durée d'engagement initiale de <strong>3 mois</strong> à compter de la date de premier paiement (hors période d'essai gratuite). À l'issue de ces 3 mois, l'abonnement devient résiliable à tout moment avec un préavis d'un mois.
      </p>
      <p>
        La durée d'engagement constitue la contrepartie de la mise à disposition du numéro dédié, de la configuration personnalisée de l'assistante et du support à l'onboarding fournis par Fixlyy.
      </p>

      <h2>2. Résiliation pendant la période d'engagement</h2>
      <p>
        Si l'Utilisateur résilie son abonnement avant la fin de la période d'engagement :
      </p>
      <ul>
        <li>Les sommes déjà réglées restent acquises à Fixlyy</li>
        <li>Les mensualités restantes jusqu'à la fin des 3 mois sont exigibles et feront l'objet d'une facturation, sauf accord contraire écrit de Fixlyy</li>
        <li>L'accès au Service est maintenu jusqu'à la date d'effet de la résiliation</li>
      </ul>
      <p>
        La résiliation s'effectue via le portail client Stripe accessible depuis le tableau de bord, ou sur demande à <a href="mailto:support@fixlyy.fr">support@fixlyy.fr</a>.
      </p>

      <h2>3. Résiliation après la période d'engagement</h2>
      <p>
        Après la période initiale de 3 mois, l'Utilisateur peut résilier à tout moment depuis son espace client. La résiliation prend effet à la fin de la période mensuelle en cours.
      </p>
      <p>
        Aucun remboursement prorata temporis n'est effectué au-delà de la période d'essai gratuit (voir art. 4).
      </p>

      <h2>4. Période d'essai gratuit</h2>
      <p>
        Tout nouvel abonnement bénéficie d'une période d'essai gratuit de <strong>7 jours</strong> à compter de la souscription. Pendant cette période :
      </p>
      <ul>
        <li>Aucun prélèvement n'est effectué sur le moyen de paiement enregistré</li>
        <li>L'accès au Service est complet et identique à celui d'un abonnement actif</li>
        <li>L'Utilisateur peut annuler à tout moment avant le 8ème jour sans aucun frais</li>
      </ul>
      <p>
        À l'issue des 7 jours d'essai, le premier prélèvement est automatiquement déclenché selon la formule choisie. Si l'Utilisateur annule avant le 8ème jour, aucune somme n'est due et l'accès est immédiatement révoqué.
      </p>
      <p>
        L'annulation pendant la période d'essai s'effectue depuis le portail client Stripe accessible via le tableau de bord, ou sur demande à <a href="mailto:support@fixlyy.fr">support@fixlyy.fr</a>.
      </p>

      <h2>5. Tarifs</h2>
      <p>Le tarif en vigueur au moment de la souscription est :</p>
      <ul>
        <li><strong>Fixlyy — 497 €/mois HT :</strong> 1 500 minutes incluses — engagement 3 mois — toutes fonctionnalités incluses</li>
      </ul>
      <p>
        Les minutes au-delà du forfait de 1 500 minutes sont facturées <strong>0,20 €/min</strong>, apparaissant sur la facture mensuelle suivante.
      </p>
      <p>
        Fixlyy se réserve le droit de modifier ses tarifs avec un préavis de 30 jours par email. En cas d'augmentation tarifaire pendant une période d'engagement, l'Utilisateur peut résilier sans frais dans les 30 jours suivant la notification.
      </p>

      <h2>6. Facturation et paiement</h2>
      <p>
        La facturation est effectuée par avance via Stripe (certifié PCI-DSS) : prélèvement automatique chaque mois à la date anniversaire de souscription.
      </p>
      <p>
        Les factures sont disponibles dans le portail client Stripe accessible depuis le tableau de bord Fixlyy. En cas d'échec de prélèvement, Fixlyy se réserve le droit de suspendre l'accès au Service jusqu'à régularisation. Un second échec dans les 7 jours suivants peut entraîner la résiliation de l'abonnement.
      </p>

      <h2>7. Droit de rétractation</h2>
      <p>
        Conformément à l'article L.221-28 du Code de la consommation, le droit de rétractation de 14 jours ne s'applique pas aux services d'abonnement dont l'exécution a commencé avant l'expiration du délai de rétractation, avec l'accord exprès du consommateur.
      </p>
      <p>
        L'accès au Service étant fourni immédiatement à la souscription (dès le début de la période d'essai gratuit), l'Utilisateur renonce expressément à son droit de rétractation légal de 14 jours. La période d'essai gratuit de 7 jours (art. 4), pendant laquelle aucun prélèvement n'est effectué, offre une protection équivalente et plus favorable.
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
