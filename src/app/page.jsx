import Head from 'next/head';
import Header from '../components/Header'; // Adjust the path based on your structure
import ArticleSection from '../components/ArticleCard/ArticleSection.jsx';
import SignupWidget from '../components/SignupWidget/SignupWidget.jsx';
import WorkSection from '../components/WorkWidget/WorkSection.jsx';
import SkillsSection from '../components/SkillsWidget/SkillsSection.jsx';
import FooterSection from '../components/Footer1/FooterSection.jsx';



export default function Home() {
  return (
    <div className="min-h-screen ">
      <Head>
        <title>Portfolio - Home</title>
        <meta name="description" content="Home page of my portfolio." />
      </Head>
      <Header />
      <main className="container mx-auto p-12 pt-0">
      <header className="">
        <img src="/images/prof.jpeg" alt="Profile" className="rounded-full w-24 h-24 mb-5" />
        <h1 className="text-4xl font-bold max-w-[50%]">
          Psychologist, Japanese, and challenger.
        </h1>
        <p className=" max-w-[60%] mt-6" style={{ color: 'var(--paragraph-color)' }}>
        Hi I am a web developer & designer from Sendai, Japan. I believe working in a multi-disciplined approach brings creative inspiration to my work. I am passionate about creating websites and web apps that incorporate interactive design and modern technologies. I specialize in front-end development but also love experimenting with new backend technologies, with the aim to improve productivity, quality, performance and speed.
        </p>
        <div className="flex justify-left space-x-4 mt-7">
          <a href="https://twitter.com/yourprofile" className="text-blue-500" target="_blank" rel="noopener noreferrer">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M23.643 4.937a9.745 9.745 0 01-2.828.775 4.965 4.965 0 002.165-2.724 9.977 9.977 0 01-3.127 1.201 4.936 4.936 0 00-3.599-1.556c-2.739 0-4.96 2.224-4.96 4.964 0 .389.045.765.13 1.127-4.121-.206-7.78-2.178-10.226-5.173-.427.728-.673 1.573-.673 2.475 0 1.706.87 3.212 2.188 4.096a4.904 4.904 0 01-2.248-.623v.064c0 2.383 1.692 4.374 3.946 4.827-.413.113-.847.174-1.296.174-.317 0-.625-.03-.928-.086.63 1.964 2.444 3.4 4.601 3.438a9.871 9.871 0 01-6.124 2.111c-.398 0-.79-.023-1.176-.068a13.931 13.931 0 007.557 2.213c9.052 0 14.005-7.514 14.005-14.04 0-.215 0-.427-.015-.64A9.935 9.935 0 0024 4.548a9.69 9.69 0 01-2.357.645z"/>
            </svg>
          </a>
          <a href="https://linkedin.com/in/yourprofile" className="text-blue-700" target="_blank" rel="noopener noreferrer">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M19 0h-14c-2.761 0-5 2.238-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.762-2.238-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.251c-.965 0-1.75-.785-1.75-1.75s.785-1.75 1.75-1.75 1.75.785 1.75 1.75-.784 1.75-1.75 1.75zm13.5 10.251h-3v-4.5c0-1.38-1.121-2.5-2.5-2.5s-2.5 1.12-2.5 2.5v4.5h-3v-9h3v1.272c.879-.848 2.118-1.272 3.5-1.272 2.481 0 4.5 2.019 4.5 4.5v4.5z"/>
            </svg>
          </a>
          <a href="https://github.com/yourprofile" className="text-gray-800 dark:text-gray-300" target="_blank" rel="noopener noreferrer">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 0c-6.627 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.387.6.111.793-.261.793-.577 0-.285-.011-1.04-.016-2.04-3.338.725-4.042-1.614-4.042-1.614-.546-1.387-1.333-1.758-1.333-1.758-1.089-.744.083-.729.083-.729 1.205.085 1.838 1.237 1.838 1.237 1.07 1.834 2.806 1.304 3.492.997.108-.775.418-1.305.761-1.605-2.666-.304-5.467-1.334-5.467-5.931 0-1.31.469-2.381 1.235-3.222-.124-.303-.535-1.521.117-3.171 0 0 1.007-.323 3.301 1.23.957-.266 1.984-.399 3.006-.403 1.021.004 2.049.137 3.008.403 2.292-1.553 3.296-1.23 3.296-1.23.654 1.65.243 2.868.12 3.171.769.841 1.234 1.912 1.234 3.222 0 4.607-2.804 5.624-5.477 5.921.43.37.815 1.1.815 2.219 0 1.602-.014 2.896-.014 3.293 0 .319.19.694.798.576 4.765-1.589 8.199-6.084 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
          </a>
        </div>
      </header>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
          <ArticleSection />

        <aside className="mt-8 md:mt-0">
          <SignupWidget
            title={'Stay up to date'}
            content={'Get notified when I publish something new, and unsubscribe at any time.'}
          />
          <WorkSection />
          <SkillsSection />


          </aside>
</div>
        <FooterSection />
      </main>
    </div>
  );
}
