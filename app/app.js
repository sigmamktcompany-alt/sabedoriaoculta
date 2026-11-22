
/**
 * CÚPULA 33 | PLATAFORMA DE MEMBROS & ACERVO HERMÉTICO PWA
 * Estrutura Canônica: 6 Módulos Oficiais (2.500 Obras no Master vs 500 no Básico)
 * Recursos VIP: Marcador de Leitura (localStorage), Audiobook com Frequência 432Hz e Download de Áudio.
 * Estilo inspirado no The King's Code e BrainSync.
 */

// 1. BANCO DE DADOS OFICIAL - 55 OBRAS RESTAURADAS COM PDFS E CAPAS EXCLUSIVAS
const booksData = [
  // ==================== MÓDULO I: HERMETISMO & CABALA (350+ OBRAS) ====================
  {
    id: 1,
    title: "O Caibalion: Estudo da Filosofia Hermética",
    author: "Três Iniciados",
    category: "Hermetismo & Cabala",
    module: "Módulo I",
    rarity: "Essencial",
    pages: 160,
    cover: "assets/books/o-caibalion.jpg",
    tier: "basico",
    desc: "O tratado definitivo dos sete princípios herméticos de Hermes Trismegisto: Mentalismo, Correspondência, Vibração, Polaridade, Ritmo, Causa e Efeito, e Gênero. A chave mestra de toda transmutação mental.",
    pdfUrl: "livros_pdf/01_O_Caibalion_Tres_Iniciados.pdf"
  },
  {
    id: 2,
    title: "A Tábua de Esmeralda",
    author: "Hermes Trismegisto",
    category: "Hermetismo & Cabala",
    module: "Módulo I",
    rarity: "Manuscrito Sagrado",
    pages: 94,
    cover: "assets/books/tabua-de-esmeralda.jpg",
    tier: "basico",
    desc: "O texto críptico primordial da alquimia antiga: 'O que está em cima é como o que está embaixo'. Comentários esotéricos sobre a Grande Obra e a criação da Pedra Filosofal.",
    pdfUrl: "livros_pdf/10_A_Tabua_de_Esmeralda_Hermes_Trismegisto.pdf"
  },
  {
    id: 3,
    title: "Corpus Hermeticum",
    author: "Hermes Trismegisto",
    category: "Hermetismo & Cabala",
    module: "Módulo I",
    rarity: "Manuscrito Sagrado",
    pages: 280,
    cover: "assets/books/corpus-hermeticum.jpg",
    tier: "basico",
    desc: "A coleção dos diálogos de Hermes com seu discípulo Tat e com Poimandres (a Mente Suprema). A gênese sagrada e a iluminação da consciência no Egito helenístico.",
    pdfUrl: "livros_pdf/07_Corpus_Hermeticum_Hermes_Trismegisto.pdf"
  },
  {
    id: 4,
    title: "O Zohar: Livro do Esplendor",
    author: "Shimon bar Yochai",
    category: "Hermetismo & Cabala",
    module: "Módulo I",
    rarity: "Raríssimo",
    pages: 420,
    cover: "assets/books/o-zohar.jpg",
    tier: "master",
    desc: "O coração da Cabala medieval aramaica. Revelações místicas sobre a emanação divina das Dez Sefirot, a estrutura da Criação, o mistério da alma e as leis ocultas do cosmos.",
    pdfUrl: "livros_pdf/17_O_Zohar_Traducao_Completa.pdf"
  },
  {
    id: 5,
    title: "Sefer Yetzirah: O Livro da Formação",
    author: "Patriarca Abraão",
    category: "Hermetismo & Cabala",
    module: "Módulo I",
    rarity: "Antiguidade Extrema",
    pages: 110,
    cover: "assets/books/sefer-yetzirah.jpg",
    tier: "basico",
    desc: "O mais antigo tratado cabalístico conhecido. Desvenda os 32 Caminhos da Sabedoria: as 10 Sefirot do nada e as 22 letras hebraicas com as quais o Universo foi pronunciado.",
    pdfUrl: "livros_pdf/18_Sefer_Yetzirah_Livro_da_Formacao.pdf"
  },
  {
    id: 6,
    title: "A Cabala Mística",
    author: "Dion Fortune",
    category: "Hermetismo & Cabala",
    module: "Módulo I",
    rarity: "Clássico Iniciático",
    pages: 312,
    cover: "assets/books/a-cabala-mistica.jpg",
    tier: "basico",
    desc: "A maior autoridade ocidental sobre a Árvore da Vida. Explicação prática de cada esfera, caminho astral e utilização da Cabala como mapa da psique humana e ascensão espiritual.",
    pdfUrl: "livros_pdf/12_A_Cabala_Mistica_Dion_Fortune.pdf"
  },
  {
    id: 7,
    title: "O Livro de Thoth: O Tarot Sagrado",
    author: "Aleister Crowley",
    category: "Hermetismo & Cabala",
    module: "Módulo I",
    rarity: "Raríssimo",
    pages: 340,
    cover: "assets/books/o-livro-de-thoth.jpg",
    tier: "master",
    desc: "A síntese definitiva entre a Cabala, a astrologia e o Tarot hermético egípcio. Simbolismo das lâminas sagradas e correspondências esotéricas decodificadas.",
    pdfUrl: "livros_pdf/13_O_Livro_de_Thoth_Tarot_Crowley.pdf"
  },
  {
    id: 8,
    title: "Tratado Elementar de Ciência Oculta",
    author: "Papus (Gérard Encausse)",
    category: "Hermetismo & Cabala",
    module: "Módulo I",
    rarity: "Clássico Martinista",
    pages: 290,
    cover: "assets/books/tratado-elementar-papus.jpg",
    tier: "basico",
    desc: "Fundamentos da Tradição Hermética, analogia universal, micro e macrocosmo, e o método de dedução cabalístico aplicado aos fenômenos da natureza.",
    pdfUrl: "livros_pdf/42_Tratado_Elementar_de_Ciencia_Oculta_Papus.pdf"
  },
  {
    id: 9,
    title: "O Simbolismo da Cruz",
    author: "René Guénon",
    category: "Hermetismo & Cabala",
    module: "Módulo I",
    rarity: "Filosofia Tradicional",
    pages: 215,
    cover: "assets/books/o-simbolismo-da-cruz.jpg",
    tier: "master",
    desc: "A metafísica do símbolo da cruz nas tradições orientais e ocidentais. Estados múltiplos do Ser, o eixo vertical da consciência e a reintegração espiritual.",
    pdfUrl: "livros_pdf/47_O_Simbolismo_da_Cruz_Rene_Guenon.pdf"
  },
  {
    id: 10,
    title: "O Livro Egípcio dos Mortos",
    author: "Papiro de Ani (Trad. E. A. Wallis Budge)",
    category: "Hermetismo & Cabala",
    module: "Módulo I",
    rarity: "Antiguidade Ancestral",
    pages: 380,
    cover: "assets/books/o-livro-egipcio-dos-mortos.jpg",
    tier: "master",
    desc: "As fórmulas rituais para a passagem no submundo Duat, a pesagem do coração contra a Pena de Maat e as palavras de poder para transcender os guardiões astrais.",
    pdfUrl: "livros_pdf/O_Livro_Egipcio_dos_Mortos_Papiro_Ani.pdf"
  },
  {
    id: 11,
    title: "Os Ensinamentos Secretos de Todas as Épocas",
    author: "Manly Palmer Hall",
    category: "Hermetismo & Cabala",
    module: "Módulo I",
    rarity: "Enciclopédia Oculta",
    pages: 720,
    cover: "assets/books/ensinamentos-secretos-todas-as-epocas.jpg",
    tier: "master",
    desc: "A mais monumental enciclopédia esotérica do mundo ocidental. Mistérios órficos, pitagóricos, rosacrucianos, cabala e sociedades secretas decifradas.",
    pdfUrl: "livros_pdf/Os_Ensinamentos_Secretos_de_Todas_as_Epocas_Manly_Hall.pdf"
  },
  {
    id: 12,
    title: "Curso de Filosofia Oculta",
    author: "Éliphas Lévi",
    category: "Hermetismo & Cabala",
    module: "Módulo I",
    rarity: "Doutrina Superior",
    pages: 350,
    cover: "assets/books/curso-filosofia-oculta.jpg",
    tier: "basico",
    desc: "A ciência dos magos, o mistério dos três mundos, a luz astral como agente magnético universal e as leis secretas da vontade pura.",
    pdfUrl: "livros_pdf/45_Curso_de_Filosofia_Oculta_Eliphas_Levi.pdf"
  },

  // ==================== MÓDULO II: GRIMÓRIOS & ALTA MAGIA (420+ OBRAS) ====================
  {
    id: 13,
    title: "A Clavícula de Salomão: Goetia / Lemegeton",
    author: "Rei Salomão",
    category: "Grimórios & Alta Magia",
    module: "Módulo II",
    rarity: "Grimório Proibido",
    pages: 210,
    cover: "assets/books/clavicula-de-salomao.jpg",
    tier: "master",
    desc: "A evocação cerimonial dos 72 espíritos, com selos, pentáculos de proteção, círculos consagrados e conjurações imperativas segundo a tradição salomônica.",
    pdfUrl: "livros_pdf/14_Lemegeton_Clavicula_de_Salomao_Goetia.pdf"
  },
  {
    id: 14,
    title: "A Clavícula do Rei Salomão: Tratado Completo",
    author: "Rei Salomão",
    category: "Grimórios & Alta Magia",
    module: "Módulo II",
    rarity: "Manuscrito Raro",
    pages: 185,
    cover: "assets/books/clavicula-do-rei-salomao.jpg",
    tier: "basico",
    desc: "Os pentáculos sagrados dos sete planetas, consagração de instrumentos mágicos, vestimentas, horas planetárias e orações para controle das forças invisíveis.",
    pdfUrl: "livros_pdf/A_Clavicula_do_Rei_Salomao_Tratado_Completo.pdf"
  },
  {
    id: 15,
    title: "Dogma e Ritual da Alta Magia",
    author: "Éliphas Lévi",
    category: "Grimórios & Alta Magia",
    module: "Módulo II",
    rarity: "Obra-Prima Teúrgica",
    pages: 480,
    cover: "assets/books/dogma-e-ritual.jpg",
    tier: "basico",
    desc: "O tratado canônico do ocultismo moderno. O enigma da Esfinge, a Luz Astral, o tetragrama sagrado, o poder do verbo e o ritual de transmutação psíquica.",
    pdfUrl: "livros_pdf/03_Dogma_e_Ritual_da_Alta_Magia_Eliphas_Levi.pdf"
  },
  {
    id: 16,
    title: "O Grande Grimório do Papa Honório",
    author: "Papa Honório III",
    category: "Grimórios & Alta Magia",
    module: "Módulo II",
    rarity: "Grimório Secreto",
    pages: 150,
    cover: "assets/books/grimorio-papa-honorio.jpg",
    tier: "master",
    desc: "O polêmico grimório vaticano atribuído a Honório III. Conjurações e rituais que mesclam a liturgia católica romana com a magia evocativa medieval.",
    pdfUrl: "livros_pdf/22_O_Grande_Grimorio_do_Papa_Honorio.pdf"
  },
  {
    id: 17,
    title: "O Livro de São Cipriano da Capa Preta",
    author: "São Cipriano de Antioquia",
    category: "Grimórios & Alta Magia",
    module: "Módulo II",
    rarity: "Folclore Oculto Raro",
    pages: 310,
    cover: "assets/books/sao-cipriano-capa-preta.jpg",
    tier: "basico",
    desc: "A mais famosa compilação de feitiçaria ibérica, esconjuros, tesouros enterrados, talismãs e os segredos do bruxo converso de Antioquia.",
    pdfUrl: "livros_pdf/06_Livro_de_Sao_Cipriano_Capa_Preta.pdf"
  },
  {
    id: 18,
    title: "O Livro Negro de São Cipriano",
    author: "N. A. Lopes",
    category: "Grimórios & Alta Magia",
    module: "Módulo II",
    rarity: "Raríssimo",
    pages: 240,
    cover: "assets/books/livro-negro-sao-cipriano.jpg",
    tier: "master",
    desc: "Tratado de magia natural e simpática, preces cabalísticas, sortilégios e o oráculo das feiticeiras com ilustrações históricas.",
    pdfUrl: "livros_pdf/36_O_Livro_Negro_de_Sao_Cipriano_Lopes.pdf"
  },
  {
    id: 19,
    title: "A Magia Sagrada de Abramelin, o Mago",
    author: "Abraão de Worms",
    category: "Grimórios & Alta Magia",
    module: "Módulo II",
    rarity: "Alta Teurgia",
    pages: 360,
    cover: "assets/books/magia-sagrada-abramelin.jpg",
    tier: "master",
    desc: "O sistema místico mais rigoroso do mundo ocidental para obtenção do Conhecimento e Conversação com o Sagrado Anjo Guardião e controle dos espíritos.",
    pdfUrl: "livros_pdf/A_Magia_Sagrada_de_Abramelin_o_Mago.pdf"
  },
  {
    id: 20,
    title: "Liber Null & Psiconauta: Magia do Caos",
    author: "Peter J. Carroll",
    category: "Grimórios & Alta Magia",
    module: "Módulo II",
    rarity: "Caos Moderno",
    pages: 230,
    cover: "assets/books/liber-null-psiconauta.jpg",
    tier: "master",
    desc: "A bíblia fundadora da Magia do Caos: estado de gnose, sigilização de Austin Osman Spare, metamagia e o desmantelamento de dogmas arcaicos.",
    pdfUrl: "livros_pdf/26_Liber_Null_e_Psiconauta_Peter_Carroll.pdf"
  },
  {
    id: 21,
    title: "Malleus Maleficarum: O Martelo das Feiticeiras",
    author: "Heinrich Kramer & James Sprenger (1486)",
    category: "Grimórios & Alta Magia",
    module: "Módulo II",
    rarity: "Documento Inquisitorial",
    pages: 560,
    cover: "assets/books/malleus-maleficarum.jpg",
    tier: "basico",
    desc: "O infame manual inquisitorial que ditou a perseguição e julgamento de práticas ocultas durante o Santo Ofício. Documento indispensável para historiadores.",
    pdfUrl: "livros_pdf/15_Malleus_Maleficarum_Martelo_das_Feiticeiras.pdf"
  },
  {
    id: 22,
    title: "Necronomicon: Al Azif",
    author: "Abdul Alhazred",
    category: "Grimórios & Alta Magia",
    module: "Módulo II",
    rarity: "Tenebroso",
    pages: 195,
    cover: "assets/books/necronomicon.jpg",
    tier: "master",
    desc: "A mítica obra sobre os Antigos deuses estelares, os portais do abismo cósmico, rituais sumérios arcaicos e a invocação dos deuses exteriores.",
    pdfUrl: "livros_pdf/21_Necronomicon_Al_Azif_Abdul_Alhazred.pdf"
  },
  {
    id: 23,
    title: "As Nove Portas do Reino das Sombras",
    author: "Aristide Torchia (1666)",
    category: "Grimórios & Alta Magia",
    module: "Módulo II",
    rarity: "Inestimável",
    pages: 140,
    cover: "assets/books/as-nove-portas.jpg",
    tier: "master",
    desc: "As nove gravuras esotéricas que guardam a chave para a abertura dos portais dimensionais. Fac-símile dos selos lendários queimados pela Inquisição.",
    pdfUrl: "livros_pdf/11_As_Nove_Portas_Do_Reino_Das_Sombras.pdf"
  },
  {
    id: 24,
    title: "Tratado de Magia Oculta",
    author: "Williams Scott",
    category: "Grimórios & Alta Magia",
    module: "Módulo II",
    rarity: "Raro",
    pages: 275,
    cover: "assets/books/tratado-de-magia-oculta.jpg",
    tier: "basico",
    desc: "Instruções práticas para manipulação da energia etérica, defesas psíquicas, pantáculos de prosperidade e evocação de egrégoras benéficas.",
    pdfUrl: "livros_pdf/35_Tratado_de_Magia_Oculta_Williams_Scott.pdf"
  },
  {
    id: 25,
    title: "História da Magia",
    author: "Éliphas Lévi",
    category: "Grimórios & Alta Magia",
    module: "Módulo II",
    rarity: "Clássico Ocultista",
    pages: 410,
    cover: "assets/books/historia-da-magia.jpg",
    tier: "basico",
    desc: "Panorama completo da magia desde os caldeus, persas e sacerdotes egípcios até a Idade Média, o Iluminismo e as fraternidades contemporâneas.",
    pdfUrl: "livros_pdf/46_Historia_da_Magia_Eliphas_Levi.pdf"
  },
  {
    id: 26,
    title: "Liber AL vel Legis: O Livro da Lei",
    author: "Aleister Crowley (Aiwass, 1904)",
    category: "Grimórios & Alta Magia",
    module: "Módulo II",
    rarity: "Canônico Thelêmico",
    pages: 120,
    cover: "assets/books/livro-da-lei.jpg",
    tier: "master",
    desc: "O texto primordial da Thelema recebido no Cairo: 'Faze o que tu queres há de ser tudo da Lei'. A inauguração do Eon de Hórus e as novas diretrizes da vontade humana.",
    pdfUrl: "livros_pdf/08_O_Livro_da_Lei_Liber_AL_vel_Legis_Crowley.pdf"
  },

  // ==================== MÓDULO III: GNOSTICISMO & APÓCRIFOS (380+ OBRAS) ====================
  {
    id: 27,
    title: "O Livro de Enoque: Texto Etíope Completo",
    author: "Henoch (Trad. R. H. Charles)",
    category: "Gnosticismo & Apócrifos",
    module: "Módulo III",
    rarity: "Apócrifo Primordial",
    pages: 245,
    cover: "assets/books/livro-de-enoque.jpg",
    tier: "basico",
    desc: "A queda dos 200 anjos sentinelas (Vigilantes), a união com as filhas dos homens, o nascimento dos gigantes Nefilim e os segredos astronômicos do céu.",
    pdfUrl: "livros_pdf/01_O_Livro_de_Enoque_Completo.pdf"
  },
  {
    id: 28,
    title: "O Livro dos Jubileus: Pequeno Gênesis",
    author: "Tradição Essênia de Qumran",
    category: "Gnosticismo & Apócrifos",
    module: "Módulo III",
    rarity: "Texto Banido",
    pages: 290,
    cover: "assets/books/livro-dos-jubileus.jpg",
    tier: "master",
    desc: "A história da Criação e dos patriarcas contada pelos Anjos da Presença a Moisés no Monte Sinai. Cronologia sagrada dos jubileus de 49 anos.",
    pdfUrl: "livros_pdf/02_O_Livro_dos_Jubileus_Integral.pdf"
  },
  {
    id: 29,
    title: "O Livro dos Gigantes: Fragmentos de Qumran",
    author: "Manuscritos do Mar Morto",
    category: "Gnosticismo & Apócrifos",
    module: "Módulo III",
    rarity: "Achado Arqueológico",
    pages: 140,
    cover: "assets/books/livro-dos-gigantes.jpg",
    tier: "master",
    desc: "Os sonhos proféticos dos gigantes Ohya e Hahya antes do Dilúvio universal e o confronto com Enoque. Fragmentos aramaicos decifrados da caverna 4 de Qumran.",
    pdfUrl: "livros_pdf/03_O_Livro_dos_Gigantes_Qumran.pdf"
  },
  {
    id: 30,
    title: "Kebra Nagast: A Glória dos Reis",
    author: "Tradição Copta Etíope",
    category: "Gnosticismo & Apócrifos",
    module: "Módulo III",
    rarity: "Épico Sagrado",
    pages: 320,
    cover: "assets/books/kebra-nagast.jpg",
    tier: "master",
    desc: "A crônica sagrada do encontro do Rei Salomão com a Rainha de Sabá, a linhagem de Menelik I e a transferência física da Arca da Aliança para a Etiópia.",
    pdfUrl: "livros_pdf/04_Kebra_Nagast_A_Gloria_dos_Reis.pdf"
  },
  {
    id: 31,
    title: "O Cânone Primitivo: 88 Livros Banidos",
    author: "Acervo dos Concílios Antigos",
    category: "Gnosticismo & Apócrifos",
    module: "Módulo III",
    rarity: "Manuscrito Desclassificado",
    pages: 410,
    cover: "assets/books/canone-primitivo.jpg",
    tier: "basico",
    desc: "Guia completo das 88 obras excluídas do cânone bíblico ocidental pelos Concílios de Nicéia e Laodiceia, incluindo os Evangelhos da Infância e Atos de Paulo.",
    pdfUrl: "livros_pdf/05_O_Canone_Primitivo_88_Livros_Guia_Completo.pdf"
  },
  {
    id: 32,
    title: "Manuscritos de Nag Hammadi: Biblioteca Gnóstica",
    author: "Scribas Gnósticos do Egito Superior (350 d.C.)",
    category: "Gnosticismo & Apócrifos",
    module: "Módulo III",
    rarity: "Inestimável",
    pages: 580,
    cover: "assets/books/manuscritos-nag-hammadi.jpg",
    tier: "master",
    desc: "O Evangelho de Tomé, o Evangelho de Filipe, o Livro Secreto de João e o Tratado Tripartido. A doutrina gnóstica do Demiurgo Yaldabaoth e a centelha divina Pneuma.",
    pdfUrl: "https://archive.org/download/nag-hammadi-library-complete/nag_hammadi_library.pdf"
  },
  {
    id: 33,
    title: "Codex Gigas: A Bíblia do Diabo",
    author: "Herman, o Recluso (Século XIII)",
    category: "Gnosticismo & Apócrifos",
    module: "Módulo III",
    rarity: "Manuscrito Mais Misterioso do Mundo",
    pages: 624,
    cover: "assets/books/codex-gigas.jpg",
    tier: "master",
    desc: "O maior manuscrito medieval sobrevivente. Contém a Bíblia Vulgata completa, tratados médicos, encantos mágicos e o lendário retrato de página inteira de Lúcifer.",
    pdfUrl: "https://archive.org/download/codex-gigas-facsimile/codex-gigas.pdf"
  },
  {
    id: 34,
    title: "Codex Nasaraeus: O Livro Secreto dos Mandeus",
    author: "Tradição Mandeísta Gnóstica",
    category: "Gnosticismo & Apócrifos",
    module: "Módulo III",
    rarity: "Raríssimo",
    pages: 260,
    cover: "assets/books/codex-nasaraeus.jpg",
    tier: "master",
    desc: "O texto sagrado dos discípulos diretos de João Batista na Mesopotâmia. Cosmogonia dualista da Luz contra as Trevas e as orações de purificação astral.",
    pdfUrl: "livros_pdf/25_Codex_Nasaraeus_Texto_Gnostico.pdf"
  },
  {
    id: 35,
    title: "O Livro de Dzyan: Estâncias Ocultas",
    author: "Helena P. Blavatsky",
    category: "Gnosticismo & Apócrifos",
    module: "Módulo III",
    rarity: "Doutrina Secreta",
    pages: 180,
    cover: "assets/books/livro-de-dzyan.jpg",
    tier: "basico",
    desc: "O mais antigo manuscrito tibetano, gravado em folhas de palma. As estâncias cosmogônicas da Doutrina Secreta sobre as Sete Rondas e a evolução dos Mundos.",
    pdfUrl: "livros_pdf/02_O_Livro_de_Dzyan_Blavatsky.pdf"
  },
  {
    id: 36,
    title: "Mapa dos 200 Anjos Vigilantes e Linhagens Nefilim",
    author: "Acervo Genealógico Enoquiano",
    category: "Gnosticismo & Apócrifos",
    module: "Módulo III",
    rarity: "Bônus Histórico",
    pages: 45,
    cover: "assets/books/mapa-vigilantes.jpg",
    tier: "basico",
    desc: "Tabela detalhada com os nomes aramaicos dos líderes celestes (Semjaza, Azazel, Baraqiel), seus conhecimentos proibidos transmitidos e árvore genealógica ancestral.",
    pdfUrl: "livros_pdf/06_BONUS_Mapa_dos_200_Vigilantes_e_Linhagens.pdf"
  },
  {
    id: 37,
    title: "Guia de Leitura Cruzada do Novo Testamento",
    author: "Escritório de Pesquisa Bíblica",
    category: "Gnosticismo & Apócrifos",
    module: "Módulo III",
    rarity: "Bônus Hermenêutico",
    pages: 60,
    cover: "assets/books/guia-leitura-cruzada.jpg",
    tier: "basico",
    desc: "Comparações versículo a versículo entre os evangelhos canônicos e as revelações de Nag Hammadi e Qumran.",
    pdfUrl: "livros_pdf/07_BONUS_Guia_de_Leitura_Cruzada_Novo_Testamento.pdf"
  },

  // ==================== MÓDULO IV: ALQUIMIA & TRANSMUTAÇÃO (310+ OBRAS) ====================
  {
    id: 38,
    title: "Splendor Solis: O Esplendor do Sol",
    author: "Salomon Trismosin (1582)",
    category: "Alquimia & Transmutação",
    module: "Módulo IV",
    rarity: "Fac-símile Iluminado",
    pages: 160,
    cover: "assets/books/splendor-solis.jpg",
    tier: "master",
    desc: "O mais belo manuscrito alquímico da história com 22 iluminuras completas em alta resolução. As fases da Grande Obra: Nigredo, Albedo, Citrinitas e Rubedo.",
    pdfUrl: "livros_pdf/16_Splendor_Solis_Salomon_Trismosin.pdf"
  },
  {
    id: 39,
    title: "Atalanta Fugiens: As 50 Emblemas Alquímicas",
    author: "Michael Maier (1617)",
    category: "Alquimia & Transmutação",
    module: "Módulo IV",
    rarity: "Clássico Hermético",
    pages: 215,
    cover: "assets/books/atalanta-fugiens.jpg",
    tier: "master",
    desc: "As cinquenta gravuras místicas com enigmas poéticos e comentários sobre a transmutação dos metais e a ressurreição do Rei Filosófico.",
    pdfUrl: "livros_pdf/24_Atalanta_Fugiens_Michael_Maier.pdf"
  },
  {
    id: 40,
    title: "A Tradição Hermética: Alquimia Espiritual",
    author: "Julius Evola",
    category: "Alquimia & Transmutação",
    module: "Módulo IV",
    rarity: "Doutrina Esotérica",
    pages: 290,
    cover: "assets/books/a-tradicao-hermetica-evola.jpg",
    tier: "basico",
    desc: "A interpretação operativa da Alquimia não como química primitiva, mas como a Ciência Régia de transfiguração da consciência e conquista da imortalidade.",
    pdfUrl: "livros_pdf/27_A_Tradicao_Hermetica_Julius_Evola.pdf"
  },
  {
    id: 41,
    title: "Alquimia: Significado e Imagem Sagrada",
    author: "Titus Burckhardt",
    category: "Alquimia & Transmutação",
    module: "Módulo IV",
    rarity: "Estudo Tradicional",
    pages: 260,
    cover: "assets/books/alquimia-significado-e-imagem.jpg",
    tier: "basico",
    desc: "A cosmologia do Enxofre, Mercúrio e Sal. O simbolismo da matéria prima e a reintegração do homem primordial à harmonia do cosmo.",
    pdfUrl: "livros_pdf/23_Alquimia_Significado_e_Imagem_Titus_Burckhardt.pdf"
  },
  {
    id: 42,
    title: "O Despertar dos Mágicos: Realismo Fantástico",
    author: "Louis Pauwels & Jacques Bergier",
    category: "Alquimia & Transmutação",
    module: "Módulo IV",
    rarity: "Best-seller Ocultista",
    pages: 520,
    cover: "assets/books/o-despertar-dos-magicos.jpg",
    tier: "basico",
    desc: "A investigação pioneira sobre alquimistas atômicos, civilizações desaparecidas, a física de Fulcanelli e as sociedades secretas que moldaram o mundo contemporâneo.",
    pdfUrl: "livros_pdf/34_O_Despertar_Dos_Magos_Pauwels_Bergier.pdf"
  },

  // ==================== MÓDULO V: SOCIEDADES SECRETAS (490+ OBRAS) ====================
  {
    id: 43,
    title: "Moral e Dogma do Rito Escocês",
    author: "Albert Pike (33°)",
    category: "Sociedades Secretas",
    module: "Módulo V",
    rarity: "Texto Supremo Maçônico",
    pages: 860,
    cover: "assets/books/moral-e-dogma.jpg",
    tier: "master",
    desc: "A instrução filosófica oficial para os 33 Graus do Rito Escocês Antigo e Aceito. As conexões profundas da Maçonaria com a Cabala, Zoroastrismo e Hermetismo.",
    pdfUrl: "livros_pdf/05_Moral_e_Dogma_Albert_Pike.pdf"
  },
  {
    id: 44,
    title: "Os Iluminados da Baviera: Estatutos Oficiais",
    author: "Adam Weishaupt (1776)",
    category: "Sociedades Secretas",
    module: "Módulo V",
    rarity: "Documento Desclassificado",
    pages: 180,
    cover: "assets/books/os-iluminados-da-baviera.jpg",
    tier: "master",
    desc: "Os regulamentos originais, graus do Areópago, códigos cifrados e estratégia de infiltração da Ordem dos Illuminati fundada em 1º de Maio de 1776.",
    pdfUrl: "livros_pdf/19_Os_Iluminados_da_Baviera_Adam_Weishaupt.pdf"
  },
  {
    id: 45,
    title: "Arquivos da Sociedade Thule e o Ocultismo Vril",
    author: "Arquivos Históricos Germânicos",
    category: "Sociedades Secretas",
    module: "Módulo V",
    rarity: "Dossiê Desclassificado",
    pages: 230,
    cover: "assets/books/sociedade-thule.jpg",
    tier: "master",
    desc: "O misticismo da Sociedade Thule, as expedições secretas ao Tibete, a doutrina do Gelo e do Fogo de Hörbiger e a tecnologia do Sol Negro.",
    pdfUrl: "livros_pdf/29_Sociedade_Thule_e_Ocultismo.pdf"
  },
  {
    id: 46,
    title: "A Ação Secreta da Maçonaria e Rituais Históricos",
    author: "Grandes Orientes Internacionais",
    category: "Sociedades Secretas",
    module: "Módulo V",
    rarity: "Rito Revelado",
    pages: 270,
    cover: "assets/books/acao-secreta-da-maconaria.jpg",
    tier: "basico",
    desc: "Os juramentos, toques, palavras de passe e a marcha do Aprendiz, Companheiro e Mestre decifrados em manuscritos históricos de lojas secretas.",
    pdfUrl: "livros_pdf/32_A_Acao_Secreta_da_Maconaria.pdf"
  },
  {
    id: 47,
    title: "Sociedades Secretas e Seu Poder no Século XX",
    author: "Jan van Helsing",
    category: "Sociedades Secretas",
    module: "Módulo V",
    rarity: "Obra Banida em Diversos Países",
    pages: 440,
    cover: "assets/books/sociedades-secretas-van-helsing.jpg",
    tier: "master",
    desc: "A rede internacional entre banqueiros, sociedades herméticas, controle monetário e o planejamento para uma Nova Ordem Mundial.",
    pdfUrl: "livros_pdf/20_Sociedades_Secretas_Jan_van_Helsing.pdf"
  },
  {
    id: 48,
    title: "A Verdadeira História do Clube Bilderberg",
    author: "Daniel Estulin",
    category: "Sociedades Secretas",
    module: "Módulo V",
    rarity: "Investigação Rara",
    pages: 350,
    cover: "assets/books/clube-bilderberg.jpg",
    tier: "basico",
    desc: "Os encontros anuais a portas fechadas dos 130 indivíduos mais poderosos do planeta. Atas vazadas e a manipulação dos mercados e governos globais.",
    pdfUrl: "livros_pdf/28_A_Verdadeira_Historia_do_Clube_Bilderberg_Estulin.pdf"
  },

  // ==================== MÓDULO VI: MENTE & PROJEÇÃO ASTRAL (550+ OBRAS) ====================
  {
    id: 49,
    title: "Sonhos Lúcidos: Controle da Consciência",
    author: "Dr. Stephen LaBerge (Stanford)",
    category: "Mente & Projeção Astral",
    module: "Módulo VI",
    rarity: "Ciência da Consciência",
    pages: 320,
    cover: "assets/books/sonhos-lucidos.jpg",
    tier: "basico",
    desc: "O método científico pioneiro do Instituto Lucidity para despertar dentro do sonho, técnicas de indução consciente (MILD e WILD) e transição para o plano astral.",
    pdfUrl: "livros_pdf/31_Sonhos_Lucidos_Stephen_LaBerge.pdf"
  },
  {
    id: 50,
    title: "Os Arquétipos e o Inconsciente Coletivo",
    author: "Carl Gustav Jung",
    category: "Mente & Projeção Astral",
    module: "Módulo VI",
    rarity: "Psicologia Hermética",
    pages: 510,
    cover: "assets/books/arquetipos-inconsciente-coletivo.jpg",
    tier: "basico",
    desc: "A estrutura das imagens primordiais da alma humana: o Sombra, Anima e Animus, o Velho Sábio e o processo de individuação como Grande Obra interior.",
    pdfUrl: "livros_pdf/37_Os_Arquetipos_e_o_Inconsciente_Coletivo_Jung.pdf"
  },
  {
    id: 51,
    title: "O Livro dos Espíritos: Teoria do Plano Astral",
    author: "Allan Kardec",
    category: "Mente & Projeção Astral",
    module: "Módulo VI",
    rarity: "Fundação da Doutrina",
    pages: 460,
    cover: "assets/books/livro-dos-espiritos.jpg",
    tier: "basico",
    desc: "As 1019 perguntas e respostas fundamentais sobre os mundos espirituais, desprendimento da alma no sono, reencarnação e as leis de afinidade psíquica.",
    pdfUrl: "livros_pdf/38_O_Livro_dos_Espiritos_Allan_Kardec.pdf"
  },
  {
    id: 52,
    title: "O Livro dos Médiuns: Desdobramento e Fenômenos",
    author: "Allan Kardec",
    category: "Mente & Projeção Astral",
    module: "Módulo VI",
    rarity: "Guia Prático",
    pages: 480,
    cover: "assets/books/livro-dos-mediums.jpg",
    tier: "basico",
    desc: "Manual de autodefesa energética, identificação de obsessores, desenvolvimento de clarividência, telepatia e técnicas de incorporação segura.",
    pdfUrl: "livros_pdf/39_O_Livro_dos_Mediuns_Allan_Kardec.pdf"
  },
  {
    id: 53,
    title: "O Céu e o Inferno: Planos Astrais e Consciência",
    author: "Allan Kardec",
    category: "Mente & Projeção Astral",
    module: "Módulo VI",
    rarity: "Filosofia Astral",
    pages: 410,
    cover: "assets/books/o-ceu-e-o-inferno.jpg",
    tier: "basico",
    desc: "A justiça divina examinada sob as leis naturais da afinidade vibratória. Relatos de almas em diferentes faixas de frequência após o desenlace físico.",
    pdfUrl: "livros_pdf/40_O_Ceu_e_o_Inferno_Allan_Kardec.pdf"
  },
  {
    id: 54,
    title: "Passaporte para Magonia: A Conexão Secreta",
    author: "Jacques Vallée",
    category: "Mente & Projeção Astral",
    module: "Módulo VI",
    rarity: "Fenômenos Dimensionais",
    pages: 360,
    cover: "assets/books/passaporte-para-magonia.jpg",
    tier: "master",
    desc: "A análise científica e comparada entre os fenômenos de abdução contemporâneos, as fadas da Idade Média e as aparições místicas dos textos herméticos.",
    pdfUrl: "livros_pdf/30_Passaporte_para_Magonia_Jacques_Vallee.pdf"
  },
  {
    id: 55,
    title: "O Evangelho Segundo o Espiritismo",
    author: "Allan Kardec",
    category: "Mente & Projeção Astral",
    module: "Módulo VI",
    rarity: "Código Moral Cósmico",
    pages: 420,
    cover: "assets/books/o-evangelho-kardec.jpg",
    tier: "basico",
    desc: "A moral crística explicada sob o ponto de vista da física quântica e do desdobramento da consciência espiritual no Universo.",
    pdfUrl: "livros_pdf/43_O_Evangelho_Segundo_o_Espiritismo_Kardec.pdf"
  }
];

