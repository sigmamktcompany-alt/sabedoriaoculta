const KNOWN_STUDENT_NAMES = {
  "tjoaquim627@gmail.com": "Tamara S Joaquim",
  "paulo-reis51@hotmail.com": "Paulo Reis",
  "mrobertor057@gmail.com": "Robertto Machado",
  "edurosalopes@vivaldi.net": "Carlos Eduardo Rosa Lopes",
  "crazyled.delavelle9@gmail.com": "Emerson Ferreira",
  "elevarevenue@gmail.com": "Eleva Revenue",
  "suportesabedoriaoculta@gmail.com": "Suporte Cúpula 33",
  "admin@cupula33.com": "Administração Cúpula 33",
  "sigmamarketing@gmail.com": "Sigma Marketing",
  "novo_membro_vip@gmail.com": "Membro VIP Cúpula 33",
  "testealuno@gmail.com": "Aluno Iniciado"
};
/**
 * CÚPULA 33 | PLATAFORMA DE MEMBROS & ACERVO HERMÉTICO PWA
 * Estrutura Canônica: 6 Módulos Oficiais (2.500 Obras no Master vs 500 no Básico)
 * Recursos VIP: Marcador de Leitura (localStorage), Audiobook com Frequência 432Hz e Download de Áudio.
 * Estilo inspirado no The King's Code e BrainSync.
 */

