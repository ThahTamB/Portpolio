/** @jsxImportSource @emotion/react */
import About from './components/About';
import Contact from './components/Contact';
import Hero from './components/Hero';
import { useEffect, useState } from 'react';
import tw from 'twin.macro';
import Navbar from './components/Navbar';
import Project from './components/Project';
import { createClient, Entry } from 'contentful';
import Achievement from './components/Achievement';
import Introduce from './components/Introduce';
import Service from './components/Service';
import Technology from './components/Technology';
import Experience from './components/Experience';
import Education from './components/Education';

const App = () => {
  const [projects, setProjects] = useState<Entry<any>[]>([]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflowY = open ? 'hidden' : '';
  }, [open]);

  useEffect(() => {
    (async () => {
      const client = createClient({
        space: process.env.REACT_APP_SPACE_ID || '',
        accessToken: process.env.REACT_APP_ACCESS_TOKEN || '',
      });

      try {
        const response = await client.getContentTypes();
        console.log('content type:',response.items);

        const { items } = await client.getEntries({ content_type: 'portfolio' });
        setProjects(items);
        console.log('data: ',items);
      } catch (e) {
        console.error(e);
      }
    })();
  }, []);

  return (
    <div css={tw`bg-navy min-h-screen text-white max-w-[screen] laptop:()`}>
      <Navbar open={open} toggle={() => setOpen(!open)} />    
      <main css={tw`pt-20 mx-4 max-w-full flex flex-col laptop:(px-[100px] justify-center mx-auto)`}>
        {/* <Hero /> */}
        <Introduce />
        <About />
        <Service/>
        <Technology/>
        <Experience/>
        <Project data={projects}/>          
        <Education/>
        <Achievement/>
        <Contact />
      </main>
    </div>
  );
};

export default App;