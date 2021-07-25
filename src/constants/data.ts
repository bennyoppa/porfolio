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
    resume: {
      heading: string;
      eduExp: {
        eduExpType: string;
        cards: {
          year: string;
          location: string;
          title: string;
          description: string;
        }[];
      }[];
      certs: {
        certTitle: string;
        certCards: {
          name: string;
          membershipId: string;
          expiryDate: string;
          img: string;
          url: string;
        }[];
      };
      skills: {
        type: string;
        skillList: {
          name: string;
          percent: string;
        }[];
      }[];
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
    resume: {
      heading: "Resume",
      eduExp: [
        {
          eduExpType: "Education",
          cards: [
            {
              year: "2017 - 2018",
              location: "University of New South Wales",
              title: "Master of IT",
              description:
                "Major in Artificial Intelligence & Database Management Systems; other web dev and Chat-Bot projects.",
            },
            {
              year: "2011 - 2015",
              location: "University of New South Wales",
              title: "Bachelor of Electrical Eng",
              description:
                "Major in microelectronics, energy systems, control system, programming & signal processing.",
            },
            {
              year: "2000",
              location: "UNSW Global",
              title: "Foundation Studies",
              description:
                "Foundation Studies is an alternative of Year 12 courses for international students.",
            },
          ],
        },
        {
          eduExpType: "Experience",
          cards: [
            {
              year: "2021 - Now",
              location: "Westpac",
              title: "Data Analyst",
              description:
                "Utilised SAS programming and SQL for data analytics, BI reporting & data visualisation.",
            },
            {
              year: "2019 - 2020",
              location: "Telstra",
              title: "Data Analyst",
              description:
                "Utilised Microsoft Azure Cloud with Spark & SQL to perform data transformation, modelling & warehousing.",
            },
            {
              year: "2019",
              location: "TPG",
              title: "Graduate Systems Engineer",
              description:
                "Back-end developments & system monitoring by using PHP and Linus batch scripts.",
            },
          ],
        },
      ],
      certs: {
        certTitle: "Certificates",
        certCards: [
          {
            name: "Azure Data Engineer",
            membershipId: "Certification number: H850-2946",
            expiryDate: "11 June 2021",
            img: "https://images.credly.com/size/680x680/images/61542181-0e8d-496c-a17c-3d4bf590eda1/azure-data-engineer-associate-600x600.png",
            url: "https://www.credly.com/badges/3fed877d-b85f-4514-8e0c-ae18e1a987e2",
          },
          {
            name: "Azure Fundamentals",
            membershipId: "Certification number: H372-8920",
            expiryDate: "27 February 2020",
            img: "https://images.credly.com/size/680x680/images/70eb1e3f-d4de-4377-a062-b20fb29594ea/azure-data-fundamentals-600x600.png",
            url: "https://www.credly.com/badges/66d1c1b6-ee94-44fd-b844-c69a72047bb9",
          },
        ],
      },
      skills: [
        {
          type: "Coding Skills",
          skillList: [
            {
              name: "JavaScript",
              percent: "90%",
            },
            {
              name: "ReactJS",
              percent: "85%",
            },
            {
              name: "HTML / CSS",
              percent: "85%",
            },
            {
              name: "Python",
              percent: "90%",
            },
          ],
        },
        {
          type: "Data Skills",
          skillList: [
            {
              name: "SQL",
              percent: "100%",
            },
            {
              name: "NoSQL",
              percent: "80%",
            },
            {
              name: "Cloud Services",
              percent: "80%",
            },
            {
              name: "ETL",
              percent: "70%",
            },
          ],
        },
      ],
    },
  },
};

export default data;
