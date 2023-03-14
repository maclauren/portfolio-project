import React from 'react';
import Item from './item';

const itemData = [
  {
    id: 1,
    title: 'Team Profile Generator',
    deployedUrl: 'https://maclauren.github.io/team-profile-generator/',
    githubUrl: 'https://github.com/maclauren/team-profile-generator',
    imageSrc: './assets/team-profile-generator.png',
  },
  {
    id: 2,
    title: 'README Generator',
    deployedUrl: 'https://drive.google.com/file/d/1OCzHhtBwQLECDbIHJNVn1KGky56Jvf8J/view',
    githubUrl: 'https://github.com/maclauren/readme-generator',
    imageSrc: './assets/readme-generator.png',
  },
  {
    id: 3,
    title: 'Pokemon Top Trumps',
    deployedUrl: 'https://tweetingcynical.github.io/pokemon-top-trumps/',
    githubUrl: 'https://github.com/TweetingCynical/pokemon-top-trumps',
    imageSrc: './assets/pokemon-top-trumps.png',
  },
  {
    id: 4,
    title: 'Daily Planner App',
    deployedUrl: 'https://maclauren.github.io/daily-planner-app/',
    githubUrl: 'https://github.com/maclauren/daily-planner-app',
    imageSrc: './assets/daily-planner-app.png',
  },
  {
    id: 5,
    title: 'Quiz',
    deployedUrl: 'https://maclauren.github.io/quiz/',
    githubUrl: 'https://github.com/maclauren/quiz',
    imageSrc: './assets/quiz.png',
  },
  {
    id: 6,
    title: 'Password Generator',
    deployedUrl: 'https://maclauren.github.io/password-generator/',
    githubUrl: 'https://github.com/maclauren/password-generator',
    imageSrc: './assets/password-generator.png',
  },
];

const Items = () => {
  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>Projects</h1>
      <ul>
        {itemData.map((item) => (
          <ul key={item.id}>
            <Item
              title={item.title}
              deployedUrl={item.deployedUrl}
              githubUrl={item.githubUrl}
              imageSrc={item.imageSrc}
            />
          </ul>
        ))}
      </ul>
    </div>
  );
};

export default Items;
