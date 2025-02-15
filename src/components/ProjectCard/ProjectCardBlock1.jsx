import ProjectCard from './ProjectCard.jsx';

function ProjectCardBlock1() {
  return (
    <>
      <ProjectCard
        name={'Company'}
        logo={'images/company.png'}
        content={
          'Creating technology to empower xivilians to explore space on their own terms.'
        }
        link={'https://www.ensign.edu/'}
      />
    </>
  );
}

export default ProjectCardBlock1;
