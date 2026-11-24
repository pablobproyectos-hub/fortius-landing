/*
  "Una rutina en 3 pasos" (#rutinas): al entrar la sección en pantalla, las tres tarjetas suben y
  aparecen una tras otra, y la captura de cada una se asienta con un leve zoom. Se reproduce una sola
  vez y no frena el scroll (antes la sección quedaba fija y el scroll parecía trabado).
  Solo se anima transform y opacity. Sin animación (la grilla queda como está):
  prefers-reduced-motion, <html data-motion="off">, o si GSAP no cargó.
*/
(() => {
  const gsap = window.gsap, ST = window.ScrollTrigger;
  const section = document.getElementById('rutinas');
  if (!gsap || !ST || !section || document.documentElement.dataset.motion === 'off') return;
  gsap.registerPlugin(ST);

  const cards = section.querySelectorAll('.grid > .card');
  if (!cards.length) return;
  const imgs = section.querySelectorAll('.grid > .card .frame__img');

  gsap.matchMedia().add('(prefers-reduced-motion: no-preference)', () => {
    gsap.set(cards, { y: 48, opacity: 0 });
    gsap.set(imgs, { scale: 1.06, transformOrigin: '50% 0%' });
    const tl = gsap.timeline({
      paused: true,
      defaults: { duration: 0.9, ease: 'power3.out' },
    });
    tl.to(cards, { y: 0, opacity: 1, stagger: 0.14, clearProps: 'transform,opacity' })
      .to(imgs, { scale: 1, duration: 1.2, stagger: 0.14, clearProps: 'transform' }, 0.1);

    ST.create({
      trigger: section.querySelector('.grid'),
      start: 'top 85%',
      once: true,
      onEnter: () => tl.play(),
    });
    // si al cargar la página ya se pasó la sección, ScrollTrigger llama a onEnter enseguida.
    // matchMedia revierte los estilos inline al salir de la condición
  });
})();
