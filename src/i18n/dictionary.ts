export type Lang = 'es' | 'en';

type Entry = Record<Lang, string>;

export const dictionary: Record<string, Entry> = {
  'nav.work':        { es: 'Trabajo', en: 'Work' },
  'nav.skills':      { es: 'Capacidades', en: 'Skills' },
  'nav.system':      { es: 'Sistema', en: 'System' },
  'nav.voices':      { es: 'Voces', en: 'Voices' },
  'nav.cta':         { es: 'Contáctame', en: 'Get in touch' },

  'hero.location':   { es: 'Managua, Nicaragua · Remoto', en: 'Managua, Nicaragua · Remote' },
  'hero.title.1':    { es: 'DISEÑO LA EXPERIENCIA', en: 'I DESIGN THE EXPERIENCE' },
  'hero.title.2':    { es: 'Y LA ENTREGO', en: 'AND SHIP IT' },
  'hero.title.3':    { es: 'CONSTRUIDA EN REACT.', en: 'BUILT IN REACT.' },
  'hero.lead':       {
    es: 'Más de 13 años en la intersección del diseño y la tecnología. He acompañado el desarrollo y la ejecución de productos visuales y digitales en distintas industrias, alineando siempre los objetivos del negocio con las necesidades reales del usuario.',
    en: 'Over 13 years at the intersection of design and technology. I have contributed to the development and execution of visual and digital products across industries, always aligning business objectives with real user needs.'
  },
  'hero.sub':        {
    es: 'Diseño en Figma, implemento en React + Bootstrap. Sin handoff perdido en la traducción.',
    en: 'I design in Figma and implement in React + Bootstrap. No handoff lost in translation.'
  },
  'hero.cta.work':   { es: 'Ver los 9 proyectos', en: 'See the 9 projects' },
  'hero.cta.cv':     { es: 'Descargar CV', en: 'Download CV' },
  'hero.stat.years': { es: 'Años de experiencia', en: 'Years of experience' },
  'hero.stat.ships': { es: 'Productos entregados', en: 'Products shipped' },
  'hero.stat.geos':  { es: 'Países en producción', en: 'Countries in production' },
  'hero.stat.apps':  { es: 'Apps publicadas', en: 'Published apps' },

  'work.kicker':     { es: 'Portafolio', en: 'Portfolio' },
  'work.title':      { es: 'PROYECTOS EN PRODUCCIÓN', en: 'PROJECTS IN PRODUCTION' },
  'work.filter.all': { es: 'Todos', en: 'All' },
  'work.filter.movil': { es: 'Móvil', en: 'Mobile' },
  'work.filter.web': { es: 'Web', en: 'Web' },
  'work.tech':       { es: 'Tecnología', en: 'Technology' },
  'work.clear':      { es: 'Limpiar', en: 'Clear' },
  'work.empty':      { es: 'Ningún proyecto coincide con esos filtros.', en: 'No projects match those filters.' },
  'work.viewcase':   { es: 'Ver caso', en: 'View case' },
  'work.count.one':  { es: 'proyecto', en: 'project' },
  'work.count.many': { es: 'proyectos', en: 'projects' },

  'case.label':      { es: 'Caso', en: 'Case' },
  'case.zoom':       { es: 'Clic para acercar', en: 'Click to zoom' },
  'case.close':      { es: 'Cerrar', en: 'Close' },
  'case.pending.h':  { es: 'Caso en preparación', en: 'Case study in progress' },
  'case.pending.cta':{ es: 'Pregúntame por este proyecto →', en: 'Ask me about this project →' },

  'form.err.name':   { es: 'Escribe tu nombre.', en: 'Please enter your name.' },
  'form.err.email':  { es: 'Necesito un email para responderte.', en: 'I need an email to reply to you.' },
  'form.err.emailBad': { es: 'Ese email no parece válido.', en: "That email doesn't look valid." },
  'form.err.message':{ es: 'Cuéntame algo del proyecto. Dos líneas bastan.', en: 'Tell me something about the project. Two lines is enough.' },
  'form.sending':    { es: 'Enviando…', en: 'Sending…' },
  'form.sent':       { es: 'Enviado', en: 'Sent' },
  'form.success':    {
    es: 'Mensaje listo. Se abrió tu cliente de correo con todo escrito — solo dale enviar.',
    en: 'Message ready. Your mail client opened with everything written — just hit send.'
  },

  'theme.toggle':    { es: 'Cambiar tema', en: 'Toggle theme' },

  'skills.kicker':   { es: 'Capacidades', en: 'Capabilities' },
  'skills.title':    { es: 'DOS OFICIOS, UNA CABEZA', en: 'TWO CRAFTS, ONE HEAD' },
  'skills.design':   { es: 'DISEÑO UI/UX', en: 'UI/UX DESIGN' },
  'skills.design.sub': { es: 'Del problema al sistema.', en: 'From problem to system.' },
  'skills.front.sub':  { es: 'Del sistema al producto en producción.', en: 'From system to shipped product.' },
  'level.expert':    { es: 'Experto', en: 'Expert' },
  'level.advanced':  { es: 'Avanzado', en: 'Advanced' },
  'level.solid':     { es: 'Sólido', en: 'Solid' },

  'system.kicker':   { es: 'Sistema propio', en: 'Own system' },
  'system.title':    { es: 'NO ENTREGO PANTALLAS: ENTREGO UN SISTEMA', en: "I DON'T SHIP SCREENS: I SHIP A SYSTEM" },
  'system.p1':       {
    es: 'Cada proyecto sale con tokens, componentes y estados documentados. Al implementarlos yo mismo sobre Bootstrap, el nombre que existe en el diseño es el mismo que existe en el código.',
    en: 'Every project ships with documented tokens, components and states. Because I implement them myself on top of Bootstrap, the name in the design is the name in the code.'
  },
  'system.p2':       {
    es: 'Eso reduce las sesiones de handoff, elimina las decisiones improvisadas en desarrollo y mantiene la coherencia entre plataformas.',
    en: 'That cuts handoff meetings, removes improvised decisions in development and keeps platforms coherent.'
  },
  'system.color':    { es: 'Color', en: 'Color' },
  'system.type':     { es: 'Tipografía', en: 'Type' },
  'system.components': { es: 'Componentes', en: 'Components' },
  'system.primary':  { es: 'Primario', en: 'Primary' },
  'system.secondary':{ es: 'Secundario', en: 'Secondary' },

  'voices.kicker':   { es: 'Voces', en: 'Voices' },
  'voices.title':    { es: 'LO QUE DICEN LOS EQUIPOS', en: 'WHAT TEAMS SAY' },
  'voices.attribution': { es: 'Nombre · Cargo · Empresa', en: 'Name · Role · Company' },

  'contact.kicker':  { es: 'Contacto', en: 'Contact' },
  'contact.title':   { es: '¿TIENES UN PRODUCTO QUE NECESITA DISEÑO Y CÓDIGO?', en: 'GOT A PRODUCT THAT NEEDS BOTH DESIGN AND CODE?' },
  'contact.lead':    {
    es: 'Cuéntame el problema y te digo con honestidad si soy la persona correcta. Respondo en menos de 48 horas.',
    en: 'Tell me the problem and I will honestly say whether I am the right person. I reply within 48 hours.'
  },
  'contact.based':   { es: 'Base', en: 'Based' },
  'contact.name':    { es: 'Nombre', en: 'Name' },
  'contact.project': { es: 'El proyecto', en: 'The project' },
  'contact.project.ph': { es: 'Dos líneas bastan.', en: 'Two lines are enough.' },
  'contact.send':    { es: 'Enviar mensaje', en: 'Send message' },

  'footer.portfolio':{ es: 'Portafolio', en: 'Portfolio' },
  'footer.made':     { es: 'Diseñado en Figma, construido en React + Bootstrap.', en: 'Designed in Figma, built in React + Bootstrap.' }
};
