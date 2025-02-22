import Head from 'next/head';
import Header from '/workspaces/Portfolio-Saki-Imano/src/components/Header.jsx'; // Adjust the path based on your structure
import FooterSection from '/workspaces/Portfolio-Saki-Imano/src/components/Footer1/FooterSection.jsx';
import ProjectCardBlock1 from '@/components/ProjectCard/ProjectCardBlock1';

export default function About() {
  return (
    <div className="min-h-screen">
      <Head>
        <title>Projects page</title>
        <meta name="description" content="Learn more about my projects on this page." />
      </Head>
      <Header />
      <main className="container mx-auto p-12 pt-0">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
        <div className="col-span-2 md:col-span-1">
            <h1 className="text-6xl font-bold mt-6">Things I've made trying to put my dent in the universe.</h1>
          <p className="mt-6" style={{ color: 'var(--paragraph-color)' }}>
            Since I just started learning about programming, I don't have much work and project I have done. I hope I'll be able to put more works that demonstrate my skills as I go through this journey on programming.  
          </p>
        </div>
</div>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-8">
       <ProjectCardBlock1 />
       
    </div>
        <FooterSection />
      </main>
    </div>
  );
}
