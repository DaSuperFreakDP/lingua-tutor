export type WordType = 'noun' | 'verb' | 'adjective';

export interface Flashcard {
  id: string;
  italian: string;
  english: string;
  type: WordType;
  gender?: 'masculine' | 'feminine';
  example?: string;
  exampleTranslation?: string;
}

export interface Conjugation {
  io: string;
  tu: string;
  lui: string;
  noi: string;
  voi: string;
  loro: string;
}

export type TenseId =
  | 'presente'
  | 'passato_prossimo'
  | 'imperfetto'
  | 'futuro_semplice'
  | 'condizionale_presente'
  | 'congiuntivo_presente'
  | 'imperativo';

export interface Verb {
  id: string;
  infinitive: string;
  english: string;
  type: 'regular-are' | 'regular-ere' | 'regular-ire' | 'irregular';
  reflexive?: boolean;
  auxiliary?: 'avere' | 'essere';
  tenses: Partial<Record<TenseId, Conjugation>>;
}

export interface TenseInfo {
  id: TenseId;
  name: string;
  italianName: string;
  when: string;
  trigger?: string;
  examples: { italian: string; english: string }[];
  formation?: string;
}

export const FLASHCARDS: Flashcard[] = [
  // Nouns
  { id: 'n1', italian: 'la casa', english: 'house / home', type: 'noun', gender: 'feminine', example: 'Abito in una bella casa.', exampleTranslation: 'I live in a beautiful house.' },
  { id: 'n2', italian: 'il libro', english: 'book', type: 'noun', gender: 'masculine', example: 'Sto leggendo un libro interessante.', exampleTranslation: 'I am reading an interesting book.' },
  { id: 'n3', italian: 'l\'acqua', english: 'water', type: 'noun', gender: 'feminine', example: 'Bevo molta acqua ogni giorno.', exampleTranslation: 'I drink a lot of water every day.' },
  { id: 'n4', italian: 'il cibo', english: 'food', type: 'noun', gender: 'masculine', example: 'Il cibo italiano è delizioso.', exampleTranslation: 'Italian food is delicious.' },
  { id: 'n5', italian: 'il tempo', english: 'time / weather', type: 'noun', gender: 'masculine', example: 'Non ho tempo oggi.', exampleTranslation: 'I don\'t have time today.' },
  { id: 'n6', italian: 'il giorno', english: 'day', type: 'noun', gender: 'masculine', example: 'Buon giorno!', exampleTranslation: 'Good day!' },
  { id: 'n7', italian: 'la notte', english: 'night', type: 'noun', gender: 'feminine', example: 'La notte è tranquilla.', exampleTranslation: 'The night is quiet.' },
  { id: 'n8', italian: 'il lavoro', english: 'work / job', type: 'noun', gender: 'masculine', example: 'Il mio lavoro è molto interessante.', exampleTranslation: 'My work is very interesting.' },
  { id: 'n9', italian: 'l\'amore', english: 'love', type: 'noun', gender: 'masculine', example: 'L\'amore è la cosa più importante.', exampleTranslation: 'Love is the most important thing.' },
  { id: 'n10', italian: 'la vita', english: 'life', type: 'noun', gender: 'feminine', example: 'La vita è bella.', exampleTranslation: 'Life is beautiful.' },
  { id: 'n11', italian: 'l\'amico', english: 'friend (male)', type: 'noun', gender: 'masculine', example: 'Il mio amico si chiama Marco.', exampleTranslation: 'My friend is named Marco.' },
  { id: 'n12', italian: 'la famiglia', english: 'family', type: 'noun', gender: 'feminine', example: 'La mia famiglia è grande.', exampleTranslation: 'My family is large.' },
  { id: 'n13', italian: 'la città', english: 'city', type: 'noun', gender: 'feminine', example: 'Roma è una città bellissima.', exampleTranslation: 'Rome is a very beautiful city.' },
  { id: 'n14', italian: 'il mare', english: 'sea', type: 'noun', gender: 'masculine', example: 'Andiamo al mare in estate.', exampleTranslation: 'We go to the sea in summer.' },
  { id: 'n15', italian: 'il pane', english: 'bread', type: 'noun', gender: 'masculine', example: 'Mi piace il pane fresco.', exampleTranslation: 'I like fresh bread.' },
  { id: 'n16', italian: 'la strada', english: 'street / road', type: 'noun', gender: 'feminine', example: 'Questa strada è molto lunga.', exampleTranslation: 'This road is very long.' },
  { id: 'n17', italian: 'la musica', english: 'music', type: 'noun', gender: 'feminine', example: 'Ascolto la musica ogni sera.', exampleTranslation: 'I listen to music every evening.' },
  { id: 'n18', italian: 'il vino', english: 'wine', type: 'noun', gender: 'masculine', example: 'Questo vino è eccellente.', exampleTranslation: 'This wine is excellent.' },

  // Verbs (infinitive forms for flashcards)
  { id: 'v1', italian: 'parlare', english: 'to speak', type: 'verb', example: 'Parlo italiano ogni giorno.', exampleTranslation: 'I speak Italian every day.' },
  { id: 'v2', italian: 'mangiare', english: 'to eat', type: 'verb', example: 'Mangio la pasta a pranzo.', exampleTranslation: 'I eat pasta at lunch.' },
  { id: 'v3', italian: 'dormire', english: 'to sleep', type: 'verb', example: 'Dormo otto ore ogni notte.', exampleTranslation: 'I sleep eight hours every night.' },
  { id: 'v4', italian: 'leggere', english: 'to read', type: 'verb', example: 'Leggo un libro la sera.', exampleTranslation: 'I read a book in the evening.' },
  { id: 'v5', italian: 'scrivere', english: 'to write', type: 'verb', example: 'Scrivo una lettera all\'amico.', exampleTranslation: 'I write a letter to a friend.' },
  { id: 'v6', italian: 'camminare', english: 'to walk', type: 'verb', example: 'Cammino nel parco ogni mattina.', exampleTranslation: 'I walk in the park every morning.' },
  { id: 'v7', italian: 'essere', english: 'to be', type: 'verb', example: 'Io sono italiano.', exampleTranslation: 'I am Italian.' },
  { id: 'v8', italian: 'avere', english: 'to have', type: 'verb', example: 'Ho una macchina nuova.', exampleTranslation: 'I have a new car.' },
  { id: 'v9', italian: 'andare', english: 'to go', type: 'verb', example: 'Vado al mercato domani.', exampleTranslation: 'I am going to the market tomorrow.' },
  { id: 'v10', italian: 'fare', english: 'to do / to make', type: 'verb', example: 'Faccio colazione alle sette.', exampleTranslation: 'I have breakfast at seven.' },
  { id: 'v11', italian: 'venire', english: 'to come', type: 'verb', example: 'Vengo a casa tua stasera.', exampleTranslation: 'I am coming to your house tonight.' },
  { id: 'v12', italian: 'vedere', english: 'to see', type: 'verb', example: 'Vedo il tramonto dal balcone.', exampleTranslation: 'I see the sunset from the balcony.' },
  { id: 'v13', italian: 'sapere', english: 'to know (a fact)', type: 'verb', example: 'So dove si trova la stazione.', exampleTranslation: 'I know where the station is.' },
  { id: 'v14', italian: 'volere', english: 'to want', type: 'verb', example: 'Voglio imparare l\'italiano.', exampleTranslation: 'I want to learn Italian.' },
  { id: 'v15', italian: 'potere', english: 'to be able to / can', type: 'verb', example: 'Posso aiutarti domani.', exampleTranslation: 'I can help you tomorrow.' },

  // Adjectives
  { id: 'a1', italian: 'bello / bella', english: 'beautiful / handsome', type: 'adjective', example: 'Che bella giornata!', exampleTranslation: 'What a beautiful day!' },
  { id: 'a2', italian: 'grande', english: 'big / large / great', type: 'adjective', example: 'Ho una casa grande.', exampleTranslation: 'I have a large house.' },
  { id: 'a3', italian: 'piccolo / piccola', english: 'small / little', type: 'adjective', example: 'Ho un appartamento piccolo.', exampleTranslation: 'I have a small apartment.' },
  { id: 'a4', italian: 'buono / buona', english: 'good', type: 'adjective', example: 'Questo è un buon ristorante.', exampleTranslation: 'This is a good restaurant.' },
  { id: 'a5', italian: 'nuovo / nuova', english: 'new', type: 'adjective', example: 'Ho comprato una macchina nuova.', exampleTranslation: 'I bought a new car.' },
  { id: 'a6', italian: 'vecchio / vecchia', english: 'old', type: 'adjective', example: 'Questo è un edificio molto vecchio.', exampleTranslation: 'This is a very old building.' },
  { id: 'a7', italian: 'caldo / calda', english: 'hot / warm', type: 'adjective', example: 'Fa molto caldo oggi.', exampleTranslation: 'It is very hot today.' },
  { id: 'a8', italian: 'freddo / fredda', english: 'cold', type: 'adjective', example: 'L\'acqua è fredda.', exampleTranslation: 'The water is cold.' },
  { id: 'a9', italian: 'felice', english: 'happy', type: 'adjective', example: 'Sono molto felice oggi.', exampleTranslation: 'I am very happy today.' },
  { id: 'a10', italian: 'triste', english: 'sad', type: 'adjective', example: 'Mi sento triste senza di te.', exampleTranslation: 'I feel sad without you.' },
  { id: 'a11', italian: 'interessante', english: 'interesting', type: 'adjective', example: 'Questo libro è molto interessante.', exampleTranslation: 'This book is very interesting.' },
  { id: 'a12', italian: 'difficile', english: 'difficult / hard', type: 'adjective', example: 'L\'italiano è difficile ma bellissimo.', exampleTranslation: 'Italian is difficult but beautiful.' },
  { id: 'a13', italian: 'facile', english: 'easy', type: 'adjective', example: 'Questo esercizio è facile.', exampleTranslation: 'This exercise is easy.' },
  { id: 'a14', italian: 'lungo / lunga', english: 'long', type: 'adjective', example: 'Ho fatto un lungo viaggio.', exampleTranslation: 'I took a long journey.' },
  { id: 'a15', italian: 'breve', english: 'short / brief', type: 'adjective', example: 'La lezione è stata breve.', exampleTranslation: 'The lesson was short.' },
];

