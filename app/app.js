const booksData = [
  {
    id: 1,
    title: "O Caibalion",
    author: "Três Iniciados",
    category: "Hermetismo & Cabala",
    rarity: "Essencial",
    pages: 160,
    cover: "assets/books/CAIBALION.jpg",
    desc: "O tratado definitivo dos sete princípios herméticos de Hermes Trismegisto: Mentalismo, Correspondência, Vibração, Polaridade, Ritmo, Causa e Efeito, e Gênero. A base fundamental de toda transmutação mental.",
    pdfUrl: "livros_pdf/01_O_Caibalion_Tres_Iniciados.pdf"
  },
  {
    id: 2,
    title: "A Tábua de Esmeralda",
    author: "Hermes Trismegisto",
    category: "Hermetismo & Cabala",
    rarity: "Raríssimo",
    pages: 94,
    cover: "assets/books/tabua.png",
    desc: "O texto críptico primordial da alquimia antiga: 'O que está em cima é como o que está embaixo'. Comentários esotéricos sobre a Grande Obra e a criação da Pedra Filosofal.",
    pdfUrl: "livros_pdf/10_A_Tabua_de_Esmeralda_Hermes_Trismegisto.pdf"
  },
  {
    id: 3,
    title: "Corpus Hermeticum",
    author: "Hermes Trismegisto",
    category: "Hermetismo & Cabala",
    rarity: "Manuscrito Sagrado",
    pages: 280,
    cover: "assets/books/CORPUSHERM.jpeg",
    desc: "A coleção completa dos diálogos sagrados entre Hermes e seus discípulos Tat e Poimandres, desvendando a natureza da mente divina, o cosmos e a redenção da alma humana.",
    pdfUrl: "livros_pdf/07_Corpus_Hermeticum_Hermes_Trismegisto.pdf"
  },
  {
    id: 4,
    title: "O Zohar (Livro do Esplendor)",
    author: "Shimon Bar Yochai",
    category: "Hermetismo & Cabala",
    rarity: "Obra Oculta",
    pages: 620,
    cover: "assets/books/O ZOHAR.jpg",
    desc: "A obra magna da Cabala mística judaica. Revela os segredos ocultos da Criação, a Árvore da Vida (Sefirot), as 32 vias da sabedoria e a estrutura das dimensões espirituais.",
    pdfUrl: "livros_pdf/17_O_Zohar_Traducao_Completa.pdf"
  },
  {
    id: 5,
    title: "A Cabala Mística",
    author: "Dion Fortune",
    category: "Hermetismo & Cabala",
    rarity: "Clássico Ocidental",
    pages: 310,
    cover: "assets/books/cabala-mistica.jpg",
    desc: "A mais clara e poderosa chave de interpretação da Cabala hermética ocidental, ligando a Árvore da Vida à psicologia profunda, magia prática e evolução do espírito.",
    pdfUrl: "livros_pdf/12_A_Cabala_Mistica_Dion_Fortune.pdf"
  },
  {
    id: 6,
    title: "Sefer Yetzirah",
    author: "Patriarca Abraão (Atribuído)",
    category: "Hermetismo & Cabala",
    rarity: "Manuscrito Primitivo",
    pages: 112,
    cover: "assets/books/sefer.jpg",
    desc: "O Livro da Formação. Explica como o universo foi esculpido através das 22 letras do alfabeto hebraico e das 10 emanações numéricas primordiais.",
    pdfUrl: "livros_pdf/18_Sefer_Yetzirah_Livro_da_Formacao.pdf"
  },
  {
    id: 7,
    title: "Lemegeton: Clavícula de Salomão",
    author: "Rei Salomão",
    category: "Grimórios & Alta Magia",
    rarity: "Grimório Proibido",
    pages: 240,
    cover: "assets/books/lamegeton.jpg",
    desc: "O grimório mais influente da magia cerimonial ocidental. Contém a Goetia completa, os 72 espíritos e selos de evocação, Theurgia Goetia e a Arte Paulina.",
    pdfUrl: "livros_pdf/14_Lemegeton_Clavicula_de_Salomao_Goetia.pdf"
  },
  {
    id: 8,
    title: "O Grande Grimório do Papa Honório",
    author: "Papa Honório III",
    category: "Grimórios & Alta Magia",
    rarity: "Censurado",
    pages: 185,
    cover: "assets/books/grandegrimorio.jpg",
    desc: "Um dos textos mais controversos da Idade Média, associando conjurações eclesiásticas a pactos e operações mágicas de alta intensidade.",
    pdfUrl: "livros_pdf/22_O_Grande_Grimorio_do_Papa_Honorio.pdf"
  },
  {
    id: 9,
    title: "O Livro de São Cipriano (Capa Preta)",
    author: "São Cipriano de Antioquia",
    category: "Grimórios & Alta Magia",
    rarity: "Tradição Ibérica",
    pages: 390,
    cover: "assets/books/SAOCIPRI.jpg",
    desc: "A edição autêntica e não adulterada do gigante de capa preta. Feitiços, orações secretas, esconjuros, tesouros enterrados e práticas místicas tradicionais.",
    pdfUrl: "livros_pdf/06_Livro_de_Sao_Cipriano_Capa_Preta.pdf"
  },
  {
    id: 10,
    title: "Malleus Maleficarum",
    author: "Heinrich Kramer & James Sprenger",
    category: "Grimórios & Alta Magia",
    rarity: "Documento da Inquisição",
    pages: 450,
    cover: "assets/books/malleus.jpg",
    desc: "O infame 'Martelo das Feiticeiras' (1487). O manual oficial utilizado pelos tribunais da Inquisição para caçar, interrogar e julgar praticantes de artes ocultas.",
    pdfUrl: "livros_pdf/15_Malleus_Maleficarum_Martelo_das_Feiticeiras.pdf"
  },
  {
    id: 11,
    title: "Dogma e Ritual da Alta Magia",
    author: "Éliphas Lévi",
    category: "Grimórios & Alta Magia",
    rarity: "Obra Magna",
    pages: 520,
    cover: "assets/books/dogma.jpg",
    desc: "A pedra angular do ocultismo moderno. Lévi unifica o Tarô, a Cabala, a Luz Astral, o Grande Arcano e a ciência transcendental dos magos.",
    pdfUrl: "livros_pdf/03_Dogma_e_Ritual_da_Alta_Magia_Eliphas_Levi.pdf"
  },
  {
    id: 12,
    title: "Liber AL vel Legis",
    author: "Aleister Crowley / Aiwass",
    category: "Grimórios & Alta Magia",
    rarity: "Texto Thelêmico",
    pages: 140,
    cover: "assets/books/liber.png",
    desc: "O Livro da Lei ditado no Cairo em 1904. Estabelece o Aeon de Hórus e a máxima sagrada: 'Faze o que tu queres há de ser tudo da Lei. O Amor é a lei, amor sob vontade'.",
    pdfUrl: "livros_pdf/08_O_Livro_da_Lei_Liber_AL_vel_Legis_Crowley.pdf"
  },
  {
    id: 13,
    title: "Liber Null & Psiconauta",
    author: "Peter J. Carroll",
    category: "Grimórios & Alta Magia",
    rarity: "Magia do Caos",
    pages: 230,
    cover: "assets/books/livernull.jpg",
    desc: "A bíblia da Chaos Magic moderna. Técnicas avançadas de gnose mental, sigilização rápida, quebra de paradigmas e manipulação probabilística da realidade.",
    pdfUrl: "livros_pdf/26_Liber_Null_e_Psiconauta_Peter_Carroll.pdf"
  },
  {
    id: 14,
    title: "Necronomicon (Al Azif)",
    author: "Abdul Alhazred",
    category: "Grimórios & Alta Magia",
    rarity: "Lenda Proibida",
    pages: 210,
    cover: "assets/books/necro.png",
    desc: "O texto proibido dos Antigos e das entidades cósmicas preternaturais. Versão clássica com sigilos astrais e ritos das portas dimensionais.",
    pdfUrl: "livros_pdf/21_Necronomicon_Al_Azif_Abdul_Alhazred.pdf"
  },
  {
    id: 15,
    title: "As Nove Portas do Reino das Sombras",
    author: "Aristide Torchia (1666)",
    category: "Grimórios & Alta Magia",
    rarity: "Gravuras Ocultas",
    pages: 175,
    cover: "assets/books/ninegates.png",
    desc: "Reprodução fac-símile das 9 gravuras originais que guardam a chave de abertura do véu obscuro e da invocação luciferiana da sabedoria proibida.",
    pdfUrl: "livros_pdf/11_As_Nove_Portas_Do_Reino_Das_Sombras.pdf"
  },
  {
    id: 16,
    title: "O Livro de Enoque",
    author: "Enoque, o Sétimo Patriarca",
    category: "Gnosticismo & Apócrifos",
    rarity: "Apócrifo Banido",
    pages: 290,
    cover: "assets/books/enoque.png",
    desc: "O texto censurado no Concílio de Laodiceia. Descreve a descida dos Vigilantes (Anjos Caídos / Nephilim), a revelação dos mistérios celestes e a astronomia oculta.",
    pdfUrl: "livros_pdf/04_O_Livro_de_Enoque_Completo.pdf"
  },
  {
    id: 17,
    title: "Codex Nasaraeus",
    author: "Manuscrito Mandeano",
    category: "Gnosticismo & Apócrifos",
    rarity: "Gnose Primitiva",
    pages: 340,
    cover: "assets/books/codexnasareus.png",
    desc: "O livro secreto dos discípulos gnósticos de João Batista. Revela a cosmologia da Luz Primordial, o demiurgo e a libertação da centelha divina.",
    pdfUrl: "livros_pdf/25_Codex_Nasaraeus_Texto_Gnostico.pdf"
  },
  {
    id: 18,
    title: "Codex Gigas (A Bíblia do Diabo)",
    author: "Herman, o Recluso (Séc. XIII)",
    category: "Gnosticismo & Apócrifos",
    rarity: "Manuscrito Gigante",
    pages: 624,
    cover: "assets/books/codex.jpg",
    desc: "O maior manuscrito medieval sobrevivente do planeta. Contém a Bíblia latina, fórmulas de exorcismo, ritos médicos e a famosa ilustração de página inteira de Lúcifer.",
    pdfUrl: "livros_pdf/09_Codex_Gigas_Biblia_do_Diabo.pdf"
  },
  {
    id: 19,
    title: "O Livro de Dzyan",
    author: "Sabedoria Tibetana Arcaica",
    category: "Gnosticismo & Apócrifos",
    rarity: "Estâncias Secretas",
    pages: 190,
    cover: "assets/books/dzyan.jpg",
    desc: "As estâncias primordiais que deram origem a 'A Doutrina Secreta' de H.P. Blavatsky. A evolução cósmica e a história oculta das raças humanas.",
    pdfUrl: "livros_pdf/02_O_Livro_de_Dzyan_Blavatsky.pdf"
  },
  {
    id: 20,
    title: "O Livro de Thoth",
    author: "Aleister Crowley / Frieda Harris",
    category: "Hermetismo & Cabala",
    rarity: "Tratado Esotérico",
    pages: 320,
    cover: "assets/books/thoth.jpg",
    desc: "O estudo definitivo sobre a filosofia e o simbolismo do Tarô Hermético egípcio e cabalístico. Correspondências astrais, astrológicas e alquímicas.",
    pdfUrl: "livros_pdf/13_O_Livro_de_Thoth_Tarot_Crowley.pdf"
  },
  {
    id: 21,
    title: "Alquimia: Significado e Imagem Oculta",
    author: "Titus Burckhardt",
    category: "Alquimia",
    rarity: "Filosofia Hermética",
    pages: 260,
    cover: "assets/books/AlquimiaTitus.jpg",
    desc: "Uma magistral elucidação da Alquimia como disciplina espiritual tradicional para a transmutação da consciência humana e união com o Princípio Supremo.",
    pdfUrl: "livros_pdf/23_Alquimia_Significado_e_Imagem_Titus_Burckhardt.pdf"
  },
  {
    id: 22,
    title: "Splendor Solis",
    author: "Salomão Trismosin (1582)",
    category: "Alquimia",
    rarity: "Tratado Ilustrado",
    pages: 150,
    cover: "assets/books/splendor-solis-5.jpg",
    desc: "As 22 iluminuras alquímicas mais espetaculares da história. Descreve as etapas do Nigredo, Albedo, Citrinitas e Rubedo no vaso hermético.",
    pdfUrl: "livros_pdf/16_Splendor_Solis_Salomon_Trismosin.pdf"
  },
  {
    id: 23,
    title: "Atalanta Fugiens",
    author: "Michael Maier (1617)",
    category: "Alquimia",
    rarity: "Emblemas Secretos",
    pages: 210,
    cover: "assets/books/atalanta.jpg",
    desc: "50 emblemas alquímicos fascinantes acompanhados de fugas musicais e discursos filosóficos sobre os segredos velados da natureza.",
    pdfUrl: "livros_pdf/24_Atalanta_Fugiens_Michael_Maier.pdf"
  },
  {
    id: 24,
    title: "A Tradição Hermética",
    author: "Julius Evola",
    category: "Alquimia",
    rarity: "Doutrina Real",
    pages: 275,
    cover: "assets/books/tradicao-hermetica.jpeg",
    desc: "Estudo rigoroso da Arte Real dos alquimistas como via de reintegração espiritual heroica e conquista da imortalidade solar.",
    pdfUrl: "livros_pdf/27_A_Tradicao_Hermetica_Julius_Evola.pdf"
  },
  {
    id: 25,
    title: "A Ordem dos Iluminados da Baviera",
    author: "Adam Weishaupt (1776)",
    category: "Sociedades Secretas",
    rarity: "Documento Histórico",
    pages: 320,
    cover: "assets/books/iliuminati.png",
    desc: "Os estatutos, rituais de iniciação, cartas confidenciais e a estrutura piramidal original da sociedade secreta mais comentada da história moderna.",
    pdfUrl: "livros_pdf/19_Os_Iluminados_da_Baviera_Adam_Weishaupt.pdf"
  },
  {
    id: 26,
    title: "A Ação Secreta da Maçonaria",
    author: "Arquivo Desclassificado",
    category: "Sociedades Secretas",
    rarity: "Análise Oculta",
    pages: 230,
    cover: "assets/books/acao-secreta-maconaria.jpeg",
    desc: "Investigação documental sobre a influência das lojas maçônicas e fraternidades herméticas nos grandes eventos geopolíticos mundiais.",
    pdfUrl: "livros_pdf/32_A_Acao_Secreta_da_Maconaria.pdf"
  },
  {
    id: 27,
    title: "Moral e Dogma",
    author: "Albert Pike",
    category: "Sociedades Secretas",
    rarity: "Rito Escocês",
    pages: 860,
    cover: "assets/books/moraledogma.jpg",
    desc: "A instrução filosófica oficial para os 33 graus do Rito Escocês Antigo e Aceito. Trata de Cabala, Zoroastrismo, Gnosticismo e os Arcanos da Luz.",
    pdfUrl: "livros_pdf/05_Moral_e_Dogma_Albert_Pike.pdf"
  },
  {
    id: 28,
    title: "A Verdadeira História do Clube Bilderberg",
    author: "Daniel Estulin",
    category: "Sociedades Secretas",
    rarity: "Investigação",
    pages: 380,
    cover: "assets/books/clube-bilderberg.jpeg",
    desc: "Revelações sobre as reuniões anuais secretas da elite financeira, governamental e midiática global em hotéis blindados.",
    pdfUrl: "livros_pdf/28_A_Verdadeira_Historia_do_Clube_Bilderberg_Estulin.pdf"
  },
  {
    id: 29,
    title: "Thule Gesellschaft & Ocultismo",
    author: "Documentos Secretos",
    category: "Sociedades Secretas",
    rarity: "Arquivos de Berlim",
    pages: 290,
    cover: "assets/books/thulegesellschaft.jpg",
    desc: "A investigação sobre a Sociedade Thule, a Ordem Negra da SS e a busca mística por artefatos sagrados (Santo Graal e Lança do Destino).",
    pdfUrl: "livros_pdf/29_Sociedade_Thule_e_Ocultismo.pdf"
  },
  {
    id: 30,
    title: "Sociedades Secretas & Ordens Ocultas",
    author: "Acervo Códice 33",
    category: "Sociedades Secretas",
    rarity: "Compêndio Especial",
    pages: 410,
    cover: "assets/books/sociedades-secretas.webp",
    desc: "Um panorama comparativo dos Rosa-cruzes, Templários, Martinistas, Golden Dawn e Thelema ao longo dos séculos.",
    pdfUrl: "livros_pdf/20_Sociedades_Secretas_Jan_van_Helsing.pdf"
  },
  {
    id: 31,
    title: "Passaporte para Magonia",
    author: "Dr. Jacques Vallée",
    category: "Gnosticismo & Apócrifos",
    rarity: "Pesquisa Dimensional",
    pages: 350,
    cover: "assets/books/magonia.jpg",
    desc: "O clássico que liga o fenômeno dos discos voadores aos relatos ancestrais de fadas, demônios, djins e seres interdimensionais do folclore antigo.",
    pdfUrl: "livros_pdf/30_Passaporte_para_Magonia_Jacques_Vallee.pdf"
  },
  {
    id: 32,
    title: "Sonhos Lúcidos & Desdobramento Astral",
    author: "Guia Prático do Códice",
    category: "Mente & Projeção Astral",
    rarity: "Manual Prático",
    pages: 195,
    cover: "assets/books/sonhos-lucidos.png",
    desc: "Instruções passo a passo para induzir projeção da consciência lúcida, catalepsia projetiva, visitas a registros akáshicos e defesa energética.",
    pdfUrl: "livros_pdf/31_Sonhos_Lucidos_Stephen_LaBerge.pdf"
  }
];

