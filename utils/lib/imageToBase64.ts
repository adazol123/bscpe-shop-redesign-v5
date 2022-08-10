/**
 * data:image;base64 format
 */
// const reader = new FileReader()
// reader.readAsDataURL(event.target.files[0])
// reader.addEventListener('load', () => {

// })

const imageToBase64 = (file: Blob) => {
  /**
   * data:image;base64 format
   */
  const reader = new FileReader();
  reader.readAsDataURL(file);
  return reader.addEventListener("load", () => {
    return reader.result;
  });
};

export default imageToBase64;