export const VERBS: Verb[] = [
  {
    id: 'essere',
    infinitive: 'essere',
    english: 'to be',
    type: 'irregular',
    auxiliary: 'essere',
    tenses: {
      presente: { io: 'sono', tu: 'sei', lui: 'è', noi: 'siamo', voi: 'siete', loro: 'sono' },
      passato_prossimo: { io: 'sono stato/a', tu: 'sei stato/a', lui: 'è stato/a', noi: 'siamo stati/e', voi: 'siete stati/e', loro: 'sono stati/e' },
      imperfetto: { io: 'ero', tu: 'eri', lui: 'era', noi: 'eravamo', voi: 'eravate', loro: 'erano' },
      futuro_semplice: { io: 'sarò', tu: 'sarai', lui: 'sarà', noi: 'saremo', voi: 'sarete', loro: 'saranno' },
      condizionale_presente: { io: 'sarei', tu: 'saresti', lui: 'sarebbe', noi: 'saremmo', voi: 'sareste', loro: 'sarebbero' },
      congiuntivo_presente: { io: 'sia', tu: 'sia', lui: 'sia', noi: 'siamo', voi: 'siate', loro: 'siano' },
      imperativo: { io: '-', tu: 'sii', lui: 'sia', noi: 'siamo', voi: 'siate', loro: 'siano' },
    },
  },
  {
    id: 'avere',
    infinitive: 'avere',
    english: 'to have',
    type: 'irregular',
    auxiliary: 'avere',
    tenses: {
      presente: { io: 'ho', tu: 'hai', lui: 'ha', noi: 'abbiamo', voi: 'avete', loro: 'hanno' },
      passato_prossimo: { io: 'ho avuto', tu: 'hai avuto', lui: 'ha avuto', noi: 'abbiamo avuto', voi: 'avete avuto', loro: 'hanno avuto' },
      imperfetto: { io: 'avevo', tu: 'avevi', lui: 'aveva', noi: 'avevamo', voi: 'avevate', loro: 'avevano' },
      futuro_semplice: { io: 'avrò', tu: 'avrai', lui: 'avrà', noi: 'avremo', voi: 'avrete', loro: 'avranno' },
      condizionale_presente: { io: 'avrei', tu: 'avresti', lui: 'avrebbe', noi: 'avremmo', voi: 'avreste', loro: 'avrebbero' },
      congiuntivo_presente: { io: 'abbia', tu: 'abbia', lui: 'abbia', noi: 'abbiamo', voi: 'abbiate', loro: 'abbiano' },
      imperativo: { io: '-', tu: 'abbi', lui: 'abbia', noi: 'abbiamo', voi: 'abbiate', loro: 'abbiano' },
    },
  },
  {
    id: 'andare',
    infinitive: 'andare',
    english: 'to go',
    type: 'irregular',
    auxiliary: 'essere',
    tenses: {
      presente: { io: 'vado', tu: 'vai', lui: 'va', noi: 'andiamo', voi: 'andate', loro: 'vanno' },
      passato_prossimo: { io: 'sono andato/a', tu: 'sei andato/a', lui: 'è andato/a', noi: 'siamo andati/e', voi: 'siete andati/e', loro: 'sono andati/e' },
      imperfetto: { io: 'andavo', tu: 'andavi', lui: 'andava', noi: 'andavamo', voi: 'andavate', loro: 'andavano' },
      futuro_semplice: { io: 'andrò', tu: 'andrai', lui: 'andrà', noi: 'andremo', voi: 'andrete', loro: 'andranno' },
      condizionale_presente: { io: 'andrei', tu: 'andresti', lui: 'andrebbe', noi: 'andremmo', voi: 'andreste', loro: 'andrebbero' },
      congiuntivo_presente: { io: 'vada', tu: 'vada', lui: 'vada', noi: 'andiamo', voi: 'andiate', loro: 'vadano' },
      imperativo: { io: '-', tu: 'va\'', lui: 'vada', noi: 'andiamo', voi: 'andate', loro: 'vadano' },
    },
  },
  {
    id: 'fare',
    infinitive: 'fare',
    english: 'to do / to make',
    type: 'irregular',
    auxiliary: 'avere',
    tenses: {
      presente: { io: 'faccio', tu: 'fai', lui: 'fa', noi: 'facciamo', voi: 'fate', loro: 'fanno' },
      passato_prossimo: { io: 'ho fatto', tu: 'hai fatto', lui: 'ha fatto', noi: 'abbiamo fatto', voi: 'avete fatto', loro: 'hanno fatto' },
      imperfetto: { io: 'facevo', tu: 'facevi', lui: 'faceva', noi: 'facevamo', voi: 'facevate', loro: 'facevano' },
      futuro_semplice: { io: 'farò', tu: 'farai', lui: 'farà', noi: 'faremo', voi: 'farete', loro: 'faranno' },
      condizionale_presente: { io: 'farei', tu: 'faresti', lui: 'farebbe', noi: 'faremmo', voi: 'fareste', loro: 'farebbero' },
      congiuntivo_presente: { io: 'faccia', tu: 'faccia', lui: 'faccia', noi: 'facciamo', voi: 'facciate', loro: 'facciano' },
      imperativo: { io: '-', tu: 'fa\'', lui: 'faccia', noi: 'facciamo', voi: 'fate', loro: 'facciano' },
    },
  },
  {
    id: 'parlare',
    infinitive: 'parlare',
    english: 'to speak',
    type: 'regular-are',
    auxiliary: 'avere',
    tenses: {
      presente: { io: 'parlo', tu: 'parli', lui: 'parla', noi: 'parliamo', voi: 'parlate', loro: 'parlano' },
      passato_prossimo: { io: 'ho parlato', tu: 'hai parlato', lui: 'ha parlato', noi: 'abbiamo parlato', voi: 'avete parlato', loro: 'hanno parlato' },
      imperfetto: { io: 'parlavo', tu: 'parlavi', lui: 'parlava', noi: 'parlavamo', voi: 'parlavate', loro: 'parlavano' },
      futuro_semplice: { io: 'parlerò', tu: 'parlerai', lui: 'parlerà', noi: 'parleremo', voi: 'parlerete', loro: 'parleranno' },
      condizionale_presente: { io: 'parlerei', tu: 'parleresti', lui: 'parlerebbe', noi: 'parleremmo', voi: 'parlereste', loro: 'parlerebbero' },
      congiuntivo_presente: { io: 'parli', tu: 'parli', lui: 'parli', noi: 'parliamo', voi: 'parliate', loro: 'parlino' },
      imperativo: { io: '-', tu: 'parla', lui: 'parli', noi: 'parliamo', voi: 'parlate', loro: 'parlino' },
    },
  },
  {
    id: 'mangiare',
    infinitive: 'mangiare',
    english: 'to eat',
    type: 'regular-are',
    auxiliary: 'avere',
    tenses: {
      presente: { io: 'mangio', tu: 'mangi', lui: 'mangia', noi: 'mangiamo', voi: 'mangiate', loro: 'mangiano' },
      passato_prossimo: { io: 'ho mangiato', tu: 'hai mangiato', lui: 'ha mangiato', noi: 'abbiamo mangiato', voi: 'avete mangiato', loro: 'hanno mangiato' },
      imperfetto: { io: 'mangiavo', tu: 'mangiavi', lui: 'mangiava', noi: 'mangiavamo', voi: 'mangiavate', loro: 'mangiavano' },
      futuro_semplice: { io: 'mangerò', tu: 'mangerai', lui: 'mangerà', noi: 'mangeremo', voi: 'mangerete', loro: 'mangeranno' },
      condizionale_presente: { io: 'mangerei', tu: 'mangeresti', lui: 'mangerebbe', noi: 'mangeremmo', voi: 'mangereste', loro: 'mangerebbero' },
      congiuntivo_presente: { io: 'mangi', tu: 'mangi', lui: 'mangi', noi: 'mangiamo', voi: 'mangiate', loro: 'mangino' },
      imperativo: { io: '-', tu: 'mangia', lui: 'mangi', noi: 'mangiamo', voi: 'mangiate', loro: 'mangino' },
    },
  },
  {
    id: 'venire',
    infinitive: 'venire',
    english: 'to come',
    type: 'irregular',
    auxiliary: 'essere',
    tenses: {
      presente: { io: 'vengo', tu: 'vieni', lui: 'viene', noi: 'veniamo', voi: 'venite', loro: 'vengono' },
      passato_prossimo: { io: 'sono venuto/a', tu: 'sei venuto/a', lui: 'è venuto/a', noi: 'siamo venuti/e', voi: 'siete venuti/e', loro: 'sono venuti/e' },
      imperfetto: { io: 'venivo', tu: 'venivi', lui: 'veniva', noi: 'venivamo', voi: 'venivate', loro: 'venivano' },
      futuro_semplice: { io: 'verrò', tu: 'verrai', lui: 'verrà', noi: 'verremo', voi: 'verrete', loro: 'verranno' },
      condizionale_presente: { io: 'verrei', tu: 'verresti', lui: 'verrebbe', noi: 'verremmo', voi: 'verreste', loro: 'verrebbero' },
      congiuntivo_presente: { io: 'venga', tu: 'venga', lui: 'venga', noi: 'veniamo', voi: 'veniate', loro: 'vengano' },
      imperativo: { io: '-', tu: 'vieni', lui: 'venga', noi: 'veniamo', voi: 'venite', loro: 'vengano' },
    },
  },
  {
    id: 'leggere',
    infinitive: 'leggere',
    english: 'to read',
    type: 'regular-ere',
    auxiliary: 'avere',
    tenses: {
      presente: { io: 'leggo', tu: 'leggi', lui: 'legge', noi: 'leggiamo', voi: 'leggete', loro: 'leggono' },
      passato_prossimo: { io: 'ho letto', tu: 'hai letto', lui: 'ha letto', noi: 'abbiamo letto', voi: 'avete letto', loro: 'hanno letto' },
      imperfetto: { io: 'leggevo', tu: 'leggevi', lui: 'leggeva', noi: 'leggevamo', voi: 'leggevate', loro: 'leggevano' },
      futuro_semplice: { io: 'leggerò', tu: 'leggerai', lui: 'leggerà', noi: 'leggeremo', voi: 'leggerete', loro: 'leggeranno' },
      condizionale_presente: { io: 'leggerei', tu: 'leggeresti', lui: 'leggerebbe', noi: 'leggeremmo', voi: 'leggereste', loro: 'leggerebbero' },
      congiuntivo_presente: { io: 'legga', tu: 'legga', lui: 'legga', noi: 'leggiamo', voi: 'leggiate', loro: 'leggano' },
      imperativo: { io: '-', tu: 'leggi', lui: 'legga', noi: 'leggiamo', voi: 'leggete', loro: 'leggano' },
    },
  },
  {
    id: 'scrivere',
    infinitive: 'scrivere',
    english: 'to write',
    type: 'regular-ere',
    auxiliary: 'avere',
    tenses: {
      presente: { io: 'scrivo', tu: 'scrivi', lui: 'scrive', noi: 'scriviamo', voi: 'scrivete', loro: 'scrivono' },
      passato_prossimo: { io: 'ho scritto', tu: 'hai scritto', lui: 'ha scritto', noi: 'abbiamo scritto', voi: 'avete scritto', loro: 'hanno scritto' },
      imperfetto: { io: 'scrivevo', tu: 'scrivevi', lui: 'scriveva', noi: 'scrivevamo', voi: 'scrivevate', loro: 'scrivevano' },
      futuro_semplice: { io: 'scriverò', tu: 'scriverai', lui: 'scriverà', noi: 'scriveremo', voi: 'scriverete', loro: 'scriveranno' },
      condizionale_presente: { io: 'scriverei', tu: 'scriveresti', lui: 'scriverebbe', noi: 'scriveremmo', voi: 'scrivereste', loro: 'scriverebbero' },
      congiuntivo_presente: { io: 'scriva', tu: 'scriva', lui: 'scriva', noi: 'scriviamo', voi: 'scriviate', loro: 'scrivano' },
      imperativo: { io: '-', tu: 'scrivi', lui: 'scriva', noi: 'scriviamo', voi: 'scrivete', loro: 'scrivano' },
    },
  },
  {
    id: 'dormire',
    infinitive: 'dormire',
    english: 'to sleep',
    type: 'regular-ire',
    auxiliary: 'avere',
    tenses: {
      presente: { io: 'dormo', tu: 'dormi', lui: 'dorme', noi: 'dormiamo', voi: 'dormite', loro: 'dormono' },
      passato_prossimo: { io: 'ho dormito', tu: 'hai dormito', lui: 'ha dormito', noi: 'abbiamo dormito', voi: 'avete dormito', loro: 'hanno dormito' },
      imperfetto: { io: 'dormivo', tu: 'dormivi', lui: 'dormiva', noi: 'dormivamo', voi: 'dormivate', loro: 'dormivano' },
      futuro_semplice: { io: 'dormirò', tu: 'dormirai', lui: 'dormirà', noi: 'dormiremo', voi: 'dormirete', loro: 'dormiranno' },
      condizionale_presente: { io: 'dormirei', tu: 'dormiresti', lui: 'dormirebbe', noi: 'dormiremmo', voi: 'dormireste', loro: 'dormirebbero' },
      congiuntivo_presente: { io: 'dorma', tu: 'dorma', lui: 'dorma', noi: 'dormiamo', voi: 'dormiate', loro: 'dormano' },
      imperativo: { io: '-', tu: 'dormi', lui: 'dorma', noi: 'dormiamo', voi: 'dormite', loro: 'dormano' },
    },
  },
  {
    id: 'vedere',
    infinitive: 'vedere',
    english: 'to see',
    type: 'regular-ere',
    auxiliary: 'avere',
    tenses: {
      presente: { io: 'vedo', tu: 'vedi', lui: 'vede', noi: 'vediamo', voi: 'vedete', loro: 'vedono' },
      passato_prossimo: { io: 'ho visto', tu: 'hai visto', lui: 'ha visto', noi: 'abbiamo visto', voi: 'avete visto', loro: 'hanno visto' },
      imperfetto: { io: 'vedevo', tu: 'vedevi', lui: 'vedeva', noi: 'vedevamo', voi: 'vedevate', loro: 'vedevano' },
      futuro_semplice: { io: 'vedrò', tu: 'vedrai', lui: 'vedrà', noi: 'vedremo', voi: 'vedrete', loro: 'vedranno' },
      condizionale_presente: { io: 'vedrei', tu: 'vedresti', lui: 'vedrebbe', noi: 'vedremmo', voi: 'vedreste', loro: 'vedrebbero' },
      congiuntivo_presente: { io: 'veda', tu: 'veda', lui: 'veda', noi: 'vediamo', voi: 'vediate', loro: 'vedano' },
      imperativo: { io: '-', tu: 'vedi', lui: 'veda', noi: 'vediamo', voi: 'vedete', loro: 'vedano' },
    },
  },
  {
    id: 'volere',
    infinitive: 'volere',
    english: 'to want',
    type: 'irregular',
    auxiliary: 'avere',
    tenses: {
      presente: { io: 'voglio', tu: 'vuoi', lui: 'vuole', noi: 'vogliamo', voi: 'volete', loro: 'vogliono' },
      passato_prossimo: { io: 'ho voluto', tu: 'hai voluto', lui: 'ha voluto', noi: 'abbiamo voluto', voi: 'avete voluto', loro: 'hanno voluto' },
      imperfetto: { io: 'volevo', tu: 'volevi', lui: 'voleva', noi: 'volevamo', voi: 'volevate', loro: 'volevano' },
      futuro_semplice: { io: 'vorrò', tu: 'vorrai', lui: 'vorrà', noi: 'vorremo', voi: 'vorrete', loro: 'vorranno' },
      condizionale_presente: { io: 'vorrei', tu: 'vorresti', lui: 'vorrebbe', noi: 'vorremmo', voi: 'vorreste', loro: 'vorrebbero' },
      congiuntivo_presente: { io: 'voglia', tu: 'voglia', lui: 'voglia', noi: 'vogliamo', voi: 'vogliate', loro: 'vogliano' },
      imperativo: { io: '-', tu: '-', lui: '-', noi: '-', voi: '-', loro: '-' },
    },
  },
  {
    id: 'potere',
    infinitive: 'potere',
    english: 'to be able to / can',
    type: 'irregular',
    auxiliary: 'avere',
    tenses: {
      presente: { io: 'posso', tu: 'puoi', lui: 'può', noi: 'possiamo', voi: 'potete', loro: 'possono' },
      passato_prossimo: { io: 'ho potuto', tu: 'hai potuto', lui: 'ha potuto', noi: 'abbiamo potuto', voi: 'avete potuto', loro: 'hanno potuto' },
      imperfetto: { io: 'potevo', tu: 'potevi', lui: 'poteva', noi: 'potevamo', voi: 'potevate', loro: 'potevano' },
      futuro_semplice: { io: 'potrò', tu: 'potrai', lui: 'potrà', noi: 'potremo', voi: 'potrete', loro: 'potranno' },
      condizionale_presente: { io: 'potrei', tu: 'potresti', lui: 'potrebbe', noi: 'potremmo', voi: 'potreste', loro: 'potrebbero' },
      congiuntivo_presente: { io: 'possa', tu: 'possa', lui: 'possa', noi: 'possiamo', voi: 'possiate', loro: 'possano' },
      imperativo: { io: '-', tu: '-', lui: '-', noi: '-', voi: '-', loro: '-' },
    },
  },
  {
    id: 'dare',
    infinitive: 'dare',
    english: 'to give',
    type: 'irregular',
    auxiliary: 'avere',
    tenses: {
      presente: { io: 'do', tu: 'dai', lui: 'dà', noi: 'diamo', voi: 'date', loro: 'danno' },
      passato_prossimo: { io: 'ho dato', tu: 'hai dato', lui: 'ha dato', noi: 'abbiamo dato', voi: 'avete dato', loro: 'hanno dato' },
      imperfetto: { io: 'davo', tu: 'davi', lui: 'dava', noi: 'davamo', voi: 'davate', loro: 'davano' },
      futuro_semplice: { io: 'darò', tu: 'darai', lui: 'darà', noi: 'daremo', voi: 'darete', loro: 'daranno' },
      condizionale_presente: { io: 'darei', tu: 'daresti', lui: 'darebbe', noi: 'daremmo', voi: 'dareste', loro: 'darebbero' },
      congiuntivo_presente: { io: 'dia', tu: 'dia', lui: 'dia', noi: 'diamo', voi: 'diate', loro: 'diano' },
      imperativo: { io: '-', tu: 'dà\'', lui: 'dia', noi: 'diamo', voi: 'date', loro: 'diano' },
    },
  },
  {
    id: 'chiamarsi',
    infinitive: 'chiamarsi',
    english: 'to be called / named',
    type: 'regular-are',
    reflexive: true,
    auxiliary: 'essere',
    tenses: {
      presente: { io: 'mi chiamo', tu: 'ti chiami', lui: 'si chiama', noi: 'ci chiamiamo', voi: 'vi chiamate', loro: 'si chiamano' },
      passato_prossimo: { io: 'mi sono chiamato/a', tu: 'ti sei chiamato/a', lui: 'si è chiamato/a', noi: 'ci siamo chiamati/e', voi: 'vi siete chiamati/e', loro: 'si sono chiamati/e' },
      imperfetto: { io: 'mi chiamavo', tu: 'ti chiamavi', lui: 'si chiamava', noi: 'ci chiamavamo', voi: 'vi chiamavate', loro: 'si chiamavano' },
      futuro_semplice: { io: 'mi chiamerò', tu: 'ti chiamerai', lui: 'si chiamerà', noi: 'ci chiameremo', voi: 'vi chiamerete', loro: 'si chiameranno' },
      condizionale_presente: { io: 'mi chiamerei', tu: 'ti chiameresti', lui: 'si chiamerebbe', noi: 'ci chiameremmo', voi: 'vi chiamereste', loro: 'si chiamerebbero' },
      congiuntivo_presente: { io: 'mi chiami', tu: 'ti chiami', lui: 'si chiami', noi: 'ci chiamiamo', voi: 'vi chiamiate', loro: 'si chiamino' },
      imperativo: { io: '-', tu: 'chiamati', lui: 'si chiami', noi: 'chiamiamoci', voi: 'chiamatevi', loro: 'si chiamino' },
    },
  },
  {
    id: 'lavarsi',
    infinitive: 'lavarsi',
    english: 'to wash oneself',
    type: 'regular-are',
    reflexive: true,
    auxiliary: 'essere',
    tenses: {
      presente: { io: 'mi lavo', tu: 'ti lavi', lui: 'si lava', noi: 'ci laviamo', voi: 'vi lavate', loro: 'si lavano' },
      passato_prossimo: { io: 'mi sono lavato/a', tu: 'ti sei lavato/a', lui: 'si è lavato/a', noi: 'ci siamo lavati/e', voi: 'vi siete lavati/e', loro: 'si sono lavati/e' },
      imperfetto: { io: 'mi lavavo', tu: 'ti lavavi', lui: 'si lavava', noi: 'ci lavavamo', voi: 'vi lavavate', loro: 'si lavavano' },
      futuro_semplice: { io: 'mi laverò', tu: 'ti laverai', lui: 'si laverà', noi: 'ci laveremo', voi: 'vi laverete', loro: 'si laveranno' },
      condizionale_presente: { io: 'mi laverei', tu: 'ti laveresti', lui: 'si laverebbe', noi: 'ci laveremmo', voi: 'vi lavereste', loro: 'si laverebbero' },
      congiuntivo_presente: { io: 'mi lavi', tu: 'ti lavi', lui: 'si lavi', noi: 'ci laviamo', voi: 'vi laviate', loro: 'si lavino' },
      imperativo: { io: '-', tu: 'lavati', lui: 'si lavi', noi: 'laviamoci', voi: 'lavatevi', loro: 'si lavino' },
    },
  },
  {
    id: 'alzarsi',
    infinitive: 'alzarsi',
    english: 'to get up / to rise',
    type: 'regular-are',
    reflexive: true,
    auxiliary: 'essere',
    tenses: {
      presente: { io: 'mi alzo', tu: 'ti alzi', lui: 'si alza', noi: 'ci alziamo', voi: 'vi alzate', loro: 'si alzano' },
      passato_prossimo: { io: 'mi sono alzato/a', tu: 'ti sei alzato/a', lui: 'si è alzato/a', noi: 'ci siamo alzati/e', voi: 'vi siete alzati/e', loro: 'si sono alzati/e' },
      imperfetto: { io: 'mi alzavo', tu: 'ti alzavi', lui: 'si alzava', noi: 'ci alzavamo', voi: 'vi alzavate', loro: 'si alzavano' },
      futuro_semplice: { io: 'mi alzerò', tu: 'ti alzerai', lui: 'si alzerà', noi: 'ci alzeremo', voi: 'vi alzerete', loro: 'si alzeranno' },
      condizionale_presente: { io: 'mi alzerei', tu: 'ti alzeresti', lui: 'si alzerebbe', noi: 'ci alzeremmo', voi: 'vi alzereste', loro: 'si alzerebbero' },
      congiuntivo_presente: { io: 'mi alzi', tu: 'ti alzi', lui: 'si alzi', noi: 'ci alziamo', voi: 'vi alziate', loro: 'si alzino' },
      imperativo: { io: '-', tu: 'alzati', lui: 'si alzi', noi: 'alziamoci', voi: 'alzatevi', loro: 'si alzino' },
    },
  },
  {
    id: 'svegliarsi',
    infinitive: 'svegliarsi',
    english: 'to wake up',
    type: 'regular-are',
    reflexive: true,
    auxiliary: 'essere',
    tenses: {
      presente: { io: 'mi sveglio', tu: 'ti svegli', lui: 'si sveglia', noi: 'ci svegliamo', voi: 'vi svegliate', loro: 'si svegliano' },
      passato_prossimo: { io: 'mi sono svegliato/a', tu: 'ti sei svegliato/a', lui: 'si è svegliato/a', noi: 'ci siamo svegliati/e', voi: 'vi siete svegliati/e', loro: 'si sono svegliati/e' },
      imperfetto: { io: 'mi svegliavo', tu: 'ti svegliavi', lui: 'si svegliava', noi: 'ci svegliavamo', voi: 'vi svegliavate', loro: 'si svegliavano' },
      futuro_semplice: { io: 'mi sveglierò', tu: 'ti sveglierai', lui: 'si sveglierà', noi: 'ci sveglieremo', voi: 'vi sveglierete', loro: 'si sveglieranno' },
      condizionale_presente: { io: 'mi sveglierei', tu: 'ti sveglieresti', lui: 'si sveglierebbe', noi: 'ci sveglieremmo', voi: 'vi svegliereste', loro: 'si sveglierebbero' },
      congiuntivo_presente: { io: 'mi svegli', tu: 'ti svegli', lui: 'si svegli', noi: 'ci svegliamo', voi: 'vi svegliate', loro: 'si sveglino' },
      imperativo: { io: '-', tu: 'svegliati', lui: 'si svegli', noi: 'svegliamoci', voi: 'svegliatevi', loro: 'si sveglino' },
    },
  },
  {
    id: 'sedersi',
    infinitive: 'sedersi',
    english: 'to sit down',
    type: 'irregular',
    reflexive: true,
    auxiliary: 'essere',
    tenses: {
      presente: { io: 'mi siedo', tu: 'ti siedi', lui: 'si siede', noi: 'ci sediamo', voi: 'vi sedete', loro: 'si siedono' },
      passato_prossimo: { io: 'mi sono seduto/a', tu: 'ti sei seduto/a', lui: 'si è seduto/a', noi: 'ci siamo seduti/e', voi: 'vi siete seduti/e', loro: 'si sono seduti/e' },
      imperfetto: { io: 'mi sedevo', tu: 'ti sedevi', lui: 'si sedeva', noi: 'ci sedevamo', voi: 'vi sedevate', loro: 'si sedevano' },
      futuro_semplice: { io: 'mi siederò', tu: 'ti siederai', lui: 'si siederà', noi: 'ci siederemo', voi: 'vi siederete', loro: 'si siederanno' },
      condizionale_presente: { io: 'mi siederei', tu: 'ti siederesti', lui: 'si siederebbe', noi: 'ci siederemmo', voi: 'vi siedereste', loro: 'si siederebbero' },
      congiuntivo_presente: { io: 'mi sieda', tu: 'ti sieda', lui: 'si sieda', noi: 'ci sediamo', voi: 'vi sediate', loro: 'si siedano' },
      imperativo: { io: '-', tu: 'siediti', lui: 'si sieda', noi: 'sediamoci', voi: 'sedetevi', loro: 'si siedano' },
    },
  },
];