// 2. LOTES & COLEÇÕES COMPLETAS (DRIVE MASTER 2.500 OBRAS)
const collectionsData = [
  {
    id: "lote-master-total",
    title: "Acervo Master Supremo (2.500 Obras Completas)",
    subtitle: "Todos os 6 Módulos Unificados • Pastas Oficiais",
    module: "Todos os Módulos",
    count: "2.500 Obras",
    size: "48.5 GB",
    tier: "master",
    driveUrl: "https://drive.google.com/",
    icon: "crown",
    desc: "O repositório completo e definitivo da Cúpula 33. Contém todas as 2.500 obras dos 6 módulos em PDF de alta resolução, fac-símiles originais e áudios binaurais."
  },
  {
    id: "lote-mod-1",
    title: "Lote Módulo I: Hermetismo & Cabala",
    subtitle: "350+ Tratados Herméticos, Zohar e Árvore da Vida",
    module: "Módulo I",
    count: "350+ Obras",
    size: "6.8 GB",
    tier: "basico",
    driveUrl: "https://drive.google.com/",
    icon: "book-open",
    desc: "A coleção primordial dos ensinamentos herméticos e cabalísticos completos. Caibalion, Tábua de Esmeralda, Sefer Yetzirah e os clássicos da Golden Dawn."
  },
  {
    id: "lote-mod-2",
    title: "Lote Módulo II: Grimórios & Alta Magia",
    subtitle: "420+ Selos, Pentáculos e Teurgia Cerimonial",
    module: "Módulo II",
    count: "420+ Obras",
    size: "8.4 GB",
    tier: "master",
    driveUrl: "https://drive.google.com/",
    icon: "shield",
    desc: "Os mais raros e proibidos livros de invocação, Goetia salomônica, grimórios pontifícios, manuscritos de feitiçaria antiga e magia contemporânea do caos."
  },
  {
    id: "lote-mod-3",
    title: "Lote Módulo III: Gnosticismo & Textos Banidos",
    subtitle: "380+ Apócrifos, Qumran e Arquivos Secretos",
    module: "Módulo III",
    count: "380+ Obras",
    size: "7.9 GB",
    tier: "master",
    driveUrl: "https://drive.google.com/",
    icon: "scroll",
    desc: "Tratados gnósticos desclassificados, biblioteca completa de Nag Hammadi, pergaminhos do Mar Morto e manuscritos excluídos dos concílios cristãos primitivos."
  },
  {
    id: "lote-mod-4",
    title: "Lote Módulo IV: Alquimia & Transmutação",
    subtitle: "310+ Obras com Iluminuras Fac-símile em Cores",
    module: "Módulo IV",
    count: "310+ Obras",
    size: "9.2 GB",
    tier: "master",
    driveUrl: "https://drive.google.com/",
    icon: "flame",
    desc: "Obras ilustradas de espagiria, a busca da Pedra Filosofal, manuscritos renascentistas de Michael Maier, Basilius Valentinus e Paracelso em altíssima resolução."
  },
  {
    id: "lote-mod-5",
    title: "Lote Módulo V: Sociedades Secretas & Desclassificados",
    subtitle: "490+ Dossiês Maçônicos, Illuminati e Thule",
    module: "Módulo V",
    count: "490+ Obras",
    size: "8.1 GB",
    tier: "master",
    driveUrl: "https://drive.google.com/",
    icon: "eye",
    desc: "Manuscritos com rituais dos 33 graus, atas confidenciais dos Illuminati da Baviera, documentos desclassificados de agências de inteligência e fraternidades veladas."
  },
  {
    id: "lote-mod-6",
    title: "Lote Módulo VI: Mente, Projeção & Audiobooks",
    subtitle: "550+ Manuscritos de Desdobramento + Frequências",
    module: "Módulo VI",
    count: "550+ Obras",
    size: "8.1 GB",
    tier: "master",
    driveUrl: "https://drive.google.com/",
    icon: "radio",
    desc: "Manuais de sonhos lúcidos, viagem astral, autodefesa psíquica e todos os pacotes de áudio com as frequências sagradas de Solfeggio embutidas."
  }
];

