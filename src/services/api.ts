
import axios from "axios";

const BASE_API_ROUTE = "/api/";
//const BASE_API_ROUTE = "http://localhost/api/";

// checks if the id is an available file
async function doesIdExist(id: string): Promise<boolean> {
  const res = await axios.get(BASE_API_ROUTE + "isValid/" + id);
  return res.data.file;
}

// returns filename for id
async function getFilename(id: string): Promise<string> {
  const res = await axios.get(BASE_API_ROUTE + "filename/" + id);
  return res.data.filename;
}

// returns the download link for a file
function getFileLink(id: string): string {
  return BASE_API_ROUTE + "access/" + id;
}

// uploads a file while sending progress to progressCd
async function uploadFile(file: File, progressCb: any): Promise<{id: string, token: string}|null> {
  const formData = new FormData();
  formData.append("file", file);
  const headers = { "Content-Type": "multipart/form-data" };
  const res = await axios.post(BASE_API_ROUTE + "upload", formData, {
    headers,
    onUploadProgress: progressCb
  });

  return res.data;
}

// TODO: send keep online message
function keepOnline(id: string, token: string) {
  axios.post(BASE_API_ROUTE + "keepup/" + id, {token});
}

// TODO: send unload message
function unloadFile(id: string, token: string) {
  axios.post(BASE_API_ROUTE + "delete/" + id, {token});
}

export default {
  doesIdExist,
  getFilename,
  getFileLink,
  uploadFile,
  keepOnline,
  unloadFile,
}