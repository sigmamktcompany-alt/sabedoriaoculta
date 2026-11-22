/**
 * CÚPULA 33 | PLATAFORMA DE MEMBROS & ACERVO HERMÉTICO PWA
 * Sistema de Acesso: Básico (500 Obras) vs Master (2.500 Obras + Frequências Solfeggio)
 * Sem repetição de capas e títulos. Catálogo de obras autênticas.
 */

// 1. BANCO DE DADOS DOS MANUSCRITOS PRIMORDIAIS COM DOWNLOAD DIRETO (PDFs REAIS)
const booksData = [
    {
        "id": 1,
        "title": "O Caibalion: Estudo da Filosofia Hermética",
        "author": "Três Iniciados",
        "category": "Hermetismo & Cabala",
        "rarity": "Essencial",
        "pages": 160,
        "cover": "assets/books/o-caibalion.jpg",
        "tier": "basico",
        "desc": "O tratado definitivo dos sete princípios herméticos de Hermes Trismegisto: Mentalismo, Correspondência, Vibração, Polaridade, Ritmo, Causa e Efeito, e Gênero. A chave mestra de toda transmutação mental.",
        "pdfUrl": "livros_pdf/01_O_Caibalion_Tres_Iniciados.pdf"
    },
    {
        "id": 2,
        "title": "A Tábua de Esmeralda",
        "author": "Hermes Trismegisto",
        "category": "Hermetismo & Cabala",
        "rarity": "Manuscrito Sagrado",
        "pages": 94,
        "cover": "assets/books/tabua-de-esmeralda.jpg",
        "tier": "basico",
        "desc": "O texto críptico primordial da alquimia antiga: 'O que está em cima é como o que está embaixo'. Comentários esotéricos sobre a Grande Obra e a criação da Pedra Filosofal.",
        "pdfUrl": "livros_pdf/10_A_Tabua_de_Esmeralda_Hermes_Trismegisto.pdf"
    },
    {
        "id": 3,
        "title": "Corpus Hermeticum",
        "author": "Hermes Trismegisto",
        "category": "Hermetismo & Cabala",
        "rarity": "Manuscrito Sagrado",
        "pages": 280,
        "cover": "assets/books/corpus-hermeticum.jpg",
        "tier": "basico",
        "desc": "A coleção completa dos diálogos sagrados entre Hermes e seus discípulos Tat e Poimandres, desvendando a natureza da mente divina, o cosmos e a redenção da alma humana.",
        "pdfUrl": "livros_pdf/07_Corpus_Hermeticum_Hermes_Trismegisto.pdf"
    },
    {
        "id": 4,
        "title": "O Zohar: Livro do Esplendor",
        "author": "Simeon bar Yochai",
        "category": "Hermetismo & Cabala",
        "rarity": "Raríssimo",
        "pages": 640,
        "cover": "assets/books/o-zohar.jpg",
        "tier": "master",
        "desc": "A obra-prima da Cabala medieval judaica. Exegese mística e teosófica da Torá, revelando os mistérios do Ein Sof, das 10 Sefirot celestiais e da carruagem divina da Merkavah.",
        "pdfUrl": "livros_pdf/17_O_Zohar_Traducao_Completa.pdf"
    },
    {
        "id": 5,
        "title": "Sefer Yetzirah: O Livro da Formação",
        "author": "Atribuído ao Patriarca Abraão",
        "category": "Hermetismo & Cabala",
        "rarity": "Manuscrito Sagrado",
        "pages": 110,
        "cover": "assets/books/sefer-yetzirah.jpg",
        "tier": "basico",
        "desc": "O mais antigo texto cosmológico hebraico sobrevivente. Revela como o universo foi criado e estruturado através dos 32 Caminhos da Sabedoria e das 22 letras do alfabeto sagrado.",
        "pdfUrl": "livros_pdf/18_Sefer_Yetzirah_Livro_da_Formacao.pdf"
    },
    {
        "id": 6,
        "title": "A Cabala Mística",
        "author": "Dion Fortune",
        "category": "Hermetismo & Cabala",
        "rarity": "Essencial",
        "pages": 310,
        "cover": "assets/books/cabala-mistica.jpg",
        "tier": "basico",
        "desc": "A mais clara e brilhante introdução ocidental à Árvore da Vida cabalística. Conecta a sabedoria hebraica antiga à psicologia profunda, magia prática e ascensão espiritual.",
        "pdfUrl": "livros_pdf/12_A_Cabala_Mistica_Dion_Fortune.pdf"
    },
    {
        "id": 7,
        "title": "O Livro de São Cipriano (Capa Preta)",
        "author": "São Cipriano de Antioquia",
        "category": "Grimórios & Alta Magia",
        "rarity": "Proibido",
        "pages": 380,
        "cover": "assets/books/grimorio-sao-cipriano.jpg",
        "tier": "master",
        "desc": "O lendário tesouro do feiticeiro da Antióquia. Encantamentos, conjurações de espíritos, orações secretas, tesouros enterrados e práticas ancestrais de magia ibérica e cerimonial.",
        "pdfUrl": "livros_pdf/06_Livro_de_Sao_Cipriano_Capa_Preta.pdf"
    },
    {
        "id": 8,
        "title": "Dogma e Ritual da Alta Magia",
        "author": "Eliphas Levi",
        "category": "Grimórios & Alta Magia",
        "rarity": "Raríssimo",
        "pages": 490,
        "cover": "assets/books/dogma-e-ritual-alta-magia.jpg",
        "tier": "master",
        "desc": "O monumento do ocultismo do século XIX. Levi reconcilia ciência, religião e magia sob os princípios da Luz Astral, do Grande Agente Mágico e dos arcanos do Tarot.",
        "pdfUrl": "livros_pdf/03_Dogma_e_Ritual_da_Alta_Magia_Eliphas_Levi.pdf"
    },
    {
        "id": 9,
        "title": "A Clavícula de Salomão & Lemegeton",
        "author": "Rei Salomão (Atrib.)",
        "category": "Grimórios & Alta Magia",
        "rarity": "Proibido",
        "pages": 240,
        "cover": "assets/books/clavicula-de-salomao.jpg",
        "tier": "master",
        "desc": "O mais influente manual de teurgia e conjuração da história. Instruções detalhadas sobre círculos mágicos, pentáculos planetários, horas planetárias e proteção contra forças adversas.",
        "pdfUrl": "livros_pdf/14_Lemegeton_Clavicula_de_Salomao_Goetia.pdf"
    },
    {
        "id": 10,
        "title": "Ars Goetia: As 72 Entidades Salomônicas",
        "author": "S.L. MacGregor Mathers & Aleister Crowley",
        "category": "Grimórios & Alta Magia",
        "rarity": "Proibido",
        "pages": 180,
        "cover": "assets/books/ars-goetia.jpg",
        "tier": "master",
        "desc": "O catálogo completo dos 72 espíritos imperiais invocados por Salomão, com seus respectivos selos, governanças astrais, oferendas e métodos rigorosos de contenção mágica.",
        "pdfUrl": "livros_pdf/14_Lemegeton_Clavicula_de_Salomao_Goetia.pdf"
    },
    {
        "id": 11,
        "title": "O Grande Grimório do Papa Honório",
        "author": "Papa Honório III (Acervo Vaticano)",
        "category": "Grimórios & Alta Magia",
        "rarity": "Proibido",
        "pages": 160,
        "cover": "assets/books/grandegrimorio.jpg",
        "tier": "master",
        "desc": "Manuscrito atribuído à corte papal medieval que detalha conjurações sacerdotais, exorcismos rituais e o pacto hermético para controle das potestades do submundo.",
        "pdfUrl": "livros_pdf/22_O_Grande_Grimorio_do_Papa_Honorio.pdf"
    },
    {
        "id": 12,
        "title": "Malleus Maleficarum (O Martelo das Feiticeiras)",
        "author": "Heinrich Kramer & James Sprenger (1486)",
        "category": "Grimórios & Alta Magia",
        "rarity": "Raríssimo",
        "pages": 420,
        "cover": "assets/books/malleus.jpg",
        "tier": "basico",
        "desc": "O tratado oficial da Inquisição medieval sobre a identificação de praticantes de artes ocultas, pactos diabólicos e os procedimentos inquisitoriais do Santo Ofício.",
        "pdfUrl": "livros_pdf/15_Malleus_Maleficarum_Martelo_das_Feiticeiras.pdf"
    },
    {
        "id": 13,
        "title": "Necronomicon (Al Azif)",
        "author": "Abdul Alhazred (Damasco)",
        "category": "Grimórios & Alta Magia",
        "rarity": "Proibido",
        "pages": 260,
        "cover": "assets/books/necro.png",
        "tier": "master",
        "desc": "O lendário texto dos Antigos Deuses que habitam além das estrelas. Fórmulas para invocação dos Deuses Primordiais, astronomia pré-humana e geometria dimensional não-euclidiana.",
        "pdfUrl": "livros_pdf/21_Necronomicon_Al_Azif_Abdul_Alhazred.pdf"
    },
    {
        "id": 14,
        "title": "As Nove Portas do Reino das Sombras",
        "author": "Aristide Torchia (Veneza, 1666)",
        "category": "Grimórios & Alta Magia",
        "rarity": "Manuscrito Sagrado",
        "pages": 190,
        "cover": "assets/books/ninegates.png",
        "tier": "master",
        "desc": "O fac-símile dos 9 enigmas visuais gravados em madeira que abrem os 9 portais da sabedoria proibida. Análise das variantes atribuídas a Lúcifer e os selos iniciáticos.",
        "pdfUrl": "livros_pdf/11_As_Nove_Portas_Do_Reino_Das_Sombras.pdf"
    },
    {
        "id": 15,
        "title": "Picatrix: Ghayat al-Hakim (O Cume do Sábio)",
        "author": "Maslama al-Majriti (Tradição Árabe)",
        "category": "Grimórios & Alta Magia",
        "rarity": "Raríssimo",
        "pages": 310,
        "cover": "assets/books/picatrix.jpg",
        "tier": "master",
        "desc": "O maior compêndio de magia astrológica e talismânica do mundo árabe medieval. Como capturar as energias dos planetas e mansões lunares em anéis e pedras sagradas.",
        "pdfUrl": "livros_pdf/35_Tratado_de_Magia_Oculta_Williams_Scott.pdf"
    },
    {
        "id": 16,
        "title": "Três Livros de Filosofia Oculta",
        "author": "Heinrich Cornelius Agrippa",
        "category": "Filosofia Oculta",
        "rarity": "Manuscrito Sagrado",
        "pages": 650,
        "cover": "assets/books/de-occulta-philosophia.jpg",
        "tier": "master",
        "desc": "A enciclopédia renascentista da magia natural, celestial e cerimonial. Estudo completo dos quatro elementos, da magia matemática dos números e da invocação angelical.",
        "pdfUrl": "livros_pdf/45_Curso_de_Filosofia_Oculta_Eliphas_Levi.pdf"
    },
    {
        "id": 17,
        "title": "O Livro de Enoque Completo",
        "author": "Profeta Enoque (Cânone Etíope)",
        "category": "Gnosticismo & Apócrifos",
        "rarity": "Essencial",
        "pages": 220,
        "cover": "assets/books/livro-de-enoque.jpg",
        "tier": "basico",
        "desc": "O apócrifo fundamental excluído do cânone bíblico ocidental. A narrativa histórica dos 200 Sentinelas (Anjos Caídos), os gigantes Nefilim e os segredos astronômicos celestiais.",
        "pdfUrl": "livros_pdf/04_O_Livro_de_Enoque_Completo.pdf"
    },
    {
        "id": 18,
        "title": "Pistis Sophia: O Evangelho Gnóstico da Sabedoria",
        "author": "Biblioteca Gnóstica Cóptica",
        "category": "Gnosticismo & Apócrifos",
        "rarity": "Manuscrito Sagrado",
        "pages": 440,
        "cover": "assets/books/pistis-sophia.jpg",
        "tier": "master",
        "desc": "O evangelho secreto pós-ressurreição de Jesus Cristo ensinado aos seus discípulos e a Maria Madalena. A queda e redenção do Aeon Sophia através das 13 esferas celestiais.",
        "pdfUrl": "livros_pdf/25_Codex_Nasaraeus_Texto_Gnostico.pdf"
    },
    {
        "id": 19,
        "title": "O Evangelho Secreto de Tomé",
        "author": "Apóstolo Tomé (Nag Hammadi)",
        "category": "Gnosticismo & Apócrifos",
        "rarity": "Essencial",
        "pages": 95,
        "cover": "assets/books/evangelho-de-tome.jpg",
        "tier": "basico",
        "desc": "As 114 sentenças secretas que Jesus pronunciou em vida: 'Quem descobrir a interpretação destas palavras não experimentará a morte'. O ápice da mística cristã primitiva.",
        "pdfUrl": "livros_pdf/25_Codex_Nasaraeus_Texto_Gnostico.pdf"
    },
    {
        "id": 20,
        "title": "Os Manuscritos de Nag Hammadi",
        "author": "Comunidade Gnóstica do Egito",
        "category": "Gnosticismo & Apócrifos",
        "rarity": "Manuscrito Sagrado",
        "pages": 520,
        "cover": "assets/books/manuscritos-nag-hammadi.jpg",
        "tier": "master",
        "desc": "A coleção completa dos códices de papiro descobertos em 1945 nas cavernas de Chenoboskion. O Evangelho da Verdade, o Tratado Tripartite e o Apócrifo de João traduzidos.",
        "pdfUrl": "livros_pdf/25_Codex_Nasaraeus_Texto_Gnostico.pdf"
    },
    {
        "id": 21,
        "title": "Codex Nasaraeus: O Livro Sagrado dos Mandenos",
        "author": "Tradição de João Batista",
        "category": "Gnosticismo & Apócrifos",
        "rarity": "Raríssimo",
        "pages": 280,
        "cover": "assets/books/codexnasareus.png",
        "tier": "master",
        "desc": "O livro sagrado da única seita gnóstica sobrevivente da antiguidade. A cosmogonia dos Mundos de Luz, a oposição ao Demiurgo e a purificação das águas vivas.",
        "pdfUrl": "livros_pdf/25_Codex_Nasaraeus_Texto_Gnostico.pdf"
    },
    {
        "id": 22,
        "title": "O Livro Egípcio dos Mortos: Papiro de Ani",
        "author": "Escribas de Tebas (1250 a.C.)",
        "category": "Hermetismo & Cabala",
        "rarity": "Manuscrito Sagrado",
        "pages": 310,
        "cover": "assets/books/livro-egipcio-dos-mortos.jpg",
        "tier": "basico",
        "desc": "O manual fúnebre e iniciático mais venerado do Egito Antigo. A travessia do Duat, as 42 Confissões Negativas e a pesagem do coração diante da balança de Ma'at e Osíris.",
        "pdfUrl": "livros_pdf/O_Livro_Egipcio_dos_Mortos_Papiro_Ani.pdf"
    },
    {
        "id": 23,
        "title": "O Livro das Estâncias de Dzyan",
        "author": "Helena Petrovna Blavatsky",
        "category": "Filosofia Oculta",
        "rarity": "Manuscrito Sagrado",
        "pages": 290,
        "cover": "assets/books/dzyan.jpg",
        "tier": "master",
        "desc": "O texto arcaico preservado nos santuários subterrâneos do Tibete sobre o qual foi erguida 'A Doutrina Secreta'. A cosmogênese das Sete Rondas planetárias e as Raças-Raízes.",
        "pdfUrl": "livros_pdf/02_O_Livro_de_Dzyan_Blavatsky.pdf"
    },
    {
        "id": 24,
        "title": "A Doutrina Secreta: Cosmogênese & Antropogênese",
        "author": "Helena Petrovna Blavatsky",
        "category": "Filosofia Oculta",
        "rarity": "Manuscrito Sagrado",
        "pages": 850,
        "cover": "assets/books/a-doutrina-secreta.jpg",
        "tier": "master",
        "desc": "A sintese da ciência, religião e filosofia antiga. A história oculta do planeta Terra, a constituição setenária do homem e os registros akáshicos da evolução espiritual.",
        "pdfUrl": "livros_pdf/02_O_Livro_de_Dzyan_Blavatsky.pdf"
    },
    {
        "id": 25,
        "title": "A Voz do Silêncio",
        "author": "Helena P. Blavatsky",
        "category": "Filosofia Oculta",
        "rarity": "Essencial",
        "pages": 115,
        "cover": "assets/books/a-voz-do-silencio.jpg",
        "tier": "basico",
        "desc": "Preceitos iniciáticos extraídos do 'Livro dos Preceitos de Ouro'. As três salas da consciência e o caminho do Bodhisattva que renuncia ao Nirvana para servir à humanidade.",
        "pdfUrl": "livros_pdf/44_O_Que_E_O_Espiritismo_Kardec.pdf"
    },
    {
        "id": 26,
        "title": "Alquimia: Significado e Imagem Cósmica",
        "author": "Titus Burckhardt",
        "category": "Hermetismo & Cabala",
        "rarity": "Essencial",
        "pages": 230,
        "cover": "assets/books/AlquimiaTitus.jpg",
        "tier": "basico",
        "desc": "O estudo tradicional da transmutação dos metais como alegoria espiritual da iluminação interior. Explicação dos símbolos do Enxofre, Mercúrio e Sal e a união dos opostos.",
        "pdfUrl": "livros_pdf/23_Alquimia_Significado_e_Imagem_Titus_Burckhardt.pdf"
    },
    {
        "id": 27,
        "title": "Atalanta Fugiens: Os 50 Emblemas da Alquimia",
        "author": "Michael Maier (1617)",
        "category": "Hermetismo & Cabala",
        "rarity": "Raríssimo",
        "pages": 310,
        "cover": "assets/books/atalanta-fugiens.jpg",
        "tier": "master",
        "desc": "O mais belo tratado multimídia do Renascimento: contém 50 gravuras esotéricas em cobre, 50 fugas musicais e epigramas poéticos revelando o segredo da Pedra Filosofal.",
        "pdfUrl": "livros_pdf/24_Atalanta_Fugiens_Michael_Maier.pdf"
    },
    {
        "id": 28,
        "title": "Splendor Solis: O Esplendor do Sol",
        "author": "Salomon Trismosin (1582)",
        "category": "Hermetismo & Cabala",
        "rarity": "Manuscrito Sagrado",
        "pages": 180,
        "cover": "assets/books/splendor-solis.jpg",
        "tier": "master",
        "desc": "O mais célebre manuscrito iluminado de alquimia. As 22 gravuras clássicas que descrevem o nascimento do Rei Filosófico, o banho dos metais e o pássaro de Hermes.",
        "pdfUrl": "livros_pdf/16_Splendor_Solis_Salomon_Trismosin.pdf"
    },
    {
        "id": 29,
        "title": "A Tradição Hermética",
        "author": "Julius Evola",
        "category": "Hermetismo & Cabala",
        "rarity": "Raríssimo",
        "pages": 260,
        "cover": "assets/books/tradicao-hermetica.jpeg",
        "tier": "master",
        "desc": "A restauração da Alquimia como disciplina puramente espiritual e iniciática da nobreza espiritual. A superação do condicionamento humano e a conquista da Imortalidade Solar.",
        "pdfUrl": "livros_pdf/27_A_Tradicao_Hermetica_Julius_Evola.pdf"
    },
    {
        "id": 30,
        "title": "Fama Fraternitatis & Os Manifestos Rosacruzes",
        "author": "Fraternitas Rosae Crucis (Kassel, 1614)",
        "category": "Ordens & Sociedades Secretas",
        "rarity": "Essencial",
        "pages": 140,
        "cover": "assets/books/fama-fraternitatis.jpg",
        "tier": "basico",
        "desc": "Os manifestos que abalaram a Europa renascentista. A história da abertura do túmulo misterioso de Christian Rosenkreuz e o convite à Reforma Universal das ciências e da fé.",
        "pdfUrl": "livros_pdf/47_O_Simbolismo_da_Cruz_Rene_Guenon.pdf"
    },
    {
        "id": 31,
        "title": "Moral e Dogma do Rito Escocês",
        "author": "Albert Pike (Soberano Grande Comendador 33)",
        "category": "Ordens & Sociedades Secretas",
        "rarity": "Manuscrito Sagrado",
        "pages": 860,
        "cover": "assets/books/moral-e-dogma.jpg",
        "tier": "master",
        "desc": "O monumento do pensamento filosófico do Supremo Conselho 33 de Charleston. As leituras e instruções morais, kabalísticas e astrológicas do Grau 1 ao Grau 33.",
        "pdfUrl": "livros_pdf/05_Moral_e_Dogma_Albert_Pike.pdf"
    },
    {
        "id": 32,
        "title": "A Ação Secreta e os Mistérios da Maçonaria",
        "author": "Tradição Escocesa & Simbólica",
        "category": "Ordens & Sociedades Secretas",
        "rarity": "Essencial",
        "pages": 190,
        "cover": "assets/books/acao-secreta-maconaria.jpeg",
        "tier": "basico",
        "desc": "Estudo aprofundado dos símbolos do Templo de Salomão, a Lenda do Mestre Hiram Abiff, o esquadro, o compasso e as leis que regem as iniciações operativas e especulativas.",
        "pdfUrl": "livros_pdf/32_A_Acao_Secreta_da_Maconaria.pdf"
    },
    {
        "id": 33,
        "title": "Os Escritos Originais dos Iluminados da Baviera",
        "author": "Adam Weishaupt (Ingolstadt, 1776)",
        "category": "Ordens & Sociedades Secretas",
        "rarity": "Proibido",
        "pages": 310,
        "cover": "assets/books/iliuminati.png",
        "tier": "master",
        "desc": "Os documentos apreendidos pelo governo da Baviera revelando a estrutura interna, os codinomes clássicos e as diretrizes de infiltração social e política da Ordem dos Iluminados.",
        "pdfUrl": "livros_pdf/19_Os_Iluminados_da_Baviera_Adam_Weishaupt.pdf"
    },
    {
        "id": 34,
        "title": "Sociedades Secretas e seu Poder no Século XX",
        "author": "Jan van Helsing",
        "category": "Ordens & Sociedades Secretas",
        "rarity": "Proibido",
        "pages": 370,
        "cover": "assets/books/sociedades-secretas.webp",
        "tier": "master",
        "desc": "O livro banido em diversos países europeus. Investiga as ligações entre a finança internacional, a Sociedade Vril, a Thule Gesellschaft e os planos para a Nova Ordem Mundial.",
        "pdfUrl": "livros_pdf/20_Sociedades_Secretas_Jan_van_Helsing.pdf"
    },
    {
        "id": 35,
        "title": "A Verdadeira História do Clube Bilderberg",
        "author": "Daniel Estulin",
        "category": "Ordens & Sociedades Secretas",
        "rarity": "Essencial",
        "pages": 320,
        "cover": "assets/books/clube-bilderberg.jpeg",
        "tier": "basico",
        "desc": "Investigação jornalística definitiva sobre as reuniões anuais fechadas dos líderes financeiros, presidentes e magnatas da mídia que decidem o destino econômico do globo.",
        "pdfUrl": "livros_pdf/28_A_Verdadeira_Historia_do_Clube_Bilderberg_Estulin.pdf"
    },
    {
        "id": 36,
        "title": "A Sociedade Thule e o Ocultismo",
        "author": "Arquivos Secretos de Munique",
        "category": "Ordens & Sociedades Secretas",
        "rarity": "Proibido",
        "pages": 240,
        "cover": "assets/books/thulegesellschaft.jpg",
        "tier": "master",
        "desc": "A história das origens esotéricas do pangermanismo místico, a busca por Hiperbórea, as expedições secretas ao Tibete pela Ahnenerbe e os rituais de consagração de sangue.",
        "pdfUrl": "livros_pdf/29_Sociedade_Thule_e_Ocultismo.pdf"
    },
    {
        "id": 37,
        "title": "Passaporte para Magonia",
        "author": "Jacques Vallée (Astrofísico)",
        "category": "Filosofia Oculta",
        "rarity": "Raríssimo",
        "pages": 360,
        "cover": "assets/books/magonia.jpg",
        "tier": "basico",
        "desc": "A tese revolucionária que conecta os fenômenos aéreos modernos às antigas lendas de fadas, duendes, súcubos e demônios. O sistema de controle psíquico da consciência humana.",
        "pdfUrl": "livros_pdf/30_Passaporte_para_Magonia_Jacques_Vallee.pdf"
    },
    {
        "id": 38,
        "title": "Sonhos Lúcidos & Desdobramento Astral",
        "author": "Dr. Stephen LaBerge (Stanford University)",
        "category": "Filosofia Oculta",
        "rarity": "Essencial",
        "pages": 280,
        "cover": "assets/books/sonhos-lucidos.png",
        "tier": "basico",
        "desc": "A comprovação científica do despertar da consciência durante o sono REM. Protocolos rigorosos de indução mnemônica, verificação de realidade e estabilização do plano onírico.",
        "pdfUrl": "livros_pdf/31_Sonhos_Lucidos_Stephen_LaBerge.pdf"
    },
    {
        "id": 39,
        "title": "A Projeção do Corpo Astral",
        "author": "Sylvan Muldoon & Hereward Carrington",
        "category": "Filosofia Oculta",
        "rarity": "Essencial",
        "pages": 310,
        "cover": "assets/books/projecao-do-corpo-astral.jpg",
        "tier": "basico",
        "desc": "O clássico definitivo da experiência fora do corpo (OBE). Descrição anatômica do cordão de prata, dos sintomas de exteriorização e dos métodos de controle da energia sutil.",
        "pdfUrl": "livros_pdf/31_Sonhos_Lucidos_Stephen_LaBerge.pdf"
    },
    {
        "id": 40,
        "title": "Os Ensinamentos Secretos de Todas as Épocas",
        "author": "Manly Palmer Hall (Grau 33)",
        "category": "Filosofia Oculta",
        "rarity": "Manuscrito Sagrado",
        "pages": 740,
        "cover": "assets/books/33_Os_Ensinamentos_Secretos_Manly_Hall.pdf.png",
        "tier": "master",
        "desc": "A enciclopédia definitiva de simbolismo maçônico, cabalístico, órfico, pitagórico e rosacruz. A história esotérica da civilização humana ricamente ilustrada e documentada.",
        "pdfUrl": "livros_pdf/33_Os_Ensinamentos_Secretos_Manly_Hall.pdf"
    },
    {
        "id": 41,
        "title": "O Livro de Thoth: O Tarot Egípcio e a Cabala",
        "author": "Aleister Crowley (Mestre Therion)",
        "category": "Grimórios & Alta Magia",
        "rarity": "Raríssimo",
        "pages": 350,
        "cover": "assets/books/thoth.jpg",
        "tier": "master",
        "desc": "O tratado supremo sobre a Árvore da Vida e os 78 arcanos pintados por Lady Frieda Harris. A síntese cabalística, astrológica e telemática dos mistérios do Novo Aeon.",
        "pdfUrl": "livros_pdf/13_O_Livro_de_Thoth_Tarot_Crowley.pdf"
    },
    {
        "id": 42,
        "title": "Liber AL vel Legis: O Livro da Lei",
        "author": "Recebido por Aleister Crowley (Cairo, 1904)",
        "category": "Grimórios & Alta Magia",
        "rarity": "Proibido",
        "pages": 130,
        "cover": "assets/books/liber.png",
        "tier": "master",
        "desc": "O manuscrito ditado pelo mensageiro Aiwass que inaugurou o Aeon de Hórus: 'Faze o que tu queres há de ser tudo da Lei. Amor é a lei, amor sob vontade'.",
        "pdfUrl": "livros_pdf/08_O_Livro_da_Lei_Liber_AL_vel_Legis_Crowley.pdf"
    },
    {
        "id": 43,
        "title": "Liber Null & Psiconauta: Magia do Caos",
        "author": "Peter J. Carroll (IOT)",
        "category": "Grimórios & Alta Magia",
        "rarity": "Raríssimo",
        "pages": 240,
        "cover": "assets/books/livernull.jpg",
        "tier": "master",
        "desc": "A fundação do movimento de Chaos Magick contemporâneo. Desconstrução de dogmas dogmáticos, criação de servidores astrais, sigilização austiniana e controle da mente gnóstica.",
        "pdfUrl": "livros_pdf/26_Liber_Null_e_Psiconauta_Peter_Carroll.pdf"
    },
    {
        "id": 44,
        "title": "Codex Gigas: A Bíblia do Diabo",
        "author": "Herman o Recluso (Mosteiro de Podlažice, séc. XIII)",
        "category": "Grimórios & Alta Magia",
        "rarity": "Manuscrito Sagrado",
        "pages": 624,
        "cover": "assets/books/codex-gigas.jpg",
        "tier": "master",
        "desc": "O maior manuscrito medieval sobrevivente do mundo. Contém a Bíblia Vulgata completa, tratados médicos medievais, exorcismos litúrgicos e o célebre retrato de corpo inteiro de Lúcifer.",
        "pdfUrl": "https://archive.org/download/CodexGigasDevilsBible_201804/Codex%20Gigas.pdf"
    },
    {
        "id": 45,
        "title": "O Despertar dos Mágicos: Realismo Fantástico",
        "author": "Louis Pauwels & Jacques Bergier",
        "category": "Filosofia Oculta",
        "rarity": "Essencial",
        "pages": 480,
        "cover": "assets/books/a-doutrina-secreta.jpg",
        "tier": "basico",
        "desc": "A obra que sacudiu a intelectualidade mundial ao explorar os limites entre física atômica, sociedades secretas, nazismo esotérico e as civilizações desaparecidas do passado.",
        "pdfUrl": "livros_pdf/34_O_Despertar_Dos_Magos_Pauwels_Bergier.pdf"
    },
    {
        "id": 46,
        "title": "Os Arquétipos e o Inconsciente Coletivo",
        "author": "Carl Gustav Jung",
        "category": "Filosofia Oculta",
        "rarity": "Essencial",
        "pages": 440,
        "cover": "assets/books/sefer.jpg",
        "tier": "basico",
        "desc": "A exploração definitiva da Sombra, da Anima, do Animus e do Self. Como os mitos ancestrais e os símbolos herméticos emergem espontaneamente nos sonhos da humanidade.",
        "pdfUrl": "livros_pdf/37_Os_Arquetipos_e_o_Inconsciente_Coletivo_Jung.pdf"
    },
    {
        "id": 47,
        "title": "O Simbolismo da Cruz & Tradição Primordial",
        "author": "René Guénon",
        "category": "Filosofia Oculta",
        "rarity": "Essencial",
        "pages": 210,
        "cover": "assets/books/tradicao-hermetica.jpeg",
        "tier": "basico",
        "desc": "A interpretação metafísica definitiva do símbolo universal da Cruz segundo o Vedanta, o Sufismo e a Maçonaria Operativa. A hierarquia dos múltiplos estados do Ser.",
        "pdfUrl": "livros_pdf/47_O_Simbolismo_da_Cruz_Rene_Guenon.pdf"
    },
    {
        "id": 48,
        "title": "O Livro dos Espíritos: Filosofia Espiritualista",
        "author": "Allan Kardec",
        "category": "Filosofia Oculta",
        "rarity": "Essencial",
        "pages": 380,
        "cover": "assets/books/CAIBALION.jpg",
        "tier": "basico",
        "desc": "As 1019 perguntas e respostas fundamentais sobre a imortalidade da alma, a lei de causa e efeito, a pluralidade dos mundos habitados e a comunicabilidade dos espíritos.",
        "pdfUrl": "livros_pdf/38_O_Livro_dos_Espiritos_Allan_Kardec.pdf"
    },
    {
        "id": 49,
        "title": "O Livro dos Médiuns: Guia Prático",
        "author": "Allan Kardec",
        "category": "Filosofia Oculta",
        "rarity": "Essencial",
        "pages": 410,
        "cover": "assets/books/CAIBALION.jpg",
        "tier": "basico",
        "desc": "O tratado experimental sobre a mecânica das manifestações psíquicas, psicografia, desobsessão e a classificação metódica de todas as faculdades medianímicas.",
        "pdfUrl": "livros_pdf/39_O_Livro_dos_Mediuns_Allan_Kardec.pdf"
    },
    {
        "id": 50,
        "title": "O Livro dos Jubileus: A Pequena Gênesis",
        "author": "Cânone Etíope & Manuscritos de Qumran",
        "category": "Gnosticismo & Apócrifos",
        "rarity": "Raríssimo",
        "pages": 190,
        "cover": "assets/books/enoque.png",
        "tier": "basico",
        "desc": "A história da criação do mundo dividida em períodos exatos de 49 anos revelada pelo Anjo da Presença a Moisés no Monte Sinai. Revelações sobre os segredos do tempo cósmico.",
        "pdfUrl": "livros_pdf/02_O_Livro_dos_Jubileus_Integral.pdf"
    },
    {
        "id": 51,
        "title": "O Livro dos Gigantes de Qumran",
        "author": "Fragmentos do Mar Morto",
        "category": "Gnosticismo & Apócrifos",
        "rarity": "Proibido",
        "pages": 140,
        "cover": "assets/books/enoque.png",
        "tier": "master",
        "desc": "Os textos aramaicos descobertos nas cavernas de Qumran narrando os sonhos proféticos e o terror dos gigantes Nefilim antes do Dilúvio, complementando a tradição de Enoque.",
        "pdfUrl": "livros_pdf/03_O_Livro_dos_Gigantes_Qumran.pdf"
    },
    {
        "id": 52,
        "title": "Kebra Nagast: A Glória dos Reis da Etiópia",
        "author": "Tradição Real Etíope (Séc. XIV)",
        "category": "Gnosticismo & Apócrifos",
        "rarity": "Manuscrito Sagrado",
        "pages": 260,
        "cover": "assets/books/moraledogma.jpg",
        "tier": "master",
        "desc": "A narrativa sagrada sobre como a Arca da Aliança foi transportada do Templo de Salomão em Jerusalém para Axum, na Etiópia, pelo Rei Menelik I, filho da Rainha de Sabá.",
        "pdfUrl": "livros_pdf/04_Kebra_Nagast_A_Gloria_dos_Reis.pdf"
    },
    {
        "id": 53,
        "title": "O Cânone Primitivo: Guia dos 88 Livros Sagrados",
        "author": "Acervo Bíblico Antigo",
        "category": "Gnosticismo & Apócrifos",
        "rarity": "Manuscrito Sagrado",
        "pages": 340,
        "cover": "assets/books/enoque.png",
        "tier": "basico",
        "desc": "A reconstrução completa da biblioteca bíblica antes das supressões dos concílios de Nicéia e Trento, incluindo todos os textos históricos, sapienciais e apocalípticos primitivos.",
        "pdfUrl": "livros_pdf/05_O_Canone_Primitivo_88_Livros_Guia_Completo.pdf"
    },
    {
        "id": 54,
        "title": "Mapa dos 200 Vigilantes e Linhagens dos Sentinelas",
        "author": "Estudos Herméticos de Qumran",
        "category": "Gnosticismo & Apócrifos",
        "rarity": "Raríssimo",
        "pages": 85,
        "cover": "assets/books/enoque.png",
        "tier": "master",
        "desc": "Diagrama detalhado dos 20 decanos celestiais liderados por Semjaza e Azazel, seus nomes, as ciências proibidas que transmitiram à humanidade e o destino de sua descendência.",
        "pdfUrl": "livros_pdf/06_BONUS_Mapa_dos_200_Vigilantes_e_Linhagens.pdf"
    },
    {
        "id": 55,
        "title": "Guia de Leitura Cruzada do Cânone Oculto",
        "author": "Curadoria Cúpula 33",
        "category": "Filosofia Oculta",
        "rarity": "Essencial",
        "pages": 90,
        "cover": "assets/books/a-doutrina-secreta.jpg",
        "tier": "basico",
        "desc": "Mapeamento comparativo e referências cruzadas entre os textos do Mar Morto, os Evangelhos Gnósticos e o Novo Testamento tradicional, revelando citações diretas de Enoque.",
        "pdfUrl": "livros_pdf/07_BONUS_Guia_de_Leitura_Cruzada_Novo_Testamento.pdf"
    }
];