// 3. SANTUÁRIO DE FREQUÊNCIAS DE SOLFEGGIO (MÓDULO VI BÔNUS)
const frequenciesData = [
  {
    hz: 432,
    name: "432 Hz • Ressonância Áurea Cósmica",
    benefit: "Afinação natural do Universo (proporção áurea Phi), cura celular profunda e alinhamento do DNA.",
    chakra: "Cardíaco & Coronário",
    color: "#d4af37",
    tier: "basico"
  },
  {
    hz: 528,
    name: "528 Hz • Frequência dos Milagres & Reparo do DNA",
    benefit: "A frequência central de Solfeggio. Transforma a consciência, repara fitas genéticas e atrai milagres.",
    chakra: "Plexo Solar (Manipura)",
    color: "#10b981",
    tier: "master"
  },
  {
    hz: 396,
    name: "396 Hz • Liberação de Culpa, Medo & Bloqueios",
    benefit: "Dissolve nós emocionais antigos no chakra raiz e ancora a mente em estado de absoluta coragem.",
    chakra: "Básico (Muladhara)",
    color: "#ef4444",
    tier: "basico"
  },
  {
    hz: 417,
    name: "417 Hz • Quebra de Padrões Negativos & Mudança",
    benefit: "Limpa experiências traumáticas do passado e facilita novas decisões sem resistência inconsciente.",
    chakra: "Sacral (Svadhisthana)",
    color: "#f97316",
    tier: "master"
  },
  {
    hz: 639,
    name: "639 Hz • Conexão & Harmonização dos Relacionamentos",
    benefit: "Promove empatia, telepatia afetiva e conexão profunda com companheiros de caminho espiritual.",
    chakra: "Cardíaco (Anahata)",
    color: "#06b6d4",
    tier: "master"
  },
  {
    hz: 741,
    name: "741 Hz • Despertar da Intuição & Limpeza Toxinas",
    benefit: "Estimula a expressão autêntica, desintoxica células cerebrais e ativa a voz interior dos mestres.",
    chakra: "Laríngeo (Vishuddha)",
    color: "#3b82f6",
    tier: "master"
  },
  {
    hz: 852,
    name: "852 Hz • Despertar do Terceiro Olho (Ajna)",
    benefit: "Restaura a ordem espiritual, dissolve a névoa mental e desenvolve clarividência e visão astral.",
    chakra: "Frontal (Ajna)",
    color: "#8b5cf6",
    tier: "master"
  },
  {
    hz: 963,
    name: "963 Hz • Conexão com a Centelha Divina Primordial",
    benefit: "Ativação direta da glândula pineal, estado de Samadhi, reintegração com a Fonte Cósmica Suprema.",
    chakra: "Coronário (Sahasrara)",
    color: "#ec4899",
    tier: "master"
  }
];

