import React from 'react';
import LegalLayout from '../components/LegalLayout';

export default function MentionsLegales() {
  return (
    <LegalLayout title="Mentions légales" lastUpdated="7 avril 2025">
      <div className="info-box">
        <p className="!mb-0 text-sm">
          Conformément aux dispositions de la loi n°2004-575 du 21 juin 2004 pour la confiance en l'économie numérique (LCEN), il est précisé aux utilisateurs du site <strong>fixlyy.fr</strong> l'identité des différents intervenants dans le cadre de sa réalisation et de son suivi.
        </p>
      </div>

      <h2>1. Éditeur du site</h2>
      <p>
        Le site <strong>fixlyy.fr</strong> est édité par :
      </p>
      <ul>
        <li><strong>Dénomination sociale :</strong> Fixlyy</li>
        <li><strong>Forme juridique :</strong> SASU (Société par Actions Simplifiée Unipersonnelle)</li>
        <li><strong>Capital social :</strong> [À COMPLÉTER]</li>
        <li><strong>SIRET :</strong> [À COMPLÉTER]</li>
        <li><strong>Siège social :</strong> [Adresse complète], Île-de-France, France</li>
        <li><strong>Email :</strong> <a href="mailto:support@fixlyy.fr">support@fixlyy.fr</a></li>
        <li><strong>Directeur de la publication :</strong> Irnand ANIHOUVI</li>
      </ul>

      <h2>2. Hébergement</h2>
      <p>Le site est hébergé par :</p>
      <ul>
        <li><strong>Société :</strong> Vercel Inc.</li>
        <li><strong>Adresse :</strong> 440 N Barranca Ave #4133, Covina, CA 91723, États-Unis</li>
        <li><strong>Site web :</strong> <a href="https://vercel.com" target="_blank" rel="noopener noreferrer">vercel.com</a></li>
      </ul>
      <p>
        L'application <strong>app.fixlyy.fr</strong> utilise également les services d'infrastructure de <strong>Supabase Inc.</strong> (base de données et authentification), société américaine conforme au cadre EU-US Data Privacy Framework.
      </p>

      <h2>3. Propriété intellectuelle</h2>
      <p>
        L'ensemble des contenus figurant sur le site fixlyy.fr (textes, graphismes, logotypes, images, vidéos, sons) est la propriété exclusive de Fixlyy ou de ses partenaires, et est protégé par les lois françaises et internationales relatives à la propriété intellectuelle.
      </p>
      <p>
        Toute reproduction, représentation, modification, publication ou transmission des éléments de ce site, par quelque moyen que ce soit, est interdite sans l'autorisation écrite préalable de Fixlyy.
      </p>

      <h2>4. Limitations de responsabilité</h2>
      <p>
        Fixlyy ne pourra être tenu responsable des dommages directs ou indirects résultant de l'accès au site ou de l'utilisation des informations qui y sont présentées. Fixlyy se réserve le droit de modifier, corriger ou supprimer tout contenu à tout moment, sans préavis.
      </p>
      <p>
        Les liens hypertextes présents sur le site peuvent renvoyer vers des sites tiers. Fixlyy n'exerce aucun contrôle sur ces sites et décline toute responsabilité quant à leur contenu.
      </p>

      <h2>5. Droit applicable</h2>
      <p>
        Le présent site est soumis au droit français. En cas de litige, les tribunaux français seront seuls compétents.
      </p>

      <h2>6. Contact</h2>
      <p>
        Pour toute question relative aux présentes mentions légales, vous pouvez nous contacter à : <a href="mailto:support@fixlyy.fr">support@fixlyy.fr</a>
      </p>
    </LegalLayout>
  );
}
