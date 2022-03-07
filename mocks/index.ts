import { IArticle, IProject } from '../typings';

export const SKILLS_MOCKS = {
  engineering: [
    'Designing wireframes, mockups and prototypes in Figma, Adobe Xd;',
    'Styling and writing markups using: HTML, CSS, Tailwind, Bootstrap, Ant Design;',
    'Developing production ready apps with frameworks and libraries like: NextJs, ReactJs, Flutter;',
    'Building Decentralised Applications (DApps) using Web3.js, Ethers.js, Truffle.js, Ganache, Solidity;',
    'Coordinating work using Git, Github, Gitlab, GitBucket;',
  ],
  soft: [
    'I convey my ideas in English or French, written and spoken fluently;',
    'Mentor and collaborate with team members;',
    'Use my time wisely to deliver tasks as fast as possible;',
    'Embrace change and adjust quickly',
  ],
};

export const FEATURED_WORKS: Record<
  'projects' | 'articles',
  IProject[] | IArticle[]
> = {
  projects: [
    {
      id: 1,
      title: 'Esika',
      description: 'A property landing web application.',
      tags: ['ReactJS', 'Tailwind', 'Algolia'],
      thumbnail:
        'https://images.unsplash.com/photo-1527443195645-1133f7f28990?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYyNjU2MTcyOQ&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080',
    },
  ] as IProject[],
  articles: [
    {
      id: 1,
      title: 'How to create your first NFT marketplace',
      description:
        'Here’s how you can create your first NFT Marketplace built on Ethereum.',
      tags: ['Blockchain'],
      author: 'Eliezer W. Basubi',
      publishedOn: '30 Mar 2021',
      readCount: 4,
      // thumbnail:
      //   'https://images.unsplash.com/photo-1643101447864-1761ac8414cd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY0NjYzODAxNA&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080',
      thumbnail:
        'https://images.unsplash.com/photo-1643101809754-43a91784ebec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY0NjU3NDEyOA&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080',
    },
  ] as IArticle[],
};