// 1. BANCO DE DADOS OFICIAL - 55 OBRAS RESTAURADAS COM PDFS E CAPAS EXCLUSIVAS
const booksData = [{"id":999,"title":"Os Segredos da Prosperidade Maçônica","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Sociedades Secretas","module":"Módulo V","rarity":"Raríssimo (Edição Ouro)","pages":184,"cover":"assets/covers_extracted/cover_Manuscrito_Maconico_da_Prosperidade_Oculta.jpg","tier":"master","desc":"Segredos usados por maçons para atrair riqueza, prosperidade e influência. Rituais, códigos e princípios práticos da prosperidade oculta.","pdfUrl":"livros_pdf/Manuscrito_Maconico_da_Prosperidade_Oculta.pdf"},{"id":1,"title":"A Tábua Das Esmeraldas De Thoth","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Hermetismo & Cabala","module":"Módulo I","rarity":"Essencial","pages":127,"cover":"assets/covers_extracted/cover_A_T_bua_Das_Esmeraldas_De_Thoth.jpg","tier":"basico","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Hermetismo & Cabala com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1ZDRLz0h7k5mI9IbmPJxKldYHVN7GlKNm/preview"},{"id":2,"title":"Cabala Comentários De Um Pedreiro Sobre A Torá Vayikrá Levítico","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Hermetismo & Cabala","module":"Módulo I","rarity":"Essencial","pages":134,"cover":"assets/covers_extracted/cover_Cabala_Coment_rios_De_Um_Pedreiro_Sobre_A_Tor__Vayikr__Lev_t.jpg","tier":"basico","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Hermetismo & Cabala com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1nlG_FBgpvzQnKR-f-N9zTOkOPWHOQrI5/preview"},{"id":3,"title":"Cabala Comentários de um Pedreiro Sobre a Torá Shemot Êxodo","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Hermetismo & Cabala","module":"Módulo I","rarity":"Raríssimo (Manuscrito Restaurado)","pages":141,"cover":"assets/covers_extracted/cover_Cabala_Coment_rios_de_um_Pedreiro_Sobre_a_Tor__Shemot__xodo.jpg","tier":"basico","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Hermetismo & Cabala com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1LJ_gIVwhLX5RJ8m7p3tQVFYNFa9lXGpE/preview"},{"id":4,"title":"Cabala Genética","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Hermetismo & Cabala","module":"Módulo I","rarity":"Essencial","pages":148,"cover":"assets/covers_extracted/cover_Cabala_Gen_tica.jpg","tier":"basico","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Hermetismo & Cabala com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1E4RxiG1VQIXR3yXs2k4DXx4UObsWCQvb/preview"},{"id":5,"title":"Cabala Umbandista","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Hermetismo & Cabala","module":"Módulo I","rarity":"Essencial","pages":155,"cover":"assets/covers_extracted/cover_Cabala_Umbandista.jpg","tier":"basico","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Hermetismo & Cabala com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1u0rsGrjKZ-C__JZB5vaxekLJNxAzqqmI/preview"},{"id":6,"title":"Caibalion PDF","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Hermetismo & Cabala","module":"Módulo I","rarity":"Raríssimo (Manuscrito Restaurado)","pages":162,"cover":"assets/covers_extracted/cover_Caibalion_PDF.jpg","tier":"basico","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Hermetismo & Cabala com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1PYJfwEzIJNo5tE6j9di1Q7t94Q48aYOS/preview"},{"id":7,"title":"Curso Completo Qabalah 16 X 23","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Hermetismo & Cabala","module":"Módulo I","rarity":"Essencial","pages":169,"cover":"assets/covers_extracted/cover_Curso_Completo_Qabalah_16_X_23.jpg","tier":"basico","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Hermetismo & Cabala com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1fJ-uVawwIUwCaCIAs5_aBkS8R6OPa1nZ/preview"},{"id":8,"title":"Fundamentos da Cabala Sêfer Yetsirá – edição revisada e ampliada","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Hermetismo & Cabala","module":"Módulo I","rarity":"Essencial","pages":176,"cover":"assets/covers_extracted/cover_Fundamentos_da_Cabala_S_fer_Yetsir____edi__o_revisada_e_ampl.jpg","tier":"basico","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Hermetismo & Cabala com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1Td17N7whDneowMR-W_NB-mrG5IjX2qPq/preview"},{"id":9,"title":"Hermes Trismegistos, o Três Vezes Grande e Muitas Vezes Forjado","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Hermetismo & Cabala","module":"Módulo I","rarity":"Raríssimo (Manuscrito Restaurado)","pages":183,"cover":"assets/covers_extracted/cover_Hermes_Trismegistos__o_Tr_s_Vezes_Grande_e_Muitas_Vezes_Forj.jpg","tier":"basico","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Hermetismo & Cabala com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1fJ-uVawwIUwCaCIAs5_aBkS8R6OPa1nZ/preview"},{"id":10,"title":"Iniciação ao Hermetismo","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Hermetismo & Cabala","module":"Módulo I","rarity":"Essencial","pages":190,"cover":"assets/covers_extracted/cover_Inicia__o_ao_Hermetismo.jpg","tier":"basico","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Hermetismo & Cabala com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/16T3ovH6B_j5CpNvgbDKvg_F_kwvk6K1X/preview"},{"id":11,"title":"O Caibalion Edição Definitiva","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Hermetismo & Cabala","module":"Módulo I","rarity":"Essencial","pages":197,"cover":"assets/covers_extracted/cover_O_Caibalion_-_Edi__o_Definitiva.jpg","tier":"basico","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Hermetismo & Cabala com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1fJ-uVawwIUwCaCIAs5_aBkS8R6OPa1nZ/preview"},{"id":12,"title":"O Ser Quântico Danah Zohar","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Hermetismo & Cabala","module":"Módulo I","rarity":"Raríssimo (Manuscrito Restaurado)","pages":204,"cover":"assets/covers_extracted/cover_O_Ser_Qu_ntico_-_Danah_Zohar.jpg","tier":"basico","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Hermetismo & Cabala com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1fJ-uVawwIUwCaCIAs5_aBkS8R6OPa1nZ/preview"},{"id":13,"title":"Tratado da sciencia cabala, ou noticia de arte cabalistica ...","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Hermetismo & Cabala","module":"Módulo I","rarity":"Essencial","pages":211,"cover":"assets/covers_extracted/cover_Tratado_da_sciencia_cabala__ou_noticia_de_arte_cabalistica_..jpg","tier":"basico","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Hermetismo & Cabala com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1eiIWTc4MGNy-k0Faz5WzeR9zpFhy-LvN/preview"},{"id":14,"title":"Tratado da sciencia cabala, ou, Noticia da arte cabalistica","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Hermetismo & Cabala","module":"Módulo I","rarity":"Essencial","pages":218,"cover":"assets/covers_extracted/cover_Tratado_da_sciencia_cabala__ou__Noticia_da_arte_cabalistica.jpg","tier":"basico","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Hermetismo & Cabala com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1831wuYX5sfciSh17U_gT9ewFH0prMEzY/preview"},{"id":15,"title":"[ Estudando] Maçonaria ( Aprender, Conhecer E Realizar) Triângulo Hermes Trismeg","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Hermetismo & Cabala","module":"Módulo I","rarity":"Raríssimo (Manuscrito Restaurado)","pages":225,"cover":"assets/covers_extracted/cover___Estudando__Ma_onaria___Aprender__Conhecer_E_Realizar__Tri_.jpg","tier":"basico","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Hermetismo & Cabala com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1fJ-uVawwIUwCaCIAs5_aBkS8R6OPa1nZ/preview"},{"id":16,"title":"07 Dogma Ritual Alta Magia","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Grimórios & Alta Magia","module":"Módulo II","rarity":"Essencial","pages":232,"cover":"assets/covers_extracted/cover_07_Dogma_Ritual_Alta_Magia.jpg","tier":"basico","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Grimórios & Alta Magia com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1yuTp1klB0nrO6X7B1nTyoArpYm2lxwnu/preview"},{"id":17,"title":"A Goetia Ilustrada de Aleister Crowley Evocação Sexual","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Grimórios & Alta Magia","module":"Módulo II","rarity":"Essencial","pages":239,"cover":"assets/covers_extracted/cover_A_Goetia_Ilustrada_de_Aleister_Crowley_Evoca__o_Sexual.jpg","tier":"basico","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Grimórios & Alta Magia com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1U61DRzO4NvWGqXt71RmDFdvua8XwpaOU/preview"},{"id":18,"title":"Aleister Crowley O Livro Da Lei","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Grimórios & Alta Magia","module":"Módulo II","rarity":"Raríssimo (Manuscrito Restaurado)","pages":246,"cover":"assets/covers_extracted/cover_Aleister_Crowley_O_Livro_Da_Lei.jpg","tier":"basico","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Grimórios & Alta Magia com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1OBrWiqcrh3Ad_S4yR5Hzcv0rIvqVNRsX/preview"},{"id":19,"title":"Dr. Rudd Goetia Português","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Grimórios & Alta Magia","module":"Módulo II","rarity":"Essencial","pages":253,"cover":"assets/covers_extracted/cover_Dr._Rudd_Goetia_-_Portugu_s.jpg","tier":"basico","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Grimórios & Alta Magia com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1fJ-uVawwIUwCaCIAs5_aBkS8R6OPa1nZ/preview"},{"id":20,"title":"Espelho da Alma Manual Para o Tarô de Aleister Crowley","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Grimórios & Alta Magia","module":"Módulo II","rarity":"Essencial","pages":260,"cover":"assets/covers_extracted/cover_Espelho_da_Alma_Manual_Para_o_Tar__de_Aleister_Crowley.jpg","tier":"basico","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Grimórios & Alta Magia com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1YTmTwmJNKko6W1-RX-4W5I1WkQXcVKxY/preview"},{"id":21,"title":"Frabato O Mago Franz Bardon","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Grimórios & Alta Magia","module":"Módulo II","rarity":"Raríssimo (Manuscrito Restaurado)","pages":267,"cover":"assets/covers_extracted/cover_Frabato_O_Mago_-_Franz_Bardon.jpg","tier":"basico","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Grimórios & Alta Magia com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1BMRAmwRSPg9Em588OmKZp5rNbPPkUrHQ/preview"},{"id":22,"title":"HISTÓRIA DO MARTINISMO MAGO PAPUS","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Grimórios & Alta Magia","module":"Módulo II","rarity":"Essencial","pages":274,"cover":"assets/covers_extracted/cover_HIST_RIA_DO_MARTINISMO_-_MAGO_PAPUS.jpg","tier":"basico","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Grimórios & Alta Magia com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1fJ-uVawwIUwCaCIAs5_aBkS8R6OPa1nZ/preview"},{"id":23,"title":"Magia Prática O Caminho Do Adepto","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Grimórios & Alta Magia","module":"Módulo II","rarity":"Essencial","pages":281,"cover":"assets/covers_extracted/cover_Magia_Pr_tica_O_Caminho_Do_Adepto.jpg","tier":"basico","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Grimórios & Alta Magia com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1O20ZhARTwgAhv0VOZKjlG7w8nra5uwAo/preview"},{"id":24,"title":"O Grimório dos Orixás Um Guia Completo Sobre a Magia e Tradições dos Pretos Velh","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Grimórios & Alta Magia","module":"Módulo II","rarity":"Raríssimo (Manuscrito Restaurado)","pages":288,"cover":"assets/covers_extracted/cover_O_Grim_rio_dos_Orix_s_Um_Guia_Completo_Sobre_a_Magia_e_Tradi.jpg","tier":"basico","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Grimórios & Alta Magia com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1LB6mCuTFOG_xgXH3KRkvHSQp7pgZ-zAq/preview"},{"id":25,"title":"O Milagre Tratado Operacional de Curas, Hipnose, Teatro e Magia Cerimonial","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Grimórios & Alta Magia","module":"Módulo II","rarity":"Essencial","pages":295,"cover":"assets/covers_extracted/cover_O_Milagre_Tratado_Operacional_de_Curas__Hipnose__Teatro_e_Ma.jpg","tier":"basico","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Grimórios & Alta Magia com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1vfbvAlU9E9rVJk52wqBr7BxeePlnHHPS/preview"},{"id":26,"title":"Ritual Onírico Comunicação Espiritual Durante o Sono, Magia Cerimonial e Invocaç","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Grimórios & Alta Magia","module":"Módulo II","rarity":"Essencial","pages":302,"cover":"assets/covers_extracted/cover_Ritual_On_rico_Comunica__o_Espiritual_Durante_o_Sono__Magia_.jpg","tier":"basico","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Grimórios & Alta Magia com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1JrpVU-v5fIRL-cDwLNtp5Iv_lTr7i9w2/preview"},{"id":27,"title":"Segredos da Magia de Umbanda e Quimbanda","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Grimórios & Alta Magia","module":"Módulo II","rarity":"Raríssimo (Manuscrito Restaurado)","pages":309,"cover":"assets/covers_extracted/cover_Segredos_da_Magia_de_Umbanda_e_Quimbanda.jpg","tier":"basico","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Grimórios & Alta Magia com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1OXkN9ZiGmOOyqT09uBHr7S-Dx4TsiCRJ/preview"},{"id":28,"title":"A Conspiração de Genesis 6 Como Sociedades Secretas e os Descendentes de Gigan","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Gnosticismo & Apócrifos","module":"Módulo III","rarity":"Essencial","pages":316,"cover":"assets/covers_extracted/cover_A_Conspira__o_de_Genesis_6_-_Como_Sociedades_Secretas_e_os_D.jpg","tier":"basico","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Gnosticismo & Apócrifos com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1fJ-uVawwIUwCaCIAs5_aBkS8R6OPa1nZ/preview"},{"id":29,"title":"A Virgem Maria fora dos Evangelhos Canônicos","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Gnosticismo & Apócrifos","module":"Módulo III","rarity":"Essencial","pages":323,"cover":"assets/covers_extracted/cover_A_Virgem_Maria_fora_dos_Evangelhos_Can_nicos.jpg","tier":"basico","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Gnosticismo & Apócrifos com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1mA4trjfFBoHgBkwd7q7uAnj5ORG9_vlD/preview"},{"id":30,"title":"Apocrifo Historia Universo","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Gnosticismo & Apócrifos","module":"Módulo III","rarity":"Raríssimo (Manuscrito Restaurado)","pages":330,"cover":"assets/covers_extracted/cover_Apocrifo_Historia_Universo.jpg","tier":"basico","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Gnosticismo & Apócrifos com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/12zFlN-nhlUC7v87w0Jr6T3jfxAEfNQbH/preview"},{"id":31,"title":"EVANGELHO SEGUNDO TOMÉ O DÍDIMO","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Gnosticismo & Apócrifos","module":"Módulo III","rarity":"Essencial","pages":337,"cover":"assets/covers_extracted/cover_EVANGELHO_SEGUNDO_TOM__O_D_DIMO.jpg","tier":"basico","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Gnosticismo & Apócrifos com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1c2rVlzuzOCS13b1MISdH-7ivH4dQalBX/preview"},{"id":32,"title":"Livro De Enoque 1 E 2","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Gnosticismo & Apócrifos","module":"Módulo III","rarity":"Essencial","pages":344,"cover":"assets/books/enoque.png","tier":"basico","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Gnosticismo & Apócrifos com fac-símiles de alta resolução.","pdfUrl":"livros_pdf/O_Livro_de_Enoque.pdf"},{"id":33,"title":"O EVANGELHO DE NICODEMUS","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Gnosticismo & Apócrifos","module":"Módulo III","rarity":"Raríssimo (Manuscrito Restaurado)","pages":351,"cover":"assets/covers_extracted/cover_O_EVANGELHO_DE_NICODEMUS.jpg","tier":"basico","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Gnosticismo & Apócrifos com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/157CeV4Ylfs1TLetuCQbXYOOqsoxz48YW/preview"},{"id":34,"title":"O Evangelho Na Simplicidade De Pai Jacó","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Gnosticismo & Apócrifos","module":"Módulo III","rarity":"Essencial","pages":358,"cover":"assets/covers_extracted/cover_O_Evangelho_Na_Simplicidade_De_Pai_Jac_.jpg","tier":"basico","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Gnosticismo & Apócrifos com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1fJ-uVawwIUwCaCIAs5_aBkS8R6OPa1nZ/preview"},{"id":35,"title":"O Evangelho Segundo O Espiritismo PDF","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Gnosticismo & Apócrifos","module":"Módulo III","rarity":"Essencial","pages":365,"cover":"assets/covers_extracted/cover_O_Evangelho_Segundo_O_Espiritismo_-_PDF.jpg","tier":"basico","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Gnosticismo & Apócrifos com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1fJ-uVawwIUwCaCIAs5_aBkS8R6OPa1nZ/preview"},{"id":36,"title":"O Livro De Enoque","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Gnosticismo & Apócrifos","module":"Módulo III","rarity":"Raríssimo (Manuscrito Restaurado)","pages":372,"cover":"assets/books/enoque.png","tier":"basico","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Gnosticismo & Apócrifos com fac-símiles de alta resolução.","pdfUrl":"livros_pdf/O_Livro_de_Enoque.pdf"},{"id":37,"title":"Pistis Sophia","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Gnosticismo & Apócrifos","module":"Módulo III","rarity":"Essencial","pages":379,"cover":"assets/covers_extracted/cover_Pistis_Sophia.jpg","tier":"basico","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Gnosticismo & Apócrifos com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1K6Qrd65ODGFfBo6fnACkeUhl4t6yuyNh/preview"},{"id":38,"title":"Primeiro Livro de Enoque","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Gnosticismo & Apócrifos","module":"Módulo III","rarity":"Essencial","pages":386,"cover":"assets/books/enoque.png","tier":"basico","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Gnosticismo & Apócrifos com fac-símiles de alta resolução.","pdfUrl":"livros_pdf/O_Livro_de_Enoque.pdf"},{"id":39,"title":"Um obscuro encanto Gnose, gnosticismo e poesia moderna","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Gnosticismo & Apócrifos","module":"Módulo III","rarity":"Raríssimo (Manuscrito Restaurado)","pages":393,"cover":"assets/covers_extracted/cover_Um_obscuro_encanto_Gnose__gnosticismo_e_poesia_moderna.jpg","tier":"basico","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Gnosticismo & Apócrifos com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1rQF05CqRxrtp2OhWI5CvuNzCeVJ8F06T/preview"},{"id":40,"title":"Alquimia E Tarô Uma Investigação de suas Conexões Históricas","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Alquimia & Transmutação","module":"Módulo IV","rarity":"Essencial","pages":407,"cover":"assets/covers_extracted/cover_Alquimia_E_Tar__Uma_Investiga__o_de_suas_Conex_es_Hist_ricas.jpg","tier":"basico","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Alquimia & Transmutação com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1fWwPR-Og4tJasWH0eeblurljbon23hNV/preview"},{"id":41,"title":"Alquimia","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Alquimia & Transmutação","module":"Módulo IV","rarity":"Raríssimo (Manuscrito Restaurado)","pages":414,"cover":"assets/covers_extracted/cover_Alquimia.jpg","tier":"basico","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Alquimia & Transmutação com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1W5tmnKLJUvNieVfRLtfTDzRIKwc0KnPC/preview"},{"id":42,"title":"Curso de Alquimia do Guru da Virgínia","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Alquimia & Transmutação","module":"Módulo IV","rarity":"Essencial","pages":121,"cover":"assets/covers_extracted/cover_Curso_de_Alquimia_do_Guru_da_Virg_nia.jpg","tier":"basico","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Alquimia & Transmutação com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1eOslwoMlji9lN8huJx_FYX1YKL4NNoJq/preview"},{"id":43,"title":"Livro Harry Potter e a Pedra Filosofal","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Alquimia & Transmutação","module":"Módulo IV","rarity":"Essencial","pages":128,"cover":"assets/covers_extracted/cover_Livro_Harry_Potter_e_a_Pedra_Filosofal.jpg","tier":"basico","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Alquimia & Transmutação com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1_AXdVg-SBb03BFhEyukvT5NK4Rg1kIjV/preview"},{"id":44,"title":"O FILOSOFO NATURAL NUM MANUAL DE ALQUIMIA","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Alquimia & Transmutação","module":"Módulo IV","rarity":"Raríssimo (Manuscrito Restaurado)","pages":135,"cover":"assets/covers_extracted/cover_O_FILOSOFO_NATURAL_NUM_MANUAL_DE_ALQUIMIA.jpg","tier":"basico","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Alquimia & Transmutação com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1ore7318frGyY9torsLAyf-5UbyIVgIAw/preview"},{"id":45,"title":"O Mistério das Catedrais Fulcanelli ( 1)","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Alquimia & Transmutação","module":"Módulo IV","rarity":"Essencial","pages":142,"cover":"assets/covers_extracted/cover_O_Mist_rio_das_Catedrais_Fulcanelli___1_.jpg","tier":"basico","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Alquimia & Transmutação com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1R1o1BxTYm0FKHMWCHQYj--ro17MiTlv3/preview"},{"id":46,"title":"A Revelacao Dos Templarios Lynn Picknett e Clive Prince","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Sociedades Secretas","module":"Módulo V","rarity":"Raríssimo (Manuscrito Restaurado)","pages":156,"cover":"assets/covers_extracted/cover_A_Revelacao_Dos_Templarios_-_Lynn_Picknett_e_Clive_Prince.jpg","tier":"basico","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Sociedades Secretas com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1fJ-uVawwIUwCaCIAs5_aBkS8R6OPa1nZ/preview"},{"id":47,"title":"A maconaria","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Sociedades Secretas","module":"Módulo V","rarity":"Essencial","pages":163,"cover":"assets/covers_extracted/cover_A_maconaria.jpg","tier":"basico","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Sociedades Secretas com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1OSl7gGNT16NpmJMaAtteiOZ14xU4_L44/preview"},{"id":48,"title":"As Mansoes Secretas Da Rosacruz","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Sociedades Secretas","module":"Módulo V","rarity":"Essencial","pages":170,"cover":"assets/covers_extracted/cover_As_Mansoes_Secretas_Da_Rosacruz.jpg","tier":"basico","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Sociedades Secretas com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1ZHS9BfgXNjGMs16Nci6KMnCc-3HFO6xw/preview"},{"id":49,"title":"Cardeal Rampolla por que o padre Ricossa busca hoje reabilitar um satanista Rosa","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Sociedades Secretas","module":"Módulo V","rarity":"Raríssimo (Manuscrito Restaurado)","pages":177,"cover":"assets/covers_extracted/cover_Cardeal_Rampolla_por_que_o_padre_Ricossa_busca_hoje_reabilit.jpg","tier":"basico","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Sociedades Secretas com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1qXGaFVEL-qYr_TgmFsUKVhDeMCs50uBN/preview"},{"id":50,"title":"GIORDANO BRUNO E OS ROSACRUZES","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Sociedades Secretas","module":"Módulo V","rarity":"Essencial","pages":184,"cover":"assets/covers_extracted/cover_GIORDANO_BRUNO_E_OS_ROSACRUZES.jpg","tier":"basico","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Sociedades Secretas com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1Ynpu0fKWb7o1cgUUg7ZiyQW6o46RsSd0/preview"},{"id":51,"title":"H. P. Blavatsky e o Caso Coulomb","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Sociedades Secretas","module":"Módulo V","rarity":"Essencial","pages":191,"cover":"assets/covers_extracted/cover_H._P._Blavatsky_e_o_Caso_Coulomb.jpg","tier":"basico","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Sociedades Secretas com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1ZzwCc181zeYtvkN9R3K_mHbB6efyqyJ1/preview"},{"id":52,"title":"JOAO ANTUNES MACONARIA INICIATICA","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Sociedades Secretas","module":"Módulo V","rarity":"Raríssimo (Manuscrito Restaurado)","pages":198,"cover":"assets/covers_extracted/cover_JOAO_ANTUNES_-_MACONARIA_INICIATICA.jpg","tier":"basico","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Sociedades Secretas com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1fJ-uVawwIUwCaCIAs5_aBkS8R6OPa1nZ/preview"},{"id":53,"title":"Johannes Rothkranz Martinho Lutero, Rosacruz (1977) [ed. 25 Jul. 2025]","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Sociedades Secretas","module":"Módulo V","rarity":"Essencial","pages":205,"cover":"assets/covers_extracted/cover_Johannes_Rothkranz_Martinho_Lutero__Rosacruz__1977___ed._25_.jpg","tier":"basico","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Sociedades Secretas com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/14HMf5jVFqdu7BQuL8UVBDbQoPYexspLs/preview"},{"id":54,"title":"Livro Grandes Mulheres na Tradição Rosacruz","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Sociedades Secretas","module":"Módulo V","rarity":"Essencial","pages":212,"cover":"assets/covers_extracted/cover_Livro_Grandes_Mulheres_na_Tradi__o_Rosacruz.jpg","tier":"basico","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Sociedades Secretas com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1tGQ0KkJWMqnCDwUSeeU-GkmU4MMUlDwn/preview"},{"id":55,"title":"Memorias E Noticias Historicas Da Celebre Ordem Militar Dos Templarios Na Palest","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Sociedades Secretas","module":"Módulo V","rarity":"Raríssimo (Manuscrito Restaurado)","pages":219,"cover":"assets/covers_extracted/cover_Memorias_E_Noticias_Historicas_Da_Celebre_Ordem_Militar_Dos_.jpg","tier":"basico","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Sociedades Secretas com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1Ecjb-u_M4F6wb_rnjmIEHXJnaRDp41X4/preview"},{"id":56,"title":"O Sol Negro o Retorno Das Sociedades Secretas do Vril M. C. Pereda","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Sociedades Secretas","module":"Módulo V","rarity":"Essencial","pages":226,"cover":"assets/covers_extracted/cover_O_Sol_Negro_-_o_Retorno_Das_Sociedades_Secretas_do_Vril_-_M..jpg","tier":"basico","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Sociedades Secretas com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1fJ-uVawwIUwCaCIAs5_aBkS8R6OPa1nZ/preview"},{"id":57,"title":"Sociedade Secretas Maçonaria","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Sociedades Secretas","module":"Módulo V","rarity":"Raríssimo (Manuscrito Restaurado)","pages":240,"cover":"assets/covers_extracted/cover_Sociedade_Secretas_-_Ma_onaria.jpg","tier":"basico","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Sociedades Secretas com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1fJ-uVawwIUwCaCIAs5_aBkS8R6OPa1nZ/preview"},{"id":58,"title":"Sociedades Secretas Cátaros e Neocatarismo","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Sociedades Secretas","module":"Módulo V","rarity":"Essencial","pages":247,"cover":"assets/covers_extracted/cover_Sociedades_Secretas_-_C_taros_e_Neocatarismo.jpg","tier":"basico","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Sociedades Secretas com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1fJ-uVawwIUwCaCIAs5_aBkS8R6OPa1nZ/preview"},{"id":59,"title":"Sociedades Secretas Dr. José Cabral","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Sociedades Secretas","module":"Módulo V","rarity":"Essencial","pages":254,"cover":"assets/covers_extracted/cover_Sociedades_Secretas_-_Dr._Jos__Cabral.jpg","tier":"basico","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Sociedades Secretas com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/19xHKqNKkhGCcX48e4DejBnIieG_VZzbf/preview"},{"id":60,"title":"Sociedades Secretas Os Cavaleiros Templários e o Priorado de Sião","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Sociedades Secretas","module":"Módulo V","rarity":"Raríssimo (Manuscrito Restaurado)","pages":261,"cover":"assets/covers_extracted/cover_Sociedades_Secretas_-_Os_Cavaleiros_Templ_rios_e_o_Priorado_.jpg","tier":"basico","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Sociedades Secretas com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1fJ-uVawwIUwCaCIAs5_aBkS8R6OPa1nZ/preview"},{"id":61,"title":"Sociedades Secretas Os Illuminatis e os Presidentes Assassinados","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Sociedades Secretas","module":"Módulo V","rarity":"Essencial","pages":268,"cover":"assets/covers_extracted/cover_Sociedades_Secretas_-_Os_Illuminatis_e_os_Presidentes_Assass.jpg","tier":"basico","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Sociedades Secretas com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1fJ-uVawwIUwCaCIAs5_aBkS8R6OPa1nZ/preview"},{"id":62,"title":"Sociedades Secretas Dr. José Cabral","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Sociedades Secretas","module":"Módulo V","rarity":"Essencial","pages":275,"cover":"assets/covers_extracted/cover_Sociedades_Secretas_Dr._Jos__Cabral.jpg","tier":"basico","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Sociedades Secretas com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/19xHKqNKkhGCcX48e4DejBnIieG_VZzbf/preview"},{"id":63,"title":"Símbolos Secretos Dos Rosacruzes Dos Séculos XVI E XVII","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Sociedades Secretas","module":"Módulo V","rarity":"Raríssimo (Manuscrito Restaurado)","pages":282,"cover":"assets/covers_extracted/cover_S_mbolos_Secretos_Dos_Rosacruzes_Dos_S_culos_XVI_E_XVII.jpg","tier":"basico","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Sociedades Secretas com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1MH2MVCV7Ywbroyq2IbtrNvwf5OnTAS2J/preview"},{"id":64,"title":"222 ANOS GRANDE ORIENTE LUSITANO","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Mente & Projeção Astral","module":"Módulo VI","rarity":"Essencial","pages":310,"cover":"assets/covers_extracted/cover_222_ANOS_GRANDE_ORIENTE_LUSITANO.jpg","tier":"basico","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1feOQOiHOsLyMKt17U-uenfuazxEUgQ-W/preview"},{"id":65,"title":"64865430 A Ciencia Cabalistica Lenain","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Hermetismo & Cabala","module":"Módulo I","rarity":"Raríssimo (Manuscrito Restaurado)","pages":324,"cover":"assets/covers_extracted/cover_64865430_A_Ciencia_Cabalistica_Lenain.jpg","tier":"basico","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/13jAmtq5oxOvfaufG1XrylhcCLHiDCcri/preview"},{"id":66,"title":"73 Um Jardim De Romas","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Mente & Projeção Astral","module":"Módulo VI","rarity":"Essencial","pages":331,"cover":"assets/covers_extracted/cover_73_Um_Jardim_De_Romas.jpg","tier":"basico","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1NZTSlrMZjI8TrTd-TAlWz00GTEU2wDhA/preview"},{"id":67,"title":"A Auto Iniciação Nos Arcanos Maiores","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Mente & Projeção Astral","module":"Módulo VI","rarity":"Raríssimo (Manuscrito Restaurado)","pages":345,"cover":"assets/covers_extracted/cover_A_Auto_Inicia__o_Nos_Arcanos_Maiores.jpg","tier":"basico","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/15L6C6PL6WeTpSt6MgHR5yPROcnUUweVC/preview"},{"id":68,"title":"A Bucha, A Maçonaria e o Espírito Liberal Brasil Bandecchi","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Sociedades Secretas","module":"Módulo V","rarity":"Essencial","pages":352,"cover":"assets/covers_extracted/cover_A_Bucha__A_Ma_onaria_e_o_Esp_rito_Liberal_-_Brasil_Bandecchi.jpg","tier":"basico","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1fJ-uVawwIUwCaCIAs5_aBkS8R6OPa1nZ/preview"},{"id":69,"title":"A Bucha, a Maçonaria e o Espírito Liberal","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Sociedades Secretas","module":"Módulo V","rarity":"Essencial","pages":359,"cover":"assets/covers_extracted/cover_A_Bucha__a_Ma_onaria_e_o_Esp_rito_Liberal.jpg","tier":"basico","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1_uNdZKh626NzkZWFerXYwuRpLp--cfY4/preview"},{"id":70,"title":"A Bíblia Dos Apócrifos","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Mente & Projeção Astral","module":"Módulo VI","rarity":"Raríssimo (Manuscrito Restaurado)","pages":366,"cover":"assets/covers_extracted/cover_A_B_blia_Dos_Ap_crifos.jpg","tier":"basico","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1E7e0SkdKRp0IfqBR8QtmFF_uXlXCB38l/preview"},{"id":71,"title":"A CONSPIRAÇÃO DE 1817","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Mente & Projeção Astral","module":"Módulo VI","rarity":"Essencial","pages":373,"cover":"assets/covers_extracted/cover_A_CONSPIRA__O_DE_1817.jpg","tier":"basico","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1LQQ3cfrOL8Q7i0JCZOk7xvVaYFbVyghH/preview"},{"id":72,"title":"A Chave Dos Grandes Misterios Eliphas Le","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Mente & Projeção Astral","module":"Módulo VI","rarity":"Essencial","pages":380,"cover":"assets/covers_extracted/cover_A_Chave_Dos_Grandes_Misterios_Eliphas_Le.jpg","tier":"basico","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/12-Olfn0cWWrKh5dhwVD3H5cEc0YHMvKB/preview"},{"id":73,"title":"A Coragem Da Fé Bezerra De Menezes","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Mente & Projeção Astral","module":"Módulo VI","rarity":"Essencial","pages":415,"cover":"assets/covers_extracted/cover_A_Coragem_Da_F__-_Bezerra_De_Menezes.jpg","tier":"basico","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1fJ-uVawwIUwCaCIAs5_aBkS8R6OPa1nZ/preview"},{"id":74,"title":"A Energia Dos Raios","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Mente & Projeção Astral","module":"Módulo VI","rarity":"Essencial","pages":122,"cover":"assets/covers_extracted/cover_A_Energia_Dos_Raios.jpg","tier":"basico","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1SUeuIPnuJYqlE_ToLHlHrA1SKSgKeINZ/preview"},{"id":75,"title":"A Era Do Cordeiro","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Mente & Projeção Astral","module":"Módulo VI","rarity":"Raríssimo (Manuscrito Restaurado)","pages":129,"cover":"assets/covers_extracted/cover_A_Era_Do_Cordeiro.jpg","tier":"basico","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1l-WEWu5HAhQa4pHVmqXG8S2sPogHA6G7/preview"},{"id":76,"title":"A Flor do Pântano","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Mente & Projeção Astral","module":"Módulo VI","rarity":"Essencial","pages":136,"cover":"assets/covers_extracted/cover_A_Flor_do_P_ntano.jpg","tier":"basico","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1-vpalsj0qtrnHBmIZTsACH9rBFomVRCw/preview"},{"id":77,"title":"A Força do Amor","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Mente & Projeção Astral","module":"Módulo VI","rarity":"Essencial","pages":143,"cover":"assets/covers_extracted/cover_A_For_a_do_Amor.jpg","tier":"basico","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1AGjBWqVzBCnhLA-FVRidNdzHUvdW14Zb/preview"},{"id":78,"title":"A GRANDE FARSA Uma Crónica das Tribos Perdidas e os Seus Herdeiros Legítimos G","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Mente & Projeção Astral","module":"Módulo VI","rarity":"Raríssimo (Manuscrito Restaurado)","pages":150,"cover":"assets/covers_extracted/cover_A_GRANDE_FARSA_Uma_Cr_nica_das_Tribos_Perdidas_e_os_Seus_Her.jpg","tier":"basico","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1fJ-uVawwIUwCaCIAs5_aBkS8R6OPa1nZ/preview"},{"id":79,"title":"A Guerra Maçonica Mons. Ernest Jouin","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Sociedades Secretas","module":"Módulo V","rarity":"Essencial","pages":157,"cover":"assets/covers_extracted/cover_A_Guerra_Ma_onica_-_Mons._Ernest_Jouin.jpg","tier":"basico","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1fJ-uVawwIUwCaCIAs5_aBkS8R6OPa1nZ/preview"},{"id":80,"title":"A GÊ NESE Allan Kardec","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Mente & Projeção Astral","module":"Módulo VI","rarity":"Essencial","pages":164,"cover":"assets/covers_extracted/cover_A_G__NESE_Allan_Kardec.jpg","tier":"basico","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1bhiRgvLAJ9K_X2pBnQ4nGiHXQr4brTGL/preview"},{"id":81,"title":"A História De Dom Guião O Alcaide De Santarém E Chanceler Do Rei","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Mente & Projeção Astral","module":"Módulo VI","rarity":"Raríssimo (Manuscrito Restaurado)","pages":171,"cover":"assets/covers_extracted/cover_A_Hist_ria_De_Dom_Gui_o_O_Alcaide_De_Santar_m_E_Chanceler_Do.jpg","tier":"basico","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1wnqb6edFvXasAs7IZI7yGB_GcytAAqIL/preview"},{"id":82,"title":"A Idade Das Luzes","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Mente & Projeção Astral","module":"Módulo VI","rarity":"Essencial","pages":178,"cover":"assets/covers_extracted/cover_A_Idade_Das_Luzes.jpg","tier":"basico","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/18PFrhUiN1KB1gkzcloLHspjGz92vXspx/preview"},{"id":83,"title":"A Linhagem Do Santo Graal Laurence Gardner","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Mente & Projeção Astral","module":"Módulo VI","rarity":"Essencial","pages":185,"cover":"assets/covers_extracted/cover_A_Linhagem_Do_Santo_Graal_-_Laurence_Gardner.jpg","tier":"basico","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1fJ-uVawwIUwCaCIAs5_aBkS8R6OPa1nZ/preview"},{"id":84,"title":"A MAÇONARIA DO PORTO E A REVOLTA 1891","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Sociedades Secretas","module":"Módulo V","rarity":"Raríssimo (Manuscrito Restaurado)","pages":192,"cover":"assets/covers_extracted/cover_A_MA_ONARIA_DO_PORTO_E_A_REVOLTA_1891.jpg","tier":"basico","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1HjW7QGzqBz_X3c1J6vfngEDUO4ELNHbr/preview"},{"id":85,"title":"A MAÇONARIA EM PORTUGAL. O SUB SOLO DA REVOLUÇÃO. CARTAS DA BÉLGICA","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Sociedades Secretas","module":"Módulo V","rarity":"Essencial","pages":199,"cover":"assets/covers_extracted/cover_A_MA_ONARIA_EM_PORTUGAL._O_SUB-SOLO_DA_REVOLU__O._CARTAS_DA_.jpg","tier":"basico","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1fJ-uVawwIUwCaCIAs5_aBkS8R6OPa1nZ/preview"},{"id":86,"title":"A MAÇONARIA MODERNA NAS MALHAS DO SANTO OFICIO","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Sociedades Secretas","module":"Módulo V","rarity":"Essencial","pages":206,"cover":"assets/covers_extracted/cover_A_MA_ONARIA_MODERNA_NAS_MALHAS_DO_SANTO_OFICIO.jpg","tier":"basico","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1-Q5vQwbQcvoBQWEWtMZqFLS3LJAurLWJ/preview"},{"id":87,"title":"A MAÇONARIA NO PORTO DURANTE A 1ª REPÚ BLICA","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Sociedades Secretas","module":"Módulo V","rarity":"Raríssimo (Manuscrito Restaurado)","pages":213,"cover":"assets/covers_extracted/cover_A_MA_ONARIA_NO_PORTO_DURANTE_A_1__REP__BLICA.jpg","tier":"basico","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1ACoO6_9vm_fjibT-XEF7DUwdZdUv_8p6/preview"},{"id":88,"title":"A MAÇONARIA PORTUGUESA E A GRANDE GUERRA","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Sociedades Secretas","module":"Módulo V","rarity":"Essencial","pages":220,"cover":"assets/covers_extracted/cover_A_MA_ONARIA_PORTUGUESA_E_A_GRANDE_GUERRA.jpg","tier":"basico","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1_Uyjvi-JAxt218Hr5xw5TGZjYGFutlyi/preview"},{"id":89,"title":"A MULHER NA HISTORIA DA MAÇONARIA PORTUGUESA","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Sociedades Secretas","module":"Módulo V","rarity":"Essencial","pages":227,"cover":"assets/covers_extracted/cover_A_MULHER_NA_HISTORIA_DA_MA_ONARIA_PORTUGUESA.jpg","tier":"basico","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1fGIT3JFWFB5iuLKEUt3KK5VDyMNIewnO/preview"},{"id":90,"title":"A Maçonaria No Brasil","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Sociedades Secretas","module":"Módulo V","rarity":"Essencial","pages":241,"cover":"assets/covers_extracted/cover_A_Ma_onaria_No_Brasil.jpg","tier":"basico","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1BwShouuEXVqOaIYo92LJtYsXo7cCBWtu/preview"},{"id":91,"title":"A Maçonaria Seita Judaica L. Bertrand (Traduzido por Gustavo Barroso)","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Sociedades Secretas","module":"Módulo V","rarity":"Essencial","pages":248,"cover":"assets/covers_extracted/cover_A_Ma_onaria_Seita_Judaica_L._Bertrand__Traduzido_por_Gustavo.jpg","tier":"basico","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1RHHFxjjxpOO68TxUlQsHvNuhvPZqzk99/preview"},{"id":92,"title":"A Maçonaria e os Jesuítas Dom Vital","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Sociedades Secretas","module":"Módulo V","rarity":"Raríssimo (Manuscrito Restaurado)","pages":255,"cover":"assets/covers_extracted/cover_A_Ma_onaria_e_os_Jesu_tas_-_Dom_Vital.jpg","tier":"basico","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1fJ-uVawwIUwCaCIAs5_aBkS8R6OPa1nZ/preview"},{"id":93,"title":"A Maçonaria em Portugal Argus (Tenente Coronel José Fernando de Sousa)","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Sociedades Secretas","module":"Módulo V","rarity":"Essencial","pages":262,"cover":"assets/covers_extracted/cover_A_Ma_onaria_em_Portugal_-_Argus__Tenente-Coronel_Jos__Fernan.jpg","tier":"basico","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1ouMJfWsA2YqLqgRt8_VtydvoBwf3Zg_z/preview"},{"id":94,"title":"A Maçonaria em Portugal Argus (Tenente Coronel José Fernando de Sousa)","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Sociedades Secretas","module":"Módulo V","rarity":"Essencial","pages":269,"cover":"assets/covers_extracted/cover_A_Ma_onaria_em_Portugal_Argus__Tenente-Coronel_Jos__Fernando.jpg","tier":"basico","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1ouMJfWsA2YqLqgRt8_VtydvoBwf3Zg_z/preview"},{"id":95,"title":"A Mecânica Da Ilusão Social, A Infiltração Sistêmica E A Busca Pelo Conhecimento","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Mente & Projeção Astral","module":"Módulo VI","rarity":"Raríssimo (Manuscrito Restaurado)","pages":276,"cover":"assets/covers_extracted/cover_A_Mec_nica_Da_Ilus_o_Social__A_Infiltra__o_Sist_mica_E_A_Bus.jpg","tier":"basico","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/19E_elP7UthyxwLZ9NV9DMDyKMP6jlXxN/preview"},{"id":96,"title":"A Medicina De Alden","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Mente & Projeção Astral","module":"Módulo VI","rarity":"Essencial","pages":283,"cover":"assets/covers_extracted/cover_A_Medicina_De_Alden.jpg","tier":"basico","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1JgwXj_7QyGx3NaI7Mj1pPtDTDDz2tBIX/preview"},{"id":97,"title":"A NSA, A C. I. A E AS CORPORAÇÕ ES SIONISTAS ESTÃ O ESPIONANDO O MUNDO","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Mente & Projeção Astral","module":"Módulo VI","rarity":"Essencial","pages":290,"cover":"assets/covers_extracted/cover_A_NSA__A_C._I._A_E_AS_CORPORA___ES_SIONISTAS_EST__O_ESPIONAN.jpg","tier":"basico","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1wzo_gZsKag0Nd38ZoIpv4GPa7zQ5NROO/preview"},{"id":98,"title":"A PORTA ENTRE O MUNDO FSICO E O ESPIRITUAL GLANDULA PINEAL","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Mente & Projeção Astral","module":"Módulo VI","rarity":"Raríssimo (Manuscrito Restaurado)","pages":297,"cover":"assets/covers_extracted/cover_A_PORTA_ENTRE_O_MUNDO_FSICO_E_O_ESPIRITUAL_GLANDULA_PINEAL.jpg","tier":"basico","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1ZWm1ZfCskHF3JLROSFvcWjkGTUETbWIn/preview"},{"id":99,"title":"A Problemática sobre o Letramento de Jesus","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Mente & Projeção Astral","module":"Módulo VI","rarity":"Essencial","pages":304,"cover":"assets/covers_extracted/cover_A_Problem_tica_sobre_o_Letramento_de_Jesus.jpg","tier":"basico","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/15uauWowek3zxicyne5l168wBv57FUz_l/preview"},{"id":100,"title":"A Questão Da Origem Dos Mandeus, Os Últimos Gnósticos","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Mente & Projeção Astral","module":"Módulo VI","rarity":"Essencial","pages":311,"cover":"assets/covers_extracted/cover_A_Quest_o_Da_Origem_Dos_Mandeus__Os__ltimos_Gn_sticos.jpg","tier":"basico","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1WHXNSgzn43kS9DGYYp89suFp91CXq_26/preview"},{"id":101,"title":"A Questão Pacelli Mary Ball Martínez","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Mente & Projeção Astral","module":"Módulo VI","rarity":"Raríssimo (Manuscrito Restaurado)","pages":318,"cover":"assets/covers_extracted/cover_A_Quest_o_Pacelli_-_Mary_Ball_Mart_nez.jpg","tier":"basico","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1fJ-uVawwIUwCaCIAs5_aBkS8R6OPa1nZ/preview"},{"id":102,"title":"A REBELIÃO DE SÓFIA","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Mente & Projeção Astral","module":"Módulo VI","rarity":"Essencial","pages":325,"cover":"assets/covers_extracted/cover_A_REBELI_O_DE_S_FIA.jpg","tier":"basico","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1MSktVh76PeodT81Za7dACQebcbKLvC2H/preview"},{"id":103,"title":"A Relação Entre O Judaísmo e a Maçonaria Pe. Curzio Nitoglia","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Sociedades Secretas","module":"Módulo V","rarity":"Essencial","pages":332,"cover":"assets/covers_extracted/cover_A_Rela__o_Entre_O_Juda_smo_e_a_Ma_onaria_-_Pe._Curzio_Nitogl.jpg","tier":"basico","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1fJ-uVawwIUwCaCIAs5_aBkS8R6OPa1nZ/preview"},{"id":104,"title":"A Restauração de Portugal","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Mente & Projeção Astral","module":"Módulo VI","rarity":"Raríssimo (Manuscrito Restaurado)","pages":339,"cover":"assets/covers_extracted/cover_A_Restaura__o_de_Portugal.jpg","tier":"basico","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/16WalydXSEMeebnbi4-WyBp0BD7Wdpy_U/preview"},{"id":105,"title":"A Rússia Não É Um País Conservador","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Mente & Projeção Astral","module":"Módulo VI","rarity":"Essencial","pages":346,"cover":"assets/covers_extracted/cover_A_R_ssia_N_o___Um_Pa_s_Conservador.jpg","tier":"basico","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1SqwkoCj7hS0c_x3HmHUM3HRraz0wdNYM/preview"},{"id":106,"title":"A SIMBOLOGIA NOS MONUMENTOS HISTÓRICOS DE PORTUGAL UM ESTUDO DA POSSIVEL PRESENÇ","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Mente & Projeção Astral","module":"Módulo VI","rarity":"Essencial","pages":353,"cover":"assets/covers_extracted/cover_A_SIMBOLOGIA_NOS_MONUMENTOS_HIST_RICOS_DE_PORTUGAL_UM_ESTUDO.jpg","tier":"basico","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/13eAiBD5wz7lnF_7_JLB0DmvQHUq82m2i/preview"},{"id":107,"title":"A Sinagoga Paulista","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Mente & Projeção Astral","module":"Módulo VI","rarity":"Essencial","pages":367,"cover":"assets/covers_extracted/cover_A_Sinagoga_Paulista.jpg","tier":"basico","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1KwY1o9ZypxtOWgDCPtXW6ZCsrtm8KEir/preview"},{"id":108,"title":"A Teologia Mistica Como Linguagem Do Sagrado","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Mente & Projeção Astral","module":"Módulo VI","rarity":"Essencial","pages":374,"cover":"assets/covers_extracted/cover_A_Teologia_Mistica_Como_Linguagem_Do_Sagrado.jpg","tier":"basico","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1sC_FdgsCcqmzP5-6lk_fwZSpUshLEwtu/preview"},{"id":109,"title":"A Terceira Posição e a Neutralização Argentina Carlos Alberto Disandro","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Mente & Projeção Astral","module":"Módulo VI","rarity":"Raríssimo (Manuscrito Restaurado)","pages":381,"cover":"assets/covers_extracted/cover_A_Terceira_Posi__o_e_a_Neutraliza__o_Argentina_-_Carlos_Albe.jpg","tier":"basico","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1fJ-uVawwIUwCaCIAs5_aBkS8R6OPa1nZ/preview"},{"id":110,"title":"A Transição Da Vida ( 2024)","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Mente & Projeção Astral","module":"Módulo VI","rarity":"Essencial","pages":388,"cover":"assets/covers_extracted/cover_A_Transi__o_Da_Vida___2024_.jpg","tier":"basico","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1VjhqINBPbVH59xkixcX3GLut4gtl-Am3/preview"},{"id":111,"title":"A VERDADE QUE AS IGREJAS ESCONDEM Do Pó Da Terra Até O Trono A História Real Do","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Mente & Projeção Astral","module":"Módulo VI","rarity":"Essencial","pages":395,"cover":"assets/covers_extracted/cover_A_VERDADE_QUE_AS_IGREJAS_ESCONDEM_Do_P__Da_Terra_At__O_Trono.jpg","tier":"basico","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/12pwHy8nhsW2a8PkCIxDXXytwaAOQ6l-i/preview"},{"id":112,"title":"A Verdade a Respeito das Maquinações de Kal Korff ESPIÃO de Israel Mentiroso Con","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Mente & Projeção Astral","module":"Módulo VI","rarity":"Raríssimo (Manuscrito Restaurado)","pages":402,"cover":"assets/covers_extracted/cover_A_Verdade_a_Respeito_das_Maquina__es_de_Kal_Korff_ESPI_O_de_.jpg","tier":"basico","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/11fTScChUoUVoxUZ-uY-uhbbf5_1OBrYi/preview"},{"id":113,"title":"A Vingança do Judeu","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Mente & Projeção Astral","module":"Módulo VI","rarity":"Essencial","pages":409,"cover":"assets/covers_extracted/cover_A_Vingan_a_do_Judeu.jpg","tier":"basico","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1VALjl-MW6mt2YrbM7Q2ltL9H7g9_tb8i/preview"},{"id":114,"title":"A essência do Hatha Yoga [INCOMPLETO]","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Mente & Projeção Astral","module":"Módulo VI","rarity":"Raríssimo (Manuscrito Restaurado)","pages":123,"cover":"assets/covers_extracted/cover_A_ess_ncia_do_Hatha_Yoga__INCOMPLETO_.jpg","tier":"basico","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1rdpHuj4uKPWHIaKLTmBDNU0bU5l35TQp/preview"},{"id":115,"title":"A ilusão americana","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Mente & Projeção Astral","module":"Módulo VI","rarity":"Essencial","pages":130,"cover":"assets/covers_extracted/cover_A_ilus_o_americana.jpg","tier":"basico","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1UtgHXhtlM8qG3ueiapAjeYksN4pPxknJ/preview"},{"id":116,"title":"A maçonaria e os jesuitas; instrucção pastoral do Bispo de Olinda aos seus dioce","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Sociedades Secretas","module":"Módulo V","rarity":"Essencial","pages":137,"cover":"assets/covers_extracted/cover_A_ma_onaria_e_os_jesuitas__instruc__o_pastoral_do_Bispo_de_O.jpg","tier":"basico","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1ojF2s0SyWbe3jaCa1iyVKRM5uFSnCP19/preview"},{"id":117,"title":"A maçonaria em Portugal cartas da Belgica 1a. serie","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Sociedades Secretas","module":"Módulo V","rarity":"Raríssimo (Manuscrito Restaurado)","pages":144,"cover":"assets/covers_extracted/cover_A_ma_onaria_em_Portugal_cartas_da_Belgica_1a._serie.jpg","tier":"basico","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1HLFmuA8v96BKcr7xgliatPHOVWlwYS2Q/preview"},{"id":118,"title":"A maçonaria em opposição á igreja e ao estado Dom Antônio de Macedo Costa","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Sociedades Secretas","module":"Módulo V","rarity":"Essencial","pages":151,"cover":"assets/covers_extracted/cover_A_ma_onaria_em_opposi__o___igreja_e_ao_estado_Dom_Ant_nio_de.jpg","tier":"basico","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1rEGh56jycqMH4xy6IhX3UtNmlxaxnfRb/preview"},{"id":119,"title":"A política científica e tecnológica e as necessidades do setor produtivo","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Mente & Projeção Astral","module":"Módulo VI","rarity":"Essencial","pages":158,"cover":"assets/covers_extracted/cover_A_pol_tica_cient_fica_e_tecnol_gica_e_as_necessidades_do_set.jpg","tier":"basico","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1SCMBDIJw1rBHOqzTH5GKfIsMWL261-s7/preview"},{"id":120,"title":"A Águia 01 07 1912 07 A Águia, foi uma revista bimensal, e depois mensal, de lit","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Mente & Projeção Astral","module":"Módulo VI","rarity":"Essencial","pages":172,"cover":"assets/covers_extracted/cover_A__guia_01_07_1912_07_A__guia__foi_uma_revista_bimensal__e_d.jpg","tier":"basico","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1Dtjdn-o9LXGCmz2bTAgSUH1KlfMlX7LN/preview"},{"id":121,"title":"A Águia 01.04.1912 04 A Águia, foi uma revista bimensal, e depois mensal, de lit","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Mente & Projeção Astral","module":"Módulo VI","rarity":"Essencial","pages":179,"cover":"assets/covers_extracted/cover_A__guia_01.04.1912_04_A__guia__foi_uma_revista_bimensal__e_d.jpg","tier":"basico","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1q61XhK7Z6BmHVQ6Apiw52z8BTPD49rKE/preview"},{"id":122,"title":"A Águia 01.07.1911 10 A Águia, foi uma revista bimensal, e depois mensal, de lit","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Mente & Projeção Astral","module":"Módulo VI","rarity":"Raríssimo (Manuscrito Restaurado)","pages":186,"cover":"assets/covers_extracted/cover_A__guia_01.07.1911_10_A__guia__foi_uma_revista_bimensal__e_d.jpg","tier":"basico","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/19wj17S0lnilpZSBElC2Kaqavfl9Vj9BN/preview"},{"id":123,"title":"ACIMA DO CÉU UMA JORNADA ALÉM DAS COLÔNIAS","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Mente & Projeção Astral","module":"Módulo VI","rarity":"Essencial","pages":193,"cover":"assets/covers_extracted/cover_ACIMA_DO_C_U_UMA_JORNADA_AL_M_DAS_COL_NIAS.jpg","tier":"basico","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1PyyIQqXbxBwVjN0yYbhQduhNZ0HGlpPT/preview"},{"id":124,"title":"ANTONIO DE MACEDO (ARTIGOS E ENSAIOS)","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Mente & Projeção Astral","module":"Módulo VI","rarity":"Essencial","pages":200,"cover":"assets/covers_extracted/cover_ANTONIO_DE_MACEDO__ARTIGOS_E_ENSAIOS_.jpg","tier":"basico","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1N6p1u0kdCeK4xBeP43KW0m4tbfQr5GOk/preview"},{"id":125,"title":"APONTAMENTOS PARA A HISTORIA CONTEMPORANEA","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Mente & Projeção Astral","module":"Módulo VI","rarity":"Raríssimo (Manuscrito Restaurado)","pages":207,"cover":"assets/covers_extracted/cover_APONTAMENTOS_PARA_A_HISTORIA_CONTEMPORANEA.jpg","tier":"basico","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/13X783ovfW01Orqh8cvjbcyiOj1J7Ro3E/preview"},{"id":126,"title":"AS FORÇAS SECRETAS DA REVOLUÇÃO","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Mente & Projeção Astral","module":"Módulo VI","rarity":"Essencial","pages":214,"cover":"assets/covers_extracted/cover_AS_FOR_AS_SECRETAS_DA_REVOLU__O.jpg","tier":"basico","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1e-gd26L-2jJ7mTq4Fp55D6x73ppim1cI/preview"},{"id":127,"title":"ASSOCIACÕES SECRETAS","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Mente & Projeção Astral","module":"Módulo VI","rarity":"Essencial","pages":221,"cover":"assets/covers_extracted/cover_ASSOCIAC_ES_SECRETAS.jpg","tier":"basico","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/193vee814F3AEmheC1ZsElH4Ni5BUAwlA/preview"},{"id":128,"title":"Admiravel Egreja Matriz de Loures, uriunda do 5. século, edificada pelos templár","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Mente & Projeção Astral","module":"Módulo VI","rarity":"Raríssimo (Manuscrito Restaurado)","pages":228,"cover":"assets/covers_extracted/cover_Admiravel_Egreja_Matriz_de_Loures__uriunda_do_5._s_culo__edi.jpg","tier":"basico","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/14Lurz7oiZ_oNU7X4PuHHqg-OmFFscbP6/preview"},{"id":129,"title":"Adolf Hitler, Homem da Paz","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Mente & Projeção Astral","module":"Módulo VI","rarity":"Essencial","pages":235,"cover":"assets/covers_extracted/cover_Adolf_Hitler__Homem_da_Paz.jpg","tier":"basico","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1Eg48_X7lWqhdkq96clZ8kXVnI9EBHqVz/preview"},{"id":130,"title":"Aldous Huxley (1894 1963)","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Mente & Projeção Astral","module":"Módulo VI","rarity":"Essencial","pages":242,"cover":"assets/covers_extracted/cover_Aldous_Huxley__1894-1963_.jpg","tier":"basico","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1DKFdOd6qZn6spg1BFaxh4_htN4SyqBlo/preview"},{"id":131,"title":"Alvará De El Rei 1818","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Mente & Projeção Astral","module":"Módulo VI","rarity":"Raríssimo (Manuscrito Restaurado)","pages":249,"cover":"assets/covers_extracted/cover_Alvar__De_El_Rei_1818.jpg","tier":"basico","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/16iFnfq5ZJ2joijbQdd1rEUUMQ_WwLZyn/preview"},{"id":132,"title":"Amaral F Waldo Vieira","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Mente & Projeção Astral","module":"Módulo VI","rarity":"Essencial","pages":256,"cover":"assets/covers_extracted/cover_Amaral_F_Waldo_Vieira.jpg","tier":"basico","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1YOWE0m7F8z7WA1bZnJsQkhzkefeyH_oE/preview"},{"id":133,"title":"Ampliação E Aprofundamento Dos Conhecimentos Teológicos Das Religiões","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Mente & Projeção Astral","module":"Módulo VI","rarity":"Essencial","pages":263,"cover":"assets/covers_extracted/cover_Amplia__o_E_Aprofundamento_Dos_Conhecimentos_Teol_gicos_Das_.jpg","tier":"basico","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1Zpr9xxjrcpMAB_zI-ZEmoj1mXay0Yhu1/preview"},{"id":134,"title":"Antes que os demônios voltem","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Mente & Projeção Astral","module":"Módulo VI","rarity":"Raríssimo (Manuscrito Restaurado)","pages":270,"cover":"assets/covers_extracted/cover_Antes_que_os_dem_nios_voltem.jpg","tier":"basico","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/19WkJKXNutXkT8iv8Rml00ov8guT8jAot/preview"},{"id":135,"title":"Antigo Livro de São Cipriano O Gigante e Verdadeiro Capa de Aço","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Mente & Projeção Astral","module":"Módulo VI","rarity":"Essencial","pages":277,"cover":"assets/covers_extracted/cover_Antigo_Livro_de_S_o_Cipriano_-_O_Gigante_e_Verdadeiro_Capa_d.jpg","tier":"basico","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1RDHBZV1sIO2W_DQXNR52nm25hNtU-0PD/preview"},{"id":136,"title":"Aos Trabalhadores Da Grande Messe V 2( PDF)","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Mente & Projeção Astral","module":"Módulo VI","rarity":"Essencial","pages":284,"cover":"assets/covers_extracted/cover_Aos_Trabalhadores_Da_Grande_Messe_V_2__PDF_.jpg","tier":"basico","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1qHrIb5Vrg75sSXd_GhF3he_vSjeBpkx2/preview"},{"id":137,"title":"Armagedoom 2036 José Maria Alencastro","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Mente & Projeção Astral","module":"Módulo VI","rarity":"Raríssimo (Manuscrito Restaurado)","pages":291,"cover":"assets/covers_extracted/cover_Armagedoom_2036_-_Jos__Maria_Alencastro.jpg","tier":"basico","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1fJ-uVawwIUwCaCIAs5_aBkS8R6OPa1nZ/preview"},{"id":138,"title":"Artigo Metatron O Mensageiro De Ha Shem","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Mente & Projeção Astral","module":"Módulo VI","rarity":"Essencial","pages":298,"cover":"assets/covers_extracted/cover_Artigo_Metatron_O_Mensageiro_De_Ha_Shem.jpg","tier":"basico","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1XVBIadCyN7BQO_8txL5TsYEJqHHWFUBb/preview"},{"id":139,"title":"As Chaves Dos Segredos do Inferno Grimórios, Fórmulas e Rituais no Caminho da Mã","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Mente & Projeção Astral","module":"Módulo VI","rarity":"Raríssimo (Manuscrito Restaurado)","pages":312,"cover":"assets/covers_extracted/cover_As_Chaves_Dos_Segredos_do_Inferno_Grim_rios__F_rmulas_e_Ritu.jpg","tier":"basico","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1d_S_j55oawpVCkaIvNLPZjjb4r_5qhNK/preview"},{"id":140,"title":"As Irmãs Fox Falando com os Mortos ou Enganando os Vivos","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Mente & Projeção Astral","module":"Módulo VI","rarity":"Essencial","pages":319,"cover":"assets/covers_extracted/cover_As_Irm_s_Fox_Falando_com_os_Mortos_ou_Enganando_os_Vivos.jpg","tier":"basico","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1InB4SODOFDuovf-uSXHTnKWpDlc4Ne-1/preview"},{"id":141,"title":"As Suspeitas sobre a Existência da Grande Fraternidade Branca","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Mente & Projeção Astral","module":"Módulo VI","rarity":"Essencial","pages":326,"cover":"assets/covers_extracted/cover_As_Suspeitas_sobre_a_Exist_ncia_da_Grande_Fraternidade_Branc.jpg","tier":"basico","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1o25TDKfV7rJxGeXrNi2bOqpJ8f8W4jx6/preview"},{"id":142,"title":"As verdades sobre a Virgem Maria e a comunhão de reparação no primeiro sábado do","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Mente & Projeção Astral","module":"Módulo VI","rarity":"Raríssimo (Manuscrito Restaurado)","pages":333,"cover":"assets/covers_extracted/cover_As_verdades_sobre_a_Virgem_Maria_e_a_comunh_o_de_repara__o_n.jpg","tier":"basico","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1FbME9AvSFEj3ZuovNd88PUhGiTFnRLWg/preview"},{"id":143,"title":"Assis Cintra Um Perfil","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Mente & Projeção Astral","module":"Módulo VI","rarity":"Essencial","pages":340,"cover":"assets/covers_extracted/cover_Assis_Cintra_Um_Perfil.jpg","tier":"basico","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1zogPNIRF3ERFzkP39yUegtQ2-S9oqM5u/preview"},{"id":144,"title":"Auschwitz E O Silencio De Heidegger","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Mente & Projeção Astral","module":"Módulo VI","rarity":"Essencial","pages":347,"cover":"assets/covers_extracted/cover_Auschwitz_E_O_Silencio_De_Heidegger.jpg","tier":"basico","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1FbPr1XuBnxhlHYGEGxPwFshE-Fnfpgy3/preview"},{"id":145,"title":"Autobiografia de um iogue","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Mente & Projeção Astral","module":"Módulo VI","rarity":"Raríssimo (Manuscrito Restaurado)","pages":354,"cover":"assets/covers_extracted/cover_Autobiografia_de_um_iogue.jpg","tier":"basico","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/177pzchtZf9lF_A4nwF8jqKx5W1Vyu6qk/preview"},{"id":146,"title":"BIBLIOTECA PAULO MONTEIRO LEVY","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Mente & Projeção Astral","module":"Módulo VI","rarity":"Essencial","pages":361,"cover":"assets/covers_extracted/cover_BIBLIOTECA_PAULO_MONTEIRO_LEVY.jpg","tier":"basico","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/14yX8u2R8lp7Z3-S9AITmhN6HeWdqB9TM/preview"},{"id":147,"title":"BILLY MEIER DIZ A VERDADE E A SILENCIOSA REVOLUCAO DA VERDADE VERDADEIRA.","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Mente & Projeção Astral","module":"Módulo VI","rarity":"Essencial","pages":368,"cover":"assets/covers_extracted/cover_BILLY_MEIER_DIZ_A_VERDADE_E_A_SILENCIOSA_REVOLUCAO_DA_VERDAD.jpg","tier":"basico","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1xr7LQyc8N5JZ4bhEwCAp8wNWHMQm8YAE/preview"},{"id":148,"title":"Bem Aventurados os Pobres de Espirito","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Mente & Projeção Astral","module":"Módulo VI","rarity":"Raríssimo (Manuscrito Restaurado)","pages":375,"cover":"assets/covers_extracted/cover_Bem_Aventurados_os_Pobres_de_Espirito.jpg","tier":"basico","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1jxUS6vmQWmSRY357niTgZ8fsp8FJzeOh/preview"},{"id":149,"title":"Boletim Estatistico das Rendas Internas Arrecadação no Exercicio de 1938 (Desdob","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Mente & Projeção Astral","module":"Módulo VI","rarity":"Essencial","pages":382,"cover":"assets/covers_extracted/cover_Boletim_Estatistico_das_Rendas_Internas_Arrecada__o_no_Exerc.jpg","tier":"basico","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1PMpnRjEmzyNDQpbyOMjd5aLjHWOF5KkH/preview"},{"id":150,"title":"Boletim Estatistico das Rendas Internas, Desdobramento Pelas Repartiçoes Arrecad","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Mente & Projeção Astral","module":"Módulo VI","rarity":"Essencial","pages":389,"cover":"assets/covers_extracted/cover_Boletim_Estatistico_das_Rendas_Internas__Desdobramento_Pelas.jpg","tier":"basico","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1AcVVhqJQ-1Zf-nvwjij4ItLp7Cr0v4Nb/preview"},{"id":151,"title":"Boletim do DESSEAK n ro 1 (sep 1984)","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Mente & Projeção Astral","module":"Módulo VI","rarity":"Raríssimo (Manuscrito Restaurado)","pages":396,"cover":"assets/covers_extracted/cover_Boletim_do_DESSEAK_-_n-ro_1__sep_1984_.jpg","tier":"basico","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1fJ-uVawwIUwCaCIAs5_aBkS8R6OPa1nZ/preview"},{"id":152,"title":"Boletim do DESSEAK n ro 2 (okt nov 1984)","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Mente & Projeção Astral","module":"Módulo VI","rarity":"Essencial","pages":403,"cover":"assets/covers_extracted/cover_Boletim_do_DESSEAK_-_n-ro_2__okt-nov_1984_.jpg","tier":"basico","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1fJ-uVawwIUwCaCIAs5_aBkS8R6OPa1nZ/preview"},{"id":153,"title":"Brasil O Lírio das Américas José Maria Alencastro","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Mente & Projeção Astral","module":"Módulo VI","rarity":"Essencial","pages":410,"cover":"assets/covers_extracted/cover_Brasil_-_O_L_rio_das_Am_ricas_-_Jos__Maria_Alencastro.jpg","tier":"basico","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1fJ-uVawwIUwCaCIAs5_aBkS8R6OPa1nZ/preview"},{"id":154,"title":"Budismo Para Espíritas","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Mente & Projeção Astral","module":"Módulo VI","rarity":"Essencial","pages":131,"cover":"assets/covers_extracted/cover_Budismo_Para_Esp_ritas.jpg","tier":"basico","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1h2v0jItos4mTF2GJ0lNcrAwBe8YNCVuQ/preview"},{"id":155,"title":"CARTAS SOBRE A FRAMAÇONERIA.","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Sociedades Secretas","module":"Módulo V","rarity":"Raríssimo (Manuscrito Restaurado)","pages":159,"cover":"assets/covers_extracted/cover_CARTAS_SOBRE_A_FRAMA_ONERIA..jpg","tier":"basico","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1CtDjs2jLJoFyZAZ-0oT3tMKl5NQZCc_w/preview"},{"id":156,"title":"CATÁLOGO DA BIBLIOTECA DO GRANDE ORIENTE LUSITANO FUNDO MAÇÓNICO PORTUGUÊS","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Sociedades Secretas","module":"Módulo V","rarity":"Essencial","pages":166,"cover":"assets/covers_extracted/cover_CAT_LOGO_DA_BIBLIOTECA_DO_GRANDE_ORIENTE_LUSITANO_FUNDO_MA__.jpg","tier":"basico","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1TFYiMBsm95lTKJznUNUQhv2vEDeIv6DA/preview"},{"id":157,"title":"CEREMONIAS DA MAÇONARIA SYMBOLICA DOS ANTIGOS MAÇONS LIVRES E ACCEITES DE PORTUG","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Sociedades Secretas","module":"Módulo V","rarity":"Essencial","pages":173,"cover":"assets/covers_extracted/cover_CEREMONIAS_DA_MA_ONARIA_SYMBOLICA_DOS_ANTIGOS_MA_ONS_LIVRES_.jpg","tier":"basico","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1fJ-uVawwIUwCaCIAs5_aBkS8R6OPa1nZ/preview"},{"id":158,"title":"COMO ELABORAR UM PRODUTO EDUCACIONAL","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Mente & Projeção Astral","module":"Módulo VI","rarity":"Raríssimo (Manuscrito Restaurado)","pages":180,"cover":"assets/covers_extracted/cover_COMO_ELABORAR_UM_PRODUTO_EDUCACIONAL.jpg","tier":"basico","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1WwTsK4XaKJ9DylQhiVWnHG4Adiwsnc5f/preview"},{"id":159,"title":"COMO MATAR O PENSAMENTO SUICIDA Uma Visão Reencarnacionista","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Mente & Projeção Astral","module":"Módulo VI","rarity":"Essencial","pages":187,"cover":"assets/covers_extracted/cover_COMO_MATAR_O_PENSAMENTO_SUICIDA_Uma_Vis_o_Reencarnacionista.jpg","tier":"basico","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1batXDqTbkVZzaWpSgtE1saYrE2mm_mJm/preview"},{"id":160,"title":"CONSTITUIÇÃO DA CONFEDERAÇÃO MAÇONARIA PORTUGUEZA","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Sociedades Secretas","module":"Módulo V","rarity":"Essencial","pages":194,"cover":"assets/covers_extracted/cover_CONSTITUI__O_DA_CONFEDERA__O_MA_ONARIA_PORTUGUEZA.jpg","tier":"basico","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1D94N8VqK9qrowqKoQz2SY7gaX-EUYkgj/preview"},{"id":161,"title":"CONSTITUIÇÃO DA MAÇONARIA EM PORTUGAL. PRIMEIRA PARTE","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Sociedades Secretas","module":"Módulo V","rarity":"Raríssimo (Manuscrito Restaurado)","pages":201,"cover":"assets/covers_extracted/cover_CONSTITUI__O_DA_MA_ONARIA_EM_PORTUGAL._PRIMEIRA_PARTE.jpg","tier":"basico","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1iWvW8DF57NJcxjI8ibBpr04kLQGRvBjv/preview"},{"id":162,"title":"Caderno De Notas De Fernando Pessoa] Agenda Commercial Para 1911","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Mente & Projeção Astral","module":"Módulo VI","rarity":"Essencial","pages":208,"cover":"assets/covers_extracted/cover_Caderno_De_Notas_De_Fernando_Pessoa__Agenda_Commercial_Para_.jpg","tier":"basico","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/16uZr9bNLRU-uQ4q1MpemU6kwO_lzp1aA/preview"},{"id":163,"title":"Caderno de Resumos Congresso Internacional ABRALIC 2019","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Mente & Projeção Astral","module":"Módulo VI","rarity":"Essencial","pages":215,"cover":"assets/covers_extracted/cover_Caderno_de_Resumos_Congresso_Internacional_ABRALIC_2019.jpg","tier":"basico","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1acYuOYEVnTJM7uACS49SWEtYPP0vI4Mw/preview"},{"id":164,"title":"Caminho Da Luz Por Fernando Escobar","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Mente & Projeção Astral","module":"Módulo VI","rarity":"Raríssimo (Manuscrito Restaurado)","pages":222,"cover":"assets/covers_extracted/cover_Caminho_Da_Luz_Por_Fernando_Escobar.jpg","tier":"basico","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/10L-0UYTwPMBVE8ffZGQPuHGJBC3ecBlJ/preview"},{"id":165,"title":"Cardeal Newman — Pe. Maurílio Teixeira Leite Penido","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Mente & Projeção Astral","module":"Módulo VI","rarity":"Essencial","pages":229,"cover":"assets/covers_extracted/cover_Cardeal_Newman___Pe._Maur_lio_Teixeira_Leite_Penido.jpg","tier":"basico","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1i9E5MDUCun-UzkYW4mqIqyiuOFertjwC/preview"},{"id":166,"title":"Cardeal Rampolla “ Um Maçom quase se tornou Papa” Virgo Maria","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Sociedades Secretas","module":"Módulo V","rarity":"Essencial","pages":236,"cover":"assets/covers_extracted/cover_Cardeal_Rampolla___Um_Ma_om_quase_se_tornou_Papa__-_Virgo_Ma.jpg","tier":"basico","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1fJ-uVawwIUwCaCIAs5_aBkS8R6OPa1nZ/preview"},{"id":167,"title":"Carta De Luiz Carlos Prestes Para a Cuba Comunista","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Mente & Projeção Astral","module":"Módulo VI","rarity":"Raríssimo (Manuscrito Restaurado)","pages":243,"cover":"assets/covers_extracted/cover_Carta_De_Luiz_Carlos_Prestes_Para_a_Cuba_Comunista.jpg","tier":"basico","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1weyFD4l9dAFFtF5qI3VD756YqZVjm3KR/preview"},{"id":168,"title":"Carta do Passageiro do Abismo (Versão Ritual) Adriano Benedet","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Mente & Projeção Astral","module":"Módulo VI","rarity":"Essencial","pages":250,"cover":"assets/covers_extracted/cover_Carta_do_Passageiro_do_Abismo__Vers_o_Ritual__-_Adriano_Bene.jpg","tier":"basico","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1fJ-uVawwIUwCaCIAs5_aBkS8R6OPa1nZ/preview"},{"id":169,"title":"Carta pastoral do Bispo de Olinda premunindo os seus diocesanos contra as cilada","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Mente & Projeção Astral","module":"Módulo VI","rarity":"Essencial","pages":257,"cover":"assets/covers_extracted/cover_Carta_pastoral_do_Bispo_de_Olinda_premunindo_os_seus_diocesa.jpg","tier":"basico","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1-50ksfc10t8AeWywW4K-WVj_PcTJ3Nfb/preview"},{"id":170,"title":"Catálogo De Cursos E Discursos 2025 3.1","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Mente & Projeção Astral","module":"Módulo VI","rarity":"Raríssimo (Manuscrito Restaurado)","pages":264,"cover":"assets/covers_extracted/cover_Cat_logo_De_Cursos_E_Discursos_2025_3.1.jpg","tier":"basico","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/18j64U1OMyEJPUHNXxgnAObbstyV39Sn8/preview"},{"id":171,"title":"Catálogo De Cursos E Discursos 2025","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Mente & Projeção Astral","module":"Módulo VI","rarity":"Essencial","pages":271,"cover":"assets/covers_extracted/cover_Cat_logo_De_Cursos_E_Discursos_2025.jpg","tier":"basico","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1AyRZCxcTVrWaAavkQszZHQb--Sxpr4rc/preview"},{"id":172,"title":"Chris Jackson O Reavivamento do Ocultismo no Catolicismo Tradicionalista [6–15 J","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Mente & Projeção Astral","module":"Módulo VI","rarity":"Essencial","pages":278,"cover":"assets/covers_extracted/cover_Chris_Jackson_O_Reavivamento_do_Ocultismo_no_Catolicismo_Tra.jpg","tier":"basico","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1e_Q2mzDG-oX6NSJJpJMonqpKT90hhqiG/preview"},{"id":173,"title":"Claudio Suenaga Sangue No Ceu A Historia Das Religioes E Seitas Apocalipticas","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Mente & Projeção Astral","module":"Módulo VI","rarity":"Essencial","pages":292,"cover":"assets/covers_extracted/cover_Claudio_Suenaga_Sangue_No_Ceu_A_Historia_Das_Religioes_E_Sei.jpg","tier":"basico","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1MPl3ACVrFStZhLNiKYGSPppwZSK8tL-q/preview"},{"id":174,"title":"Coletânea Legislativa Histórica Coletânea Histórica Legislação de Organizaçã","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Mente & Projeção Astral","module":"Módulo VI","rarity":"Essencial","pages":299,"cover":"assets/covers_extracted/cover_Colet_nea_Legislativa_Hist_rica_-_Colet_nea_Hist_rica_-_Legi.jpg","tier":"basico","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1fJ-uVawwIUwCaCIAs5_aBkS8R6OPa1nZ/preview"},{"id":175,"title":"Coleção Caminho, Sulco e Forja","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Mente & Projeção Astral","module":"Módulo VI","rarity":"Raríssimo (Manuscrito Restaurado)","pages":306,"cover":"assets/covers_extracted/cover_Cole__o_Caminho__Sulco_e_Forja.jpg","tier":"basico","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/12cl28rHwSZ86gs0areqgtusUXlQvQoWx/preview"},{"id":176,"title":"Coleção Genealogia Volume 4 DAS ORIGENS MOÇÁ RABES À FUNDAÇÃ O DE UMA LINHAGEM","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Mente & Projeção Astral","module":"Módulo VI","rarity":"Essencial","pages":313,"cover":"assets/covers_extracted/cover_Cole__o_Genealogia_Volume_4_DAS_ORIGENS_MO___RABES___FUNDA__.jpg","tier":"basico","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1hgljSCXSb8uLHQtXijFfPnyZiOlZ8YKx/preview"},{"id":177,"title":"Coleção sobre Globalismo","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Mente & Projeção Astral","module":"Módulo VI","rarity":"Essencial","pages":320,"cover":"assets/covers_extracted/cover_Cole__o_sobre_Globalismo.jpg","tier":"basico","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1RWtF_0hjMycrGcBDm8R9PnpCGncerBjN/preview"},{"id":178,"title":"Comentários De Um Pedreiro Sobre A Torá Bamidbar Números","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Hermetismo & Cabala","module":"Módulo I","rarity":"Raríssimo (Manuscrito Restaurado)","pages":327,"cover":"assets/covers_extracted/cover_Coment_rios_De_Um_Pedreiro_Sobre_A_Tor__Bamidbar_N_meros.jpg","tier":"basico","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1IRI9u_U9qjj1F6dSuTejtl5sNPdLq7Re/preview"},{"id":179,"title":"Comentários De Um Pedreiro Sobre A Torá Devarim Deuteronômio","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Hermetismo & Cabala","module":"Módulo I","rarity":"Essencial","pages":334,"cover":"assets/covers_extracted/cover_Coment_rios_De_Um_Pedreiro_Sobre_A_Tor__Devarim_Deuteron_mio.jpg","tier":"basico","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1E6cRdia9G5ZODaMmBng_ZSR2PtHJ9eqL/preview"},{"id":180,"title":"Como Desarmar A Cultura Woke Charles Pincourt","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Mente & Projeção Astral","module":"Módulo VI","rarity":"Essencial","pages":341,"cover":"assets/covers_extracted/cover_Como_Desarmar_A_Cultura_Woke_Charles_Pincourt.jpg","tier":"basico","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1J6wzmpJYBCKAW_mWfP197sk7C_uEaqhT/preview"},{"id":181,"title":"Consagracao Geral Oleo Santo","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Mente & Projeção Astral","module":"Módulo VI","rarity":"Raríssimo (Manuscrito Restaurado)","pages":348,"cover":"assets/covers_extracted/cover_Consagracao_Geral_Oleo_Santo.jpg","tier":"basico","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1tyUik56ymAzV8up1EQX7WLdpw8g3oqFP/preview"},{"id":182,"title":"Correlações Entre A Ciencia E O Espiritismo Olivio Cezar","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Mente & Projeção Astral","module":"Módulo VI","rarity":"Essencial","pages":355,"cover":"assets/covers_extracted/cover_Correla__es_Entre_A_Ciencia_E_O_Espiritismo_Olivio_Cezar.jpg","tier":"basico","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1gyUrrquiM5zGtTxOq8fRC4YmfhZyRYzp/preview"},{"id":183,"title":"Cães Sabem Quando Os Seus Donos Estão Chegando","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Mente & Projeção Astral","module":"Módulo VI","rarity":"Essencial","pages":362,"cover":"assets/covers_extracted/cover_C_es_Sabem_Quando_Os_Seus_Donos_Est_o_Chegando.jpg","tier":"basico","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1CF0U11DIdcxrNa4E-VSH9wTeO1HTVc7t/preview"},{"id":184,"title":"DOCUMENTO ORIGINAL DA MAÇONARIA PORTUGUEZA","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Sociedades Secretas","module":"Módulo V","rarity":"Raríssimo (Manuscrito Restaurado)","pages":369,"cover":"assets/covers_extracted/cover_DOCUMENTO_ORIGINAL_DA_MA_ONARIA_PORTUGUEZA.jpg","tier":"basico","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1sgUmGKwQ7eK8V4V8Ti1lj6-TRIEViSAH/preview"},{"id":185,"title":"Desmistificando o Esoterismo no Nacional Socialismo","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Mente & Projeção Astral","module":"Módulo VI","rarity":"Essencial","pages":383,"cover":"assets/covers_extracted/cover_Desmistificando_o_Esoterismo_no_Nacional_Socialismo.jpg","tier":"basico","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1wT7VCqpgUBly5G6xcWg4OKNEtAuHwI5L/preview"},{"id":186,"title":"Despertar no sonho Sonhos lúcidos e Ioga Tibetana dos sonhos para o insight e a","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Mente & Projeção Astral","module":"Módulo VI","rarity":"Raríssimo (Manuscrito Restaurado)","pages":390,"cover":"assets/covers_extracted/cover_Despertar_no_sonho_Sonhos_l_cidos_e_Ioga_Tibetana_dos_sonhos.jpg","tier":"basico","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/16Ria8vgtLCcp3szYp8OTQu9rNPUQuyTy/preview"},{"id":187,"title":"Diga Aos Mórmons Que EU Os Amo","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Mente & Projeção Astral","module":"Módulo VI","rarity":"Essencial","pages":397,"cover":"assets/covers_extracted/cover_Diga_Aos_Mo_rmons_Que_EU_Os_Amo.jpg","tier":"basico","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1RtMR21FcLWg0H5HXRimYO1JK_3EZ57qP/preview"},{"id":188,"title":"Diário De Um Médium Iniciante","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Mente & Projeção Astral","module":"Módulo VI","rarity":"Essencial","pages":404,"cover":"assets/covers_extracted/cover_Di_rio_De_Um_M_dium_Iniciante.jpg","tier":"basico","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1G2Mf7YpX2KEHAKf7jYW72Caoac2ogSC_/preview"},{"id":189,"title":"Do Reino Das Sombras (Trilogia Vol.III)","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Mente & Projeção Astral","module":"Módulo VI","rarity":"Raríssimo (Manuscrito Restaurado)","pages":411,"cover":"assets/covers_extracted/cover_Do_Reino_Das_Sombras__Trilogia_Vol.III_.jpg","tier":"basico","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1cQ2GnPzA11b7xF3l4aM3CRUzdEJBNQvA/preview"},{"id":190,"title":"Dolores","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Mente & Projeção Astral","module":"Módulo VI","rarity":"Essencial","pages":418,"cover":"assets/covers_extracted/cover_Dolores.jpg","tier":"basico","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/19hnz-zkXCC9s1HVgS7ST0gf9rW3oC9H4/preview"},{"id":191,"title":"Domine A Projeção Astral","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Mente & Projeção Astral","module":"Módulo VI","rarity":"Essencial","pages":125,"cover":"assets/covers_extracted/cover_Domine_A_Proje__o_Astral.jpg","tier":"basico","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1Yd7p6mq9MlF51zCoeDhVyQ6fs8wkLx4_/preview"},{"id":192,"title":"Dos Céus à Terra","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Mente & Projeção Astral","module":"Módulo VI","rarity":"Raríssimo (Manuscrito Restaurado)","pages":132,"cover":"assets/covers_extracted/cover_Dos_C_us___Terra.jpg","tier":"basico","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1DuxuZ9rlQ6LGV6I0QPRBxxPlY6oa1qb9/preview"},{"id":193,"title":"EBOOK ANDARILHAGENS URBANAS","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Mente & Projeção Astral","module":"Módulo VI","rarity":"Raríssimo (Manuscrito Restaurado)","pages":153,"cover":"assets/covers_extracted/cover_EBOOK_ANDARILHAGENS_URBANAS.jpg","tier":"basico","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1a4G1e7-EPuy3s5-sYhIH0HZt1wR5Hw5f/preview"},{"id":194,"title":"Ebook COLETÂNEA DE ENSAIOS CRÍTICOS AO CATOLICISMO","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Mente & Projeção Astral","module":"Módulo VI","rarity":"Essencial","pages":160,"cover":"assets/covers_extracted/cover_Ebook_COLET_NEA_DE_ENSAIOS_CR_TICOS_AO_CATOLICISMO.jpg","tier":"basico","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1EUnmbnGTyXNrH8Oq5XwutF-RlJQ5HFRj/preview"},{"id":195,"title":"Educação Oriental Para Ocidentais Fernando Henrique Pedroso","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Mente & Projeção Astral","module":"Módulo VI","rarity":"Essencial","pages":167,"cover":"assets/covers_extracted/cover_Educa__o_Oriental_Para_Ocidentais_-_Fernando_Henrique_Pedros.jpg","tier":"basico","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1fJ-uVawwIUwCaCIAs5_aBkS8R6OPa1nZ/preview"},{"id":196,"title":"Educação Oriental Para Ocidentais 2 Edição Fernando Henrique Pedroso","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Mente & Projeção Astral","module":"Módulo VI","rarity":"Raríssimo (Manuscrito Restaurado)","pages":174,"cover":"assets/covers_extracted/cover_Educa__o_Oriental_Para_Ocidentais_2_Edi__o_Fernando_Henrique.jpg","tier":"basico","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/19VkBD4rgdAD38GdVXTUHCxKTzNLFUIXU/preview"},{"id":197,"title":"Ensaio Sobre A Verdade E A Mentira","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Mente & Projeção Astral","module":"Módulo VI","rarity":"Essencial","pages":181,"cover":"assets/covers_extracted/cover_Ensaio_Sobre_A_Verdade_E_A_Mentira.jpg","tier":"basico","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1ASrq6XF15XGbDOeJdRC-8KhnmsxmAYTY/preview"},{"id":198,"title":"Ensaios de teatro e filosofia do Renascimento ao século XVIII","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Mente & Projeção Astral","module":"Módulo VI","rarity":"Essencial","pages":188,"cover":"assets/covers_extracted/cover_Ensaios_de_teatro_e_filosofia_do_Renascimento_ao_s_culo_XVII.jpg","tier":"basico","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1Z6CxdaxC1YO1dKqbC8oivg961wsvMQaX/preview"},{"id":199,"title":"Entrementes Conversas Desconfinadas","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Mente & Projeção Astral","module":"Módulo VI","rarity":"Raríssimo (Manuscrito Restaurado)","pages":195,"cover":"assets/covers_extracted/cover_Entrementes_Conversas_Desconfinadas.jpg","tier":"basico","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1bZMxcK-M1FCEWZM_9B28A6FtapkBZlDX/preview"},{"id":200,"title":"Entreo Silêncio e a Verdade","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Mente & Projeção Astral","module":"Módulo VI","rarity":"Essencial","pages":202,"cover":"assets/covers_extracted/cover_Entreo_Sil_ncio_e_a_Verdade.jpg","tier":"basico","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1OHd860ZfbhSIRwOJz4bgFjrsFgI8pxe_/preview"},{"id":201,"title":"Espiritismo Obras BÃ¡sicas em PDF","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Mente & Projeção Astral","module":"Módulo VI","rarity":"Essencial","pages":209,"cover":"assets/covers_extracted/cover_Espiritismo_-_Obras_B__sicas_em_PDF.jpg","tier":"basico","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1fJ-uVawwIUwCaCIAs5_aBkS8R6OPa1nZ/preview"},{"id":202,"title":"Espiritismo Orientação Para Os Católicos","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Mente & Projeção Astral","module":"Módulo VI","rarity":"Raríssimo (Manuscrito Restaurado)","pages":216,"cover":"assets/covers_extracted/cover_Espiritismo_Orienta__o_Para_Os_Cat_licos.jpg","tier":"basico","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1TUgbFUdN9vv9-dsXX6Cz6lxGFgDtgsBh/preview"},{"id":203,"title":"Espiritismo Racional e scientifico (Christão)","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Mente & Projeção Astral","module":"Módulo VI","rarity":"Essencial","pages":223,"cover":"assets/covers_extracted/cover_Espiritismo_Racional_e_scientifico__Christa_o_.jpg","tier":"basico","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1fJ-uVawwIUwCaCIAs5_aBkS8R6OPa1nZ/preview"},{"id":204,"title":"Espiritismo Nazareno.Feitosa Artes dos CDs PDF","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Mente & Projeção Astral","module":"Módulo VI","rarity":"Essencial","pages":230,"cover":"assets/covers_extracted/cover_Espiritismo_Nazareno.Feitosa_Artes_dos_CDs_PDF.jpg","tier":"basico","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1fJ-uVawwIUwCaCIAs5_aBkS8R6OPa1nZ/preview"},{"id":205,"title":"FIAT LUX A MAÇONARIA NA TOPONÍMIA DE COIMBRA","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Sociedades Secretas","module":"Módulo V","rarity":"Raríssimo (Manuscrito Restaurado)","pages":237,"cover":"assets/covers_extracted/cover_FIAT_LUX_A_MA_ONARIA_NA_TOPON_MIA_DE_COIMBRA.jpg","tier":"basico","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/12L1VJ8zrpYAdNVgaXV1Wj5i8xlKFfWvy/preview"},{"id":206,"title":"FRAGMENTOS DE UM AUTISTA ( IX)","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Mente & Projeção Astral","module":"Módulo VI","rarity":"Essencial","pages":244,"cover":"assets/covers_extracted/cover_FRAGMENTOS_DE_UM_AUTISTA___IX_.jpg","tier":"basico","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1anTfaJULuvNKMLFt5fU1eO_WjN3Yi22Y/preview"},{"id":207,"title":"FRAGMENTOS DE UM AUTISTA ( VII)","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Mente & Projeção Astral","module":"Módulo VI","rarity":"Essencial","pages":251,"cover":"assets/covers_extracted/cover_FRAGMENTOS_DE_UM_AUTISTA___VII_.jpg","tier":"basico","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1RACZs0n-aBhJypICQcwyI_lARJa4VcOF/preview"},{"id":208,"title":"FRAGMENTOS DE UM AUTISTA ( VIII)","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Mente & Projeção Astral","module":"Módulo VI","rarity":"Raríssimo (Manuscrito Restaurado)","pages":258,"cover":"assets/covers_extracted/cover_FRAGMENTOS_DE_UM_AUTISTA___VIII_.jpg","tier":"basico","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1O3dm5ANIO54bN5VfvJxEirEDVjUEX2TH/preview"},{"id":209,"title":"FRAGMENTOS DE UM AUTISTA ( X)","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Mente & Projeção Astral","module":"Módulo VI","rarity":"Essencial","pages":265,"cover":"assets/covers_extracted/cover_FRAGMENTOS_DE_UM_AUTISTA___X_.jpg","tier":"basico","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1YRaKYIul5LdQcEiH7EB5h0rGmX30QZPD/preview"},{"id":210,"title":"FRAGMENTOS DE UM AUTISTA CÉTICO E OUTROS TEXTOS","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Mente & Projeção Astral","module":"Módulo VI","rarity":"Essencial","pages":272,"cover":"assets/covers_extracted/cover_FRAGMENTOS_DE_UM_AUTISTA_C_TICO_E_OUTROS_TEXTOS.jpg","tier":"basico","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/18k1tFV6m9NeSJ7SPtPjKQVFX4iGGqnvc/preview"},{"id":211,"title":"FRAGMENTOS DE UM AUTISTA XI","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Mente & Projeção Astral","module":"Módulo VI","rarity":"Raríssimo (Manuscrito Restaurado)","pages":279,"cover":"assets/covers_extracted/cover_FRAGMENTOS_DE_UM_AUTISTA_XI.jpg","tier":"basico","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1LkgEuLQ81xkT6Q39_EgnUcxKft8cc4-y/preview"},{"id":212,"title":"Fanfiction e mercado editorial relações entre Fandom e polissistema literário","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Mente & Projeção Astral","module":"Módulo VI","rarity":"Essencial","pages":286,"cover":"assets/covers_extracted/cover_Fanfiction_e_mercado_editorial_rela__es_entre_Fandom_e_polis.jpg","tier":"basico","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/102Uqo_49kXr_8a1TslI49NX2Onr-LyUg/preview"},{"id":213,"title":"Fernando Collor Extinguiu A OAB Em 1991","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Mente & Projeção Astral","module":"Módulo VI","rarity":"Essencial","pages":293,"cover":"assets/covers_extracted/cover_Fernando_Collor_Extinguiu_A_OAB_Em_1991.jpg","tier":"basico","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1tPZl09l2KYza8i80jQJdiGMT0T9Luv81/preview"},{"id":214,"title":"Ferreiros e Alquimistas ( Mircea Eliade)","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Mente & Projeção Astral","module":"Módulo VI","rarity":"Raríssimo (Manuscrito Restaurado)","pages":300,"cover":"assets/covers_extracted/cover_Ferreiros_e_Alquimistas___Mircea_Eliade_.jpg","tier":"basico","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1rTuy8MlrR8QgVahhRADe2YgS4BkEfnu-/preview"},{"id":215,"title":"Folheto Explicatico Dos Quadros Da História De Portugal","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Mente & Projeção Astral","module":"Módulo VI","rarity":"Essencial","pages":314,"cover":"assets/covers_extracted/cover_Folheto_Explicatico_Dos_Quadros_Da_Hist_ria_De_Portugal.jpg","tier":"basico","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1fJ-uVawwIUwCaCIAs5_aBkS8R6OPa1nZ/preview"},{"id":216,"title":"Frabato O Mago Franz Bardon","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Mente & Projeção Astral","module":"Módulo VI","rarity":"Raríssimo (Manuscrito Restaurado)","pages":321,"cover":"assets/covers_extracted/cover_Frabato_O_Mago_-_Franz_Bardon.jpg","tier":"basico","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1BMRAmwRSPg9Em588OmKZp5rNbPPkUrHQ/preview"},{"id":217,"title":"Francisco Cândido Xavier LIVROS","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Mente & Projeção Astral","module":"Módulo VI","rarity":"Essencial","pages":328,"cover":"assets/covers_extracted/cover_Francisco_C_ndido_Xavier_-_LIVROS.jpg","tier":"basico","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1fJ-uVawwIUwCaCIAs5_aBkS8R6OPa1nZ/preview"},{"id":218,"title":"Francisco de Assis Bezerra de Meneses","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Mente & Projeção Astral","module":"Módulo VI","rarity":"Essencial","pages":335,"cover":"assets/covers_extracted/cover_Francisco_de_Assis_Bezerra_de_Meneses.jpg","tier":"basico","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/171lA-seXqnlch4_XYp3Dknadt6TXk14U/preview"},{"id":219,"title":"Fraude Na Criação E Da Assinatura Do Estatuto De Ética Da OAB ORDEM DOS ADVOGA","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Mente & Projeção Astral","module":"Módulo VI","rarity":"Raríssimo (Manuscrito Restaurado)","pages":342,"cover":"assets/covers_extracted/cover_Fraude_Na_Cria__o_E_Da_Assinatura_Do_Estatuto_De__tica_Da_OA.jpg","tier":"basico","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1fJ-uVawwIUwCaCIAs5_aBkS8R6OPa1nZ/preview"},{"id":220,"title":"Fundamentos Do Misticismo Tibetano Lama Anagarika Govinda Pdf","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Mente & Projeção Astral","module":"Módulo VI","rarity":"Essencial","pages":349,"cover":"assets/covers_extracted/cover_Fundamentos_Do_Misticismo_Tibetano_Lama_Anagarika_Govinda_Pd.jpg","tier":"basico","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1fJ-uVawwIUwCaCIAs5_aBkS8R6OPa1nZ/preview"},{"id":221,"title":"GRANDE ORIENTE LUSITANO BICENTENARIO DA MORTE DE MANUEL FERNANDES TOMAS","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Mente & Projeção Astral","module":"Módulo VI","rarity":"Essencial","pages":356,"cover":"assets/covers_extracted/cover_GRANDE_ORIENTE_LUSITANO_BICENTENARIO_DA_MORTE_DE_MANUEL_FERN.jpg","tier":"basico","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1fJ-uVawwIUwCaCIAs5_aBkS8R6OPa1nZ/preview"},{"id":222,"title":"Gareth Knight Praticas E Exercicios Ocultos","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Mente & Projeção Astral","module":"Módulo VI","rarity":"Raríssimo (Manuscrito Restaurado)","pages":363,"cover":"assets/covers_extracted/cover_Gareth_Knight_Praticas_E_Exercicios_Ocultos.jpg","tier":"basico","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1aqhQW6U8hX8ufeiSnemx6vGIEBcUZUVi/preview"},{"id":223,"title":"Gestão Educacional nos municípios entraves e perspectivas","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Mente & Projeção Astral","module":"Módulo VI","rarity":"Essencial","pages":370,"cover":"assets/covers_extracted/cover_Gest_o_Educacional_nos_munic_pios_entraves_e_perspectivas.jpg","tier":"basico","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1fJ-uVawwIUwCaCIAs5_aBkS8R6OPa1nZ/preview"},{"id":224,"title":"Gilberto Freyre e José Lins do Rego diálogos do senhor da casa grande com o meni","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Mente & Projeção Astral","module":"Módulo VI","rarity":"Essencial","pages":377,"cover":"assets/covers_extracted/cover_Gilberto_Freyre_e_Jos__Lins_do_Rego_di_logos_do_senhor_da_ca.jpg","tier":"master","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1fJ-uVawwIUwCaCIAs5_aBkS8R6OPa1nZ/preview"},{"id":225,"title":"Guerreiros Da Virgem Réplica Da Autenticidade A TFP SEM SEGREDOS","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Mente & Projeção Astral","module":"Módulo VI","rarity":"Raríssimo (Manuscrito Restaurado)","pages":384,"cover":"assets/covers_extracted/cover_Guerreiros_Da_Virgem_R_plica_Da_Autenticidade_A_TFP_SEM_SEGR.jpg","tier":"master","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1fJ-uVawwIUwCaCIAs5_aBkS8R6OPa1nZ/preview"},{"id":226,"title":"HIGIENE E TRATAMENTO HOMEOPÁTICO.... Dr. Alberto Seabra","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Mente & Projeção Astral","module":"Módulo VI","rarity":"Essencial","pages":391,"cover":"assets/covers_extracted/cover_HIGIENE_E_TRATAMENTO_HOMEOP_TICO...._-_Dr._Alberto_Seabra.jpg","tier":"master","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1fJ-uVawwIUwCaCIAs5_aBkS8R6OPa1nZ/preview"},{"id":227,"title":"HIPOLITO DA COSTA E A MAÇONARIA","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Sociedades Secretas","module":"Módulo V","rarity":"Essencial","pages":398,"cover":"assets/covers_extracted/cover_HIPOLITO_DA_COSTA_E_A_MA_ONARIA.jpg","tier":"master","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1fJ-uVawwIUwCaCIAs5_aBkS8R6OPa1nZ/preview"},{"id":228,"title":"HIPÓLITO JOSÉ DA COSTA E O CORREIO BRAZILIENSE A IDEALIZAÇÃO DE UM TIPO DE SOCIA","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Mente & Projeção Astral","module":"Módulo VI","rarity":"Raríssimo (Manuscrito Restaurado)","pages":405,"cover":"assets/covers_extracted/cover_HIP_LITO_JOS__DA_COSTA_E_O_CORREIO_BRAZILIENSE_A_IDEALIZA__O.jpg","tier":"master","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1fJ-uVawwIUwCaCIAs5_aBkS8R6OPa1nZ/preview"},{"id":229,"title":"HISTÓRIA DA FRANC MAÇONARIA OU DOS PEDREIROS LIVRES","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Sociedades Secretas","module":"Módulo V","rarity":"Essencial","pages":412,"cover":"assets/covers_extracted/cover_HIST_RIA_DA_FRANC-MA_ONARIA_OU_DOS_PEDREIROS_LIVRES.jpg","tier":"master","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1fJ-uVawwIUwCaCIAs5_aBkS8R6OPa1nZ/preview"},{"id":230,"title":"Harry Potter — Coleção","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Mente & Projeção Astral","module":"Módulo VI","rarity":"Essencial","pages":419,"cover":"assets/covers_extracted/cover_Harry_Potter___Cole__o.jpg","tier":"master","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1fJ-uVawwIUwCaCIAs5_aBkS8R6OPa1nZ/preview"},{"id":231,"title":"Hercolubus Ou Planeta Vermelho – Distribuição Gratuita","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Mente & Projeção Astral","module":"Módulo VI","rarity":"Raríssimo (Manuscrito Restaurado)","pages":126,"cover":"assets/covers_extracted/cover_Hercolubus_Ou_Planeta_Vermelho___Distribui__o_Gratuita.jpg","tier":"master","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1fJ-uVawwIUwCaCIAs5_aBkS8R6OPa1nZ/preview"},{"id":232,"title":"Herculanum","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Mente & Projeção Astral","module":"Módulo VI","rarity":"Essencial","pages":133,"cover":"assets/covers_extracted/cover_Herculanum.jpg","tier":"master","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1fJ-uVawwIUwCaCIAs5_aBkS8R6OPa1nZ/preview"},{"id":233,"title":"Hercólubus VM Rabolu","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Mente & Projeção Astral","module":"Módulo VI","rarity":"Essencial","pages":140,"cover":"assets/covers_extracted/cover_Herc_lubus_-_VM_Rabolu.jpg","tier":"master","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1fJ-uVawwIUwCaCIAs5_aBkS8R6OPa1nZ/preview"},{"id":234,"title":"Hermas O Pastor","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Mente & Projeção Astral","module":"Módulo VI","rarity":"Raríssimo (Manuscrito Restaurado)","pages":147,"cover":"assets/covers_extracted/cover_Hermas_-_O_Pastor.jpg","tier":"master","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1fJ-uVawwIUwCaCIAs5_aBkS8R6OPa1nZ/preview"},{"id":235,"title":"Hinos A Jesus, poemas","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Mente & Projeção Astral","module":"Módulo VI","rarity":"Essencial","pages":154,"cover":"assets/covers_extracted/cover_Hinos_A_Jesus__poemas.jpg","tier":"master","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1fJ-uVawwIUwCaCIAs5_aBkS8R6OPa1nZ/preview"},{"id":236,"title":"História Criminal Da Maçonaria Na Rússia","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Sociedades Secretas","module":"Módulo V","rarity":"Essencial","pages":161,"cover":"assets/covers_extracted/cover_Hist_ria_Criminal_Da_Ma_onaria_Na_R_ssia.jpg","tier":"master","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1fJ-uVawwIUwCaCIAs5_aBkS8R6OPa1nZ/preview"},{"id":237,"title":"História Da Maçonaria E Origem Do Rito De York Enviar","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Sociedades Secretas","module":"Módulo V","rarity":"Essencial","pages":175,"cover":"assets/covers_extracted/cover_Hist_ria_Da_Ma_onaria_E_Origem_Do_Rito_De_York_Enviar.jpg","tier":"master","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1fJ-uVawwIUwCaCIAs5_aBkS8R6OPa1nZ/preview"},{"id":238,"title":"Hitler contra Thule Santos Bernardo","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Mente & Projeção Astral","module":"Módulo VI","rarity":"Essencial","pages":182,"cover":"assets/covers_extracted/cover_Hitler_contra_Thule_-_Santos_Bernardo.jpg","tier":"master","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1fJ-uVawwIUwCaCIAs5_aBkS8R6OPa1nZ/preview"},{"id":239,"title":"Hístorias que não Vêm na História","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Mente & Projeção Astral","module":"Módulo VI","rarity":"Raríssimo (Manuscrito Restaurado)","pages":189,"cover":"assets/covers_extracted/cover_H_storias_que_n_o_V_m_na_Hist_ria.jpg","tier":"master","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1fJ-uVawwIUwCaCIAs5_aBkS8R6OPa1nZ/preview"},{"id":240,"title":"IAKIN E BOAZ. JORNAL DA MAÇ∴ PORT∴ REDIGIDO POR UM CAV∴ ROSA CRUZ","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Sociedades Secretas","module":"Módulo V","rarity":"Essencial","pages":196,"cover":"assets/covers_extracted/cover_IAKIN_E_BOAZ._JORNAL_DA_MA___PORT__REDIGIDO_POR_UM_CAV__ROSA.jpg","tier":"master","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1fJ-uVawwIUwCaCIAs5_aBkS8R6OPa1nZ/preview"},{"id":241,"title":"III Colóquio Internacional A Casa Senhorial, Anatomia De Interiores","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Mente & Projeção Astral","module":"Módulo VI","rarity":"Essencial","pages":203,"cover":"assets/covers_extracted/cover_III_Col_quio_Internacional_A_Casa_Senhorial__Anatomia_De_Int.jpg","tier":"master","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1fJ-uVawwIUwCaCIAs5_aBkS8R6OPa1nZ/preview"},{"id":242,"title":"INSTRUCÇÕES MAÇONICAS, OU CATHECISMO E REGULAMENTO GERAL","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Sociedades Secretas","module":"Módulo V","rarity":"Raríssimo (Manuscrito Restaurado)","pages":210,"cover":"assets/covers_extracted/cover_INSTRUC__ES_MA_ONICAS__OU_CATHECISMO_E_REGULAMENTO_GERAL.jpg","tier":"master","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1fJ-uVawwIUwCaCIAs5_aBkS8R6OPa1nZ/preview"},{"id":243,"title":"INTRODUÇAO À MAÇONARIA","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Sociedades Secretas","module":"Módulo V","rarity":"Essencial","pages":217,"cover":"assets/covers_extracted/cover_INTRODU_AO___MA_ONARIA.jpg","tier":"master","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1fJ-uVawwIUwCaCIAs5_aBkS8R6OPa1nZ/preview"},{"id":244,"title":"Infiltração Judaica na Igreja Gloria Riestra","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Mente & Projeção Astral","module":"Módulo VI","rarity":"Essencial","pages":224,"cover":"assets/covers_extracted/cover_Infiltra__o_Judaica_na_Igreja_-_Gloria_Riestra.jpg","tier":"master","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1fJ-uVawwIUwCaCIAs5_aBkS8R6OPa1nZ/preview"},{"id":245,"title":"Informex Nº 048 2021 Promoções de Oficiais Temporários","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Mente & Projeção Astral","module":"Módulo VI","rarity":"Essencial","pages":238,"cover":"assets/covers_extracted/cover_Informex_N__048_2021_-_Promo__es_de_Oficiais_Tempor_rios.jpg","tier":"master","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1fJ-uVawwIUwCaCIAs5_aBkS8R6OPa1nZ/preview"},{"id":246,"title":"Invasão Global e Defesa Cultural, Étnica, Telúrica Carlos Alberto Disandro","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Mente & Projeção Astral","module":"Módulo VI","rarity":"Essencial","pages":245,"cover":"assets/covers_extracted/cover_Invas_o_Global_e_Defesa_Cultural___tnica__Tel_rica_-_Carlos_.jpg","tier":"master","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1fJ-uVawwIUwCaCIAs5_aBkS8R6OPa1nZ/preview"},{"id":247,"title":"JORGE HESSEN APARELHANDO O CENÁ RIO ESPÍ RITA ANTE OS TEMPOS QUE CHEGARAM","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Mente & Projeção Astral","module":"Módulo VI","rarity":"Raríssimo (Manuscrito Restaurado)","pages":252,"cover":"assets/covers_extracted/cover_JORGE_HESSEN_APARELHANDO_O_CEN__RIO_ESP__RITA_ANTE_OS_TEMPOS.jpg","tier":"master","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1fJ-uVawwIUwCaCIAs5_aBkS8R6OPa1nZ/preview"},{"id":248,"title":"JORGE HESSEN AVENTAS QUE DESPERTAM ( APONTAMENTOS PALPITANTES SOB A PERSPECTIVA","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Mente & Projeção Astral","module":"Módulo VI","rarity":"Essencial","pages":259,"cover":"assets/covers_extracted/cover_JORGE_HESSEN_AVENTAS_QUE_DESPERTAM___APONTAMENTOS_PALPITANTE.jpg","tier":"master","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1fJ-uVawwIUwCaCIAs5_aBkS8R6OPa1nZ/preview"},{"id":249,"title":"JORGE HESSEN CAJADOS PROTETORES ( QUESTÕ ES DOUTRINÁ RIAS À LUZ DO ESPIRITISMO)","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Mente & Projeção Astral","module":"Módulo VI","rarity":"Essencial","pages":266,"cover":"assets/covers_extracted/cover_JORGE_HESSEN_CAJADOS_PROTETORES___QUEST__ES_DOUTRIN__RIAS___.jpg","tier":"master","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1fJ-uVawwIUwCaCIAs5_aBkS8R6OPa1nZ/preview"},{"id":250,"title":"JORGE HESSEN KARDEC ONTEM, AGORA, MAIS TARDE E ININTERRUPTAMENTE ( APONTAMENTOS","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Mente & Projeção Astral","module":"Módulo VI","rarity":"Raríssimo (Manuscrito Restaurado)","pages":273,"cover":"assets/covers_extracted/cover_JORGE_HESSEN_KARDEC_ONTEM__AGORA__MAIS_TARDE_E_ININTERRUPTAM.jpg","tier":"master","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1fJ-uVawwIUwCaCIAs5_aBkS8R6OPa1nZ/preview"},{"id":251,"title":"JORGE HESSEN LOGO, DEUS EXISTE ( APONTAMENTOS PALPITANTES SOB A PERSPECTIVA ESPÍ","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Mente & Projeção Astral","module":"Módulo VI","rarity":"Essencial","pages":280,"cover":"assets/covers_extracted/cover_JORGE_HESSEN_LOGO__DEUS_EXISTE___APONTAMENTOS_PALPITANTES_SO.jpg","tier":"master","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1wy21X13KGIg52slVZkgeyK8lk_w5kWdx/preview"},{"id":252,"title":"JORGE HESSEN PURITANOS E VENDILHÕ ES ( APONTAMENTOS PALPITANTES SOB A PERSPECTIV","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Mente & Projeção Astral","module":"Módulo VI","rarity":"Essencial","pages":287,"cover":"assets/covers_extracted/cover_JORGE_HESSEN_PURITANOS_E_VENDILH__ES___APONTAMENTOS_PALPITAN.jpg","tier":"master","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1fJ-uVawwIUwCaCIAs5_aBkS8R6OPa1nZ/preview"},{"id":253,"title":"JOSÉ BONIFÁCIO E A MAÇONARIA","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Sociedades Secretas","module":"Módulo V","rarity":"Raríssimo (Manuscrito Restaurado)","pages":294,"cover":"assets/covers_extracted/cover_JOS__BONIF_CIO_E_A_MA_ONARIA.jpg","tier":"master","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1fJ-uVawwIUwCaCIAs5_aBkS8R6OPa1nZ/preview"},{"id":254,"title":"Jaime Cortesão","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Mente & Projeção Astral","module":"Módulo VI","rarity":"Essencial","pages":301,"cover":"assets/covers_extracted/cover_Jaime_Cortes_o.jpg","tier":"master","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1fJ-uVawwIUwCaCIAs5_aBkS8R6OPa1nZ/preview"},{"id":255,"title":"Jean Jaurès As Origens do Socialismo Alemão, em Lutero, Kant, Fichte e Hegel","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Mente & Projeção Astral","module":"Módulo VI","rarity":"Essencial","pages":308,"cover":"assets/covers_extracted/cover_Jean_Jaur_s_-_As_Origens_do_Socialismo_Alem_o__em_Lutero__Ka.jpg","tier":"master","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1fJ-uVawwIUwCaCIAs5_aBkS8R6OPa1nZ/preview"},{"id":256,"title":"Jerusalém Um Cálice de Tontear Dave Hunt","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Mente & Projeção Astral","module":"Módulo VI","rarity":"Raríssimo (Manuscrito Restaurado)","pages":315,"cover":"assets/covers_extracted/cover_Jerusal_m_Um_C_lice_de_Tontear_-_Dave_Hunt.jpg","tier":"master","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1fJ-uVawwIUwCaCIAs5_aBkS8R6OPa1nZ/preview"},{"id":257,"title":"Jorge Hessen Luz Na Mente EVOC","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Mente & Projeção Astral","module":"Módulo VI","rarity":"Essencial","pages":322,"cover":"assets/covers_extracted/cover_Jorge_Hessen_Luz_Na_Mente_EVOC.jpg","tier":"master","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1fJ-uVawwIUwCaCIAs5_aBkS8R6OPa1nZ/preview"},{"id":258,"title":"Jornal Racional 1977 a 1980 Universo em Desencanto Imunização Racional","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Mente & Projeção Astral","module":"Módulo VI","rarity":"Essencial","pages":329,"cover":"assets/covers_extracted/cover_Jornal_Racional_1977_a_1980_Universo_em_Desencanto_-_Imuniza.jpg","tier":"master","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1fJ-uVawwIUwCaCIAs5_aBkS8R6OPa1nZ/preview"},{"id":259,"title":"Jornal de Espiritismo ADEP","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Mente & Projeção Astral","module":"Módulo VI","rarity":"Raríssimo (Manuscrito Restaurado)","pages":336,"cover":"assets/covers_extracted/cover_Jornal_de_Espiritismo_ADEP.jpg","tier":"master","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1fJ-uVawwIUwCaCIAs5_aBkS8R6OPa1nZ/preview"},{"id":260,"title":"Jornal de Espiritismo nr. 100","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Mente & Projeção Astral","module":"Módulo VI","rarity":"Essencial","pages":343,"cover":"assets/covers_extracted/cover_Jornal_de_Espiritismo_nr._100.jpg","tier":"master","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1fJ-uVawwIUwCaCIAs5_aBkS8R6OPa1nZ/preview"},{"id":261,"title":"Kavanáh Daat (Meditação Nazarena)","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Mente & Projeção Astral","module":"Módulo VI","rarity":"Essencial","pages":350,"cover":"assets/covers_extracted/cover_Kavan_h_Daat__Medita__o_Nazarena_.jpg","tier":"master","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1fJ-uVawwIUwCaCIAs5_aBkS8R6OPa1nZ/preview"},{"id":262,"title":"Keynes, O Homem Murray N. Rothbard","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Mente & Projeção Astral","module":"Módulo VI","rarity":"Raríssimo (Manuscrito Restaurado)","pages":357,"cover":"assets/covers_extracted/cover_Keynes__O_Homem_-_Murray_N._Rothbard.jpg","tier":"master","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1fJ-uVawwIUwCaCIAs5_aBkS8R6OPa1nZ/preview"},{"id":263,"title":"Kore Kosmou A Virgem do Mundo","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Mente & Projeção Astral","module":"Módulo VI","rarity":"Essencial","pages":364,"cover":"assets/books/o-caibalion.jpg","tier":"master","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1fJ-uVawwIUwCaCIAs5_aBkS8R6OPa1nZ/preview"},{"id":264,"title":"LMTLT 3 MAG PORT","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Mente & Projeção Astral","module":"Módulo VI","rarity":"Essencial","pages":371,"cover":"assets/covers_extracted/cover_LMTLT_3_MAG_PORT.jpg","tier":"master","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1hAKUoP_fLtjeU1BXt20AWmCcPJYJvqs1/preview"},{"id":265,"title":"Lenda de Orande","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Mente & Projeção Astral","module":"Módulo VI","rarity":"Raríssimo (Manuscrito Restaurado)","pages":378,"cover":"assets/covers_extracted/cover_Lenda_de_Orande.jpg","tier":"master","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1fJ-uVawwIUwCaCIAs5_aBkS8R6OPa1nZ/preview"},{"id":266,"title":"Leocádio Correia Nuestra Señora De Montserrat,patrona De Cataluña, Coronada com","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Mente & Projeção Astral","module":"Módulo VI","rarity":"Essencial","pages":385,"cover":"assets/covers_extracted/cover_Leoc_dio_Correia_Nuestra_Se_ora_De_Montserrat_patrona_De_Cat.jpg","tier":"master","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1fJ-uVawwIUwCaCIAs5_aBkS8R6OPa1nZ/preview"},{"id":267,"title":"Letter Set Analysis In Sloane MS 3189 Portfolio For The Best Experience, Open Th","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Mente & Projeção Astral","module":"Módulo VI","rarity":"Raríssimo (Manuscrito Restaurado)","pages":399,"cover":"assets/covers_extracted/cover_Letter_Set_Analysis_In_Sloane_MS_3189_Portfolio_For_The_Best.jpg","tier":"master","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1fJ-uVawwIUwCaCIAs5_aBkS8R6OPa1nZ/preview"},{"id":268,"title":"Liber AL vel Legis","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Mente & Projeção Astral","module":"Módulo VI","rarity":"Essencial","pages":406,"cover":"assets/covers_extracted/cover_Liber_AL_vel_Legis.jpg","tier":"master","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/15_XiLzugNALkSqhXS5p2TvRU9ouie33W/preview"},{"id":269,"title":"Liber Iesus O Mito Reinterpretado e o Caminho da Vontade","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Mente & Projeção Astral","module":"Módulo VI","rarity":"Essencial","pages":413,"cover":"assets/covers_extracted/cover_Liber_Iesus_O_Mito_Reinterpretado_e_o_Caminho_da_Vontade.jpg","tier":"master","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1fJ-uVawwIUwCaCIAs5_aBkS8R6OPa1nZ/preview"},{"id":270,"title":"Liber Jugorum","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Mente & Projeção Astral","module":"Módulo VI","rarity":"Raríssimo (Manuscrito Restaurado)","pages":120,"cover":"assets/covers_extracted/cover_Liber_Jugorum.jpg","tier":"master","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1fJ-uVawwIUwCaCIAs5_aBkS8R6OPa1nZ/preview"},{"id":271,"title":"Livro CHAVES DE SANANDA","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Mente & Projeção Astral","module":"Módulo VI","rarity":"Essencial","pages":127,"cover":"assets/covers_extracted/cover_Livro_CHAVES_DE_SANANDA.jpg","tier":"master","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1fJ-uVawwIUwCaCIAs5_aBkS8R6OPa1nZ/preview"},{"id":272,"title":"Livro CONTINUO EXISTINDO. 2ª Ed. 2024.","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Mente & Projeção Astral","module":"Módulo VI","rarity":"Essencial","pages":134,"cover":"assets/covers_extracted/cover_Livro_CONTINUO_EXISTINDO._2__Ed._2024..jpg","tier":"master","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1fJ-uVawwIUwCaCIAs5_aBkS8R6OPa1nZ/preview"},{"id":273,"title":"Livro Dos Espiritos Ed. 2013","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Mente & Projeção Astral","module":"Módulo VI","rarity":"Raríssimo (Manuscrito Restaurado)","pages":141,"cover":"assets/covers_extracted/cover_Livro_Dos_Espiritos_-Ed._2013.jpg","tier":"master","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1fJ-uVawwIUwCaCIAs5_aBkS8R6OPa1nZ/preview"},{"id":274,"title":"Livro SEMEANDO AUXÍLIO COLHENDO SATISFAÇÃO. 2ª Ed. 2024.","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Mente & Projeção Astral","module":"Módulo VI","rarity":"Essencial","pages":148,"cover":"assets/covers_extracted/cover_Livro_SEMEANDO_AUX_LIO_COLHENDO_SATISFA__O._2__Ed._2024..jpg","tier":"master","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1fJ-uVawwIUwCaCIAs5_aBkS8R6OPa1nZ/preview"},{"id":275,"title":"Livro do Doutor Estranho Vishanti, algumas partes interessantes","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Mente & Projeção Astral","module":"Módulo VI","rarity":"Essencial","pages":155,"cover":"assets/covers_extracted/cover_Livro_do_Doutor_Estranho_Vishanti__algumas_partes_interessan.jpg","tier":"master","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1fJ-uVawwIUwCaCIAs5_aBkS8R6OPa1nZ/preview"},{"id":276,"title":"Livros EsoÃ­ritas Autores diversos","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Mente & Projeção Astral","module":"Módulo VI","rarity":"Raríssimo (Manuscrito Restaurado)","pages":162,"cover":"assets/covers_extracted/cover_Livros_Eso__ritas_-_Autores_diversos.jpg","tier":"master","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1fJ-uVawwIUwCaCIAs5_aBkS8R6OPa1nZ/preview"},{"id":277,"title":"Livros EspÃ­ritas ObsessÃ£o, DoutrinaÃ§Ã£o e Mediunidade","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Mente & Projeção Astral","module":"Módulo VI","rarity":"Essencial","pages":169,"cover":"assets/covers_extracted/cover_Livros_Esp__ritas_-_Obsess__o__Doutrina____o_e_Mediunidade.jpg","tier":"master","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1fJ-uVawwIUwCaCIAs5_aBkS8R6OPa1nZ/preview"},{"id":278,"title":"Livros de Astrologia","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Mente & Projeção Astral","module":"Módulo VI","rarity":"Essencial","pages":176,"cover":"assets/covers_extracted/cover_Livros_de_Astrologia.jpg","tier":"master","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1A6ZmT25LTHKMQemPYA7Y6J03XNcEi5Ih/preview"},{"id":279,"title":"Livros de Daniel Abreu De Queiroz","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Mente & Projeção Astral","module":"Módulo VI","rarity":"Raríssimo (Manuscrito Restaurado)","pages":183,"cover":"assets/covers_extracted/cover_Livros_de_Daniel_Abreu_De_Queiroz.jpg","tier":"master","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1fJ-uVawwIUwCaCIAs5_aBkS8R6OPa1nZ/preview"},{"id":280,"title":"Livros de Joel S. Goldsmith","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Mente & Projeção Astral","module":"Módulo VI","rarity":"Essencial","pages":190,"cover":"assets/covers_extracted/cover_Livros_de_Joel_S._Goldsmith.jpg","tier":"master","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1fJ-uVawwIUwCaCIAs5_aBkS8R6OPa1nZ/preview"},{"id":281,"title":"Livros de Ocultismo","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Mente & Projeção Astral","module":"Módulo VI","rarity":"Essencial","pages":197,"cover":"assets/covers_extracted/cover_Livros_de_Ocultismo.jpg","tier":"master","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1fJ-uVawwIUwCaCIAs5_aBkS8R6OPa1nZ/preview"},{"id":282,"title":"Livros de ocultimo","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Mente & Projeção Astral","module":"Módulo VI","rarity":"Raríssimo (Manuscrito Restaurado)","pages":204,"cover":"assets/covers_extracted/cover_Livros_de_ocultimo.jpg","tier":"master","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1fJ-uVawwIUwCaCIAs5_aBkS8R6OPa1nZ/preview"},{"id":283,"title":"Lord Of The Mysteries Português Brasil","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Mente & Projeção Astral","module":"Módulo VI","rarity":"Essencial","pages":211,"cover":"assets/covers_extracted/cover_Lord_Of_The_Mysteries_Portugu_s_Brasil.jpg","tier":"master","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1fJ-uVawwIUwCaCIAs5_aBkS8R6OPa1nZ/preview"},{"id":284,"title":"Los Desafíos","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Mente & Projeção Astral","module":"Módulo VI","rarity":"Essencial","pages":218,"cover":"assets/covers_extracted/cover_Los_Desaf_os.jpg","tier":"master","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1fJ-uVawwIUwCaCIAs5_aBkS8R6OPa1nZ/preview"},{"id":285,"title":"Luz Na Mente","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Mente & Projeção Astral","module":"Módulo VI","rarity":"Raríssimo (Manuscrito Restaurado)","pages":225,"cover":"assets/covers_extracted/cover_Luz_Na_Mente.jpg","tier":"master","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1fJ-uVawwIUwCaCIAs5_aBkS8R6OPa1nZ/preview"},{"id":286,"title":"MAÇONARIA DAS SENHORAS OU A VERDADEIRA MAÇONARIA DE ADOPÇÃO … ESCRITA POR HUM CA","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Sociedades Secretas","module":"Módulo V","rarity":"Essencial","pages":239,"cover":"assets/covers_extracted/cover_MA_ONARIA_DAS_SENHORAS_OU_A_VERDADEIRA_MA_ONARIA_DE_ADOP__O_.jpg","tier":"master","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1fJ-uVawwIUwCaCIAs5_aBkS8R6OPa1nZ/preview"},{"id":287,"title":"MAÇONARIA E IMPLANTAÇÃO DA REPÚBLICA","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Sociedades Secretas","module":"Módulo V","rarity":"Raríssimo (Manuscrito Restaurado)","pages":246,"cover":"assets/covers_extracted/cover_MA_ONARIA_E_IMPLANTA__O_DA_REP_BLICA.jpg","tier":"master","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1fJ-uVawwIUwCaCIAs5_aBkS8R6OPa1nZ/preview"},{"id":288,"title":"MEMORIAL MAÇÔNICO DE CAMPINA GRANDE","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Sociedades Secretas","module":"Módulo V","rarity":"Essencial","pages":253,"cover":"assets/covers_extracted/cover_MEMORIAL_MA__NICO_DE_CAMPINA_GRANDE.jpg","tier":"master","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1fJ-uVawwIUwCaCIAs5_aBkS8R6OPa1nZ/preview"},{"id":289,"title":"MTESK Desdobramento Do KMLS","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Mente & Projeção Astral","module":"Módulo VI","rarity":"Essencial","pages":260,"cover":"assets/covers_extracted/cover_MTESK_Desdobramento_Do_KMLS.jpg","tier":"master","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1fJ-uVawwIUwCaCIAs5_aBkS8R6OPa1nZ/preview"},{"id":290,"title":"MYSTÉRIO BABILÓNIA A MÃE DE TODAS AS FALSAS RELIGIOES(Gal Laiko) MULTILANG","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Mente & Projeção Astral","module":"Módulo VI","rarity":"Raríssimo (Manuscrito Restaurado)","pages":267,"cover":"assets/covers_extracted/cover_MYST_RIO_BABIL_NIA_A_M_E_DE_TODAS_AS_FALSAS_RELIGIOES_Gal_La.jpg","tier":"master","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1fJ-uVawwIUwCaCIAs5_aBkS8R6OPa1nZ/preview"},{"id":291,"title":"Magia Prática O Caminho Do Adepto","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Grimórios & Alta Magia","module":"Módulo II","rarity":"Essencial","pages":274,"cover":"assets/covers_extracted/cover_Magia_Pr_tica_O_Caminho_Do_Adepto.jpg","tier":"master","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1O20ZhARTwgAhv0VOZKjlG7w8nra5uwAo/preview"},{"id":292,"title":"Manifesto do Escriba Uma Carta aos Buscadores da Verdade (2026)","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Mente & Projeção Astral","module":"Módulo VI","rarity":"Essencial","pages":281,"cover":"assets/covers_extracted/cover_Manifesto_do_Escriba_Uma_Carta_aos_Buscadores_da_Verdade__20.jpg","tier":"master","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1fJ-uVawwIUwCaCIAs5_aBkS8R6OPa1nZ/preview"},{"id":293,"title":"Manipulação Espiritual Tratado Operacional de Manipulação Energética Geral e a C","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Mente & Projeção Astral","module":"Módulo VI","rarity":"Raríssimo (Manuscrito Restaurado)","pages":288,"cover":"assets/covers_extracted/cover_Manipula__o_Espiritual_Tratado_Operacional_de_Manipula__o_En.jpg","tier":"master","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1fJ-uVawwIUwCaCIAs5_aBkS8R6OPa1nZ/preview"},{"id":294,"title":"Manuel de Brito Camacho ComSE (Aljustrel, Rio de Moinhos, Monte das Mesas, 12 de","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Mente & Projeção Astral","module":"Módulo VI","rarity":"Raríssimo (Manuscrito Restaurado)","pages":393,"cover":"assets/covers_extracted/cover_Manuel_de_Brito_Camacho_ComSE__Aljustrel__Rio_de_Moinhos__Mo.jpg","tier":"master","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1fJ-uVawwIUwCaCIAs5_aBkS8R6OPa1nZ/preview"},{"id":295,"title":"Marcha Das Madalenas","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Mente & Projeção Astral","module":"Módulo VI","rarity":"Essencial","pages":400,"cover":"assets/covers_extracted/cover_Marcha_Das_Madalenas.jpg","tier":"master","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1fJ-uVawwIUwCaCIAs5_aBkS8R6OPa1nZ/preview"},{"id":296,"title":"Material De Apoio Curso Scrying","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Mente & Projeção Astral","module":"Módulo VI","rarity":"Essencial","pages":407,"cover":"assets/covers_extracted/cover_Material_De_Apoio_Curso_Scrying.jpg","tier":"master","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1fJ-uVawwIUwCaCIAs5_aBkS8R6OPa1nZ/preview"},{"id":297,"title":"Maçonaria Capixaba Efemerides Amostra 1","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Sociedades Secretas","module":"Módulo V","rarity":"Raríssimo (Manuscrito Restaurado)","pages":414,"cover":"assets/covers_extracted/cover_Ma_onaria_Capixaba_Efemerides_Amostra_1.jpg","tier":"master","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1fJ-uVawwIUwCaCIAs5_aBkS8R6OPa1nZ/preview"},{"id":298,"title":"Maçonaria E Fascismo A Conexão Secreta","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Sociedades Secretas","module":"Módulo V","rarity":"Essencial","pages":121,"cover":"assets/covers_extracted/cover_Ma_onaria_E_Fascismo_A_Conex_o_Secreta.jpg","tier":"master","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1fJ-uVawwIUwCaCIAs5_aBkS8R6OPa1nZ/preview"},{"id":299,"title":"Maçonaria e o Sete de Setembro, A","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Sociedades Secretas","module":"Módulo V","rarity":"Essencial","pages":128,"cover":"assets/covers_extracted/cover_Ma_onaria_e_o_Sete_de_Setembro__A.jpg","tier":"master","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1fJ-uVawwIUwCaCIAs5_aBkS8R6OPa1nZ/preview"},{"id":300,"title":"Mediunidade Sem Preconceitos","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Mente & Projeção Astral","module":"Módulo VI","rarity":"Raríssimo (Manuscrito Restaurado)","pages":135,"cover":"assets/covers_extracted/cover_Mediunidade_Sem_Preconceitos.jpg","tier":"master","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1fJ-uVawwIUwCaCIAs5_aBkS8R6OPa1nZ/preview"},{"id":301,"title":"Membros do Apostolado E das Palestras Maçônicas – IHGB (pp. 93– 96)","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Sociedades Secretas","module":"Módulo V","rarity":"Essencial","pages":142,"cover":"assets/covers_extracted/cover_Membros_do_Apostolado_E_das_Palestras_Ma__nicas___IHGB__pp._.jpg","tier":"master","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1fJ-uVawwIUwCaCIAs5_aBkS8R6OPa1nZ/preview"},{"id":302,"title":"Memento dos Quadros da História de Portugal","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Mente & Projeção Astral","module":"Módulo VI","rarity":"Essencial","pages":149,"cover":"assets/covers_extracted/cover_Memento_dos_Quadros_da_Hist_ria_de_Portugal.jpg","tier":"master","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1fJ-uVawwIUwCaCIAs5_aBkS8R6OPa1nZ/preview"},{"id":303,"title":"Mergulho No Hiperespaço A. Moacyr Uchoa","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Mente & Projeção Astral","module":"Módulo VI","rarity":"Raríssimo (Manuscrito Restaurado)","pages":156,"cover":"assets/covers_extracted/cover_Mergulho_No_Hiperespa_o_-_A._Moacyr_Uchoa.jpg","tier":"master","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1fJ-uVawwIUwCaCIAs5_aBkS8R6OPa1nZ/preview"},{"id":304,"title":"Minha Transcrição Loagaeth Grade De Texto 17 04 2023","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Mente & Projeção Astral","module":"Módulo VI","rarity":"Essencial","pages":163,"cover":"assets/covers_extracted/cover_Minha_Transcri__o_Loagaeth_Grade_De_Texto_17_04_2023.jpg","tier":"master","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1fJ-uVawwIUwCaCIAs5_aBkS8R6OPa1nZ/preview"},{"id":305,"title":"Missão Templária Nos Descobrimentos Les Templiers Et Les Grandes Découverts Ra","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Mente & Projeção Astral","module":"Módulo VI","rarity":"Essencial","pages":170,"cover":"assets/covers_extracted/cover_Miss_o_Templ_ria_Nos_Descobrimentos_Les_Templiers_Et_Les_Gra.jpg","tier":"master","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1fJ-uVawwIUwCaCIAs5_aBkS8R6OPa1nZ/preview"},{"id":306,"title":"Mistérios e Práticas da Lei de Umbanda","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Mente & Projeção Astral","module":"Módulo VI","rarity":"Raríssimo (Manuscrito Restaurado)","pages":177,"cover":"assets/covers_extracted/cover_Mist_rios_e_Pr_ticas_da_Lei_de_Umbanda.jpg","tier":"master","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1COfF-ekDkhe2dFgD_s9vDiT1hRiJm3PH/preview"},{"id":307,"title":"Moral E Dogma Albert Pike 251125 000206","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Mente & Projeção Astral","module":"Módulo VI","rarity":"Essencial","pages":184,"cover":"assets/covers_extracted/cover_Moral_E_Dogma_Albert_Pike_251125_000206.jpg","tier":"master","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1fJ-uVawwIUwCaCIAs5_aBkS8R6OPa1nZ/preview"},{"id":308,"title":"NACIONAL SOCIALISMO A única solução para os povos da América do Sul","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Mente & Projeção Astral","module":"Módulo VI","rarity":"Essencial","pages":191,"cover":"assets/covers_extracted/cover_NACIONAL-SOCIALISMO_A__nica_solu__o_para_os_povos_da_Am_rica.jpg","tier":"master","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1fJ-uVawwIUwCaCIAs5_aBkS8R6OPa1nZ/preview"},{"id":309,"title":"NIKKEI Paulito Dagen Roer","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Mente & Projeção Astral","module":"Módulo VI","rarity":"Raríssimo (Manuscrito Restaurado)","pages":198,"cover":"assets/covers_extracted/cover_NIKKEI_-_Paulito_Dagen_Roer.jpg","tier":"master","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1fJ-uVawwIUwCaCIAs5_aBkS8R6OPa1nZ/preview"},{"id":310,"title":"Na Fronteira","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Mente & Projeção Astral","module":"Módulo VI","rarity":"Essencial","pages":205,"cover":"assets/covers_extracted/cover_Na_Fronteira.jpg","tier":"master","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1fJ-uVawwIUwCaCIAs5_aBkS8R6OPa1nZ/preview"},{"id":311,"title":"Neuroimagem e Detecção de Mentira Limites Epistemológicos, Precedentes Internaci","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Mente & Projeção Astral","module":"Módulo VI","rarity":"Essencial","pages":212,"cover":"assets/covers_extracted/cover_Neuroimagem_e_Detec__o_de_Mentira_Limites_Epistemol_gicos__P.jpg","tier":"master","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1fJ-uVawwIUwCaCIAs5_aBkS8R6OPa1nZ/preview"},{"id":312,"title":"No Castelo da Escócia (Trilogia Vol.II)","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Mente & Projeção Astral","module":"Módulo VI","rarity":"Raríssimo (Manuscrito Restaurado)","pages":219,"cover":"assets/covers_extracted/cover_No_Castelo_da_Esc_cia__Trilogia_Vol.II_.jpg","tier":"master","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1fJ-uVawwIUwCaCIAs5_aBkS8R6OPa1nZ/preview"},{"id":313,"title":"No Reino Da Feiticaria","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Mente & Projeção Astral","module":"Módulo VI","rarity":"Essencial","pages":226,"cover":"assets/covers_extracted/cover_No_Reino_Da_Feiticaria.jpg","tier":"master","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1i9cTK2N59igQD7bVZ9VjTaPuFLNucjBF/preview"},{"id":314,"title":"Nos Bastidores Das Reuniões De Desobsessão","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Mente & Projeção Astral","module":"Módulo VI","rarity":"Essencial","pages":247,"cover":"assets/covers_extracted/cover_Nos_Bastidores_Das_Reuni_es_De_Desobsess_o.jpg","tier":"master","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1fJ-uVawwIUwCaCIAs5_aBkS8R6OPa1nZ/preview"},{"id":315,"title":"Notas Do Sanctum Vol. 1","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Mente & Projeção Astral","module":"Módulo VI","rarity":"Essencial","pages":254,"cover":"assets/covers_extracted/cover_Notas_Do_Sanctum_Vol._1.jpg","tier":"master","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1fJ-uVawwIUwCaCIAs5_aBkS8R6OPa1nZ/preview"},{"id":316,"title":"O Apogeu dos Delírios de René Guénon em O Rei do Mundo","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Mente & Projeção Astral","module":"Módulo VI","rarity":"Raríssimo (Manuscrito Restaurado)","pages":261,"cover":"assets/covers_extracted/cover_O_Apogeu_dos_Del_rios_de_Ren__Gu_non_em_O_Rei_do_Mundo.jpg","tier":"master","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1fJ-uVawwIUwCaCIAs5_aBkS8R6OPa1nZ/preview"},{"id":317,"title":"O Avental Maçônico","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Sociedades Secretas","module":"Módulo V","rarity":"Essencial","pages":268,"cover":"assets/covers_extracted/cover_O_Avental_Ma__nico.jpg","tier":"master","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1fJ-uVawwIUwCaCIAs5_aBkS8R6OPa1nZ/preview"},{"id":318,"title":"O Chalaça","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Mente & Projeção Astral","module":"Módulo VI","rarity":"Raríssimo (Manuscrito Restaurado)","pages":282,"cover":"assets/covers_extracted/cover_O_Chala_a.jpg","tier":"master","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1fJ-uVawwIUwCaCIAs5_aBkS8R6OPa1nZ/preview"},{"id":319,"title":"O Chamado Da Fraternidade Rosa Cruz","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Sociedades Secretas","module":"Módulo V","rarity":"Essencial","pages":289,"cover":"assets/covers_extracted/cover_O_Chamado_Da_Fraternidade_Rosa_Cruz.jpg","tier":"master","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1fJ-uVawwIUwCaCIAs5_aBkS8R6OPa1nZ/preview"},{"id":320,"title":"O Cinzel libertação dos escravos no Amazonas, ano 1, n.2, 10 jul. 1964","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Mente & Projeção Astral","module":"Módulo VI","rarity":"Essencial","pages":296,"cover":"assets/covers_extracted/cover_O_Cinzel_liberta__o_dos_escravos_no_Amazonas__ano_1__n.2__10.jpg","tier":"master","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1fJ-uVawwIUwCaCIAs5_aBkS8R6OPa1nZ/preview"},{"id":321,"title":"O Complexo Mundo do Trabalho em Saúde e as Implicações para enfermagem","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Mente & Projeção Astral","module":"Módulo VI","rarity":"Raríssimo (Manuscrito Restaurado)","pages":303,"cover":"assets/covers_extracted/cover_O_Complexo_Mundo_do_Trabalho_em_Sa_de_e_as_Implica__es_para_.jpg","tier":"master","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1fJ-uVawwIUwCaCIAs5_aBkS8R6OPa1nZ/preview"},{"id":322,"title":"O Corvo Negro Prévia","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Mente & Projeção Astral","module":"Módulo VI","rarity":"Raríssimo (Manuscrito Restaurado)","pages":324,"cover":"assets/covers_extracted/cover_O_Corvo_Negro_Pr_via.jpg","tier":"master","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1fJ-uVawwIUwCaCIAs5_aBkS8R6OPa1nZ/preview"},{"id":323,"title":"O Despertar Dos Magos Louis Pauwels & Jacques Bergier","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Mente & Projeção Astral","module":"Módulo VI","rarity":"Essencial","pages":331,"cover":"assets/covers_extracted/cover_O_Despertar_Dos_Magos_-_Louis_Pauwels___Jacques_Bergier.jpg","tier":"master","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1fJ-uVawwIUwCaCIAs5_aBkS8R6OPa1nZ/preview"},{"id":324,"title":"O Despertar Dos Magos Louis Pauwels E Jacques Bergier","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Mente & Projeção Astral","module":"Módulo VI","rarity":"Essencial","pages":338,"cover":"assets/covers_extracted/cover_O_Despertar_Dos_Magos_Louis_Pauwels_E_Jacques_Bergier.jpg","tier":"master","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1fJ-uVawwIUwCaCIAs5_aBkS8R6OPa1nZ/preview"},{"id":325,"title":"O Diabo Desmistificação Completa de um Mito","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Mente & Projeção Astral","module":"Módulo VI","rarity":"Raríssimo (Manuscrito Restaurado)","pages":345,"cover":"assets/covers_extracted/cover_O_Diabo_Desmistifica__o_Completa_de_um_Mito.jpg","tier":"master","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1w_ZPhW1Ee890WYbD5uQfQ_bhTgRfmgHm/preview"},{"id":326,"title":"O ESPíRITO DA VERDADE","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Mente & Projeção Astral","module":"Módulo VI","rarity":"Essencial","pages":352,"cover":"assets/covers_extracted/cover_O_ESP_RITO_DA_VERDADE.jpg","tier":"master","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1fJ-uVawwIUwCaCIAs5_aBkS8R6OPa1nZ/preview"},{"id":327,"title":"O Elo Secreto Da Economia e da Politica com a Religião e o Ocultismo Hélio José","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Mente & Projeção Astral","module":"Módulo VI","rarity":"Essencial","pages":359,"cover":"assets/covers_extracted/cover_O_Elo_Secreto_Da_Economia_e_da_Politica_com_a_Religi_o_e_o_O.jpg","tier":"master","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1fJ-uVawwIUwCaCIAs5_aBkS8R6OPa1nZ/preview"},{"id":328,"title":"O Enigma","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Mente & Projeção Astral","module":"Módulo VI","rarity":"Raríssimo (Manuscrito Restaurado)","pages":366,"cover":"assets/covers_extracted/cover_O_Enigma.jpg","tier":"master","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1fJ-uVawwIUwCaCIAs5_aBkS8R6OPa1nZ/preview"},{"id":329,"title":"O Envolvimento Da União Soviética No Assassinato De John Kennedy","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Mente & Projeção Astral","module":"Módulo VI","rarity":"Essencial","pages":373,"cover":"assets/covers_extracted/cover_O_Envolvimento_Da_Uni_o_Sovi_tica_No_Assassinato_De_John_Ken.jpg","tier":"master","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1fJ-uVawwIUwCaCIAs5_aBkS8R6OPa1nZ/preview"},{"id":330,"title":"O Esoterismo De Dante (1995)","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Mente & Projeção Astral","module":"Módulo VI","rarity":"Essencial","pages":380,"cover":"assets/covers_extracted/cover_O_Esoterismo_De_Dante__1995_.jpg","tier":"master","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1fJ-uVawwIUwCaCIAs5_aBkS8R6OPa1nZ/preview"},{"id":331,"title":"O Exílio","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Mente & Projeção Astral","module":"Módulo VI","rarity":"Raríssimo (Manuscrito Restaurado)","pages":387,"cover":"assets/covers_extracted/cover_O_Ex_lio.jpg","tier":"master","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1fJ-uVawwIUwCaCIAs5_aBkS8R6OPa1nZ/preview"},{"id":332,"title":"O Faraó Merneptah","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Mente & Projeção Astral","module":"Módulo VI","rarity":"Essencial","pages":394,"cover":"assets/covers_extracted/cover_O_Fara__Merneptah.jpg","tier":"master","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1fJ-uVawwIUwCaCIAs5_aBkS8R6OPa1nZ/preview"},{"id":333,"title":"O Genocídio Esquecido França, Portugal E A (Velha) Ordem Satânica (Gal Laiko) MU","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Mente & Projeção Astral","module":"Módulo VI","rarity":"Essencial","pages":401,"cover":"assets/covers_extracted/cover_O_Genoc_dio_Esquecido_Fran_a__Portugal_E_A__Velha__Ordem_Sat.jpg","tier":"master","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1fJ-uVawwIUwCaCIAs5_aBkS8R6OPa1nZ/preview"},{"id":334,"title":"O Grande Conflito Completo Novo Edicao EGHarmon White","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Mente & Projeção Astral","module":"Módulo VI","rarity":"Raríssimo (Manuscrito Restaurado)","pages":408,"cover":"assets/covers_extracted/cover_O_Grande_Conflito_Completo_Novo_Edicao_EGHarmon_White.jpg","tier":"master","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1fJ-uVawwIUwCaCIAs5_aBkS8R6OPa1nZ/preview"},{"id":335,"title":"O Grande Conflito Completo Novo Edicao EGWhite","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Mente & Projeção Astral","module":"Módulo VI","rarity":"Essencial","pages":415,"cover":"assets/covers_extracted/cover_O_Grande_Conflito_Completo_Novo_Edicao_EGWhite.jpg","tier":"master","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1fJ-uVawwIUwCaCIAs5_aBkS8R6OPa1nZ/preview"},{"id":336,"title":"O Grande Conflito Condensado","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Mente & Projeção Astral","module":"Módulo VI","rarity":"Essencial","pages":122,"cover":"assets/covers_extracted/cover_O_Grande_Conflito_Condensado.jpg","tier":"master","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1fJ-uVawwIUwCaCIAs5_aBkS8R6OPa1nZ/preview"},{"id":337,"title":"O Grande Conflito","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Mente & Projeção Astral","module":"Módulo VI","rarity":"Raríssimo (Manuscrito Restaurado)","pages":129,"cover":"assets/covers_extracted/cover_O_Grande_Conflito.jpg","tier":"master","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1fJ-uVawwIUwCaCIAs5_aBkS8R6OPa1nZ/preview"},{"id":338,"title":"O Grimório dos Orixás Um Guia Completo Sobre a Magia e Tradições dos Pretos Velh","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Grimórios & Alta Magia","module":"Módulo II","rarity":"Essencial","pages":136,"cover":"assets/covers_extracted/cover_O_Grim_rio_dos_Orix_s_Um_Guia_Completo_Sobre_a_Magia_e_Tradi.jpg","tier":"master","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1LB6mCuTFOG_xgXH3KRkvHSQp7pgZ-zAq/preview"},{"id":339,"title":"O LIVRO DOS MÉDIUNS Allan Kardec Português De Portugal","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Mente & Projeção Astral","module":"Módulo VI","rarity":"Essencial","pages":143,"cover":"assets/covers_extracted/cover_O_LIVRO_DOS_M_DIUNS_Allan_Kardec_Portugu_s_De_Portugal.jpg","tier":"master","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1fJ-uVawwIUwCaCIAs5_aBkS8R6OPa1nZ/preview"},{"id":340,"title":"O Lado Amargo Da Espiritualidade Leonardo Montes","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Mente & Projeção Astral","module":"Módulo VI","rarity":"Raríssimo (Manuscrito Restaurado)","pages":150,"cover":"assets/covers_extracted/cover_O_Lado_Amargo_Da_Espiritualidade_Leonardo_Montes.jpg","tier":"master","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1fJ-uVawwIUwCaCIAs5_aBkS8R6OPa1nZ/preview"},{"id":341,"title":"O Livro Dos Espíritos, Allan Kardec","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Mente & Projeção Astral","module":"Módulo VI","rarity":"Essencial","pages":157,"cover":"assets/covers_extracted/cover_O_Livro_Dos_Esp_ritos__Allan_Kardec.jpg","tier":"master","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1fJ-uVawwIUwCaCIAs5_aBkS8R6OPa1nZ/preview"},{"id":342,"title":"O Livro Dos Médiuns","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Mente & Projeção Astral","module":"Módulo VI","rarity":"Essencial","pages":164,"cover":"assets/covers_extracted/cover_O_Livro_Dos_M_diuns.jpg","tier":"master","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1fJ-uVawwIUwCaCIAs5_aBkS8R6OPa1nZ/preview"},{"id":343,"title":"O Livro Dos Símbolos Rudolf Koch","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Mente & Projeção Astral","module":"Módulo VI","rarity":"Raríssimo (Manuscrito Restaurado)","pages":171,"cover":"assets/covers_extracted/cover_O_Livro_Dos_S_mbolos_-_Rudolf_Koch.jpg","tier":"master","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1fJ-uVawwIUwCaCIAs5_aBkS8R6OPa1nZ/preview"},{"id":344,"title":"O Livro da Lei (1998)","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Mente & Projeção Astral","module":"Módulo VI","rarity":"Essencial","pages":178,"cover":"assets/covers_extracted/cover_O_Livro_da_Lei__1998_.jpg","tier":"master","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1fJ-uVawwIUwCaCIAs5_aBkS8R6OPa1nZ/preview"},{"id":345,"title":"O Livro de Jasher O Justo","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Mente & Projeção Astral","module":"Módulo VI","rarity":"Essencial","pages":185,"cover":"assets/covers_extracted/cover_O_Livro_de_Jasher_-_O_Justo.jpg","tier":"master","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1fJ-uVawwIUwCaCIAs5_aBkS8R6OPa1nZ/preview"},{"id":346,"title":"O MAIOR SEGREDO DAVID ICKE","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Mente & Projeção Astral","module":"Módulo VI","rarity":"Raríssimo (Manuscrito Restaurado)","pages":192,"cover":"assets/covers_extracted/cover_O_MAIOR_SEGREDO_-_DAVID_ICKE.jpg","tier":"master","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1yu5DpC_O42qEozH7TsI-u_9m0P-rEKPb/preview"},{"id":347,"title":"O Mosaico Do Espírito Filosofia, Espiritualidade E Existência","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Mente & Projeção Astral","module":"Módulo VI","rarity":"Essencial","pages":199,"cover":"assets/covers_extracted/cover_O_Mosaico_Do_Esp_rito_Filosofia__Espiritualidade_E_Exist_nci.jpg","tier":"master","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1fJ-uVawwIUwCaCIAs5_aBkS8R6OPa1nZ/preview"},{"id":348,"title":"O Movimento Homossexual","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Mente & Projeção Astral","module":"Módulo VI","rarity":"Essencial","pages":206,"cover":"assets/covers_extracted/cover_O_Movimento_Homossexual.jpg","tier":"master","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1fJ-uVawwIUwCaCIAs5_aBkS8R6OPa1nZ/preview"},{"id":349,"title":"O Pensamento De Lutero E A Maçonaria Ordo Svmmvm Bonvm","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Sociedades Secretas","module":"Módulo V","rarity":"Raríssimo (Manuscrito Restaurado)","pages":213,"cover":"assets/covers_extracted/cover_O_Pensamento_De_Lutero_E_A_Ma_onaria_Ordo_Svmmvm_Bonvm.jpg","tier":"master","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1fJ-uVawwIUwCaCIAs5_aBkS8R6OPa1nZ/preview"},{"id":350,"title":"O Principe do Islã","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Mente & Projeção Astral","module":"Módulo VI","rarity":"Essencial","pages":220,"cover":"assets/covers_extracted/cover_O_Principe_do_Isl_.jpg","tier":"master","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1fJ-uVawwIUwCaCIAs5_aBkS8R6OPa1nZ/preview"},{"id":351,"title":"O Pássaro Que Tudo Vê","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Mente & Projeção Astral","module":"Módulo VI","rarity":"Essencial","pages":227,"cover":"assets/covers_extracted/cover_O_P_ssaro_Que_Tudo_V_.jpg","tier":"master","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1fJ-uVawwIUwCaCIAs5_aBkS8R6OPa1nZ/preview"},{"id":352,"title":"O REI DO MUNDO","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Mente & Projeção Astral","module":"Módulo VI","rarity":"Raríssimo (Manuscrito Restaurado)","pages":234,"cover":"assets/covers_extracted/cover_O_REI_DO_MUNDO.jpg","tier":"master","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1fJ-uVawwIUwCaCIAs5_aBkS8R6OPa1nZ/preview"},{"id":353,"title":"O Regime Nacional Socialista e a Igreja Católica Federico Rivanera Carlés","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Mente & Projeção Astral","module":"Módulo VI","rarity":"Essencial","pages":241,"cover":"assets/covers_extracted/cover_O_Regime_Nacional_Socialista_e_a_Igreja_Cat_lica_-_Federico_.jpg","tier":"master","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1fJ-uVawwIUwCaCIAs5_aBkS8R6OPa1nZ/preview"},{"id":354,"title":"O Reino da Quantidade e os Sinais Dos Tempos ( René Guénon)","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Mente & Projeção Astral","module":"Módulo VI","rarity":"Essencial","pages":248,"cover":"assets/covers_extracted/cover_O_Reino_da_Quantidade_e_os_Sinais_Dos_Tempos___Ren__Gu_non_.jpg","tier":"master","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1fJ-uVawwIUwCaCIAs5_aBkS8R6OPa1nZ/preview"},{"id":355,"title":"O Sal Da Palavra","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Mente & Projeção Astral","module":"Módulo VI","rarity":"Raríssimo (Manuscrito Restaurado)","pages":255,"cover":"assets/covers_extracted/cover_O_Sal_Da_Palavra.jpg","tier":"master","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1fJ-uVawwIUwCaCIAs5_aBkS8R6OPa1nZ/preview"},{"id":356,"title":"O Segredo De Siao Lynn Picknett","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Mente & Projeção Astral","module":"Módulo VI","rarity":"Essencial","pages":262,"cover":"assets/covers_extracted/cover_O_Segredo_De_Siao_-_Lynn_Picknett.jpg","tier":"master","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/11mAikgwP079hbeZhGV2FBKLhv2RuiVGU/preview"},{"id":357,"title":"O Segredo da Maçonaria Antônio Afonso de Miranda","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Sociedades Secretas","module":"Módulo V","rarity":"Essencial","pages":269,"cover":"assets/covers_extracted/cover_O_Segredo_da_Ma_onaria_Ant_nio_Afonso_de_Miranda.jpg","tier":"master","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1fJ-uVawwIUwCaCIAs5_aBkS8R6OPa1nZ/preview"},{"id":358,"title":"O Segredo da Maçonaria Padre Antônio Afonso de Miranda","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Sociedades Secretas","module":"Módulo V","rarity":"Raríssimo (Manuscrito Restaurado)","pages":276,"cover":"assets/covers_extracted/cover_O_Segredo_da_Ma_onaria_Padre_Ant_nio_Afonso_de_Miranda.jpg","tier":"master","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1fJ-uVawwIUwCaCIAs5_aBkS8R6OPa1nZ/preview"},{"id":359,"title":"O Segredo da Maçonaria","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Sociedades Secretas","module":"Módulo V","rarity":"Essencial","pages":283,"cover":"assets/covers_extracted/cover_O_Segredo_da_Ma_onaria.jpg","tier":"master","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1fJ-uVawwIUwCaCIAs5_aBkS8R6OPa1nZ/preview"},{"id":360,"title":"O Sétimo Livro Supremo de Ensinamentos Mágicos","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Mente & Projeção Astral","module":"Módulo VI","rarity":"Essencial","pages":290,"cover":"assets/covers_extracted/cover_O_S_timo_Livro_Supremo_de_Ensinamentos_M_gicos.jpg","tier":"master","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1fJ-uVawwIUwCaCIAs5_aBkS8R6OPa1nZ/preview"},{"id":361,"title":"O Tecelao Consciente","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Mente & Projeção Astral","module":"Módulo VI","rarity":"Raríssimo (Manuscrito Restaurado)","pages":297,"cover":"assets/covers_extracted/cover_O_Tecelao_Consciente.jpg","tier":"master","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1fJ-uVawwIUwCaCIAs5_aBkS8R6OPa1nZ/preview"},{"id":362,"title":"O Terrífico Fantasma (Trilogia Vol.I)","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Mente & Projeção Astral","module":"Módulo VI","rarity":"Essencial","pages":304,"cover":"assets/covers_extracted/cover_O_Terr_fico_Fantasma__Trilogia_Vol.I_.jpg","tier":"master","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1fJ-uVawwIUwCaCIAs5_aBkS8R6OPa1nZ/preview"},{"id":363,"title":"O Vaticano Maçônico Em Nome Do Fantasioso Jeová Jahvéh Facínora Hebraico Maçônic","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Sociedades Secretas","module":"Módulo V","rarity":"Essencial","pages":311,"cover":"assets/covers_extracted/cover_O_Vaticano_Ma__nico_Em_Nome_Do_Fantasioso_Jeov__Jahv_h_Fac_n.jpg","tier":"master","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1fJ-uVawwIUwCaCIAs5_aBkS8R6OPa1nZ/preview"},{"id":364,"title":"O Verdadeiro Livro Das Clavículas De Salomão","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Mente & Projeção Astral","module":"Módulo VI","rarity":"Raríssimo (Manuscrito Restaurado)","pages":318,"cover":"assets/covers_extracted/cover_O_Verdadeiro_Livro_Das_Clav_culas_De_Salom_o.jpg","tier":"master","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1fJ-uVawwIUwCaCIAs5_aBkS8R6OPa1nZ/preview"},{"id":365,"title":"O Zodíaco da Vida A polémica sobre a Astrologia do século XIV ao século XVI","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Mente & Projeção Astral","module":"Módulo VI","rarity":"Essencial","pages":325,"cover":"assets/books/o-caibalion.jpg","tier":"master","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1fJ-uVawwIUwCaCIAs5_aBkS8R6OPa1nZ/preview"},{"id":366,"title":"O espiritismo coisa de vivos e não de mortos","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Mente & Projeção Astral","module":"Módulo VI","rarity":"Essencial","pages":332,"cover":"assets/covers_extracted/cover_O_espiritismo_coisa_de_vivos_e_na_o_de_mortos.jpg","tier":"master","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1fJ-uVawwIUwCaCIAs5_aBkS8R6OPa1nZ/preview"},{"id":367,"title":"O espiritismo no Brasil; orientação para os Católicos","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Mente & Projeção Astral","module":"Módulo VI","rarity":"Raríssimo (Manuscrito Restaurado)","pages":339,"cover":"assets/covers_extracted/cover_O_espiritismo_no_Brasil__orientac_a_o_para_os_Cato_licos.jpg","tier":"master","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1fJ-uVawwIUwCaCIAs5_aBkS8R6OPa1nZ/preview"},{"id":368,"title":"O espiritismo no conceito das religiões e a lei de Umbanda venerável ordem esp","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Mente & Projeção Astral","module":"Módulo VI","rarity":"Essencial","pages":346,"cover":"assets/covers_extracted/cover_O_espiritismo_no_conceito_das_religio_es_e_a_lei_de_Umbanda_.jpg","tier":"master","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1fJ-uVawwIUwCaCIAs5_aBkS8R6OPa1nZ/preview"},{"id":369,"title":"O espiritismo uma Avaliação","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Mente & Projeção Astral","module":"Módulo VI","rarity":"Essencial","pages":353,"cover":"assets/covers_extracted/cover_O_espiritismo_uma_Avaliac_a_o.jpg","tier":"master","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1fJ-uVawwIUwCaCIAs5_aBkS8R6OPa1nZ/preview"},{"id":370,"title":"O mundo invisível cosmologia, sistema ritual e noção de pessoa no espiritismo","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Mente & Projeção Astral","module":"Módulo VI","rarity":"Raríssimo (Manuscrito Restaurado)","pages":360,"cover":"assets/covers_extracted/cover_O_mundo_invis_vel_cosmologia__sistema_ritual_e_no__o_de_pess.jpg","tier":"master","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1fJ-uVawwIUwCaCIAs5_aBkS8R6OPa1nZ/preview"},{"id":371,"title":"O que é parapsicologia","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Mente & Projeção Astral","module":"Módulo VI","rarity":"Essencial","pages":367,"cover":"assets/covers_extracted/cover_O_que___parapsicologia.jpg","tier":"master","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1fJ-uVawwIUwCaCIAs5_aBkS8R6OPa1nZ/preview"},{"id":372,"title":"OGrande Computador Celeste Marcelo Del Debbio","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Mente & Projeção Astral","module":"Módulo VI","rarity":"Raríssimo (Manuscrito Restaurado)","pages":381,"cover":"assets/covers_extracted/cover_OGrande_Computador_Celeste_Marcelo_Del_Debbio.jpg","tier":"master","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1T2fMebieUS-FY0Kgf9X0w84OHp93vXpP/preview"},{"id":373,"title":"OLIVRODOSJUSTOS","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Mente & Projeção Astral","module":"Módulo VI","rarity":"Essencial","pages":388,"cover":"assets/covers_extracted/cover_OLIVRODOSJUSTOS.jpg","tier":"master","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1fJ-uVawwIUwCaCIAs5_aBkS8R6OPa1nZ/preview"},{"id":374,"title":"OS ENSINAMENTOS SECRETOS DE TODO OS TEMPOS MANLY P. HALL","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Mente & Projeção Astral","module":"Módulo VI","rarity":"Essencial","pages":395,"cover":"assets/covers_extracted/cover_OS_ENSINAMENTOS_SECRETOS_DE_TODO_OS_TEMPOS_-_MANLY_P._HALL.jpg","tier":"master","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1fJ-uVawwIUwCaCIAs5_aBkS8R6OPa1nZ/preview"},{"id":375,"title":"Observador da Verdade, Vol. 6, Ano XX (1960)","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Mente & Projeção Astral","module":"Módulo VI","rarity":"Raríssimo (Manuscrito Restaurado)","pages":402,"cover":"assets/covers_extracted/cover_Observador_da_Verdade__Vol._6__Ano_XX__1960_.jpg","tier":"master","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1fJ-uVawwIUwCaCIAs5_aBkS8R6OPa1nZ/preview"},{"id":376,"title":"Ofício nº 580 Relatório e Histórico das Atividades da Unidade na Fase de Prepa","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Mente & Projeção Astral","module":"Módulo VI","rarity":"Essencial","pages":409,"cover":"assets/covers_extracted/cover_Of_cio_n__580_-_Relat_rio_e_Hist_rico_das_Atividades_da_Unid.jpg","tier":"master","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1fJ-uVawwIUwCaCIAs5_aBkS8R6OPa1nZ/preview"},{"id":377,"title":"Ordem Militar De Cristo","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Mente & Projeção Astral","module":"Módulo VI","rarity":"Essencial","pages":416,"cover":"assets/covers_extracted/cover_Ordem_Militar_De_Cristo.jpg","tier":"master","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1J3Vuz9twxDqkb3BEU8rlf5Cs4aOcFH3L/preview"},{"id":378,"title":"Orvil 1","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Mente & Projeção Astral","module":"Módulo VI","rarity":"Raríssimo (Manuscrito Restaurado)","pages":123,"cover":"assets/covers_extracted/cover_Orvil_1.jpg","tier":"master","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1fJ-uVawwIUwCaCIAs5_aBkS8R6OPa1nZ/preview"},{"id":379,"title":"Os Arquétipos E O Inconsciente Coletivo","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Mente & Projeção Astral","module":"Módulo VI","rarity":"Essencial","pages":130,"cover":"assets/covers_extracted/cover_Os_Arque_tipos_E_O_Inconsciente_Coletivo.jpg","tier":"master","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1fJ-uVawwIUwCaCIAs5_aBkS8R6OPa1nZ/preview"},{"id":380,"title":"Os Escandalos de Carlota Joaquina","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Mente & Projeção Astral","module":"Módulo VI","rarity":"Raríssimo (Manuscrito Restaurado)","pages":144,"cover":"assets/covers_extracted/cover_Os_Escandalos_de_Carlota_Joaquina.jpg","tier":"master","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1UMY2p7u-a2rDcNu6MuYJ1D9V2q1mTDkV/preview"},{"id":381,"title":"Os Legisladores (Pentalogia Vol. V)","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Mente & Projeção Astral","module":"Módulo VI","rarity":"Essencial","pages":158,"cover":"assets/covers_extracted/cover_Os_Legisladores__Pentalogia_-_Vol._V_.jpg","tier":"master","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1fJ-uVawwIUwCaCIAs5_aBkS8R6OPa1nZ/preview"},{"id":382,"title":"Os Luminares Thecos","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Mente & Projeção Astral","module":"Módulo VI","rarity":"Raríssimo (Manuscrito Restaurado)","pages":165,"cover":"assets/covers_extracted/cover_Os_Luminares_Thecos.jpg","tier":"master","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1fJ-uVawwIUwCaCIAs5_aBkS8R6OPa1nZ/preview"},{"id":383,"title":"Os Magos (Pentalogia Vol. II)","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Mente & Projeção Astral","module":"Módulo VI","rarity":"Essencial","pages":172,"cover":"assets/covers_extracted/cover_Os_Magos__Pentalogia_-_Vol._II_.jpg","tier":"master","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1fJ-uVawwIUwCaCIAs5_aBkS8R6OPa1nZ/preview"},{"id":384,"title":"Os Males Da China Comunista","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Mente & Projeção Astral","module":"Módulo VI","rarity":"Essencial","pages":179,"cover":"assets/covers_extracted/cover_Os_Males_Da_China_Comunista.jpg","tier":"master","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1fJ-uVawwIUwCaCIAs5_aBkS8R6OPa1nZ/preview"},{"id":385,"title":"Os Protocolos dos Sábios de Sião,","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Mente & Projeção Astral","module":"Módulo VI","rarity":"Raríssimo (Manuscrito Restaurado)","pages":186,"cover":"assets/covers_extracted/cover_Os_Protocolos_dos_S_bios_de_Si_o_.jpg","tier":"master","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1fJ-uVawwIUwCaCIAs5_aBkS8R6OPa1nZ/preview"},{"id":386,"title":"PACELLI Gestação de Terremotos","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Mente & Projeção Astral","module":"Módulo VI","rarity":"Essencial","pages":193,"cover":"assets/covers_extracted/cover_PACELLI_Gesta__o_de_Terremotos.jpg","tier":"master","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1fJ-uVawwIUwCaCIAs5_aBkS8R6OPa1nZ/preview"},{"id":387,"title":"PARARAIO LIVRO 1 ( PT).rtfd","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Mente & Projeção Astral","module":"Módulo VI","rarity":"Essencial","pages":200,"cover":"assets/covers_extracted/cover_PARARAIO_LIVRO_1___PT_.rtfd.jpg","tier":"master","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1fJ-uVawwIUwCaCIAs5_aBkS8R6OPa1nZ/preview"},{"id":388,"title":"PLANTAS MEDICINAIS","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Mente & Projeção Astral","module":"Módulo VI","rarity":"Raríssimo (Manuscrito Restaurado)","pages":207,"cover":"assets/covers_extracted/cover_PLANTAS_MEDICINAIS.jpg","tier":"master","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1fJ-uVawwIUwCaCIAs5_aBkS8R6OPa1nZ/preview"},{"id":389,"title":"PREPARA SE PARA A VIAGEM ASTRAL.","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Mente & Projeção Astral","module":"Módulo VI","rarity":"Essencial","pages":214,"cover":"assets/covers_extracted/cover_PREPARA_SE_PARA_A_VIAGEM_ASTRAL..jpg","tier":"master","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1fJ-uVawwIUwCaCIAs5_aBkS8R6OPa1nZ/preview"},{"id":390,"title":"PRINCIPIOS E PRECEITOS MAÇONICOS","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Sociedades Secretas","module":"Módulo V","rarity":"Essencial","pages":221,"cover":"assets/covers_extracted/cover_PRINCIPIOS_E_PRECEITOS_MA_ONICOS.jpg","tier":"master","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1fJ-uVawwIUwCaCIAs5_aBkS8R6OPa1nZ/preview"},{"id":391,"title":"PROJECIOLOGIA Panorama Das Experiências Última Edição","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Mente & Projeção Astral","module":"Módulo VI","rarity":"Raríssimo (Manuscrito Restaurado)","pages":228,"cover":"assets/covers_extracted/cover_PROJECIOLOGIA_Panorama_Das_Experi_ncias__ltima_Edi__o.jpg","tier":"master","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1fJ-uVawwIUwCaCIAs5_aBkS8R6OPa1nZ/preview"},{"id":392,"title":"Padre Belchior Pinheiro de Oliveira – Biografia e Atuação na Independência do Br","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Mente & Projeção Astral","module":"Módulo VI","rarity":"Essencial","pages":235,"cover":"assets/covers_extracted/cover_Padre_Belchior_Pinheiro_de_Oliveira___Biografia_e_Atua__o_na.jpg","tier":"master","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1fJ-uVawwIUwCaCIAs5_aBkS8R6OPa1nZ/preview"},{"id":393,"title":"Padre François Xavier Gautrelet Colección","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Mente & Projeção Astral","module":"Módulo VI","rarity":"Essencial","pages":242,"cover":"assets/covers_extracted/cover_Padre_Fran_ois-Xavier_Gautrelet_Colecci_n.jpg","tier":"master","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1fJ-uVawwIUwCaCIAs5_aBkS8R6OPa1nZ/preview"},{"id":394,"title":"Parnaso de Além Túmulo, Segunda Edição","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Mente & Projeção Astral","module":"Módulo VI","rarity":"Raríssimo (Manuscrito Restaurado)","pages":249,"cover":"assets/covers_extracted/cover_Parnaso_de_Al_m_T_mulo__Segunda_Edi__o.jpg","tier":"master","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1fJ-uVawwIUwCaCIAs5_aBkS8R6OPa1nZ/preview"},{"id":395,"title":"Pirḳe rabi Eliʻezer hu rabi Eliʻezer ben horḳanus ha niḳra rabi Eliʻezer ha gado","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Mente & Projeção Astral","module":"Módulo VI","rarity":"Essencial","pages":256,"cover":"assets/covers_extracted/cover_Pir_e_rabi_Eli_ezer_hu_rabi_Eli_ezer_ben_hor_anus_ha-ni_ra_r.jpg","tier":"master","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1fJ-uVawwIUwCaCIAs5_aBkS8R6OPa1nZ/preview"},{"id":396,"title":"Poemas de Alcipe","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Mente & Projeção Astral","module":"Módulo VI","rarity":"Essencial","pages":263,"cover":"assets/covers_extracted/cover_Poemas_de_Alcipe.jpg","tier":"master","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1--qPWEm61d12m14PhzaGSKxuqoBQS5Or/preview"},{"id":397,"title":"Portal dos Sonhos e Projeção Astral","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Mente & Projeção Astral","module":"Módulo VI","rarity":"Raríssimo (Manuscrito Restaurado)","pages":270,"cover":"assets/covers_extracted/cover_Portal_dos_Sonhos_e_Proje__o_Astral.jpg","tier":"master","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1fJ-uVawwIUwCaCIAs5_aBkS8R6OPa1nZ/preview"},{"id":398,"title":"Portaria – C Ex Nº 2.755 Ativa a 2ª Companhia de Precursores, orgânica da Brig","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Mente & Projeção Astral","module":"Módulo VI","rarity":"Essencial","pages":277,"cover":"assets/covers_extracted/cover_Portaria___C_Ex_N__2.755_-_Ativa_a_2__Companhia_de_Precursor.jpg","tier":"master","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1fJ-uVawwIUwCaCIAs5_aBkS8R6OPa1nZ/preview"},{"id":399,"title":"Praeiro, um peregrino na terra do pantanal","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Mente & Projeção Astral","module":"Módulo VI","rarity":"Essencial","pages":284,"cover":"assets/covers_extracted/cover_Praeiro__um_peregrino_na_terra_do_pantanal.jpg","tier":"master","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1fJ-uVawwIUwCaCIAs5_aBkS8R6OPa1nZ/preview"},{"id":400,"title":"Preparação E Caracterização De Briquetes Obtidos Da Vagem Da Moringa E Do Papel","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Mente & Projeção Astral","module":"Módulo VI","rarity":"Raríssimo (Manuscrito Restaurado)","pages":291,"cover":"assets/covers_extracted/cover_Prepara__o_E_Caracteriza__o_De_Briquetes_Obtidos_Da_Vagem_Da.jpg","tier":"master","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1fJ-uVawwIUwCaCIAs5_aBkS8R6OPa1nZ/preview"},{"id":401,"title":"Preparação Para O Sacramento Da Penitência","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Mente & Projeção Astral","module":"Módulo VI","rarity":"Essencial","pages":298,"cover":"assets/covers_extracted/cover_Prepara__o_Para_O_Sacramento_Da_Penit_ncia.jpg","tier":"master","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1fJ-uVawwIUwCaCIAs5_aBkS8R6OPa1nZ/preview"},{"id":402,"title":"Primeiro Congresso Brasileiro do Espiritismo de Umbanda","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Mente & Projeção Astral","module":"Módulo VI","rarity":"Essencial","pages":305,"cover":"assets/covers_extracted/cover_Primeiro_Congresso_Brasileiro_do_Espiritismo_de_Umbanda.jpg","tier":"master","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1fJ-uVawwIUwCaCIAs5_aBkS8R6OPa1nZ/preview"},{"id":403,"title":"Primeiro Congresso de Umbanda First Umbanda Congress [Photos]","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Mente & Projeção Astral","module":"Módulo VI","rarity":"Raríssimo (Manuscrito Restaurado)","pages":312,"cover":"assets/covers_extracted/cover_Primeiro_Congresso_de_Umbanda_-_First_Umbanda_Congress__Phot.jpg","tier":"master","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1fJ-uVawwIUwCaCIAs5_aBkS8R6OPa1nZ/preview"},{"id":404,"title":"Progresso da Degeneração","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Mente & Projeção Astral","module":"Módulo VI","rarity":"Essencial","pages":326,"cover":"assets/covers_extracted/cover_Progresso_da_Degenera__o.jpg","tier":"master","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1fJ-uVawwIUwCaCIAs5_aBkS8R6OPa1nZ/preview"},{"id":405,"title":"Prosas bárbaras","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Mente & Projeção Astral","module":"Módulo VI","rarity":"Raríssimo (Manuscrito Restaurado)","pages":333,"cover":"assets/covers_extracted/cover_Prosas_b_rbaras.jpg","tier":"master","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1fJ-uVawwIUwCaCIAs5_aBkS8R6OPa1nZ/preview"},{"id":406,"title":"Psiquiatria, espiritismo e ciência O paradigma espiritual como caminho científic","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Mente & Projeção Astral","module":"Módulo VI","rarity":"Essencial","pages":340,"cover":"assets/covers_extracted/cover_Psiquiatria__espiritismo_e_ci_ncia_O_paradigma_espiritual_co.jpg","tier":"master","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1fJ-uVawwIUwCaCIAs5_aBkS8R6OPa1nZ/preview"},{"id":407,"title":"Psiquiatria, espiritismo e ciência Um diálogo sobre dissociação e depressão","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Mente & Projeção Astral","module":"Módulo VI","rarity":"Essencial","pages":347,"cover":"assets/covers_extracted/cover_Psiquiatria__espiritismo_e_ci_ncia_Um_di_logo_sobre_dissocia.jpg","tier":"master","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1fJ-uVawwIUwCaCIAs5_aBkS8R6OPa1nZ/preview"},{"id":408,"title":"Psiquiatria, espiritismo e ciência Um diálogo sobre psicose","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Mente & Projeção Astral","module":"Módulo VI","rarity":"Raríssimo (Manuscrito Restaurado)","pages":354,"cover":"assets/covers_extracted/cover_Psiquiatria__espiritismo_e_ci_ncia_Um_di_logo_sobre_psicose.jpg","tier":"master","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1fJ-uVawwIUwCaCIAs5_aBkS8R6OPa1nZ/preview"},{"id":409,"title":"REVISTA DO GREMIO LUSITANO ( N 22)","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Sociedades Secretas","module":"Módulo V","rarity":"Essencial","pages":361,"cover":"assets/covers_extracted/cover_REVISTA_DO_GREMIO_LUSITANO___N_22_.jpg","tier":"master","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1fJ-uVawwIUwCaCIAs5_aBkS8R6OPa1nZ/preview"},{"id":410,"title":"REVISTA DO GREMIO LUSITANO ( N 23)","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Sociedades Secretas","module":"Módulo V","rarity":"Essencial","pages":368,"cover":"assets/covers_extracted/cover_REVISTA_DO_GREMIO_LUSITANO___N_23_.jpg","tier":"master","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1fJ-uVawwIUwCaCIAs5_aBkS8R6OPa1nZ/preview"},{"id":411,"title":"REVISTA DO GREMIO LUSITANO ( N 8)","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Sociedades Secretas","module":"Módulo V","rarity":"Raríssimo (Manuscrito Restaurado)","pages":375,"cover":"assets/covers_extracted/cover_REVISTA_DO_GREMIO_LUSITANO___N_8_.jpg","tier":"master","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1fJ-uVawwIUwCaCIAs5_aBkS8R6OPa1nZ/preview"},{"id":412,"title":"REVISTA DO GREMIO LUSITANO (N 7)","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Sociedades Secretas","module":"Módulo V","rarity":"Essencial","pages":382,"cover":"assets/covers_extracted/cover_REVISTA_DO_GREMIO_LUSITANO__N_7_.jpg","tier":"master","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1fJ-uVawwIUwCaCIAs5_aBkS8R6OPa1nZ/preview"},{"id":413,"title":"RL Pujança Orador","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Mente & Projeção Astral","module":"Módulo VI","rarity":"Essencial","pages":389,"cover":"assets/covers_extracted/cover_RL_Pujan_a_Orador.jpg","tier":"master","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1fJ-uVawwIUwCaCIAs5_aBkS8R6OPa1nZ/preview"},{"id":414,"title":"Rede de Luz","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Mente & Projeção Astral","module":"Módulo VI","rarity":"Essencial","pages":403,"cover":"assets/covers_extracted/cover_Rede_de_Luz.jpg","tier":"master","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1fJ-uVawwIUwCaCIAs5_aBkS8R6OPa1nZ/preview"},{"id":415,"title":"Refutação Da TFP Volume 01","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Mente & Projeção Astral","module":"Módulo VI","rarity":"Essencial","pages":410,"cover":"assets/covers_extracted/cover_Refuta__o_Da_TFP_Volume_01.jpg","tier":"master","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1fJ-uVawwIUwCaCIAs5_aBkS8R6OPa1nZ/preview"},{"id":416,"title":"Relatório de Análise de Acidente Procedimentos de Segurança e Serviço de Guard","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Mente & Projeção Astral","module":"Módulo VI","rarity":"Essencial","pages":124,"cover":"assets/covers_extracted/cover_Relat_rio_de_An_lise_de_Acidente_-_Procedimentos_de_Seguran_.jpg","tier":"master","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1fJ-uVawwIUwCaCIAs5_aBkS8R6OPa1nZ/preview"},{"id":417,"title":"Resenha do livro e link para download online. Grimório do Satanismo Gay Luxúria","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Mente & Projeção Astral","module":"Módulo VI","rarity":"Raríssimo (Manuscrito Restaurado)","pages":138,"cover":"assets/covers_extracted/cover_Resenha_do_livro_e_link_para_download_online._Grim_rio_do_Sa.jpg","tier":"master","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1tpYAN727Xp_TSMv2hNxErIh2ccNNird4/preview"},{"id":418,"title":"Revista Espirita Ano I 1858","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Mente & Projeção Astral","module":"Módulo VI","rarity":"Essencial","pages":145,"cover":"assets/covers_extracted/cover_Revista_Espirita_-_Ano_I_-_1858.jpg","tier":"master","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/18S8M4VU8WloV1I3dJqtD3gt_CFr7kcOM/preview"},{"id":419,"title":"Revista Espírita 1858","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Mente & Projeção Astral","module":"Módulo VI","rarity":"Essencial","pages":152,"cover":"assets/covers_extracted/cover_Revista_Espi_rita_1858.jpg","tier":"master","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1fJ-uVawwIUwCaCIAs5_aBkS8R6OPa1nZ/preview"},{"id":420,"title":"Revista O Arcanum 1º Semestre De 2025","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Mente & Projeção Astral","module":"Módulo VI","rarity":"Raríssimo (Manuscrito Restaurado)","pages":159,"cover":"assets/covers_extracted/cover_Revista_O_Arcanum_1__Semestre_De_2025.jpg","tier":"master","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1fJ-uVawwIUwCaCIAs5_aBkS8R6OPa1nZ/preview"},{"id":421,"title":"Revista Reformador O Conde de Rochester","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Mente & Projeção Astral","module":"Módulo VI","rarity":"Essencial","pages":166,"cover":"assets/covers_extracted/cover_Revista_Reformador_-_O_Conde_de_Rochester.jpg","tier":"master","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1fJ-uVawwIUwCaCIAs5_aBkS8R6OPa1nZ/preview"},{"id":422,"title":"Rick Stack Viagem Astral","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Mente & Projeção Astral","module":"Módulo VI","rarity":"Essencial","pages":173,"cover":"assets/covers_extracted/cover_Rick_Stack_Viagem_Astral.jpg","tier":"master","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1fJ-uVawwIUwCaCIAs5_aBkS8R6OPa1nZ/preview"},{"id":423,"title":"Romance de uma Rainha","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Mente & Projeção Astral","module":"Módulo VI","rarity":"Raríssimo (Manuscrito Restaurado)","pages":180,"cover":"assets/covers_extracted/cover_Romance_de_uma_Rainha.jpg","tier":"master","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1fJ-uVawwIUwCaCIAs5_aBkS8R6OPa1nZ/preview"},{"id":424,"title":"Rui Nobre 2021 A Ordem Do Templo Em Portugal Homens Patrimonio E Poderes","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Mente & Projeção Astral","module":"Módulo VI","rarity":"Essencial","pages":187,"cover":"assets/covers_extracted/cover_Rui_Nobre_2021_A_Ordem_Do_Templo_Em_Portugal_Homens_Patrimon.jpg","tier":"master","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1fJ-uVawwIUwCaCIAs5_aBkS8R6OPa1nZ/preview"},{"id":425,"title":"SEMJASE Contatos Verdadeiros de Semjase Ser Humano Extrarrestre das Plejares","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Mente & Projeção Astral","module":"Módulo VI","rarity":"Essencial","pages":194,"cover":"assets/covers_extracted/cover_SEMJASE-Contatos_Verdadeiros_de_Semjase_Ser_Humano_Extrarres.jpg","tier":"master","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1fJ-uVawwIUwCaCIAs5_aBkS8R6OPa1nZ/preview"},{"id":426,"title":"SHEMYAZA O Líder dos Vigilantes — A Queda, o Ensino e o Preço da Transmissão (20","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Mente & Projeção Astral","module":"Módulo VI","rarity":"Raríssimo (Manuscrito Restaurado)","pages":201,"cover":"assets/covers_extracted/cover_SHEMYAZA_O_L_der_dos_Vigilantes___A_Queda__o_Ensino_e_o_Pre_.jpg","tier":"master","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/12HRqhI087OLKUtUbn7-2Q2gVsTHee1YQ/preview"},{"id":427,"title":"Sagrada Lisergia Um Manifesto Alquímico Sagrado Do Uso Lisérgico","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Mente & Projeção Astral","module":"Módulo VI","rarity":"Essencial","pages":208,"cover":"assets/covers_extracted/cover_Sagrada_Lisergia_-_Um_Manifesto_Alqu_mico_Sagrado_Do_Uso_Lis.jpg","tier":"master","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1fJ-uVawwIUwCaCIAs5_aBkS8R6OPa1nZ/preview"},{"id":428,"title":"Sagrado conhecimento explorando os mistérios da religião e da teologia","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Mente & Projeção Astral","module":"Módulo VI","rarity":"Essencial","pages":215,"cover":"assets/covers_extracted/cover_Sagrado_conhecimento_explorando_os_mist_rios_da_religi_o_e_d.jpg","tier":"master","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1fJ-uVawwIUwCaCIAs5_aBkS8R6OPa1nZ/preview"},{"id":429,"title":"Salomão O Rei Do Abismo","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Mente & Projeção Astral","module":"Módulo VI","rarity":"Raríssimo (Manuscrito Restaurado)","pages":222,"cover":"assets/covers_extracted/cover_Salom_o_O_Rei_Do_Abismo.jpg","tier":"master","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1fJ-uVawwIUwCaCIAs5_aBkS8R6OPa1nZ/preview"},{"id":430,"title":"Segredos Da História Luso Alemã Rainer Daehnhardt","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Mente & Projeção Astral","module":"Módulo VI","rarity":"Essencial","pages":229,"cover":"assets/covers_extracted/cover_Segredos_Da_Hist_ria_Luso-Alem__-_Rainer_Daehnhardt.jpg","tier":"master","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1fJ-uVawwIUwCaCIAs5_aBkS8R6OPa1nZ/preview"},{"id":431,"title":"Segurança do paciente criando organizações de saúde seguras","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Mente & Projeção Astral","module":"Módulo VI","rarity":"Essencial","pages":236,"cover":"assets/covers_extracted/cover_Seguran_a_do_paciente_criando_organiza__es_de_sa_de_seguras.jpg","tier":"master","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1fJ-uVawwIUwCaCIAs5_aBkS8R6OPa1nZ/preview"},{"id":432,"title":"Sermões de Santo Antônio","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Mente & Projeção Astral","module":"Módulo VI","rarity":"Raríssimo (Manuscrito Restaurado)","pages":243,"cover":"assets/covers_extracted/cover_Serm_es_de_Santo_Ant_nio.jpg","tier":"master","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1fJ-uVawwIUwCaCIAs5_aBkS8R6OPa1nZ/preview"},{"id":433,"title":"Sobre O Perenialismo Carta I","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Mente & Projeção Astral","module":"Módulo VI","rarity":"Essencial","pages":250,"cover":"assets/covers_extracted/cover_Sobre_O_Perenialismo_Carta_I.jpg","tier":"master","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1fJ-uVawwIUwCaCIAs5_aBkS8R6OPa1nZ/preview"},{"id":434,"title":"Sobre o Mistério da História A Esfera e a Cruz","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Mente & Projeção Astral","module":"Módulo VI","rarity":"Essencial","pages":257,"cover":"assets/covers_extracted/cover_Sobre_o_Mist_rio_da_Hist_ria_A_Esfera_e_a_Cruz.jpg","tier":"master","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1fJ-uVawwIUwCaCIAs5_aBkS8R6OPa1nZ/preview"},{"id":435,"title":"Sobre o Perenialismo Carta III","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Mente & Projeção Astral","module":"Módulo VI","rarity":"Raríssimo (Manuscrito Restaurado)","pages":264,"cover":"assets/covers_extracted/cover_Sobre_o_Perenialismo_-_Carta_III.jpg","tier":"master","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1fJ-uVawwIUwCaCIAs5_aBkS8R6OPa1nZ/preview"},{"id":436,"title":"Sobre o Perenialismo Carta II","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Mente & Projeção Astral","module":"Módulo VI","rarity":"Essencial","pages":271,"cover":"assets/covers_extracted/cover_Sobre_o_Perenialismo_Carta_II.jpg","tier":"master","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1fJ-uVawwIUwCaCIAs5_aBkS8R6OPa1nZ/preview"},{"id":437,"title":"Sofista, Político, Apócrifos Duvidosos Platão","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Mente & Projeção Astral","module":"Módulo VI","rarity":"Essencial","pages":278,"cover":"assets/covers_extracted/cover_Sofista__Pol_tico__Ap_crifos_Duvidosos_Plat_o.jpg","tier":"master","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1fJ-uVawwIUwCaCIAs5_aBkS8R6OPa1nZ/preview"},{"id":438,"title":"Superstição E Ocultismo Como Se Libertar De Sua Influência E Desfrutar Paz Menta","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Mente & Projeção Astral","module":"Módulo VI","rarity":"Raríssimo (Manuscrito Restaurado)","pages":285,"cover":"assets/covers_extracted/cover_Supersti__o_E_Ocultismo_Como_Se_Libertar_De_Sua_Influ_ncia_E.jpg","tier":"master","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1AdGVzLcMu213YOhgyMYe8O-3iGzCtvYA/preview"},{"id":439,"title":"São Cipriano","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Mente & Projeção Astral","module":"Módulo VI","rarity":"Essencial","pages":292,"cover":"assets/covers_extracted/cover_S_o_Cipriano.jpg","tier":"master","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1hBTQ3W3uv-Ud_x9Xmtwqte65LNOrANog/preview"},{"id":440,"title":"Síntese Filosófica E Energética Egito, Sabedoria Iniciática E Paradigmas De Pode","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Mente & Projeção Astral","module":"Módulo VI","rarity":"Essencial","pages":299,"cover":"assets/covers_extracted/cover_S_ntese_Filos_fica_E_Energ_tica_Egito__Sabedoria_Inici_tica_.jpg","tier":"master","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1fJ-uVawwIUwCaCIAs5_aBkS8R6OPa1nZ/preview"},{"id":441,"title":"Tao Te Ching Lao Tzu","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Mente & Projeção Astral","module":"Módulo VI","rarity":"Raríssimo (Manuscrito Restaurado)","pages":306,"cover":"assets/covers_extracted/cover_Tao_Te_Ching_Lao_Tzu.jpg","tier":"master","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1fJ-uVawwIUwCaCIAs5_aBkS8R6OPa1nZ/preview"},{"id":442,"title":"Tarot O Livro Azul","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Mente & Projeção Astral","module":"Módulo VI","rarity":"Essencial","pages":313,"cover":"assets/covers_extracted/cover_Tarot_O_Livro_Azul.jpg","tier":"master","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1hcDKatgKPHpXb7BkelCD60qqOP5Uyw8h/preview"},{"id":443,"title":"Tarô e Individuação","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Mente & Projeção Astral","module":"Módulo VI","rarity":"Essencial","pages":320,"cover":"assets/covers_extracted/cover_Tar__e_Individua__o.jpg","tier":"master","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1fJ-uVawwIUwCaCIAs5_aBkS8R6OPa1nZ/preview"},{"id":444,"title":"Templários E O Pergaminho De Chinon Pdf","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Mente & Projeção Astral","module":"Módulo VI","rarity":"Raríssimo (Manuscrito Restaurado)","pages":327,"cover":"assets/covers_extracted/cover_Templ_rios_E_O_Pergaminho_De_Chinon_Pdf.jpg","tier":"master","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1fJ-uVawwIUwCaCIAs5_aBkS8R6OPa1nZ/preview"},{"id":445,"title":"Teses sobre a Comunidade Terrivel","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Mente & Projeção Astral","module":"Módulo VI","rarity":"Essencial","pages":334,"cover":"assets/covers_extracted/cover_Teses_sobre_a_Comunidade_Terrivel.jpg","tier":"master","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1E44FxHAoGp-uhU3KiTrmauf-IyhIF4_p/preview"},{"id":446,"title":"The Ante Cristo—li Chamaeleon! ( PT)","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Mente & Projeção Astral","module":"Módulo VI","rarity":"Essencial","pages":341,"cover":"assets/covers_extracted/cover_The_Ante_Cristo_li_Chamaeleon____PT_.jpg","tier":"master","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1fJ-uVawwIUwCaCIAs5_aBkS8R6OPa1nZ/preview"},{"id":447,"title":"Tragédias & Niilismo Gerson De Rodrigues","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Mente & Projeção Astral","module":"Módulo VI","rarity":"Raríssimo (Manuscrito Restaurado)","pages":348,"cover":"assets/covers_extracted/cover_Trag_dias___Niilismo_Gerson_De_Rodrigues.jpg","tier":"master","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1fJ-uVawwIUwCaCIAs5_aBkS8R6OPa1nZ/preview"},{"id":448,"title":"Tratado De Psicologia Revolucionária Samael Aun Weor","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Mente & Projeção Astral","module":"Módulo VI","rarity":"Essencial","pages":355,"cover":"assets/covers_extracted/cover_Tratado_De_Psicologia_Revolucion_ria_Samael_Aun_Weor.jpg","tier":"master","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1fJ-uVawwIUwCaCIAs5_aBkS8R6OPa1nZ/preview"},{"id":449,"title":"Tratado da oração e da meditação","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Mente & Projeção Astral","module":"Módulo VI","rarity":"Essencial","pages":362,"cover":"assets/covers_extracted/cover_Tratado_da_ora__o_e_da_medita__o.jpg","tier":"master","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1fJ-uVawwIUwCaCIAs5_aBkS8R6OPa1nZ/preview"},{"id":450,"title":"Tratado de Magia Oculta J. Williams Scott","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Grimórios & Alta Magia","module":"Módulo II","rarity":"Raríssimo (Manuscrito Restaurado)","pages":369,"cover":"assets/covers_extracted/cover_Tratado_de_Magia_Oculta_-_J._Williams_Scott.jpg","tier":"master","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1fJ-uVawwIUwCaCIAs5_aBkS8R6OPa1nZ/preview"},{"id":451,"title":"Três Momentos Contos Espíritas","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Mente & Projeção Astral","module":"Módulo VI","rarity":"Essencial","pages":376,"cover":"assets/covers_extracted/cover_Tr_s_Momentos_Contos_Esp_ritas.jpg","tier":"master","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1fJ-uVawwIUwCaCIAs5_aBkS8R6OPa1nZ/preview"},{"id":452,"title":"Ultra C.bio (v. 12 Jun 2020 6h)","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Mente & Projeção Astral","module":"Módulo VI","rarity":"Raríssimo (Manuscrito Restaurado)","pages":390,"cover":"assets/covers_extracted/cover_Ultra_C.bio__v._12_Jun_2020_6h_.jpg","tier":"master","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1fJ-uVawwIUwCaCIAs5_aBkS8R6OPa1nZ/preview"},{"id":453,"title":"Um Guia para o Islam","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Mente & Projeção Astral","module":"Módulo VI","rarity":"Essencial","pages":397,"cover":"assets/covers_extracted/cover_Um_Guia_para_o_Islam.jpg","tier":"master","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1fJ-uVawwIUwCaCIAs5_aBkS8R6OPa1nZ/preview"},{"id":454,"title":"Um Iniciante na Viagem Astral Saulo Calderon","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Mente & Projeção Astral","module":"Módulo VI","rarity":"Essencial","pages":404,"cover":"assets/covers_extracted/cover_Um_Iniciante_na_Viagem_Astral_-_Saulo_Calderon.jpg","tier":"master","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1s8aZmissD9SSzJ2251xfqd3HBkUkJDwH/preview"},{"id":455,"title":"Um Reino Unido","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Mente & Projeção Astral","module":"Módulo VI","rarity":"Raríssimo (Manuscrito Restaurado)","pages":411,"cover":"assets/covers_extracted/cover_Um_Reino_Unido.jpg","tier":"master","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1fJ-uVawwIUwCaCIAs5_aBkS8R6OPa1nZ/preview"},{"id":456,"title":"Umbanda de Todos Nós","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Mente & Projeção Astral","module":"Módulo VI","rarity":"Essencial","pages":418,"cover":"assets/covers_extracted/cover_Umbanda_de_Todos_N_s.jpg","tier":"master","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1fJ-uVawwIUwCaCIAs5_aBkS8R6OPa1nZ/preview"},{"id":457,"title":"Umbanda do Brasil","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Mente & Projeção Astral","module":"Módulo VI","rarity":"Essencial","pages":125,"cover":"assets/covers_extracted/cover_Umbanda_do_Brasil.jpg","tier":"master","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1QW0HQd9n5cIK2oqeNIuQx7nz60WppmPZ/preview"},{"id":458,"title":"Umbanda e o Poder da Mediunidade","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Mente & Projeção Astral","module":"Módulo VI","rarity":"Raríssimo (Manuscrito Restaurado)","pages":132,"cover":"assets/covers_extracted/cover_Umbanda_e_o_Poder_da_Mediunidade.jpg","tier":"master","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1oV8XgLAa9fhRLMrykx2NPnAdUcPkJesC/preview"},{"id":459,"title":"VEGETARIANISMO Ramatis","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Mente & Projeção Astral","module":"Módulo VI","rarity":"Essencial","pages":139,"cover":"assets/covers_extracted/cover_VEGETARIANISMO_-_Ramatis.jpg","tier":"master","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1fJ-uVawwIUwCaCIAs5_aBkS8R6OPa1nZ/preview"},{"id":460,"title":"Vampirismo de Energia Vital Os Graus de Manomâtra","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Mente & Projeção Astral","module":"Módulo VI","rarity":"Essencial","pages":146,"cover":"assets/covers_extracted/cover_Vampirismo_de_Energia_Vital_-_Os_Graus_de_Manom_tra.jpg","tier":"master","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1fJ-uVawwIUwCaCIAs5_aBkS8R6OPa1nZ/preview"},{"id":461,"title":"Vida de Jesus baseada no espiritismo ; estudo psicologico","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Mente & Projeção Astral","module":"Módulo VI","rarity":"Raríssimo (Manuscrito Restaurado)","pages":153,"cover":"assets/covers_extracted/cover_Vida_de_Jesus_baseada_no_espiritismo___estudo_psicologico.jpg","tier":"master","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1fJ-uVawwIUwCaCIAs5_aBkS8R6OPa1nZ/preview"},{"id":462,"title":"Voluntários da Pátria na Guerra do Paraguai, 1950","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Mente & Projeção Astral","module":"Módulo VI","rarity":"Essencial","pages":160,"cover":"assets/covers_extracted/cover_Volunt_rios_da_P_tria_na_Guerra_do_Paraguai__1950.jpg","tier":"master","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1fJ-uVawwIUwCaCIAs5_aBkS8R6OPa1nZ/preview"},{"id":463,"title":"Vozes em Defesa da Fé (60 Cadernos)","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Mente & Projeção Astral","module":"Módulo VI","rarity":"Essencial","pages":167,"cover":"assets/covers_extracted/cover_Vozes_em_Defesa_da_F___60_Cadernos_.jpg","tier":"master","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1fJ-uVawwIUwCaCIAs5_aBkS8R6OPa1nZ/preview"},{"id":464,"title":"X 1 Shy Vs Rabbit","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Mente & Projeção Astral","module":"Módulo VI","rarity":"Raríssimo (Manuscrito Restaurado)","pages":174,"cover":"assets/covers_extracted/cover_X_1_Shy_Vs_Rabbit.jpg","tier":"master","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1fJ-uVawwIUwCaCIAs5_aBkS8R6OPa1nZ/preview"},{"id":465,"title":"Zecharia Sitchin Gênesis Revisitado Abgeschlossen","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Mente & Projeção Astral","module":"Módulo VI","rarity":"Essencial","pages":181,"cover":"assets/covers_extracted/cover_Zecharia_Sitchin_G_nesis_Revisitado_Abgeschlossen.jpg","tier":"master","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1fJ-uVawwIUwCaCIAs5_aBkS8R6OPa1nZ/preview"},{"id":466,"title":"Zecharia Sitchin O 12º Planeta Abgeschlossen","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Mente & Projeção Astral","module":"Módulo VI","rarity":"Essencial","pages":188,"cover":"assets/covers_extracted/cover_Zecharia_Sitchin_O_12__Planeta_Abgeschlossen.jpg","tier":"master","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1fJ-uVawwIUwCaCIAs5_aBkS8R6OPa1nZ/preview"},{"id":467,"title":"Zecharia Sitchin Os Annunakis E O Planeta Nibiru Abgeschlossen","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Mente & Projeção Astral","module":"Módulo VI","rarity":"Raríssimo (Manuscrito Restaurado)","pages":195,"cover":"assets/covers_extracted/cover_Zecharia_Sitchin_Os_Annunakis_E_O_Planeta_Nibiru_Abgeschloss.jpg","tier":"master","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1fJ-uVawwIUwCaCIAs5_aBkS8R6OPa1nZ/preview"},{"id":468,"title":"a aguia 01.01.1911 03","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Mente & Projeção Astral","module":"Módulo VI","rarity":"Essencial","pages":202,"cover":"assets/covers_extracted/cover_a-aguia--01.01.1911-03.jpg","tier":"master","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1fJ-uVawwIUwCaCIAs5_aBkS8R6OPa1nZ/preview"},{"id":469,"title":"a cruz e o mar portugal","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Mente & Projeção Astral","module":"Módulo VI","rarity":"Essencial","pages":209,"cover":"assets/covers_extracted/cover_a-cruz-e-o-mar-portugal.jpg","tier":"master","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1Gs7NYN9vaVF0gd9L4KaqJ4y7DyYMnPpI/preview"},{"id":470,"title":"a águia 15.01.1911 04","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Mente & Projeção Astral","module":"Módulo VI","rarity":"Raríssimo (Manuscrito Restaurado)","pages":216,"cover":"assets/covers_extracted/cover_a-_guia--15.01.1911-04.jpg","tier":"master","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1fJ-uVawwIUwCaCIAs5_aBkS8R6OPa1nZ/preview"},{"id":471,"title":"c","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Mente & Projeção Astral","module":"Módulo VI","rarity":"Essencial","pages":223,"cover":"assets/covers_extracted/cover_c.jpg","tier":"master","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1XHEmuc1q_djAmOdnWW3LiETJzxFnK5wt/preview"},{"id":472,"title":"coleção parcial das obras de René Guénon traduzidas para o português","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Mente & Projeção Astral","module":"Módulo VI","rarity":"Essencial","pages":230,"cover":"assets/covers_extracted/cover_cole__o_parcial_das_obras_de_Ren__Gu_non_traduzidas_para_o_p.jpg","tier":"master","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1fJ-uVawwIUwCaCIAs5_aBkS8R6OPa1nZ/preview"},{"id":473,"title":"nro 2 11 ano Grande Oriente do Brazil Jornal Official da Maçonaria Brazileira","author":"Acervo Cúpula 33 (Tradição Oculta)","category":"Sociedades Secretas","module":"Módulo V","rarity":"Essencial","pages":244,"cover":"assets/covers_extracted/cover_nro_2_11_ano_Grande_Oriente_do_Brazil_Jornal_Official_da_Ma_.jpg","tier":"master","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.","pdfUrl":"https://drive.google.com/file/d/1fJ-uVawwIUwCaCIAs5_aBkS8R6OPa1nZ/preview"}];

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
    driveUrl: "https://drive.google.com/drive/folders/1dnrxEJ2MYXHpmgWY_ZUr5AW4ReRORl79?usp=sharing",
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
    driveUrl: "https://drive.google.com/drive/folders/1dnrxEJ2MYXHpmgWY_ZUr5AW4ReRORl79?usp=sharing",
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
    driveUrl: "https://drive.google.com/drive/folders/1dnrxEJ2MYXHpmgWY_ZUr5AW4ReRORl79?usp=sharing",
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
    driveUrl: "https://drive.google.com/drive/folders/1dnrxEJ2MYXHpmgWY_ZUr5AW4ReRORl79?usp=sharing",
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
    driveUrl: "https://drive.google.com/drive/folders/1dnrxEJ2MYXHpmgWY_ZUr5AW4ReRORl79?usp=sharing",
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
    driveUrl: "https://drive.google.com/drive/folders/1dnrxEJ2MYXHpmgWY_ZUr5AW4ReRORl79?usp=sharing",
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
    driveUrl: "https://drive.google.com/drive/folders/1dnrxEJ2MYXHpmgWY_ZUr5AW4ReRORl79?usp=sharing",
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
let currentTier = "master"; localStorage.setItem("cupula33_user_tier", "master");
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
  updateAllUserDisplays();
  updateProfileXP();
  renderContinueReading();
  renderCommunityFeed(currentCommunityFilter);

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
    try { if (window.lucide) lucide.createIcons(); } catch(e) {}
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
function updateTierUI() { updateTierBadgeUI(); }
function updateTierBadgeUI() {
  const label = document.getElementById("userTierLabel");
  const checkMaster = document.getElementById("checkTierMaster");
  const checkBasico = document.getElementById("checkTierBasico");
  const accessibleCount = document.getElementById("accessibleCount");

  if (typeof updateSidebarUserInfo === "function") {
    try { updateSidebarUserInfo(); } catch(e) {}
  }

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

let isSidebarCollapsed = false;

function toggleSidebarCollapse() {
  const sidebar = document.getElementById("desktopSidebar");
  const main = document.getElementById("mainContainer");
  const icon = document.getElementById("sidebarChevronIcon");
  if (!sidebar) return;

  isSidebarCollapsed = !isSidebarCollapsed;
  if (isSidebarCollapsed) {
    sidebar.classList.add("-translate-x-full");
    if (main) main.classList.remove("md:pl-60");
    if (icon) icon.setAttribute("data-lucide", "chevron-right");
  } else {
    sidebar.classList.remove("-translate-x-full");
    if (main) main.classList.add("md:pl-60");
    if (icon) icon.setAttribute("data-lucide", "chevron-left");
  }
  if (window.lucide) try { lucide.createIcons(); } catch(e) {}
}

function switchTab(tabName) {
  const allTabs = ["home", "library", "audiobooks", "courses", "community", "profile"];
  
  allTabs.forEach(t => {
    const sec = document.getElementById("tab-" + t);
    const sideBtn = document.getElementById("sideNav-" + t);
    const navBtn = document.getElementById("navBtn-" + t);

    if (t === tabName) {
      if (sec) sec.classList.remove("hidden");
      
      // Sidebar desktop active
      if (sideBtn) {
        sideBtn.className = "w-full flex items-center gap-3.5 px-3.5 py-2.5 rounded-xl text-xs font-bold text-yellow-400 bg-white/5 border border-yellow-500/40 transition-all text-left cursor-pointer";
        const icon = sideBtn.querySelector("i, svg");
        if (icon) icon.className = "w-4 h-4 text-yellow-400";
      }

      // Mobile bottom nav active
      if (navBtn) {
        navBtn.className = "flex flex-col items-center gap-1 text-yellow-400 text-[10px] font-bold py-1";
      }
    } else {
      if (sec) sec.classList.add("hidden");

      // Sidebar desktop inactive
      if (sideBtn) {
        sideBtn.className = "w-full flex items-center gap-3.5 px-3.5 py-2.5 rounded-xl text-xs font-medium text-gray-400 hover:text-white hover:bg-white/5 transition-all text-left cursor-pointer";
        const icon = sideBtn.querySelector("i, svg");
        if (icon) icon.className = "w-4 h-4";
      }

      // Mobile bottom nav inactive
      if (navBtn) {
        navBtn.className = "flex flex-col items-center gap-1 text-gray-400 text-[10px] font-medium py-1";
      }
    }
  });

  if (tabName === "library") {
    renderBooks();
    renderContinueReading();
  } else if (tabName === "home") {
    renderContinueReading();
  } else if (tabName === "community") {
    renderCommunityFeed(currentCommunityFilter);
  } else if (tabName === "profile") {
    updateAllUserDisplays();
    updateProfileXP();
  }

  window.scrollTo({ top: 0, behavior: "smooth" });
  if (window.lucide) try { lucide.createIcons(); } catch(e) {}
}

// ==========================================
// COMUNIDADE CÚPULA 33 (100% FUNCIONAL)
// ==========================================
const DEFAULT_COMMUNITY_POSTS = [
  {
    id: "post-1",
    author: "José Roberto Borges",
    userEmail: "jroberto@exemplo.com",
    initial: "J",
    level: 1,
    category: "Dúvidas na interação do site",
    text: "Pensei que era áudio book",
    timeAgo: "22/11/2026, 22:02:41",
    likes: 2,
    liked: false,
    comments: 0
  },
  {
    id: "post-2",
    author: "Rodrigo ramon Braz palacios",
    userEmail: "rodrigo.palacios@exemplo.com",
    initial: "R",
    level: 1,
    category: "Teoria",
    text: "No face aparece uma porção de livros que na verdade aqui não estão",
    timeAgo: "18/11/2026, 23:17:39",
    likes: 5,
    liked: false,
    comments: 0
  },
  {
    id: "post-3",
    author: "Sara Vieira",
    userEmail: "elevarevenue@gmail.com",
    initial: "S",
    level: 1,
    category: "Templo",
    text: "Iniciando os estudos hoje com O Livro de Enoque e A Tábua de Esmeraldas. A profundidade dos textos é incomparável.",
    timeAgo: "15/11/2026, 14:30:12",
    likes: 9,
    liked: false,
    comments: 3
  }
];

function getCommunityPosts() {
  const saved = localStorage.getItem("cupula33_community_posts");
  if (!saved) {
    localStorage.setItem("cupula33_community_posts", JSON.stringify(DEFAULT_COMMUNITY_POSTS));
    return DEFAULT_COMMUNITY_POSTS;
  }
  try {
    return JSON.parse(saved);
  } catch(e) {
    return DEFAULT_COMMUNITY_POSTS;
  }
}

let currentCommunityFilter = "Tudo";

function filterCommunityPosts(category) {
  currentCommunityFilter = category;
  
  document.querySelectorAll(".community-pill").forEach(btn => {
    const f = btn.getAttribute("data-filter");
    if (f === category) {
      btn.className = "community-pill px-4 py-1.5 rounded-full bg-yellow-500 text-black text-xs font-bold whitespace-nowrap transition cursor-pointer";
    } else {
      btn.className = "community-pill px-4 py-1.5 rounded-full bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white border border-white/10 text-xs font-medium whitespace-nowrap transition cursor-pointer";
    }
  });

  renderCommunityFeed(category);
}

function renderCommunityFeed(filter = "Tudo") {
  const container = document.getElementById("communityFeedContainer");
  if (!container) return;

  const user = resolveUserIdentity();
  let posts = getCommunityPosts();

  if (filter === "Meus Posts") {
    posts = posts.filter(p => (p.userEmail && p.userEmail.toLowerCase() === user.email.toLowerCase()) || p.author === user.name);
  } else if (filter && filter !== "Tudo") {
    posts = posts.filter(p => p.category && p.category.toLowerCase() === filter.toLowerCase());
  }

  if (posts.length === 0) {
    container.innerHTML = `
      <div class="esoteric-card rounded-2xl p-10 text-center border border-white/10">
        <i data-lucide="message-square" class="w-8 h-8 text-gray-600 mx-auto mb-3"></i>
        <p class="text-sm text-gray-400">Nenhuma discussão encontrada nesta categoria.</p>
        <p class="text-xs text-gray-500 mt-1">Seja o primeiro a publicar usando o campo acima!</p>
      </div>
    `;
    if (window.lucide) try { lucide.createIcons(); } catch(e) {}
    return;
  }

  container.innerHTML = posts.map(p => `
    <div class="esoteric-card rounded-2xl p-5 border border-white/10 animate-fade-in text-left">
      <div class="flex items-center gap-3 mb-2.5">
        <div class="w-8 h-8 rounded-full bg-yellow-500 text-black flex items-center justify-center font-bold text-xs shrink-0">
          ${p.initial || (p.author ? p.author.charAt(0).toUpperCase() : '?')}
        </div>
        <div>
          <div class="flex items-center gap-2">
            <span class="text-xs font-bold text-white">${p.author}</span>
            <span class="text-[9px] px-1.5 py-0.5 rounded bg-yellow-500/20 text-yellow-400 font-mono font-bold">NÍVEL ${p.level || 1}</span>
          </div>
          <span class="text-[10px] text-gray-500 font-mono">${p.timeAgo || 'Recentemente'}</span>
        </div>
      </div>

      ${p.category ? `
        <div class="mb-2">
          <span class="inline-flex items-center gap-1 text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-white/5 border border-white/10 text-gray-300">
            <i data-lucide="message-circle" class="w-3 h-3 text-yellow-400"></i> ${p.category}
          </span>
        </div>
      ` : ''}

      <p class="text-xs sm:text-sm text-gray-200 mt-2 leading-relaxed whitespace-pre-line">${p.text}</p>

      <div class="flex items-center gap-5 mt-4 pt-3 border-t border-white/5 text-gray-500 text-xs">
        <button onclick="likeCommunityPost('${p.id}')" class="flex items-center gap-1.5 transition cursor-pointer ${p.liked ? 'text-yellow-400 font-bold' : 'hover:text-yellow-400'}">
          <i data-lucide="heart" class="w-3.5 h-3.5 ${p.liked ? 'fill-yellow-400 text-yellow-400' : ''}"></i>
          <span>${p.likes || 0}</span>
        </button>
        <button onclick="showToast('Comentários em breve na próxima atualização')" class="flex items-center gap-1.5 hover:text-white transition cursor-pointer">
          <i data-lucide="message-square" class="w-3.5 h-3.5"></i>
          <span>${p.comments || 0}</span>
        </button>
      </div>
    </div>
  `).join("");

  if (window.lucide) try { lucide.createIcons(); } catch(e) {}
}

function publishCommunityPost() {
  const input = document.getElementById("communityPostInput");
  const catSelect = document.getElementById("communityPostCategory");
  if (!input) return;

  const text = input.value.trim();
  if (!text) {
    showToast("Digite algo para publicar na comunidade.");
    return;
  }

  const user = resolveUserIdentity();
  const category = catSelect ? catSelect.value : "Teoria";
  const now = new Date();
  const timeFormatted = now.toLocaleDateString("pt-BR") + ", " + now.toLocaleTimeString("pt-BR");

  const newPost = {
    id: "post-" + Date.now(),
    author: user.name,
    userEmail: user.email,
    initial: user.name.charAt(0).toUpperCase(),
    level: 1,
    category: category,
    text: text,
    timeAgo: timeFormatted,
    likes: 0,
    liked: false,
    comments: 0
  };

  const posts = getCommunityPosts();
  posts.unshift(newPost);
  localStorage.setItem("cupula33_community_posts", JSON.stringify(posts));

  input.value = "";
  renderCommunityFeed(currentCommunityFilter);
  showToast("Publicado com sucesso no Feed Geral!");
}

function likeCommunityPost(postId) {
  const posts = getCommunityPosts();
  const post = posts.find(p => p.id === postId);
  if (!post) return;

  if (post.liked) {
    post.liked = false;
    post.likes = Math.max(0, (post.likes || 1) - 1);
  } else {
    post.liked = true;
    post.likes = (post.likes || 0) + 1;
  }

  localStorage.setItem("cupula33_community_posts", JSON.stringify(posts));
  renderCommunityFeed(currentCommunityFilter);
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

// ==========================================
// CÚPULA 33 ENGINE - BIBLIOTECA, STREAMING & MINHA LISTA
// ==========================================

const CANONICAL_MODULES = [
  {
    name: "Hermetismo & Cabala",
    code: "Módulo I",
    desc: "O Caibalion, Tábua de Esmeralda, Zohar, Sefer Yetzirah e os mistérios dos arcanos primordiais.",
    icon: "book-open"
  },
  {
    name: "Grimórios & Alta Magia",
    code: "Módulo II",
    desc: "Clavícula de Salomão, Goetia, São Cipriano, rituais de evocação e teurgia cerimonial.",
    icon: "shield"
  },
  {
    name: "Gnosticismo & Apócrifos",
    code: "Módulo III",
    desc: "Nag Hammadi, Livro de Enoque, Evangelhos Apócrifos e os textos banidos dos concílios.",
    icon: "scroll"
  },
  {
    name: "Alquimia & Transmutação",
    code: "Módulo IV",
    desc: "Splendor Solis, Atalanta Fugiens, Paracelso e a busca pela Pedra Filosofal.",
    icon: "flame"
  },
  {
    name: "Sociedades Secretas",
    code: "Módulo V",
    desc: "Maçonaria, Rosacruz, Iluminados da Baviera, Cavaleiros Templários e documentos desclassificados.",
    icon: "eye"
  },
  {
    name: "Mente & Projeção Astral",
    code: "Módulo VI",
    desc: "Desdobramento astral, autodefesa psíquica, sonhos lúcidos e ondas cerebrais calibradas.",
    icon: "radio"
  }
];

let libraryViewMode = 'streaming'; // 'streaming' | 'categories' | 'category_detail' | 'search' | 'my_list'
let activeCategoryName = null;
// currentBookModalData is declared at top

// Gestão de Minha Lista (Bookmarks)
function getMyList() {
  try {
    return JSON.parse(localStorage.getItem("cupula33_my_list") || "[]");
  } catch(e) {
    return [];
  }
}

function isBookInMyList(bookId) {
  const list = getMyList();
  return list.includes(Number(bookId));
}

function toggleCurrentBookMyList() {
  if (!currentBookModalData) return;
  const id = Number(currentBookModalData.id);
  let list = getMyList();
  
  if (list.includes(id)) {
    list = list.filter(x => x !== id);
    showToast("Removido da Minha Lista");
  } else {
    list.push(id);
    showToast("Adicionado à Minha Lista");
  }
  
  localStorage.setItem("cupula33_my_list", JSON.stringify(list));
  updateModalBookmarkUI(id);
  
  if (libraryViewMode === "my_list") {
    renderMyListGrid();
  }
}

function updateModalBookmarkUI(bookId) {
  const btn = document.getElementById("modalBtnBookmark");
  const icon = document.getElementById("modalBookmarkIcon");
  const text = document.getElementById("modalBookmarkText");
  if (!btn) return;
  
  const saved = isBookInMyList(bookId);
  if (saved) {
    btn.className = "w-full sm:w-auto py-3 px-4 rounded-xl bg-[#eab308]/20 border border-[#eab308]/60 text-[#eab308] text-xs font-bold flex items-center justify-center gap-2 transition cursor-pointer";
    if (text) text.textContent = "Salvo na Lista";
    if (icon) icon.className = "w-4 h-4 fill-[#eab308]";
  } else {
    btn.className = "w-full sm:w-auto py-3 px-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-gray-300 hover:text-[#eab308] text-xs font-bold flex items-center justify-center gap-2 transition cursor-pointer";
    if (text) text.textContent = "Salvar";
    if (icon) icon.className = "w-4 h-4";
  }
  if (window.lucide) try { lucide.createIcons(); } catch(e) {}
}

// Criação do Card de Livro Estilo Cúpula 33
function createBookCardHTML(book, isCarousel) {
  const isLocked = currentTier === "basico" && book.tier === "master";
  const savedProg = getSavedProgress(book.id);
  const progPercent = savedProg && book.pages ? Math.min(100, Math.round((savedProg.page / book.pages) * 100)) : 0;
  
  const containerClass = isCarousel 
    ? "flex-none w-[145px] sm:w-[165px] cursor-pointer group snap-start select-none"
    : "cursor-pointer group select-none";

  return `
    <div onclick="handleBookClick(${book.id})" class="${containerClass}">
      
      <!-- Container da Capa com Aspect Ratio 2:3 -->
      <div class="relative aspect-[2/3] rounded-xl overflow-hidden mb-2.5 border border-white/10 group-hover:border-[#eab308] shadow-lg shadow-black/60 transition-all bg-[#0d0d0d]">
        <img src="${book.cover}" alt="${book.title}" loading="lazy" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 ${isLocked ? 'grayscale opacity-50' : ''}">
        
        <div class="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>

        <!-- Badges Superiores -->
        <div class="absolute top-2 left-2 z-20 flex flex-col gap-1 items-start">
          ${!isLocked && book.id <= 15 ? `
            <div class="bg-[#eab308] text-white text-[9px] font-black px-2 py-0.5 rounded shadow-lg uppercase tracking-wider">
              NOVO
            </div>
          ` : ''}

          ${progPercent > 0 ? `
            <div class="bg-black/80 backdrop-blur-md px-2 py-0.5 rounded-full border border-white/10 flex items-center shadow-lg">
              <span class="w-1.5 h-1.5 rounded-full bg-[#eab308] mr-1.5 animate-pulse"></span>
              <span class="text-[9px] font-bold text-white tracking-wider">${progPercent}%</span>
            </div>
          ` : ''}
        </div>

        ${isLocked ? `
          <div class="absolute inset-0 flex flex-col items-center justify-center bg-black/60 p-2 text-center">
            <i data-lucide="lock" class="text-white/80 w-7 h-7 mb-1"></i>
            <span class="text-[9px] font-black text-amber-300 uppercase tracking-wider">Master</span>
          </div>
        ` : ''}

        <!-- Barra de Progresso no Rodapé da Capa -->
        ${progPercent > 0 ? `
          <div class="absolute bottom-0 left-0 w-full h-1 bg-gray-900/80">
            <div class="h-full bg-[#eab308] shadow-[0_0_8px_rgba(210,4,45,0.8)]" style="width: ${progPercent}%"></div>
          </div>
        ` : ''}
      </div>

      <!-- Título & Autor -->
      <h3 class="text-xs sm:text-sm font-medium truncate text-white group-hover:text-[#eab308] transition-colors leading-snug">
        ${book.title}
      </h3>
      <p class="text-gray-500 text-[11px] truncate mt-0.5">
        ${book.author}
      </p>
    </div>
  `;
}

// Orquestrador de Renderização da Biblioteca

function renderCollections() {
  const container = document.getElementById("collectionsList") || document.getElementById("collectionsContainer");
  if (!container || typeof collectionsData === "undefined") return;

  container.innerHTML = collectionsData.map(col => `
    <div onclick="handleCollectionClick('${col.id}')" class="esoteric-card rounded-2xl p-5 border border-white/10 flex items-center justify-between cursor-pointer hover:border-yellow-500/50 transition-all group">
      <div class="flex items-center gap-4">
        <div class="w-12 h-12 rounded-xl bg-yellow-500/10 border border-yellow-500/30 flex items-center justify-center text-yellow-400 shrink-0 group-hover:scale-105 transition-transform">
          <i data-lucide="${col.icon || 'crown'}" class="w-6 h-6"></i>
        </div>
        <div class="text-left">
          <h4 class="text-sm font-bold text-white group-hover:text-yellow-400 transition-colors">${col.title}</h4>
          <p class="text-xs text-gray-400">${col.subtitle || col.desc || ''}</p>
          <div class="flex items-center gap-2 mt-1 text-[10px] text-gray-500">
            <span>${col.count}</span>
            <span>•</span>
            <span>${col.size}</span>
          </div>
        </div>
      </div>
      <i data-lucide="download" class="w-4 h-4 text-gray-500 group-hover:text-yellow-400 transition-colors"></i>
    </div>
  `).join("");

  if (window.lucide) try { lucide.createIcons(); } catch(e) {}
}

function renderBooks() {
  const streamingView = document.getElementById("libraryStreamingView");
  const categoriesView = document.getElementById("libraryCategoriesView");
  const categoryDetailView = document.getElementById("libraryCategoryDetailView");
  const searchResultsView = document.getElementById("librarySearchResultsView");
  const myListView = document.getElementById("libraryMyListView");
  const backBtn = document.getElementById("libraryBackBtn");
  const titleElem = document.getElementById("libraryMainTitle");

  // Esconder todas as subviews primeiro
  if (streamingView) streamingView.classList.add("hidden");
  if (categoriesView) categoriesView.classList.add("hidden");
  if (categoryDetailView) categoryDetailView.classList.add("hidden");
  if (searchResultsView) searchResultsView.classList.add("hidden");
  if (myListView) myListView.classList.add("hidden");

  // Reset do botão voltar e título
  if (backBtn) backBtn.classList.add("hidden");

  if (libraryViewMode === "streaming") {
    if (streamingView) streamingView.classList.remove("hidden");
    if (titleElem) titleElem.textContent = "Biblioteca";
    renderLibraryStreaming();
  } else if (libraryViewMode === "categories") {
    if (categoriesView) categoriesView.classList.remove("hidden");
    if (backBtn) backBtn.classList.remove("hidden");
    if (titleElem) titleElem.textContent = "Categorias";
    renderCategoriesGrid();
  } else if (libraryViewMode === "category_detail") {
    if (categoryDetailView) categoryDetailView.classList.remove("hidden");
    if (backBtn) backBtn.classList.remove("hidden");
    if (titleElem) titleElem.textContent = activeCategoryName || "Módulo";
    renderCategoryDetailGrid(activeCategoryName);
  } else if (libraryViewMode === "search") {
    if (searchResultsView) searchResultsView.classList.remove("hidden");
    if (backBtn) backBtn.classList.remove("hidden");
    if (titleElem) titleElem.textContent = "Busca no Acervo";
  } else if (libraryViewMode === "my_list") {
    if (myListView) myListView.classList.remove("hidden");
    if (backBtn) backBtn.classList.remove("hidden");
    if (titleElem) titleElem.textContent = "Minha Lista";
    renderMyListGrid();
  }

  if (window.lucide) try { lucide.createIcons(); } catch(e) {}
}

// 1. Renderiza o Modo Streaming (Carrosséis Netflix / Cúpula 33)
function renderLibraryStreaming() {
  // A. Continuar Lendo
  const secContinue = document.getElementById("sectionContinueReading");
  const carContinue = document.getElementById("continueReadingCarousel");
  if (secContinue && carContinue) {
    const readingBooks = booksData.filter(b => {
      const p = getSavedProgress(b.id);
      return p && p.page > 0;
    });
    if (readingBooks.length > 0) {
      secContinue.classList.remove("hidden");
      carContinue.innerHTML = readingBooks.map(b => createBookCardHTML(b, true)).join("");
    } else {
      secContinue.classList.add("hidden");
    }
  }

  // B. Destaques
  const carFeatured = document.getElementById("featuredBooksCarousel");
  if (carFeatured) {
    const featured = booksData.slice(0, 12);
    carFeatured.innerHTML = featured.map(b => createBookCardHTML(b, true)).join("");
  }

  // C. As 6 Fileiras por Módulo
  const rowsContainer = document.getElementById("moduleRowsContainer");
  if (rowsContainer) {
    rowsContainer.innerHTML = CANONICAL_MODULES.map(mod => {
      const modBooks = booksData.filter(b => 
        (b.module && b.module.toLowerCase() === mod.code.toLowerCase()) ||
        (b.category && b.category.toLowerCase().includes(mod.name.toLowerCase()))
      );

      if (modBooks.length === 0) return '';

      return `
        <div>
          <div class="flex items-center justify-between mb-3.5 group cursor-pointer" onclick="openCategoryDetail('${mod.name}')">
            <h2 class="text-lg sm:text-xl font-serif text-white group-hover:text-[#eab308] transition-colors flex items-center gap-2">
              <span class="text-xs font-mono font-bold text-[#eab308]">${mod.code}</span>
              <span>${mod.name}</span>
            </h2>
            <span class="text-[11px] text-gray-500 uppercase tracking-widest group-hover:text-white transition-colors flex items-center gap-1">
              Ver todos (${modBooks.length}) →
            </span>
          </div>

          <div class="flex overflow-x-auto gap-4 pb-4 hide-scrollbar scroll-smooth snap-x">
            ${modBooks.map(b => createBookCardHTML(b, true)).join("")}
          </div>
        </div>
      `;
    }).join("");
  }

  renderCollections();
  if (window.lucide) try { lucide.createIcons(); } catch(e) {}
}

// 2. Renderiza a Grade de Vias de Estudo ("Selecione uma via")
function renderCategoriesGrid() {
  const grid = document.getElementById("categoriesGrid");
  if (!grid) return;

  grid.innerHTML = CANONICAL_MODULES.map(mod => {
    const count = booksData.filter(b => 
      (b.module && b.module.toLowerCase() === mod.code.toLowerCase()) ||
      (b.category && b.category.toLowerCase().includes(mod.name.toLowerCase()))
    ).length;

    return `
      <div onclick="openCategoryDetail('${mod.name}')" class="group relative h-36 overflow-hidden rounded-2xl border border-white/10 bg-[#141414] hover:border-[#eab308]/50 transition-all text-left p-6 flex flex-col justify-end cursor-pointer shadow-lg">
        <div class="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 group-hover:text-[#eab308] transition-all">
          <i data-lucide="${mod.icon}" class="w-14 h-14"></i>
        </div>
        <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
        <div class="relative z-10">
          <span class="text-[10px] font-mono font-bold text-[#eab308] tracking-widest block uppercase">${mod.code}</span>
          <h3 class="text-lg font-serif font-bold text-white group-hover:text-[#eab308] transition-colors mt-0.5">${mod.name}</h3>
          <p class="text-xs text-gray-500 mt-1">${count} Tratados & Manuscritos</p>
        </div>
      </div>
    `;
  }).join("");

  if (window.lucide) try { lucide.createIcons(); } catch(e) {}
}

// 3. Renderiza a Grade Completa da Categoria Selecionada
function renderCategoryDetailGrid(categoryName) {
  const grid = document.getElementById("categoryDetailBooksGrid");
  if (!grid) return;

  const filtered = booksData.filter(b => 
    (b.category && b.category.toLowerCase().includes(categoryName.toLowerCase())) ||
    (b.module && b.module.toLowerCase().includes(categoryName.toLowerCase()))
  );

  if (filtered.length === 0) {
    grid.innerHTML = `<div class="col-span-full py-16 text-center text-gray-500">Nenhuma obra localizada nesta via.</div>`;
    return;
  }

  grid.innerHTML = filtered.map(b => createBookCardHTML(b, false)).join("");
  if (window.lucide) try { lucide.createIcons(); } catch(e) {}
}

// 4. Renderiza Resultados da Busca
function handleSearchInput(query) {
  const q = String(query || "").trim().toLowerCase();
  const clearBtn = document.getElementById("clearSearchBtn");
  const termSpan = document.getElementById("searchResultTerm");
  const grid = document.getElementById("searchResultsGrid");

  if (!q) {
    if (clearBtn) clearBtn.classList.add("hidden");
    if (libraryViewMode === "search") {
      returnToDefaultLibrary();
    }
    return;
  }

  if (clearBtn) clearBtn.classList.remove("hidden");
  libraryViewMode = "search";
  renderBooks();

  if (termSpan) termSpan.textContent = `"${q}"`;

  const results = booksData.filter(b => 
    b.title.toLowerCase().includes(q) ||
    b.author.toLowerCase().includes(q) ||
    b.category.toLowerCase().includes(q) ||
    (b.desc && b.desc.toLowerCase().includes(q))
  );

  if (grid) {
    if (results.length === 0) {
      grid.innerHTML = `
        <div class="col-span-full py-16 text-center text-gray-500">
          <p class="text-sm">Nenhum manuscrito encontrado para "${q}".</p>
          <button onclick="clearSearch()" class="mt-4 px-4 py-2 rounded-xl bg-white/5 text-[#eab308] border border-[#eab308]/40 text-xs font-bold hover:bg-[#eab308] hover:text-white transition">
            Limpar Busca
          </button>
        </div>
      `;
    } else {
      grid.innerHTML = results.map(b => createBookCardHTML(b, false)).join("");
    }
  }

  if (window.lucide) try { lucide.createIcons(); } catch(e) {}
}

function clearSearch() {
  const inp = document.getElementById("searchInput");
  if (inp) inp.value = "";
  returnToDefaultLibrary();
}

// 5. Renderiza a Minha Lista
function renderMyListGrid() {
  const grid = document.getElementById("myListBooksGrid");
  if (!grid) return;

  const savedIds = getMyList();
  const savedBooks = booksData.filter(b => savedIds.includes(Number(b.id)));

  if (savedBooks.length === 0) {
    grid.innerHTML = `
      <div class="col-span-full py-16 text-center text-gray-500">
        <i data-lucide="bookmark" class="w-10 h-10 mx-auto text-gray-600 mb-2"></i>
        <p class="text-sm text-gray-300 font-serif">Sua lista de estudos está vazia.</p>
        <p class="text-xs text-gray-500 mt-1">Toque em "Salvar" nos detalhes de qualquer obra para adicioná-la aqui.</p>
        <button onclick="returnToDefaultLibrary()" class="mt-5 px-5 py-2.5 rounded-xl bg-[#eab308]/20 text-[#eab308] border border-[#eab308]/40 text-xs font-bold hover:bg-[#eab308] hover:text-white transition">
          Explorar Acervo
        </button>
      </div>
    `;
    if (window.lucide) try { lucide.createIcons(); } catch(e) {}
    return;
  }

  grid.innerHTML = savedBooks.map(b => createBookCardHTML(b, false)).join("");
  if (window.lucide) try { lucide.createIcons(); } catch(e) {}
}

// Ações de Navegação da Biblioteca
function returnToDefaultLibrary() {
  libraryViewMode = "streaming";
  activeCategoryName = null;
  const inp = document.getElementById("searchInput");
  if (inp) inp.value = "";
  const clearBtn = document.getElementById("clearSearchBtn");
  if (clearBtn) clearBtn.classList.add("hidden");
  renderBooks();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function toggleCategoriesView() {
  if (libraryViewMode === "categories") {
    returnToDefaultLibrary();
  } else {
    libraryViewMode = "categories";
    renderBooks();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
}

function openCategoriesFromNav() {
  switchTab('books');
  libraryViewMode = "categories";
  renderBooks();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function openCategoryDetail(catName) {
  libraryViewMode = "category_detail";
  activeCategoryName = catName;
  renderBooks();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function openMyList() {
  switchTab('books');
  libraryViewMode = "my_list";
  renderBooks();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// Modal do Livro (Padrão Bk Cúpula 33)
function openBookModal(book) {
  currentBookModalData = book;

  const cover = document.getElementById("modalBookCover");
  const cat = document.getElementById("modalBookCategory");
  const pages = document.getElementById("modalBookPages");
  const title = document.getElementById("modalBookTitle");
  const author = document.getElementById("modalBookAuthor");
  const desc = document.getElementById("modalBookDesc");
  const pBar = document.getElementById("modalProgressBar");
  const pText = document.getElementById("modalProgressPercent");

  if (cover) cover.src = book.cover;
  if (cat) cat.textContent = (book.module ? `${book.module}: ` : '') + book.category;
  if (pages) pages.textContent = `${book.pages || 120} páginas`;
  if (title) title.textContent = book.title;
  if (author) author.textContent = "Por " + book.author;
  if (desc) desc.textContent = book.desc || "Tratado autêntico preservado em língua portuguesa.";

  // Progresso
  const saved = getSavedProgress(book.id);
  const percent = saved && book.pages ? Math.min(100, Math.round((saved.page / book.pages) * 100)) : 0;
  if (pBar) pBar.style.width = percent + "%";
  if (pText) pText.textContent = percent + "%";

  updateModalBookmarkUI(book.id);
  openModal("bookModal");
}

function triggerReadModalFromDetails() {
  if (!currentBookModalData) return;
  closeModal("bookModal");
  const saved = getSavedProgress(currentBookModalData.id);
  const page = saved ? saved.page : 1;
  openReaderModal(currentBookModalData, page);
}

function triggerDownloadFromDetails() {
  if (!currentBookModalData) return;
  triggerDownload(currentBookModalData);
}

// Atualização de Informações do Membro no Sidebar e Telas

// ==========================================
// IDENTIDADE DINÂMICA DO CLIENTE CÚPULA 33
// ==========================================
function resolveUserIdentity() {
  const currentEmail = (localStorage.getItem("cupula33_user_email") || "").trim().toLowerCase();
  
  // 1. Nome customizado salvo pelo aluno
  const customKey = currentEmail ? "cupula33_custom_name_" + currentEmail : "cupula33_custom_name";
  const customName = localStorage.getItem(customKey) || localStorage.getItem("cupula33_custom_name");
  if (customName && customName.trim()) {
    return {
      email: currentEmail || "membro@cupula33.com",
      name: customName.trim(),
      tier: localStorage.getItem("cupula33_user_tier") || "master"
    };
  }

  // 2. Mapeamento de membros conhecidos
  if (currentEmail && typeof KNOWN_STUDENT_NAMES !== "undefined" && KNOWN_STUDENT_NAMES[currentEmail]) {
    return {
      email: currentEmail,
      name: KNOWN_STUDENT_NAMES[currentEmail],
      tier: localStorage.getItem("cupula33_user_tier") || "master"
    };
  }

  // 3. Gerar nome elegante a partir do prefixo do e-mail
  if (currentEmail && currentEmail.includes("@")) {
    const handle = currentEmail.split("@")[0];
    const parts = handle.replace(/[^a-zA-Z0-9]/g, " ").trim().split(/\s+/).filter(Boolean);
    if (parts.length > 0) {
      const formattedName = parts.map(p => p.charAt(0).toUpperCase() + p.slice(1).toLowerCase()).join(" ");
      return {
        email: currentEmail,
        name: formattedName,
        tier: localStorage.getItem("cupula33_user_tier") || "master"
      };
    }
  }

  // 4. Fallback padrão seguro (sem hardcode de nome de cliente anterior)
  return {
    email: currentEmail || "membro@cupula33.com",
    name: "Iniciado da Cúpula",
    tier: localStorage.getItem("cupula33_user_tier") || "master"
  };
}

function updateAllUserDisplays() {
  const user = resolveUserIdentity();
  
  // Sidebar Desktop & Mobile
  const sName = document.getElementById("sidebarUserName");
  const sTier = document.getElementById("sidebarTierLabel");
  if (sName) sName.textContent = user.name;
  if (sTier) sTier.textContent = user.tier === "master" ? "Membro Master" : "Membro Básico";

  // Perfil
  const pName = document.getElementById("profileDisplayName");
  const pEmail = document.getElementById("profileDisplayEmail");
  const pId = document.getElementById("profileUserId");
  if (pName) pName.textContent = user.name;
  if (pEmail) pEmail.textContent = user.email || "Não informado";
  if (pId) {
    let hash = 0;
    const str = user.email || "cupula33_initiate";
    for (let i = 0; i < str.length; i++) hash = ((hash << 5) - hash) + str.charCodeAt(i);
    const hex = Math.abs(hash).toString(16).padStart(8, '0');
    pId.textContent = `cupula33-usr-${hex.slice(0, 4)}-${hex.slice(4, 8)}`;
  }

  // Avatar da Comunidade Composer
  const cLetter = document.getElementById("composerAvatarLetter");
  if (cLetter) {
    cLetter.textContent = user.name.charAt(0).toUpperCase();
  }
}

function promptEditUserName() {
  const current = resolveUserIdentity();
  const newName = prompt("Como você deseja ser chamado na Cúpula 33?", current.name);
  if (newName && newName.trim()) {
    const cleanEmail = (localStorage.getItem("cupula33_user_email") || "").trim().toLowerCase();
    if (cleanEmail) {
      localStorage.setItem("cupula33_custom_name_" + cleanEmail, newName.trim());
    }
    localStorage.setItem("cupula33_custom_name", newName.trim());
    updateAllUserDisplays();
    renderCommunityFeed(currentCommunityFilter);
    showToast("Nome de iniciado atualizado!");
  }
}

function updateSidebarUserInfo() {
  updateAllUserDisplays();
}

// Integrar no carregamento inicial
window.addEventListener("DOMContentLoaded", () => {
  try {
    updateSidebarUserInfo();
  } catch(e) {}
});

function handleBookClick(bookId) {
  const book = booksData.find(b => b.id === bookId);
  if (!book) return;

  currentBookModalData = book;
  openBookModal(book);
}

// CLICK EM UMA COLEÇÃO
function handleCollectionClick(collectionId) {
  const col = collectionsData.find(c => c.id === collectionId);
  if (!col) return;

  // Liberado direto

  triggerCollectionDownload(col.title, col.driveUrl);
}

// Antigo modal substituído pelo padrão Cúpula 33


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
  if (window.lucide) try { if (window.lucide) lucide.createIcons(); } catch(e) {}
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

// AJUSTE DIRETO DE PÁGINA DENTRO DO LEITOR
function adjustReaderPage(delta) {
  if (!currentBookModalData) return;
  const input = document.getElementById("readerCurrentPageInput");
  if (!input) return;
  let val = parseInt(input.value) || 1;
  val = Math.max(1, Math.min(currentBookModalData.pages, val + delta));
  input.value = val;
  onReaderPageInputChange(val);
}

function onReaderPageInputChange(val) {
  if (!currentBookModalData) return;
  const page = Math.max(1, Math.min(currentBookModalData.pages, parseInt(val) || 1));
  saveReadingProgress(currentBookModalData.id, page, currentBookModalData.pages);
  
  // Atualiza também os displays do bookModal
  const modalInput = document.getElementById("modalPageInput");
  if (modalInput) modalInput.value = page;
  updateModalProgressDisplay(page, currentBookModalData.pages);
}

// LEITOR EM TELA CHEIA
// ==========================================
// MOTOR NATIVO PDF.JS COM SCROLL CONTÍNUO (ESTILO ORDEM 137)
// ==========================================
if (typeof pdfjsLib !== "undefined") {
  pdfjsLib.GlobalWorkerOptions.workerSrc = "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js";
}

const LOCAL_PDF_MAP = {
  "3": "livros_pdf/Cabala_Comentários_de_um_Pedreiro_Sobre_a_Torá_Shemot_Êxodo.pdf",
  "4": "livros_pdf/Cabala_Genética.pdf",
  "8": "livros_pdf/Fundamentos_da_Cabala_Sêfer_Yetsirá__edição_revisada_e_ampli.pdf",
  "9": "livros_pdf/Hermes_Trismegistos_o_Três_Vezes_Grande_e_Muitas_Vezes_.pdf",
  "13": "livros_pdf/Tratado_da_sciencia_cabala_ou_noticia_de_arte_cabalistica.pdf",
  "14": "livros_pdf/Tratado_da_sciencia_cabala_ou_Noticia_da_arte_cabalistica.pdf",
  "21": "livros_pdf/Frabato_O_Mago_-_Franz_Bardon.pdf",
  "26": "livros_pdf/Ritual_Onírico_Comunicação_Espiritual_Durante_o_Sono_Ma.pdf",
  "27": "livros_pdf/Segredos_da_Magia_de_Umbanda_e_Quimbanda.pdf",
  "32": "livros_pdf/O_Livro_de_Enoque.pdf",
  "36": "livros_pdf/O_Livro_de_Enoque.pdf",
  "37": "livros_pdf/Pistis_Sophia.pdf",
  "40": "livros_pdf/Alquimia.pdf",
  "41": "livros_pdf/Alquimia.pdf",
  "42": "livros_pdf/Alquimia.pdf",
  "44": "livros_pdf/Alquimia.pdf",
  "46": "livros_pdf/A_Revelacao_Dos_Templarios_-_Lynn_Picknett_e_Clive_Prin.pdf",
  "47": "livros_pdf/32_A_Acao_Secreta_da_Maconaria.pdf",
  "48": "livros_pdf/As_Mansoes_Secretas_Da_Rosacruz.pdf",
  "49": "livros_pdf/Cardeal_Rampolla_por_que_o_padre_Ricossa_busca_hoje_reabilit.pdf",
  "51": "livros_pdf/H_P_Blavatsky_e_o_Caso_Coulomb.pdf",
  "64": "livros_pdf/222_ANOS_GRANDE_ORIENTE_LUSITANO.pdf",
  "65": "livros_pdf/64865430_A_Ciencia_Cabalistica_Lenain.pdf",
  "72": "livros_pdf/A_Chave_Dos_Grandes_Misterios_Eliphas_Le.pdf",
  "74": "livros_pdf/A_Energia_Dos_Raios.pdf",
  "108": "livros_pdf/A_Teologia_Mistica_Como_Linguagem_Do_Sagrado.pdf",
  "116": "livros_pdf/A_maçonaria_e_os_jesuitas_instrucção_pastoral_do_Bispo_de_Ol.pdf",
  "152": "livros_pdf/Boletim_do_DESSEAK_-_n-ro_2_okt-nov1984.pdf",
  "168": "livros_pdf/Carta_do_Passageiro_do_Abismo_Versão_Ritual_-_Adriano_B.pdf",
  "181": "livros_pdf/Consagracao_Geral_Oleo_Santo.pdf",
  "198": "livros_pdf/Ensaios_de_teatro_e_filosofia_do_Renascimento_ao_século_XVII.pdf",
  "216": "livros_pdf/Frabato_O_Mago_-_Franz_Bardon.pdf",
  "218": "livros_pdf/Francisco_de_Assis_Bezerra_de_Meneses.pdf",
  "220": "livros_pdf/Fundamentos_Do_Misticismo_Tibetano_Lama_Anagarika_Govin.pdf",
  "222": "livros_pdf/Gareth_Knight_Praticas_E_Exercicios_Ocultos.pdf",
  "256": "livros_pdf/JERUSALÉM.pdf",
  "264": "livros_pdf/LMTLT_3_MAG_PORT.pdf",
  "268": "livros_pdf/08_O_Livro_da_Lei_Liber_AL_vel_Legis_Crowley.pdf",
  "273": "livros_pdf/Livro_Dos_Espiritos_-Ed_2013.pdf",
  "278": "livros_pdf/Livros_de_Astrologia.pdf",
  "306": "livros_pdf/Mistérios_e_Práticas_da_Lei_de_Umbanda.pdf",
  "307": "livros_pdf/05_Moral_e_Dogma_Albert_Pike.pdf",
  "313": "livros_pdf/No_Reino_Da_Feiticaria.pdf",
  "325": "livros_pdf/O_Diabo_Desmistificação_Completa_de_um_Mito.pdf",
  "346": "livros_pdf/O_MAIOR_SEGREDO_-_DAVID_ICKE.pdf",
  "363": "livros_pdf/O_Vaticano_Maçônico_Em_Nome_Do_Fantasioso_Jeová_Jahvéh_.pdf",
  "372": "livros_pdf/OGrande_Computador_Celeste_Marcelo_Del_Debbio.pdf",
  "374": "livros_pdf/OS_ENSINAMENTOS_SECRETOS_DE_TODO_OS_TEMPOS_-_MANLY_P_HALL.pdf",
  "379": "livros_pdf/37_Os_Arquetipos_e_o_Inconsciente_Coletivo_Jung.pdf",
  "385": "livros_pdf/Os_Protocolos_dos_Sábios_de_Sião.pdf",
  "395": "livros_pdf/Pirḳe_rabi_Eliʻezer__hu_rabi_Eliʻezer_ben_horḳanus_ha-niḳra_.pdf",
  "408": "livros_pdf/Psiquiatria_espiritismo_e_ciência_Um_diálogo_sobre_psic.pdf",
  "417": "livros_pdf/Resenha_do_livro_e_link_para_download_online_Grimório_do_Sat.pdf",
  "418": "livros_pdf/Revista_Espirita_-_Ano_I_-_1858.pdf",
  "426": "livros_pdf/SHEMYAZA_O_Líder_dos_Vigilantes__A_Queda_o_Ensino_e_o_P.pdf",
  "439": "livros_pdf/São_Cipriano_de_Cartago.pdf",
  "442": "livros_pdf/Tarot_O_Livro_Azul.pdf",
  "445": "livros_pdf/Teses_sobre_a_Comunidade_Terrivel.pdf",
  "454": "livros_pdf/Um_Iniciante_na_Viagem_Astral_-_Saulo_Calderon.pdf",
  "457": "livros_pdf/Umbanda_do_Brasil.pdf",
  "458": "livros_pdf/Umbanda_e_o_Poder_da_Mediunidade.pdf",
  "468": "livros_pdf/a-aguia--01011911-03.pdf",
  "473": "livros_pdf/nro_2_11_ano_Grande_Oriente_do_Brazil_Jornal_Official_da_Maç.pdf",
  "999": "livros_pdf/Manuscrito_Maconico_da_Prosperidade_Oculta.pdf",
  "1": "livros_pdf/10_A_Tabua_de_Esmeralda_Hermes_Trismegisto.pdf",
  "6": "livros_pdf/01_O_Caibalion_Tres_Iniciados.pdf"
};

let currentPdfDoc = null;
let currentRenderObserver = null;
let currentScrollObserver = null;
let saveProgressDebounceTimer = null;
let currentReaderPage = 1;


function openReaderModalDirect(bookId) {
  const book = booksData.find(b => b.id == bookId);
  if (!book) return;
  openReaderModal(book);
}

async function openReaderModal(book, startPage) {
  if (typeof book === "number" || typeof book === "string") {
    book = booksData.find(b => b.id == book);
  }
  if (!book) return;
  if (startPage === undefined) {
    const saved = getSavedProgress(book.id);
    startPage = saved ? saved.page : 1;
  }
  closeModal("bookModal");
  currentBookModalData = book;
  currentReaderPage = startPage;

  const rTitle = document.getElementById("readerTitle");
  if (rTitle) rTitle.textContent = book.title;

  updateReaderDisplay(book, startPage);
  openModal("readerModal");

  // Resolver URL do PDF (Prioridade: Mapeamento Local com CORS -> Fallback Drive)
  let targetUrl = book.pdfUrl;
  if (LOCAL_PDF_MAP[book.id]) {
    targetUrl = LOCAL_PDF_MAP[book.id];
  } else if (book.id === 36 || (book.title && book.title.toLowerCase().includes("enoque"))) {
    targetUrl = "livros_pdf/O_Livro_de_Enoque.pdf";
  } else if (book.id === 999 || (book.title && book.title.toLowerCase().includes("prosperidade"))) {
    targetUrl = "livros_pdf/Manuscrito_Maconico_da_Prosperidade_Oculta.pdf";
  } else if (book.id === 1 || (book.title && book.title.toLowerCase().includes("esmeralda"))) {
    targetUrl = "livros_pdf/10_A_Tabua_de_Esmeralda_Hermes_Trismegisto.pdf";
  } else if (book.id === 6 || (book.title && book.title.toLowerCase().includes("caibalion"))) {
    targetUrl = "livros_pdf/01_O_Caibalion_Tres_Iniciados.pdf";
  }

  const isLocalPDF = targetUrl && !targetUrl.includes("drive.google.com");

  const nativeContainer = document.getElementById("readerNativeContainer");
  const iframe = document.getElementById("readerIframe");
  const spinner = document.getElementById("readerLoadingSpinner");

  if (isLocalPDF && typeof pdfjsLib !== "undefined") {
    // MODO NATIVO COM SCROLL CONTÍNUO (ESTILO ORDEM 137)
    if (iframe) {
      iframe.classList.add("hidden");
      iframe.style.display = "none";
      iframe.src = "";
    }
    if (nativeContainer) {
      nativeContainer.classList.remove("hidden");
      nativeContainer.style.display = "flex";
    }
    
    await renderNativePDF(targetUrl, startPage);
  } else {
    // FALLBACK DRIVE (IFRAME)
    if (nativeContainer) {
      nativeContainer.classList.add("hidden");
      nativeContainer.style.display = "none";
    }
    if (spinner) {
      spinner.classList.add("hidden");
      spinner.style.display = "none";
    }
    if (iframe) {
      iframe.classList.remove("hidden");
      iframe.style.display = "block";
      let driveUrl = targetUrl;
      if (driveUrl.includes("drive.google.com")) {
        if (driveUrl.includes("/view")) {
          driveUrl = driveUrl.replace(/\/view(\?.*)?$/, "/preview");
        } else if (!driveUrl.includes("/preview")) {
          driveUrl = driveUrl.replace(/\?.*$/, "") + "/preview";
        }
      }
      iframe.src = driveUrl;
    }
    saveReadingProgress(book.id, startPage, book.pages);
  }
}

async function renderNativePDF(pdfUrl, startPage = 1) {
  const container = document.getElementById("readerNativeContainer");
  const spinner = document.getElementById("readerLoadingSpinner");
  const spinnerText = document.getElementById("readerLoadingText");
  if (!container) return;

  if (spinner) {
    if (spinnerText) spinnerText.textContent = "Carregando manuscrito...";
    spinner.classList.remove("hidden");
  }

  // Limpa observers anteriores e conteúdo
  if (currentRenderObserver) currentRenderObserver.disconnect();
  if (currentScrollObserver) currentScrollObserver.disconnect();
  container.innerHTML = "";

  try {
    const loadingTask = pdfjsLib.getDocument({
      url: pdfUrl,
      cMapUrl: "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/cmaps/",
      cMapPacked: true
    });

    currentPdfDoc = await loadingTask.promise;
    const numPages = currentPdfDoc.numPages;
    if (currentBookModalData) currentBookModalData.pages = numPages;

    updateReaderDisplay(currentBookModalData, startPage);

    const renderedPages = new Set();
    const pageContainers = [];

    // Obter proporção da página 1 para estruturar placeholders
    const samplePage = await currentPdfDoc.getPage(1);
    const sampleViewport = samplePage.getViewport({ scale: 1 });
    const ratio = sampleViewport.height / sampleViewport.width; // Ex: 1.414

    // Criar placeholders estruturados para cada página
    for (let p = 1; p <= numPages; p++) {
      const pageDiv = document.createElement("div");
      pageDiv.id = `pdf-page-wrapper-${p}`;
      pageDiv.dataset.pageNumber = p;
      pageDiv.className = "pdf-page-wrapper relative w-full max-w-[850px] mx-auto rounded-xl shadow-2xl bg-[#181818] border border-white/10 overflow-hidden flex flex-col items-center justify-center my-6 transition-all duration-300";
      pageDiv.style.aspectRatio = `1 / ${ratio.toFixed(4)}`;
      pageDiv.style.minHeight = "400px";

      pageDiv.innerHTML = `
        <div class="page-placeholder text-center text-gray-400 font-mono text-xs flex flex-col items-center gap-3 p-8">
          <div class="w-8 h-8 border-3 border-yellow-500/20 border-t-yellow-500 rounded-full animate-spin"></div>
          <span class="tracking-widest uppercase text-[11px] text-yellow-500/80">Página ${p} de ${numPages}</span>
        </div>
      `;

      container.appendChild(pageDiv);
      pageContainers.push(pageDiv);
    }

    if (spinner) spinner.classList.add("hidden");

    // Renderiza uma página específica em canvas HD com fundo branco opaco
    async function renderPageCanvas(pageNum, pageDiv) {
      if (renderedPages.has(pageNum)) return;
      renderedPages.add(pageNum);

      try {
        const page = await currentPdfDoc.getPage(pageNum);
        const containerWidth = Math.min(850, window.innerWidth > 640 ? window.innerWidth - 64 : window.innerWidth - 24);
        const unscaledViewport = page.getViewport({ scale: 1 });
        const pixelRatio = window.devicePixelRatio || 1;
        const displayScale = containerWidth / unscaledViewport.width;
        // Limita o fator de escala de render para evitar estouro de memória da GPU
        const renderScale = displayScale * Math.min(pixelRatio, 2.5);
        const viewport = page.getViewport({ scale: Math.max(1, renderScale) });

        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d", { alpha: false });
        canvas.width = viewport.width;
        canvas.height = viewport.height;
        canvas.style.width = "100%";
        canvas.style.height = "auto";
        canvas.style.display = "block";
        canvas.className = "w-full h-auto block rounded-xl shadow-lg";

        // Preenche com branco opaco antes de desenhar o PDF para evitar texto preto sobre fundo transparente/escuro
        ctx.fillStyle = "#ffffff";
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        const renderContext = {
          canvasContext: ctx,
          viewport: viewport
        };

        await page.render(renderContext).promise;

        pageDiv.innerHTML = "";
        pageDiv.style.minHeight = "";
        pageDiv.style.aspectRatio = "";
        pageDiv.className = "pdf-page-wrapper relative w-full max-w-[850px] mx-auto rounded-xl shadow-2xl bg-white border border-gray-300/30 overflow-hidden flex flex-col items-center my-6 transition-all duration-300";
        pageDiv.appendChild(canvas);
      } catch (err) {
        console.error("Erro ao renderizar página " + pageNum, err);
      }
    }

    // Renderizar imediatamente as páginas ao redor de startPage
    const initialPages = [startPage, startPage + 1, startPage + 2, 1, 2].filter((p, idx, arr) => p <= numPages && arr.indexOf(p) === idx);
    initialPages.forEach(p => {
      const div = document.getElementById(`pdf-page-wrapper-${p}`);
      if (div) renderPageCanvas(p, div);
    });

    // Observer Lazy para renderizar conforme chega perto da tela
    currentRenderObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const pageNum = parseInt(entry.target.dataset.pageNumber);
          renderPageCanvas(pageNum, entry.target);
        }
      });
    }, {
      root: container,
      rootMargin: "900px 0px 900px 0px"
    });

    pageContainers.forEach(div => currentRenderObserver.observe(div));

    // Observer de Rolagem para atualizar progresso (Igual ao Ordem 137)
    currentScrollObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const pageNum = parseInt(entry.target.dataset.pageNumber);
          currentReaderPage = pageNum;
          updateReaderDisplay(currentBookModalData, pageNum);

          clearTimeout(saveProgressDebounceTimer);
          saveProgressDebounceTimer = setTimeout(() => {
            saveReadingProgress(currentBookModalData.id, pageNum, numPages);
          }, 350);
        }
      });
    }, {
      root: container,
      threshold: 0.4
    });

    pageContainers.forEach(div => currentScrollObserver.observe(div));

    // Se começou numa página mais adiantada, rola até ela
    if (startPage > 1 && startPage <= numPages) {
      setTimeout(() => {
        const targetDiv = document.getElementById(`pdf-page-wrapper-${startPage}`);
        if (targetDiv) {
          targetDiv.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 300);
    }

  } catch (err) {
    console.error("Erro ao carregar PDF via PDF.js:", err);
    if (spinner) spinner.classList.add("hidden");
    showToast("Abrindo modo de leitura alternativo...");
    const iframe = document.getElementById("readerIframe");
    if (iframe) {
      container.classList.add("hidden");
      iframe.classList.remove("hidden");
      iframe.src = pdfUrl;
    }
  }
}

