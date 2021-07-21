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
            content: "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
            iconType: "create",
          },
          {
            title: "Title2",
            content: "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
            iconType: "store",
          },
          {
            title: "Title3",
            content: "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
            iconType: "web",
          },
          {
            title: "Title4",
            content: "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
            iconType: "business",
          },
        ],
      },
    },
  },
};

export default data;
