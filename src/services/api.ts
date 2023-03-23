
import axios from "axios";

// TODO: checks if the id is an available file
function doesIdExist(id: string): boolean {
  if(id == "123456") return true;
  return false;
}

// TODO: returns the download link for a file
function getFileLink(id: string): string|null {
  if(id == "123456") return "https://picsum.photos/500";
  return null;
}

// TODO: uploads a file while sending progress to progressCd
async function uploadFile(file: File, progressCb: any): Promise<string|null> {
  const formData = new FormData();
  formData.append('file', file);
  const headers = { 'Content-Type': 'multipart/form-data' };
  const res = await axios.post('https://httpbin.org/post', formData, {
    headers,
    onUploadProgress: progressCb
  });

  return "123456";
}

export default {
  doesIdExist,
  getFileLink,
  uploadFile,
}