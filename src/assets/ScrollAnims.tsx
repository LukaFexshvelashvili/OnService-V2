import { useEffect } from "react";

export function ScrollAnim(ref: any, classRemove: string, percentage: number) {
  useEffect(() => {
    let runned = false;

    const onScroll = () => {
      if (
        !runned &&
        getOffsetTop(ref.current) <=
          window.scrollY +
            window.innerHeight -
            Math.floor((ref.current.offsetHeight / 100) * percentage)
      ) {
        runned = true;
        ref.current.firstChild.classList.remove(classRemove);
      } else if (runned) {
        window.removeEventListener("scroll", onScroll);
      }
    };
    if (
      ref.current.firstChild &&
      ref.current.firstChild.classList.contains(classRemove)
    ) {
      window.addEventListener("scroll", onScroll);
      onScroll();
    }
    return () => window.removeEventListener("scroll", onScroll);
  }, [ref, classRemove, percentage]);
}

export function ScrollParent(
  ref: any,
  classRemove: string,
  percentage: number,
  delay: number,
  startDelay?: number
) {
  if (!startDelay) startDelay = 0;
  useEffect(() => {
    let timeouts: any[] = [];
    let runned = false;
    const onScroll = () => {
      if (
        !runned &&
        getOffsetTop(ref.current.firstChild) <=
          window.scrollY +
            window.innerHeight -
            Math.floor((ref.current.offsetHeight / 100) * percentage)
      ) {
        runned = true;

        timeouts.push(
          setTimeout(() => {
            timeouts.forEach(clearTimeout); // Clear previous timeouts
            Array.from(ref.current.children).forEach((el: any, idx) => {
              timeouts.push(
                setTimeout(
                  () => el.classList.remove(classRemove),
                  (idx + 1) * delay
                )
              );
            });
          }, startDelay)
        );
      } else if (!ref.current.lastChild.classList.contains(classRemove)) {
        window.removeEventListener("scroll", onScroll);
        timeouts.forEach(clearTimeout);
      }
    };

    if (ref.current && ref.current.firstChild.classList.contains(classRemove)) {
      window.addEventListener("scroll", onScroll);
      onScroll(); // Initial check
    }
    return () => {
      window.removeEventListener("scroll", onScroll);
      timeouts.forEach(clearTimeout);
    };
  }, [ref, classRemove, percentage, delay]);
}

export function ScrollParentClassList(
  ref: any,
  classRemove: string[],
  percentage: number,
  delay: number
) {
  useEffect(() => {
    let timeouts: any[] = [];
    let runned = false;

    const onScroll = () => {
      if (
        !runned &&
        getOffsetTop(ref.current) <=
          window.scrollY +
            window.innerHeight -
            Math.floor((ref.current.offsetHeight / 100) * percentage)
      ) {
        runned = true;
        timeouts.forEach(clearTimeout);
        Array.from(ref.current.children).forEach((el: any, idx) => {
          classRemove.forEach((cls) =>
            timeouts.push(
              setTimeout(() => el.classList.remove(cls), (idx + 1) * delay)
            )
          );
        });
      } else if (
        !classRemove.some((cls) =>
          ref.current.lastChild.classList.contains(cls)
        )
      ) {
        window.removeEventListener("scroll", onScroll);
        timeouts.forEach(clearTimeout);
      }
    };
    if (
      ref.current &&
      classRemove.some((cls) => ref.current.lastChild.classList.contains(cls))
    ) {
      window.addEventListener("scroll", onScroll);
      onScroll(); // Initial check
    }
    return () => {
      window.removeEventListener("scroll", onScroll);
      timeouts.forEach(clearTimeout);
    };
  }, [ref, classRemove, percentage, delay]);
}

function getOffsetTop(element: HTMLDivElement) {
  const rect = element.getBoundingClientRect();
  return rect.top + window.scrollY;
}
