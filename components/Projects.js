import React from 'react';
import ProjectItem from './ProjectItem';
import neatBlog from '/assets/projects/neat-blog.png';
import newFashion from '/assets/projects/new-fashion.png';

const projectData = [
  {
    pic: neatBlog,
    name: 'Neat Blog',
    url: 'https://neat-blog.vercel.app/',
    github: 'https://github.com/Rin9/neat_blog',
  },
  {
    pic: newFashion,
    name: 'New Fashion',
    url: 'https://new-fashion.vercel.app/',
    github: 'https://github.com/Rin9/new_fashion',
  },
];

const Projects = ({ type }) => {
  return (
    <section className={`flex flex-col bg-white pb-20 text-3xl md:text-4xl`}>
      <div className="container mx-auto px-11 text-center mt-28">
        <h2>
          {type === '' ? '' : type.charAt(0).toUpperCase() + type.slice(1)}{' '}
          Projects
        </h2>
      </div>
    </section>
  );
};

export default Projects;
