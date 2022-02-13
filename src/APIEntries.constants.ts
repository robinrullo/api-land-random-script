import { APIInject } from './types'

const injection =
  '<script src="https://api-land-random-script.rrullo.workers.dev/"></script>'

export const pokekmon: APIInject[] = [
  {
    endpoint: 'https://filrouge.uha4point0.fr/V2/pokemon/types',
    resetEndpoint: 'https://filrouge.uha4point0.fr/V2/reset/pokemon',
    content: {
      id: 100,
      nom: 'maison',
      caracteristique: 'habite chez vous' + injection,
      attaques: ['invisible', 'multitype'],
    },
  },
  {
    endpoint: 'https://filrouge.uha4point0.fr/V2/pokemon/pokemons',
    resetEndpoint: 'https://filrouge.uha4point0.fr/V2/reset/pokemon',
    content: {
      id: 100,
      nom: 'Mew' + injection,
      numero: 151,
      type: 1,
      image: 'https://www.pokepedia.fr/images/1/16/Mew-DEPS.png',
    },
  },
]

export const miyasaki: APIInject[] = [
  {
    endpoint: 'https://filrouge.uha4point0.fr/V2/miyasaki/films',
    resetEndpoint: 'https://filrouge.uha4point0.fr/V2/reset/miyasaki',
    content: {
      id: 100,
      nom: 'Boro la petite chenille',
      annee: 2018,
      note: 'visible au Musée Ghibli uniquement' + injection,
      Genre: ['documentaire', 'fantasy', 'aventure'],
      image:
        'https://upload.wikimedia.org/wikipedia/en/5/59/Boro_the_Caterpillar.jpg',
      trailer: 'https://www.youtube.com/watch?v=j4-6YI04IiE',
    },
  },
  {
    endpoint: 'https://filrouge.uha4point0.fr/V2/miyasaki/heros',
    resetEndpoint: 'https://filrouge.uha4point0.fr/V2/reset/miyasaki',
    content: {
      id: 100,
      nom: 'Boro',
      film: 1,
      description: 'vit sa vie paisiblement chez Liebherr' + injection,
      role: 'sous-terre',
    },
  },
]

export const music: APIInject[] = [
  {
    endpoint: 'https://filrouge.uha4point0.fr/V2/music/groupes',
    resetEndpoint: 'https://filrouge.uha4point0.fr/V2/reset/music',
    content: {
      id: 100,
      nom: 'Polyphia',
      chanteur: 'N.A' + injection,
      origin: 'Dallas',
      genre: ['progressive metalcore'],
    },
  },
  {
    endpoint: 'https://filrouge.uha4point0.fr/V2/music/albums',
    resetEndpoint: 'https://filrouge.uha4point0.fr/V2/reset/music',
    content: {
      id: 100,
      nom: 'New Levels New Devils' + injection,
      artiste: 1,
      pistes: 10,
      sortie: '2018',
      couverture:
        'http://www.progarchives.com/progressive_rock_discography_covers/10897/cover_354083152019_r.jpg',
    },
  },
]

export const ocean: APIInject[] = [
  {
    endpoint: 'https://filrouge.uha4point0.fr/V2/ocean/especes',
    resetEndpoint: 'https://filrouge.uha4point0.fr/V2/reset/ocean',
    content: {
      id: 100,
      nom: 'Cinéma',
      description:
        'Regroupe les mamifères aquatiques du grand écran' + injection,
      caracteristique: ['Netflix', 'Disney', 'Amazon Prime', 'Youtube'],
    },
  },
  {
    endpoint: 'https://filrouge.uha4point0.fr/V2/ocean/poissons',
    resetEndpoint: 'https://filrouge.uha4point0.fr/V2/reset/ocean',
    content: {
      id: 100,
      nom: 'Némo',
      type: 1,
      dureeVie: 2048,
      note:
        "Némo est un tout jeune poisson curieux qui vit seul avec son père, Marin. Surprotégé, il a vécu toute sa vie dans un cocon, et ne rêve que d'aventure. Il déborde d'enthousiasme à l'idée d'aller à l'école et de découvrir enfin les merveilles de la Grande Barrière de corail." +
        injection,
      photo:
        'https://upload.wikimedia.org/wikipedia/commons/3/36/NemoAdvertisingIdahoAquarium.JPG',
    },
  },
]