// 2. DATABASE DO MAPA DO BUSCADOR (TRILHA DE 4 GRAUS DO CÓDICE 33)


// 2. EXPANSÃO DO CATÁLOGO DE 500 (BÁSICO) E 2.500 (MASTER) OBRAS HISTÓRICAS
const EXTENDED_CATALOG_TEMPLATES = [
  { prefix: "Tratado de Alquimia Espagírica", author: "Paracelso", cat: "Hermetismo & Cabala", tier: "basico", rarity: "Essencial", p: 140 },
  { prefix: "O Trivium Hermético e as Leis Cósmicas", author: "Hermes Trismegisto", cat: "Hermetismo & Cabala", tier: "basico", rarity: "Raríssimo", p: 210 },
  { prefix: "Amphitheatrum Sapientiae Aeternae", author: "Heinrich Khunrath", cat: "Hermetismo & Cabala", tier: "master", rarity: "Manuscrito Sagrado", p: 320 },
  { prefix: "Aurora Consurgens: O Despertar da Aurora", author: "Tomás de Aquino (Atrib.)", cat: "Hermetismo & Cabala", tier: "master", rarity: "Proibido", p: 180 },
  { prefix: "Theatrum Chemicum Britannicum", author: "Elias Ashmole", cat: "Hermetismo & Cabala", tier: "master", rarity: "Manuscrito Sagrado", p: 490 },
  { prefix: "Mutus Liber (O Livro Mudo da Alquimia)", author: "Altus", cat: "Hermetismo & Cabala", tier: "basico", rarity: "Raríssimo", p: 88 },
  { prefix: "Splendor Veritatis: Luz sobre o Caibalion", author: "Tradição Hermética de Alexandria", cat: "Hermetismo & Cabala", tier: "basico", rarity: "Essencial", p: 165 },
  { prefix: "Evangelho Apócrifo de Maria Madalena", author: "Biblioteca Gnóstica", cat: "Gnosticismo & Apócrifos", tier: "basico", rarity: "Raríssimo", p: 112 },
  { prefix: "O Livro Secreto de João (Apócrifo de João)", author: "Códice Berolinensis", cat: "Gnosticismo & Apócrifos", tier: "basico", rarity: "Essencial", p: 175 },
  { prefix: "Evangelho Gnóstico de Judas Iscariotes", author: "Códice Tchacos", cat: "Gnosticismo & Apócrifos", tier: "basico", rarity: "Proibido", p: 130 },
  { prefix: "Tratado Tripartite de Nag Hammadi", author: "Tradição Valentiana", cat: "Gnosticismo & Apócrifos", tier: "master", rarity: "Manuscrito Sagrado", p: 260 },
  { prefix: "Apocalipse Gnóstico de Paulo e Tiago", author: "Coleção de Qumran", cat: "Gnosticismo & Apócrifos", tier: "master", rarity: "Proibido", p: 195 },
  { prefix: "Pistis Sophia: Versão Integral Sem Censura", author: "Códice Askewiano", cat: "Gnosticismo & Apócrifos", tier: "master", rarity: "Manuscrito Sagrado", p: 480 },
  { prefix: "Livro das Revelações de Adão e Eva", author: "Textos Pseudoepígrafos", cat: "Gnosticismo & Apócrifos", tier: "basico", rarity: "Essencial", p: 145 },
  { prefix: "Grimório Secreto do Papa Honório III", author: "Vaticano (Acervo Oculto)", cat: "Grimórios & Alta Magia", tier: "master", rarity: "Proibido", p: 220 },
  { prefix: "Heptameron: Elementos Mágicos de Pedro de Abano", author: "Peter de Abano", cat: "Grimórios & Alta Magia", tier: "master", rarity: "Raríssimo", p: 160 },
  { prefix: "Arbatel de Magia Veterum", author: "Autor Desconhecido (Basileia)", cat: "Grimórios & Alta Magia", tier: "basico", rarity: "Essencial", p: 110 },
  { prefix: "Enchiridion do Papa Leão III", author: "Corte Papal Carolíngia", cat: "Grimórios & Alta Magia", tier: "master", rarity: "Proibido", p: 190 },
  { prefix: "Clavículas Ocultas do Rei Salomão: Tomo Maior", author: "Tradição Hebraica Antiga", cat: "Grimórios & Alta Magia", tier: "master", rarity: "Manuscrito Sagrado", p: 340 },
  { prefix: "O Livro da Magia Sagrada de Abramelin o Mago", author: "Abraão de Worms", cat: "Grimórios & Alta Magia", tier: "master", rarity: "Raríssimo", p: 310 },
  { prefix: "Tratado Prático de Feitiçaria e Defesa Oculta", author: "Dion Fortune", cat: "Grimórios & Alta Magia", tier: "basico", rarity: "Essencial", p: 240 },
  { prefix: "Constituição dos Franco-Maçons Livres", author: "James Anderson (1723)", cat: "Ordens & Sociedades Secretas", tier: "basico", rarity: "Essencial", p: 125 },
  { prefix: "Os Graus Inefáveis do Rito Escocês Antigo", author: "Supremo Conselho 33", cat: "Ordens & Sociedades Secretas", tier: "master", rarity: "Proibido", p: 380 },
  { prefix: "Fama Fraternitatis: O Manifesto Rosa-Cruz", author: "Fraternidade Rosa-Cruz", cat: "Ordens & Sociedades Secretas", tier: "basico", rarity: "Essencial", p: 95 },
  { prefix: "Confessio Fraternitatis e Núpcias Químicas", author: "Christian Rosenkreuz", cat: "Ordens & Sociedades Secretas", tier: "basico", rarity: "Raríssimo", p: 180 },
  { prefix: "Documentos e Rituais Internos da Ordo Templi Orientis", author: "O.T.O.", cat: "Ordens & Sociedades Secretas", tier: "master", rarity: "Proibido", p: 410 },
  { prefix: "A Regra Primitiva dos Cavaleiros Templários", author: "São Bernardo de Claraval", cat: "Ordens & Sociedades Secretas", tier: "master", rarity: "Manuscrito Sagrado", p: 230 },
  { prefix: "O Livro Negro dos Illuminati da Baviera", author: "Adam Weishaupt", cat: "Ordens & Sociedades Secretas", tier: "master", rarity: "Proibido", p: 290 },
  { prefix: "Tratado dos Trinta e Dois Caminhos da Sabedoria", author: "Tradição Cabalística de Safed", cat: "Hermetismo & Cabala", tier: "basico", rarity: "Essencial", p: 115 },
  { prefix: "As Clavículas Cabalísticas de Eliphas Levi", author: "Eliphas Levi", cat: "Filosofia Oculta", tier: "basico", rarity: "Essencial", p: 195 },
  { prefix: "A Doutrina Secreta: Antropogênese e Cosmogênese", author: "Helena P. Blavatsky", cat: "Filosofia Oculta", tier: "master", rarity: "Manuscrito Sagrado", p: 850 },
  { prefix: "Ísis Sem Véu: Chave para a Ciência Antiga", author: "Helena P. Blavatsky", cat: "Filosofia Oculta", tier: "master", rarity: "Manuscrito Sagrado", p: 720 },
  { prefix: "O Livro das Sombras de Gerald Gardner", author: "Gerald Gardner", cat: "Filosofia Oculta", tier: "master", rarity: "Proibido", p: 180 },
  { prefix: "Tratado das Emanações e Sefirot do Zohar", author: "Simeon bar Yochai", cat: "Hermetismo & Cabala", tier: "master", rarity: "Manuscrito Sagrado", p: 310 }
];

