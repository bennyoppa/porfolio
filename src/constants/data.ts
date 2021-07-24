export interface IData {
  pages: {
    about: {
      aboutMeSection: {
        title: string;
        name: string;
        bio: string;
      };
      whatIDoSection: {
        whatIDoTitle: string;
        cards: { title: string; content: string; iconType: string }[];
      };
      favourites: {
        favouritesTitle: string;
        imageCards: { title: string; subtitle: string; content: string }[];
      };
      funFacts: {
        funFactsTitle: string;
        factCards: { title: string; count: number; label: string }[];
      };
    };
  };
}

const data: IData = {
  pages: {
    about: {
      aboutMeSection: {
        title: "Front-end Developer",
        name: "Ben Shi",
        bio: "Hi, I'm a new and passionate front-end developer.",
      },
      whatIDoSection: {
        whatIDoTitle: "What I do?",
        cards: [
          {
            title: "Title1",
            content:
              "xxxxxxxxxx xxxxxxxxx xxxxxxxxxxxx xxxxxxxxx xxxxxxxx xxxxxxxxxxx xxxxx xxxxxxxxxxxxxxxxxxx xxxxxxxxxxxxx",
            iconType: "create",
          },
          {
            title: "Title2",
            content:
              "xxxxxxxxx xxxxxxxxxxxxxx xxxxxxxxxxxx xxxxxxxxxx xxxxxxxxx xxxxxxxxx xxxxxxxxxxxx xxxxxxxxxxxx xxxxxxxxx",
            iconType: "store",
          },
          {
            title: "Title3",
            content:
              "xxxxxxxxxxxxx xxxxxxxxxxxxx xxxxxxxx xxxxxxxxxxxx xxxxxxxxxxxx xxxxxxxxxxxxxxx xxxxxxxxxxxxxxxx xxxxxxx",
            iconType: "web",
          },
          {
            title: "Title4",
            content:
              "xxxxxxxx xxxxxxx xxxxxxxx xxxxxx xxxxxxxx xxxxxxxxxxx xxxxxx xxxxxx xxxxxxxxxxx xxxxxxxxxx xxxxxxxxxxxxxxx",
            iconType: "business",
          },
        ],
      },
      favourites: {
        favouritesTitle: "Favourites",
        imageCards: [
          {
            title: "Avengers 4: Endgame",
            subtitle: "Movie",
            content: '"I am IRON MAN!"',
          },
          {
            title: "Basketball",
            subtitle: "Sport",
            content: "Kobe Bryant - The Legend",
          },
          {
            title: "K-Pop",
            subtitle: "Music",
            content: '"Pretty Savage" by Black Pink',
          },
          {
            title: "Anything",
            subtitle: "Food",
            content: '"Truffle Fried Rce", "Mango Gelato"',
          },
        ],
      },
      funFacts: {
        funFactsTitle: "Fun Facts",
        factCards: [
          {
            title: "xxx",
            count: 111,
            label: "heart",
          },
          {
            title: "yyy",
            count: 222,
            label: "time",
          },
          {
            title: "zzz",
            count: 333,
            label: "star",
          },
          {
            title: "bbb",
            count: 444,
            label: "coffee",
          },
        ],
      },
    },
  },
};

export default data;
