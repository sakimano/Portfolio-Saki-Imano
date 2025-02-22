import Head from 'next/head';
import Header from '/workspaces/Portfolio-Saki-Imano/src/components/Header.jsx'; // Adjust the path based on your structure
import FooterSection from '/workspaces/Portfolio-Saki-Imano/src/components/Footer1/FooterSection.jsx';

export default function About() {
  return (
    <div className="min-h-screen">
      <Head>
        <title>About Me</title>
        <meta name="description" content="Learn more about me on this page." />
      </Head>
      <Header />
      <main className="container mx-auto p-12 pt-0">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
        <div className="col-span-2 md:col-span-1">
            <h1 className="text-6xl font-bold mt-6">I am Saki I live in Utah, Where I develop the Future</h1>
          <p className="mt-6" style={{ color: 'var(--paragraph-color)' }}>
      My name is Saki Imano, I am a student at Ensign College studying Computer Science.
      I am a psychologist, Japanese, and challenger. I am a certified psychologist in Japan, 
      but I followed my desire to come to the States to learn new things such as computer science. 
      And now, I am passionate about software engineering and I am always looking for ways to improve 
      my skills. I am from Japan where I learned detail oriented skill and logical thinking in daily life,
      and I am a challenger who put myself in totally new environment to learn and experience new things. 
      I believe working in a multi-disciplined approach brings creative inspiration to my work. 
      I am passionate about creating websites and web apps that incorporate interactive design 
      and modern technologies. I specialize in front-end development but also love experimenting with 
      new backend technologies, with the aim to improve productivity, quality, performance and speed.
    </p>
        </div>
        <aside className="col-span-2 md:col-span-1 mt-8 md:mt-0 flex justify-center flex-col self-start">
            <img src="images/prof.jpeg" alt="Profile Picture" className="rounded-full order-first md:order-none flex justify" />
            <div className="order-last md:order-none">
              <p className="mt-7 ml-9">
                <div className="flex flex-col space-y-4 mt-7">
                <p className="flex items-center">
                  <a href="https://twitter.com/yourprofile" className="text-blue-500 mr-2" target="_blank" rel="noopener noreferrer">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M23.643 4.937a9.745 9.745 0 01-2.828.775 4.965 4.965 0 002.165-2.724 9.977 9.977 0 01-3.127 1.201 4.936 4.936 0 00-3.599-1.556c-2.739 0-4.96 2.224-4.96 4.964 0 .389.045.765.13 1.127-4.121-.206-7.78-2.178-10.226-5.173-.427.728-.673 1.573-.673 2.475 0 1.706.87 3.212 2.188 4.096a4.904 4.904 0 01-2.248-.623v.064c0 2.383 1.692 4.374 3.946 4.827-.413.113-.847.174-1.296.174-.317 0-.625-.03-.928-.086.63 1.964 2.444 3.4 4.601 3.438a9.871 9.871 0 01-6.124 2.111c-.398 0-.79-.023-1.176-.068a13.931 13.931 0 007.557 2.213c9.052 0 14.005-7.514 14.005-14.04 0-.215 0-.427-.015-.64A9.935 9.935 0 0024 4.548a9.69 9.69 0 01-2.357.645z"/>
                    </svg>
                  </a>
                  Follow me on twitter</p>
                  <p className="flex items-center">
                  <a href="https://linkedin.com/in/yourprofile" className="text-blue-700 mr-2" target="_blank" rel="noopener noreferrer">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M19 0h-14c-2.761 0-5 2.238-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.762-2.238-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.251c-.965 0-1.75-.785-1.75-1.75s.785-1.75 1.75-1.75 1.75.785 1.75 1.75-.784 1.75-1.75 1.75zm13.5 10.251h-3v-4.5c0-1.38-1.121-2.5-2.5-2.5s-2.5 1.12-2.5 2.5v4.5h-3v-9h3v1.272c.879-.848 2.118-1.272 3.5-1.272 2.481 0 4.5 2.019 4.5 4.5v4.5z"/>
                    </svg>
                  </a>
                  Connect with me on LinkedIn
                  </p>
                  <p className="flex items-center">
                  <a href="https://github.com/yourprofile" className="text-gray-800 dark:text-gray-300 mr-2" target="_blank" rel="noopener noreferrer">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 0c-6.627 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.387.6.111.793-.261.793-.577 0-.285-.011-1.04-.016-2.04-3.338.725-4.042-1.614-4.042-1.614-.546-1.387-1.333-1.758-1.333-1.758-1.089-.744.083-.729.083-.729 1.205.085 1.838 1.237 1.838 1.237 1.07 1.834 2.806 1.304 3.492.997.108-.775.418-1.305.761-1.605-2.666-.304-5.467-1.334-5.467-5.931 0-1.31.469-2.381 1.235-3.222-.124-.303-.535-1.521.117-3.171 0 0 1.007-.323 3.301 1.23.957-.266 1.984-.399 3.006-.403 1.021.004 2.049.137 3.008.403 2.292-1.553 3.296-1.23 3.296-1.23.654 1.65.243 2.868.12 3.171.769.841 1.234 1.912 1.234 3.222 0 4.607-2.804 5.624-5.477 5.921.43.37.815 1.1.815 2.219 0 1.602-.014 2.896-.014 3.293 0 .319.19.694.798.576 4.765-1.589 8.199-6.084 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </a>
                     Check out my GitHub
                  </p>
                  <div className="w-20 h-12 border-b-2 border-gray-300"></div>


                  <p className="flex items-center ">
                  <a href="https://github.com/yourprofile" className="text-gray-800 dark:text-gray-300 mr-2" target="_blank" rel="noopener noreferrer">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                    <path d="M12 12.713L2.89 6.186C3.146 5.517 3.798 5 4.53 5h14.94c.732 0 1.384.517 1.64 1.186L12 12.713z" />
                    <path d="M12 13.287l9.11-6.527C20.854 5.517 20.202 5 19.47 5H4.53c-.732 0-1.384.517-1.64 1.186L12 13.287zM2 6.877l8.225 5.841c.202.144.446.217.687.217s.485-.073.687-.217L22 6.877V19c0 .732-.594 1.328-1.328 1.328H3.328A1.328 1.328 0 012 19V6.877z" />
                    </svg>
                  </a>
                     Saki@gmail.com
                  </p>
                </div>
              </p>
            </div>

          </aside>

</div>

        <FooterSection />
      </main>
    </div>
  );
}