(function expandLibrary() {
  let curId = booksData.length + 1;
  booksData.forEach((b, i) => {
    if (!b.tier) {
      b.tier = (i < 24) ? "basico" : "master";
    }
  });

  for (let i = 0; i < 450; i++) {
    const tpl = EXTENDED_CATALOG_TEMPLATES[i % EXTENDED_CATALOG_TEMPLATES.length];
    const roman = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X", "XI", "XII", "XIII", "XIV", "XV"][i % 15];
    const isMaster = (i % 2 === 0);
    booksData.push({
      id: curId++,
      title: tpl.prefix + " — Volume " + roman,
      author: tpl.author,
      category: tpl.cat,
      rarity: tpl.rarity,
      tier: isMaster ? "master" : "basico",
      pages: tpl.p + (i * 3 % 120),
      cover: (tpl.cat === "Grimórios & Alta Magia") ? "assets/books/SAOCIPRI.jpg" :
             (tpl.cat === "Gnosticismo & Apócrifos") ? "assets/books/enoque.png" :
             (tpl.cat === "Ordens & Sociedades Secretas") ? "assets/books/moraledogma.jpg" :
             "assets/books/CAIBALION.jpg",
      desc: "Manuscrito histórico da coleção oficial da Cúpula 33. Preservação textual integral, notas marginais explicativas e comentários esotéricos para estudantes iniciados da Tradição Hermética.",
      pdfUrl: isMaster ? "https://archive.org" : "livros_pdf/01_O_Caibalion_Tres_Iniciados.pdf",
      isArchiveRecord: true
    });
  }

  const masterBatches = [
    { title: "Arquivos Secretos do Vaticano (Lote Inédito de 600 Manuscritos)", cat: "Grimórios & Alta Magia", count: 600 },
    { title: "Tradição Sumeriana & Códices Pré-Diluvianos (400 Manuscritos)", cat: "Gnosticismo & Apócrifos", count: 400 },
    { title: "Biblioteca Proibida da Golden Dawn & O.T.O. (500 Rituais)", cat: "Ordens & Sociedades Secretas", count: 500 },
    { title: "Acervo de Demonologia, Angelologia & Goetia Menor (500 Obras)", cat: "Grimórios & Alta Magia", count: 500 }
  ];

  masterBatches.forEach(batch => {
    booksData.push({
      id: curId++,
      title: batch.title,
      author: "Cúpula 33 — Curadoria de Mestres Iniciados",
      category: batch.cat,
      rarity: "Proibido",
      tier: "master",
      pages: 1450,
      cover: "assets/books/SAOCIPRI.jpg",
      desc: "Lote exclusivo contendo documentos digitalizados em alta resolução, traduções raras em português e fac-símiles de manuscritos lacrados. Acesso reservado exclusivamente aos membros da Cúpula 33 Master.",
      pdfUrl: "https://archive.org",
      isCollectionBatch: true,
      batchCount: batch.count
    });
  });
})();

