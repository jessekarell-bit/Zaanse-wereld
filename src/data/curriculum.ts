export interface BouwContent {
  description: string;
  learningGoals: string[];
  activities: string[];
}

export interface Bouw {
  onderbouw?: BouwContent | string;
  middenbouw?: BouwContent | string;
  bovenbouw?: BouwContent | string;
}

export interface Resource {
  title: string;
  type: 'boek' | 'excursie';
  description?: string;
}

export interface Theme {
  id: string;
  name: string;
  description?: string;
  introduction?: string;
  bouw: Bouw;
  resources?: Resource[];
}

export interface CurriculumData {
  coreConcept: {
    strategy: string;
    framework: string;
    methodology: string;
  };
  themes: Theme[];
  didactics: string[];
}

export const themes: CurriculumData = {
  coreConcept: {
    strategy: "30% Vrije Ruimte (70% National SLO standards, 30% Zaanse thematische cyclus)",
    framework: "Biesta's Triple Qualification (Qualification, Socialization, Subjectification)",
    methodology: "5-Phase Structure (Goal -> Narrative -> Activation/Excursion -> Concretization/Research -> Closing)"
  },
  themes: [
    {
      id: "de-molens",
      name: "De Wereld van de Molens",
      introduction: "De Zaanstreek is het oudste industriegebied van Europa, waar windmolens de motor waren van de eerste industriële revolutie. Van houtzaagmolens tot cacaomolens - ontdek hoe windkracht de Zaanstreek vormde.",
      bouw: {
        onderbouw: {
          description: "Zintuiglijke ervaring van wind en beweging, molens als reuzen",
          learningGoals: [
            "Kinderen ervaren wind en beweging met al hun zintuigen",
            "Kennis maken met molens als 'reuzen' in het landschap",
            "Begrijpen dat wind kracht kan geven"
          ],
          activities: [
            "Excursie naar De Zaansche Molen met zintuiglijke opdrachten",
            "Verhaal over molens vertellen en naspelen",
            "Windproeven: wat kan wind doen?"
          ]
        },
        middenbouw: {
          description: "Houtzaagmolens, cacaomolens, techniek van wind naar stoom",
          learningGoals: [
            "Herkenning van verschillende molentypen (hout, cacao, olie)",
            "Begrijpen hoe molens werken en wat ze produceren",
            "Kennis van de transitie van wind naar stoomkracht"
          ],
          activities: [
            "Excursie naar molens in de Zaanstreek",
            "Bouwen van een miniatuur molen",
            "Onderzoek naar de geschiedenis van molens"
          ]
        },
        bovenbouw: {
          description: "Industriële revolutie, energietransitie, duurzame technologie",
          learningGoals: [
            "Systeemdenken toepassen op industriële ontwikkeling",
            "Begrijpen van energietransitie van wind naar stoom naar circulair",
            "Kritisch nadenken over duurzame technologie"
          ],
          activities: [
            "Industriële ontwikkeling in kaart brengen",
            "Debat over energietransitie",
            "Onderzoek naar moderne windenergie"
          ]
        }
      },
      resources: [
        { title: "Wind in de wieken, Jort en Jikke en de wind", type: "boek", description: "Kinderboek over molens" },
        { title: "Excursie De Zaansche Molen", type: "excursie", description: "Begeleide rondleiding" },
        { title: "Cacao langs de Zaan; de molens - de fabrieken", type: "boek", description: "Informatief boek voor bovenbouw" }
      ]
    },
    {
      id: "verkade-en-de-fabriek",
      name: "De Wereld van Verkade & de Fabriek",
      introduction: "De Verkade-fabriek staat symbool voor de industriële geschiedenis van de Zaanstreek. Ontdek het verhaal van de Verkade-meisjes, arbeiderssolidariteit en de sociale geschiedenis van de fabriek.",
      bouw: {
        onderbouw: {
          description: "Fabrieksgeluiden, geuren en beweging - de fabriek als magische plek",
          learningGoals: [
            "Kinderen ervaren de fabriek met al hun zintuigen",
            "Kennis maken met het verhaal van de Verkade-meisjes",
            "Begrijpen dat fabrieken producten maken"
          ],
          activities: [
            "Verhaal over Verkade-meisjes vertellen en naspelen",
            "Verkade-producten proeven en vergelijken",
            "Fabrieksgeluiden naspelen"
          ]
        },
        middenbouw: {
          description: "Arbeidersleven, plaatjesalbums, sociale geschiedenis",
          learningGoals: [
            "Begrijpen van het leven van arbeiders in de fabriek",
            "Kennis van Verkade-plaatjesalbums en marketing",
            "Inzicht in de sociale geschiedenis van de Zaanstreek"
          ],
          activities: [
            "Excursie naar Zaans Museum (Verkade-collectie)",
            "Plaatjesalbum maken",
            "Onderzoek naar arbeidersgeschiedenis"
          ]
        },
        bovenbouw: {
          description: "Arbeiderssolidariteit, sociale strijd, democratie en burgerschap",
          learningGoals: [
            "Begrijpen van arbeiderssolidariteit en vakbonden",
            "Kennis van sociale strijd en verworven rechten",
            "Inzicht in de Rode Zaan en democratische ontwikkeling"
          ],
          activities: [
            "Onderzoek naar de Rode Zaan",
            "Debat over arbeidsrechten",
            "Historisch onderzoek naar sociale geschiedenis"
          ]
        }
      },
      resources: [
        { title: "Verkade-plaatjesalbums", type: "boek", description: "Historische plaatjesalbums" },
        { title: "Excursie Zaans Museum", type: "excursie", description: "Verkade-collectie" }
      ]
    },
    {
      id: "walvisvaart",
      name: "De Wereld van de Walvisvaart",
      introduction: "De Zaanstreek was een centrum van scheepsbouw en walvisvaart. Van Jisp tot de wereldzeeën - ontdek hoe Zaanse schepen de wereld veroverden.",
      bouw: {
        onderbouw: {
          description: "Schepen als reuzen, walvissen en de zee",
          learningGoals: [
            "Kinderen maken kennis met schepen en walvissen",
            "Verwondering over de grote zee",
            "Begrijpen dat schepen ver kunnen reizen"
          ],
          activities: [
            "Verhaal over walvisvaarders vertellen",
            "Schepen tekenen en bouwen",
            "Walvisweken in het Zaans Museum"
          ]
        },
        middenbouw: {
          description: "Scheepsbouw in Jisp, walvisvaart, wereldhandel",
          learningGoals: [
            "Begrijpen van scheepsbouwtechnieken",
            "Kennis van walvisvaart en de economie",
            "Inzicht in wereldhandel en globalisering"
          ],
          activities: [
            "Excursie naar scheepswerf of museum",
            "Onderzoek naar walvisvaart",
            "Wereldkaart maken met handelsroutes"
          ]
        },
        bovenbouw: {
          description: "Globalisering, economische impact, duurzaamheid en ethiek",
          learningGoals: [
            "Begrijpen van historische globalisering",
            "Kritisch nadenken over economische impact",
            "Onderzoek naar duurzaamheid en ethiek van jacht"
          ],
          activities: [
            "Onderzoek naar economische impact van walvisvaart",
            "Debat over duurzaamheid en ethiek",
            "Historisch onderzoek naar Zaanse scheepsbouw"
          ]
        }
      },
      resources: [
        { title: "Walvisvaarders", type: "boek", description: "Jeugdboek over walvisvaart" },
        { title: "Walvisweken Zaans Museum", type: "excursie", description: "Educatief programma" }
      ]
    },
    {
      id: "de-polders",
      name: "De Wereld van de Polders",
      introduction: "De Zaanse polders vertellen het verhaal van de strijd tegen het water. Van het Guisveld tot waterbeheer - ontdek hoe de Zaanstreek het water temde.",
      bouw: {
        onderbouw: {
          description: "Water voelen, polders als natte en droge plekken",
          learningGoals: [
            "Kinderen ervaren water en polders",
            "Begrijpen van nat en droog",
            "Kennis maken met het Guisveld"
          ],
          activities: [
            "Excursie naar polders en water",
            "Waterproeven en experimenten",
            "Verhaal over waterbeheer"
          ]
        },
        middenbouw: {
          description: "Waterbeheer, polders, molenbiotoop",
          learningGoals: [
            "Begrijpen van waterbeheer en polders",
            "Kennis van molenbiotoop en waterhuishouding",
            "Inzicht in de strijd tegen het water"
          ],
          activities: [
            "Excursie naar Guisveld",
            "Onderzoek naar waterbeheer",
            "Polders in kaart brengen"
          ]
        },
        bovenbouw: {
          description: "Systeemdenken, klimaatadaptatie, duurzaamheid",
          learningGoals: [
            "Systeemdenken toepassen op waterbeheer",
            "Begrijpen van klimaatadaptatie",
            "Kritisch nadenken over duurzaamheid"
          ],
          activities: [
            "Waterbeheersysteem analyseren",
            "Debat over klimaatadaptatie",
            "Onderzoek naar toekomstscenario's"
          ]
        }
      },
      resources: [
        { title: "Polder", type: "boek", description: "Kinderboek over polders" },
        { title: "Excursie Guisveld", type: "excursie", description: "Natuurgebied" }
      ]
    },
    {
      id: "monet-en-de-zaan",
      name: "De Wereld van Monet & de Zaan",
      introduction: "Claude Monet schilderde de Zaanstreek en liet zien hoe kunst en landschap samenvallen. Ontdek de Zaan door de ogen van Monet en andere kunstenaars.",
      bouw: {
        onderbouw: {
          description: "Kleuren en vormen in het landschap, Monet's schilderijen",
          learningGoals: [
            "Kinderen ontdekken kleuren en vormen",
            "Kennis maken met Monet's schilderijen",
            "Verwondering over kunst en landschap"
          ],
          activities: [
            "Monet's schilderijen bekijken",
            "Zelf schilderen in de stijl van Monet",
            "Kleuren zoeken in het landschap"
          ]
        },
        middenbouw: {
          description: "Kunstzinnige oriëntatie, landschap en cultuur",
          learningGoals: [
            "Begrijpen van kunstzinnige oriëntatie",
            "Kennis van Monet's verblijf in Zaandam",
            "Inzicht in de relatie tussen kunst en landschap"
          ],
          activities: [
            "Excursie naar Zaandam (Monet-locaties)",
            "Onderzoek naar Monet's werk",
            "Eigen kunstwerk maken"
          ]
        },
        bovenbouw: {
          description: "Kunstgeschiedenis, culturele identiteit, wereldwijde invloed",
          learningGoals: [
            "Begrijpen van kunstgeschiedenis en invloed",
            "Kritisch nadenken over culturele identiteit",
            "Onderzoek naar wereldwijde invloed van Zaanse kunst"
          ],
          activities: [
            "Onderzoek naar Monet en de Zaanstreek",
            "Debat over culturele identiteit",
            "Kunsthistorisch onderzoek"
          ]
        }
      },
      resources: [
        { title: "De schatkaart van Monet", type: "boek", description: "Kinderboek over Monet" },
        { title: "Claude Monet in Zaandam", type: "boek", description: "Informatief boek" }
      ]
    },
    {
      id: "de-rode-zaan",
      name: "De Wereld van de Rode Zaan",
      introduction: "De Zaanstreek heeft een rijke traditie van arbeiderssolidariteit en sociale strijd. Van coöperaties tot verenigingsleven - ontdek de democratische oefenplaats van de Rode Zaan.",
      bouw: {
        onderbouw: {
          description: "Samen spelen, samen delen, vriendschap",
          learningGoals: [
            "Kinderen leren samenwerken",
            "Begrijpen van delen en solidariteit",
            "Kennis maken met verenigingsleven"
          ],
          activities: [
            "Samenwerkingsspellen",
            "Verhaal over vriendschap en solidariteit",
            "Bezoek aan vereniging"
          ]
        },
        middenbouw: {
          description: "Burgerschap, verenigingsleven, coöperaties",
          learningGoals: [
            "Begrijpen van burgerschap en participatie",
            "Kennis van verenigingsleven en coöperaties",
            "Inzicht in democratische processen"
          ],
          activities: [
            "Excursie naar coöperatie of vereniging",
            "Onderzoek naar verenigingsleven",
            "Eigen vereniging oprichten"
          ]
        },
        bovenbouw: {
          description: "Democratie, sociale strijd, burgerschapsvorming",
          learningGoals: [
            "Begrijpen van democratie en sociale strijd",
            "Kritisch nadenken over burgerschap",
            "Onderzoek naar de Rode Zaan"
          ],
          activities: [
            "Onderzoek naar de Rode Zaan",
            "Debat over democratie en burgerschap",
            "Historisch onderzoek naar sociale geschiedenis"
          ]
        }
      },
      resources: [
        { title: "Burgerschap - het Zaanplein", type: "boek", description: "Educatief materiaal" }
      ]
    },
    {
      id: "hembrug-en-innovatie",
      name: "De Wereld van Hembrug & Innovatie",
      introduction: "Het Hembrugterrein staat symbool voor transformatie en innovatie. Van munitiefabriek tot creatieve broedplaats - ontdek hoe de Zaanstreek zichzelf opnieuw uitvindt.",
      bouw: {
        onderbouw: {
          description: "Grote gebouwen, transformatie, nieuw en oud",
          learningGoals: [
            "Kinderen ontdekken grote gebouwen",
            "Begrijpen van transformatie",
            "Verwondering over nieuw en oud"
          ],
          activities: [
            "Excursie naar Hembrugterrein",
            "Gebouwen tekenen en bouwen",
            "Verhaal over transformatie"
          ]
        },
        middenbouw: {
          description: "Herbestemming, innovatie, techniek",
          learningGoals: [
            "Begrijpen van herbestemming",
            "Kennis van innovatie en techniek",
            "Inzicht in transformatieprocessen"
          ],
          activities: [
            "Excursie naar Hembrugterrein",
            "Onderzoek naar herbestemming",
            "Eigen innovatieproject"
          ]
        },
        bovenbouw: {
          description: "Technologische geletterdheid, toekomst, circulaire economie",
          learningGoals: [
            "Begrijpen van technologische geletterdheid",
            "Kritisch nadenken over toekomst",
            "Onderzoek naar circulaire economie"
          ],
          activities: [
            "Onderzoek naar Hembrugterrein",
            "Debat over toekomst en innovatie",
            "Onderzoek naar circulaire economie"
          ]
        }
      },
      resources: [
        { title: "Hembrugterrein", type: "excursie", description: "Bezoek aan het terrein" }
      ]
    },
    {
      id: "cacao-en-voedsel",
      name: "De Wereld van Cacao & Voedsel",
      introduction: "De Zaanstreek was de 'provisiekast van Nederland'. Van cacao tot voedselinnovatie - ontdek hoe de Zaanstreek voedsel produceert en innoveert.",
      bouw: {
        onderbouw: {
          description: "Cacao proeven, voedsel ontdekken, groei",
          learningGoals: [
            "Kinderen proeven en ontdekken voedsel",
            "Kennis maken met cacao en chocolade",
            "Begrijpen van groei en productie"
          ],
          activities: [
            "Cacao en chocolade proeven",
            "Verhaal over cacao",
            "Planten en groei ontdekken"
          ]
        },
        middenbouw: {
          description: "Voedselproductie, cacaofabrieken, voedselketen",
          learningGoals: [
            "Begrijpen van voedselproductie",
            "Kennis van cacaofabrieken en industrie",
            "Inzicht in voedselketen"
          ],
          activities: [
            "Excursie naar cacaofabriek of museum",
            "Onderzoek naar voedselproductie",
            "Voedselketen in kaart brengen"
          ]
        },
        bovenbouw: {
          description: "Voedselinnovatie, duurzaamheid, circulair, toekomst",
          learningGoals: [
            "Begrijpen van voedselinnovatie",
            "Kritisch nadenken over duurzaamheid",
            "Onderzoek naar circulaire voedselproductie"
          ],
          activities: [
            "Onderzoek naar voedselinnovatie",
            "Debat over duurzaamheid",
            "Onderzoek naar toekomst van voedsel"
          ]
        }
      },
      resources: [
        { title: "Cacao langs de Zaan; de molens - de fabrieken", type: "boek", description: "Informatief boek" },
        { title: "Ons voedsel", type: "boek", description: "Educatief materiaal" }
      ]
    }
  ],
  didactics: [
    "Rich Texts",
    "Excursion Guide",
    "Framework 2.0"
  ]
};
