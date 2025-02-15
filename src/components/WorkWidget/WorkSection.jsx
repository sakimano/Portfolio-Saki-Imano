import WorkWidget from './WorkWidget.jsx';

function WorkSection() {
  return (
    <>
      <WorkWidget
        title={'Work'}
        content={'My work experience.'}
        experiences={[
          {
            logo: 'images/Slack.png',
            organization: 'Slack',
            jobTitle: 'Software Engineer',
            startYear: 2016,
            endYear: null,
          },
          {
            logo: 'images/Spotify.png',
            organization: 'Spotify',
            jobTitle: 'Software Engineer',
            startYear: 2014,
            endYear: 2015,
          },
          {
            logo: 'images/Audible.png',
            organization: 'Audible',
            jobTitle: 'Software Engineer',
            startYear: 2012,
            endYear: 2013,
          },
          {
            logo: 'images/Microsoft.png',
            organization: 'Microsoft',
            jobTitle: 'Software Engineer',
            startYear: 2010,
            endYear: 2011,
          },
        ]}
      />
    </>
  );
}

export default WorkSection;
