import React from 'react';
import LegalLayout from '../components/LegalLayout';

export default function CGV() {
  return (
    <LegalLayout title="Conditions Générales de Vente" lastUpdated="17 juin 2026">
      <div className="info-box">
        <p className="!mb-0 text-sm">
          Les présentes Conditions Générales de Vente (CGV) s'appliquent à tout abonnement souscrit sur la plateforme Fixlyy accessible à l'adresse <a href="https://app.fixlyy.fr">app.fixlyy.fr</a>. Elles complètent les Conditions Générales d'Utilisation (CGU) et prévalent en cas de conflit sur les questions tarifaires et contractuelles.
        </p>
      </div>

      <h2>1. Engagement initial de 3 mois</h2>
      <p>
        Tout abonnement payant (Solo, Pro ou Max) est souscrit pour une <strong>durée initiale de 3 mois</strong> à compter de la date de premier paiement (hors période d'essai gratuite).
      </p>
      <p>
        Pendant cette période d'engagement, l'Utilisateur est redevable de l'intégralité des mensualités, même en cas de résiliation anticipée. L'engagement de 3 mois constitue la contrepartie de la mise à disposition du numéro dédié, de la configuration personnalisée de l'assistante et du support à l'onboarding fournis par Fixlyy.
      </p>
      <p>
        À l'issue de ces 3 mois, l'abonnement devient résiliable à tout moment avec un préavis d'un mois, sans frais supplémentaires.
      </p>

      <h2>2. Résiliation pendant la période d'engagement</h2>
      <p>
        Si l'Utilisateur résilie son abonnement avant la fin de la période d'engagement de 3 mois :
      </p>
      <ul>
        <li>Les mensualités déjà prélevées restent acquises à Fixlyy</li>
        <li>Les mensualités restantes jusqu'à la fin des 3 mois sont exigibles et feront l'objet d'une facturation au prorata, sauf accord contraire écrit de Fixlyy</li>
        <li>L'accès au Service est maintenu jusqu'à la date d'effet de la résiliation</li>
      </ul>
      <p>
        La résiliation s'effectue via le portail client Stripe accessible depuis le tableau de bord, ou sur demande à <a href="mailto:support@fixlyy.fr">support@fixlyy.fr</a>.
      </p>

      <h2>3. Résiliation après la période d'engagement</h2>
      <p>
        Après la période initiale de 3 mois, l'Utilisateur peut résilier son abonnement à tout moment depuis son espace client. La résiliation prend effet à la fin de la période d'abonnement mensuelle en cours. Aucun remboursement prorata temporis n'est effectué au-delà de la garantie satisfait ou remboursé 30 jours (voir CGU art. 6).
      </p>

      <h2>4. Garantie satisfait ou remboursé</h2>
      <p>
        La garantie satisfait ou remboursé de 30 jours (CGU art. 6) s'applique au premier paiement de l'abonnement, y compris pendant la période d'engagement. Si l'Utilisateur active cette garantie dans les 30 premiers jours, l'engagement de 3 mois est automatiquement levé et l'abonnement résilié sans frais supplémentaires.
      </p>

      <h2>5. Tarifs</h2>
      <p>Les tarifs en vigueur au moment de la souscription sont :</p>
      <ul>
        <li><strong>Solo — 97 €/mois HT :</strong> 300 minutes incluses</li>
        <li><strong>Pro — 197 €/mois HT :</strong> 500 minutes incluses</li>
        <li><strong>Max — 347 €/mois HT :</strong> 1 000 minutes incluses</li>
      </ul>
      <p>
        Les minutes au-delà du forfait sont facturées <strong>0,25 €/min (Solo, Pro) / 0,20 €/min (Max)</strong>, apparaissant sur la facture mensuelle suivante.
      </p>
      <p>
        Fixlyy se réserve le droit de modifier ses tarifs avec un préavis de 30 jours par email. En cas d'augmentation tarifaire pendant une période d'engagement, l'Utilisateur peut résilier sans frais dans les 30 jours suivant la notification.
      </p>

      <h2>6. Facturation et paiement</h2>
      <p>
        La facturation est mensuelle, par avance, via Stripe (certifié PCI-DSS). Les factures sont disponibles dans le portail client Stripe accessible depuis le tableau de bord Fixlyy.
      </p>
      <p>
        En cas d'échec de prélèvement, Fixlyy se réserve le droit de suspendre l'accès au Service jusqu'à régularisation. Un second échec dans les 7 jours suivants peut entraîner la résiliation de l'abonnement.
      </p>

      <h2>7. Droit de rétractation</h2>
      <p>
        Conformément à l'article L.221-28 du Code de la consommation, le droit de rétractation de 14 jours ne s'applique pas aux services d'abonnement dont l'exécution a commencé avant l'expiration du délai de rétractation, avec l'accord exprès du consommateur.
      </p>
      <p>
        L'accès au Service étant fourni immédiatement à la souscription (ou à l'issue de l'essai gratuit), l'Utilisateur renonce expressément à son droit de rétractation. La garantie satisfait ou remboursé 30 jours (CGU art. 6) offre une protection équivalente et plus favorable.
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
