import React from "react";
import Link from "next/link";
import Image from "next/image";

const ProjectItem = ({ project }) => {
  return (
    <div>
      <Link href={project.url} passHref>
        <a target="_blank">
          <Image
            src={project.pic}
            alt={project.name}
            width={1366}
            height={1555}
            objectFit="cover"
          />
          <div className="text-2xl xl:text-3xl">{project.name}</div>
        </a>
      </Link>
    </div>
  );
};

export default ProjectItem;
