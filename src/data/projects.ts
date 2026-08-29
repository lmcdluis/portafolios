import credexMobile from '../assets/images/projects/credex-mobile-all.png';
import cashMax from '../assets/images/projects/cashmax-mobile-all.png';
import crops from '../assets/images/projects/crops.png';
import serviMax from '../assets/images/projects/servimax-ca-all.png';
import pos from '../assets/images/projects/pos.png';
import ibo from '../assets/images/projects/ibo.png';
import ccn from '../assets/images/projects/ccn.png';
import apex from '../assets/images/projects/alta-bms.png';
import credexWeb from '../assets/images/projects/credex-web.png';
import { Lang } from '../i18n/dictionary';

export type Category = 'movil' | 'web';
export type Tech = 'Figma' | 'Adobe XD' | 'iOS' | 'Android' | 'Web';
export type Bilingual = Record<Lang, string>;

export interface CaseSection {
  heading: Bilingual;
  body: Bilingual;
}

export interface Project {
  id: string;
  num: string;
  title: string;
  category: Category;
  techs: Tech[];
  platform: Bilingual;
  image: string;
  description: Bilingual;
  tags: Bilingual[];
  /** Omit until the write-up exists — the dialog then shows an honest "in progress" state. */
  caseStudy?: CaseSection[];
}

export const TECHS: Tech[] = ['Figma', 'Adobe XD', 'iOS', 'Android', 'Web'];

