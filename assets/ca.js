const exchangeData = [
  {
    from_to: "USD-BRL",
    name: "Dólar Americano/Real Brasileiro",
  },
  {
    from_to: "USD-BRLT",
    name: "Dólar Americano/Real Brasileiro Turismo",
  },
  {
    from_to: "CAD-BRL",
    name: "Dólar Canadense/Real Brasileiro",
  },
  {
    from_to: "EUR-BRL",
    name: "Euro/Real Brasileiro",
  },
  {
    from_to: "GBP-BRL",
    name: "Libra Esterlina/Real Brasileiro",
  },
  {
    from_to: "ARS-BRL",
    name: "Peso Argentino/Real Brasileiro",
  },
  {
    from_to: "BTC-BRL",
    name: "Bitcoin/Real Brasileiro",
  },
  {
    from_to: "LTC-BRL",
    name: "Litecoin/Real Brasileiro",
  },
  {
    from_to: "JPY-BRL",
    name: "Iene Japonês/Real Brasileiro",
  },
  {
    from_to: "CHF-BRL",
    name: "Franco Suíço/Real Brasileiro",
  },
  {
    from_to: "AUD-BRL",
    name: "Dólar Australiano/Real Brasileiro",
  },
  {
    from_to: "CNY-BRL",
    name: "Yuan Chinês/Real Brasileiro",
  },
  {
    from_to: "ILS-BRL",
    name: "Novo Shekel Israelense/Real Brasileiro",
  },
  {
    from_to: "ETH-BRL",
    name: "Ethereum/Real Brasileiro",
  },
  {
    from_to: "XRP-BRL",
    name: "XRP/Real Brasileiro",
  },
  {
    from_to: "EUR-USD",
    name: "Euro/Dólar Americano",
  },
  {
    from_to: "CAD-USD",
    name: "Dólar Canadense/Dólar Americano",
  },
  {
    from_to: "GBP-USD",
    name: "Libra Esterlina/Dólar Americano",
  },
  {
    from_to: "ARS-USD",
    name: "Peso Argentino/Dólar Americano",
  },
  {
    from_to: "JPY-USD",
    name: "Iene Japonês/Dólar Americano",
  },
  {
    from_to: "CHF-USD",
    name: "Franco Suíço/Dólar Americano",
  },
  {
    from_to: "AUD-USD",
    name: "Dólar Australiano/Dólar Americano",
  },
  {
    from_to: "CNY-USD",
    name: "Yuan Chinês/Dólar Americano",
  },
  {
    from_to: "ILS-USD",
    name: "Novo Shekel Israelense/Dólar Americano",
  },
  {
    from_to: "BTC-USD",
    name: "Bitcoin/Dólar Americano",
  },
  {
    from_to: "LTC-USD",
    name: "Litecoin/Dólar Americano",
  },
  {
    from_to: "ETH-USD",
    name: "Ethereum/Dólar Americano",
  },
  {
    from_to: "XRP-USD",
    name: "XRP/Dólar Americano",
  },
  {
    from_to: "BRL-USD",
    name: "Real Brasileiro/Dólar Americano",
  },
  {
    from_to: "BRL-EUR",
    name: "Real Brasileiro/Euro",
  },
  {
    from_to: "USD-EUR",
    name: "Dólar Americano/Euro",
  },
  {
    from_to: "CAD-EUR",
    name: "Dólar Canadense/Euro",
  },
  {
    from_to: "GBP-EUR",
    name: "Libra Esterlina/Euro",
  },
  {
    from_to: "ARS-EUR",
    name: "Peso Argentino/Euro",
  },
  {
    from_to: "JPY-EUR",
    name: "Iene Japonês/Euro",
  },
  {
    from_to: "CHF-EUR",
    name: "Franco Suíço/Euro",
  },
  {
    from_to: "AUD-EUR",
    name: "Dólar Australiano/Euro",
  },
  {
    from_to: "CNY-EUR",
    name: "Yuan Chinês/Euro",
  },
  {
    from_to: "ILS-EUR",
    name: "Novo Shekel Israelense/Euro",
  },
  {
    from_to: "BTC-EUR",
    name: "Bitcoin/Euro",
  },
  {
    from_to: "LTC-EUR",
    name: "Litecoin/Euro",
  },
  {
    from_to: "ETH-EUR",
    name: "Ethereum/Euro",
  },
  {
    from_to: "XRP-EUR",
    name: "XRP/Euro",
  },
  {
    from_to: "DOGE-BRL",
    name: "Dogecoin/Real Brasileiro",
  },
  {
    from_to: "DOGE-EUR",
    name: "Dogecoin/Euro",
  },
  {
    from_to: "DOGE-USD",
    name: "Dogecoin/Dólar Americano",
  },
  {
    from_to: "USD-JPY",
    name: "Dólar Americano/Iene Japonês",
  },
  {
    from_to: "USD-CHF",
    name: "Dólar Americano/Franco Suíço",
  },
  {
    from_to: "USD-CAD",
    name: "Dólar Americano/Dólar Canadense",
  },
  {
    from_to: "NZD-USD",
    name: "Dólar Neozelandês/Dólar Americano",
  },
  {
    from_to: "USD-ZAR",
    name: "Dólar Americano/Rand Sul-Africano",
  },
  {
    from_to: "USD-TRY",
    name: "Dólar Americano/Nova Lira Turca",
  },
  {
    from_to: "USD-MXN",
    name: "Dólar Americano/Peso Mexicano",
  },
  {
    from_to: "USD-PLN",
    name: "Dólar Americano/Zlóti Polonês",
  },
  {
    from_to: "USD-SEK",
    name: "Dólar Americano/Coroa Sueca",
  },
  {
    from_to: "USD-SGD",
    name: "Dólar Americano/Dólar de Cingapura",
  },
  {
    from_to: "USD-DKK",
    name: "Dólar Americano/Coroa Dinamarquesa",
  },
  {
    from_to: "USD-NOK",
    name: "Dólar Americano/Coroa Norueguesa",
  },
  {
    from_to: "USD-ILS",
    name: "Dólar Americano/Novo Shekel Israelense",
  },
  {
    from_to: "USD-HUF",
    name: "Dólar Americano/Florim Húngaro",
  },
  {
    from_to: "USD-CZK",
    name: "Dólar Americano/Coroa Checa",
  },
  {
    from_to: "USD-THB",
    name: "Dólar Americano/Baht Tailandês",
  },
  {
    from_to: "USD-AED",
    name: "Dólar Americano/Dirham dos Emirados",
  },
  {
    from_to: "USD-JOD",
    name: "Dólar Americano/Dinar Jordaniano",
  },
  {
    from_to: "USD-KWD",
    name: "Dólar Americano/Dinar Kuwaitiano",
  },
  {
    from_to: "USD-HKD",
    name: "Dólar Americano/Dólar de Hong Kong",
  },
  {
    from_to: "USD-SAR",
    name: "Dólar Americano/Riyal Saudita",
  },
  {
    from_to: "USD-INR",
    name: "Dólar Americano/Rúpia Indiana",
  },
  {
    from_to: "USD-KRW",
    name: "Dólar Americano/Won Sul-Coreano",
  },
  {
    from_to: "FJD-USD",
    name: "Dólar de Fiji/Dólar Americano",
  },
  {
    from_to: "GHS-USD",
    name: "Cedi Ganês/Dólar Americano",
  },
  {
    from_to: "KYD-USD",
    name: "Dólar das Ilhas Cayman/Dólar Americano",
  },
  {
    from_to: "SGD-USD",
    name: "Dólar de Cingapura/Dólar Americano",
  },
  {
    from_to: "USD-ALL",
    name: "Dólar Americano/Lek Albanês",
  },
  {
    from_to: "USD-AMD",
    name: "Dólar Americano/Dram Armênio",
  },
  {
    from_to: "USD-ANG",
    name: "Dólar Americano/Guilder das Antilhas",
  },
  {
    from_to: "USD-ARS",
    name: "Dólar Americano/Peso Argentino",
  },
  {
    from_to: "USD-AUD",
    name: "Dólar Americano/Dólar Australiano",
  },
  {
    from_to: "USD-BBD",
    name: "Dólar Americano/Dólar de Barbados",
  },
  {
    from_to: "USD-BDT",
    name: "Dólar Americano/Taka de Bangladesh",
  },
  {
    from_to: "USD-BGN",
    name: "Dólar Americano/Lev Búlgaro",
  },
  {
    from_to: "USD-BHD",
    name: "Dólar Americano/Dinar do Bahrein",
  },
  {
    from_to: "USD-BIF",
    name: "Dólar Americano/Franco Burundinense",
  },
  {
    from_to: "USD-BND",
    name: "Dólar Americano/Dólar de Brunei",
  },
  {
    from_to: "USD-BOB",
    name: "Dólar Americano/Boliviano",
  },
  {
    from_to: "USD-BSD",
    name: "Dólar Americano/Dólar das Bahamas",
  },
  {
    from_to: "USD-BWP",
    name: "Dólar Americano/Pula de Botswana",
  },
  {
    from_to: "USD-BZD",
    name: "Dólar Americano/Dólar de Belize",
  },
  {
    from_to: "USD-CLP",
    name: "Dólar Americano/Peso Chileno",
  },
  {
    from_to: "USD-CNY",
    name: "Dólar Americano/Yuan Chinês",
  },
  {
    from_to: "USD-COP",
    name: "Dólar Americano/Peso Colombiano",
  },
  {
    from_to: "USD-CRC",
    name: "Dólar Americano/Colón Costarriquenho",
  },
  {
    from_to: "USD-CUP",
    name: "Dólar Americano/Peso Cubano",
  },
  {
    from_to: "USD-DJF",
    name: "Dólar Americano/Franco do Djubouti",
  },
  {
    from_to: "USD-DOP",
    name: "Dólar Americano/Peso Dominicano",
  },
  {
    from_to: "USD-DZD",
    name: "Dólar Americano/Dinar Argelino",
  },
  {
    from_to: "USD-EGP",
    name: "Dólar Americano/Libra Egípcia",
  },
  {
    from_to: "USD-ETB",
    name: "Dólar Americano/Birr Etíope",
  },
  {
    from_to: "USD-FJD",
    name: "Dólar Americano/Dólar de Fiji",
  },
  {
    from_to: "USD-GBP",
    name: "Dólar Americano/Libra Esterlina",
  },
  {
    from_to: "USD-GEL",
    name: "Dólar Americano/Lari Georgiano",
  },
  {
    from_to: "USD-GHS",
    name: "Dólar Americano/Cedi Ganês",
  },
  {
    from_to: "USD-GMD",
    name: "Dólar Americano/Dalasi da Gâmbia",
  },
  {
    from_to: "USD-GNF",
    name: "Dólar Americano/Franco de Guiné",
  },
  {
    from_to: "USD-GTQ",
    name: "Dólar Americano/Quetzal Guatemalteco",
  },
  {
    from_to: "USD-HNL",
    name: "Dólar Americano/Lempira Hondurenha",
  },
  {
    from_to: "USD-HRK",
    name: "Dólar Americano/Kuna Croata",
  },
  {
    from_to: "USD-HTG",
    name: "Dólar Americano/Gourde Haitiano",
  },
  {
    from_to: "USD-IDR",
    name: "Dólar Americano/Rupia Indonésia",
  },
  {
    from_to: "USD-IQD",
    name: "Dólar Americano/Dinar Iraquiano",
  },
  {
    from_to: "USD-IRR",
    name: "Dólar Americano/Rial Iraniano",
  },
  {
    from_to: "USD-ISK",
    name: "Dólar Americano/Coroa Islandesa",
  },
  {
    from_to: "USD-JMD",
    name: "Dólar Americano/Dólar Jamaicano",
  },
  {
    from_to: "USD-KES",
    name: "Dólar Americano/Shilling Queniano",
  },
  {
    from_to: "USD-KHR",
    name: "Dólar Americano/Riel Cambojano",
  },
  {
    from_to: "USD-KMF",
    name: "Dólar Americano/Franco Comorense",
  },
  {
    from_to: "USD-KZT",
    name: "Dólar Americano/Tengue Cazaquistanês",
  },
  {
    from_to: "USD-LAK",
    name: "Dólar Americano/Kip Laosiano",
  },
  {
    from_to: "USD-LBP",
    name: "Dólar Americano/Libra Libanesa",
  },
  {
    from_to: "USD-LKR",
    name: "Dólar Americano/Rúpia de Sri Lanka",
  },
  {
    from_to: "USD-LSL",
    name: "Dólar Americano/Loti do Lesoto",
  },
  {
    from_to: "USD-LYD",
    name: "Dólar Americano/Dinar Líbio",
  },
  {
    from_to: "USD-MAD",
    name: "Dólar Americano/Dirham Marroquino",
  },
  {
    from_to: "USD-MDL",
    name: "Dólar Americano/Leu Moldavo",
  },
  {
    from_to: "USD-MGA",
    name: "Dólar Americano/Ariary Madagascarense",
  },
  {
    from_to: "USD-MKD",
    name: "Dólar Americano/Denar Macedônio",
  },
  {
    from_to: "USD-MMK",
    name: "Dólar Americano/Kyat de Mianmar",
  },
  {
    from_to: "USD-MOP",
    name: "Dólar Americano/Pataca de Macau",
  },
  {
    from_to: "USD-MRO",
    name: "Dólar Americano/Ouguiya Mauritana",
  },
  {
    from_to: "USD-MUR",
    name: "Dólar Americano/Rúpia Mauriciana",
  },
  {
    from_to: "USD-MVR",
    name: "Dólar Americano/Rufiyaa Maldiva",
  },
  {
    from_to: "USD-MWK",
    name: "Dólar Americano/Kwacha Malauiana",
  },
  {
    from_to: "USD-MYR",
    name: "Dólar Americano/Ringgit Malaio",
  },
  {
    from_to: "USD-NAD",
    name: "Dólar Americano/Dólar Namíbio",
  },
  {
    from_to: "USD-NGN",
    name: "Dólar Americano/Naira Nigeriana",
  },
  {
    from_to: "USD-NIO",
    name: "Dólar Americano/Córdoba Nicaraguense",
  },
  {
    from_to: "USD-NPR",
    name: "Dólar Americano/Rúpia Nepalesa",
  },
  {
    from_to: "USD-NZD",
    name: "Dólar Americano/Dólar Neozelandês",
  },
  {
    from_to: "USD-OMR",
    name: "Dólar Americano/Rial Omanense",
  },
  {
    from_to: "USD-PAB",
    name: "Dólar Americano/Balboa Panamenho",
  },
  {
    from_to: "USD-PEN",
    name: "Dólar Americano/Sol do Peru",
  },
  {
    from_to: "USD-PGK",
    name: "Dólar Americano/Kina Papua-Nova Guiné",
  },
  {
    from_to: "USD-PHP",
    name: "Dólar Americano/Peso Filipino",
  },
  {
    from_to: "USD-PKR",
    name: "Dólar Americano/Rúpia Paquistanesa",
  },
  {
    from_to: "USD-PYG",
    name: "Dólar Americano/Guarani Paraguaio",
  },
  {
    from_to: "USD-QAR",
    name: "Dólar Americano/Rial Catarense",
  },
  {
    from_to: "USD-RON",
    name: "Dólar Americano/Leu Romeno",
  },
  {
    from_to: "USD-RSD",
    name: "Dólar Americano/Dinar Sérvio",
  },
  {
    from_to: "USD-RWF",
    name: "Dólar Americano/Franco Ruandês",
  },
  {
    from_to: "USD-SCR",
    name: "Dólar Americano/Rúpias de Seicheles",
  },
  {
    from_to: "USD-SDG",
    name: "Dólar Americano/Libra Sudanesa",
  },
  {
    from_to: "USD-SOS",
    name: "Dólar Americano/Shilling Somaliano",
  },
  {
    from_to: "USD-STD",
    name: "Dólar Americano/Dobra São Tomé/Príncipe",
  },
  {
    from_to: "USD-SVC",
    name: "Dólar Americano/Colon de El Salvador",
  },
  {
    from_to: "USD-SYP",
    name: "Dólar Americano/Libra Síria",
  },
  {
    from_to: "USD-SZL",
    name: "Dólar Americano/Lilangeni Suazilandês",
  },
  {
    from_to: "USD-TND",
    name: "Dólar Americano/Dinar Tunisiano",
  },
  {
    from_to: "USD-TTD",
    name: "Dólar Americano/Dólar de Trinidad",
  },
  {
    from_to: "USD-TWD",
    name: "Dólar Americano/Dólar Taiuanês",
  },
  {
    from_to: "USD-TZS",
    name: "Dólar Americano/Shilling Tanzaniano",
  },
  {
    from_to: "USD-UAH",
    name: "Dólar Americano/Hryvinia Ucraniana",
  },
  {
    from_to: "USD-UGX",
    name: "Dólar Americano/Shilling Ugandês",
  },
  {
    from_to: "USD-UYU",
    name: "Dólar Americano/Peso Uruguaio",
  },
  {
    from_to: "USD-UZS",
    name: "Dólar Americano/Som Uzbequistanês",
  },
  {
    from_to: "USD-VEF",
    name: "Dólar Americano/Bolívar Venezuelano",
  },
  {
    from_to: "USD-VND",
    name: "Dólar Americano/Dong Vietnamita",
  },
  {
    from_to: "USD-VUV",
    name: "Dólar Americano/Vatu de Vanuatu",
  },
  {
    from_to: "USD-XAF",
    name: "Dólar Americano/Franco CFA Central",
  },
  {
    from_to: "USD-XCD",
    name: "Dólar Americano/Dólar do Caribe Oriental",
  },
  {
    from_to: "USD-XOF",
    name: "Dólar Americano/Franco CFA Ocidental",
  },
  {
    from_to: "USD-XPF",
    name: "Dólar Americano/Franco CFP",
  },
  {
    from_to: "USD-YER",
    name: "Dólar Americano/Riyal Iemenita",
  },
  {
    from_to: "USD-ZMK",
    name: "Dólar Americano/Kwacha Zambiana",
  },
  {
    from_to: "AED-USD",
    name: "Dirham dos Emirados/Dólar Americano",
  },
  {
    from_to: "DKK-USD",
    name: "Coroa Dinamarquesa/Dólar Americano",
  },
  {
    from_to: "HKD-USD",
    name: "Dólar de Hong Kong/Dólar Americano",
  },
  {
    from_to: "MXN-USD",
    name: "Peso Mexicano/Dólar Americano",
  },
  {
    from_to: "NOK-USD",
    name: "Coroa Norueguesa/Dólar Americano",
  },
  {
    from_to: "PLN-USD",
    name: "Zlóti Polonês/Dólar Americano",
  },
  {
    from_to: "RUB-USD",
    name: "Rublo Russo/Dólar Americano",
  },
  {
    from_to: "SAR-USD",
    name: "Riyal Saudita/Dólar Americano",
  },
  {
    from_to: "SEK-USD",
    name: "Coroa Sueca/Dólar Americano",
  },
  {
    from_to: "TRY-USD",
    name: "Nova Lira Turca/Dólar Americano",
  },
  {
    from_to: "TWD-USD",
    name: "Dólar Taiuanês/Dólar Americano",
  },
  {
    from_to: "VEF-USD",
    name: "Bolívar Venezuelano/Dólar Americano",
  },
  {
    from_to: "ZAR-USD",
    name: "Rand Sul-Africano/Dólar Americano",
  },
  {
    from_to: "UYU-USD",
    name: "Peso Uruguaio/Dólar Americano",
  },
  {
    from_to: "PYG-USD",
    name: "Guarani Paraguaio/Dólar Americano",
  },
  {
    from_to: "CLP-USD",
    name: "Peso Chileno/Dólar Americano",
  },
  {
    from_to: "COP-USD",
    name: "Peso Colombiano/Dólar Americano",
  },
  {
    from_to: "PEN-USD",
    name: "Sol do Peru/Dólar Americano",
  },
  {
    from_to: "NIO-USD",
    name: "Córdoba Nicaraguense/Dólar Americano",
  },
  {
    from_to: "BOB-USD",
    name: "Boliviano/Dólar Americano",
  },
  {
    from_to: "KRW-USD",
    name: "Won Sul-Coreano/Dólar Americano",
  },
  {
    from_to: "EGP-USD",
    name: "Libra Egípcia/Dólar Americano",
  },
  {
    from_to: "USD-BYN",
    name: "Dólar Americano/Rublo Bielorrusso",
  },
  {
    from_to: "USD-MZN",
    name: "Dólar Americano/Metical de Moçambique",
  },
  {
    from_to: "INR-USD",
    name: "Rúpia Indiana/Dólar Americano",
  },
  {
    from_to: "JOD-USD",
    name: "Dinar Jordaniano/Dólar Americano",
  },
  {
    from_to: "KWD-USD",
    name: "Dinar Kuwaitiano/Dólar Americano",
  },
  {
    from_to: "USD-AZN",
    name: "Dólar Americano/Manat Azeri",
  },
  {
    from_to: "USD-CNH",
    name: "Dólar Americano/Yuan chinês offshore",
  },
  {
    from_to: "USD-KGS",
    name: "Dólar Americano/Som Quirguistanês",
  },
  {
    from_to: "USD-TJS",
    name: "Dólar Americano/Somoni do Tajiquistão",
  },
  {
    from_to: "USD-RUB",
    name: "Dólar Americano/Rublo Russo",
  },
  {
    from_to: "MYR-USD",
    name: "Ringgit Malaio/Dólar Americano",
  },
  {
    from_to: "UAH-USD",
    name: "Hryvinia Ucraniana/Dólar Americano",
  },
  {
    from_to: "HUF-USD",
    name: "Florim Húngaro/Dólar Americano",
  },
  {
    from_to: "IDR-USD",
    name: "Rupia Indonésia/Dólar Americano",
  },
  {
    from_to: "USD-AOA",
    name: "Dólar Americano/Kwanza Angolano",
  },
  {
    from_to: "VND-USD",
    name: "Dong Vietnamita/Dólar Americano",
  },
  {
    from_to: "BYN-USD",
    name: "Rublo Bielorrusso/Dólar Americano",
  },
  {
    from_to: "XBR-USD",
    name: "Brent Spot/Dólar Americano",
  },
  {
    from_to: "THB-USD",
    name: "Baht Tailandês/Dólar Americano",
  },
  {
    from_to: "PHP-USD",
    name: "Peso Filipino/Dólar Americano",
  },
  {
    from_to: "USD-TMT",
    name: "Dólar Americano/TMT",
  },
  {
    from_to: "XAGG-USD",
    name: "Prata/Dólar Americano",
  },
  {
    from_to: "USD-MNT",
    name: "Dólar Americano/Mongolian Tugrik",
  },
  {
    from_to: "USD-AFN",
    name: "Dólar Americano/Afghani do Afeganistão",
  },
  {
    from_to: "AFN-USD",
    name: "Afghani do Afeganistão/Dólar Americano",
  },
  {
    from_to: "SYP-USD",
    name: "Libra Síria/Dólar Americano",
  },
  {
    from_to: "IRR-USD",
    name: "Rial Iraniano/Dólar Americano",
  },
  {
    from_to: "IQD-USD",
    name: "Dinar Iraquiano/Dólar Americano",
  },
  {
    from_to: "USD-NGNI",
    name: "Dólar Americano/Naira Nigeriana",
  },
  {
    from_to: "USD-ZWL",
    name: "Dólar Americano/Dólar Zimbabuense",
  },
  {
    from_to: "BRL-ARS",
    name: "Real Brasileiro/Peso Argentino",
  },
  {
    from_to: "BRL-AUD",
    name: "Real Brasileiro/Dólar Australiano",
  },
  {
    from_to: "BRL-CAD",
    name: "Real Brasileiro/Dólar Canadense",
  },
  {
    from_to: "BRL-CHF",
    name: "Real Brasileiro/Franco Suíço",
  },
  {
    from_to: "BRL-CLP",
    name: "Real Brasileiro/Peso Chileno",
  },
  {
    from_to: "BRL-DKK",
    name: "Real Brasileiro/Coroa Dinamarquesa",
  },
  {
    from_to: "BRL-HKD",
    name: "Real Brasileiro/Dólar de Hong Kong",
  },
  {
    from_to: "BRL-JPY",
    name: "Real Brasileiro/Iene Japonês",
  },
  {
    from_to: "BRL-MXN",
    name: "Real Brasileiro/Peso Mexicano",
  },
  {
    from_to: "BRL-SGD",
    name: "Real Brasileiro/Dólar de Cingapura",
  },
  {
    from_to: "SGD-BRL",
    name: "Dólar de Cingapura/Real Brasileiro",
  },
  {
    from_to: "AED-BRL",
    name: "Dirham dos Emirados/Real Brasileiro",
  },
  {
    from_to: "BRL-AED",
    name: "Real Brasileiro/Dirham dos Emirados",
  },
  {
    from_to: "BRL-BBD",
    name: "Real Brasileiro/Dólar de Barbados",
  },
  {
    from_to: "BRL-BHD",
    name: "Real Brasileiro/Dinar do Bahrein",
  },
  {
    from_to: "BRL-CNY",
    name: "Real Brasileiro/Yuan Chinês",
  },
  {
    from_to: "BRL-CZK",
    name: "Real Brasileiro/Coroa Checa",
  },
  {
    from_to: "BRL-EGP",
    name: "Real Brasileiro/Libra Egípcia",
  },
  {
    from_to: "BRL-GBP",
    name: "Real Brasileiro/Libra Esterlina",
  },
  {
    from_to: "BRL-HUF",
    name: "Real Brasileiro/Florim Húngaro",
  },
  {
    from_to: "BRL-IDR",
    name: "Real Brasileiro/Rupia Indonésia",
  },
  {
    from_to: "BRL-ILS",
    name: "Real Brasileiro/Novo Shekel Israelense",
  },
  {
    from_to: "BRL-INR",
    name: "Real Brasileiro/Rúpia Indiana",
  },
  {
    from_to: "BRL-ISK",
    name: "Real Brasileiro/Coroa Islandesa",
  },
  {
    from_to: "BRL-JMD",
    name: "Real Brasileiro/Dólar Jamaicano",
  },
  {
    from_to: "BRL-JOD",
    name: "Real Brasileiro/Dinar Jordaniano",
  },
  {
    from_to: "BRL-KES",
    name: "Real Brasileiro/Shilling Queniano",
  },
  {
    from_to: "BRL-KRW",
    name: "Real Brasileiro/Won Sul-Coreano",
  },
  {
    from_to: "BRL-LBP",
    name: "Real Brasileiro/Libra Libanesa",
  },
  {
    from_to: "BRL-LKR",
    name: "Real Brasileiro/Rúpia de Sri Lanka",
  },
  {
    from_to: "BRL-MAD",
    name: "Real Brasileiro/Dirham Marroquino",
  },
  {
    from_to: "BRL-MYR",
    name: "Real Brasileiro/Ringgit Malaio",
  },
  {
    from_to: "BRL-NAD",
    name: "Real Brasileiro/Dólar Namíbio",
  },
  {
    from_to: "BRL-NOK",
    name: "Real Brasileiro/Coroa Norueguesa",
  },
  {
    from_to: "BRL-NPR",
    name: "Real Brasileiro/Rúpia Nepalesa",
  },
  {
    from_to: "BRL-NZD",
    name: "Real Brasileiro/Dólar Neozelandês",
  },
  {
    from_to: "BRL-OMR",
    name: "Real Brasileiro/Rial Omanense",
  },
  {
    from_to: "BRL-PAB",
    name: "Real Brasileiro/Balboa Panamenho",
  },
  {
    from_to: "BRL-PHP",
    name: "Real Brasileiro/Peso Filipino",
  },
  {
    from_to: "BRL-PKR",
    name: "Real Brasileiro/Rúpia Paquistanesa",
  },
  {
    from_to: "BRL-PLN",
    name: "Real Brasileiro/Zlóti Polonês",
  },
  {
    from_to: "BRL-QAR",
    name: "Real Brasileiro/Rial Catarense",
  },
  {
    from_to: "BRL-RON",
    name: "Real Brasileiro/Leu Romeno",
  },
  {
    from_to: "BRL-RUB",
    name: "Real Brasileiro/Rublo Russo",
  },
  {
    from_to: "BRL-SAR",
    name: "Real Brasileiro/Riyal Saudita",
  },
  {
    from_to: "BRL-SEK",
    name: "Real Brasileiro/Coroa Sueca",
  },
  {
    from_to: "BRL-THB",
    name: "Real Brasileiro/Baht Tailandês",
  },
  {
    from_to: "BRL-TRY",
    name: "Real Brasileiro/Nova Lira Turca",
  },
  {
    from_to: "BRL-VEF",
    name: "Real Brasileiro/Bolívar Venezuelano",
  },
  {
    from_to: "BRL-XAF",
    name: "Real Brasileiro/Franco CFA Central",
  },
  {
    from_to: "BRL-XCD",
    name: "Real Brasileiro/Dólar do Caribe Oriental",
  },
  {
    from_to: "BRL-XOF",
    name: "Real Brasileiro/Franco CFA Ocidental",
  },
  {
    from_to: "BRL-ZAR",
    name: "Real Brasileiro/Rand Sul-Africano",
  },
  {
    from_to: "BRL-TWD",
    name: "Real Brasileiro/Dólar Taiuanês",
  },
  {
    from_to: "DKK-BRL",
    name: "Coroa Dinamarquesa/Real Brasileiro",
  },
  {
    from_to: "HKD-BRL",
    name: "Dólar de Hong Kong/Real Brasileiro",
  },
  {
    from_to: "MXN-BRL",
    name: "Peso Mexicano/Real Brasileiro",
  },
  {
    from_to: "NOK-BRL",
    name: "Coroa Norueguesa/Real Brasileiro",
  },
  {
    from_to: "NZD-BRL",
    name: "Dólar Neozelandês/Real Brasileiro",
  },
  {
    from_to: "PLN-BRL",
    name: "Zlóti Polonês/Real Brasileiro",
  },
  {
    from_to: "SAR-BRL",
    name: "Riyal Saudita/Real Brasileiro",
  },
  {
    from_to: "SEK-BRL",
    name: "Coroa Sueca/Real Brasileiro",
  },
  {
    from_to: "THB-BRL",
    name: "Baht Tailandês/Real Brasileiro",
  },
  {
    from_to: "TRY-BRL",
    name: "Nova Lira Turca/Real Brasileiro",
  },
  {
    from_to: "TWD-BRL",
    name: "Dólar Taiuanês/Real Brasileiro",
  },
  {
    from_to: "VEF-BRL",
    name: "Bolívar Venezuelano/Real Brasileiro",
  },
  {
    from_to: "ZAR-BRL",
    name: "Rand Sul-Africano/Real Brasileiro",
  },
  {
    from_to: "BRL-PYG",
    name: "Real Brasileiro/Guarani Paraguaio",
  },
  {
    from_to: "BRL-UYU",
    name: "Real Brasileiro/Peso Uruguaio",
  },
  {
    from_to: "BRL-COP",
    name: "Real Brasileiro/Peso Colombiano",
  },
  {
    from_to: "BRL-PEN",
    name: "Real Brasileiro/Sol do Peru",
  },
  {
    from_to: "BRL-BOB",
    name: "Real Brasileiro/Boliviano",
  },
  {
    from_to: "CLP-BRL",
    name: "Peso Chileno/Real Brasileiro",
  },
  {
    from_to: "PYG-BRL",
    name: "Guarani Paraguaio/Real Brasileiro",
  },
  {
    from_to: "UYU-BRL",
    name: "Peso Uruguaio/Real Brasileiro",
  },
  {
    from_to: "COP-BRL",
    name: "Peso Colombiano/Real Brasileiro",
  },
  {
    from_to: "PEN-BRL",
    name: "Sol do Peru/Real Brasileiro",
  },
  {
    from_to: "BOB-BRL",
    name: "Boliviano/Real Brasileiro",
  },
  {
    from_to: "RUB-BRL",
    name: "Rublo Russo/Real Brasileiro",
  },
  {
    from_to: "INR-BRL",
    name: "Rúpia Indiana/Real Brasileiro",
  },
  {
    from_to: "EUR-GBP",
    name: "Euro/Libra Esterlina",
  },
  {
    from_to: "EUR-JPY",
    name: "Euro/Iene Japonês",
  },
  {
    from_to: "EUR-CHF",
    name: "Euro/Franco Suíço",
  },
  {
    from_to: "EUR-AUD",
    name: "Euro/Dólar Australiano",
  },
  {
    from_to: "EUR-CAD",
    name: "Euro/Dólar Canadense",
  },
  {
    from_to: "EUR-NOK",
    name: "Euro/Coroa Norueguesa",
  },
  {
    from_to: "EUR-DKK",
    name: "Euro/Coroa Dinamarquesa",
  },
  {
    from_to: "EUR-PLN",
    name: "Euro/Zlóti Polonês",
  },
  {
    from_to: "EUR-NZD",
    name: "Euro/Dólar Neozelandês",
  },
  {
    from_to: "EUR-SEK",
    name: "Euro/Coroa Sueca",
  },
  {
    from_to: "EUR-ILS",
    name: "Euro/Novo Shekel Israelense",
  },
  {
    from_to: "EUR-TRY",
    name: "Euro/Nova Lira Turca",
  },
  {
    from_to: "EUR-THB",
    name: "Euro/Baht Tailandês",
  },
  {
    from_to: "EUR-ZAR",
    name: "Euro/Rand Sul-Africano",
  },
  {
    from_to: "EUR-MXN",
    name: "Euro/Peso Mexicano",
  },
  {
    from_to: "EUR-SGD",
    name: "Euro/Dólar de Cingapura",
  },
  {
    from_to: "EUR-HUF",
    name: "Euro/Florim Húngaro",
  },
  {
    from_to: "EUR-HKD",
    name: "Euro/Dólar de Hong Kong",
  },
  {
    from_to: "EUR-CZK",
    name: "Euro/Coroa Checa",
  },
  {
    from_to: "EUR-KRW",
    name: "Euro/Won Sul-Coreano",
  },
  {
    from_to: "BHD-EUR",
    name: "Dinar do Bahrein/Euro",
  },
  {
    from_to: "EUR-AED",
    name: "Euro/Dirham dos Emirados",
  },
  {
    from_to: "EUR-AFN",
    name: "Euro/Afghani do Afeganistão",
  },
  {
    from_to: "EUR-ALL",
    name: "Euro/Lek Albanês",
  },
  {
    from_to: "EUR-ANG",
    name: "Euro/Guilder das Antilhas",
  },
  {
    from_to: "EUR-ARS",
    name: "Euro/Peso Argentino",
  },
  {
    from_to: "EUR-BAM",
    name: "Euro/Marco Conversível",
  },
  {
    from_to: "EUR-BBD",
    name: "Euro/Dólar de Barbados",
  },
  {
    from_to: "EUR-BDT",
    name: "Euro/Taka de Bangladesh",
  },
  {
    from_to: "EUR-BGN",
    name: "Euro/Lev Búlgaro",
  },
  {
    from_to: "EUR-BHD",
    name: "Euro/Dinar do Bahrein",
  },
  {
    from_to: "EUR-BIF",
    name: "Euro/Franco Burundinense",
  },
  {
    from_to: "EUR-BND",
    name: "Euro/Dólar de Brunei",
  },
  {
    from_to: "EUR-BOB",
    name: "Euro/Boliviano",
  },
  {
    from_to: "EUR-BSD",
    name: "Euro/Dólar das Bahamas",
  },
  {
    from_to: "EUR-BWP",
    name: "Euro/Pula de Botswana",
  },
  {
    from_to: "EUR-BYN",
    name: "Euro/Rublo Bielorrusso",
  },
  {
    from_to: "EUR-BZD",
    name: "Euro/Dólar de Belize",
  },
  {
    from_to: "EUR-CLP",
    name: "Euro/Peso Chileno",
  },
  {
    from_to: "EUR-CNY",
    name: "Euro/Yuan Chinês",
  },
  {
    from_to: "EUR-COP",
    name: "Euro/Peso Colombiano",
  },
  {
    from_to: "EUR-CRC",
    name: "Euro/Colón Costarriquenho",
  },
  {
    from_to: "EUR-CUP",
    name: "Euro/Peso Cubano",
  },
  {
    from_to: "EUR-CVE",
    name: "Euro/Escudo cabo-verdiano",
  },
  {
    from_to: "EUR-DJF",
    name: "Euro/Franco do Djubouti",
  },
  {
    from_to: "EUR-DOP",
    name: "Euro/Peso Dominicano",
  },
  {
    from_to: "EUR-DZD",
    name: "Euro/Dinar Argelino",
  },
  {
    from_to: "EUR-EGP",
    name: "Euro/Libra Egípcia",
  },
  {
    from_to: "EUR-ETB",
    name: "Euro/Birr Etíope",
  },
  {
    from_to: "EUR-FJD",
    name: "Euro/Dólar de Fiji",
  },
  {
    from_to: "EUR-GHS",
    name: "Euro/Cedi Ganês",
  },
  {
    from_to: "EUR-GMD",
    name: "Euro/Dalasi da Gâmbia",
  },
  {
    from_to: "EUR-GNF",
    name: "Euro/Franco de Guiné",
  },
  {
    from_to: "EUR-GTQ",
    name: "Euro/Quetzal Guatemalteco",
  },
  {
    from_to: "EUR-HNL",
    name: "Euro/Lempira Hondurenha",
  },
  {
    from_to: "EUR-HRK",
    name: "Euro/Kuna Croata",
  },
  {
    from_to: "EUR-HTG",
    name: "Euro/Gourde Haitiano",
  },
  {
    from_to: "EUR-IDR",
    name: "Euro/Rupia Indonésia",
  },
  {
    from_to: "EUR-INR",
    name: "Euro/Rúpia Indiana",
  },
  {
    from_to: "EUR-IQD",
    name: "Euro/Dinar Iraquiano",
  },
  {
    from_to: "EUR-IRR",
    name: "Euro/Rial Iraniano",
  },
  {
    from_to: "EUR-ISK",
    name: "Euro/Coroa Islandesa",
  },
  {
    from_to: "EUR-JMD",
    name: "Euro/Dólar Jamaicano",
  },
  {
    from_to: "EUR-JOD",
    name: "Euro/Dinar Jordaniano",
  },
  {
    from_to: "EUR-KES",
    name: "Euro/Shilling Queniano",
  },
  {
    from_to: "EUR-KHR",
    name: "Euro/Riel Cambojano",
  },
  {
    from_to: "EUR-KWD",
    name: "Euro/Dinar Kuwaitiano",
  },
  {
    from_to: "EUR-KYD",
    name: "Euro/Dólar das Ilhas Cayman",
  },
  {
    from_to: "EUR-KZT",
    name: "Euro/Tengue Cazaquistanês",
  },
  {
    from_to: "EUR-LAK",
    name: "Euro/Kip Laosiano",
  },
  {
    from_to: "EUR-LBP",
    name: "Euro/Libra Libanesa",
  },
  {
    from_to: "EUR-LKR",
    name: "Euro/Rúpia de Sri Lanka",
  },
  {
    from_to: "EUR-LSL",
    name: "Euro/Loti do Lesoto",
  },
  {
    from_to: "EUR-LYD",
    name: "Euro/Dinar Líbio",
  },
  {
    from_to: "EUR-MAD",
    name: "Euro/Dirham Marroquino",
  },
  {
    from_to: "EUR-MDL",
    name: "Euro/Leu Moldavo",
  },
  {
    from_to: "EUR-MGA",
    name: "Euro/Ariary Madagascarense",
  },
  {
    from_to: "EUR-MKD",
    name: "Euro/Denar Macedônio",
  },
  {
    from_to: "EUR-MMK",
    name: "Euro/Kyat de Mianmar",
  },
  {
    from_to: "EUR-MOP",
    name: "Euro/Pataca de Macau",
  },
  {
    from_to: "EUR-MRO",
    name: "Euro/Ouguiya Mauritana",
  },
  {
    from_to: "EUR-MUR",
    name: "Euro/Rúpia Mauriciana",
  },
  {
    from_to: "EUR-MWK",
    name: "Euro/Kwacha Malauiana",
  },
  {
    from_to: "EUR-MYR",
    name: "Euro/Ringgit Malaio",
  },
  {
    from_to: "EUR-NAD",
    name: "Euro/Dólar Namíbio",
  },
  {
    from_to: "EUR-NGN",
    name: "Euro/Naira Nigeriana",
  },
  {
    from_to: "EUR-NIO",
    name: "Euro/Córdoba Nicaraguense",
  },
  {
    from_to: "EUR-NPR",
    name: "Euro/Rúpia Nepalesa",
  },
  {
    from_to: "EUR-OMR",
    name: "Euro/Rial Omanense",
  },
  {
    from_to: "EUR-PAB",
    name: "Euro/Balboa Panamenho",
  },
  {
    from_to: "EUR-PEN",
    name: "Euro/Sol do Peru",
  },
  {
    from_to: "EUR-PGK",
    name: "Euro/Kina Papua-Nova Guiné",
  },
  {
    from_to: "EUR-PHP",
    name: "Euro/Peso Filipino",
  },
  {
    from_to: "EUR-PKR",
    name: "Euro/Rúpia Paquistanesa",
  },
  {
    from_to: "EUR-PYG",
    name: "Euro/Guarani Paraguaio",
  },
  {
    from_to: "EUR-QAR",
    name: "Euro/Rial Catarense",
  },
  {
    from_to: "EUR-RON",
    name: "Euro/Leu Romeno",
  },
  {
    from_to: "EUR-RSD",
    name: "Euro/Dinar Sérvio",
  },
  {
    from_to: "EUR-RWF",
    name: "Euro/Franco Ruandês",
  },
  {
    from_to: "EUR-SAR",
    name: "Euro/Riyal Saudita",
  },
  {
    from_to: "EUR-SCR",
    name: "Euro/Rúpias de Seicheles",
  },
  {
    from_to: "EUR-SDG",
    name: "Euro/Libra Sudanesa",
  },
  {
    from_to: "EUR-SDR",
    name: "Euro/DSE",
  },
  {
    from_to: "EUR-SOS",
    name: "Euro/Shilling Somaliano",
  },
  {
    from_to: "EUR-STD",
    name: "Euro/Dobra São Tomé/Príncipe",
  },
  {
    from_to: "EUR-SVC",
    name: "Euro/Colon de El Salvador",
  },
  {
    from_to: "EUR-SYP",
    name: "Euro/Libra Síria",
  },
  {
    from_to: "EUR-SZL",
    name: "Euro/Lilangeni Suazilandês",
  },
  {
    from_to: "EUR-TND",
    name: "Euro/Dinar Tunisiano",
  },
  {
    from_to: "EUR-TTD",
    name: "Euro/Dólar de Trinidad",
  },
  {
    from_to: "EUR-TWD",
    name: "Euro/Dólar Taiuanês",
  },
  {
    from_to: "EUR-TZS",
    name: "Euro/Shilling Tanzaniano",
  },
  {
    from_to: "EUR-UAH",
    name: "Euro/Hryvinia Ucraniana",
  },
  {
    from_to: "EUR-UGX",
    name: "Euro/Shilling Ugandês",
  },
  {
    from_to: "EUR-UYU",
    name: "Euro/Peso Uruguaio",
  },
  {
    from_to: "EUR-UZS",
    name: "Euro/Som Uzbequistanês",
  },
  {
    from_to: "EUR-VEF",
    name: "Euro/Bolívar Venezuelano",
  },
  {
    from_to: "EUR-VND",
    name: "Euro/Dong Vietnamita",
  },
  {
    from_to: "EUR-XAF",
    name: "Euro/Franco CFA Central",
  },
  {
    from_to: "EUR-XOF",
    name: "Euro/Franco CFA Ocidental",
  },
  {
    from_to: "EUR-XPF",
    name: "Euro/Franco CFP",
  },
  {
    from_to: "EUR-ZMK",
    name: "Euro/Kwacha Zambiana",
  },
  {
    from_to: "GHS-EUR",
    name: "Cedi Ganês/Euro",
  },
  {
    from_to: "NZD-EUR",
    name: "Dólar Neozelandês/Euro",
  },
  {
    from_to: "SGD-EUR",
    name: "Dólar de Cingapura/Euro",
  },
  {
    from_to: "AED-EUR",
    name: "Dirham dos Emirados/Euro",
  },
  {
    from_to: "DKK-EUR",
    name: "Coroa Dinamarquesa/Euro",
  },
  {
    from_to: "EUR-XCD",
    name: "Euro/Dólar do Caribe Oriental",
  },
  {
    from_to: "HKD-EUR",
    name: "Dólar de Hong Kong/Euro",
  },
  {
    from_to: "MXN-EUR",
    name: "Peso Mexicano/Euro",
  },
  {
    from_to: "NOK-EUR",
    name: "Coroa Norueguesa/Euro",
  },
  {
    from_to: "PLN-EUR",
    name: "Zlóti Polonês/Euro",
  },
  {
    from_to: "RUB-EUR",
    name: "Rublo Russo/Euro",
  },
  {
    from_to: "SAR-EUR",
    name: "Riyal Saudita/Euro",
  },
  {
    from_to: "SEK-EUR",
    name: "Coroa Sueca/Euro",
  },
  {
    from_to: "TRY-EUR",
    name: "Nova Lira Turca/Euro",
  },
  {
    from_to: "TWD-EUR",
    name: "Dólar Taiuanês/Euro",
  },
  {
    from_to: "VEF-EUR",
    name: "Bolívar Venezuelano/Euro",
  },
  {
    from_to: "ZAR-EUR",
    name: "Rand Sul-Africano/Euro",
  },
  {
    from_to: "MAD-EUR",
    name: "Dirham Marroquino/Euro",
  },
  {
    from_to: "KRW-EUR",
    name: "Won Sul-Coreano/Euro",
  },
  {
    from_to: "EGP-EUR",
    name: "Libra Egípcia/Euro",
  },
  {
    from_to: "EUR-MZN",
    name: "Euro/Metical de Moçambique",
  },
  {
    from_to: "INR-EUR",
    name: "Rúpia Indiana/Euro",
  },
  {
    from_to: "JOD-EUR",
    name: "Dinar Jordaniano/Euro",
  },
  {
    from_to: "KWD-EUR",
    name: "Dinar Kuwaitiano/Euro",
  },
  {
    from_to: "EUR-AZN",
    name: "Euro/Manat Azeri",
  },
  {
    from_to: "EUR-AMD",
    name: "Euro/Dram Armênio",
  },
  {
    from_to: "EUR-TJS",
    name: "Euro/Somoni do Tajiquistão",
  },
  {
    from_to: "EUR-RUB",
    name: "Euro/Rublo Russo",
  },
  {
    from_to: "HUF-EUR",
    name: "Florim Húngaro/Euro",
  },
  {
    from_to: "GEL-EUR",
    name: "Lari Georgiano/Euro",
  },
  {
    from_to: "EUR-GEL",
    name: "Euro/Lari Georgiano",
  },
  {
    from_to: "IDR-EUR",
    name: "Rupia Indonésia/Euro",
  },
  {
    from_to: "EUR-AOA",
    name: "Euro/Kwanza Angolano",
  },
  {
    from_to: "BYN-EUR",
    name: "Rublo Bielorrusso/Euro",
  },
  {
    from_to: "XAGG-EUR",
    name: "Prata/Euro",
  },
  {
    from_to: "PEN-EUR",
    name: "Sol do Peru/Euro",
  },
];

export default exchangeData;