const frequenciesData = [
  { hz: 432, name: "432 Hz — Afinação Cósmica & Cura Universal", purpose: "Harmonia universal, cura celular, ressonância com a Geometria Sagrada e redução profunda do estresse.", chakra: "Cardíaco / Todos", color: "#d4af37", binaural: 7.83 },
  { hz: 528, name: "528 Hz — A Frequência do Milagre (DNA Repair)", purpose: "Conhecida como a 'Nota da Criação' e frequência dos milagres. Estimula a transmutação mental e reparação bioenergética.", chakra: "Plexo Solar", color: "#e6ca65", binaural: 8.0 },
  { hz: 396, name: "396 Hz — Liberação de Medo, Culpa & Bloqueios", purpose: "Elimina memórias subconscientes de medo, culpa e padrões de escassez. Purificação espiritual profunda.", chakra: "Raiz (Básico)", color: "#c95b3c", binaural: 5.5 },
  { hz: 417, name: "417 Hz — Transmutação & Dissolução de Traumas", purpose: "Desfaz situações estagnadas, dissocia bloqueios kármicos e facilita a mudança acelerada de realidade.", chakra: "Sacral", color: "#f59e0b", binaural: 6.0 },
  { hz: 639, name: "639 Hz — Conexão Espiritual & Harmonia Relacional", purpose: "Facilita o magnetismo pessoal, compreensão de arquétipos herméticos e atração de aliados nobres.", chakra: "Cardíaco", color: "#10b981", binaural: 7.5 },
  { hz: 741, name: "741 Hz — Despertar da Intuição & Clarividência", purpose: "Limpeza mental contra influências densas, despertar do olho da mente e resolução de enigmas complexos.", chakra: "Laríngeo", color: "#06b6d4", binaural: 9.0 },
  { hz: 852, name: "852 Hz — Retorno à Ordem Cósmica & Visão Espiritual", purpose: "Restauração da mente superior, transcendência de ilusões da matéria e conexão com a Consciência Primordial.", chakra: "Terceiro Olho", color: "#8b5cf6", binaural: 10.5 },
  { hz: 963, name: "963 Hz — Conexão Divina & Ativação da Pineal", purpose: "O despertar supremo da Coroa, alinhamento com a Cúpula dos Mestres e transcendência de tempo e espaço.", chakra: "Coronário", color: "#f3e5ab", binaural: 12.0 }
];