// 4. ROADMAP INICIÁTICO - OS 12 GRAUS DA CÚPULA 33
const roadmapData = [
  { grade: 1, title: "Grau I: O Despertar do Buscador", desc: "Leitura integral de O Caibalion. Assimilação prática dos 7 Princípios Herméticos na rotina diária.", module: "Módulo I" },
  { grade: 2, title: "Grau II: O Selo de Hermes", desc: "Estudo das 13 sentenças da Tábua de Esmeralda e dos 3 mundos herméticos.", module: "Módulo I" },
  { grade: 3, title: "Grau III: Os 32 Caminhos da Sabedoria", desc: "Decodificação das 10 Sefirot e 22 letras no Sefer Yetzirah.", module: "Módulo I" },
  { grade: 4, title: "Grau IV: O Guardião dos Mistérios", desc: "Compreensão dos selos e círculos protetivos na Clavícula de Salomão.", module: "Módulo II" },
  { grade: 5, title: "Grau V: A Luz Astral", desc: "Domínio da força de vontade como agente plástico universal segundo Éliphas Lévi.", module: "Módulo II" },
  { grade: 6, title: "Grau VI: A Queda dos Vigilantes", desc: "Análise crítica do Livro de Enoque e das linhagens proibidas antediluvianas.", module: "Módulo III" },
  { grade: 7, title: "Grau VII: A Centelha Gnóstica (Pneuma)", desc: "Meditação profunda com os ensinamentos secretos do Evangelho de Tomé em Nag Hammadi.", module: "Módulo III" },
  { grade: 8, title: "Grau VIII: O Vaso Hermético & Nigredo", desc: "A fase do apodrecimento do ego e purificação espiritual em Splendor Solis.", module: "Módulo IV" },
  { grade: 9, title: "Grau IX: A Pedra Filosofal", desc: "A transmutação da consciência de chumbo em ouro vivo segundo Julius Evola.", module: "Módulo IV" },
  { grade: 10, title: "Grau X: A Geometria Sagrada dos Ritos", desc: "Estudo dos mistérios de Albert Pike e o templo interior do homem.", module: "Módulo V" },
  { grade: 11, title: "Grau XI: A Consciência Desdobrada", desc: "Despertar consciente em sonhos lúcidos e proteção no plano astral com 432Hz.", module: "Módulo VI" },
  { grade: 12, title: "Grau XII: Mestre da Cúpula 33 (Iluminação)", desc: "Consagração final como Iniciado Pleno da Cúpula 33. Acesso total ao Sanctum Sanctorum.", module: "Módulo VI" }
];

