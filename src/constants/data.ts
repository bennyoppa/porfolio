export interface IData {
  pages: {
    about: {
      title: string;
      name: string;
      bio: string;
    };
  };
}

const data: IData = {
  pages: {
    about: {
      title: "Front-end Developer",
      name: "Ben Shi",
      bio: "Hi, I'm a new and passionate front-end developer.",
    },
  },
};

export default data;