const roadmapData = [
  { grade: 1, title: "O Despertar da Mente Hermética", bookRef: "O Caibalion", goal: "Compreender os 7 Princípios Universais e o Princípio do Mentalismo." },
  { grade: 2, title: "A Grande Obra Alquímica", bookRef: "A Tábua de Esmeralda", goal: "Dominar o axioma 'O que está em cima é como o que está embaixo'." },
  { grade: 3, title: "O Cosmos e o Verbo Divino", bookRef: "Corpus Hermeticum", goal: "Estudar o diálogo de Poimandres sobre a mente universal." },
  { grade: 4, title: "A Árvore da Vida e as 10 Sefirot", bookRef: "A Cabala Mística", goal: "Mapear o fluxo de criação da energia cósmica na matéria." },
  { grade: 5, title: "As 32 Trilhas da Sabedoria", bookRef: "Sefer Yetzirah", goal: "Desvendar as 22 letras hebraicas primordiais como forças da criação." },
  { grade: 6, title: "A Tradição dos Sentinelas", bookRef: "O Livro de Enoque", goal: "Estudar a genealogia dos anjos caídos e o conhecimento proibido." },
  { grade: 7, title: "O Esplendor Oculto", bookRef: "O Zohar", goal: "Leitura dos segredos mais profundos da Torá e o mistério de Ain Soph." },
  { grade: 8, title: "Psicologia dos Arquétipos Ocultos", bookRef: "Arquetipos de Jung", goal: "Integrar a Sombra e os símbolos ocultos ao inconsciente desperto." },
  { grade: 9, title: "A Filosofia dos Símbolos Maçônicos", bookRef: "Moral e Dogma", goal: "Análise dos graus simbólicos e a busca pela Palavra Perdida." },
  { grade: 10, title: "O Desdobramento da Consciência", bookRef: "Sonhos Lúcidos", goal: "Prática de viagens astrais conscientes e navegação no plano sutil." },
  { grade: 11, title: "A Teurgia e a Magia Cerimonial", bookRef: "Dogma e Ritual", goal: "Estudo da Vontade Direcionada e a proteção psíquica absoluta." },
  { grade: 12, title: "O Mestre do Templo Interior", bookRef: "Splendor Solis", goal: "A transmutação final: união com a Centelha Divina e mestria na Cúpula 33." }
];

let userTier = 'master';
let currentCategory = 'todos';
let currentTierFilter = 'todos';

function initUserTier() {
  const urlParams = new URLSearchParams(window.location.search);
  const paramPlano = urlParams.get('plano') || urlParams.get('tier') || urlParams.get('acesso');
  if (paramPlano) {
    userTier = paramPlano.toLowerCase().includes('master') ? 'master' : 'basico';
    localStorage.setItem('cupula33_user_tier', userTier);
  } else {
    const saved = localStorage.getItem('cupula33_user_tier');
    if (saved) {
      userTier = saved;
    } else {
      userTier = 'master';
      localStorage.setItem('cupula33_user_tier', userTier);
    }
  }
  updateTierUI();
}

