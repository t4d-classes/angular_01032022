

export const getInnerHtml = (
  nativeElement: any, selector: string) => {

    const rootElement = nativeElement as HTMLDivElement;

    const selectedElement = rootElement.querySelector(selector);

    return selectedElement?.innerHTML;

};