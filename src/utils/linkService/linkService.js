// Copied from wojtekmaj/react-pdf
/* eslint-disable class-methods-use-this, no-empty-function */

export default class LinkService {
  constructor() {
    this.externalLinkTarget = null;
    this.externalLinkRel = null;
    this.externalLinkEnabled = true;
  }

  setDocument(pdfDocument) {
    this.pdfDocument = pdfDocument;
  }

  setViewer(pdfViewer) {
    this.pdfViewer = pdfViewer;
  }

  setHistory() {}

  get pagesCount() {
    return this.pdfDocument ? this.pdfDocument.numPages : 0;
  }

  get page() {
    return this.pdfViewer.currentPageNumber;
  }

  set page(value) {
    this.pdfViewer.currentPageNumber = value;
  }

  get rotation() {
    return 0;
  }

  set rotation(value) {}

  goToDestination(dest) {
    new Promise((resolve) => {
      if (typeof dest === 'string') {
        this.pdfDocument.getDestination(dest).then(resolve);
      } else {
        dest.then(resolve);
      }
    }).then((explicitDest) => {
      if (!Array.isArray(explicitDest)) {
        throw new Error(`"${explicitDest}" is not a valid destination array.`);
      }

      const destRef = explicitDest[0];

      new Promise((resolve) => {
        if (destRef instanceof Object) {
          this.pdfDocument
            .getPageIndex(destRef)
            .then((pageIndex) => {
              resolve(pageIndex + 1);
            })
            .catch(() => {
              throw new Error(`"${destRef}" is not a valid page reference.`);
            });
        } else if (typeof destRef === 'number') {
          resolve(destRef + 1);
        } else {
          throw new Error(`"${destRef}" is not a valid destination reference.`);
        }
      }).then((pageNumber) => {
        if (!pageNumber || pageNumber < 1 || pageNumber > this.pagesCount) {
          throw new Error(`"${pageNumber}" is not a valid page number.`);
        }

        this.pdfViewer.scrollPageIntoView({
          pageNumber
        });
      });
    });
  }

  navigateTo(dest) {
    this.goToDestination(dest);
  }

  goToPage() {}

  getDestinationHash() {
    return '#';
  }

  getAnchorUrl() {
    return '#';
  }

  setHash() {}

  executeNamedAction() {}

  cachePageRef() {}

  isPageVisible() {
    return true;
  }

  isPageCached() {
    return true;
  }
}