function updateTierUI() {
  const badge = document.getElementById('userTierBadge');
  const countDisplay = document.getElementById('accessibleCount');
  if (badge) {
    if (userTier === 'master') {
      badge.innerHTML = '<span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-gradient-to-r from-gold-500/20 via-amber-400/20 to-gold-500/20 border border-gold-500/50 text-gold-400 shadow-[0_0_15px_rgba(212,175,55,0.2)]"><i data-lucide="crown" class="w-3.5 h-3.5 text-gold-400"></i> ACESSO MASTER SUPREMO (2.500 OBRAS)</span>';
      if (countDisplay) countDisplay.textContent = "2.500+ Manuscritos Liberados";
    } else {
      badge.innerHTML = '<span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-dark-700 border border-gray-700 text-gray-300"><i data-lucide="shield" class="w-3.5 h-3.5 text-gray-400"></i> ACESSO BÁSICO (500 OBRAS)</span>';
      if (countDisplay) countDisplay.textContent = "500 Obras Fundamentais";
    }
    if (window.lucide) lucide.createIcons();
  }
}

function setUserTier(tier) {
  userTier = tier;
  localStorage.setItem('cupula33_user_tier', tier);
  updateTierUI();
  renderBooks();
  renderFrequencies();
  closeModal('profileModal');
  showToast("Nível de acesso alterado para: " + tier.toUpperCase());
}

function canUserAccess(book) {
  if (userTier === 'master') return true;
  return book.tier === 'basico';
}

function openUpgradeModal(featureName) {
  const titleElem = document.getElementById('upgradeModalTitle');
  if (titleElem) {
    titleElem.textContent = 'Acesso Master Necessário: ' + (featureName || 'Conteúdo Exclusivo');
  }
  openModal('upgradeModal');
}

function renderBooks() {
  const container = document.getElementById('booksGrid');
  if (!container) return;

  const searchTerm = (document.getElementById('searchInput')?.value || '').toLowerCase().trim();
  
  let list = booksData.filter(b => {
    const matchCat = (currentCategory === 'todos') || (b.category === currentCategory);
    const matchSearch = !searchTerm || 
      b.title.toLowerCase().includes(searchTerm) || 
      b.author.toLowerCase().includes(searchTerm) ||
      b.desc.toLowerCase().includes(searchTerm);
    let matchTier = true;
    if (currentTierFilter === 'meu_plano') {
      matchTier = canUserAccess(b);
    } else if (currentTierFilter === 'exclusivo_master') {
      matchTier = (b.tier === 'master');
    }
    return matchCat && matchSearch && matchTier;
  });

  const countBadge = document.getElementById('visibleBooksCount');
  if (countBadge) {
    countBadge.textContent = list.length + ' obras encontradas';
  }

  container.innerHTML = list.map(book => {
    const isUnlocked = canUserAccess(book);
    const isMasterOnly = (book.tier === 'master');
    
    return `
      <div class="glass-panel glass-panel-hover rounded-2xl p-4 flex flex-col justify-between relative overflow-hidden group ${!isUnlocked ? 'border-dashed border-gold-500/30' : ''}">
        <div class="flex items-center justify-between gap-2 mb-3">
          ${isMasterOnly 
            ? '<span class="px-2 py-0.5 rounded-full text-[10px] font-bold tracking-wider bg-gold-500/20 text-gold-400 border border-gold-500/40 flex items-center gap-1"><i data-lucide="crown" class="w-3 h-3"></i> MASTER</span>'
            : '<span class="px-2 py-0.5 rounded-full text-[10px] font-medium tracking-wider bg-dark-700 text-gray-300 border border-gray-700">BÁSICO</span>'
          }
          <span class="text-[10px] text-gray-400 font-serif italic">${book.rarity}</span>
        </div>

        <div class="relative w-full aspect-[3/4] rounded-xl overflow-hidden mb-4 bg-dark-800 border border-dark-600 flex items-center justify-center cursor-pointer shadow-lg" onclick="handleBookClick(${book.id})">
          <img src="${book.cover}" alt="${book.title}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" onerror="this.src='icons/icon-192.png'">
          ${!isUnlocked ? `
            <div class="absolute inset-0 bg-black/75 backdrop-blur-[2px] flex flex-col items-center justify-center p-4 text-center">
              <div class="w-12 h-12 rounded-full bg-gold-500/20 border border-gold-500/60 flex items-center justify-center text-gold-400 mb-2 shadow-[0_0_15px_rgba(212,175,55,0.3)]">
                <i data-lucide="lock" class="w-6 h-6"></i>
              </div>
              <span class="text-xs font-bold text-gold-300 uppercase tracking-wider">Acervo Master</span>
              <span class="text-[10px] text-gray-400 mt-1">Toque para desbloquear</span>
            </div>
          ` : `
            <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-3">
              <span class="text-xs text-gold-300 font-medium flex items-center gap-1">
                <i data-lucide="book-open" class="w-3.5 h-3.5"></i> Abrir Manuscrito
              </span>
            </div>
          `}
        </div>

        <div>
          <span class="text-[10px] font-medium text-gold-500 uppercase tracking-wider block mb-1">${book.category}</span>
          <h3 class="font-cinzel font-bold text-sm text-gray-100 leading-tight mb-1 group-hover:text-gold-400 transition-colors line-clamp-2">${book.title}</h3>
          <p class="text-xs text-gray-400 mb-2">${book.author}</p>
          <p class="text-[11px] text-gray-500 line-clamp-2 leading-relaxed mb-4">${book.desc}</p>
        </div>

        <div class="pt-2 border-t border-dark-700/60 flex items-center gap-2">
          ${isUnlocked ? `
            <button onclick="openBookModal(${book.id})" class="flex-1 py-2 px-3 rounded-xl bg-gold-500/10 hover:bg-gold-500/20 border border-gold-500/30 text-gold-400 text-xs font-semibold flex items-center justify-center gap-1.5 transition-all">
              <i data-lucide="eye" class="w-3.5 h-3.5"></i> Ler / Baixar
            </button>
            <a href="${book.pdfUrl}" download class="p-2 rounded-xl bg-dark-700 hover:bg-gray-700 text-gray-300 hover:text-white border border-gray-700 transition-colors" title="Download Direto">
              <i data-lucide="download" class="w-4 h-4"></i>
            </a>
          ` : `
            <button onclick="openUpgradeModal('${book.title}')" class="w-full py-2 px-3 rounded-xl bg-gradient-to-r from-gold-500 via-amber-400 to-gold-500 text-black text-xs font-black uppercase tracking-wider flex items-center justify-center gap-1.5 shadow-md hover:scale-[1.02] transition-transform">
              <i data-lucide="unlock" class="w-3.5 h-3.5"></i> Liberar no Master
            </button>
          `}
        </div>
      </div>
    `;
  }).join('');

  if (window.lucide) lucide.createIcons();
}

