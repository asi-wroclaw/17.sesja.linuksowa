import AboutUs from '@/components/about-us';
import Agenda from '@/components/agenda';
import CallForPapers from '@/components/call-for-papers';
import CodeOfConduct from '@/components/code-of-conduct';
import ParticlesBackground from '@/components/common/ParticlesBackground';
import Hero from '@/components/hero';
import MapSection from '@/components/map-section';
import Navbar from '@/components/navbar';
import PreviousEdition from '@/components/previous-edition';
import Speakers from '@/components/speakers';
import Sponsorship from '@/components/sponsorship';
import config from '@/config';

export default function Page() {
  return (
    <main>
      <Navbar />
      <Hero />
      <AboutUs />
      {config.SHOW_CALL_FOR_PAPERS && <CallForPapers />}
      {config.SHOW_SPEAKERS && <Speakers />}
      {config.SHOW_AGENDA && <Agenda />}
      <PreviousEdition />
      <MapSection />
      <Sponsorship />
      <CodeOfConduct />
      <ParticlesBackground />
    </main>
  );
}