// 2. COLEÇÕES COMPLETAS DO CÂNONE BÁSICO (500 OBRAS) E MASTER (2.500 OBRAS)
const collectionsData = [
  {
    id: "col-1",
    title: "Coleção I: O Cânone Hermético & Alquimia Alexandrina",
    totalBooks: 100,
    tier: "basico",
    category: "Hermetismo & Cabala",
    cover: "assets/books/tabua-de-esmeralda.jpg",
    desc: "100 tratados essenciais incluindo Poimandres, Asclépio, Geber, Paracelso, Turba Philosophorum, Heinrich Khunrath e os segredos da Pedra Filosofal.",
    driveUrl: "https://drive.google.com/"
  },
  {
    id: "col-2",
    title: "Coleção II: A Biblioteca Gnóstica & Evangelhos de Nag Hammadi",
    totalBooks: 100,
    tier: "basico",
    category: "Gnosticismo & Apócrifos",
    cover: "assets/books/manuscritos-nag-hammadi.jpg",
    desc: "100 textos sagrados primitivos incluindo o Evangelho de Filipe, Evangelho de Maria Madalena, Apócrifo de João, Tratado Tripartite e textos coptas.",
    driveUrl: "https://drive.google.com/"
  },
  {
    id: "col-3",
    title: "Coleção III: O Cânone dos Sentinelas & Manuscritos do Mar Morto",
    totalBooks: 100,
    tier: "basico",
    category: "Gnosticismo & Apócrifos",
    cover: "assets/books/livro-de-enoque.jpg",
    desc: "100 manuscritos das cavernas de Qumran sobre os 200 Sentinelas, a Regra da Comunidade, a Guerra dos Filhos da Luz e os Patriarcas Antediluvianos.",
    driveUrl: "https://drive.google.com/"
  },
  {
    id: "col-4",
    title: "Coleção IV: Os Mistérios da Cabala Medieval & Hebraica",
    totalBooks: 100,
    tier: "basico",
    category: "Hermetismo & Cabala",
    cover: "assets/books/o-zohar.jpg",
    desc: "100 tratados fundamentais da mística judaica: Sefer ha-Bahir (O Livro da Claridade), Portas da Luz de Gikatilla, Pardes Rimonim de Cordovero e o Zohar.",
    driveUrl: "https://drive.google.com/"
  },
  {
    id: "col-5",
    title: "Coleção V: As Origens das Ordens Secretas & Rosa-Cruz",
    totalBooks: 100,
    tier: "basico",
    category: "Ordens & Sociedades Secretas",
    cover: "assets/books/fama-fraternitatis.jpg",
    desc: "100 documentos históricos originais sobre os Cavaleiros Templários, os Manifestos Rosacruzes de Kassel, a Nova Atlântida de Bacon e a Franco-Maçonaria.",
    driveUrl: "https://drive.google.com/"
  },
  {
    id: "col-6",
    title: "Coleção Master VI: Os Arquivos Secretos do Vaticano",
    totalBooks: 600,
    tier: "master",
    category: "Grimórios & Alta Magia",
    cover: "assets/books/grandegrimorio.jpg",
    desc: "Lote supremo exclusivo contendo 600 manuscritos lacrados, bulas de Inquisição inéditas, exorcismos imperiais e grimórios ocultos sob sigilo papal.",
    driveUrl: "https://drive.google.com/"
  },
  {
    id: "col-7",
    title: "Coleção Master VII: Códices Pré-Diluvianos & Tradição Sumeriana",
    totalBooks: 400,
    tier: "master",
    category: "Gnosticismo & Apócrifos",
    cover: "assets/books/ninegates.png",
    desc: "400 textos arcaicos traduzidos de tabuletas cuneiformes sobre os Anunnaki, a Epopeia de Gilgamesh, a Lista de Reis Sumerianos e a astronomia védica.",
    driveUrl: "https://drive.google.com/"
  },
  {
    id: "col-8",
    title: "Coleção Master VIII: Alta Teurgia, Demonologia & Goetia Menor",
    totalBooks: 500,
    tier: "master",
    category: "Grimórios & Alta Magia",
    cover: "assets/books/ars-goetia.jpg",
    desc: "500 manuais raros de invocação cerimonial, selos talismânicos planetários, tratados de Pedro de Abano, Abramelin e magia enochiana de John Dee.",
    driveUrl: "https://drive.google.com/"
  },
  {
    id: "col-9",
    title: "Coleção Master IX: Rituais Ocultos da Golden Dawn & O.T.O.",
    totalBooks: 500,
    tier: "master",
    category: "Ordens & Sociedades Secretas",
    cover: "assets/books/moral-e-dogma.jpg",
    desc: "500 documentos confidenciais de iniciação mágica dos graus internos da Aurora Dourada, ritos Thelêmicos de Crowley e documentos do Supremo Conselho 33.",
    driveUrl: "https://drive.google.com/"
  }
];

