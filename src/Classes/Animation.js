import { gsap } from "gsap";
export default class Animation {
  hideNav = () => {
    let paddingAnimation = gsap.timeline(this.navAnimationProps);
    let textSizeAnimation = gsap.timeline(this.textSizeProps);
    paddingAnimation.to(this.elements[0], {}, "<");
    textSizeAnimation.to(this.elements[1], {}, "<");
    textSizeAnimation.to(this.elements[2], {}, "<");
  };

  animateHeroImage = (index, nextIndex) => {
    let animation = gsap.timeline(this.standartProps);
    animation.to(
      this.elements[index],
      {
        opacity: 0,
      },
      "",
    );
    animation.to(
      this.elements[nextIndex],
      {
        opacity: 1,
      },
      "",
    );
  };

  animateAll = (appearingPos, translatePos) => {
    let translate = gsap.timeline(this.standartProps);
    let appearing = gsap.timeline(this.standartProps);

    this.elements.forEach((element) => {
      appearing.to(element, { opacity: 1 }, appearingPos);
      translate.to(element, { translateX: "0" }, translatePos);
    });
  };

  constructor(elements, reverse = false) {
    this.elements = elements;
    this.reverse = reverse;

    this.navAnimationProps = {
      defaults: {
        paddingTop: this.reverse ? "2rem" : ".5rem",
        paddingBottom: this.reverse ? "2rem" : ".5rem",
        duration: 0.25,
        ease: "power3.inOut",
      },
    };

    this.textSizeProps = {
      defaults: {
        fontSize: this.reverse ? "1.875rem" : "1.25rem",
        duration: 0.25,
        ease: "power3.inOut",
      },
    };

    this.standartProps = {
      defaults: {
        duration: 1,
        ease: "power3.inOut",
      },
    };
  }
}