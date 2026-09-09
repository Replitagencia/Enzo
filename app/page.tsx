"use client";

import { useState } from "react";

const lessons = [
  { icon: "/assets/iconos-14.png", title: "Siempre sonríe", text: "El mundo cambia cuando lo miras con una sonrisa. Sonreír libera hormonas que te hacen sentir mejor y reduce el estrés." },
  { icon: "/assets/iconos-15.png", title: "Valentía", text: "La diferencia está en atreverse. No esperes a que llegue el momento perfecto: da el primer paso." },
  { icon: "/assets/iconos-16.png", title: "Gánale a tu mente", text: "Nuestros pensamientos tienen un gran poder. Aprende a manejarlos para recuperar el control." },
];
const experiences = [
  { number: "01", title: "Se puede", text: "Siempre hay una manera de avanzar, descubrir tu propósito y encontrar tu luz." },
  { number: "02", title: "Entrega", text: "Lo que entregas transforma el espacio y a las personas que te rodean." },
  { number: "03", title: "Sello", text: "Haz que cada paso tenga tu sello y deja una huella positiva en los demás." },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  return <main>
    <header className="site-header">
      <a href="#inicio" className="brand"><img src="/assets/logo-enzo.png" alt="Enzo Amadei" /></a>
      <nav className={menuOpen ? "nav open" : "nav"}>
        <a href="#historia" onClick={() => setMenuOpen(false)}>Acerca de mí</a><a href="#aprendizajes" onClick={() => setMenuOpen(false)}>Libérate</a><a href="#experiencias" onClick={() => setMenuOpen(false)}>Programas</a><a href="#decision" onClick={() => setMenuOpen(false)}>Charlas motivacionales</a><a href="#contacto" onClick={() => setMenuOpen(false)}>Contacto</a>
      </nav>
      <a href="#contacto" className="header-cta">Agenda una conversación <span>→</span></a><button className="menu-button" aria-label="Abrir menú" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? "×" : "☰"}</button>
    </header>

    <section id="inicio" className="hero"><img src="/assets/HERO.jpg" alt="Enzo Amadei en una conferencia" className="hero-bg" /><div className="hero-content"><p className="eyebrow light">COACH DE VIDA · CONFERENCISTA</p><h1>“Haz de tu pasado<br />una <em>historia increíble</em>”</h1><p className="hero-copy">Acompaño a personas a transformar sus experiencias en aprendizaje, recuperar su poder y crear una vida con propósito.</p><div className="button-row"><a className="button yellow" href="#experiencias">Conoce mis programas <span>→</span></a><a className="button ghost" href="#historia"><span className="play">▶</span> Ver video</a></div><div className="hero-stats"><Stat icon="/assets/icono-hero-1.png" label="PERSONAS" sub="MÁS LIBRES" /><Stat icon="/assets/icono-hero-2.png" label="VIDAS CON" sub="MÁS PROPÓSITO" /><Stat icon="/assets/icono-hero-3.png" label="HISTORIAS" sub="REALES" /></div></div><div className="hero-tag">TRANSFORMA<br />· INSPIRA ·<br />LIBÉRATE</div></section>

    <section id="historia" className="story section-image section-two"><img src="/assets/seccion-2.jpg" alt="Enzo hablando ante una audiencia" className="section-bg" /><div className="story-copy content-width"><p className="eyebrow">MI HISTORIA</p><h2>De la adversidad<br />a una vida con<br /><em>propósito</em></h2><p>Conoce mi historia y cómo transformé las dificultades en una fuente de aprendizaje para vivir con más libertad, ilusión y propósito.</p><div className="mini-lessons"><Mini icon="/assets/iconos-11.png" text="Superar desafíos" /><Mini icon="/assets/iconos-12.png" text="Recuperar la ilusión" /><Mini icon="/assets/iconos-13.png" text="Inspirar a otros" /></div><a className="button yellow" href="#aprendizajes"><span className="play dark">▶</span> Ver mi historia</a></div><div className="quote">“La vida siempre te da<br />una nueva oportunidad”<small>Enzo Amadei</small></div></section>

    <section id="aprendizajes" className="lessons section-image"><img src="/assets/seccion-3.jpg" alt="Enzo en una conferencia" className="section-bg" /><div className="content-width centered"><p className="eyebrow">EXPERIENCIAS QUE TRANSFORMAN</p><h2>Algunos <em>consejos</em> de mi persona</h2><p className="section-intro">Reflexiones que nacen de mi experiencia y que pueden ayudarte en tu propio camino.</p><div className="lesson-grid">{lessons.map((item) => <article className="lesson-card" key={item.title}><img src={item.icon} alt="" /><h3>{item.title}</h3><p>{item.text}</p></article>)}</div></div></section>

    <section id="experiencias" className="experiences section-image"><img src="/assets/seccion-4.jpg" alt="Montañas en niebla" className="section-bg" /><div className="content-width centered"><p className="eyebrow">MI CAMINO EN ACCIÓN</p><h2>Experiencias que <em>dejan huella</em></h2><p className="section-intro">Tres momentos que han marcado mi camino y que hoy quiero compartir contigo.</p><div className="experience-grid">{experiences.map((item, index) => <article className="experience-card" key={item.number}><div className={`experience-photo photo-${index + 1}`} /><div className="experience-body"><span>{item.number}</span><h3>{item.title}</h3><p>{item.text}</p></div></article>)}</div></div></section>

    <section id="decision" className="decision section-image"><img src="/assets/seccion-5.jpg" alt="Persona subiendo una montaña" className="section-bg" /><div className="decision-copy content-width"><p className="eyebrow">CONSTRUYE TU PRESENTE</p><h2>Decisión<span>.</span></h2><p className="lead">La decisión que tomas hoy puede cambiar tu vida mañana.</p><p>Es nuestra manera de construir nuestro presente y futuro, teniendo tanto de poder esta palabra que cambia y transforma vidas dependiendo de cuál decisión tomemos.</p><div className="decision-points"><Mini icon="/assets/iconos-17.png" text="Más claridad" /><Mini icon="/assets/iconos-18.png" text="Más propósito" /><Mini icon="/assets/iconos-19.png" text="Más impacto" /></div></div></section>

    <section className="final-cta section-image"><img src="/assets/seccion-6.jpg" alt="Enzo celebrando en la montaña" className="section-bg" /><div className="final-copy content-width"><p className="eyebrow light">PERSONAS MÁS LIBRES</p><h2>No decidí mi discapacidad,<br /><em>pero sí decidí cómo vivirla.</em></h2><p>La vida siempre te va a poner desafíos, pero la decisión de cómo enfrentarlos siempre será tuya.</p><a className="button yellow" href="#contacto">¿Qué harías tú? <span>→</span></a></div><div className="final-quote">“Solo tú puedes <em>cambiar tu mundo</em>”</div></section>

    <footer id="contacto" className="footer"><div><img src="/assets/logo-enzo.png" alt="Enzo Amadei" className="footer-logo" /><p>PERSONAS MÁS LIBRES<br />UN MUNDO MÁS HUMANO</p></div><div className="footer-motto">“Solo tú puedes<br /><em>cambiar tu mundo</em>”</div><div><p className="eyebrow light">SÍGUEME EN<br />MIS REDES</p><div className="socials"><a href="mailto:hola@enzoamadei.com" aria-label="Escribir por correo">✉</a><a href="#inicio" aria-label="Instagram">◎</a><a href="#inicio" aria-label="WhatsApp">◔</a></div></div><div className="footer-bottom">© 2024 Enzo Amadei. Todos los derechos reservados. <span>Inicio　|　Acerca de mí　|　Programas　|　Contacto</span></div></footer>
  </main>;
}
function Stat({ icon, label, sub }: { icon: string; label: string; sub: string }) { return <div className="stat"><img src={icon} alt="" /><div>{label}<strong>{sub}</strong></div></div>; }
function Mini({ icon, text }: { icon: string; text: string }) { return <div className="mini"><img src={icon} alt="" /><span>{text}</span></div>; }
