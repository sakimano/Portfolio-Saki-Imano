import ProjectCard from './ProjectCard.jsx';

function ProjectCardBlock1() {
  return (
    <>
      <ProjectCard
        name={'Portfolio'}
        logo={'images/portfolio.jpg'}
        content={
          'This work shows my skill in web programming.'
        }
        link={'https://www.ensign.edu/'}
      />
    </>
  );
}

export default ProjectCardBlock1;