export const shop: APIInject[] = [
  {
    endpoint: 'https://filrouge.uha4point0.fr/V2/shop/clients',
    resetEndpoint: 'https://filrouge.uha4point0.fr/V2/reset/shop',
    content: {
      id: 100,
      nom: 'kevin',
      pseudo: 'kekedu69',
      mail: 'keke@yahoo.fr',
      adresse: '5 rue du jardin' + injection,
      interets: ['manga', 'commics', 'sport', 'mobilier gamer'],
      age: 12,
    },
  },
  {
    endpoint: 'https://filrouge.uha4point0.fr/V2/shop/commandes',
    resetEndpoint: 'https://filrouge.uha4point0.fr/V2/reset/shop',
    content: {
      id: 100,
      client: 1,
      date: '25/10/2023',
      products: 'meth, coke et seringues' + injection,
      dateDeLivraison: '24/10/2023',
      payement: 'virement administratif',
      enseigne: 'https://www.ldlc.com/v4/img/common/LDLC-logo.gif',
    },
  },
]

export const basketball: APIInject[] = [
  {
    endpoint: 'https://filrouge.uha4point0.fr/V2/basketball/equipes',
    resetEndpoint: 'https://filrouge.uha4point0.fr/V2/reset/basketball',
    content: {
      id: 100,
      nom: 'Beijing Jinyu Ducks' + injection,
      localisations: 'Beijing (Pékin)',
      division: 'North',
      creation: '1956',
      couleurs: ['bleu', 'noir', 'blanc'],
      logo: 'https://upload.wikimedia.org/wikipedia/fr/0/0f/Beijing_Ducks.jpg',
    },
  },
  {
    endpoint: 'https://filrouge.uha4point0.fr/V2/basketball/joueurs',
    resetEndpoint: 'https://filrouge.uha4point0.fr/V2/reset/basketball',
    content: {
      id: 100,
      nom: 'Shan Tao' + injection,
      position: 'Pivot',
      No: 7,
      equipe: 1,
      taille: 2.15,
      poid: 120,
    },
  },
]

export const UHA40: APIInject[] = [
  {
    endpoint: 'https://filrouge.uha4point0.fr/V2/UHA40/annees',
    resetEndpoint: 'https://filrouge.uha4point0.fr/V2/reset/UHA40',
    content: {
      id: 100,
      nom: 'UHA 4.0.6' + injection,
      mail: 'uha4point0@gmail.fr',
      description:
        "UHA 4.0.6 est une formation d'une année permettant aux masters et aux personnes expérimentées de développement d'obtenir un doctorat (à condition de payer, bien sûr)",
      concerne: 'Toutes personnes au niveau bac',
      compétences: ['LARAVEL', 'PNPM', 'GOOGLE_TRANSLATE'],
    },
  },
  {
    endpoint: 'https://filrouge.uha4point0.fr/V2/UHA40/certifications',
    resetEndpoint: 'https://filrouge.uha4point0.fr/V2/reset/UHA40',
    content: {
      id: 100,
      annee: 1,
      intitule: 'Apprend à parler mon reuf' + injection,
      lienOpenClassRoom:
        'https://openclassrooms.com/fr/courses/4577696-prenez-la-parole-en-public',
      image:
        'https://oc-course.imgix.net/courses/4577696/4577696_teaser_picture_1631527272.jpg',
    },
  },
]

export const browseShop: APIInject[] = [
  {
    endpoint: 'https://filrouge.uha4point0.fr/V2/browseShop/categories',
    resetEndpoint: 'https://filrouge.uha4point0.fr/V2/reset/browseShop',
    content: {
      id: 100,
      nom: 'jeux interdits' + injection,
      description:
        "Regroupes l'ensemble des jeux interdits vendus dans notre boutique",
      filtreTag: '@',
      nbrProduits: 1,
      sousCategorie: ['PJC'],
    },
  },
  {
    endpoint: 'https://filrouge.uha4point0.fr/V2/browseShop/produits',
    resetEndpoint: 'https://filrouge.uha4point0.fr/V2/reset/browseShop',
    content: {
      nom: 'Jeu du foulard' + injection,
      description: "Bandez-vous les yeux et braquez une banque (l'UHA)",
      categorie: 1,
      URL: 'https://jeudufoulard.com/le-jeu-du-foulard/',
      image: 'https://o2.ldh.be/image/thumb/5a2f9b42cd7095d1cd61b67a.jpg',
    },
  },
]