// 3. FREQUÊNCIAS DE SOLFEGGIO
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

// 4. ROADMAP INICIÁTICO DOS 12 GRAUS
const roadmapData = [
  { grade: 1, title: "O Despertar da Mente Hermética", bookRef: "O Caibalion", goal: "Compreender os 7 Princípios Universais e o Princípio do Mentalismo." },
  { grade: 2, title: "A Grande Obra Alquímica", bookRef: "A Tábua de Esmeralda", goal: "Dominar o axioma 'O que está em cima é como o que está embaixo'." },
  { grade: 3, title: "O Cosmos e o Verbo Divino", bookRef: "Corpus Hermeticum", goal: "Estudar o diálogo de Poimandres sobre a mente universal." },
  { grade: 4, title: "A Árvore da Vida e as 10 Sefirot", bookRef: "A Cabala Mística", goal: "Mapear o fluxo de criação da energia cósmica na matéria." },
  { grade: 5, title: "As 32 Trilhas da Sabedoria", bookRef: "Sefer Yetzirah", goal: "Desvendar as 22 letras hebraicas primordiais como forças da criação." },
  { grade: 6, title: "A Tradição dos Sentinelas", bookRef: "O Livro de Enoque", goal: "Estudar a genealogia dos anjos caídos e o conhecimento proibido." },
  { grade: 7, title: "O Esplendor Oculto", bookRef: "O Zohar", goal: "Leitura dos segredos mais profundos da Torá e o mistério de Ein Sof." },
  { grade: 8, title: "Psicologia dos Arquétipos Ocultos", bookRef: "Arquetipos de Jung", goal: "Integrar a Sombra e os símbolos ocultos ao inconsciente desperto." },
  { grade: 9, title: "A Filosofia dos Símbolos Maçônicos", bookRef: "Moral e Dogma", goal: "Análise dos graus simbólicos e a busca pela Palavra Perdida." },
  { grade: 10, title: "O Desdobramento da Consciência", bookRef: "Sonhos Lúcidos", goal: "Prática de viagens astrais conscientes e navegação no plano sutil." },
  { grade: 11, title: "A Teurgia e a Magia Cerimonial", bookRef: "Dogma e Ritual", goal: "Estudo da Vontade Direcionada e a proteção psíquica absoluta." },
  { grade: 12, title: "O Mestre do Templo Interior", bookRef: "Splendor Solis", goal: "A transmutação final: união com a Centelha Divina e mestria na Cúpula 33." }
];

