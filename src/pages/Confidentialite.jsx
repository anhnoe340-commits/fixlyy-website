import React from 'react';
import LegalLayout from '../components/LegalLayout';

export default function Confidentialite() {
  return (
    <LegalLayout title="Politique de confidentialité" lastUpdated="7 avril 2025">
      <div className="info-box">
        <p className="!mb-0 text-sm">
          Fixlyy accorde une importance primordiale à la protection de vos données personnelles. La présente politique est conforme au <strong>Règlement Général sur la Protection des Données (RGPD — Règlement UE 2016/679)</strong> et à la loi n°78-17 du 6 janvier 1978 (Loi Informatique et Libertés).
        </p>
      </div>

      <h2>1. Responsable du traitement</h2>
      <p>
        Le responsable du traitement des données à caractère personnel collectées via fixlyy.fr et app.fixlyy.fr est :
      </p>
      <ul>
        <li><strong>Fixlyy</strong> — SASU au capital de [À COMPLÉTER] €, [Adresse], Île-de-France</li>
        <li><strong>Représentant légal :</strong> Irnand ANIHOUVI, Président</li>
        <li><strong>Email DPO / Contact vie privée :</strong> <a href="mailto:support@fixlyy.fr">support@fixlyy.fr</a></li>
      </ul>

      <h2>2. Données collectées</h2>
      <h3>2.1 Données des artisans (utilisateurs de l'application)</h3>
      <ul>
        <li>Nom, prénom, email, numéro de téléphone professionnel</li>
        <li>Informations sur l'activité (métier, zone géographique, tarifs)</li>
        <li>Données de facturation (adresse de facturation, informations de paiement via notre prestataire sécurisé)</li>
        <li>Préférences de configuration du service</li>
        <li>Données de connexion et d'utilisation (logs, statistiques)</li>
      </ul>

      <h3>2.2 Données des clients finaux (callers)</h3>
      <p>
        Lorsque Fixlyy répond à un appel au nom d'un artisan abonné, les données suivantes peuvent être collectées et transmises à l'artisan :
      </p>
      <ul>
        <li>Nom et prénom du caller (si communiqué)</li>
        <li>Numéro de téléphone appelant</li>
        <li>Nature de la demande (type d'intervention, adresse du chantier)</li>
        <li>Enregistrement de l'appel (si la législation et les paramètres du compte le permettent)</li>
      </ul>
      <p>
        <strong>Note :</strong> Les callers sont informés en début d'appel qu'ils sont mis en relation avec un service IA agissant pour le compte d'un artisan.
      </p>

      <h3>2.3 Données de navigation</h3>
      <ul>
        <li>Adresse IP, type de navigateur, pages visitées, durée de visite</li>
        <li>Données de cookies (voir section 8)</li>
      </ul>

      <h2>3. Finalités et bases légales des traitements</h2>
      <ul>
        <li><strong>Exécution du contrat (art. 6.1.b RGPD) :</strong> fourniture du service, gestion du compte, facturation, support</li>
        <li><strong>Intérêt légitime (art. 6.1.f RGPD) :</strong> amélioration du service, prévention des fraudes, statistiques d'usage anonymisées</li>
        <li><strong>Consentement (art. 6.1.a RGPD) :</strong> envoi de newsletters et communications marketing (révocable à tout moment)</li>
        <li><strong>Obligation légale (art. 6.1.c RGPD) :</strong> conservation des factures et pièces comptables pendant 10 ans</li>
      </ul>

      <h2>4. Durées de conservation</h2>
      <ul>
        <li><strong>Données de compte actif :</strong> durée de la relation contractuelle</li>
        <li><strong>Données post-résiliation :</strong> 3 ans (prospection), puis suppression ou anonymisation</li>
        <li><strong>Données d'appels et devis :</strong> 12 mois glissants, puis suppression automatique</li>
        <li><strong>Données de facturation :</strong> 10 ans (obligation comptable légale)</li>
        <li><strong>Logs techniques :</strong> 90 jours</li>
      </ul>

      <h2>5. Destinataires des données</h2>
      <p>
        Vos données sont traitées par Fixlyy et ses sous-traitants techniques, dans le strict respect du RGPD :
      </p>
      <ul>
        <li><strong>Supabase Inc.</strong> (base de données, authentification) — Data Processing Agreement en vigueur, clauses contractuelles types UE</li>
        <li><strong>Vercel Inc.</strong> (hébergement web) — DPA en vigueur</li>
        <li><strong>Fournisseur IA vocal</strong> (traitement des appels) — confidentiel, DPA en vigueur</li>
        <li><strong>Stripe / prestataire de paiement</strong> (facturation) — certifié PCI-DSS</li>
      </ul>
      <p>
        Aucune donnée personnelle n'est vendue à des tiers ni transmise à des fins publicitaires.
      </p>

      <h2>6. Transferts hors UE</h2>
      <p>
        Certains de nos sous-traitants sont établis aux États-Unis. Ces transferts sont encadrés par des <strong>Clauses Contractuelles Types (CCT)</strong> approuvées par la Commission européenne et/ou le cadre EU-US Data Privacy Framework, offrant un niveau de protection adéquat.
      </p>

      <h2>7. Vos droits RGPD</h2>
      <p>Conformément au RGPD, vous disposez des droits suivants :</p>
      <ul>
        <li><strong>Droit d'accès</strong> (art. 15) — obtenir une copie de vos données</li>
        <li><strong>Droit de rectification</strong> (art. 16) — corriger des données inexactes</li>
        <li><strong>Droit à l'effacement</strong> (art. 17) — « droit à l'oubli »</li>
        <li><strong>Droit à la portabilité</strong> (art. 20) — recevoir vos données dans un format lisible</li>
        <li><strong>Droit d'opposition</strong> (art. 21) — vous opposer à certains traitements</li>
        <li><strong>Droit à la limitation</strong> (art. 18) — geler le traitement le temps d'une vérification</li>
        <li><strong>Droit de retrait du consentement</strong> — à tout moment pour les traitements basés sur le consentement</li>
      </ul>
      <p>
        Pour exercer ces droits, contactez-nous à <a href="mailto:support@fixlyy.fr">support@fixlyy.fr</a> en précisant votre identité. Réponse sous 30 jours maximum.
      </p>
      <p>
        Vous pouvez également introduire une réclamation auprès de la <strong>CNIL</strong> : <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer">www.cnil.fr</a> — 3 place de Fontenoy, TSA 80715, 75334 Paris Cedex 07.
      </p>

      <h2>8. Cookies</h2>
      <p>
        Le site fixlyy.fr utilise des cookies techniques strictement nécessaires au fonctionnement du site (session, préférences de thème). Aucun cookie publicitaire ou de profilage n'est déposé sans votre consentement explicite.
      </p>
      <ul>
        <li><strong>fixlyy-theme</strong> (localStorage) — mémorisation du thème jour/nuit, durée : permanente jusqu'à effacement manuel</li>
        <li><strong>Cookie de session Supabase</strong> — authentification sécurisée, durée : session ou 7 jours (si "rester connecté")</li>
      </ul>
      <p>
        Vous pouvez gérer ou supprimer les cookies via les paramètres de votre navigateur à tout moment.
      </p>

      <h2>9. Sécurité</h2>
      <p>
        Fixlyy met en œuvre des mesures techniques et organisationnelles appropriées pour protéger vos données : chiffrement HTTPS/TLS, authentification sécurisée, accès aux données restreint au personnel habilité, journalisation des accès.
      </p>
      <p>
        En cas de violation de données susceptible d'engendrer un risque pour vos droits et libertés, vous en serez informé dans les délais prévus par le RGPD (72h pour la CNIL, sans délai indu pour les personnes concernées).
      </p>

      <h2>10. Modifications</h2>
      <p>
        Fixlyy se réserve le droit de modifier la présente politique à tout moment. En cas de modification substantielle, vous serez informé par email ou notification dans l'application. La version en vigueur est celle affichée sur cette page avec sa date de mise à jour.
      </p>

      <h2>11. Contact</h2>
      <p>
        Pour toute question relative à vos données personnelles : <a href="mailto:support@fixlyy.fr">support@fixlyy.fr</a>
      </p>
    </LegalLayout>
  );
}
