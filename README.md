# Chadili Académie — Site Web

Site vitrine premium, monopage, multilingue (Arabe · Français · Anglais) pour **Chadili Académie**
(Chef Awatif Chadili) — cake design, pâtisserie & cuisine, en présentiel et à distance.

Construit avec **Next.js 14 + TypeScript + Tailwind CSS**, animations **GSAP + Lenis + Framer Motion**,
et un **gâteau 3D interactif (Three.js)** dans le hero.

## Démarrer

```bash
npm install
npm run dev
```

Ouvrir http://localhost:3000

Build de production :

```bash
npm run build
npm start
```

## Fonctionnalités

- **3 langues** : Arabe (par défaut, RTL), Français, Anglais — bouton en haut à droite. Le choix est mémorisé.
- **Hero 3D** : gâteau Three.js sur ordinateur ; image poster automatique sur mobile / si « réduire les animations ».
- **Inscription via WhatsApp** : le formulaire ouvre WhatsApp vers **0678613983** avec un message pré-rempli.
- **100% responsive**, accessible, et optimisé (animations désactivées si `prefers-reduced-motion`).

## Personnaliser

### Textes (les 3 langues)
Tout le contenu est dans **`content/dictionary.ts`** (objets `ar`, `fr`, `en`). Modifiez-y titres, cours, témoignages, etc.

### Numéros / réseaux
En bas de `content/dictionary.ts`, l'objet **`CONTACT`** : WhatsApp, téléphones, Instagram.
> Le WhatsApp utilise l'indicatif Maroc `212…` (le `0` initial est remplacé par `212`).

### Images (déjà les vraies photos)
Les **vraies photos Chadili Académie** sont déjà en place dans `public/images/` (logo officiel `logo.png`,
gâteau du hero, galerie, formations). Seuls les avatars des témoignages restent des placeholders SVG
(`student-1/2/3.svg`) car aucune photo d'élève n'a été fournie.

Pour changer/ajouter une photo : déposez le fichier dans `public/images/` en gardant le même nom
(ex. `gallery-1.jpg`, `course-cake.jpg`, `chef.jpg`) — aucune modification de code nécessaire.
Le **logo** (`public/images/logo.png`) est utilisé dans l'en-tête, le pied de page et sur le gâteau 3D.

### Vidéos
Les vidéos sont dans `public/videos/` (déjà **optimisées** pour le web — H.264, sans audio, faststart) :
- `hero.mp4` (720×1280, ~3 Mo) + `hero-mobile.mp4` (480×854, ~1,6 Mo) → **fond du hero** (autoplay, muet, en boucle ; version mobile servie automatiquement ; image `hero-poster.jpg` affichée instantanément).
- `gallery.mp4` (540×960, ~6,7 Mo) → **vidéo vedette de la galerie** (chargée uniquement au défilement, avec animation d'apparition).
- En mode « réduire les animations », les vidéos ne se téléchargent pas — seules les images poster s'affichent.

Pour remplacer une vidéo, gardez le même nom de fichier. Pour ré-optimiser une nouvelle vidéo, réutilisez
ffmpeg (ex. `-c:v h264_qsv -b:v 1000k -an -movflags +faststart`).

### Logo sur le gâteau 3D
Le nom « Chadili / ACADÉMIE » est dessiné dynamiquement dans `components/three/CakeModel.tsx`
(fonction `useWordmarkTexture`). Pour poser le vrai logo, remplacez cette texture par une image du logo.

## Déploiement

Recommandé : **Vercel** (gratuit) — importez le dossier, il détecte Next.js automatiquement.
Fonctionne aussi sur Netlify ou tout hébergeur Node.

## Structure

```
app/            layout, page, styles globaux
components/      Header, Hero, AboutChef, Courses, Features, Gallery, Testimonials, Register, Footer…
components/three/ CakeModel + CakeCanvas (3D)
content/         dictionary.ts (tous les textes + contacts)
lib/             i18n (langues), hooks, courseBus
public/images/   images (placeholders SVG à remplacer)
```