export const projects: Project[] = [
  {
    id: 'credex-movil',
    num: '01',
    title: 'CREDEX MÓVIL / ZÜ MÓVIL',
    category: 'movil',
    techs: ['Figma', 'iOS', 'Android'],
    platform: { es: 'iOS · Android', en: 'iOS · Android' },
    image: credexMobile,
    description: {
      es: 'Rediseño UI/UX de la aplicación móvil de Credex en Nicaragua y Zü en Guatemala, publicada en Android e iOS.',
      en: 'UI/UX redesign of the Credex mobile app in Nicaragua and Zü in Guatemala, published on Android and iOS.'
    },
    tags: [
      { es: 'Rediseño', en: 'Redesign' },
      { es: 'Banca de consumo', en: 'Consumer finance' },
      { es: 'Figma', en: 'Figma' }
    ],
    caseStudy: [
      {
        heading: { es: 'El punto de partida', en: 'The starting point' },
        body: {
          es: 'La app existía y se usaba, pero el recorrido no acompañaba a quien la abría por primera vez. Analicé la usabilidad de las pantallas en producción para entender dónde se atascaba el usuario final.',
          en: 'The app already existed and was in use, but the journey did not support a first-time user. I analysed the usability of the production screens to find where the end user got stuck.'
        }
      },
      {
        heading: { es: 'Qué hice', en: 'What I did' },
        body: {
          es: 'Rediseñé las pantallas donde la fricción era mayor y agregué elementos que antes no existían: los estados y las señales que faltaban para que el usuario supiera dónde estaba y qué seguía. El objetivo era uno solo — hacerlo más fácil para el usuario final.',
          en: 'I redesigned the screens with the most friction and added elements that were not there before: the missing states and signals that tell the user where they are and what comes next. The goal was singular — make it easier for the end user.'
        }
      },
      {
        heading: { es: 'Cómo se entregó', en: 'How it shipped' },
        body: {
          es: 'El rediseño salió a producción en Android e iOS, y la misma base sirvió para Credex en Nicaragua y Zü en Guatemala: dos marcas sobre un mismo sistema de pantallas.',
          en: 'The redesign shipped to production on Android and iOS, and the same base served Credex in Nicaragua and Zü in Guatemala: two brands on one screen system.'
        }
      }
    ]
  },
  {
    id: 'cashmax',
    num: '02',
    title: 'CASHMAX',
    category: 'movil',
    techs: ['Figma', 'Android'],
    platform: { es: 'Android', en: 'Android' },
    image: cashMax,
    description: {
      es: 'Diseño UI/UX de la app móvil para uso interno de los agentes de servicio de Credex en Nicaragua, publicada en Android.',
      en: 'UI/UX design of the internal mobile app for Credex service agents in Nicaragua, published on Android.'
    },
    tags: [
      { es: 'Producto nuevo', en: 'New product' },
      { es: 'Herramienta interna', en: 'Internal tool' }
    ]
  },
  {
    id: 'crops',
    num: '03',
    title: 'CROPS',
    category: 'web',
    techs: ['Adobe XD', 'Web'],
    platform: { es: 'Web', en: 'Web' },
    image: crops,
    description: {
      es: 'Rediseño UI/UX de la aplicación web de uso interno de los agentes de servicio de Credex en Nicaragua.',
      en: 'UI/UX redesign of the internal web app used by Credex service agents in Nicaragua.'
    },
    tags: [
      { es: 'Rediseño', en: 'Redesign' },
      { es: 'Datos densos', en: 'Dense data' }
    ]
  },
  {
    id: 'servimax',
    num: '04',
    title: 'SERVIMAX CA',
    category: 'movil',
    techs: ['Figma', 'Android'],
    platform: { es: 'Android', en: 'Android' },
    image: serviMax,
    description: {
      es: 'Rediseño UI/UX de la app móvil de uso interno de los agentes de Credex en Nicaragua y Zü en Guatemala, publicada en Android.',
      en: 'UI/UX redesign of the internal mobile app for Credex agents in Nicaragua and Zü in Guatemala, published on Android.'
    },
    tags: [
      { es: 'Rediseño', en: 'Redesign' },
      { es: 'Dos países', en: 'Two countries' }
    ]
  },
  {
    id: 'pos',
    num: '05',
    title: 'POS · EXTRAGARANTÍA',
    category: 'web',
    techs: ['Adobe XD', 'Web'],
    platform: { es: 'Web', en: 'Web' },
    image: pos,
    description: {
      es: 'Rediseño UI/UX del módulo de extragarantía en la aplicación web de los agentes de Credex en Nicaragua y Zü en Guatemala.',
      en: 'UI/UX redesign of the extended-warranty module in the web app used by Credex agents in Nicaragua and Zü in Guatemala.'
    },
    tags: [
      { es: 'Módulo', en: 'Module' },
      { es: 'Punto de venta', en: 'Point of sale' }
    ]
  },
  {
    id: 'ibo',
    num: '06',
    title: 'IBO · OPORTUNIDADES',
    category: 'web',
    techs: ['Figma', 'Web'],
    platform: { es: 'Web', en: 'Web' },
    image: ibo,
    description: {
      es: 'Rediseño UI/UX del módulo de oportunidades de una aplicación web comercial para corredurías de seguros en Nicaragua.',
      en: 'UI/UX redesign of the opportunities module in a commercial web app for insurance brokerages in Nicaragua.'
    },
    tags: [
      { es: 'Módulo', en: 'Module' },
      { es: 'Seguros', en: 'Insurance' }
    ]
  },
  {
    id: 'ccn',
    num: '07',
    title: 'CCN · CAMPAÑAS',
    category: 'web',
    techs: ['Figma', 'Web'],
    platform: { es: 'Propuesta', en: 'Proposal' },
    image: ccn,
    description: {
      es: 'Propuesta de diseño UI/UX de una aplicación interna de la Compañía Cervecera de Nicaragua para medir campañas de venta.',
      en: 'UI/UX design proposal for an internal Compañía Cervecera de Nicaragua app measuring sales campaigns.'
    },
    tags: [
      { es: 'Concepto', en: 'Concept' },
      { es: 'Analítica', en: 'Analytics' }
    ]
  },
  {
    id: 'apex',
    num: '08',
    title: 'APEX · ALTA BMS',
    category: 'web',
    techs: ['Figma', 'Web'],
    platform: { es: 'US · EU', en: 'US · EU' },
    image: apex,
    description: {
      es: 'Diseño UI/UX de la aplicación web de Alta BMS: un sistema estadístico para corredurías de Estados Unidos y Europa.',
      en: 'UI/UX design of the Alta BMS web app: a statistics system for brokerages in the United States and Europe.'
    },
    tags: [
      { es: 'Producto nuevo', en: 'New product' },
      { es: 'Estadística', en: 'Statistics' }
    ]
  },
  {
    id: 'credex-web',
    num: '09',
    title: 'SITIO WEB CREDEX / ZÜ',
    category: 'web',
    techs: ['Figma', 'Web'],
    platform: { es: 'Sitio público', en: 'Public site' },
    image: credexWeb,
    description: {
      es: 'Rediseño UI/UX del sitio web de la marca Credex en Nicaragua y Zü en Guatemala.',
      en: 'UI/UX redesign of the Credex brand website in Nicaragua and Zü in Guatemala.'
    },
    tags: [
      { es: 'Rediseño', en: 'Redesign' },
      { es: 'Marca', en: 'Brand' }
    ]
  }
];

export default projects;
