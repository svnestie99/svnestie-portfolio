import { MySkills } from './MySkills';
import js from '../../assets/images/skills/js.png';
import html from '../../assets/images/skills/html.png';
import css from '../../assets/images/skills/css-3.png';
import scss from '../../assets/images/skills/sass.png';
import reactjs from '../../assets/images/skills/react.png';
import node from '../../assets/images/skills/nodejs.png';
import ps from '../../assets/images/skills/photoshop.png';
import git from '../../assets/images/skills/git.png';
import npm from '../../assets/images/skills/Npm.png';
import yarn from '../../assets/images/skills/yarn.png';
import { useEffect, useState } from 'react';

export const MySkillsContainerComponent = (props) => {
  const [translateX, setTranslateX] = useState(0);
  const [translateY, setTranslateY] = useState(0);
  const parallax = (event) => {
    setTranslateX(event.clientX);
    setTranslateY(event.clientY);
  };

  useEffect(() => {
    window.addEventListener('mousemove', parallax);

    return () => window.removeEventListener('mousemove', parallax);
  });

  const arrayOfSkills = [
    { skill: 'JavaScript', src: js, value: -8, level: 'advanced' },
    { skill: 'HTML5', src: html, value: -11, level: 'advanced' },
    { skill: 'CSS', src: css, value: 7, level: 'advanced' },
    { skill: 'SCSS', src: scss, value: 13, level: 'advanced' },
    { skill: 'React', src: reactjs, value: 17, level: 'advanced' },
    { skill: 'Redux', src: reactjs, value: 17, level: 'advanced' },
    { skill: 'Node', src: node, value: 9, level: 'elementary' },
    { skill: 'TypeScript', src: node, value: 9, level: 'beginner' },
    { skill: 'Git', src: git, value: -11, level: 'intermediate' },
    { skill: 'Npm', src: npm, value: -12, level: 'advanced' },
    { skill: 'Yarn', src: yarn, value: 7, level: 'advanced' },
    { skill: 'Photoshop', src: ps, value: -13, level: 'intermediate' },
  ];
  const languages = [
    { language: 'English', level: 'Intermediate' },
    { language: 'Belarussian', level: 'Native' },
    { language: 'Russian', level: 'Native' },
  ];

  return (
    <MySkills
      translateX={translateX}
      translateY={translateY}
      arrayOfSkills={arrayOfSkills}
      languages={languages}
    />
  );
};