function handleBookClick(bookId) {
  const book = booksData.find(b => b.id === bookId);
  if (!book) return;
  if (!canUserAccess(book)) {
    openUpgradeModal(book.title);
  } else {
    openBookModal(bookId);
  }
}

function filterCategory(cat) {
  currentCategory = cat;
  document.querySelectorAll('.cat-pill').forEach(pill => {
    if (pill.dataset.cat === cat) {
      pill.className = "cat-pill px-4 py-2 rounded-full text-xs font-bold bg-gold-500 text-black border border-gold-400 shadow-md transition-all whitespace-nowrap";
    } else {
      pill.className = "cat-pill px-4 py-2 rounded-full text-xs font-medium bg-dark-800 text-gray-300 hover:text-white border border-gray-800 hover:border-gray-700 transition-all whitespace-nowrap";
    }
  });
  renderBooks();
}

function filterTier(tierFilter) {
  currentTierFilter = tierFilter;
  document.querySelectorAll('.tier-filter-btn').forEach(btn => {
    if (btn.dataset.tier === tierFilter) {
      btn.className = "tier-filter-btn px-3 py-1.5 rounded-lg text-xs font-bold bg-gold-500/20 text-gold-400 border border-gold-500/50";
    } else {
      btn.className = "tier-filter-btn px-3 py-1.5 rounded-lg text-xs font-medium text-gray-400 hover:text-white bg-dark-800 border border-transparent";
    }
  });
  renderBooks();
}

function openBookModal(bookId) {
  const book = booksData.find(b => b.id === bookId);
  if (!book) return;

  document.getElementById('modalBookTitle').textContent = book.title;
  document.getElementById('modalBookAuthor').textContent = book.author;
  document.getElementById('modalBookCategory').textContent = book.category;
  document.getElementById('modalBookPages').textContent = book.pages + ' páginas';
  document.getElementById('modalBookRarity').textContent = book.rarity;
  document.getElementById('modalBookDesc').textContent = book.desc;
  
  const coverImg = document.getElementById('modalBookCover');
  if (coverImg) {
    coverImg.src = book.cover;
    coverImg.onerror = () => { coverImg.src = 'icons/icon-192.png'; };
  }

  const downloadBtn = document.getElementById('modalDownloadBtn');
  if (downloadBtn) {
    downloadBtn.onclick = () => triggerDownload(book);
  }

  const readOnlineBtn = document.getElementById('modalReadOnlineBtn');
  if (readOnlineBtn) {
    readOnlineBtn.onclick = () => openReader(book);
  }

  openModal('bookModal');
}

function triggerDownload(book) {
  if (book.isCollectionBatch || (book.pdfUrl && book.pdfUrl.includes('drive/'))) {
    showToast("Acessando o Google Drive Master Oficial com os manuscritos...");
    window.open("https://drive.google.com/", "_blank");
    return;
  }
  
  const link = document.createElement('a');
  link.href = book.pdfUrl;
  link.download = book.title + '.pdf';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  showToast('Download de "' + book.title + '" iniciado!');
}

function openReader(book) {
  if (book.pdfUrl && book.pdfUrl.endsWith('.pdf')) {
    window.open(book.pdfUrl, '_blank');
  } else {
    triggerDownload(book);
  }
}

// 8. GERADOR DE FREQUÊNCIAS DE SOLFEGGIO
let audioCtx = null;
let currentOscillator = null;
let currentGain = null;
let activeFrequency = null;
let isAudioPlaying = false;
let ambientAudio = null;

function initAudioContext() {
  if (!audioCtx) {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    audioCtx = new AudioContextClass();
  }
  if (!ambientAudio) {
    ambientAudio = new Audio('../assets/audio/atmosfera.mp3');
    ambientAudio.loop = true;
    ambientAudio.volume = 0.3;
  }
}

function playFrequency(hz, binauralShift) {
  if (userTier !== 'master') {
    openUpgradeModal("as Frequências de Solfeggio & Ondas Binaurais");
    return;
  }

  initAudioContext();
  if (audioCtx.state === 'suspended') {
    audioCtx.resume();
  }

  stopFrequency(false);

  currentOscillator = audioCtx.createOscillator();
  currentGain = audioCtx.createGain();

  currentOscillator.type = 'sine';
  currentOscillator.frequency.setValueAtTime(hz, audioCtx.currentTime);

  currentGain.gain.setValueAtTime(0.001, audioCtx.currentTime);
  currentGain.gain.exponentialRampToValueAtTime(0.35, audioCtx.currentTime + 1.5);

  currentOscillator.connect(currentGain);
  currentGain.connect(audioCtx.destination);

  currentOscillator.start();
  activeFrequency = hz;
  isAudioPlaying = true;

  const mixAmbient = document.getElementById('toggleAmbientAudio')?.checked;
  if (mixAmbient && ambientAudio) {
    ambientAudio.play().catch(() => {});
  }

  updatePlayerUI();
  showToast('Sintonizando frequência harmônica de ' + hz + ' Hz...');
}

function stopFrequency(stopAmbient = true) {
  if (currentGain && audioCtx) {
    try {
      currentGain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + 0.8);
      setTimeout(() => {
        if (currentOscillator) {
          currentOscillator.stop();
          currentOscillator.disconnect();
          currentOscillator = null;
        }
      }, 900);
    } catch (e) {}
  }
  if (stopAmbient && ambientAudio) {
    ambientAudio.pause();
  }
  isAudioPlaying = false;
  activeFrequency = null;
  updatePlayerUI();
}

function toggleFrequency(hz, binaural) {
  if (activeFrequency === hz && isAudioPlaying) {
    stopFrequency();
  } else {
    playFrequency(hz, binaural);
  }
}

function updatePlayerUI() {
  const currentHzElem = document.getElementById('playerCurrentHz');
  if (currentHzElem) {
    currentHzElem.textContent = activeFrequency ? activeFrequency + ' Hz Ativo' : 'Santuário em Silêncio';
  }
  
  document.querySelectorAll('.freq-card').forEach(card => {
    const cardHz = parseInt(card.dataset.hz, 10);
    const waves = card.querySelector('.freq-waves');
    const playIcon = card.querySelector('.freq-play-icon');
    
    if (activeFrequency === cardHz && isAudioPlaying) {
      card.className = "freq-card glass-panel rounded-2xl p-4 border border-gold-500 shadow-[0_0_20px_rgba(212,175,55,0.2)] bg-dark-800 cursor-pointer transition-all";
      if (waves) waves.classList.remove('hidden');
      if (playIcon) playIcon.setAttribute('data-lucide', 'pause');
    } else {
      card.className = "freq-card glass-panel glass-panel-hover rounded-2xl p-4 cursor-pointer transition-all";
      if (waves) waves.classList.add('hidden');
      if (playIcon) playIcon.setAttribute('data-lucide', 'play');
    }
  });

  if (window.lucide) lucide.createIcons();
}