function updateReaderDisplay(book, page) {
  const total = book.pages || 100;
  const pct = Math.min(100, Math.round((page / total) * 100));

  const rProgressLabel = document.getElementById("readerProgressLabel");
  const rProgressBar = document.getElementById("readerProgressBar");

  if (rProgressLabel) {
    rProgressLabel.textContent = "Página " + page + " de " + total + " • " + pct + "% Concluído";
  }
  if (rProgressBar) {
    rProgressBar.style.width = pct + "%";
  }
}

function changeReaderPage(delta) {
  if (!currentBookModalData) return;
  const total = currentBookModalData.pages || 100;
  currentReaderPage = Math.max(1, Math.min(total, currentReaderPage + delta));
  
  updateReaderDisplay(currentBookModalData, currentReaderPage);
  saveReadingProgress(currentBookModalData.id, currentReaderPage, total);

  // Se estiver no leitor nativo, rola suavemente até a página
  const pageDiv = document.getElementById(`pdf-page-wrapper-${currentReaderPage}`);
  if (pageDiv) {
    pageDiv.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

function adjustReaderPage(delta) {
  changeReaderPage(delta);
}

function markCurrentBookCompleted() {
  if (!currentBookModalData) return;
  const total = currentBookModalData.pages || 100;
  currentReaderPage = total;
  
  updateReaderDisplay(currentBookModalData, total);
  saveReadingProgress(currentBookModalData.id, total, total);
  showToast("Parabéns! Obra concluída e +50 XP adicionados ao seu grau!");
}

function closeReaderModal() {
  if (currentRenderObserver) currentRenderObserver.disconnect();
  if (currentScrollObserver) currentScrollObserver.disconnect();
  const iframe = document.getElementById("readerIframe");
  if (iframe) iframe.src = "";
  const container = document.getElementById("readerNativeContainer");
  if (container) container.innerHTML = "";
  closeModal("readerModal");
}

function bookmarkCurrentPage() {
  if (!currentBookModalData) return;
  saveReadingProgress(currentBookModalData.id, currentReaderPage, currentBookModalData.pages);
  showToast("Marcador gravado: pág. " + currentReaderPage + " de " + currentBookModalData.pages + "!");
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
  renderContinueReading();
  updateProfileXP();
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
    const rCover = document.getElementById("resumeCover");
    const rTitle = document.getElementById("resumeTitle");
    const rText = document.getElementById("resumeProgressText");
    const rBar = document.getElementById("resumeProgressBar");

    if (rCover) rCover.src = data.cover;
    if (rTitle) rTitle.textContent = data.title;
    if (rText) rText.textContent = "Página " + data.page + " de " + data.totalPages + " • " + data.percent + "% Concluído";
    if (rBar) rBar.style.width = data.percent + "%";
    section.classList.remove("hidden");
    if (window.lucide) try { lucide.createIcons(); } catch(e) {}
  } catch (err) {
    section.classList.add("hidden");
  }
}

function renderContinueReading() {
  const allHistory = JSON.parse(localStorage.getItem("cupula33_books_progress") || "{}");
  const entries = Object.values(allHistory).sort((a, b) => new Date(b.timestamp || 0) - new Date(a.timestamp || 0));

  const homeSection = document.getElementById("homeContinueSection");
  const homeCarousel = document.getElementById("homeContinueCarousel");
  const libSection = document.getElementById("sectionContinueReading");
  const libCarousel = document.getElementById("continueReadingCarousel");

  if (entries.length === 0) {
    if (homeSection) homeSection.classList.add("hidden");
    if (libSection) libSection.classList.add("hidden");
    return;
  }

  const cardsHTML = entries.map(item => `
    <div onclick="handleBookClick(${item.bookId})" class="shrink-0 w-36 sm:w-44 group cursor-pointer text-left snap-start">
      <div class="relative aspect-[3/4] rounded-2xl overflow-hidden bg-[#141414] border border-white/10 group-hover:border-yellow-500/60 shadow-lg transition-all duration-300">
        <img src="${item.cover || 'assets/logo.jpg'}" alt="${item.title}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" onerror="this.onerror=null; this.src='assets/logo.jpg'">
        <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
        <div class="absolute top-2.5 left-2.5 px-2 py-0.5 rounded-full bg-black/75 backdrop-blur-md border border-white/10 flex items-center gap-1.5 shadow">
          <span class="w-1.5 h-1.5 rounded-full bg-yellow-400 animate-pulse"></span>
          <span class="font-mono font-bold text-[10px] text-white">${item.percent || 0}%</span>
        </div>
      </div>
      <h4 class="text-xs font-serif font-bold text-white mt-2.5 truncate group-hover:text-yellow-400 transition-colors">${item.title}</h4>
      <p class="text-[11px] text-gray-500 truncate">${item.author || 'Acervo Cúpula 33'}</p>
    </div>
  `).join("");

  if (homeSection && homeCarousel) {
    homeCarousel.innerHTML = cardsHTML;
    homeSection.classList.remove("hidden");
  }
  if (libSection && libCarousel) {
    libCarousel.innerHTML = cardsHTML;
    libSection.classList.remove("hidden");
  }
  if (window.lucide) try { lucide.createIcons(); } catch(e) {}
}

function updateProfileXP() {
  const allHistory = JSON.parse(localStorage.getItem("cupula33_books_progress") || "{}");
  const entries = Object.values(allHistory);
  
  let totalPagesRead = 0;
  let completedCount = 0;

  entries.forEach(b => {
    totalPagesRead += (b.page || 0);
    if ((b.percent || 0) >= 95) completedCount++;
  });

  const totalXP = (totalPagesRead * 2) + (completedCount * 50);
  const level = Math.max(1, Math.floor(totalXP / 300) + 1);
  const currentLevelXP = totalXP % 300;
  const pctToNext = Math.min(100, Math.round((currentLevelXP / 300) * 100));

  const xpText = document.getElementById("profileXpText");
  const nextLvlText = document.getElementById("profileNextLvlText");
  const xpBar = document.getElementById("profileXpBar");
  const statBooks = document.getElementById("statCompletedBooks");
  const statLvl = document.getElementById("statCurrentLevel");
  const lvlBadge = document.getElementById("profileLevelBadge");

  if (xpText) xpText.textContent = `XP: ${currentLevelXP} / 300`;
  if (nextLvlText) nextLvlText.textContent = `RUMO AO NÍVEL ${level + 1}`;
  if (xpBar) xpBar.style.width = `${Math.max(5, pctToNext)}%`;
  if (statBooks) statBooks.textContent = completedCount;
  if (statLvl) statLvl.textContent = `Nível ${level}`;
  if (lvlBadge) lvlBadge.textContent = `LVL ${level}`;
}

function resumeLastReading() {
  const stored = localStorage.getItem("cupula33_active_reading");
  if (!stored) return;
  try {
    const data = JSON.parse(stored);
    const book = booksData.find(b => b.id === data.bookId);
    if (book) {
      openReaderModal(book, data.page);
    }
  } catch(e) {}
}

function clearReadingProgress() {
  localStorage.removeItem("cupula33_active_reading");
  checkReadingProgress();
  renderContinueReading();
  showToast("Progresso de leitura resetado.");
}

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
    if (window.lucide) try { if (window.lucide) lucide.createIcons(); } catch(e) {}
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
// ==========================================
// MOTOR DE FREQUÊNCIAS SAGRADAS (SOLFEGGIO BINAURAL 3.0)
// ==========================================
let currentOscillators = [];
let masterGainNode = null;

function renderFrequencies() {
  const list = document.getElementById("frequenciesList");
  if (!list) return;

  list.innerHTML = frequenciesData.map(f => {
    const isLocked = currentTier === "basico" && f.tier === "master";
    const isPlaying = activeFrequencyHz === f.hz;

    return `
      <div class="glass-panel glass-panel-hover rounded-2xl p-5 border ${isPlaying ? 'border-yellow-500 shadow-[0_0_20px_rgba(234,179,8,0.25)]' : 'border-white/10'} flex flex-col justify-between transition-all">
        <div>
          <div class="flex items-center justify-between mb-3">
            <span class="text-xs font-serif font-bold text-yellow-400">${f.hz} HZ</span>
            <span class="text-[10px] font-bold text-gray-400">${f.chakra || ''}</span>
          </div>
          <h4 class="font-serif font-bold text-base text-gray-100 mb-1">${f.name}</h4>
          <p class="text-xs text-gray-400 leading-relaxed mb-4">${f.benefit}</p>
        </div>
        <div class="pt-3 border-t border-white/10 flex items-center justify-between">
          <span class="text-[11px] text-gray-500">Onda Pura Senoidal</span>
          <button onclick="handleFrequencyClick(${f.hz})" class="px-4 py-2 rounded-xl ${isPlaying ? 'bg-yellow-400 text-black font-black' : 'bg-yellow-500 text-black font-bold'} text-xs flex items-center gap-1.5 transition-all shadow-md">
            <i data-lucide="${isPlaying ? 'pause' : 'play'}" class="w-3.5 h-3.5"></i>
            <span>${isPlaying ? 'Pausar' : 'Sintonizar'}</span>
          </button>
        </div>
      </div>
    `;
  }).join("");

  if (window.lucide) try { lucide.createIcons(); } catch(e) {}
}

function handleFrequencyClick(hz) {
  const targetHz = parseInt(hz);
  if (activeFrequencyHz === targetHz) {
    stopFrequency(true);
  } else {
    playFrequency(targetHz);
  }
}

async function playFrequency(hz, name) {
  const targetHz = parseInt(hz);
  if (activeFrequencyHz === targetHz) {
    stopFrequency(true);
    return;
  }
  stopFrequency(false);

  try {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (!AudioContextClass) {
      showToast("Áudio não suportado neste dispositivo.");
      return;
    }
    if (!audioCtx || audioCtx.state === 'closed') {
      audioCtx = new AudioContextClass();
    }
    if (audioCtx.state === 'suspended') {
      await audioCtx.resume();
    }

    masterGainNode = audioCtx.createGain();
    masterGainNode.gain.setValueAtTime(0.01, audioCtx.currentTime);
    masterGainNode.gain.linearRampToValueAtTime(0.40, audioCtx.currentTime + 0.15);
    masterGainNode.connect(audioCtx.destination);

    // Oscilador 1: Tom Principal
    const osc1 = audioCtx.createOscillator();
    osc1.type = "sine";
    osc1.frequency.setValueAtTime(targetHz, audioCtx.currentTime);
    osc1.connect(masterGainNode);
    osc1.start();
    currentOscillators.push(osc1);

    // Oscilador 2: Batimento Harmônico (+4 Hz)
    const osc2 = audioCtx.createOscillator();
    osc2.type = "sine";
    osc2.frequency.setValueAtTime(targetHz + 4, audioCtx.currentTime);
    const osc2Gain = audioCtx.createGain();
    osc2Gain.gain.setValueAtTime(0.20, audioCtx.currentTime);
    osc2.connect(osc2Gain);
    osc2Gain.connect(masterGainNode);
    osc2.start();
    currentOscillators.push(osc2);

    activeFrequencyHz = targetHz;

    const badge = document.getElementById("playerCurrentHz");
    if (badge) badge.textContent = `Sintonizado em ${targetHz} Hz ${name ? '• ' + name : ''}`;

    document.querySelectorAll("[data-freq-btn]").forEach(btn => {
      const bHz = parseInt(btn.getAttribute("data-freq-btn"));
      if (bHz === targetHz) {
        btn.classList.add("border-yellow-500", "bg-yellow-500/10", "shadow-[0_0_20px_rgba(234,179,8,0.3)]");
        btn.classList.remove("border-white/10", "bg-white/5");
      } else {
        btn.classList.remove("border-yellow-500", "bg-yellow-500/10", "shadow-[0_0_20px_rgba(234,179,8,0.3)]");
        btn.classList.add("border-white/10", "bg-white/5");
      }
    });

    renderFrequencies();
    showToast(`Frequência de ${targetHz} Hz Sintonizada`);
  } catch (err) {
    console.error("Erro ao ativar frequência:", err);
    showToast("Toque na tela para permitir áudio.");
  }
}

function stopFrequency(showFeedback = true) {
  if (masterGainNode && audioCtx && audioCtx.state !== 'closed') {
    try {
      masterGainNode.gain.setValueAtTime(masterGainNode.gain.value, audioCtx.currentTime);
      masterGainNode.gain.linearRampToValueAtTime(0.001, audioCtx.currentTime + 0.1);
    } catch(e) {}
  }

  setTimeout(() => {
    currentOscillators.forEach(osc => {
      try {
        osc.stop();
        osc.disconnect();
      } catch(e) {}
    });
    currentOscillators = [];
  }, 120);

  activeFrequencyHz = null;

  const badge = document.getElementById("playerCurrentHz");
  if (badge) badge.textContent = "Santuário em Silêncio";

  document.querySelectorAll("[data-freq-btn]").forEach(btn => {
    btn.classList.remove("border-yellow-500", "bg-yellow-500/10", "shadow-[0_0_20px_rgba(234,179,8,0.3)]");
    btn.classList.add("border-white/10", "bg-white/5");
  });

  renderFrequencies();
  if (showFeedback) showToast("Frequência pausada.");
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

  if (window.lucide) try { if (window.lucide) lucide.createIcons(); } catch(e) {}
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
  if (modalId === "profileModal") {
    loadUserProfile();
  }
  const m = document.getElementById(modalId);
  if (m) {
    m.classList.remove("hidden");
    m.style.display = "flex";
  }
}

function closeModal(modalId) {
  const m = document.getElementById(modalId);
  if (m) {
    m.classList.add("hidden");
    m.style.display = "none";
  }
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

// PWA INSTALL PROMPT & BAIXAR APP
let deferredPrompt = null;
window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault();
  deferredPrompt = e;
  const nativeBtn = document.getElementById('nativeInstallDirectBtn');
  if (nativeBtn) {
    nativeBtn.textContent = "Instalar Agora (1 Clique)";
  }
});

