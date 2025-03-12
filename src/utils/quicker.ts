export async function fileToBase64(file: File): Promise<string> {
  if (!(file instanceof File)) {
    throw new Error("Image is not a valid File object");
  }
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = (error) => reject(error);
  });
}