// ESTADO GLOBAL DO APLICATIVO
let currentTier = localStorage.getItem("cupula33_user_tier") || "master";
let currentCategoryFilter = "todos";
let currentTierFilter = "todos";
let currentSearchQuery = "";
let currentBookModalData = null;
let currentModalTab = "pdf";
let currentAudioSpeed = 1.0;
let isAudiobookPlaying = false;
let audiobookUtterance = null;

// ÁUDIO E OSCILADORES (WEB AUDIO API)
let audioCtx = null;
let currentOscillator = null;
let currentGain = null;
let activeFrequencyHz = null;

// INICIALIZAÇÃO DO APP
document.addEventListener("DOMContentLoaded", () => {
  // 1. Detectar parâmetro de URL (ex: ?tier=master ou ?plano=master vindo do checkout)
  detectUrlTier();

  // 2. Atualizar UI de acordo com o nível atual
  updateTierBadgeUI();

  // 3. Renderizar componentes
  checkReadingProgress();
  renderBooks();
  renderCollections();
  renderFrequencies();
  renderRoadmap();

  // 4. Configurar ouvintes de pesquisa
  const searchInput = document.getElementById("searchInput");
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      currentSearchQuery = e.target.value.toLowerCase().trim();
      renderBooks();
    });
  }

  // 5. Atualizar ícones Lucide
  if (window.lucide) {
    lucide.createIcons();
  }
});

// DETECÇÃO AUTOMÁTICA DE TIER VIA URL
function detectUrlTier() {
  const urlParams = new URLSearchParams(window.location.search);
  const tierParam = urlParams.get("tier") || urlParams.get("plano") || urlParams.get("acesso");
  if (tierParam) {
    const cleanTier = tierParam.toLowerCase().includes("bas") ? "basico" : "master";
    setUserTier(cleanTier, false);
    showToast("Bem-vindo à Cúpula 33! Acesso " + cleanTier.toUpperCase() + " Ativado.");
  }
}

// ATUALIZAÇÃO DA UI DO NÍVEL DO USUÁRIO
function updateTierBadgeUI() {
  const label = document.getElementById("userTierLabel");
  const checkMaster = document.getElementById("checkTierMaster");
  const checkBasico = document.getElementById("checkTierBasico");
  const accessibleCount = document.getElementById("accessibleCount");

  if (currentTier === "master") {
    if (label) label.textContent = "Membro Master (2.500 Obras)";
    if (checkMaster) checkMaster.classList.remove("hidden");
    if (checkBasico) checkBasico.classList.add("hidden");
    if (accessibleCount) accessibleCount.textContent = "Você possui Acesso Master Ilimitado às 2.500 Obras dos 6 Módulos, Frequências Sagradas e Audiobooks.";
  } else {
    if (label) label.textContent = "Membro Básico (500 Obras)";
    if (checkMaster) checkMaster.classList.add("hidden");
    if (checkBasico) checkBasico.classList.remove("hidden");
    if (accessibleCount) accessibleCount.textContent = "Plano Básico Ativo: 500 obras fundamentais liberadas. Faça o upgrade para desbloquear 2.000 obras adicionais.";
  }
}

// TROCA DE NÍVEL DO USUÁRIO
function setUserTier(newTier, showNotification) {
  if (showNotification === undefined) showNotification = true;
  currentTier = newTier;
  localStorage.setItem("cupula33_user_tier", newTier);
  updateTierBadgeUI();
  renderBooks();
  renderCollections();
  renderFrequencies();
  if (showNotification) {
    showToast("Plano alterado para: " + (newTier === "master" ? "MASTER (2.500 Obras)" : "BÁSICO (500 Obras)"));
    closeModal("profileModal");
  }
}

// NAVEGAÇÃO DE ABAS DO APP
function switchTab(tabName) {
  const tabs = ["books", "frequencies", "roadmap"];
  tabs.forEach(t => {
    const sec = document.getElementById("tab-" + t);
    const navBtn = document.getElementById("navBtn-" + t);
    const tabBtn = document.getElementById("tabBtn-" + t);

    if (t === tabName) {
      if (sec) sec.classList.remove("hidden");
      if (navBtn) navBtn.classList.add("nav-active");
      if (tabBtn) {
        tabBtn.classList.add("tab-active");
        tabBtn.classList.remove("text-gray-400");
      }
    } else {
      if (sec) sec.classList.add("hidden");
      if (navBtn) navBtn.classList.remove("nav-active");
      if (tabBtn) {
        tabBtn.classList.remove("tab-active");
        tabBtn.classList.add("text-gray-400");
      }
    }
  });

  window.scrollTo({ top: 0, behavior: "smooth" });
  if (window.lucide) lucide.createIcons();
}

// FILTRAGEM POR MÓDULO E CATEGORIA
function filterModule(moduleName) {
  filterCategory(moduleName);
  const element = document.getElementById("searchInput");
  if (element) {
    element.scrollIntoView({ behavior: "smooth", block: "center" });
  }
}

function filterCategory(category) {
  currentCategoryFilter = category;
  document.querySelectorAll(".cat-pill").forEach(btn => {
    if (btn.getAttribute("data-cat") === category) {
      btn.className = "cat-pill px-4 py-2 rounded-full text-xs font-bold bg-gold-500 text-black border border-gold-400 shadow-md transition-all whitespace-nowrap";
    } else {
      btn.className = "cat-pill px-4 py-2 rounded-full text-xs font-medium bg-dark-800 text-gray-300 hover:text-white border border-gray-800 hover:border-gray-700 transition-all whitespace-nowrap";
    }
  });
  renderBooks();
}

function filterTier(tierFilter) {
  currentTierFilter = tierFilter;
  document.querySelectorAll(".tier-filter-btn").forEach(btn => {
    if (btn.getAttribute("data-tier") === tierFilter) {
      btn.className = "tier-filter-btn flex-1 sm:flex-none px-3 py-1.5 rounded-lg text-xs font-bold bg-gold-500/20 text-gold-400 border border-gold-500/50 flex items-center justify-center gap-1";
    } else {
      btn.className = "tier-filter-btn flex-1 sm:flex-none px-3 py-1.5 rounded-lg text-xs font-medium text-gray-400 hover:text-white bg-dark-800 border border-transparent flex items-center justify-center gap-1";
    }
  });
  renderBooks();
}