export const TENSES: TenseInfo[] = [
  {
    id: 'presente',
    name: 'Present',
    italianName: 'Presente',
    when: 'Use for habitual actions, current states, general truths, and ongoing actions happening right now.',
    trigger: 'ogni giorno, adesso, sempre, di solito',
    formation: 'Drop infinitive ending (-are/-ere/-ire) and add present tense endings',
    examples: [
      { italian: 'Parlo italiano ogni giorno.', english: 'I speak Italian every day.' },
      { italian: 'Lui abita a Roma.', english: 'He lives in Rome.' },
      { italian: 'Il sole sorge ad est.', english: 'The sun rises in the east.' },
    ],
  },
  {
    id: 'passato_prossimo',
    name: 'Present Perfect',
    italianName: 'Passato Prossimo',
    when: 'Use for completed past actions, especially recent ones with a connection to the present. The most common past tense in spoken Italian.',
    trigger: 'ieri, la settimana scorsa, già, appena, stamattina',
    formation: 'avere/essere (present) + past participle',
    examples: [
      { italian: 'Ho mangiato la pizza ieri sera.', english: 'I ate pizza last night.' },
      { italian: 'Sei mai stato a Venezia?', english: 'Have you ever been to Venice?' },
      { italian: 'Abbiamo finito il lavoro.', english: 'We have finished the work.' },
    ],
  },
  {
    id: 'imperfetto',
    name: 'Imperfect',
    italianName: 'Imperfetto',
    when: 'Use for past habits, ongoing past states, descriptions in the past, or actions that were in progress when something else happened.',
    trigger: 'sempre, di solito, quando ero giovane, ogni estate',
    formation: 'Drop infinitive ending and add imperfect endings (-avo/-evo/-ivo etc.)',
    examples: [
      { italian: 'Da bambino, giocavo ogni pomeriggio.', english: 'As a child, I used to play every afternoon.' },
      { italian: 'Mentre dormivo, squillò il telefono.', english: 'While I was sleeping, the phone rang.' },
      { italian: 'Era una bellissima giornata.', english: 'It was a beautiful day.' },
    ],
  },
  {
    id: 'futuro_semplice',
    name: 'Simple Future',
    italianName: 'Futuro Semplice',
    when: 'Use for future events, predictions, suppositions about the present, or polite commands.',
    trigger: 'domani, la settimana prossima, tra un anno, probabilmente',
    formation: 'Add future endings to the infinitive stem (-ò/-ai/-à/-emo/-ete/-anno)',
    examples: [
      { italian: 'Domani andrò al mercato.', english: 'Tomorrow I will go to the market.' },
      { italian: 'Penso che avrà trent\'anni.', english: 'I think she is probably thirty years old.' },
      { italian: 'Un giorno parlerò italiano perfettamente.', english: 'One day I will speak Italian perfectly.' },
    ],
  },
  {
    id: 'condizionale_presente',
    name: 'Present Conditional',
    italianName: 'Condizionale Presente',
    when: 'Use for hypothetical actions, polite requests, wishes, or what would happen under certain conditions.',
    trigger: 'se potessi, vorrei, al posto tuo',
    formation: 'Add conditional endings to the infinitive stem (-ei/-esti/-ebbe/-emmo/-este/-ebbero)',
    examples: [
      { italian: 'Vorrei un caffè, per favore.', english: 'I would like a coffee, please.' },
      { italian: 'Al posto tuo, studierei di più.', english: 'In your place, I would study more.' },
      { italian: 'Potrebbe aiutarmi?', english: 'Could you help me?' },
    ],
  },
  {
    id: 'congiuntivo_presente',
    name: 'Present Subjunctive',
    italianName: 'Congiuntivo Presente',
    when: 'Use after verbs expressing doubt, emotion, desire, opinion, or necessity. Always preceded by "che".',
    trigger: 'che, penso che, voglio che, è importante che, spero che',
    formation: 'Used after "che" with expressions of opinion, doubt, desire, emotion',
    examples: [
      { italian: 'Spero che tu venga alla festa.', english: 'I hope that you come to the party.' },
      { italian: 'È importante che studiate ogni giorno.', english: 'It is important that you study every day.' },
      { italian: 'Penso che lui abbia ragione.', english: 'I think that he is right.' },
    ],
  },
  {
    id: 'imperativo',
    name: 'Imperative',
    italianName: 'Imperativo',
    when: 'Use to give commands, instructions, or advice. The tu form is the most common.',
    trigger: 'Direct orders, recipes, instructions, road signs',
    formation: 'Different forms for each person; tu form of -are verbs uses the base form',
    examples: [
      { italian: 'Parla più lentamente, per favore!', english: 'Speak more slowly, please!' },
      { italian: 'Non mangiare troppo!', english: 'Don\'t eat too much!' },
      { italian: 'Andiamo al cinema stasera!', english: 'Let\'s go to the cinema tonight!' },
    ],
  },
];

export const PRONOUNS = ['io', 'tu', 'lui/lei', 'noi', 'voi', 'loro'] as const;
export type Pronoun = typeof PRONOUNS[number];

export const PRONOUN_KEYS: Record<Pronoun, keyof Conjugation> = {
  'io': 'io',
  'tu': 'tu',
  'lui/lei': 'lui',
  'noi': 'noi',
  'voi': 'voi',
  'loro': 'loro',
};

export const TENSE_NAMES: Record<TenseId, string> = {
  presente: 'Presente',
  passato_prossimo: 'Passato Prossimo',
  imperfetto: 'Imperfetto',
  futuro_semplice: 'Futuro Semplice',
  condizionale_presente: 'Condizionale',
  congiuntivo_presente: 'Congiuntivo',
  imperativo: 'Imperativo',
};