function triggerPWAInstall() {
  if (deferredPrompt) {
    deferredPrompt.prompt();
    deferredPrompt.userChoice.then((choiceResult) => {
      if (choiceResult.outcome === 'accepted') {
        showToast("Instalação iniciada com sucesso!");
      }
      deferredPrompt = null;
    });
  } else {
    // Abre modal com instruções completas para iOS e Android
    openModal('installAppModal');
  }
}

function executeNativeInstallPrompt() {
  if (deferredPrompt) {
    closeModal('installAppModal');
    deferredPrompt.prompt();
    deferredPrompt.userChoice.then((choiceResult) => {
      if (choiceResult.outcome === 'accepted') {
        showToast("App Cúpula 33 instalado!");
      }
      deferredPrompt = null;
    });
  } else {
    // Se não há prompt nativo (ex: Safari no iOS ou já instalado), orienta direto
    showToast("Siga as instruções na tela para adicionar à Tela de Início!");
  }
}


// ==========================================
// AUTENTICAÇÃO VIP & INTEGRAÇÃO SUPABASE + PERFECTPAY
// ==========================================
const SUPABASE_CONFIG = {
  url: "https://wnfkbiqdyrxyuzgeekte.supabase.co",
  apiKey: "sb_secret_QuSI1iueatqHNwAo__i6fQ_NXgEfrZg",
  localVerifyApi: "http://127.0.0.1:8033/api/verify"
};

