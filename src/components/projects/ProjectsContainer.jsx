import { Projects } from './Projects';
import styles from './Projects.module.scss';
import twd from '../../assets/images/projects/LuAQQ59muck.jpg';
import kbrd from '../../assets/images/projects/zZB9Fexzsr0.jpg';
import vlrnt from '../../assets/images/projects/IpvS3_aNgUg.jpg';
import wdr from '../../assets/images/projects/7rJk3PY9zUw.jpg';
import todo from '../../assets/images/projects/c7kZdx-YM9s.jpg';
import { BsGithub } from 'react-icons/bs';

export const ProjectsContainerComponent = (props) => {
  const arrOfProjects = [
    {
      name: 'Virtual Keyboard',
      type: 'App',
      image: kbrd,
      link: 'https://svnestie99.github.io/Virtual-Keyboard/',
      tools: ['HTML', 'CSS', 'JavaScript'],
      github: 'https://github.com/svnestie99/Virtual-Keyboard',
    },
    {
      name: 'TODO list',
      type: 'App',
      image: todo,
      link: 'https://svnestie99.github.io/todolist/',
      tools: ['HTML', 'CSS', 'JavaScript'],
      github: 'https://github.com/svnestie99/todolist',
    },
    {
      name: 'TWDcomics',
      type: 'App',
      image: twd,
      link: '#',
      tools: ['HTML', 'CSS', 'JavaScript'],
      github: 'https://github.com/svnestie99/TWD-comics',
    },

    {
      name: 'Valorant',
      type: 'Template',
      image: vlrnt,
      link: 'https://svnestie99.github.io/Valorant-Agents-page/',
      tools: ['HTML', 'CSS', 'SCSS'],
      github: 'https://github.com/svnestie99/Valorant-Agents-page',
    },
    {
      name: 'WOODER',
      type: 'Template',
      image: wdr,
      link: 'https://svnestie99.github.io/Wooder/',
      tools: ['HTML', 'CSS'],
      github: 'https://github.com/svnestie99/Wooder',
    },
  ];

  const projectElementGrid = arrOfProjects.map((item, i) => {
    return (
      <div key={item.name} className={styles.project_grid_block}>
        <div className={styles.project_image_item}>
          <div className={styles.project_grid_links}>
            <a target="_blank" href={item.link}>
              open the website
            </a>
            <a target="_blank" href={item.github}>
              <BsGithub></BsGithub>
            </a>
          </div>
          <img src={item.image} alt={item.name} />
        </div>
        <div className={styles.project_grid_info}>
          <div className={styles.info_item}>
            <p>{item.name}</p>
            <p className={styles.info_type}>
              {item.type}
              <span>//</span>
              {`00${(i += 1)}`}
            </p>
          </div>

          <div className={styles.project_tools}>
            {item.tools.map((tool) => {
              return (
                <p key={tool} className={styles.tool}>
                  {tool}
                </p>
              );
            })}
          </div>
        </div>
      </div>
    );
  });

  const projectElementList = arrOfProjects.map((item, i) => {
    return (
      <div key={item.name} className={styles.project_list}>
        <div className={styles.project_list_number}>{`//00${(i += 1)}`}</div>
        <div className={styles.project_list_name}>{item.name}</div>
        <div className={styles.project_list_type}>{item.type}</div>
        <div className={styles.project_list_tools}>
          {item.tools.map((tool) => {
            return (
              <p key={tool} className={styles.tool}>
                {tool}
              </p>
            );
          })}
        </div>
        <div className={styles.row}>
          <span>{item.name}</span>
          <div className={styles.row_links}>
            <a href={item.link} target="_blank">
              open the website
            </a>
            <a href={item.github} target="_blank">
              github
            </a>
          </div>
        </div>
      </div>
    );
  });

  return (
    <Projects
      projectElementList={projectElementList}
      projectElementGrid={projectElementGrid}
    />
  );
};