// --- 5. GESTÃO DE TIERS & AUTENTICAÇÃO ---
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
      if (countDisplay) countDisplay.textContent = "2.500+ Obras Liberadas & Frequências Ativas";
    } else {
      badge.innerHTML = '<span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-dark-700 border border-gray-700 text-gray-300"><i data-lucide="shield" class="w-3.5 h-3.5 text-gray-400"></i> ACESSO BÁSICO (500 OBRAS)</span>';
      if (countDisplay) countDisplay.textContent = "500 Obras Fundamentais Liberadas";
    }
    if (window.lucide) lucide.createIcons();
  }
}

function setUserTier(tier) {
  userTier = tier;
  localStorage.setItem('cupula33_user_tier', tier);
  updateTierUI();
  renderBooks();
  renderCollections();
  renderFrequencies();
  closeModal('profileModal');
  showToast("Nível alterado para: " + tier.toUpperCase());
}

function canUserAccess(tierRequired) {
  if (userTier === 'master') return true;
  return tierRequired === 'basico';
}

function openUpgradeModal(featureName) {
  const titleElem = document.getElementById('upgradeModalTitle');
  if (titleElem) {
    titleElem.textContent = 'Acesso Master Necessário: ' + (featureName || 'Conteúdo Exclusivo');
  }
  openModal('upgradeModal');
}

