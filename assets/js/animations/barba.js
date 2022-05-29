import initliseCompoents from '../main.js'

barba.init({
  cacheIgnore: true, //since we use a sevice worker barba should not cache pages
  transitions: [
    //home transitions
    {
      from: {namespace: "home"},
      leave: (data) =>
        gsap.to(data.current.container, {
          x: -10,
          duration: 0.4
        }),
      afterLeave: (data) =>
        gsap.to(data.current.container, {
          //hide an element so it is'nt even rendered in the veiwport
          display: "none",
          duration: 0
        }),
      enter: (data) =>
        gsap.from(data.next.container, {
          x: 10,
          duration: 0.4
        }),
        afterEnter: (data) => {
          initliseCompoents();
          data.next.container.removeAttribute("style");// jsap add's transform inline style this breaks materialbox as it adds another stacking context
        },
    },//from
    {
      to: {namespace: "home"},
      //sync: true,
      leave: (data) =>
        gsap.to(data.current.container, {
          x: 10,
          duration: 0.4
        }),
      afterLeave: (data) =>
        gsap.to(data.current.container, {
          //hide an element so it is'nt even rendered in the veiwport
          display: "none",
          duration: 0
        }),
      enter: (data) =>
        gsap.from(data.next.container, {
          x: -10,
          duration: 0.4
        }),
        afterEnter: (data) => {//initialise all our components
          initliseCompoents()
          data.next.container.removeAttribute("style");// jsap add's transform inline style this breaks materialbox as it adds another stacking context
        },
    },//to
    
    //other transitions
    /*{
      //this brakes transition
      once: ({ next }) => gsap.from(next.container, {
          opacity: 0,
          y: 10,
          duration: 0.4
      }),
    },*/
    {
      //after: addScrollTrigger,//this function is from ./page first load animation see line 1
    }
  ]
});
