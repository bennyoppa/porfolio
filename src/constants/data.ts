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
      testimonials: {
        testimonialsTitle: string;
        imageCards: { title: string; subtitle: string; content: string }[];
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
      testimonials: {
        testimonialsTitle: "No Idea",
        imageCards: [
          {
            title: "111",
            subtitle: "xxx",
            content: "xxxxxxxxxxxxxxx",
          },
          {
            title: "222",
            subtitle: "xxx",
            content: "xxxxxxxxxxxxxxx",
          },
          {
            title: "333",
            subtitle: "xxx",
            content: "xxxxxxxxxxxxxxx",
          },
        ],
      },
    },
  },
};

export default data;
