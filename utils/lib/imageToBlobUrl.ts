/**
 *
 * @param file - Blob | MediaSource
 * @returns a `string` of blob url
 *
 * sample(url): (`blob:{domain}:{port}/dd06f216-4920-493a-b239-6467ca9d8556`)
 *
 */
const imageToBlobUrl = (file: Blob | MediaSource) => {
  if (file) {
    return URL.createObjectURL(file);
  }
};

export default imageToBlobUrl;
