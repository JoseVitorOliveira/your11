import html2canvas from "html2canvas";

const exportAsImage = async (el: HTMLElement | undefined, imageFileName: string) => {
  const canvas = await html2canvas(el as HTMLElement);
  const image = canvas.toDataURL("image/png", 1.0);
  downloadImage(image, imageFileName);
};
const downloadImage = (blob: string, fileName: string) => {
  const fakeLink = window.document.createElement("a");
  const fakeLinkStyle = fakeLink.style;
  fakeLinkStyle.display = "none";
  fakeLink.download = fileName;

  fakeLink.href = blob;

  document.body.appendChild(fakeLink);
  fakeLink.click();
  document.body.removeChild(fakeLink);

  fakeLink.remove();
};

export default exportAsImage;
