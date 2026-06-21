export default function getTsParticlesConfig(isDark: boolean) {
  // Light mode: partículas oscuras sobre fondo claro (#f0f2f9)
  // Dark mode:  partículas claras sobre fondo oscuro (#03040a)
  const color   = isDark ? "#ffffff" : "#000";
  const opacityMax   = isDark ? 0.20 : 0.35;
  const opacityMin   = isDark ? 0.05 : 0.10;
  const linkOpacity  = isDark ? 0.05 : 0.15;
  const grabOpacity  = isDark ? 0.10 : 0.20;

  return {
    fullScreen: { enable: false },
    background: { color: { value: "transparent" } },
    particles: {
      number: { value: 75, density: { enable: true } },
      paint: {
        fill: {
            color: color,
            opacity: opacityMax
        }
      },
      color: { value: color },
      shape: { type: "circle" },
      opacity: { value: { min: opacityMin, max: opacityMax } },
      size: { value: { min: 1, max: 2.5 } },
      links: {
        enable: true,
        distance: 160,
        color: color,
        opacity: linkOpacity,
        width: 1,
      },
      move: {
        enable: true,
        speed: 0.6,
        direction: "none",
        outModes: { default: "bounce" },
      },
    },
    interactivity: {
      events: { onHover: { enable: true, mode: "grab" } },
      modes: {
        grab: { distance: 180, links: { opacity: grabOpacity } },
      },
    },
  };
}
