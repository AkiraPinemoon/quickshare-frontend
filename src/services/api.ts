import axios from 'axios'

const BASE_API_ROUTE = '/api/'
//const BASE_API_ROUTE = "http://192.168.178.165/api/";

// checks if the id is an available file
async function doesIdExist(id: string): Promise<boolean> {
  const res = await axios.get(BASE_API_ROUTE + 'isValid/' + id)
  return res.data.file
}

// returns filename for id
async function getFilename(id: string): Promise<string> {
  const res = await axios.get(BASE_API_ROUTE + 'filename/' + id)
  return res.data.filename
}

// returns the download link for a file
function getFileLink(id: string): string {
  return BASE_API_ROUTE + 'access/' + id
}

// uploads a file while sending progress to progressCb
async function uploadFile(
  file: File,
  progressCb: any
): Promise<{ id: string; token: string } | null> {
  const formData = new FormData()
  formData.append('file', file)

  const chunkSize = 5 * 1024 * 1024 // 5MB chunks
  const totalChunks = Math.ceil(file.size / chunkSize)
  const uploadId = Math.random().toString(36).substring(2, 15)

  for (let chunkIndex = 0; chunkIndex < totalChunks; chunkIndex++) {
    const start = chunkIndex * chunkSize
    const end = Math.min(start + chunkSize, file.size)
    const chunk = file.slice(start, end)

    const chunkFormData = new FormData()
    chunkFormData.append('file', chunk)
    chunkFormData.append('chunkIndex', chunkIndex.toString())
    chunkFormData.append('totalChunks', totalChunks.toString())
    chunkFormData.append('uploadId', uploadId)
    chunkFormData.append('filename', file.name)

    const res = await axios.post(BASE_API_ROUTE + 'upload', chunkFormData, {
      onUploadProgress: (progressEvent) => {
        const totalLoaded = chunkIndex * chunkSize + (progressEvent.loaded || 0)
        const totalProgress = {
          loaded: totalLoaded,
          total: file.size,
          progress: totalLoaded / file.size
        }
        progressCb(totalProgress)
      }
    })

    if (res.data.complete) {
      return res.data
    }
  }

  return null
}

// TODO: send keep online message
function keepOnline(id: string, token: string) {
  axios.post(BASE_API_ROUTE + 'keepup/' + id, { token })
}

// TODO: send unload message
function unloadFile(id: string, token: string) {
  axios.post(BASE_API_ROUTE + 'delete/' + id, { token })
}

export default {
  doesIdExist,
  getFilename,
  getFileLink,
  uploadFile,
  keepOnline,
  unloadFile
}
