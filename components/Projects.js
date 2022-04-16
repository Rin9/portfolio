import React from "react";
import ProjectItem from "./ProjectItem";
import neatBlog from "/assets/projects/neat-blog.png";
import newFashion from "/assets/projects/new-fashion.png";

const projectData = [
  {
    pic: neatBlog,
    name: "Neat Blog",
    url: "https://neat-blog.vercel.app/",
    github: "https://github.com/Rin9/neat_blog",
  },
  {
    pic: newFashion,
    name: "New Fashion",
    url: "https://new-fashion.vercel.app/",
    github: "https://github.com/Rin9/new_fashion",
  },
];

const Projects = () => {
  return (
    <section className={`flex flex-col bg-white py-20 text-3xl md:text-4xl`}>
      <div className="container mx-auto px-11">
        <p className="leading-tight max-w-5xl mx-auto text-4xl tracking-tight">
          <strong>I'm a self-taught front-end developer.</strong>
        </p>
      </div>
      <div className="container mx-auto px-11 text-center mt-28">
        <h2>My Projects</h2>
        <div className="mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 lg:gap-20">
          {/* <div>project</div>
          <div>project</div>
          <div>project</div>
          <div>project</div>
          <div>project</div>
          <div>project</div> */}
          {projectData.map((project, index) => {
            return <ProjectItem key={index} project={project} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
