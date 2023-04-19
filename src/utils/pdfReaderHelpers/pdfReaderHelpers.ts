export const isBrowser = typeof window !== 'undefined';

export function getPixelRatio() {
  return (isBrowser && window.devicePixelRatio) || 1;
}

export function makePageCallback(page: any, scale: any) {
  Object.defineProperty(page, 'width', {
    get() {
      return this.view[2] * scale;
    },
    configurable: true
  });
  Object.defineProperty(page, 'height', {
    get() {
      return this.view[3] * scale;
    },
    configurable: true
  });
  Object.defineProperty(page, 'originalWidth', {
    get() {
      return this.view[2];
    },
    configurable: true
  });
  Object.defineProperty(page, 'originalHeight', {
    get() {
      return this.view[3];
    },
    configurable: true
  });
  return page;
}

// Highlight helpers from github.com/agentcooper/react-pdf-highlighter

interface LTWH {
  left: number;
  top: number;
  width: number;
  height: number;
}

const sort = (rects: Array<LTWH>) =>
  rects.sort((A, B) => {
    const top = A.top - B.top;

    if (top === 0) {
      return A.left - B.left;
    }

    return top;
  });

const overlaps = (A: LTWH, B: LTWH) =>
  A.left <= B.left && B.left <= A.left + A.width;

const sameLine = (A: LTWH, B: LTWH, yMargin = 10) =>
  Math.abs(A.top - B.top) < yMargin && Math.abs(A.height - B.height) < yMargin;

const inside = (A: LTWH, B: LTWH) =>
  A.top > B.top &&
  A.left > B.left &&
  A.top + A.height < B.top + B.height &&
  A.left + A.width < B.left + B.width;

const nextTo = (A: LTWH, B: LTWH, xMargin = 10) => {
  const Aright = A.left + A.width;
  const Bright = B.left + B.width;

  return A.left <= B.left && Aright <= Bright && B.left - Aright <= xMargin;
};

const extendWidth = (A: LTWH, B: LTWH) => {
  // extend width of A to cover B
  A.width = Math.max(B.width - A.left + B.left, A.width);
};

export const optimizeClientRects = (clientRects: Array<LTWH>): Array<LTWH> => {
  const rects = sort(clientRects);

  const toRemove = new Set();

  const firstPass = rects.filter((rect) => {
    return rects.every((otherRect) => {
      return !inside(rect, otherRect);
    });
  });

  let passCount = 0;

  while (passCount <= 2) {
    firstPass.forEach((A) => {
      firstPass.forEach((B) => {
        if (A === B || toRemove.has(A) || toRemove.has(B)) {
          return;
        }

        if (!sameLine(A, B)) {
          return;
        }

        if (overlaps(A, B)) {
          extendWidth(A, B);
          A.height = Math.max(A.height, B.height);

          toRemove.add(B);
        }

        if (nextTo(A, B)) {
          extendWidth(A, B);

          toRemove.add(B);
        }
      });
    });
    passCount += 1;
  }

  return firstPass.filter((rect) => !toRemove.has(rect));
};
