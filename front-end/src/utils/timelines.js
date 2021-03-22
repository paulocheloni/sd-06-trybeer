import { TimelineMax as Timeline, Power1 } from 'gsap';

const getDefaultTimeline = (node, delay) => {
  const timeline = new Timeline({ paused: true });
  const content = node.querySelector('.content');
  const time = 0.5;

  if (content !== null) {
    timeline
      .from(node, time, { opacity: 0, autoAlpha: 0, ease: Power1.easeIn })
      .from(content, 0, { opacity: 0, autoAlpha: 0, delay, ease: Power1.easeIn });
  } else {
    timeline
      .from(node, time, { opacity: 0, autoAlpha: 0, ease: Power1.easeIn });
  }

  return timeline;
};

export const play = (pathname, node, appears) => {
  const delay = appears && 0;

  const timeline = getDefaultTimeline(node, delay);

  timeline.play();
};

export const exit = (node) => {
  const timeline = new Timeline({ paused: true });
  const time = 0;

  timeline.to(node, time, { opacity: 0, autoAlpha: 0, ease: Power1.easeIn });

  timeline.play();
};
