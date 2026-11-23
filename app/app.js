/**
 * CÚPULA 33 | PLATAFORMA DE MEMBROS & ACERVO HERMÉTICO PWA
 * Estrutura Canônica: 6 Módulos Oficiais (2.500 Obras no Master vs 500 no Básico)
 * Recursos VIP: Marcador de Leitura (localStorage), Audiobook com Frequência 432Hz e Download de Áudio.
 * Estilo inspirado no The King's Code e BrainSync.
 */

// 1. BANCO DE DADOS OFICIAL - 55 OBRAS RESTAURADAS COM PDFS E CAPAS EXCLUSIVAS
const booksData = [{"id": 1, "title": "1919", "author": "Acervo Cúpula 33 (Tradição Oculta)", "category": "Mente & Projeção Astral", "module": "Módulo VI", "rarity": "Essencial", "pages": 167, "cover": "assets/books/o-caibalion.jpg", "tier": "basico", "desc": "Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.", "pdfUrl": "https://drive.google.com/file/d/1NESnrLL6nFH4_svmk0_Iz3Pqp-vwnW8c/preview"}, {"id": 2, "title": "O Caibalion Tres Iniciados", "author": "Acervo Cúpula 33 (Tradição Oculta)", "category": "Hermetismo & Cabala", "module": "Módulo I", "rarity": "Essencial", "pages": 184, "cover": "assets/books/o-caibalion.jpg", "tier": "basico", "desc": "Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Hermetismo & Cabala com fac-símiles de alta resolução.", "pdfUrl": "https://drive.google.com/file/d/1fJ-uVawwIUwCaCIAs5_aBkS8R6OPa1nZ/preview"}, {"id": 3, "title": "O Livro De Enoque Completo", "author": "Acervo Cúpula 33 (Tradição Oculta)", "category": "Gnosticismo & Apócrifos", "module": "Módulo III", "rarity": "Raríssimo (Manuscrito Restaurado)", "pages": 201, "cover": "assets/books/três-livros-de-filosofia-oculta.jpg", "tier": "basico", "desc": "Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Gnosticismo & Apócrifos com fac-símiles de alta resolução.", "pdfUrl": "https://drive.google.com/file/d/16EcUC7QExDl5OHbT79locpFdTpWV8C0G/preview"}, {"id": 4, "title": "O Livro De Dzyan Blavatsky", "author": "Acervo Cúpula 33 (Tradição Oculta)", "category": "Mente & Projeção Astral", "module": "Módulo VI", "rarity": "Essencial", "pages": 218, "cover": "assets/books/três-livros-de-filosofia-oculta.jpg", "tier": "basico", "desc": "Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.", "pdfUrl": "https://drive.google.com/file/d/1wQXp7LANbURtT_mqq8naGvsxba5xiNzc/preview"}, {"id": 5, "title": "O Livro Dos Jubileus Integral", "author": "Acervo Cúpula 33 (Tradição Oculta)", "category": "Gnosticismo & Apócrifos", "module": "Módulo III", "rarity": "Essencial", "pages": 235, "cover": "assets/books/três-livros-de-filosofia-oculta.jpg", "tier": "basico", "desc": "Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Gnosticismo & Apócrifos com fac-símiles de alta resolução.", "pdfUrl": "https://drive.google.com/file/d/1owikNEnPKm0j5b9pOwMGRb3RmMIfcHFi/preview"}, {"id": 6, "title": "Dogma E Ritual Da Alta Magia Eliphas Levi", "author": "Acervo Cúpula 33 (Tradição Oculta)", "category": "Grimórios & Alta Magia", "module": "Módulo II", "rarity": "Raríssimo (Manuscrito Restaurado)", "pages": 252, "cover": "assets/books/dogma-e-ritual-alta-magia.jpg", "tier": "basico", "desc": "Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Grimórios & Alta Magia com fac-símiles de alta resolução.", "pdfUrl": "https://drive.google.com/file/d/1DqIql5lpjhU4DQQJpBCYICqvD_yyKWb9/preview"}, {"id": 7, "title": "O Livro Dos Gigantes Qumran", "author": "Acervo Cúpula 33 (Tradição Oculta)", "category": "Gnosticismo & Apócrifos", "module": "Módulo III", "rarity": "Essencial", "pages": 269, "cover": "assets/books/três-livros-de-filosofia-oculta.jpg", "tier": "basico", "desc": "Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Gnosticismo & Apócrifos com fac-símiles de alta resolução.", "pdfUrl": "https://drive.google.com/file/d/15Yw1GWFoS0ly2PJlxgZLvl3-KlVObeA0/preview"}, {"id": 8, "title": "Kebra Nagast A Gloria Dos Reis", "author": "Acervo Cúpula 33 (Tradição Oculta)", "category": "Mente & Projeção Astral", "module": "Módulo VI", "rarity": "Essencial", "pages": 286, "cover": "assets/books/o-caibalion.jpg", "tier": "basico", "desc": "Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.", "pdfUrl": "https://drive.google.com/file/d/1bbWxdeAHmAN-caeLtUSWnM3XCbeRJ3bY/preview"}, {"id": 9, "title": "O Livro De Enoque Completo", "author": "Acervo Cúpula 33 (Tradição Oculta)", "category": "Gnosticismo & Apócrifos", "module": "Módulo III", "rarity": "Raríssimo (Manuscrito Restaurado)", "pages": 303, "cover": "assets/books/três-livros-de-filosofia-oculta.jpg", "tier": "basico", "desc": "Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Gnosticismo & Apócrifos com fac-símiles de alta resolução.", "pdfUrl": "https://drive.google.com/file/d/16EcUC7QExDl5OHbT79locpFdTpWV8C0G/preview"}, {"id": 10, "title": "Moral E Dogma Albert Pike", "author": "Acervo Cúpula 33 (Tradição Oculta)", "category": "Sociedades Secretas", "module": "Módulo V", "rarity": "Essencial", "pages": 320, "cover": "assets/books/dogma-e-ritual-alta-magia.jpg", "tier": "basico", "desc": "Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Sociedades Secretas com fac-símiles de alta resolução.", "pdfUrl": "https://drive.google.com/file/d/1n-cSmLiBKnsMqw-MhMNH3pfLSCTPKsu5/preview"}, {"id": 11, "title": "Bonus Mapa Dos 200 Vigilantes E Linhagens", "author": "Acervo Cúpula 33 (Tradição Oculta)", "category": "Mente & Projeção Astral", "module": "Módulo VI", "rarity": "Essencial", "pages": 337, "cover": "assets/books/o-caibalion.jpg", "tier": "basico", "desc": "Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.", "pdfUrl": "https://drive.google.com/file/d/141KXAt0CfkUixVF_2qthWPasslpeZI4C/preview"}, {"id": 12, "title": "Livro De Sao Cipriano Capa Preta", "author": "Acervo Cúpula 33 (Tradição Oculta)", "category": "Grimórios & Alta Magia", "module": "Módulo II", "rarity": "Raríssimo (Manuscrito Restaurado)", "pages": 354, "cover": "assets/books/três-livros-de-filosofia-oculta.jpg", "tier": "basico", "desc": "Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Grimórios & Alta Magia com fac-símiles de alta resolução.", "pdfUrl": "https://drive.google.com/file/d/1uclsGwBCk4XmKgplx0xXM36WhsxNW0Lt/preview"}, {"id": 13, "title": "Bonus Guia De Leitura Cruzada Novo Testamento", "author": "Acervo Cúpula 33 (Tradição Oculta)", "category": "Mente & Projeção Astral", "module": "Módulo VI", "rarity": "Essencial", "pages": 371, "cover": "assets/books/o-caibalion.jpg", "tier": "basico", "desc": "Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.", "pdfUrl": "https://drive.google.com/file/d/1YZ3cNdybzC3Dmkm1cop7Mi-u_3oxSJyL/preview"}, {"id": 14, "title": "Corpus Hermeticum Hermes Trismegisto", "author": "Acervo Cúpula 33 (Tradição Oculta)", "category": "Hermetismo & Cabala", "module": "Módulo I", "rarity": "Essencial", "pages": 388, "cover": "assets/books/corpus-hermeticum.jpg", "tier": "basico", "desc": "Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Hermetismo & Cabala com fac-símiles de alta resolução.", "pdfUrl": "https://drive.google.com/file/d/1HfiOxm7QHzgVeKwusp1WfxEsv5v8BtN3/preview"}, {"id": 15, "title": "O Livro Da Lei Liber Al Vel Legis Crowley", "author": "Acervo Cúpula 33 (Tradição Oculta)", "category": "Grimórios & Alta Magia", "module": "Módulo II", "rarity": "Raríssimo (Manuscrito Restaurado)", "pages": 405, "cover": "assets/books/três-livros-de-filosofia-oculta.jpg", "tier": "basico", "desc": "Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Grimórios & Alta Magia com fac-símiles de alta resolução.", "pdfUrl": "https://drive.google.com/file/d/15_XiLzugNALkSqhXS5p2TvRU9ouie33W/preview"}, {"id": 16, "title": "A Tabua De Esmeralda Hermes Trismegisto", "author": "Acervo Cúpula 33 (Tradição Oculta)", "category": "Hermetismo & Cabala", "module": "Módulo I", "rarity": "Essencial", "pages": 422, "cover": "assets/books/tabua-de-esmeralda.jpg", "tier": "basico", "desc": "Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Hermetismo & Cabala com fac-símiles de alta resolução.", "pdfUrl": "https://drive.google.com/file/d/1V5zInrxDcqZ8dOVPumVVotJuyXnJndNs/preview"}, {"id": 17, "title": "As Nove Portas Do Reino Das Sombras", "author": "Acervo Cúpula 33 (Tradição Oculta)", "category": "Mente & Projeção Astral", "module": "Módulo VI", "rarity": "Essencial", "pages": 439, "cover": "assets/books/o-caibalion.jpg", "tier": "basico", "desc": "Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.", "pdfUrl": "https://drive.google.com/file/d/1I99imN3fkJeBDA3ZEhHvunSxmtbZwihz/preview"}, {"id": 18, "title": "A Cabala Mistica Dion Fortune", "author": "Acervo Cúpula 33 (Tradição Oculta)", "category": "Hermetismo & Cabala", "module": "Módulo I", "rarity": "Raríssimo (Manuscrito Restaurado)", "pages": 456, "cover": "assets/books/cabala-mistica.jpg", "tier": "basico", "desc": "Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Hermetismo & Cabala com fac-símiles de alta resolução.", "pdfUrl": "https://drive.google.com/file/d/1pTz5tMM8mKvbWCSWVHwVbjgjm52R9th7/preview"}, {"id": 19, "title": "O Livro De Thoth Tarot Crowley", "author": "Acervo Cúpula 33 (Tradição Oculta)", "category": "Hermetismo & Cabala", "module": "Módulo I", "rarity": "Essencial", "pages": 473, "cover": "assets/books/três-livros-de-filosofia-oculta.jpg", "tier": "basico", "desc": "Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Hermetismo & Cabala com fac-símiles de alta resolução.", "pdfUrl": "https://drive.google.com/file/d/1XeZII4bPv56gsOfz4DWU-gm-ejE_WIWV/preview"}, {"id": 20, "title": "Lemegeton Clavicula De Salomao Goetia", "author": "Acervo Cúpula 33 (Tradição Oculta)", "category": "Grimórios & Alta Magia", "module": "Módulo II", "rarity": "Essencial", "pages": 490, "cover": "assets/books/ars-goetia.jpg", "tier": "basico", "desc": "Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Grimórios & Alta Magia com fac-símiles de alta resolução.", "pdfUrl": "https://drive.google.com/file/d/1CdyIePm7Wavk_j44Ju7YY7Yf564V8XfK/preview"}, {"id": 21, "title": "Malleus Maleficarum Martelo Das Feiticeiras", "author": "Acervo Cúpula 33 (Tradição Oculta)", "category": "Grimórios & Alta Magia", "module": "Módulo II", "rarity": "Raríssimo (Manuscrito Restaurado)", "pages": 157, "cover": "assets/books/malleus.jpg", "tier": "basico", "desc": "Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Grimórios & Alta Magia com fac-símiles de alta resolução.", "pdfUrl": "https://drive.google.com/file/d/1aPNQa-dOh2mDpRK3ufZ3s7D_N7Cj5PoK/preview"}, {"id": 22, "title": "Splendor Solis Salomon Trismosin", "author": "Acervo Cúpula 33 (Tradição Oculta)", "category": "Alquimia & Transmutação", "module": "Módulo IV", "rarity": "Essencial", "pages": 174, "cover": "assets/books/splendor-solis-5.jpg", "tier": "basico", "desc": "Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Alquimia & Transmutação com fac-símiles de alta resolução.", "pdfUrl": "https://drive.google.com/file/d/1KpA59O2X8pvLhTj5Zv6m6I6yVUGgtxUP/preview"}, {"id": 23, "title": "O Zohar Traducao Completa", "author": "Acervo Cúpula 33 (Tradição Oculta)", "category": "Hermetismo & Cabala", "module": "Módulo I", "rarity": "Essencial", "pages": 191, "cover": "assets/books/O ZOHAR.jpg", "tier": "basico", "desc": "Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Hermetismo & Cabala com fac-símiles de alta resolução.", "pdfUrl": "https://drive.google.com/file/d/1oU-Hp_IXlsHgSeFmPpRTcmrO8QMhOHzd/preview"}, {"id": 24, "title": "Sefer Yetzirah Livro Da Formacao", "author": "Acervo Cúpula 33 (Tradição Oculta)", "category": "Hermetismo & Cabala", "module": "Módulo I", "rarity": "Raríssimo (Manuscrito Restaurado)", "pages": 208, "cover": "assets/books/três-livros-de-filosofia-oculta.jpg", "tier": "basico", "desc": "Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Hermetismo & Cabala com fac-símiles de alta resolução.", "pdfUrl": "https://drive.google.com/file/d/1aa1Culkdb0g7LRhVGos8kpf_yNrm0QJd/preview"}, {"id": 25, "title": "Os Iluminados Da Baviera Adam Weishaupt", "author": "Acervo Cúpula 33 (Tradição Oculta)", "category": "Sociedades Secretas", "module": "Módulo V", "rarity": "Essencial", "pages": 225, "cover": "assets/books/o-caibalion.jpg", "tier": "basico", "desc": "Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Sociedades Secretas com fac-símiles de alta resolução.", "pdfUrl": "https://drive.google.com/file/d/13tyPFM8Rg_YphLxTeR8wxQwduXzwk3Ad/preview"}, {"id": 26, "title": "Sociedades Secretas Jan Van Helsing", "author": "Acervo Cúpula 33 (Tradição Oculta)", "category": "Sociedades Secretas", "module": "Módulo V", "rarity": "Essencial", "pages": 242, "cover": "assets/books/sociedades-secretas.webp", "tier": "basico", "desc": "Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Sociedades Secretas com fac-símiles de alta resolução.", "pdfUrl": "https://drive.google.com/file/d/1Gfru9lHqqVvIe6DDN4M30Ks5Ha45t0li/preview"}, {"id": 27, "title": "Necronomicon Al Azif Abdul Alhazred", "author": "Acervo Cúpula 33 (Tradição Oculta)", "category": "Mente & Projeção Astral", "module": "Módulo VI", "rarity": "Raríssimo (Manuscrito Restaurado)", "pages": 259, "cover": "assets/books/o-caibalion.jpg", "tier": "basico", "desc": "Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.", "pdfUrl": "https://drive.google.com/file/d/1kdMXTZFoVbZY9FJWbO0KwjfrxGN11emB/preview"}, {"id": 28, "title": "Anos Grande Oriente Lusitano", "author": "Acervo Cúpula 33 (Tradição Oculta)", "category": "Mente & Projeção Astral", "module": "Módulo VI", "rarity": "Essencial", "pages": 276, "cover": "assets/books/grandegrimorio.jpg", "tier": "basico", "desc": "Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.", "pdfUrl": "https://drive.google.com/file/d/1MEhFbWPi1HuYxr510truROUn4d-4XhjY/preview"}, {"id": 29, "title": "O Grande Grimorio Do Papa Honorio", "author": "Acervo Cúpula 33 (Tradição Oculta)", "category": "Grimórios & Alta Magia", "module": "Módulo II", "rarity": "Essencial", "pages": 293, "cover": "assets/books/grimorio-sao-cipriano.jpg", "tier": "basico", "desc": "Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Grimórios & Alta Magia com fac-símiles de alta resolução.", "pdfUrl": "https://drive.google.com/file/d/1bzW69ngxfJ1qVgeXOOC9TgLSQxck3xhg/preview"}, {"id": 30, "title": "Alquimia Significado E Imagem Titus Burckhardt", "author": "Acervo Cúpula 33 (Tradição Oculta)", "category": "Alquimia & Transmutação", "module": "Módulo IV", "rarity": "Raríssimo (Manuscrito Restaurado)", "pages": 310, "cover": "assets/books/AlquimiaTitus.jpg", "tier": "basico", "desc": "Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Alquimia & Transmutação com fac-símiles de alta resolução.", "pdfUrl": "https://drive.google.com/file/d/1iqCQJqp1Sic6xHV-rf_K5E5Ry84hLBoi/preview"}, {"id": 31, "title": "Atalanta Fugiens Michael Maier", "author": "Acervo Cúpula 33 (Tradição Oculta)", "category": "Alquimia & Transmutação", "module": "Módulo IV", "rarity": "Essencial", "pages": 327, "cover": "assets/books/atalanta.jpg", "tier": "basico", "desc": "Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Alquimia & Transmutação com fac-símiles de alta resolução.", "pdfUrl": "https://drive.google.com/file/d/1p9LcQgJ9nPCEyUNEEUu9zzpuP9vBK-Uy/preview"}, {"id": 32, "title": "Codex Nasaraeus Texto Gnostico", "author": "Acervo Cúpula 33 (Tradição Oculta)", "category": "Gnosticismo & Apócrifos", "module": "Módulo III", "rarity": "Essencial", "pages": 344, "cover": "assets/books/codexnasareus.png", "tier": "basico", "desc": "Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Gnosticismo & Apócrifos com fac-símiles de alta resolução.", "pdfUrl": "https://drive.google.com/file/d/1EWYAM_hLJVfTLeMER9X7mYEjZ4NwnB2Y/preview"}, {"id": 33, "title": "Liber Null E Psiconauta Peter Carroll", "author": "Acervo Cúpula 33 (Tradição Oculta)", "category": "Mente & Projeção Astral", "module": "Módulo VI", "rarity": "Raríssimo (Manuscrito Restaurado)", "pages": 361, "cover": "assets/books/liber.png", "tier": "basico", "desc": "Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.", "pdfUrl": "https://drive.google.com/file/d/1QFKleg2cTD0DvcztBfwprrF_-uk620By/preview"}, {"id": 34, "title": "A Tradicao Hermetica Julius Evola", "author": "Acervo Cúpula 33 (Tradição Oculta)", "category": "Hermetismo & Cabala", "module": "Módulo I", "rarity": "Essencial", "pages": 378, "cover": "assets/books/tradicao-hermetica.jpeg", "tier": "basico", "desc": "Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Hermetismo & Cabala com fac-símiles de alta resolução.", "pdfUrl": "https://drive.google.com/file/d/11TdLdftudSYyAHjBhNZxJOBmxG4oqE0k/preview"}, {"id": 35, "title": "A Verdadeira Historia Do Clube Bilderberg Estulin", "author": "Acervo Cúpula 33 (Tradição Oculta)", "category": "Sociedades Secretas", "module": "Módulo V", "rarity": "Essencial", "pages": 395, "cover": "assets/books/clube-bilderberg.jpeg", "tier": "basico", "desc": "Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Sociedades Secretas com fac-símiles de alta resolução.", "pdfUrl": "https://drive.google.com/file/d/1OFdY2ky3kxG3W9YPo1n7IV4WIcsbmUsK/preview"}, {"id": 36, "title": "Sociedade Thule E Ocultismo", "author": "Acervo Cúpula 33 (Tradição Oculta)", "category": "Sociedades Secretas", "module": "Módulo V", "rarity": "Raríssimo (Manuscrito Restaurado)", "pages": 412, "cover": "assets/books/sociedades-secretas.webp", "tier": "basico", "desc": "Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Sociedades Secretas com fac-símiles de alta resolução.", "pdfUrl": "https://drive.google.com/file/d/1dR2MKSCktaI_QI77LkLq0rIf_uWQFyoU/preview"}, {"id": 37, "title": "Passaporte Para Magonia Jacques Vallee", "author": "Acervo Cúpula 33 (Tradição Oculta)", "category": "Mente & Projeção Astral", "module": "Módulo VI", "rarity": "Essencial", "pages": 429, "cover": "assets/books/magonia.jpg", "tier": "basico", "desc": "Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.", "pdfUrl": "https://drive.google.com/file/d/1jknr9Y94RuLyyC0s3fxjf6_S5L3wLzx_/preview"}, {"id": 38, "title": "Sonhos Lucidos Stephen Laberge", "author": "Acervo Cúpula 33 (Tradição Oculta)", "category": "Mente & Projeção Astral", "module": "Módulo VI", "rarity": "Essencial", "pages": 446, "cover": "assets/books/sonhos-lucidos.png", "tier": "basico", "desc": "Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.", "pdfUrl": "https://drive.google.com/file/d/1cSyiKIwvo58u6c1iNRuTX-1qFAoMbsoO/preview"}, {"id": 39, "title": "A Acao Secreta Da Maconaria", "author": "Acervo Cúpula 33 (Tradição Oculta)", "category": "Sociedades Secretas", "module": "Módulo V", "rarity": "Raríssimo (Manuscrito Restaurado)", "pages": 463, "cover": "assets/books/acao-secreta-maconaria.jpeg", "tier": "basico", "desc": "Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Sociedades Secretas com fac-símiles de alta resolução.", "pdfUrl": "https://drive.google.com/file/d/1OSl7gGNT16NpmJMaAtteiOZ14xU4_L44/preview"}, {"id": 40, "title": "Os Ensinamentos Secretos Manly Hall", "author": "Acervo Cúpula 33 (Tradição Oculta)", "category": "Mente & Projeção Astral", "module": "Módulo VI", "rarity": "Essencial", "pages": 480, "cover": "assets/books/33_Os_Ensinamentos_Secretos_Manly_Hall.pdf.png", "tier": "basico", "desc": "Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.", "pdfUrl": "https://drive.google.com/file/d/1Y9ux3q7lGRFS-9UeJC7lm1oNoehdurO2/preview"}, {"id": 41, "title": "O Despertar Dos Magos Pauwels Bergier", "author": "Acervo Cúpula 33 (Tradição Oculta)", "category": "Mente & Projeção Astral", "module": "Módulo VI", "rarity": "Essencial", "pages": 497, "cover": "assets/books/o-caibalion.jpg", "tier": "basico", "desc": "Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.", "pdfUrl": "https://drive.google.com/file/d/1AuJqCAnng3NoxYaahDFLGAY_KVRkUnu4/preview"}, {"id": 42, "title": "Tratado De Magia Oculta Williams Scott", "author": "Acervo Cúpula 33 (Tradição Oculta)", "category": "Grimórios & Alta Magia", "module": "Módulo II", "rarity": "Raríssimo (Manuscrito Restaurado)", "pages": 164, "cover": "assets/books/três-livros-de-filosofia-oculta.jpg", "tier": "basico", "desc": "Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Grimórios & Alta Magia com fac-símiles de alta resolução.", "pdfUrl": "https://drive.google.com/file/d/1-ZRFg6gkmNYRJECDJOuSuVaYVWroFS9c/preview"}, {"id": 43, "title": "O Livro Negro De Sao Cipriano Lopes", "author": "Acervo Cúpula 33 (Tradição Oculta)", "category": "Grimórios & Alta Magia", "module": "Módulo II", "rarity": "Essencial", "pages": 181, "cover": "assets/books/três-livros-de-filosofia-oculta.jpg", "tier": "basico", "desc": "Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Grimórios & Alta Magia com fac-símiles de alta resolução.", "pdfUrl": "https://drive.google.com/file/d/1iQ67Pb_89or0_Ttc0E6ulit037ElK__o/preview"}, {"id": 44, "title": "Os Arquetipos E O Inconsciente Coletivo Jung", "author": "Acervo Cúpula 33 (Tradição Oculta)", "category": "Mente & Projeção Astral", "module": "Módulo VI", "rarity": "Essencial", "pages": 198, "cover": "assets/books/o-caibalion.jpg", "tier": "basico", "desc": "Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.", "pdfUrl": "https://drive.google.com/file/d/1Ut8XDsgOIW6BvC2DsCQ1GOuBkVt2MSuU/preview"}, {"id": 45, "title": "O Livro Dos Espiritos Allan Kardec", "author": "Acervo Cúpula 33 (Tradição Oculta)", "category": "Mente & Projeção Astral", "module": "Módulo VI", "rarity": "Raríssimo (Manuscrito Restaurado)", "pages": 215, "cover": "assets/books/três-livros-de-filosofia-oculta.jpg", "tier": "basico", "desc": "Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.", "pdfUrl": "https://drive.google.com/file/d/1NztjNXLvTEcfQivBC0xyhM6RzbO2qh27/preview"}, {"id": 46, "title": "O Livro Dos Mediuns Allan Kardec", "author": "Acervo Cúpula 33 (Tradição Oculta)", "category": "Mente & Projeção Astral", "module": "Módulo VI", "rarity": "Essencial", "pages": 232, "cover": "assets/books/três-livros-de-filosofia-oculta.jpg", "tier": "basico", "desc": "Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.", "pdfUrl": "https://drive.google.com/file/d/1bHCkW7lUfW-dmP3zpC768Yd-tljIaygC/preview"}, {"id": 47, "title": "O Ceu E O Inferno Allan Kardec", "author": "Acervo Cúpula 33 (Tradição Oculta)", "category": "Mente & Projeção Astral", "module": "Módulo VI", "rarity": "Essencial", "pages": 249, "cover": "assets/books/o-caibalion.jpg", "tier": "basico", "desc": "Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.", "pdfUrl": "https://drive.google.com/file/d/1XyAaI9eGGXXzXfefdIs_3BSjn0Y_wEh6/preview"}, {"id": 48, "title": "Tratado Elementar De Ciencia Oculta Papus", "author": "Acervo Cúpula 33 (Tradição Oculta)", "category": "Mente & Projeção Astral", "module": "Módulo VI", "rarity": "Raríssimo (Manuscrito Restaurado)", "pages": 266, "cover": "assets/books/três-livros-de-filosofia-oculta.jpg", "tier": "basico", "desc": "Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.", "pdfUrl": "https://drive.google.com/file/d/1ba9TG1dHlIRa_6jmWGqbNiWodLj9XSmJ/preview"}, {"id": 49, "title": "O Evangelho Segundo O Espiritismo Kardec", "author": "Acervo Cúpula 33 (Tradição Oculta)", "category": "Mente & Projeção Astral", "module": "Módulo VI", "rarity": "Essencial", "pages": 283, "cover": "assets/books/evangelho-de-tome.jpg", "tier": "basico", "desc": "Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.", "pdfUrl": "https://drive.google.com/file/d/1Fx0g520Dr66clpcFepEut3G6iLxEU-7f/preview"}, {"id": 50, "title": "O Que E O Espiritismo Kardec", "author": "Acervo Cúpula 33 (Tradição Oculta)", "category": "Mente & Projeção Astral", "module": "Módulo VI", "rarity": "Essencial", "pages": 300, "cover": "assets/books/o-caibalion.jpg", "tier": "basico", "desc": "Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.", "pdfUrl": "https://drive.google.com/file/d/18FcHd7AXI2V-kFlfFqav1eI7TdQC6S-2/preview"}, {"id": 51, "title": "Curso De Filosofia Oculta Eliphas Levi", "author": "Acervo Cúpula 33 (Tradição Oculta)", "category": "Grimórios & Alta Magia", "module": "Módulo II", "rarity": "Raríssimo (Manuscrito Restaurado)", "pages": 317, "cover": "assets/books/três-livros-de-filosofia-oculta.jpg", "tier": "basico", "desc": "Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Grimórios & Alta Magia com fac-símiles de alta resolução.", "pdfUrl": "https://drive.google.com/file/d/1jFf0BA36UlslSbj1vLV3rBALz_NzpKg_/preview"}, {"id": 52, "title": "Historia Da Magia Eliphas Levi", "author": "Acervo Cúpula 33 (Tradição Oculta)", "category": "Grimórios & Alta Magia", "module": "Módulo II", "rarity": "Essencial", "pages": 334, "cover": "assets/books/dogma-e-ritual-alta-magia.jpg", "tier": "basico", "desc": "Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Grimórios & Alta Magia com fac-símiles de alta resolução.", "pdfUrl": "https://drive.google.com/file/d/1ZcJnjtDGHvPxS6PqfX9LgpsxBniRkFEX/preview"}, {"id": 53, "title": "O Simbolismo Da Cruz Rene Guenon", "author": "Acervo Cúpula 33 (Tradição Oculta)", "category": "Hermetismo & Cabala", "module": "Módulo I", "rarity": "Essencial", "pages": 351, "cover": "assets/books/o-caibalion.jpg", "tier": "basico", "desc": "Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Hermetismo & Cabala com fac-símiles de alta resolução.", "pdfUrl": "https://drive.google.com/file/d/1pHFqwroPg28f9gVS3Oae44-FhId_KG3N/preview"}, {"id": 54, "title": "A Ciencia Cabalistica Lenain", "author": "Acervo Cúpula 33 (Tradição Oculta)", "category": "Mente & Projeção Astral", "module": "Módulo VI", "rarity": "Raríssimo (Manuscrito Restaurado)", "pages": 368, "cover": "assets/books/o-caibalion.jpg", "tier": "basico", "desc": "Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.", "pdfUrl": "https://drive.google.com/file/d/1u0h1GxM8wsSwHJ2QiI8cZZwd4xo5Zy_a/preview"}, {"id": 55, "title": "A Chave Dos Grandes Misterios Eliphas Le", "author": "Acervo Cúpula 33 (Tradição Oculta)", "category": "Mente & Projeção Astral", "module": "Módulo VI", "rarity": "Essencial", "pages": 385, "cover": "assets/books/o-caibalion.jpg", "tier": "basico", "desc": "Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.", "pdfUrl": "https://drive.google.com/file/d/1_fecAjOkQW9CmspYEh7U0qkkuBIN-IzK/preview"}, {"id": 56, "title": "A Clavicula Do Rei Salomao Tratado Completo", "author": "Acervo Cúpula 33 (Tradição Oculta)", "category": "Grimórios & Alta Magia", "module": "Módulo II", "rarity": "Essencial", "pages": 402, "cover": "assets/books/clavicula-de-salomao.jpg", "tier": "basico", "desc": "Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Grimórios & Alta Magia com fac-símiles de alta resolução.", "pdfUrl": "https://drive.google.com/file/d/1LQ22V6yXr3clZ4EujjucGkBTBNZKPguL/preview"}, {"id": 57, "title": "A Energia Dos Raios", "author": "Acervo Cúpula 33 (Tradição Oculta)", "category": "Mente & Projeção Astral", "module": "Módulo VI", "rarity": "Raríssimo (Manuscrito Restaurado)", "pages": 419, "cover": "assets/books/o-caibalion.jpg", "tier": "basico", "desc": "Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.", "pdfUrl": "https://drive.google.com/file/d/1iuWnG6sWEVHbXJcyyJIgfcDGx2NOrkjV/preview"}, {"id": 58, "title": "A Hipostase Dos Arcontes", "author": "Acervo Cúpula 33 (Tradição Oculta)", "category": "Gnosticismo & Apócrifos", "module": "Módulo III", "rarity": "Essencial", "pages": 436, "cover": "assets/books/o-caibalion.jpg", "tier": "basico", "desc": "Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Gnosticismo & Apócrifos com fac-símiles de alta resolução.", "pdfUrl": "https://drive.google.com/file/d/1qrikteZFFwhgFjd8wTOlbmo0EWnPvlRe/preview"}, {"id": 59, "title": "A Historical Survey Of Proposals To Transfer Arabs From Pale", "author": "Acervo Cúpula 33 (Tradição Oculta)", "category": "Mente & Projeção Astral", "module": "Módulo VI", "rarity": "Essencial", "pages": 453, "cover": "assets/books/o-caibalion.jpg", "tier": "basico", "desc": "Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.", "pdfUrl": "https://drive.google.com/file/d/1IcvPqVogOmq6Gn0_ehKzaVAHwvde9VxL/preview"}, {"id": 60, "title": "A Juggernaut Of The Non Dual View Ultimate Teachings Of The", "author": "Acervo Cúpula 33 (Tradição Oculta)", "category": "Mente & Projeção Astral", "module": "Módulo VI", "rarity": "Raríssimo (Manuscrito Restaurado)", "pages": 470, "cover": "assets/books/o-caibalion.jpg", "tier": "basico", "desc": "Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.", "pdfUrl": "https://drive.google.com/file/d/12-Olfn0cWWrKh5dhwVD3H5cEc0YHMvKB/preview"}, {"id": 61, "title": "A Magia No Brasil", "author": "Acervo Cúpula 33 (Tradição Oculta)", "category": "Grimórios & Alta Magia", "module": "Módulo II", "rarity": "Essencial", "pages": 487, "cover": "assets/books/dogma-e-ritual-alta-magia.jpg", "tier": "master", "desc": "Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Grimórios & Alta Magia com fac-símiles de alta resolução.", "pdfUrl": "https://drive.google.com/file/d/13bQr-N_Es6Xvcfa5e-qLL1gC_Sc6s87m/preview"}, {"id": 62, "title": "A Magia Sagrada De Abramelin O Mago", "author": "Acervo Cúpula 33 (Tradição Oculta)", "category": "Grimórios & Alta Magia", "module": "Módulo II", "rarity": "Essencial", "pages": 154, "cover": "assets/books/dogma-e-ritual-alta-magia.jpg", "tier": "master", "desc": "Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Grimórios & Alta Magia com fac-símiles de alta resolução.", "pdfUrl": "https://drive.google.com/file/d/1FMTkl0NofpXKxfbJwywCy1_WuOicgL8j/preview"}, {"id": 63, "title": "A Revelacao Dos Templarios   Lynn Picknett E Clive Prin", "author": "Acervo Cúpula 33 (Tradição Oculta)", "category": "Mente & Projeção Astral", "module": "Módulo VI", "rarity": "Raríssimo (Manuscrito Restaurado)", "pages": 171, "cover": "assets/books/o-caibalion.jpg", "tier": "master", "desc": "Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.", "pdfUrl": "https://drive.google.com/file/d/17nUt5rBpm0SmKBo8lAotyHMbvNBwRgM9/preview"}, {"id": 64, "title": "A Teologia Mistica Como Linguagem Do Sagrado", "author": "Acervo Cúpula 33 (Tradição Oculta)", "category": "Mente & Projeção Astral", "module": "Módulo VI", "rarity": "Essencial", "pages": 188, "cover": "assets/books/cabala-mistica.jpg", "tier": "master", "desc": "Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.", "pdfUrl": "https://drive.google.com/file/d/1TYQfeYuXkzCK90Jy7FW7CFa0nB3lDsBg/preview"}, {"id": 65, "title": "A Cabala E A Arte De Ser Feliz  Sete Práticas Para Ilum", "author": "Acervo Cúpula 33 (Tradição Oculta)", "category": "Hermetismo & Cabala", "module": "Módulo I", "rarity": "Essencial", "pages": 205, "cover": "assets/books/cabala-mistica.jpg", "tier": "master", "desc": "Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Hermetismo & Cabala com fac-símiles de alta resolução.", "pdfUrl": "https://drive.google.com/file/d/1FvIOz76iDG983Nl_NpXcPp5q8aWT_bcT/preview"}, {"id": 66, "title": "A Cabala E A Arte De Ser Feliz  Sete Práticas Para Iluminar", "author": "Acervo Cúpula 33 (Tradição Oculta)", "category": "Hermetismo & Cabala", "module": "Módulo I", "rarity": "Raríssimo (Manuscrito Restaurado)", "pages": 222, "cover": "assets/books/cabala-mistica.jpg", "tier": "master", "desc": "Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Hermetismo & Cabala com fac-símiles de alta resolução.", "pdfUrl": "https://drive.google.com/file/d/1FvIOz76iDG983Nl_NpXcPp5q8aWT_bcT/preview"}, {"id": 67, "title": "A Maçonaria E Os Jesuitas Instrucção Pastoral Do Bispo De Ol", "author": "Acervo Cúpula 33 (Tradição Oculta)", "category": "Sociedades Secretas", "module": "Módulo V", "rarity": "Essencial", "pages": 239, "cover": "assets/books/o-caibalion.jpg", "tier": "master", "desc": "Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Sociedades Secretas com fac-símiles de alta resolução.", "pdfUrl": "https://drive.google.com/file/d/11JT5mPm5KymtSfY7LwNhiRZwsocU3j3P/preview"}, {"id": 68, "title": "Aforismos E Rimas Selecionados De O Peregrino Querubíni", "author": "Acervo Cúpula 33 (Tradição Oculta)", "category": "Mente & Projeção Astral", "module": "Módulo VI", "rarity": "Essencial", "pages": 256, "cover": "assets/books/o-caibalion.jpg", "tier": "master", "desc": "Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.", "pdfUrl": "https://drive.google.com/file/d/11YVNdE2qMxhYBe8cV8apneyyb5xc6iSW/preview"}, {"id": 69, "title": "Alquimia", "author": "Acervo Cúpula 33 (Tradição Oculta)", "category": "Alquimia & Transmutação", "module": "Módulo IV", "rarity": "Raríssimo (Manuscrito Restaurado)", "pages": 273, "cover": "assets/books/AlquimiaTitus.jpg", "tier": "master", "desc": "Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Alquimia & Transmutação com fac-símiles de alta resolução.", "pdfUrl": "https://drive.google.com/file/d/1iqCQJqp1Sic6xHV-rf_K5E5Ry84hLBoi/preview"}, {"id": 70, "title": "Alta Magia Branca Tomo I", "author": "Acervo Cúpula 33 (Tradição Oculta)", "category": "Grimórios & Alta Magia", "module": "Módulo II", "rarity": "Essencial", "pages": 290, "cover": "assets/books/dogma-e-ritual-alta-magia.jpg", "tier": "master", "desc": "Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Grimórios & Alta Magia com fac-símiles de alta resolução.", "pdfUrl": "https://drive.google.com/file/d/1YsMNMUOgFp3xowh9o5E8TIGaie_VytPK/preview"}, {"id": 71, "title": "Apocrifo Livro Secreto De Joao", "author": "Acervo Cúpula 33 (Tradição Oculta)", "category": "Gnosticismo & Apócrifos", "module": "Módulo III", "rarity": "Essencial", "pages": 307, "cover": "assets/books/três-livros-de-filosofia-oculta.jpg", "tier": "master", "desc": "Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Gnosticismo & Apócrifos com fac-símiles de alta resolução.", "pdfUrl": "https://drive.google.com/file/d/1wjFi5yqnZgQOobD5BomoquwsxBOtDyIQ/preview"}, {"id": 72, "title": "As Amantes Do Imperador", "author": "Acervo Cúpula 33 (Tradição Oculta)", "category": "Mente & Projeção Astral", "module": "Módulo VI", "rarity": "Raríssimo (Manuscrito Restaurado)", "pages": 324, "cover": "assets/books/o-caibalion.jpg", "tier": "master", "desc": "Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.", "pdfUrl": "https://drive.google.com/file/d/1lflwmZt5fNBoNWfxpaLWq_vWjDHRV9lM/preview"}, {"id": 73, "title": "As Mansoes Secretas Da Rosacruz", "author": "Acervo Cúpula 33 (Tradição Oculta)", "category": "Sociedades Secretas", "module": "Módulo V", "rarity": "Essencial", "pages": 341, "cover": "assets/books/sociedades-secretas.webp", "tier": "master", "desc": "Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Sociedades Secretas com fac-símiles de alta resolução.", "pdfUrl": "https://drive.google.com/file/d/1wyzE9_0TNhtwpWDzZs_ihsIbvr8LbHwI/preview"}, {"id": 74, "title": "As Vidas De Chico Xavier", "author": "Acervo Cúpula 33 (Tradição Oculta)", "category": "Mente & Projeção Astral", "module": "Módulo VI", "rarity": "Essencial", "pages": 358, "cover": "assets/books/o-caibalion.jpg", "tier": "master", "desc": "Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.", "pdfUrl": "https://drive.google.com/file/d/1K1Qw-abSi-pty16hwn4NcjeWEi6NNmbx/preview"}, {"id": 75, "title": "Bairro De Sta Catharina Beco Dos Carrascos Manuscrito C", "author": "Acervo Cúpula 33 (Tradição Oculta)", "category": "Mente & Projeção Astral", "module": "Módulo VI", "rarity": "Raríssimo (Manuscrito Restaurado)", "pages": 375, "cover": "assets/books/manuscritos-nag-hammadi.jpg", "tier": "master", "desc": "Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.", "pdfUrl": "https://drive.google.com/file/d/1QtbIroXODnDiPF5bl1RJoR15wMNPy0wk/preview"}, {"id": 76, "title": "Bairro De Sta Catharina Beco Dos Carrascos Manuscrito Cod 87", "author": "Acervo Cúpula 33 (Tradição Oculta)", "category": "Mente & Projeção Astral", "module": "Módulo VI", "rarity": "Essencial", "pages": 392, "cover": "assets/books/manuscritos-nag-hammadi.jpg", "tier": "master", "desc": "Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.", "pdfUrl": "https://drive.google.com/file/d/1QtbIroXODnDiPF5bl1RJoR15wMNPy0wk/preview"}, {"id": 77, "title": "Boa Nova", "author": "Acervo Cúpula 33 (Tradição Oculta)", "category": "Mente & Projeção Astral", "module": "Módulo VI", "rarity": "Essencial", "pages": 409, "cover": "assets/books/o-caibalion.jpg", "tier": "master", "desc": "Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.", "pdfUrl": "https://drive.google.com/file/d/18ueYYxPpRbDjJFPZCGHsiWgF9So2Wbyx/preview"}, {"id": 78, "title": "Boletim Do Desseak   N Ro 2 Okt Nov1984", "author": "Acervo Cúpula 33 (Tradição Oculta)", "category": "Mente & Projeção Astral", "module": "Módulo VI", "rarity": "Raríssimo (Manuscrito Restaurado)", "pages": 426, "cover": "assets/books/o-caibalion.jpg", "tier": "master", "desc": "Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.", "pdfUrl": "https://drive.google.com/file/d/1YZ3cNdybzC3Dmkm1cop7Mi-u_3oxSJyL/preview"}, {"id": 79, "title": "Cabala A", "author": "Acervo Cúpula 33 (Tradição Oculta)", "category": "Hermetismo & Cabala", "module": "Módulo I", "rarity": "Essencial", "pages": 443, "cover": "assets/books/cabala-mistica.jpg", "tier": "master", "desc": "Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Hermetismo & Cabala com fac-símiles de alta resolução.", "pdfUrl": "https://drive.google.com/file/d/1hRzEveeGfSFaQH9HpJH6ctl3KfdA_2CQ/preview"}, {"id": 80, "title": "Cabala Comentários De Um Pedreiro Sobre A Torá Shemot Ê", "author": "Acervo Cúpula 33 (Tradição Oculta)", "category": "Hermetismo & Cabala", "module": "Módulo I", "rarity": "Essencial", "pages": 460, "cover": "assets/books/cabala-mistica.jpg", "tier": "master", "desc": "Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Hermetismo & Cabala com fac-símiles de alta resolução.", "pdfUrl": "https://drive.google.com/file/d/1C05ZzluaL50Vk5mY-YpA8lo2hJj-op4H/preview"}, {"id": 81, "title": "Cabala Comentários De Um Pedreiro Sobre A Torá Shemot Êxodo", "author": "Acervo Cúpula 33 (Tradição Oculta)", "category": "Hermetismo & Cabala", "module": "Módulo I", "rarity": "Raríssimo (Manuscrito Restaurado)", "pages": 477, "cover": "assets/books/cabala-mistica.jpg", "tier": "master", "desc": "Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Hermetismo & Cabala com fac-símiles de alta resolução.", "pdfUrl": "https://drive.google.com/file/d/1C05ZzluaL50Vk5mY-YpA8lo2hJj-op4H/preview"}, {"id": 82, "title": "Cabala Genética", "author": "Acervo Cúpula 33 (Tradição Oculta)", "category": "Hermetismo & Cabala", "module": "Módulo I", "rarity": "Essencial", "pages": 494, "cover": "assets/books/cabala-mistica.jpg", "tier": "master", "desc": "Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Hermetismo & Cabala com fac-símiles de alta resolução.", "pdfUrl": "https://drive.google.com/file/d/1XddB8Efj4Qs-J597W5sCS9Kq5PvLk1Nj/preview"}, {"id": 83, "title": "Cardeal Rampolla Por Que O Padre Ricossa Busca Hoje Rea", "author": "Acervo Cúpula 33 (Tradição Oculta)", "category": "Mente & Projeção Astral", "module": "Módulo VI", "rarity": "Essencial", "pages": 161, "cover": "assets/books/o-caibalion.jpg", "tier": "master", "desc": "Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.", "pdfUrl": "https://drive.google.com/file/d/1W8fTvz_gsvVAgNU70AyQnffVdsVKOzmi/preview"}, {"id": 84, "title": "Cardeal Rampolla Por Que O Padre Ricossa Busca Hoje Reabilit", "author": "Acervo Cúpula 33 (Tradição Oculta)", "category": "Mente & Projeção Astral", "module": "Módulo VI", "rarity": "Raríssimo (Manuscrito Restaurado)", "pages": 178, "cover": "assets/books/o-caibalion.jpg", "tier": "master", "desc": "Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.", "pdfUrl": "https://drive.google.com/file/d/1W8fTvz_gsvVAgNU70AyQnffVdsVKOzmi/preview"}, {"id": 85, "title": "Carta Do Passageiro Do Abismo Versão Ritual   Adriano B", "author": "Acervo Cúpula 33 (Tradição Oculta)", "category": "Mente & Projeção Astral", "module": "Módulo VI", "rarity": "Essencial", "pages": 195, "cover": "assets/books/dogma-e-ritual-alta-magia.jpg", "tier": "master", "desc": "Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.", "pdfUrl": "https://drive.google.com/file/d/1CdyIePm7Wavk_j44Ju7YY7Yf564V8XfK/preview"}, {"id": 86, "title": "Conquista Antiguidade E Nobreza Da Mui Insigne E Inclit", "author": "Acervo Cúpula 33 (Tradição Oculta)", "category": "Mente & Projeção Astral", "module": "Módulo VI", "rarity": "Essencial", "pages": 212, "cover": "assets/books/o-caibalion.jpg", "tier": "master", "desc": "Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.", "pdfUrl": "https://drive.google.com/file/d/1DHRgGiD7_z-zaTMYfpbYK8I-nXHo-BWq/preview"}, {"id": 87, "title": "Conquista Antiguidade E Nobreza Da Mui Insigne E Inclita Cid", "author": "Acervo Cúpula 33 (Tradição Oculta)", "category": "Mente & Projeção Astral", "module": "Módulo VI", "rarity": "Raríssimo (Manuscrito Restaurado)", "pages": 229, "cover": "assets/books/o-caibalion.jpg", "tier": "master", "desc": "Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.", "pdfUrl": "https://drive.google.com/file/d/1DHRgGiD7_z-zaTMYfpbYK8I-nXHo-BWq/preview"}, {"id": 88, "title": "Consagracao Geral Oleo Santo", "author": "Acervo Cúpula 33 (Tradição Oculta)", "category": "Mente & Projeção Astral", "module": "Módulo VI", "rarity": "Essencial", "pages": 246, "cover": "assets/books/o-caibalion.jpg", "tier": "master", "desc": "Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.", "pdfUrl": "https://drive.google.com/file/d/1d3W_6LwohJ9tvAoPKCW-zpEzSz6xAdtV/preview"}, {"id": 89, "title": "Corpos Gênero Sexualidades E Raça No Esporte Na África A Crí", "author": "Acervo Cúpula 33 (Tradição Oculta)", "category": "Mente & Projeção Astral", "module": "Módulo VI", "rarity": "Essencial", "pages": 263, "cover": "assets/books/o-caibalion.jpg", "tier": "master", "desc": "Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.", "pdfUrl": "https://drive.google.com/file/d/1FN9xhONv7vTPYA1UzL7dkplpVi-WbkO5/preview"}, {"id": 90, "title": "Cronologia Do Espiritismo", "author": "Acervo Cúpula 33 (Tradição Oculta)", "category": "Mente & Projeção Astral", "module": "Módulo VI", "rarity": "Raríssimo (Manuscrito Restaurado)", "pages": 280, "cover": "assets/books/o-caibalion.jpg", "tier": "master", "desc": "Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.", "pdfUrl": "https://drive.google.com/file/d/1knX1BCNciaSF0TMr0AsgRS9puHKUPozn/preview"}, {"id": 91, "title": "Da Alquimia A Quimica  Um Estudo Sobre A Passagem Do Pe", "author": "Acervo Cúpula 33 (Tradição Oculta)", "category": "Alquimia & Transmutação", "module": "Módulo IV", "rarity": "Essencial", "pages": 297, "cover": "assets/books/AlquimiaTitus.jpg", "tier": "master", "desc": "Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Alquimia & Transmutação com fac-símiles de alta resolução.", "pdfUrl": "https://drive.google.com/file/d/1iqCQJqp1Sic6xHV-rf_K5E5Ry84hLBoi/preview"}, {"id": 92, "title": "Da Alquimia A Quimica  Um Estudo Sobre A Passagem Do Pensame", "author": "Acervo Cúpula 33 (Tradição Oculta)", "category": "Alquimia & Transmutação", "module": "Módulo IV", "rarity": "Essencial", "pages": 314, "cover": "assets/books/AlquimiaTitus.jpg", "tier": "master", "desc": "Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Alquimia & Transmutação com fac-símiles de alta resolução.", "pdfUrl": "https://drive.google.com/file/d/1iqCQJqp1Sic6xHV-rf_K5E5Ry84hLBoi/preview"}, {"id": 93, "title": "Dialogo Do Salvador Apocrifo", "author": "Acervo Cúpula 33 (Tradição Oculta)", "category": "Gnosticismo & Apócrifos", "module": "Módulo III", "rarity": "Raríssimo (Manuscrito Restaurado)", "pages": 331, "cover": "assets/books/o-caibalion.jpg", "tier": "master", "desc": "Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Gnosticismo & Apócrifos com fac-símiles de alta resolução.", "pdfUrl": "https://drive.google.com/file/d/1vJp1S5ZKTNfupXRc_yDjm3ruFKNq37v0/preview"}, {"id": 94, "title": "Diluculum", "author": "Acervo Cúpula 33 (Tradição Oculta)", "category": "Mente & Projeção Astral", "module": "Módulo VI", "rarity": "Essencial", "pages": 348, "cover": "assets/books/o-caibalion.jpg", "tier": "master", "desc": "Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.", "pdfUrl": "https://drive.google.com/file/d/1Bd6u4z_yI6WLp9DjDHmKZjTZo1pBng6t/preview"}, {"id": 95, "title": "Diálogos Horizontais Entre Ciência E Esoterismo Na Psic", "author": "Acervo Cúpula 33 (Tradição Oculta)", "category": "Mente & Projeção Astral", "module": "Módulo VI", "rarity": "Essencial", "pages": 365, "cover": "assets/books/o-caibalion.jpg", "tier": "master", "desc": "Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.", "pdfUrl": "https://drive.google.com/file/d/1xxWGWb7uwR5aScftPQJiIp-Aj0NM4lGR/preview"}, {"id": 96, "title": "Doutrina Secreta Da Umbanda", "author": "Acervo Cúpula 33 (Tradição Oculta)", "category": "Sociedades Secretas", "module": "Módulo V", "rarity": "Raríssimo (Manuscrito Restaurado)", "pages": 382, "cover": "assets/books/acao-secreta-maconaria.jpeg", "tier": "master", "desc": "Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Sociedades Secretas com fac-símiles de alta resolução.", "pdfUrl": "https://drive.google.com/file/d/15rpWK7jxmrnrTWb9K5X2UDVsWYz0fJnl/preview"}, {"id": 97, "title": "E Pdf Atual Tirinhas Dietéticas Com Caderno De Exercíci", "author": "Acervo Cúpula 33 (Tradição Oculta)", "category": "Mente & Projeção Astral", "module": "Módulo VI", "rarity": "Essencial", "pages": 399, "cover": "assets/books/o-caibalion.jpg", "tier": "master", "desc": "Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.", "pdfUrl": "https://drive.google.com/file/d/1BIRKD3pqcwW5e391HqaOsCATaSQg8itv/preview"}, {"id": 98, "title": "E Pdf Atual Tirinhas Dietéticas Com Caderno De Exercícios  2", "author": "Acervo Cúpula 33 (Tradição Oculta)", "category": "Mente & Projeção Astral", "module": "Módulo VI", "rarity": "Essencial", "pages": 416, "cover": "assets/books/o-caibalion.jpg", "tier": "master", "desc": "Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.", "pdfUrl": "https://drive.google.com/file/d/1BIRKD3pqcwW5e391HqaOsCATaSQg8itv/preview"}, {"id": 99, "title": "Ensaios De Teatro E Filosofia Do Renascimento Ao Século", "author": "Acervo Cúpula 33 (Tradição Oculta)", "category": "Gnosticismo & Apócrifos", "module": "Módulo III", "rarity": "Raríssimo (Manuscrito Restaurado)", "pages": 433, "cover": "assets/books/três-livros-de-filosofia-oculta.jpg", "tier": "master", "desc": "Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Gnosticismo & Apócrifos com fac-símiles de alta resolução.", "pdfUrl": "https://drive.google.com/file/d/12Z6qYm-NBf9JBApbIbYimRKIQUN7i-gZ/preview"}, {"id": 100, "title": "Ensaios De Teatro E Filosofia Do Renascimento Ao Século Xvii", "author": "Acervo Cúpula 33 (Tradição Oculta)", "category": "Gnosticismo & Apócrifos", "module": "Módulo III", "rarity": "Essencial", "pages": 450, "cover": "assets/books/três-livros-de-filosofia-oculta.jpg", "tier": "master", "desc": "Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Gnosticismo & Apócrifos com fac-símiles de alta resolução.", "pdfUrl": "https://drive.google.com/file/d/12Z6qYm-NBf9JBApbIbYimRKIQUN7i-gZ/preview"}, {"id": 101, "title": "Evangelho Da Verdade Valentinus", "author": "Acervo Cúpula 33 (Tradição Oculta)", "category": "Mente & Projeção Astral", "module": "Módulo VI", "rarity": "Essencial", "pages": 467, "cover": "assets/books/evangelho-de-tome.jpg", "tier": "master", "desc": "Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.", "pdfUrl": "https://drive.google.com/file/d/1nztqlIwypTBSyXnYcd8WdB-hQnKVrqkP/preview"}, {"id": 102, "title": "Evangelho De Filipe Nag Hammadi", "author": "Acervo Cúpula 33 (Tradição Oculta)", "category": "Gnosticismo & Apócrifos", "module": "Módulo III", "rarity": "Raríssimo (Manuscrito Restaurado)", "pages": 484, "cover": "assets/books/manuscritos-nag-hammadi.jpg", "tier": "master", "desc": "Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Gnosticismo & Apócrifos com fac-símiles de alta resolução.", "pdfUrl": "https://drive.google.com/file/d/1P38-t8lJTpfMvbesfBcPpVs_eDeb4MeZ/preview"}, {"id": 103, "title": "Evangelho De Judas Iscariotes", "author": "Acervo Cúpula 33 (Tradição Oculta)", "category": "Gnosticismo & Apócrifos", "module": "Módulo III", "rarity": "Essencial", "pages": 151, "cover": "assets/books/evangelho-de-tome.jpg", "tier": "master", "desc": "Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Gnosticismo & Apócrifos com fac-símiles de alta resolução.", "pdfUrl": "https://drive.google.com/file/d/1Rrw6NuWeYisua7L9VEYA2wAdvH06TMqr/preview"}, {"id": 104, "title": "Evangelho De Maria Madalena", "author": "Acervo Cúpula 33 (Tradição Oculta)", "category": "Gnosticismo & Apócrifos", "module": "Módulo III", "rarity": "Essencial", "pages": 168, "cover": "assets/books/evangelho-de-tome.jpg", "tier": "master", "desc": "Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Gnosticismo & Apócrifos com fac-símiles de alta resolução.", "pdfUrl": "https://drive.google.com/file/d/1xpu48YH15pGxwyCS7_T0CUEihJ7Jm_8d/preview"}, {"id": 105, "title": "Evangelho De Tome Nag Hammadi", "author": "Acervo Cúpula 33 (Tradição Oculta)", "category": "Gnosticismo & Apócrifos", "module": "Módulo III", "rarity": "Raríssimo (Manuscrito Restaurado)", "pages": 185, "cover": "assets/books/manuscritos-nag-hammadi.jpg", "tier": "master", "desc": "Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Gnosticismo & Apócrifos com fac-símiles de alta resolução.", "pdfUrl": "https://drive.google.com/file/d/1CvlZMcgzznfZUxsDsRVAlyvHrFhyCUbi/preview"}, {"id": 106, "title": "Frabato O Mago   Franz Bardon", "author": "Acervo Cúpula 33 (Tradição Oculta)", "category": "Grimórios & Alta Magia", "module": "Módulo II", "rarity": "Essencial", "pages": 202, "cover": "assets/books/magonia.jpg", "tier": "master", "desc": "Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Grimórios & Alta Magia com fac-símiles de alta resolução.", "pdfUrl": "https://drive.google.com/file/d/1AuJqCAnng3NoxYaahDFLGAY_KVRkUnu4/preview"}, {"id": 107, "title": "Francisco De Assis Bezerra De Meneses", "author": "Acervo Cúpula 33 (Tradição Oculta)", "category": "Mente & Projeção Astral", "module": "Módulo VI", "rarity": "Essencial", "pages": 219, "cover": "assets/books/o-caibalion.jpg", "tier": "master", "desc": "Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.", "pdfUrl": "https://drive.google.com/file/d/171lA-seXqnlch4_XYp3Dknadt6TXk14U/preview"}, {"id": 108, "title": "Fundamentos Do Misticismo Tibetano Lama Anagarika Govin", "author": "Acervo Cúpula 33 (Tradição Oculta)", "category": "Mente & Projeção Astral", "module": "Módulo VI", "rarity": "Raríssimo (Manuscrito Restaurado)", "pages": 236, "cover": "assets/books/o-caibalion.jpg", "tier": "master", "desc": "Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.", "pdfUrl": "https://drive.google.com/file/d/14jaH8PMkH1x6az6zEHgf82qqApk2mNW2/preview"}, {"id": 109, "title": "Fundamentos Da Cabala Sêfer Yetsirá  Edição Revisada E", "author": "Acervo Cúpula 33 (Tradição Oculta)", "category": "Hermetismo & Cabala", "module": "Módulo I", "rarity": "Essencial", "pages": 253, "cover": "assets/books/cabala-mistica.jpg", "tier": "master", "desc": "Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Hermetismo & Cabala com fac-símiles de alta resolução.", "pdfUrl": "https://drive.google.com/file/d/1Zpy1_FPx1_OslWBFKmyoVncZGHxBO9fW/preview"}, {"id": 110, "title": "Fundamentos Da Cabala Sêfer Yetsirá  Edição Revisada E Ampli", "author": "Acervo Cúpula 33 (Tradição Oculta)", "category": "Hermetismo & Cabala", "module": "Módulo I", "rarity": "Essencial", "pages": 270, "cover": "assets/books/cabala-mistica.jpg", "tier": "master", "desc": "Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Hermetismo & Cabala com fac-símiles de alta resolução.", "pdfUrl": "https://drive.google.com/file/d/1Zpy1_FPx1_OslWBFKmyoVncZGHxBO9fW/preview"}, {"id": 111, "title": "Gareth Knight Praticas E Exercicios Ocultos", "author": "Acervo Cúpula 33 (Tradição Oculta)", "category": "Mente & Projeção Astral", "module": "Módulo VI", "rarity": "Raríssimo (Manuscrito Restaurado)", "pages": 287, "cover": "assets/books/o-caibalion.jpg", "tier": "master", "desc": "Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.", "pdfUrl": "https://drive.google.com/file/d/1aqhQW6U8hX8ufeiSnemx6vGIEBcUZUVi/preview"}, {"id": 112, "title": "Gênese Os Milagres E As Predições Segundo O Espiritismo", "author": "Acervo Cúpula 33 (Tradição Oculta)", "category": "Mente & Projeção Astral", "module": "Módulo VI", "rarity": "Essencial", "pages": 304, "cover": "assets/books/o-caibalion.jpg", "tier": "master", "desc": "Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.", "pdfUrl": "https://drive.google.com/file/d/1gr6-dETiz6DFJwxWzB5pCRpRjjE6a1WD/preview"}, {"id": 113, "title": "H P Blavatsky E O Caso Coulomb", "author": "Acervo Cúpula 33 (Tradição Oculta)", "category": "Mente & Projeção Astral", "module": "Módulo VI", "rarity": "Essencial", "pages": 321, "cover": "assets/books/o-caibalion.jpg", "tier": "master", "desc": "Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.", "pdfUrl": "https://drive.google.com/file/d/1LPjV93Rj12dfJcxhHzyG77spkaRzmi2v/preview"}, {"id": 114, "title": "Hermes Trismegistos O Três Vezes Grande E Muitas Vezes", "author": "Acervo Cúpula 33 (Tradição Oculta)", "category": "Hermetismo & Cabala", "module": "Módulo I", "rarity": "Raríssimo (Manuscrito Restaurado)", "pages": 338, "cover": "assets/books/três-livros-de-filosofia-oculta.jpg", "tier": "master", "desc": "Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Hermetismo & Cabala com fac-símiles de alta resolução.", "pdfUrl": "https://drive.google.com/file/d/17ZNm6ZlwrzYTLfXDT1y-mRDHEDem9c_e/preview"}, {"id": 115, "title": "Hermes Trismegistos O Três Vezes Grande E Muitas Vezes Forja", "author": "Acervo Cúpula 33 (Tradição Oculta)", "category": "Hermetismo & Cabala", "module": "Módulo I", "rarity": "Essencial", "pages": 355, "cover": "assets/books/três-livros-de-filosofia-oculta.jpg", "tier": "master", "desc": "Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Hermetismo & Cabala com fac-símiles de alta resolução.", "pdfUrl": "https://drive.google.com/file/d/17ZNm6ZlwrzYTLfXDT1y-mRDHEDem9c_e/preview"}, {"id": 116, "title": "Histórias Infantis Pra Gente Grande Vol1 Você Sabia Que", "author": "Acervo Cúpula 33 (Tradição Oculta)", "category": "Mente & Projeção Astral", "module": "Módulo VI", "rarity": "Essencial", "pages": 372, "cover": "assets/books/grandegrimorio.jpg", "tier": "master", "desc": "Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.", "pdfUrl": "https://drive.google.com/file/d/1cxh6HWV3xAg0NA7Xb4DqkgqIBq0k6o5D/preview"}, {"id": 117, "title": "Histórias Infantis Pra Gente Grande Vol1 Você Sabia Que Gato", "author": "Acervo Cúpula 33 (Tradição Oculta)", "category": "Mente & Projeção Astral", "module": "Módulo VI", "rarity": "Raríssimo (Manuscrito Restaurado)", "pages": 389, "cover": "assets/books/grandegrimorio.jpg", "tier": "master", "desc": "Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.", "pdfUrl": "https://drive.google.com/file/d/1cxh6HWV3xAg0NA7Xb4DqkgqIBq0k6o5D/preview"}, {"id": 118, "title": "Jerusalém", "author": "Acervo Cúpula 33 (Tradição Oculta)", "category": "Mente & Projeção Astral", "module": "Módulo VI", "rarity": "Essencial", "pages": 406, "cover": "assets/books/o-caibalion.jpg", "tier": "master", "desc": "Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.", "pdfUrl": "https://drive.google.com/file/d/1kXLwQw4VwzgooI6no28h7VCdalq5Y0C4/preview"}, {"id": 119, "title": "Lmtlt 3 Mag Port", "author": "Acervo Cúpula 33 (Tradição Oculta)", "category": "Mente & Projeção Astral", "module": "Módulo VI", "rarity": "Essencial", "pages": 423, "cover": "assets/books/o-caibalion.jpg", "tier": "master", "desc": "Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.", "pdfUrl": "https://drive.google.com/file/d/13RLl6OE3FWHuYk-1VkVWXvmC8c6_XFF3/preview"}, {"id": 120, "title": "Le Zohar  Cantique Des Cantiques", "author": "Acervo Cúpula 33 (Tradição Oculta)", "category": "Hermetismo & Cabala", "module": "Módulo I", "rarity": "Raríssimo (Manuscrito Restaurado)", "pages": 440, "cover": "assets/books/O ZOHAR.jpg", "tier": "master", "desc": "Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Hermetismo & Cabala com fac-símiles de alta resolução.", "pdfUrl": "https://drive.google.com/file/d/1expfsZDJ6uI46eHL0hyzvOGqTVYnEJO1/preview"}, {"id": 121, "title": "Licoes De Umbanda E Quimbanda Na Palavra De Um Preto Ve", "author": "Acervo Cúpula 33 (Tradição Oculta)", "category": "Mente & Projeção Astral", "module": "Módulo VI", "rarity": "Essencial", "pages": 457, "cover": "assets/books/o-caibalion.jpg", "tier": "master", "desc": "Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.", "pdfUrl": "https://drive.google.com/file/d/1LQ22V6yXr3clZ4EujjucGkBTBNZKPguL/preview"}, {"id": 122, "title": "Licoes De Umbanda E Quimbanda Na Palavra De Um Preto Velho", "author": "Acervo Cúpula 33 (Tradição Oculta)", "category": "Mente & Projeção Astral", "module": "Módulo VI", "rarity": "Essencial", "pages": 474, "cover": "assets/books/o-caibalion.jpg", "tier": "master", "desc": "Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.", "pdfUrl": "https://drive.google.com/file/d/1iuWnG6sWEVHbXJcyyJIgfcDGx2NOrkjV/preview"}, {"id": 123, "title": "Livro De Enoque 1 E 2", "author": "Acervo Cúpula 33 (Tradição Oculta)", "category": "Gnosticismo & Apócrifos", "module": "Módulo III", "rarity": "Raríssimo (Manuscrito Restaurado)", "pages": 491, "cover": "assets/books/três-livros-de-filosofia-oculta.jpg", "tier": "master", "desc": "Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Gnosticismo & Apócrifos com fac-símiles de alta resolução.", "pdfUrl": "https://drive.google.com/file/d/1CTwiMTDnr9D5tccB_DGqBdIcJOi7tvpn/preview"}, {"id": 124, "title": "Livro Dos Espiritos  Ed 2013", "author": "Acervo Cúpula 33 (Tradição Oculta)", "category": "Mente & Projeção Astral", "module": "Módulo VI", "rarity": "Essencial", "pages": 158, "cover": "assets/books/três-livros-de-filosofia-oculta.jpg", "tier": "master", "desc": "Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.", "pdfUrl": "https://drive.google.com/file/d/1IcvPqVogOmq6Gn0_ehKzaVAHwvde9VxL/preview"}, {"id": 125, "title": "Livros De Astrologia", "author": "Acervo Cúpula 33 (Tradição Oculta)", "category": "Mente & Projeção Astral", "module": "Módulo VI", "rarity": "Essencial", "pages": 175, "cover": "assets/books/três-livros-de-filosofia-oculta.jpg", "tier": "master", "desc": "Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.", "pdfUrl": "https://drive.google.com/file/d/1YoWpQNyE9hvtxsYiHVHaryO1zkpYWRMF/preview"}, {"id": 126, "title": "Lágrimas Da Pandemia", "author": "Acervo Cúpula 33 (Tradição Oculta)", "category": "Mente & Projeção Astral", "module": "Módulo VI", "rarity": "Raríssimo (Manuscrito Restaurado)", "pages": 192, "cover": "assets/books/o-caibalion.jpg", "tier": "master", "desc": "Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.", "pdfUrl": "https://drive.google.com/file/d/168sqp-Uh6mf78LYm4SgIo67Lhbpy_ozG/preview"}, {"id": 127, "title": "Meleagro  Pesquisa Do Catimbó E Notas Da Magia Branca No Bra", "author": "Acervo Cúpula 33 (Tradição Oculta)", "category": "Grimórios & Alta Magia", "module": "Módulo II", "rarity": "Essencial", "pages": 209, "cover": "assets/books/dogma-e-ritual-alta-magia.jpg", "tier": "master", "desc": "Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Grimórios & Alta Magia com fac-símiles de alta resolução.", "pdfUrl": "https://drive.google.com/file/d/1YkCnUTx0uSxVco0jZAxqUEJGH-AFQIVB/preview"}, {"id": 128, "title": "Misticismo Tantrico Do Tibete Traducao Completa", "author": "Acervo Cúpula 33 (Tradição Oculta)", "category": "Mente & Projeção Astral", "module": "Módulo VI", "rarity": "Essencial", "pages": 226, "cover": "assets/books/o-caibalion.jpg", "tier": "master", "desc": "Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.", "pdfUrl": "https://drive.google.com/file/d/1Y8GlfeiBaVsELphTU7kuvqXE4HBCj-LT/preview"}, {"id": 129, "title": "Misticismo E Novas Religioes", "author": "Acervo Cúpula 33 (Tradição Oculta)", "category": "Mente & Projeção Astral", "module": "Módulo VI", "rarity": "Raríssimo (Manuscrito Restaurado)", "pages": 243, "cover": "assets/books/o-caibalion.jpg", "tier": "master", "desc": "Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.", "pdfUrl": "https://drive.google.com/file/d/1kjIkBeklpuvXozHgRC5ZfxUSBnUzWJ_O/preview"}, {"id": 130, "title": "Mistérios E Práticas Da Lei De Umbanda", "author": "Acervo Cúpula 33 (Tradição Oculta)", "category": "Mente & Projeção Astral", "module": "Módulo VI", "rarity": "Essencial", "pages": 260, "cover": "assets/books/o-caibalion.jpg", "tier": "master", "desc": "Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.", "pdfUrl": "https://drive.google.com/file/d/1COfF-ekDkhe2dFgD_s9vDiT1hRiJm3PH/preview"}, {"id": 131, "title": "No Reino Da Feiticaria", "author": "Acervo Cúpula 33 (Tradição Oculta)", "category": "Mente & Projeção Astral", "module": "Módulo VI", "rarity": "Essencial", "pages": 277, "cover": "assets/books/o-caibalion.jpg", "tier": "master", "desc": "Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.", "pdfUrl": "https://drive.google.com/file/d/1i9cTK2N59igQD7bVZ9VjTaPuFLNucjBF/preview"}, {"id": 132, "title": "Ogrande Computador Celeste Marcelo Del Debbio", "author": "Acervo Cúpula 33 (Tradição Oculta)", "category": "Mente & Projeção Astral", "module": "Módulo VI", "rarity": "Raríssimo (Manuscrito Restaurado)", "pages": 294, "cover": "assets/books/o-caibalion.jpg", "tier": "master", "desc": "Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.", "pdfUrl": "https://drive.google.com/file/d/1T2fMebieUS-FY0Kgf9X0w84OHp93vXpP/preview"}, {"id": 133, "title": "Os Ensinamentos Secretos De Todo Os Tempos   Manly P Ha", "author": "Acervo Cúpula 33 (Tradição Oculta)", "category": "Mente & Projeção Astral", "module": "Módulo VI", "rarity": "Essencial", "pages": 311, "cover": "assets/books/33_Os_Ensinamentos_Secretos_Manly_Hall.pdf.png", "tier": "master", "desc": "Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.", "pdfUrl": "https://drive.google.com/file/d/11YVNdE2qMxhYBe8cV8apneyyb5xc6iSW/preview"}, {"id": 134, "title": "Os Ensinamentos Secretos De Todo Os Tempos   Manly P Hall", "author": "Acervo Cúpula 33 (Tradição Oculta)", "category": "Mente & Projeção Astral", "module": "Módulo VI", "rarity": "Essencial", "pages": 328, "cover": "assets/books/33_Os_Ensinamentos_Secretos_Manly_Hall.pdf.png", "tier": "master", "desc": "Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.", "pdfUrl": "https://drive.google.com/file/d/1iqCQJqp1Sic6xHV-rf_K5E5Ry84hLBoi/preview"}, {"id": 135, "title": "O Corpo Mental", "author": "Acervo Cúpula 33 (Tradição Oculta)", "category": "Mente & Projeção Astral", "module": "Módulo VI", "rarity": "Raríssimo (Manuscrito Restaurado)", "pages": 345, "cover": "assets/books/projecao-do-corpo-astral.jpg", "tier": "master", "desc": "Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.", "pdfUrl": "https://drive.google.com/file/d/1QAQWFeuoQ-PQH15pXfkhABNrSHWfhSEh/preview"}, {"id": 136, "title": "O Diabo Desmistificação Completa De Um Mito", "author": "Acervo Cúpula 33 (Tradição Oculta)", "category": "Mente & Projeção Astral", "module": "Módulo VI", "rarity": "Essencial", "pages": 362, "cover": "assets/books/o-caibalion.jpg", "tier": "master", "desc": "Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.", "pdfUrl": "https://drive.google.com/file/d/1isGYk1IFEg_ZqcouG2w0D4ngVEE871JZ/preview"}, {"id": 137, "title": "O Domínio Da Vida   Amorc   Ordem Rosacruz", "author": "Acervo Cúpula 33 (Tradição Oculta)", "category": "Sociedades Secretas", "module": "Módulo V", "rarity": "Essencial", "pages": 379, "cover": "assets/books/o-caibalion.jpg", "tier": "master", "desc": "Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Sociedades Secretas com fac-símiles de alta resolução.", "pdfUrl": "https://drive.google.com/file/d/1lflwmZt5fNBoNWfxpaLWq_vWjDHRV9lM/preview"}, {"id": 138, "title": "O Evangelho Dos Egipcios Copta", "author": "Acervo Cúpula 33 (Tradição Oculta)", "category": "Mente & Projeção Astral", "module": "Módulo VI", "rarity": "Raríssimo (Manuscrito Restaurado)", "pages": 396, "cover": "assets/books/evangelho-de-tome.jpg", "tier": "master", "desc": "Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.", "pdfUrl": "https://drive.google.com/file/d/1DxF3vOHORsuThjzU3c5k-X3sHnbOjhuY/preview"}, {"id": 139, "title": "O Livro Egipcio Dos Mortos Papiro Ani", "author": "Acervo Cúpula 33 (Tradição Oculta)", "category": "Mente & Projeção Astral", "module": "Módulo VI", "rarity": "Essencial", "pages": 413, "cover": "assets/books/três-livros-de-filosofia-oculta.jpg", "tier": "master", "desc": "Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.", "pdfUrl": "https://drive.google.com/file/d/1cORKqfWCn1vp8XN8s3hWHHLxhcFA5vJ5/preview"}, {"id": 140, "title": "O Maior Segredo   David Icke", "author": "Acervo Cúpula 33 (Tradição Oculta)", "category": "Mente & Projeção Astral", "module": "Módulo VI", "rarity": "Essencial", "pages": 430, "cover": "assets/books/o-caibalion.jpg", "tier": "master", "desc": "Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.", "pdfUrl": "https://drive.google.com/file/d/1QtbIroXODnDiPF5bl1RJoR15wMNPy0wk/preview"}, {"id": 141, "title": "O Tarô E A Viagem Do Herói", "author": "Acervo Cúpula 33 (Tradição Oculta)", "category": "Mente & Projeção Astral", "module": "Módulo VI", "rarity": "Raríssimo (Manuscrito Restaurado)", "pages": 447, "cover": "assets/books/o-caibalion.jpg", "tier": "master", "desc": "Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.", "pdfUrl": "https://drive.google.com/file/d/1fy5LwqooSw_upoevmS-yTyEPlkGssR7w/preview"}, {"id": 142, "title": "O Trovao Mente Perfeita", "author": "Acervo Cúpula 33 (Tradição Oculta)", "category": "Mente & Projeção Astral", "module": "Módulo VI", "rarity": "Essencial", "pages": 464, "cover": "assets/books/o-caibalion.jpg", "tier": "master", "desc": "Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.", "pdfUrl": "https://drive.google.com/file/d/1fTSZzlqfX6APPlskEuecR5SGaM4J6yqq/preview"}, {"id": 143, "title": "O Vaticano Maçônico Em Nome Do Fantasioso Jeová Jahvéh", "author": "Acervo Cúpula 33 (Tradição Oculta)", "category": "Mente & Projeção Astral", "module": "Módulo VI", "rarity": "Essencial", "pages": 481, "cover": "assets/books/o-caibalion.jpg", "tier": "master", "desc": "Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.", "pdfUrl": "https://drive.google.com/file/d/1h0GyhaGaxKsF8YDVXKTfbHiE3uMqtvU4/preview"}, {"id": 144, "title": "O Verbo E Os Campos Invisiveis 2", "author": "Acervo Cúpula 33 (Tradição Oculta)", "category": "Mente & Projeção Astral", "module": "Módulo VI", "rarity": "Raríssimo (Manuscrito Restaurado)", "pages": 498, "cover": "assets/books/o-caibalion.jpg", "tier": "master", "desc": "Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.", "pdfUrl": "https://drive.google.com/file/d/1V9iAVGnuKJqVq7ZGI2YZanXrw-6RlF56/preview"}, {"id": 145, "title": "Ocultismo E Fé Católica Os Principais Temas Gnósticos", "author": "Acervo Cúpula 33 (Tradição Oculta)", "category": "Mente & Projeção Astral", "module": "Módulo VI", "rarity": "Essencial", "pages": 165, "cover": "assets/books/o-caibalion.jpg", "tier": "master", "desc": "Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.", "pdfUrl": "https://drive.google.com/file/d/1Xzuel6Z9GnFTEXGFBrDJEBRuGsQTj50c/preview"}, {"id": 146, "title": "Os Ensinamentos Secretos De Todas As Epocas Manly Hall", "author": "Acervo Cúpula 33 (Tradição Oculta)", "category": "Mente & Projeção Astral", "module": "Módulo VI", "rarity": "Essencial", "pages": 182, "cover": "assets/books/33_Os_Ensinamentos_Secretos_Manly_Hall.pdf.png", "tier": "master", "desc": "Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.", "pdfUrl": "https://drive.google.com/file/d/10koYtGMopNFF9ZQmFhrIQw9Q0FogdfP6/preview"}, {"id": 147, "title": "Os Jesuítas E O Apostolado Social Durante A Ditadura Mi", "author": "Acervo Cúpula 33 (Tradição Oculta)", "category": "Mente & Projeção Astral", "module": "Módulo VI", "rarity": "Raríssimo (Manuscrito Restaurado)", "pages": 199, "cover": "assets/books/o-caibalion.jpg", "tier": "master", "desc": "Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.", "pdfUrl": "https://drive.google.com/file/d/1Dg8qgZ5nVlLGH39wN3-oWCCw6gYR6JX_/preview"}, {"id": 148, "title": "Os Jesuítas E O Apostolado Social Durante A Ditadura Militar", "author": "Acervo Cúpula 33 (Tradição Oculta)", "category": "Mente & Projeção Astral", "module": "Módulo VI", "rarity": "Essencial", "pages": 216, "cover": "assets/books/o-caibalion.jpg", "tier": "master", "desc": "Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.", "pdfUrl": "https://drive.google.com/file/d/1Dg8qgZ5nVlLGH39wN3-oWCCw6gYR6JX_/preview"}, {"id": 149, "title": "Os Protocolos Dos Sábios De Sião", "author": "Acervo Cúpula 33 (Tradição Oculta)", "category": "Mente & Projeção Astral", "module": "Módulo VI", "rarity": "Essencial", "pages": 233, "cover": "assets/books/o-caibalion.jpg", "tier": "master", "desc": "Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.", "pdfUrl": "https://drive.google.com/file/d/1jvejpgVdkzPDINtgsmISq-ZXTkzTbwXb/preview"}, {"id": 150, "title": "Palavrasde Vida Eterna", "author": "Acervo Cúpula 33 (Tradição Oculta)", "category": "Mente & Projeção Astral", "module": "Módulo VI", "rarity": "Raríssimo (Manuscrito Restaurado)", "pages": 250, "cover": "assets/books/o-caibalion.jpg", "tier": "master", "desc": "Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.", "pdfUrl": "https://drive.google.com/file/d/13QxTDTTNZMEiHSVa7ZIL336u9cQngS12/preview"}, {"id": 151, "title": "Pirḳe Rabi EliʻEzer  Hu Rabi EliʻEzer Ben Horḳanus Ha N", "author": "Acervo Cúpula 33 (Tradição Oculta)", "category": "Mente & Projeção Astral", "module": "Módulo VI", "rarity": "Essencial", "pages": 267, "cover": "assets/books/o-caibalion.jpg", "tier": "master", "desc": "Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.", "pdfUrl": "https://drive.google.com/file/d/1DHRgGiD7_z-zaTMYfpbYK8I-nXHo-BWq/preview"}, {"id": 152, "title": "Pirḳe Rabi EliʻEzer  Hu Rabi EliʻEzer Ben Horḳanus Ha Niḳra", "author": "Acervo Cúpula 33 (Tradição Oculta)", "category": "Mente & Projeção Astral", "module": "Módulo VI", "rarity": "Essencial", "pages": 284, "cover": "assets/books/o-caibalion.jpg", "tier": "master", "desc": "Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.", "pdfUrl": "https://drive.google.com/file/d/1NQt-HwJa3PO2DNRAvHMgY5r4iFxmWYdT/preview"}, {"id": 153, "title": "Pistis Sophia", "author": "Acervo Cúpula 33 (Tradição Oculta)", "category": "Mente & Projeção Astral", "module": "Módulo VI", "rarity": "Raríssimo (Manuscrito Restaurado)", "pages": 301, "cover": "assets/books/pistis-sophia.jpg", "tier": "master", "desc": "Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.", "pdfUrl": "https://drive.google.com/file/d/1aE8jdhtPsrUD79KZrQaeAwQVTKjBFDO4/preview"}, {"id": 154, "title": "Poetry From Beyond The Grave", "author": "Acervo Cúpula 33 (Tradição Oculta)", "category": "Mente & Projeção Astral", "module": "Módulo VI", "rarity": "Essencial", "pages": 318, "cover": "assets/books/o-caibalion.jpg", "tier": "master", "desc": "Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.", "pdfUrl": "https://drive.google.com/file/d/1bAWgbUezfZDQro6Q2xhAGLfWnKp3WtOG/preview"}, {"id": 155, "title": "Psiquiatria Espiritismo E Ciência Um Diálogo Sobre Psic", "author": "Acervo Cúpula 33 (Tradição Oculta)", "category": "Mente & Projeção Astral", "module": "Módulo VI", "rarity": "Essencial", "pages": 335, "cover": "assets/books/o-caibalion.jpg", "tier": "master", "desc": "Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.", "pdfUrl": "https://drive.google.com/file/d/1HmCehi07ALJCk-jDxufCjwxkDIQzFXIt/preview"}, {"id": 156, "title": "Resenha Do Livro E Link Para Download Online Grimório D", "author": "Acervo Cúpula 33 (Tradição Oculta)", "category": "Mente & Projeção Astral", "module": "Módulo VI", "rarity": "Raríssimo (Manuscrito Restaurado)", "pages": 352, "cover": "assets/books/três-livros-de-filosofia-oculta.jpg", "tier": "master", "desc": "Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.", "pdfUrl": "https://drive.google.com/file/d/1SDZmT8ZZ-KEhA6D6ZjVqfV8EmbO-qnyn/preview"}, {"id": 157, "title": "Resenha Do Livro E Link Para Download Online Grimório Do Sat", "author": "Acervo Cúpula 33 (Tradição Oculta)", "category": "Mente & Projeção Astral", "module": "Módulo VI", "rarity": "Essencial", "pages": 369, "cover": "assets/books/três-livros-de-filosofia-oculta.jpg", "tier": "master", "desc": "Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.", "pdfUrl": "https://drive.google.com/file/d/1SDZmT8ZZ-KEhA6D6ZjVqfV8EmbO-qnyn/preview"}, {"id": 158, "title": "Revista Espirita   Ano I   1858", "author": "Acervo Cúpula 33 (Tradição Oculta)", "category": "Mente & Projeção Astral", "module": "Módulo VI", "rarity": "Essencial", "pages": 386, "cover": "assets/books/o-caibalion.jpg", "tier": "master", "desc": "Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.", "pdfUrl": "https://drive.google.com/file/d/1vJp1S5ZKTNfupXRc_yDjm3ruFKNq37v0/preview"}, {"id": 159, "title": "Revista Internacional Do Espiritismo", "author": "Acervo Cúpula 33 (Tradição Oculta)", "category": "Mente & Projeção Astral", "module": "Módulo VI", "rarity": "Raríssimo (Manuscrito Restaurado)", "pages": 403, "cover": "assets/books/o-caibalion.jpg", "tier": "master", "desc": "Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.", "pdfUrl": "https://drive.google.com/file/d/1c0dDssoDrjlziW7ANedxy3hjdU7OV3JV/preview"}, {"id": 160, "title": "Ritual Onírico Comunicação Espiritual Durante O Sono Ma", "author": "Acervo Cúpula 33 (Tradição Oculta)", "category": "Mente & Projeção Astral", "module": "Módulo VI", "rarity": "Essencial", "pages": 420, "cover": "assets/books/dogma-e-ritual-alta-magia.jpg", "tier": "master", "desc": "Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.", "pdfUrl": "https://drive.google.com/file/d/1LF5zIpoGavYxP15KClJGV4kSCMLq3oFe/preview"}, {"id": 161, "title": "Shemyaza O Líder Dos Vigilantes  A Queda O Ensino E O P", "author": "Acervo Cúpula 33 (Tradição Oculta)", "category": "Mente & Projeção Astral", "module": "Módulo VI", "rarity": "Essencial", "pages": 437, "cover": "assets/books/o-caibalion.jpg", "tier": "master", "desc": "Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.", "pdfUrl": "https://drive.google.com/file/d/1KZ9CjH3-oi9O9zLjiIT-PPUMav_sdsmL/preview"}, {"id": 162, "title": "Shemyaza O Líder Dos Vigilantes  A Queda O Ensino E O Preço", "author": "Acervo Cúpula 33 (Tradição Oculta)", "category": "Mente & Projeção Astral", "module": "Módulo VI", "rarity": "Raríssimo (Manuscrito Restaurado)", "pages": 454, "cover": "assets/books/o-caibalion.jpg", "tier": "master", "desc": "Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.", "pdfUrl": "https://drive.google.com/file/d/1KZ9CjH3-oi9O9zLjiIT-PPUMav_sdsmL/preview"}, {"id": 163, "title": "Samuel Liddell Mac Gregor Mathers   The Kabbalah Unveiled", "author": "Acervo Cúpula 33 (Tradição Oculta)", "category": "Mente & Projeção Astral", "module": "Módulo VI", "rarity": "Essencial", "pages": 471, "cover": "assets/books/o-caibalion.jpg", "tier": "master", "desc": "Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.", "pdfUrl": "https://drive.google.com/file/d/1d7Dm1X24cOAKuQz2FwSma7JQhF05kZSa/preview"}, {"id": 164, "title": "Sao Cipriano Pdf", "author": "Acervo Cúpula 33 (Tradição Oculta)", "category": "Grimórios & Alta Magia", "module": "Módulo II", "rarity": "Essencial", "pages": 488, "cover": "assets/books/grimorio-sao-cipriano.jpg", "tier": "master", "desc": "Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Grimórios & Alta Magia com fac-símiles de alta resolução.", "pdfUrl": "https://drive.google.com/file/d/1U7P9nDPsbWBWLJhDS93p1EYes5TiQ0zL/preview"}, {"id": 165, "title": "Segredos Da Magia De Umbanda E Quimbanda", "author": "Acervo Cúpula 33 (Tradição Oculta)", "category": "Grimórios & Alta Magia", "module": "Módulo II", "rarity": "Raríssimo (Manuscrito Restaurado)", "pages": 155, "cover": "assets/books/dogma-e-ritual-alta-magia.jpg", "tier": "master", "desc": "Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Grimórios & Alta Magia com fac-símiles de alta resolução.", "pdfUrl": "https://drive.google.com/file/d/1Lh5DXxvVhL2KMP4FClB4QE93HK9PhiXl/preview"}, {"id": 166, "title": "Sobre A Origem Do Mundo Gnostico", "author": "Acervo Cúpula 33 (Tradição Oculta)", "category": "Gnosticismo & Apócrifos", "module": "Módulo III", "rarity": "Essencial", "pages": 172, "cover": "assets/books/o-caibalion.jpg", "tier": "master", "desc": "Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Gnosticismo & Apócrifos com fac-símiles de alta resolução.", "pdfUrl": "https://drive.google.com/file/d/14DiXEhFFacXuX54RNWm9SmadlazYwzZx/preview"}, {"id": 167, "title": "São Cipriano De Cartago", "author": "Acervo Cúpula 33 (Tradição Oculta)", "category": "Grimórios & Alta Magia", "module": "Módulo II", "rarity": "Essencial", "pages": 189, "cover": "assets/books/grimorio-sao-cipriano.jpg", "tier": "master", "desc": "Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Grimórios & Alta Magia com fac-símiles de alta resolução.", "pdfUrl": "https://drive.google.com/file/d/1qU0wZuw4ngWl2SAZcrnDX0xpO6Z4spfy/preview"}, {"id": 168, "title": "Tarot O Livro Azul", "author": "Acervo Cúpula 33 (Tradição Oculta)", "category": "Mente & Projeção Astral", "module": "Módulo VI", "rarity": "Raríssimo (Manuscrito Restaurado)", "pages": 206, "cover": "assets/books/três-livros-de-filosofia-oculta.jpg", "tier": "master", "desc": "Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.", "pdfUrl": "https://drive.google.com/file/d/1AmyHQjUb2TR03wHjIjlTAgu8Gj0e8kkP/preview"}, {"id": 169, "title": "Teses Sobre A Comunidade Terrivel", "author": "Acervo Cúpula 33 (Tradição Oculta)", "category": "Mente & Projeção Astral", "module": "Módulo VI", "rarity": "Essencial", "pages": 223, "cover": "assets/books/o-caibalion.jpg", "tier": "master", "desc": "Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.", "pdfUrl": "https://drive.google.com/file/d/1S4xdhGpgRrF4FpB7koiSiVcyzok7OeHC/preview"}, {"id": 170, "title": "Tratado Da Sciencia Cabala Ou Noticia Da Arte Cabalistica", "author": "Acervo Cúpula 33 (Tradição Oculta)", "category": "Hermetismo & Cabala", "module": "Módulo I", "rarity": "Essencial", "pages": 240, "cover": "assets/books/cabala-mistica.jpg", "tier": "master", "desc": "Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Hermetismo & Cabala com fac-símiles de alta resolução.", "pdfUrl": "https://drive.google.com/file/d/1CvlZMcgzznfZUxsDsRVAlyvHrFhyCUbi/preview"}, {"id": 171, "title": "Tratado Da Sciencia Cabala Ou Noticia De Arte Cabalistica", "author": "Acervo Cúpula 33 (Tradição Oculta)", "category": "Hermetismo & Cabala", "module": "Módulo I", "rarity": "Raríssimo (Manuscrito Restaurado)", "pages": 257, "cover": "assets/books/cabala-mistica.jpg", "tier": "master", "desc": "Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Hermetismo & Cabala com fac-símiles de alta resolução.", "pdfUrl": "https://drive.google.com/file/d/12mcd_7mETDI9b62BJ3zWwQOXeUCzQmnh/preview"}, {"id": 172, "title": "Um Iniciante Na Viagem Astral   Saulo Calderon", "author": "Acervo Cúpula 33 (Tradição Oculta)", "category": "Mente & Projeção Astral", "module": "Módulo VI", "rarity": "Essencial", "pages": 274, "cover": "assets/books/projecao-do-corpo-astral.jpg", "tier": "master", "desc": "Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.", "pdfUrl": "https://drive.google.com/file/d/171lA-seXqnlch4_XYp3Dknadt6TXk14U/preview"}, {"id": 173, "title": "Umbanda Do Brasil", "author": "Acervo Cúpula 33 (Tradição Oculta)", "category": "Mente & Projeção Astral", "module": "Módulo VI", "rarity": "Essencial", "pages": 291, "cover": "assets/books/o-caibalion.jpg", "tier": "master", "desc": "Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.", "pdfUrl": "https://drive.google.com/file/d/14jaH8PMkH1x6az6zEHgf82qqApk2mNW2/preview"}, {"id": 174, "title": "Umbanda E O Poder Da Mediunidade", "author": "Acervo Cúpula 33 (Tradição Oculta)", "category": "Mente & Projeção Astral", "module": "Módulo VI", "rarity": "Raríssimo (Manuscrito Restaurado)", "pages": 308, "cover": "assets/books/o-caibalion.jpg", "tier": "master", "desc": "Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.", "pdfUrl": "https://drive.google.com/file/d/1oV8XgLAa9fhRLMrykx2NPnAdUcPkJesC/preview"}, {"id": 175, "title": "A Aguia  01011911 03", "author": "Acervo Cúpula 33 (Tradição Oculta)", "category": "Mente & Projeção Astral", "module": "Módulo VI", "rarity": "Essencial", "pages": 325, "cover": "assets/books/o-caibalion.jpg", "tier": "master", "desc": "Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.", "pdfUrl": "https://drive.google.com/file/d/1JmNUfe0RTmJZwqfdCCOoqgP9akxH0HRk/preview"}, {"id": 176, "title": "A Aguia 01121910 01", "author": "Acervo Cúpula 33 (Tradição Oculta)", "category": "Mente & Projeção Astral", "module": "Módulo VI", "rarity": "Essencial", "pages": 342, "cover": "assets/books/o-caibalion.jpg", "tier": "master", "desc": "Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.", "pdfUrl": "https://drive.google.com/file/d/1aqhQW6U8hX8ufeiSnemx6vGIEBcUZUVi/preview"}, {"id": 177, "title": "Acao E Reacao", "author": "Acervo Cúpula 33 (Tradição Oculta)", "category": "Mente & Projeção Astral", "module": "Módulo VI", "rarity": "Raríssimo (Manuscrito Restaurado)", "pages": 359, "cover": "assets/books/acao-secreta-maconaria.jpeg", "tier": "master", "desc": "Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.", "pdfUrl": "https://drive.google.com/file/d/1gr6-dETiz6DFJwxWzB5pCRpRjjE6a1WD/preview"}, {"id": 178, "title": "Eed14C2B684E00A67438F69B09A42Bfffdc759F8", "author": "Acervo Cúpula 33 (Tradição Oculta)", "category": "Mente & Projeção Astral", "module": "Módulo VI", "rarity": "Essencial", "pages": 376, "cover": "assets/books/o-caibalion.jpg", "tier": "master", "desc": "Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.", "pdfUrl": "https://drive.google.com/file/d/1LPjV93Rj12dfJcxhHzyG77spkaRzmi2v/preview"}, {"id": 179, "title": "Manual Papa Leao Iii Final 3", "author": "Acervo Cúpula 33 (Tradição Oculta)", "category": "Mente & Projeção Astral", "module": "Módulo VI", "rarity": "Essencial", "pages": 393, "cover": "assets/books/o-caibalion.jpg", "tier": "master", "desc": "Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.", "pdfUrl": "https://drive.google.com/file/d/17ZNm6ZlwrzYTLfXDT1y-mRDHEDem9c_e/preview"}, {"id": 180, "title": "Nro 2 11 Ano Grande Oriente Do Brazil Jornal Official Da Maç", "author": "Acervo Cúpula 33 (Tradição Oculta)", "category": "Mente & Projeção Astral", "module": "Módulo VI", "rarity": "Raríssimo (Manuscrito Restaurado)", "pages": 410, "cover": "assets/books/grandegrimorio.jpg", "tier": "master", "desc": "Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.", "pdfUrl": "https://drive.google.com/file/d/1GceN-iFQcRgiJvg5CvgF0KLoDHaV2W-x/preview"}, {"id": 181, "title": "O Filho De Deus 1916Pt Br", "author": "Acervo Cúpula 33 (Tradição Oculta)", "category": "Mente & Projeção Astral", "module": "Módulo VI", "rarity": "Essencial", "pages": 427, "cover": "assets/books/o-caibalion.jpg", "tier": "master", "desc": "Tratado e manuscrito autêntico preservado em língua portuguesa. Obra integral de Mente & Projeção Astral com fac-símiles de alta resolução.", "pdfUrl": "https://drive.google.com/file/d/1cxh6HWV3xAg0NA7Xb4DqkgqIBq0k6o5D/preview"}];

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
  document.getElementById("readerBookStatus").textContent = (book.module || 'Módulo') + " • Leitor Integrado";
  
  let targetUrl = book.pdfUrl;
  
  // Se for link do Google Drive, converte automaticamente para o player/leitor embutido (/preview)
  if (targetUrl.includes("drive.google.com")) {
    if (targetUrl.includes("/view")) {
      targetUrl = targetUrl.replace(/\/view(\?.*)?$/, "/preview");
    } else if (!targetUrl.includes("/preview")) {
      targetUrl = targetUrl.replace(/\?.*$/, "") + "/preview";
    }
  }

  const iframe = document.getElementById("readerIframe");
  if (iframe) {
    iframe.src = targetUrl;
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
    
    if (window.lucide) lucide.createIcons();
  }
}