export const UNIX: APIInject[] = [
  {
    endpoint: 'https://filrouge.uha4point0.fr/V2/UNIX/utilisateurs',
    resetEndpoint: 'https://filrouge.uha4point0.fr/V2/reset/UNIX',
    content: {
      id: 100,
      nom: 'Pierre Master' + injection,
      niveau: 'UHA 4.0.0',
      password: '1AmtHeb3st',
      groupes: ['wordpress', 'js', 'solitaire', 'MS Excell'],
    },
  },
  {
    endpoint: 'https://filrouge.uha4point0.fr/V2/UNIX/images',
    resetEndpoint: 'https://filrouge.uha4point0.fr/V2/reset/UNIX',
    content: {
      id: 100,
      nom: 'Wordpress' + injection,
      description: "Un CMS écrit en php, représentant l'avenir",
      owner: 2,
      URL: '/pierre/myPictures/hereTheyAre',
      image:
        'https://www.wppourlesnuls.com/wp-content/uploads/2019/05/wordpress.gif',
    },
  },
]

export const car: APIInject[] = [
  {
    endpoint: 'https://filrouge.uha4point0.fr/V2/car/constructeurs',
    resetEndpoint: 'https://filrouge.uha4point0.fr/V2/reset/car',
    content: {
      id: 100,
      nom: 'Vilebrequin' + injection,
      creation: 2099,
      fondateur: 'Pierre et Sylvain',
      usines: ['Chabrier', 'Levy'],
      pays: 'france',
    },
  },
  {
    endpoint: 'https://filrouge.uha4point0.fr/V2/car/voitures',
    resetEndpoint: 'https://filrouge.uha4point0.fr/V2/reset/car',
    content: {
      id: 100,
      nom: 'Milletipla AMG Stage 1000' + injection,
      description: '2018 - 2022',
      constructeur: 1,
      production: 1,
      image:
        'https://img-4.linternaute.com/audjKnc4XCCF_EFQOcvI-4RwhuI=/1240x/smart/045ebc707fda47888ebaec1d8bda3852/ccmcms-linternaute/2158979.jpg',
    },
  },
]

export const arbres: APIInject[] = [
  {
    endpoint: 'https://filrouge.uha4point0.fr/V2/arbres/types',
    resetEndpoint: 'https://filrouge.uha4point0.fr/V2/reset/arbres',
    content: {
      id: 100,
      nom: 'Cannabis' + injection,
      taille: 8,
      note: "Ce sont toutes des plantes originaires d'Asie centrale ou d'Asie du Sud. La classification dans ce genre est encore discutée. Selon la majorité des auteurs il contiendrait une seule espèce, le Chanvre cultivé (Cannabis sativa L.), parfois subdivisée en plusieurs sous-espèces1, généralement sativa, indica et ruderalis (syn. spontanea), tandis que d'autres considèrent que ce sont de simples variétés",
      ravageurs: ['virus', 'trojan', 'rat', 'XSS'],
      image:
        'https://upload.wikimedia.org/wikipedia/commons/d/db/Cannabis_sativa_001.JPG',
    },
  },
  {
    endpoint: 'https://filrouge.uha4point0.fr/V2/arbres/especes',
    resetEndpoint: 'https://filrouge.uha4point0.fr/V2/reset/arbres',
    content: {
      id: 100,
      nom: 'Chanvre' + injection,
      type: 1,
      feuille: "Les feuilles sont ovales, et sentent bon lorsqu'on les fume",
      fruits: 'N.A',
    },
  },
]

export const allAPI = [
  ...arbres,
  ...car,
  ...music,
  ...shop,
  ...basketball,
  ...UNIX,
  ...browseShop,
  ...miyasaki,
  ...ocean,
  ...pokekmon,
  ...UHA40,
]
