import programmers from '@/assets/logo/4programmers.svg';
import antmicro from '@/assets/logo/antmicro.svg';
import asi from '@/assets/logo/asi-logo-trans.svg';
import hswro from '@/assets/logo/hswro.svg';
import linuxMagazine from '@/assets/logo/linux-magazine.png';
import mb from '@/assets/logo/masterborn.svg';
import plug from '@/assets/logo/plug.png';
import programistamag from '@/assets/logo/programistamag.jpg';
import pwr from '@/assets/logo/pwr.png';
import type { SponsorshipEntity } from '@/components/sponsorship/types';

export const ORGANIZATIONS = [
  {
    title: 'organizers',
    logos: [{ image: asi, href: 'https://asi.wroclaw.pl/' }],
  },
  {
    title: 'sponsors',
    logos: [
      { image: antmicro, href: 'https://antmicro.com/' },
      { image: mb, href: 'https://www.masterborn.com/' },
    ],
  },
  {
    title: 'partners',
    logos: [
      {
        image: hswro,
        href: 'https://www.hswro.org/',
      },
      {
        image: programistamag,
        href: 'https://programistamag.pl/',
      },
      { image: programmers, href: 'https://4programmers.net/' },
      {
        image: linuxMagazine,
        href: 'https://linux-magazine.pl/',
      },
      { image: plug, href: 'https://linux.org.pl/' },
      { image: pwr, href: 'https://pwr.edu.pl/' },
    ],
  },
] as SponsorshipEntity[];