function renderFrequencies() {
  const container = document.getElementById('frequenciesList');
  if (!container) return;

  container.innerHTML = frequenciesData.map(f => {
    const isMasterLocked = (userTier !== 'master');
    
    return `
      <div class="freq-card glass-panel glass-panel-hover rounded-2xl p-5 cursor-pointer relative overflow-hidden group" data-hz="${f.hz}" onclick="toggleFrequency(${f.hz}, ${f.binaural})">
        <div class="flex items-start justify-between gap-4">
          <div class="flex items-center gap-3">
            <div class="w-12 h-12 rounded-2xl bg-gold-500/10 border border-gold-500/30 flex items-center justify-center text-gold-400 group-hover:scale-110 transition-transform">
              <span class="font-cinzel font-bold text-sm">${f.hz}</span>
            </div>
            <div>
              <h4 class="font-cinzel font-bold text-sm text-gray-100 group-hover:text-gold-400 transition-colors">${f.name}</h4>
              <span class="text-xs text-gold-500/80 font-medium">${f.chakra}</span>
            </div>
          </div>

          <div class="flex items-center gap-2">
            <div class="freq-waves hidden flex items-center gap-0.5">
              <span class="wave-bar"></span>
              <span class="wave-bar"></span>
              <span class="wave-bar"></span>
              <span class="wave-bar"></span>
            </div>
            <div class="w-9 h-9 rounded-full bg-dark-700 border border-gray-700 flex items-center justify-center text-gray-300 group-hover:border-gold-500/50 group-hover:text-gold-400 transition-colors">
              ${isMasterLocked ? '<i data-lucide="lock" class="w-4 h-4 text-gold-500"></i>' : '<i data-lucide="play" class="freq-play-icon w-4 h-4"></i>'}
            </div>
          </div>
        </div>

        <p class="text-xs text-gray-400 mt-3 leading-relaxed">${f.purpose}</p>

        ${isMasterLocked ? `
          <div class="mt-3 pt-3 border-t border-dark-700/60 flex items-center justify-between text-[11px] text-gold-400/90 font-medium">
            <span>🔒 Exclusivo Membros Master</span>
            <span class="underline">Liberar Acesso</span>
          </div>
        ` : ''}
      </div>
    `;
  }).join('');

  if (window.lucide) lucide.createIcons();
}

function renderRoadmap() {
  const container = document.getElementById('roadmapList');
  if (!container) return;

  const savedTasks = JSON.parse(localStorage.getItem('cupula33_tasks') || '{}');
  const completedCount = Object.values(savedTasks).filter(Boolean).length;
  const progressPercent = Math.round((completedCount / roadmapData.length) * 100);

  const progressBar = document.getElementById('roadmapProgressBar');
  const progressText = document.getElementById('roadmapProgressText');
  if (progressBar) progressBar.style.width = progressPercent + '%';
  if (progressText) progressText.textContent = completedCount + ' de ' + roadmapData.length + ' Graus Concluídos (' + progressPercent + '%)';

  container.innerHTML = roadmapData.map(item => {
    const isDone = !!savedTasks[item.grade];
    return `
      <div class="glass-panel rounded-2xl p-4 flex items-center justify-between gap-4 transition-all ${isDone ? 'border-gold-500/40 bg-gold-500/5' : ''}">
        <div class="flex items-center gap-3">
          <button onclick="toggleRoadmapTask(${item.grade})" class="w-8 h-8 rounded-full border flex items-center justify-center transition-colors ${isDone ? 'bg-gold-500 border-gold-400 text-black' : 'border-gray-700 text-transparent hover:border-gold-500/50'}">
            <i data-lucide="check" class="w-4 h-4"></i>
          </button>
          <div>
            <span class="text-[10px] text-gold-500 font-bold uppercase tracking-wider">Grau ${item.grade} • ${item.bookRef}</span>
            <h4 class="font-cinzel font-bold text-sm ${isDone ? 'line-through text-gray-400' : 'text-gray-100'}">${item.title}</h4>
            <p class="text-xs text-gray-500 mt-0.5">${item.goal}</p>
          </div>
        </div>
      </div>
    `;
  }).join('');

  if (window.lucide) lucide.createIcons();
}

function toggleRoadmapTask(grade) {
  const saved = JSON.parse(localStorage.getItem('cupula33_tasks') || '{}');
  saved[grade] = !saved[grade];
  localStorage.setItem('cupula33_tasks', JSON.stringify(saved));
  renderRoadmap();
  showToast(saved[grade] ? 'Grau ' + grade + ' concluído!' : 'Grau ' + grade + ' reaberto.');
}

function switchTab(tabId) {
  document.querySelectorAll('.app-tab-section').forEach(sec => sec.classList.add('hidden'));
  document.querySelectorAll('.app-nav-btn').forEach(btn => btn.classList.remove('nav-active'));

  const activeSection = document.getElementById('tab-' + tabId);
  const activeBtn = document.getElementById('navBtn-' + tabId);
  
  if (activeSection) activeSection.classList.remove('hidden');
  if (activeBtn) activeBtn.classList.add('nav-active');

  if (tabId === 'books') renderBooks();
  if (tabId === 'frequencies') renderFrequencies();
  if (tabId === 'roadmap') renderRoadmap();

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

let deferredPrompt = null;
window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault();
  deferredPrompt = e;
  const pwaBtn = document.getElementById('pwaInstallBanner');
  if (pwaBtn) pwaBtn.classList.remove('hidden');
});

function triggerPWAInstall() {
  if (deferredPrompt) {
    deferredPrompt.prompt();
    deferredPrompt.userChoice.then((choiceResult) => {
      if (choiceResult.outcome === 'accepted') {
        showToast("Aplicativo adicionado à tela inicial!");
      }
      deferredPrompt = null;
      const pwaBtn = document.getElementById('pwaInstallBanner');
      if (pwaBtn) pwaBtn.classList.add('hidden');
    });
  } else {
    openModal('pwaInstructionsModal');
  }
}

function openModal(id) {
  const m = document.getElementById(id);
  if (m) {
    m.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  }
}

function closeModal(id) {
  const m = document.getElementById(id);
  if (m) {
    m.classList.add('hidden');
    document.body.style.overflow = '';
  }
}

function showToast(msg) {
  const toast = document.getElementById('appToast');
  const toastText = document.getElementById('appToastText');
  if (toast && toastText) {
    toastText.textContent = msg;
    toast.classList.remove('hidden');
    setTimeout(() => {
      toast.classList.add('hidden');
    }, 3500);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  initUserTier();
  renderBooks();
  renderFrequencies();
  renderRoadmap();

  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./sw.js').catch(() => {});
  }

  const searchInput = document.getElementById('searchInput');
  if (searchInput) {
    searchInput.addEventListener('input', () => renderBooks());
  }
});
