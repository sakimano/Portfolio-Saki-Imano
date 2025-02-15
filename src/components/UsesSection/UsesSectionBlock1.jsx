import UsesSection from '/workspaces/Portfolio-Saki-Imano/src/components/UsesSection/UsesSection.jsx';

const items = [
  {
    groupName: 'Workstation',
    items: [
      {
        title: 'Item Name',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, sunt quod. Similique ut odio placeat totam molestias deserunt aliquam. Consectetur rerum natus impedit neque iure assumenda ipsa vero ad ut.',
      },
      {
        title: 'Dell UltraSharp U2717D',
        description:
          'I have two of these monitors and they’re great. I’ve had them for years and they’ve been rock solid.',
      },
      {
        title: 'Keychron K2',
        description:
          'I’ve been using this keyboard for a few years now and I love it. It’s wireless, has a great feel, and the battery lasts forever.',
      },
      {
        title: 'Logitech MX Master 3',
        description:
          'I’ve been using this mouse for a few years now and it’s great. It’s wireless, has a great feel, and the battery lasts forever.',
      },
      {
        title: 'Audio-Technica ATH-M50x',
        description:
          'I’ve been using these headphones for a few years now and they’re great. They’re comfortable, sound good, and are built like a tank.',
      },
      {
        title: 'Rain Design mStand',
        description:
          'I’ve been using this stand for my MacBook Pro for a few years now and it’s great. It’s sturdy, looks good, and keeps my laptop cool.',
      },
    ],
  },
  {
    groupName: 'Development',
    items: [
      {
        title: 'Visual Studio Code',
        description:
          'I use VS Code for all of my development work. It’s fast, has great extensions, and is highly customizable.',
      },
      {
        title: 'iTerm2 + Oh My Zsh',
        description:
          'I use iTerm2 as my terminal and Oh My Zsh as my shell. It’s a great combination. I use the Agnoster theme with the Fira Code font.',
      },
    ],
  },
  {
    groupName: 'Design',
    items: [
      {
        title: 'Figma',
        description:
          'I use Figma for all of my design work. It’s fast, has great collaboration features, and is highly customizable.',
      },
      {
        title: 'Whimsical',
        description:
          'I use Whimsical for all of my wireframing and flowcharting. It’s fast, has great collaboration features, and is highly customizable.',
      },
    ],
  },
  {
    groupName: 'Productivity',
    items: [
      {
        title: 'Notion',
        description:
          'I use Notion for all of my note-taking and knowledge management. It’s fast, has great collaboration features, and is highly customizable.',
      },
      {
        title: 'Alfred',
        description:
          'I use Alfred for all of my productivity needs. It’s fast, has great features, and is highly customizable.',
      },
    ],
  },
];

function UsesSectionBlock1() {
  return (
    <>
      <UsesSection items={items} />
    </>
  );
}

export default UsesSectionBlock1;
