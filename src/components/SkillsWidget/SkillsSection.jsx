import SkillsWidget from './SkillsWidget.jsx';

const skills = [
  { name: 'HTML', proficiency: 60, icon: 'images/html.png' },
  { name: 'CSS', proficiency: 50, icon: 'images/CSS.png' },
  { name: 'JavaScript', proficiency: 75, icon: 'images/JS.png' },
];

function SkillsSection() {
  return (
    <>
      <SkillsWidget
        title={'Skills'}
        content={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi.'}
        skills={skills}
      />
    </>
  );
}

export default SkillsSection;
