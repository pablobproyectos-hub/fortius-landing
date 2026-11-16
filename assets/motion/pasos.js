/*
  "Una rutina en 3 pasos" (#rutinas): en PC la sección queda fija mientras se scrollea y los
  pasos 2 y 3 entran uno tras otro. Solo se anima transform (y) y opacity.
  Sin animación (la grilla queda como está): celulares y tablets (< 1024px), prefers-reduced-motion,
  <html data-motion="off">, o si GSAP no cargó.
*/
(() => {
  const gsap = window.gsap, ST = window.ScrollTrigger;
  const section = document.getElementById('rutinas');
  if (!gsap || !ST || !section || document.documentElement.dataset.motion === 'off') return;
  gsap.registerPlugin(ST);

  const cards = section.querySelectorAll('.grid > .card');
  if (cards.length < 3) return;
  const nav = () => parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--nav')) || 72;

  gsap.matchMedia().add('(min-width: 1024px) and (min-height: 700px) and (prefers-reduced-motion: no-preference)', () => {
    const tl = gsap.timeline({
      defaults: { ease: 'power2.out', duration: 1 },
      scrollTrigger: {
        trigger: section,
        start: () => `top top+=${nav()}`,
        end: '+=140%',
        pin: true,
        scrub: 0.6,
        anticipatePin: 1,
        invalidateOnRefresh: true,
      },
    });
    // fromTo con el final explícito: con invalidateOnRefresh un .from() volvería a leer el "final"
    // mientras la tarjeta está oculta y quedaría en opacidad 0
    const hidden = { y: 64, opacity: 0 }, shown = { y: 0, opacity: 1 };
    tl.fromTo(cards[1], hidden, shown)
      .fromTo(cards[2], hidden, { ...shown }, '+=0.25')
      .to({}, { duration: 0.4 }); // un respiro con los tres pasos a la vista antes de soltar
    // matchMedia revierte todo (estilos inline y pin) al salir de la condición
  });

  // las imágenes son lazy: recalcular cuando terminan de cargar para que el pin mida bien
  window.addEventListener('load', () => ST.refresh());
})();
