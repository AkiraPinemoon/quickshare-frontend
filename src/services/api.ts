
import axios from "axios";

const BASE_API_ROUTE = "https://quickshare.alpha-ome.ga/api/";

// TODO: checks if the id is an available file
async function doesIdExist(id: string): Promise<boolean> {
  const res = await axios.get(BASE_API_ROUTE + "isValid/" + id);
  console.log(res.data);
  if(res.data == "true") return true;
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

// TODO: send keep online message
function keepOnline(id: string) {
}

// TODO: send unload message
function unloadFile(id: string) {
}

export default {
  doesIdExist,
  getFileLink,
  uploadFile,
  keepOnline,
  unloadFile,
}