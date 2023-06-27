import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";

/**
 * Posts can be added here.
 * You can add default posts of your wish with different attributes
 * */

export const posts = [
  {
    _id: uuid(),
    content:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.",
    likes: {
      likeCount: 25,
      likedBy: [],
      dislikedBy: [],
    },
    username: "adarshbalika",
    createdAt: new Date("August 30, 2021 03:15:30"),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content:
      "Non programmers on my timeline. Attention. After placing 100+ programmers i in top Indian startups, I am thinking of coming up with a program for business roles as well. Interested in helping me build this course? Join the telegram group (in next tweet)",
    likes: {
      likeCount: 73,
      likedBy: [],
      dislikedBy: [],
    },
    username: "tanaypratap",
    createdAt: new Date("June 27, 2023 03:15:30"),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.",
    likes: {
      likeCount: 45,
      likedBy: [],
      dislikedBy: [],
    },
    username: "shubhamsoni",
    createdAt: new Date("August 30, 2021 03:15:30"),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.",
    likes: {
      likeCount: 90,
      likedBy: [],
      dislikedBy: [],
    },
    username: "shubhamsoni",
    createdAt: new Date("August 30, 2021 03:15:30"),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.",
    likes: {
      likeCount: 3,
      likedBy: [],
      dislikedBy: [],
    },
    username: "shubhamsoni",
    createdAt: new Date("June 27, 2023 03:15:30"),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.",
    likes: {
      likeCount: 100,
      likedBy: [],
      dislikedBy: [],
    },
    username: "tanaypratap",
    createdAt: new Date("August 30, 2021 03:15:30"),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.",
    likes: {
      likeCount: 51,
      likedBy: [],
      dislikedBy: [],
    },
    username: "tanaypratap",
    createdAt: new Date("August 30, 2021 03:15:30"),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content:
      "Im finished with all my features for the social media application that I'm working on!",
    likes: {
      likeCount: 8,
      likedBy: [],
      dislikedBy: [],
    },
    username: "shubh37",
    createdAt: new Date("June 27, 2023 03:15:30"),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content:
      "I'm so happy to get selected for the levelOne of neog camp. Can't wait to start this journey!!",
    likes: {
      likeCount: 15,
      likedBy: [],
      dislikedBy: [],
    },
    username: "shubh37",
    createdAt: new Date("November 20, 2022 03:15:30"),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.",
    likes: {
      likeCount: 27,
      likedBy: [],
      dislikedBy: [],
    },
    username: "shubhamsoni",
    createdAt: new Date("August 30, 2021 03:15:30"),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content: "Just got done with an amazing session on React's useContext.",
    likes: {
      likeCount: 34,
      likedBy: [],
      dislikedBy: [],
    },
    username: "tanaypratap",
    createdAt: new Date("April 27, 2023 03:15:30"),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content: "I just came back from an amazing trip in Mumbai. WohOOO!",
    likes: {
      likeCount: 55,
      likedBy: [],
      dislikedBy: [],
    },
    username: "mohitrana",
    createdAt: new Date("February 27, 2023 03:15:30"),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.",
    likes: {
      likeCount: 89,
      likedBy: [],
      dislikedBy: [],
    },
    username: "mohitrana",
    createdAt: new Date("June 27, 2023 03:15:30"),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content: "My cryptography paper went well today I guess xD",
    likes: {
      likeCount: 6,
      likedBy: [],
      dislikedBy: [],
    },
    username: "prateekmishra",
    createdAt: new Date("May 30, 2023 03:15:30"),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content: "Happy birthday shubh, have a great year!",
    likes: {
      likeCount: 33,
      likedBy: [],
      dislikedBy: [],
    },
    username: "mohitrana",
    createdAt: new Date("October 30, 2022 03:15:30"),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content: "Happy 75th independence day everyone!",
    likes: {
      likeCount: 98,
      likedBy: [],
      dislikedBy: [],
    },
    username: "prateekmishra",
    createdAt: new Date("August 15, 2022 03:15:30"),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content: "Happy republic day guys!",
    likes: {
      likeCount: 76,
      likedBy: [],
      dislikedBy: [],
    },
    username: "prateekmishra",
    createdAt: new Date("January 26, 2021 03:15:30"),
    updatedAt: formatDate(),
  },

  {
    _id: uuid(),
    content:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.",
    likes: {
      likeCount: 45,
      likedBy: [],
      dislikedBy: [],
    },
    username: "sarasarya",
    createdAt: new Date("August 30, 2021 03:15:30"),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content: "Happy birthday to myself! Season 29 begins...",
    likes: {
      likeCount: 99,
      likedBy: [],
      dislikedBy: [],
    },
    username: "sarasarya",
    createdAt: new Date("September 06, 2022 03:15:30"),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.",
    likes: {
      likeCount: 11,
      likedBy: [],
      dislikedBy: [],
    },
    username: "sarasarya",
    createdAt: new Date("December 25, 2022 03:15:30"),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content: "Shit yaar phirse IPL me piche reh gaya",
    likes: {
      likeCount: 34,
      likedBy: [],
      dislikedBy: [],
    },
    username: "viratkohli",
    createdAt: new Date("May 24, 2023 03:15:30"),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content:
      "it's not shub, or subh, or sub. ITS SHUBH. How difficult is it to spell it right?",
    likes: {
      likeCount: 45,
      likedBy: [],
      dislikedBy: [],
    },
    username: "shubh37",
    createdAt: new Date("June 24, 2023 03:15:30"),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content: "A hard fought WTC final, will come back stronger.",
    likes: {
      likeCount: 67,
      likedBy: [],
      dislikedBy: [],
    },
    username: "viratkohli",
    createdAt: new Date("June 22, 2023 03:15:30"),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content: "Aao chalo firangiyo ki swatanra diwas manaye",
    likes: {
      likeCount: 22,
      likedBy: [],
      dislikedBy: [],
    },
    username: "adarshbalika",
    createdAt: new Date("July 04, 2021 03:15:30"),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.",
    likes: {
      likeCount: 65,
      likedBy: [],
      dislikedBy: [],
    },
    username: "mohitrana",
    createdAt: new Date("March 30, 2021 03:15:30"),
    updatedAt: formatDate(),
  },
];