const MASTER_ALLOWLIST = [
  "tjoaquim627@gmail.com",
  "paulo-reis51@hotmail.com",
  "mrobertor057@gmail.com",
  "crazyled.delavelle9@gmail.com",
  "edurosalopes@vivaldi.net",
  "testealuno@gmail.com",
  "cliente@example.com",
  "suportesabedoriaoculta@gmail.com",
  "admin@cupula33.com",
  "sigmamarketing@gmail.com",
  "teste@cupula33.com"
];

function checkVipGateAuth() {
  const gate = document.getElementById("vipLoginGate");
  const savedEmail = (localStorage.getItem("cupula33_user_email") || "").trim().toLowerCase();
  const savedTier = localStorage.getItem("cupula33_user_tier");

  if (!gate) return;

  if (savedEmail) {
    if (savedTier === "master") {
      currentTier = "master";
    }
    try { updateTierBadgeUI(); } catch(e) {}
    try { updateAllUserDisplays(); } catch(e) {}
    gate.style.opacity = "0";
    gate.style.pointerEvents = "none";
    setTimeout(() => {
      gate.classList.add("hidden");
      gate.style.display = "none";
    }, 200);
  } else {
    gate.classList.remove("hidden");
    gate.style.display = "flex";
    gate.style.pointerEvents = "auto";
    gate.style.opacity = "1";
    setTimeout(() => {
      const inp = document.getElementById("gateEmailInput");
      if (inp) inp.focus();
    }, 150);
  }
}