// RENDERIZAR OS LIVROS E MANUSCRITOS
function renderBooks() {
  const grid = document.getElementById("booksGrid");
  const countSpan = document.getElementById("visibleBooksCount");
  if (!grid) return;

  const filtered = booksData.filter(book => {
    // Busca por texto
    const matchSearch = !currentSearchQuery || 
      book.title.toLowerCase().includes(currentSearchQuery) ||
      book.author.toLowerCase().includes(currentSearchQuery) ||
      book.category.toLowerCase().includes(currentSearchQuery) ||
      book.desc.toLowerCase().includes(currentSearchQuery);

    // Filtro de categoria / módulo
    const matchCat = currentCategoryFilter === "todos" || 
      book.category.toLowerCase() === currentCategoryFilter.toLowerCase() ||
      (book.module && book.module.toLowerCase().includes(currentCategoryFilter.toLowerCase()));

    // Filtro de plano
    let matchTier = true;
    if (currentTierFilter === "meu_plano") {
      if (currentTier === "basico") matchTier = book.tier === "basico";
    } else if (currentTierFilter === "exclusivo_master") {
      matchTier = book.tier === "master";
    }

    return matchSearch && matchCat && matchTier;
  });

  if (countSpan) {
    countSpan.textContent = "Exibindo " + filtered.length + " de " + booksData.length + " obras fundamentais";
  }

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div class="col-span-full py-16 text-center text-gray-500 glass-panel rounded-2xl p-8">
        <i data-lucide="book-x" class="w-10 h-10 mx-auto text-gray-600 mb-2"></i>
        <p class="text-sm text-gray-300 font-cinzel">Nenhum manuscrito encontrado com estes termos.</p>
        <p class="text-xs text-gray-500 mt-1">Tente ajustar a busca ou limpar os filtros de módulo.</p>
        <button onclick="resetFilters()" class="mt-4 px-4 py-2 rounded-xl bg-gold-500/20 text-gold-400 text-xs font-bold border border-gold-500/40 hover:bg-gold-500/30 transition">
          Ver Todo o Acervo
        </button>
      </div>
    `;
    if (window.lucide) lucide.createIcons();
    return;
  }

  grid.innerHTML = filtered.map(book => {
    const isLocked = currentTier === "basico" && book.tier === "master";

    return `
      <div onclick="handleBookClick(${book.id})" class="glass-panel glass-panel-hover rounded-2xl overflow-hidden border border-gold-500/20 flex flex-col justify-between cursor-pointer group relative transition-all">
        
        <!-- Capa do Livro -->
        <div class="relative aspect-[3/4] bg-dark-900 overflow-hidden">
          <img src="${book.cover}" alt="${book.title}" loading="lazy" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
          
          <!-- Badge do Módulo -->
          <span class="absolute top-2 left-2 px-2 py-0.5 rounded-md bg-dark-950/85 backdrop-blur-md text-[9px] font-bold text-gold-400 border border-gold-500/30 tracking-wider uppercase">
            ${book.module || 'Módulo'}
          </span>

          <!-- Selo Master / Bloqueio -->
          ${isLocked ? `
            <div class="absolute inset-0 bg-dark-950/85 backdrop-blur-[2px] flex flex-col items-center justify-center p-3 text-center border-2 border-gold-500/50">
              <div class="w-10 h-10 rounded-full bg-gold-500/20 border border-gold-500/50 flex items-center justify-center text-gold-400 mb-2 shadow-lg">
                <i data-lucide="lock" class="w-5 h-5"></i>
              </div>
              <span class="text-[10px] font-black text-gold-400 uppercase tracking-widest">Exclusivo Master</span>
              <span class="text-[9px] text-gray-300 mt-1">Toque para Desbloquear</span>
            </div>
          ` : `
            <div class="absolute bottom-2 right-2 px-2 py-0.5 rounded bg-dark-950/80 backdrop-blur-md text-[9px] font-medium text-gray-300 border border-dark-700">
              ${book.pages} pág
            </div>
          `}
        </div>

        <!-- Informações do Livro -->
        <div class="p-3 flex-1 flex flex-col justify-between">
          <div>
            <span class="text-[9px] font-semibold text-gold-500/90 uppercase tracking-wider block mb-0.5 line-clamp-1">
              ${book.category}
            </span>
            <h4 class="font-cinzel font-bold text-xs text-gray-100 group-hover:text-gold-300 transition-colors line-clamp-2 leading-snug">
              ${book.title}
            </h4>
            <p class="text-[11px] text-gray-400 mt-0.5 line-clamp-1">${book.author}</p>
          </div>

          <!-- Rodapé do Card -->
          <div class="mt-3 pt-2.5 border-t border-dark-700/60 flex items-center justify-between text-[10px]">
            <span class="text-gold-400/90 font-serif italic">${book.rarity}</span>
            <span class="font-bold ${isLocked ? 'text-amber-400' : 'text-gray-300 group-hover:text-gold-400'} flex items-center gap-1 transition-colors">
              ${isLocked ? '<i data-lucide="crown" class="w-3 h-3 text-gold-400"></i> Upgrade' : '<i data-lucide="book-open" class="w-3 h-3"></i> Acessar'}
            </span>
          </div>
        </div>

      </div>
    `;
  }).join("");

  if (window.lucide) lucide.createIcons();
}

// RENDERIZAR OS LOTES & COLEÇÕES COMPLETAS (DRIVE MASTER)
function renderCollections() {
  const grid = document.getElementById("collectionsGrid");
  if (!grid) return;

  grid.innerHTML = collectionsData.map(col => {
    const isLocked = currentTier === "basico" && col.tier === "master";

    return `
      <div class="glass-panel glass-panel-hover rounded-2xl p-5 border ${isLocked ? 'border-gold-500/30' : 'border-gold-500/20'} flex flex-col justify-between relative overflow-hidden group">
        ${col.id === 'lote-master-total' ? `
          <div class="absolute -right-6 -bottom-6 w-32 h-32 bg-gold-500/10 rounded-full blur-2xl pointer-events-none"></div>
        ` : ''}

        <div>
          <div class="flex items-center justify-between mb-3">
            <div class="flex items-center gap-2">
              <div class="w-9 h-9 rounded-xl bg-gold-500/10 border border-gold-500/30 flex items-center justify-center text-gold-400">
                <i data-lucide="${col.icon}" class="w-4 h-4"></i>
              </div>
              <div>
                <span class="text-[9px] font-bold text-gold-400 uppercase tracking-wider block">${col.module}</span>
                <span class="text-xs font-semibold text-gray-300">${col.count}</span>
              </div>
            </div>

            ${isLocked ? `
              <span class="px-2 py-0.5 rounded-full bg-gold-500/15 border border-gold-500/40 text-gold-400 text-[10px] font-bold flex items-center gap-1">
                <i data-lucide="crown" class="w-3 h-3"></i> Master
              </span>
            ` : `
              <span class="px-2 py-0.5 rounded-full bg-emerald-500/15 border border-emerald-500/40 text-emerald-400 text-[10px] font-bold">
                Liberado
              </span>
            `}
          </div>

          <h4 class="font-cinzel font-bold text-sm text-gray-100 group-hover:text-gold-300 transition-colors mb-1">
            ${col.title}
          </h4>
          <p class="text-xs text-gold-400/80 mb-2">${col.subtitle}</p>
          <p class="text-xs text-gray-400 leading-relaxed mb-4">${col.desc}</p>
        </div>

        <div class="pt-3 border-t border-dark-700/60 flex items-center justify-between">
          <span class="text-[11px] text-gray-500">Tamanho: ${col.size}</span>
          
          <button onclick="handleCollectionClick('${col.id}')" class="px-3.5 py-1.5 rounded-xl ${isLocked ? 'bg-gold-500/20 text-gold-400 hover:bg-gold-500/30 border border-gold-500/40 font-bold' : 'bg-gradient-to-r from-gold-500 to-amber-400 text-black font-black hover:scale-105 shadow-md'} text-xs flex items-center gap-1.5 transition-all">
            <i data-lucide="${isLocked ? 'lock' : 'cloud-download'}" class="w-3.5 h-3.5"></i>
            <span>${isLocked ? 'Desbloquear no Master' : 'Acessar Pasta'}</span>
          </button>
        </div>

      </div>
    `;
  }).join("");

  if (window.lucide) lucide.createIcons();
}

// CLICK EM UM LIVRO
function handleBookClick(bookId) {
  const book = booksData.find(b => b.id === bookId);
  if (!book) return;

  if (currentTier === "basico" && book.tier === "master") {
    openUpgradeModal(book.title);
    return;
  }

  currentBookModalData = book;
  openBookModal(book);
}

// CLICK EM UMA COLEÇÃO
function handleCollectionClick(collectionId) {
  const col = collectionsData.find(c => c.id === collectionId);
  if (!col) return;

  if (currentTier === "basico" && col.tier === "master") {
    openUpgradeModal(col.title);
    return;
  }

  triggerCollectionDownload(col.title, col.driveUrl);
}

// ABRIR MODAL DO LIVRO
function openBookModal(book) {
  document.getElementById("modalBookTitle").textContent = book.title;
  document.getElementById("modalBookAuthor").textContent = "Por " + book.author;
  document.getElementById("modalBookCategory").textContent = (book.module || 'Módulo') + " • " + book.category;
  document.getElementById("modalBookPages").textContent = book.pages + " páginas";
  document.getElementById("modalBookRarity").textContent = book.rarity;
  document.getElementById("modalBookDesc").textContent = book.desc;
  document.getElementById("modalBookCover").src = book.cover;
  document.getElementById("modalBookTier").textContent = book.tier === "basico" ? "Liberado (Básico e Master)" : "Acervo Master";

  // Audiobook info
  document.getElementById("audiobookTitle").textContent = "Audiobook: " + book.title;
  document.getElementById("audiobookStatus").textContent = "Narração em português com frequência áurea 432Hz";

  // Configurar input de página e limites
  const pageInput = document.getElementById("modalPageInput");
  const maxPages = document.getElementById("modalMaxPages");
  if (pageInput) pageInput.max = book.pages;
  if (maxPages) maxPages.textContent = book.pages;

  // Carregar progresso salvo se existir
  const saved = getSavedProgress(book.id);
  const curPage = saved ? saved.page : 1;
  if (pageInput) pageInput.value = curPage;
  updateModalProgressDisplay(curPage, book.pages);

  // Configurar botões de ação
  const downloadBtn = document.getElementById("modalDownloadBtn");
  downloadBtn.onclick = () => triggerDownload(book);

  const readOnlineBtn = document.getElementById("modalReadOnlineBtn");
  readOnlineBtn.onclick = () => openReaderModal(book, curPage);

  // Resetar modo para PDF
  switchModalTab("pdf");

  openModal("bookModal");
}

// TROCA DE ABAS NO MODAL DO LIVRO (PDF vs AUDIOBOOK)
function switchModalTab(tab) {
  currentModalTab = tab;
  const pdfContent = document.getElementById("modalPdfContent");
  const audioContent = document.getElementById("modalAudioContent");
  const pdfBtn = document.getElementById("modalTabPdfBtn");
  const audioBtn = document.getElementById("modalTabAudioBtn");

  if (tab === "pdf") {
    if (pdfContent) pdfContent.classList.remove("hidden");
    if (audioContent) audioContent.classList.add("hidden");
    if (pdfBtn) {
      pdfBtn.className = "flex-1 py-2 rounded-xl text-xs font-bold bg-gold-500 text-black flex items-center justify-center gap-1.5 transition";
    }
    if (audioBtn) {
      audioBtn.className = "flex-1 py-2 rounded-xl text-xs font-medium text-gray-400 hover:text-white flex items-center justify-center gap-1.5 transition";
    }
  } else {
    if (pdfContent) pdfContent.classList.add("hidden");
    if (audioContent) audioContent.classList.remove("hidden");
    if (pdfBtn) {
      pdfBtn.className = "flex-1 py-2 rounded-xl text-xs font-medium text-gray-400 hover:text-white flex items-center justify-center gap-1.5 transition";
    }
    if (audioBtn) {
      audioBtn.className = "flex-1 py-2 rounded-xl text-xs font-bold bg-gold-500 text-black flex items-center justify-center gap-1.5 transition";
    }
  }
  if (window.lucide) lucide.createIcons();
}

// AJUSTE DE PÁGINA NO MODAL
function adjustModalPage(delta) {
  if (!currentBookModalData) return;
  const input = document.getElementById("modalPageInput");
  if (!input) return;
  let val = parseInt(input.value) || 1;
  val = Math.max(1, Math.min(currentBookModalData.pages, val + delta));
  input.value = val;
  onPageInputChange(val);
}

function onPageInputChange(val) {
  if (!currentBookModalData) return;
  const page = parseInt(val) || 1;
  saveReadingProgress(currentBookModalData.id, page, currentBookModalData.pages);
  updateModalProgressDisplay(page, currentBookModalData.pages);
}

function updateModalProgressDisplay(page, total) {
  const span = document.getElementById("modalCurrentProgressPct");
  if (!span) return;
  const pct = Math.round((page / total) * 100);
  span.textContent = "Página " + page + " de " + total + " (" + pct + "%)";
}

// LEITOR EM TELA CHEIA
function openReaderModal(book, startPage) {
  if (startPage === undefined) startPage = 1;
  closeModal("bookModal");
  currentBookModalData = book;

  document.getElementById("readerBookTitle").textContent = book.title;
  document.getElementById("readerBookStatus").textContent = (book.module || 'Módulo') + " • Página " + startPage + " de " + book.pages;
  
  const iframe = document.getElementById("readerIframe");
  if (iframe) {
    iframe.src = book.pdfUrl;
  }

  saveReadingProgress(book.id, startPage, book.pages);
  openModal("readerModal");
}

function closeReaderModal() {
  const iframe = document.getElementById("readerIframe");
  if (iframe) iframe.src = "";
  closeModal("readerModal");
}

function bookmarkCurrentPage() {
  if (!currentBookModalData) return;
  const progress = getSavedProgress(currentBookModalData.id);
  const curPage = progress ? progress.page : 1;
  saveReadingProgress(currentBookModalData.id, curPage, currentBookModalData.pages);
  showToast("Marcador salvo: " + currentBookModalData.title + " na pág. " + curPage);
}

// SISTEMA DE MARCACAO & PERSISTENCIA DE LEITURA (LOCALSTORAGE)
function saveReadingProgress(bookId, page, totalPages) {
  const book = booksData.find(b => b.id === bookId);
  if (!book) return;

  const pct = Math.round((page / totalPages) * 100);
  const data = {
    bookId: book.id,
    title: book.title,
    author: book.author,
    cover: book.cover,
    category: book.category,
    module: book.module || "Módulo I",
    page: page,
    totalPages: totalPages,
    percent: pct,
    pdfUrl: book.pdfUrl,
    timestamp: new Date().toISOString()
  };

  localStorage.setItem("cupula33_active_reading", JSON.stringify(data));

  // Salvar no mapa histórico de todos os livros
  const allHistory = JSON.parse(localStorage.getItem("cupula33_books_progress") || "{}");
  allHistory[book.id] = data;
  localStorage.setItem("cupula33_books_progress", JSON.stringify(allHistory));

  checkReadingProgress();
}

function getSavedProgress(bookId) {
  const allHistory = JSON.parse(localStorage.getItem("cupula33_books_progress") || "{}");
  return allHistory[bookId] || null;
}

function checkReadingProgress() {
  const section = document.getElementById("resumeReadingSection");
  const stored = localStorage.getItem("cupula33_active_reading");
  if (!section) return;

  if (!stored) {
    section.classList.add("hidden");
    return;
  }

  try {
    const data = JSON.parse(stored);
    document.getElementById("resumeCover").src = data.cover;
    document.getElementById("resumeTitle").textContent = data.title;
    document.getElementById("resumeProgressText").textContent = "Página " + data.page + " de " + data.totalPages + " • " + data.percent + "% Concluído";
    document.getElementById("resumeProgressBar").style.width = data.percent + "%";
    section.classList.remove("hidden");
    if (window.lucide) lucide.createIcons();
  } catch (err) {
    section.classList.add("hidden");
  }
}

function resumeLastReading() {
  const stored = localStorage.getItem("cupula33_active_reading");
  if (!stored) return;
  const data = JSON.parse(stored);
  const book = booksData.find(b => b.id === data.bookId);
  if (book) {
    openReaderModal(book, data.page);
  }
}

function clearReadingProgress() {
  localStorage.removeItem("cupula33_active_reading");
  checkReadingProgress();
  showToast("Histórico de leitura reiniciado.");
}

// MOTOR DE AUDIOBOOK NARRADO (WEB SPEECH API + WEB AUDIO API 432HZ)
function togglePlayAudiobook() {
  if (isAudiobookPlaying) {
    pauseAudiobook();
  } else {
    playAudiobook();
  }
}

function playAudiobook() {
  if (!currentBookModalData) return;
  const book = currentBookModalData;

  // Iniciar frequência de fundo 432Hz suave
  startAudiobookAmbientDrone();

  // Texto da narração
  const narrationText = "Iniciação ao tratado sagrado: " + book.title + ". Autor: " + book.author + ". Pertencente ao acervo da Cúpula 33, " + (book.module || 'Módulo Oficial') + ". " + book.desc + " Este manuscrito guarda as chaves ancestrais da transmutação da mente. Ouça com atenção plena e permita que os ensinamentos façam morada em sua consciência.";

  if ('speechSynthesis' in window) {
    window.speechSynthesis.cancel();
    audiobookUtterance = new SpeechSynthesisUtterance(narrationText);
    audiobookUtterance.lang = 'pt-BR';
    audiobookUtterance.rate = currentAudioSpeed;
    audiobookUtterance.pitch = 0.95;

    // Buscar voz em português se disponível
    const voices = window.speechSynthesis.getVoices();
    const ptVoice = voices.find(v => v.lang.includes('pt') || v.lang.includes('PT'));
    if (ptVoice) audiobookUtterance.voice = ptVoice;

    audiobookUtterance.onend = () => {
      stopAudiobook();
    };

    audiobookUtterance.onerror = () => {
      stopAudiobook();
    };

    window.speechSynthesis.speak(audiobookUtterance);
    isAudiobookPlaying = true;
    updateAudiobookControlsUI(true);
  } else {
    showToast("Síntese de voz não suportada neste navegador.");
  }
}

function pauseAudiobook() {
  if ('speechSynthesis' in window) {
    window.speechSynthesis.pause();
  }
  stopAudiobookAmbientDrone();
  isAudiobookPlaying = false;
  updateAudiobookControlsUI(false);
}

function stopAudiobook() {
  if ('speechSynthesis' in window) {
    window.speechSynthesis.cancel();
  }
  stopAudiobookAmbientDrone();
  isAudiobookPlaying = false;
  updateAudiobookControlsUI(false);
}

function restartAudiobook() {
  stopAudiobook();
  setTimeout(() => playAudiobook(), 200);
}

function setAudioSpeed(speed) {
  currentAudioSpeed = speed;
  document.querySelectorAll(".audio-speed-btn").forEach(btn => {
    if (parseFloat(btn.getAttribute("data-speed")) === speed) {
      btn.className = "audio-speed-btn px-2.5 py-1 rounded-lg bg-gold-500/20 text-gold-400 border border-gold-500/40 font-bold";
    } else {
      btn.className = "audio-speed-btn px-2.5 py-1 rounded-lg bg-dark-800 text-gray-400 hover:text-white border border-dark-700";
    }
  });

  if (isAudiobookPlaying) {
    playAudiobook();
  }
}

function updateAudiobookControlsUI(playing) {
  const icon = document.getElementById("audiobookPlayIcon");
  const status = document.getElementById("audiobookStatus");
  if (icon) {
    icon.setAttribute("data-lucide", playing ? "pause" : "play");
    if (window.lucide) lucide.createIcons();
  }
  if (status) {
    status.textContent = playing ? "Reproduzindo narração com frequência de fundo 432Hz..." : "Reprodução pausada.";
  }
}

// FREQUÊNCIA DE FUNDO AMBIENTE PARA O AUDIOBOOK (432Hz)
let audiobookOsc = null;
let audiobookGain = null;

function startAudiobookAmbientDrone() {
  try {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (!AudioContextClass) return;
    if (!audioCtx) audioCtx = new AudioContextClass();
    if (audioCtx.state === 'suspended') audioCtx.resume();

    stopAudiobookAmbientDrone();

    audiobookOsc = audioCtx.createOscillator();
    audiobookGain = audioCtx.createGain();

    audiobookOsc.type = 'sine';
    audiobookOsc.frequency.setValueAtTime(432, audioCtx.currentTime);

    audiobookGain.gain.setValueAtTime(0.001, audioCtx.currentTime);
    audiobookGain.gain.exponentialRampToValueAtTime(0.04, audioCtx.currentTime + 1.5);

    audiobookOsc.connect(audiobookGain);
    audiobookGain.connect(audioCtx.destination);
    audiobookOsc.start();
  } catch (err) {
    console.log("Drone error:", err);
  }
}

function stopAudiobookAmbientDrone() {
  try {
    if (audiobookGain && audioCtx) {
      audiobookGain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + 0.5);
      setTimeout(() => {
        if (audiobookOsc) {
          audiobookOsc.stop();
          audiobookOsc.disconnect();
          audiobookOsc = null;
        }
      }, 500);
    }
  } catch (err) {}
}

// BAIXAR ÁUDIO DO AUDIOBOOK PARA SMARTPHONE
function downloadAudiobookTrack() {
  if (!currentBookModalData) return;
  const book = currentBookModalData;

  showToast("Gerando arquivo de áudio para: " + book.title + "...");

  // Gera um arquivo de áudio místico calibrado a 432Hz em formato WAV real sintetizado
  const sampleRate = 44100;
  const duration = 12; // 12 segundos do tom harmônico de apresentação da obra
  const numSamples = sampleRate * duration;
  const buffer = new Float32Array(numSamples);

  // Sintetiza onda harmônica 432Hz + sobretons
  for (let i = 0; i < numSamples; i++) {
    const t = i / sampleRate;
    const env = Math.sin((Math.PI * i) / numSamples); // Envelope suave
    buffer[i] = (Math.sin(2 * Math.PI * 432 * t) * 0.6 + Math.sin(2 * Math.PI * 864 * t) * 0.2) * env;
  }

  // Monta arquivo WAV
  const wavBytes = encodeWAV(buffer, sampleRate);
  const blob = new Blob([wavBytes], { type: 'audio/wav' });
  const url = URL.createObjectURL(blob);

  const a = document.createElement('a');
  const safeTitle = book.title.replace(/[^a-zA-Z0-9]/g, '_').substring(0, 30);
  a.href = url;
  a.download = "Audiobook_432Hz_" + safeTitle + "_Cupula33.wav";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);

  showToast("Download do Audiobook iniciado com sucesso!");
}

// ENCODER WAV
function encodeWAV(samples, sampleRate) {
  const buffer = new ArrayBuffer(44 + samples.length * 2);
  const view = new DataView(buffer);

  /* RIFF identifier */
  writeString(view, 0, 'RIFF');
  /* file length */
  view.setUint32(4, 36 + samples.length * 2, true);
  /* RIFF type */
  writeString(view, 8, 'WAVE');
  /* format chunk identifier */
  writeString(view, 12, 'fmt ');
  /* format chunk length */
  view.setUint32(16, 16, true);
  /* sample format (raw) */
  view.setUint16(20, 1, true);
  /* channel count */
  view.setUint16(22, 1, true);
  /* sample rate */
  view.setUint32(24, sampleRate, true);
  /* byte rate (sample rate * block align) */
  view.setUint32(28, sampleRate * 2, true);
  /* block align (channel count * bytes per sample) */
  view.setUint16(32, 2, true);
  /* bits per sample */
  view.setUint16(34, 16, true);
  /* data chunk identifier */
  writeString(view, 36, 'data');
  /* data chunk length */
  view.setUint32(40, samples.length * 2, true);

  // Escrever samples PCM 16-bit
  let offset = 44;
  for (let i = 0; i < samples.length; i++) {
    const s = Math.max(-1, Math.min(1, samples[i]));
    view.setInt16(offset, s < 0 ? s * 0x8000 : s * 0x7FFF, true);
    offset += 2;
  }

  return buffer;
}

function writeString(view, offset, string) {
  for (let i = 0; i < string.length; i++) {
    view.setUint8(offset + i, string.charCodeAt(i));
  }
}

// SISTEMA DE FREQUÊNCIAS DE SOLFEGGIO
function renderFrequencies() {
  const list = document.getElementById("frequenciesList");
  if (!list) return;

  list.innerHTML = frequenciesData.map(f => {
    const isLocked = currentTier === "basico" && f.tier === "master";
    const isPlaying = activeFrequencyHz === f.hz;

    return `
      <div class="glass-panel glass-panel-hover rounded-2xl p-5 border ${isPlaying ? 'border-gold-500 shadow-[0_0_20px_rgba(212,175,55,0.25)]' : 'border-gold-500/20'} flex flex-col justify-between transition-all">
        
        <div>
          <div class="flex items-center justify-between mb-3">
            <span class="text-xs font-cinzel font-bold text-gold-400">${f.hz} HZ</span>
            ${isLocked ? `
              <span class="px-2 py-0.5 rounded-full bg-gold-500/15 border border-gold-500/40 text-gold-400 text-[10px] font-bold flex items-center gap-1">
                <i data-lucide="crown" class="w-3 h-3"></i> Master
              </span>
            ` : `
              <span class="text-[10px] font-bold text-gray-400">${f.chakra}</span>
            `}
          </div>

          <h4 class="font-cinzel font-bold text-base text-gray-100 mb-1">${f.name}</h4>
          <p class="text-xs text-gray-400 leading-relaxed mb-4">${f.benefit}</p>
        </div>

        <div class="pt-3 border-t border-dark-700/60 flex items-center justify-between">
          <span class="text-[11px] text-gray-500">Onda Pura Senoidal</span>

          <button onclick="handleFrequencyClick(${f.hz})" class="px-4 py-2 rounded-xl ${isPlaying ? 'bg-amber-400 text-black font-black' : isLocked ? 'bg-gold-500/20 text-gold-400 border border-gold-500/40' : 'bg-gold-500 text-black font-bold'} text-xs flex items-center gap-1.5 transition-all shadow-md">
            <i data-lucide="${isLocked ? 'lock' : isPlaying ? 'pause' : 'play'}" class="w-3.5 h-3.5"></i>
            <span>${isLocked ? 'Exclusivo Master' : isPlaying ? 'Pausar' : 'Sintonizar'}</span>
          </button>
        </div>

      </div>
    `;
  }).join("");

  if (window.lucide) lucide.createIcons();
}

function handleFrequencyClick(hz) {
  const f = frequenciesData.find(item => item.hz === hz);
  if (!f) return;

  if (currentTier === "basico" && f.tier === "master") {
    openUpgradeModal("Frequência Sagrada " + f.hz + " Hz");
    return;
  }

  if (activeFrequencyHz === hz) {
    stopFrequency(true);
  } else {
    playFrequency(hz);
  }
}

function playFrequency(hz) {
  stopFrequency(false);

  const AudioContextClass = window.AudioContext || window.webkitAudioContext;
  if (!AudioContextClass) {
    showToast("Áudio não suportado no seu navegador.");
    return;
  }

  if (!audioCtx) audioCtx = new AudioContextClass();
  if (audioCtx.state === 'suspended') audioCtx.resume();

  currentOscillator = audioCtx.createOscillator();
  currentGain = audioCtx.createGain();

  currentOscillator.type = 'sine';
  currentOscillator.frequency.setValueAtTime(hz, audioCtx.currentTime);

  currentGain.gain.setValueAtTime(0.001, audioCtx.currentTime);
  currentGain.gain.exponentialRampToValueAtTime(0.35, audioCtx.currentTime + 1.2);

  currentOscillator.connect(currentGain);
  currentGain.connect(audioCtx.destination);
  currentOscillator.start();

  activeFrequencyHz = hz;

  const badge = document.getElementById("playerCurrentHz");
  if (badge) badge.textContent = "Sintonizado em " + hz + " Hz";

  renderFrequencies();
  showToast("Sintonizado em " + hz + " Hz. Relaxe e respire fundo.");
}

function stopFrequency(showFeedback) {
  if (showFeedback === undefined) showFeedback = true;
  if (currentGain && audioCtx) {
    try {
      currentGain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + 0.5);
      setTimeout(() => {
        if (currentOscillator) {
          currentOscillator.stop();
          currentOscillator.disconnect();
          currentOscillator = null;
        }
      }, 500);
    } catch (e) {}
  }

  activeFrequencyHz = null;

  const badge = document.getElementById("playerCurrentHz");
  if (badge) badge.textContent = "Santuário em Silêncio";

  renderFrequencies();
  if (showFeedback) showToast("Frequência finalizada.");
}

// SISTEMA DO ROADMAP INICIÁTICO
function renderRoadmap() {
  const list = document.getElementById("roadmapList");
  if (!list) return;

  const completed = JSON.parse(localStorage.getItem("cupula33_roadmap_completed") || "[]");
  const pct = Math.round((completed.length / roadmapData.length) * 100);

  const progText = document.getElementById("roadmapProgressText");
  const progBar = document.getElementById("roadmapProgressBar");
  if (progText) progText.textContent = completed.length + " de 12 Graus (" + pct + "%)";
  if (progBar) progBar.style.width = pct + "%";

  list.innerHTML = roadmapData.map(r => {
    const isDone = completed.includes(r.grade);

    return `
      <div onclick="toggleRoadmapGrade(${r.grade})" class="glass-panel glass-panel-hover rounded-2xl p-4 sm:p-5 border ${isDone ? 'border-gold-500/50 bg-gold-500/5' : 'border-gold-500/20'} flex items-start justify-between gap-4 cursor-pointer transition-all">
        <div class="flex items-start gap-3.5">
          <div class="w-8 h-8 rounded-xl ${isDone ? 'bg-gold-500 text-black' : 'bg-dark-800 text-gold-400 border border-gold-500/30'} flex items-center justify-center font-cinzel font-bold text-xs shrink-0 mt-0.5">
            ${isDone ? '<i data-lucide="check" class="w-4 h-4 stroke-[3]"></i>' : r.grade}
          </div>
          <div>
            <span class="text-[9px] font-bold text-gold-500 uppercase tracking-widest block">${r.module}</span>
            <h4 class="font-cinzel font-bold text-sm text-gray-100 ${isDone ? 'line-through text-gray-400' : ''}">${r.title}</h4>
            <p class="text-xs text-gray-400 mt-0.5">${r.desc}</p>
          </div>
        </div>

        <span class="text-xs text-gray-500 font-bold shrink-0 mt-1">
          ${isDone ? '<span class="text-gold-400">Concluído</span>' : 'Pendente'}
        </span>
      </div>
    `;
  }).join("");

  if (window.lucide) lucide.createIcons();
}

function toggleRoadmapGrade(grade) {
  let completed = JSON.parse(localStorage.getItem("cupula33_roadmap_completed") || "[]");
  if (completed.includes(grade)) {
    completed = completed.filter(g => g !== grade);
  } else {
    completed.push(grade);
    showToast("Grau " + grade + " concluído com sucesso!");
  }
  localStorage.setItem("cupula33_roadmap_completed", JSON.stringify(completed));
  renderRoadmap();
}

// SISTEMA DE DOWNLOADS
function triggerDownload(book) {
  showToast("Iniciando download seguro de: " + book.title + "...");
  const a = document.createElement('a');
  a.href = book.pdfUrl || 'livros_pdf/01_O_Caibalion_Tres_Iniciados.pdf';
  a.download = '';
  a.target = '_blank';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}

function triggerCollectionDownload(title, url) {
  showToast("Conectando ao Drive Oficial: " + title + "...");
  window.open(url, '_blank');
}

// MODAIS
function openModal(modalId) {
  const m = document.getElementById(modalId);
  if (m) m.classList.remove("hidden");
}

function closeModal(modalId) {
  const m = document.getElementById(modalId);
  if (m) m.classList.add("hidden");
}

function openUpgradeModal(title) {
  document.getElementById("upgradeModalTitle").textContent = "Desbloquear: " + title;
  openModal("upgradeModal");
}

// TOAST
function showToast(text) {
  const toast = document.getElementById("appToast");
  const span = document.getElementById("appToastText");
  if (!toast || !span) return;
  span.textContent = text;
  toast.classList.remove("hidden");
  setTimeout(() => {
    toast.classList.add("hidden");
  }, 3500);
}

function resetFilters() {
  currentSearchQuery = "";
  currentCategoryFilter = "todos";
  currentTierFilter = "todos";
  const input = document.getElementById("searchInput");
  if (input) input.value = "";
  filterCategory("todos");
}
async function checkMemberEmail(email) {
  const cleanEmail = String(email || "").toLowerCase().trim();
  if (!cleanEmail) return;

  const endpoint =
    `${SUPABASE_URL}/rest/v1/members` +
    `?email=eq.${encodeURIComponent(cleanEmail)}` +
    `&active=eq.true` +
    `&select=tier,active`;

  const res = await fetch(endpoint, {
    headers: {
      apikey: SUPABASE_ANON_KEY,
      Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
    },
  });

  if (!res.ok) {
    throw new Error("Erro ao consultar o Supabase");
  }

  const rows = await res.json();
  if (rows.length > 0 && rows[0].active) {
    const verifiedTier = rows[0].tier === "master" ? "master" : "basico";
    localStorage.setItem("cupula33_member_email", cleanEmail);
    localStorage.setItem("cupula33_verified_tier", verifiedTier);
    setUserTier(verifiedTier, false);
    showToast(`Acesso ${verifiedTier.toUpperCase()} liberado para ${cleanEmail}!`);
    closeModal("profileModal");
  } else {
    localStorage.removeItem("cupula33_verified_tier");
    setUserTier("basico", false);
    showToast("Nenhuma assinatura ativa encontrada para este e-mail.");
  }
}

async function loginWithEmail() {
  const input = document.getElementById("memberEmailInput");
  try {
    await checkMemberEmail(input ? input.value : "");
  } catch (err) {
    showToast("Não foi possível verificar o acesso agora.");
  }
}
// PWA INSTALL PROMPT
let deferredPrompt = null;
window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault();
  deferredPrompt = e;
  const btn = document.getElementById('pwaInstallBtn');
  const banner = document.getElementById('pwaInstallBanner');
  if (btn) btn.classList.remove('hidden');
  if (banner) banner.classList.remove('hidden');
});

function triggerPWAInstall() {
  if (deferredPrompt) {
    deferredPrompt.prompt();
    deferredPrompt.userChoice.then(() => {
      deferredPrompt = null;
    });
  } else {
    showToast("Para instalar no celular: toque no botão Compartilhar do Safari/Chrome e em 'Adicionar à Tela de Início'.");
  }
}
