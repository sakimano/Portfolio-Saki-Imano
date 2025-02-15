import Head from 'next/head';
import Header from '/workspaces/Portfolio-Saki-Imano/src/components/Header.jsx'; // Adjust the path based on your structure
import FooterSection from '/workspaces/Portfolio-Saki-Imano/src/components/Footer1/FooterSection.jsx';
import ProjectCardBlock1 from '@/components/ProjectCard/ProjectCardBlock1';
import UsesSectionBlock1 from '@/components/UsesSection/UsesSectionBlock1';

export default function About() {
  return (
    <div className="min-h-screen">
      <Head>
        <title>Uses Section</title>
        <meta name="description" content="Learn more about me on this page." />
      </Head>
      <Header />
      <main className="container mx-auto p-12 pt-0">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
        <div className="col-span-2 md:col-span-2">
            <h1 className="text-6xl font-bold mt-6">Software I use, gadgets I love and other things I recommend.</h1>
          <p className="mt-6 " style={{ color: '#555555' }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam aspernatur nemo, dolorum nihil a perspiciatis. Perspiciatis, dolorem ut. Facilis itaque similique quasi alias ea omnis quibusdam? Dolore eius in assumenda! Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam modi atque eum nam quos enim quae suscipit unde qui, voluptate laborum cum delectus odio deserunt minus voluptatibus in incidunt sapiente. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam porro placeat exercitationem aspernatur explicabo, dolorem, hic tenetur recusandae laboriosam similique earum consequuntur? Alias reprehenderit et obcaecati repudiandae amet fuga vero.
          </p>
        </div>
</div>
        <UsesSectionBlock1 />
        <FooterSection />
      </main>
    </div>
  );
}