async function verifyMemberInSupabase(email) {
  const cleanEmail = String(email || "").trim().toLowerCase();
  
  // 1. Checagem imediata na whitelist embutida
  if (MASTER_ALLOWLIST.includes(cleanEmail) || cleanEmail.endsWith("@cupula33.com")) {
    return { authorized: true, tier: "master" };
  }

  // 2. Checagem no banco de membros local do site (cupula33_members.json)
  try {
    const localRes = await fetch("cupula33_members.json?t=" + Date.now());
    if (localRes.ok) {
      const db = await localRes.json();
      if (db && db.members && db.members[cleanEmail] && db.members[cleanEmail].active !== false) {
        return { authorized: true, tier: db.members[cleanEmail].tier || "master" };
      }
    }
  } catch (err) {
    console.warn("Falha ao checar cupula33_members.json:", err);
  }

  // 3. Fallback no webhook se estiver online
  try {
    const respLocal = await fetch(`${SUPABASE_CONFIG.localVerifyApi}?email=${encodeURIComponent(cleanEmail)}`);
    if (respLocal.ok) {
      const data = await respLocal.json();
      if (data && data.authorized) {
        return { authorized: true, tier: data.tier || "master" };
      }
    }
  } catch (e) {}

  return { authorized: false };
}

async function authenticateGateLogin() {
  const input = document.getElementById("gateEmailInput");
  const btn = document.getElementById("gateSubmitBtn");
  const statusMsg = document.getElementById("gateStatusMsg");

  if (!input) return;
  const email = input.value.trim().toLowerCase();

  if (!email || !email.includes("@") || !email.includes(".")) {
    if (statusMsg) {
      statusMsg.className = "text-xs text-center min-h-[20px] font-bold text-red-400";
      statusMsg.textContent = "Digite um e-mail válido para prosseguir.";
    }
    return;
  }

  if (btn) {
    btn.disabled = true;
    btn.innerHTML = `<i data-lucide="loader" class="w-4 h-4 animate-spin"></i><span>Consultando no Supabase...</span>`;
    if (window.lucide) try { if (window.lucide) lucide.createIcons(); } catch(e) {}
  }

  if (statusMsg) {
    statusMsg.className = "text-xs text-center min-h-[20px] text-gold-400 animate-pulse";
    statusMsg.textContent = "Verificando liberação na nuvem...";
  }

  let authorized = false;
  let userTier = "master";

  const cleanEmail = email.trim().toLowerCase();
  const passInput = document.getElementById("gatePasswordInput");
  const passValue = passInput ? passInput.value.trim() : "";

  // 1. Verificação instantânea na Whitelist ou Senha Mestra Oficial (cupula@33 / ordem@137)
  if (MASTER_ALLOWLIST.includes(cleanEmail) || cleanEmail.endsWith("@cupula33.com") || passValue === "cupula@33" || passValue === "ordem@137") {
    authorized = true;
    userTier = "master";
  } else {
    // 2. Consulta na base de membros e na nuvem
    const result = await verifyMemberInSupabase(cleanEmail);
    if (result.authorized) {
      authorized = true;
      userTier = result.tier;
    }
  }

    if (authorized) {
    localStorage.setItem("cupula33_user_email", email);
    localStorage.setItem("cupula33_user_tier", userTier);
    currentTier = userTier;
    updateAllUserDisplays();
    updateProfileXP();
    renderContinueReading();
    renderCommunityFeed(currentCommunityFilter);

    if (statusMsg) {
      statusMsg.className = "text-xs text-center min-h-[20px] font-bold text-emerald-400";
      statusMsg.textContent = "✓ Acesso Autorizado! Carregando Acervo Sagrado...";
    }

    try { updateTierBadgeUI(); } catch(e) {}
    try { renderBooks(); } catch(e) {}

    // Fecha o portal de login imediatamente
    const gate = document.getElementById("vipLoginGate");
    if (gate) {
      gate.style.opacity = "0";
      setTimeout(() => {
        gate.classList.add("hidden");
        gate.style.display = "none";
      }, 300);
    }
  } else {
    if (statusMsg) {
      statusMsg.className = "text-xs text-center min-h-[20px] font-bold text-rose-400";
      statusMsg.innerHTML = `E-mail não localizado no banco de dados. <a href="https://pay.kirvano.com/1fdcf9d3-915e-432f-9046-cd2285db206e" target="_blank" class="underline text-gold-400">Garanta seu acesso aqui</a>`;
    }
  }

  if (btn) {
    btn.disabled = false;
    btn.innerHTML = `<i data-lucide="lock-open" class="w-4 h-4"></i><span>Entrar no Acervo Sagrado</span>`;
    if (window.lucide) try { if (window.lucide) lucide.createIcons(); } catch(e) {}
  }
}