// --- 6. RENDERIZAÇÃO DOS LIVROS E COLEÇÕES ---
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
      matchTier = canUserAccess(b.tier);
    } else if (currentTierFilter === 'exclusivo_master') {
      matchTier = (b.tier === 'master');
    }
    return matchCat && matchSearch && matchTier;
  });

  const countBadge = document.getElementById('visibleBooksCount');
  if (countBadge) {
    countBadge.textContent = list.length + ' obras primordiais prontas para download';
  }

  container.innerHTML = list.map(book => {
    const isUnlocked = canUserAccess(book.tier);
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
          <img src="${book.cover}" alt="${book.title}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" onerror="this.src='assets/books/CAIBALION.jpg'">
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
                <i data-lucide="book-open" class="w-3.5 h-3.5"></i> Abrir Obra
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

function renderCollections() {
  const container = document.getElementById('collectionsGrid');
  if (!container) return;

  container.innerHTML = collectionsData.map(col => {
    const isUnlocked = canUserAccess(col.tier);
    const isMaster = (col.tier === 'master');

    return `
      <div class="glass-panel glass-panel-hover rounded-2xl p-5 border border-gold-500/20 flex flex-col justify-between relative overflow-hidden group">
        <div>
          <div class="flex items-center justify-between gap-2 mb-3">
            <span class="px-2.5 py-1 rounded-full text-[10px] font-bold tracking-wider ${isMaster ? 'bg-gold-500/20 text-gold-400 border border-gold-500/50' : 'bg-dark-700 text-gray-300 border border-gray-700'} flex items-center gap-1">
              ${isMaster ? '<i data-lucide="crown" class="w-3 h-3"></i> LOTE MASTER SUPREMO' : '<i data-lucide="shield" class="w-3 h-3"></i> LOTE BÁSICO'}
            </span>
            <span class="text-xs font-bold text-gold-400 font-cinzel">${col.totalBooks} OBRAS</span>
          </div>

          <h3 class="font-cinzel font-bold text-base text-gray-100 group-hover:text-gold-400 transition-colors mb-2">${col.title}</h3>
          <p class="text-xs text-gray-400 leading-relaxed mb-4">${col.desc}</p>
        </div>

        <div class="pt-3 border-t border-dark-700/60 flex items-center justify-between gap-3">
          ${isUnlocked ? `
            <button onclick="triggerCollectionDownload('${col.title}', '${col.driveUrl}')" class="w-full py-2.5 px-4 rounded-xl bg-gold-500/10 hover:bg-gold-500/20 border border-gold-500/40 text-gold-400 text-xs font-bold flex items-center justify-center gap-2 transition-all">
              <i data-lucide="download-cloud" class="w-4 h-4"></i> Baixar Lote Completo (Drive)
            </button>
          ` : `
            <button onclick="openUpgradeModal('${col.title}')" class="w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-gold-500 via-amber-400 to-gold-500 text-black text-xs font-black uppercase tracking-wider flex items-center justify-center gap-2 shadow-md">
              <i data-lucide="lock" class="w-4 h-4"></i> Desbloquear no Master
            </button>
          `}
        </div>
      </div>
    `;
  }).join('');

  if (window.lucide) lucide.createIcons();
}

function triggerCollectionDownload(title, url) {
  showToast("Abrindo pasta de alta velocidade de: " + title);
  window.open(url, "_blank");
}

function handleBookClick(bookId) {
  const book = booksData.find(b => b.id === bookId);
  if (!book) return;
  if (!canUserAccess(book.tier)) {
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
    coverImg.onerror = () => { coverImg.src = 'assets/books/CAIBALION.jpg'; };
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
  const link = document.createElement('a');
  link.href = book.pdfUrl;
  link.download = book.title + '.pdf';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  showToast('Download de "' + book.title + '" iniciado com sucesso!');
}

function openReader(book) {
  if (book.pdfUrl && book.pdfUrl.endsWith('.pdf')) {
    window.open(book.pdfUrl, '_blank');
  } else {
    triggerDownload(book);
  }
}

// --- 7. GERADOR DE FREQUÊNCIAS DE SOLFEGGIO ---
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

  if (tabId === 'books') {
    renderBooks();
    renderCollections();
  }
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
  renderCollections();
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