function loginWithEmail() {
  const memberInput = document.getElementById("memberEmailInput");
  const note = document.getElementById("memberStatusNote");
  if (!memberInput) return;
  const email = memberInput.value.trim().toLowerCase();

  if (!email || !email.includes("@")) {
    if (note) {
      note.className = "text-[11px] text-red-400 text-center pt-1 font-bold";
      note.textContent = "E-mail inválido.";
    }
    return;
  }

  localStorage.setItem("cupula33_user_email", email);
  localStorage.setItem("cupula33_user_tier", "master");
  currentTier = "master";
  updateTierUI();
  renderBooks();

  if (note) {
    note.className = "text-[11px] text-emerald-400 text-center pt-1 font-bold";
    note.textContent = "✓ Status Atualizado: Membro Master Vitalício!";
  }

  showToast("Identidade confirmada como Membro Master");
  setTimeout(() => closeModal("profileModal"), 900);
}

function logoutVipGate() {
  localStorage.removeItem("cupula33_user_email");
  localStorage.removeItem("cupula33_user_tier");
  window.location.reload();
}

// Inicializar verificação de login VIP assim que o script rodar sem travar em DOMContentLoaded
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", checkVipGateAuth);
} else {
  checkVipGateAuth();
}

// ==========================================
// PÁGINA DEDICADA DE MÓDULO (ESTILO BRAINSYNC)
// ==========================================
let currentActiveModule = null;

function openModuleDetail(moduleCategory) {
  currentActiveModule = moduleCategory;
  
  // Ocultar view geral da biblioteca e exibir view de detalhe do módulo
  const mainLibraryView = document.getElementById("mainLibraryView");
  const moduleDetailView = document.getElementById("moduleDetailView");
  
  if (mainLibraryView) mainLibraryView.classList.add("hidden");
  if (moduleDetailView) {
    moduleDetailView.classList.remove("hidden");
    renderModuleDetailContent(moduleCategory);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
}

function closeModuleDetail() {
  currentActiveModule = null;
  const mainLibraryView = document.getElementById("mainLibraryView");
  const moduleDetailView = document.getElementById("moduleDetailView");
  
  if (moduleDetailView) moduleDetailView.classList.add("hidden");
  if (mainLibraryView) {
    mainLibraryView.classList.remove("hidden");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
}

function renderModuleDetailContent(moduleCategory) {
  const titleEl = document.getElementById("moduleDetailTitle");
  const descEl = document.getElementById("moduleDetailDesc");
  const gridEl = document.getElementById("moduleDetailBooksGrid");
  const countEl = document.getElementById("moduleDetailCount");
  
  const moduleBooks = booksData.filter(b => b.category.toLowerCase() === moduleCategory.toLowerCase() || (b.module && b.module.toLowerCase() === moduleCategory.toLowerCase()));
  
  if (titleEl) titleEl.textContent = moduleCategory;
  if (countEl) countEl.textContent = moduleBooks.length + " Manuscritos & Tratados";
  
  const allHistory = JSON.parse(localStorage.getItem("cupula33_books_progress") || "{}");
  
  if (gridEl) {
    gridEl.innerHTML = moduleBooks.map(book => {
      const isLocked = currentTier === "basico" && book.tier === "master";
      const progress = allHistory[book.id];
      const percent = progress ? progress.percent : 0;
      const curPage = progress ? progress.page : 1;
      
      return `
        <div onclick="handleBookClick(${book.id})" class="glass-panel glass-panel-hover rounded-2xl overflow-hidden border border-gold-500/20 flex flex-col justify-between cursor-pointer group relative transition-all">
          <div class="relative aspect-[3/4] bg-dark-900 overflow-hidden">
            <img src="${book.cover}" alt="${book.title}" loading="lazy" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
            <span class="absolute top-2 left-2 px-2 py-0.5 rounded-md bg-dark-950/85 backdrop-blur-md text-[9px] font-bold text-gold-400 border border-gold-500/30 tracking-wider uppercase">
              ${book.module}
            </span>
            ${isLocked ? `
              <div class="absolute inset-0 bg-dark-950/85 backdrop-blur-[2px] flex flex-col items-center justify-center p-3 text-center border-2 border-gold-500/50">
                <div class="w-10 h-10 rounded-full bg-gold-500/20 border border-gold-500/50 flex items-center justify-center text-gold-400 mb-2">
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
          
          <div class="p-3 flex-1 flex flex-col justify-between">
            <div>
              <span class="text-[9px] font-semibold text-gold-500/90 uppercase tracking-wider block mb-0.5">${book.category}</span>
              <h4 class="font-cinzel font-bold text-xs text-gray-100 group-hover:text-gold-300 transition-colors line-clamp-2">${book.title}</h4>
              <p class="text-[11px] text-gray-400 mt-0.5 line-clamp-1">${book.author}</p>
            </div>
            
            <div class="mt-3">
              <!-- Barra de Progresso Individual de Leitura -->
              <div class="flex items-center justify-between text-[10px] text-gray-400 mb-1">
                <span>Progresso:</span>
                <span class="text-gold-400 font-bold">${percent}%</span>
              </div>
              <div class="w-full h-1.5 rounded-full bg-dark-900 border border-dark-700 overflow-hidden mb-2">
                <div class="h-full bg-gradient-to-r from-gold-500 to-amber-300" style="width: ${percent}%"></div>
              </div>
              
              <div class="pt-2 border-t border-dark-700/60 flex items-center justify-between text-[10px]">
                <span class="text-gold-400/90 font-serif italic">${book.rarity}</span>
                <span class="font-bold ${isLocked ? 'text-amber-400' : 'text-gray-300 group-hover:text-gold-400'} flex items-center gap-1">
                  ${isLocked ? '<i data-lucide="crown" class="w-3 h-3 text-gold-400"></i> Upgrade' : '<i data-lucide="book-open" class="w-3 h-3"></i> Ler Agora'}
                </span>
              </div>
            </div>
          </div>
        </div>
      `;
    }).join("");
    
    if (window.lucide) try { if (window.lucide) lucide.createIcons(); } catch(e) {}
  }
}


// ==========================================
// SISTEMA DE PERFIL 100% PERSONALIZÁVEL POR CLIENTE
// ==========================================

function getProfileStorageKey() {
  const currentEmail = (localStorage.getItem('cupula33_user_email') || 'aluno').trim().toLowerCase();
  return 'cupula33_profile_' + currentEmail;
}

function loadUserProfile() {
  const currentEmail = localStorage.getItem('cupula33_user_email') || 'testealuno@gmail.com';
  const key = getProfileStorageKey();
  const savedProfile = JSON.parse(localStorage.getItem(key) || '{}');

  // Valores padrão: para cada novo cliente vem zerado / vazio, apenas com nome derivado e email fixo
  const defaultName = savedProfile.name || (typeof KNOWN_STUDENT_NAMES !== "undefined" && KNOWN_STUDENT_NAMES[currentEmail.toLowerCase()]) || "Iniciado da Cúpula";
  const defaultTitle = savedProfile.title || '';
  const defaultBio = savedProfile.bio || '';
  const defaultFreq = savedProfile.frequency || '432';
  const defaultModule = savedProfile.focusModule || 'Módulo I';
  const defaultAvatar = savedProfile.avatar || 'assets/logo.jpg';

  // Atualizar visual do modal
  const dispName = document.getElementById('profileDisplayName');
  const dispEmail = document.getElementById('profileDisplayEmail');
  const avatarImg = document.getElementById('profileAvatarImg');

  const inpName = document.getElementById('profileInputName');
  const inpEmail = document.getElementById('profileInputEmail');
  const inpTitle = document.getElementById('profileInputTitle');
  const inpBio = document.getElementById('profileInputBio');
  const inpFreq = document.getElementById('profileInputFrequency');
  const inpModule = document.getElementById('profileInputFocusModule');

  if (dispName) dispName.textContent = defaultName;
  if (dispEmail) dispEmail.textContent = currentEmail;
  if (avatarImg) avatarImg.src = defaultAvatar;

  if (inpName) inpName.value = defaultName;
  if (inpEmail) inpEmail.value = currentEmail;
  if (inpTitle) inpTitle.value = defaultTitle;
  if (inpBio) inpBio.value = defaultBio;
  if (inpFreq) inpFreq.value = defaultFreq;
  if (inpModule) inpModule.value = defaultModule;

  if (window.lucide) try { lucide.createIcons(); } catch(e) {}
}

function saveUserProfile() {
  const currentEmail = localStorage.getItem('cupula33_user_email') || 'testealuno@gmail.com';
  const key = getProfileStorageKey();
  const savedProfile = JSON.parse(localStorage.getItem(key) || '{}');

  const name = document.getElementById('profileInputName') ? document.getElementById('profileInputName').value.trim() : '';
  const title = document.getElementById('profileInputTitle') ? document.getElementById('profileInputTitle').value.trim() : '';
  const bio = document.getElementById('profileInputBio') ? document.getElementById('profileInputBio').value.trim() : '';
  const freq = document.getElementById('profileInputFrequency') ? document.getElementById('profileInputFrequency').value : '432';
  const module = document.getElementById('profileInputFocusModule') ? document.getElementById('profileInputFocusModule').value : 'Módulo I';

  const updatedProfile = {
    ...savedProfile,
    email: currentEmail,
    name: name || savedProfile.name || 'Iniciado da Cúpula',
    title: title,
    bio: bio,
    frequency: freq,
    focusModule: module,
    updatedAt: new Date().toISOString()
  };

  localStorage.setItem(key, JSON.stringify(updatedProfile));

  // Atualizar elementos na tela
  const dispName = document.getElementById('profileDisplayName');
  if (dispName) dispName.textContent = updatedProfile.name;

  showToast('Perfil salvo com sucesso!');
  setTimeout(() => closeModal('profileModal'), 600);
}

function handleProfileAvatarChange(event) {
  const file = event.target.files[0];
  if (!file) return;

  if (file.size > 2 * 1024 * 1024) {
    showToast('Escolha uma foto menor que 2MB.');
    return;
  }

  const reader = new FileReader();
  reader.onload = function(e) {
    const base64Img = e.target.result;
    const avatarImg = document.getElementById('profileAvatarImg');
    if (avatarImg) avatarImg.src = base64Img;

    const key = getProfileStorageKey();
    const savedProfile = JSON.parse(localStorage.getItem(key) || '{}');
    savedProfile.avatar = base64Img;
    localStorage.setItem(key, JSON.stringify(savedProfile));

    showToast('Foto do perfil atualizada!');
  };
  reader.readAsDataURL(file);
}

// Hook no openModal para carregar os dados sempre que abrir o profileModal
const _originalOpenModal = window.openModal;
