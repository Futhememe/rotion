export interface IDocument {
  id: string
  title: string
  content?: string
}

/**
 * Request
 */

export interface SaveDocumentRequest extends IDocument {}

export interface FetchDocumentRequest {
  id: string
}

export interface DeleteDocumentRequest {
  id: string
}

/**
 * Response
 */

export interface FetchAllDocumentsResponse {
  data: IDocument[]
}

export interface FetchDocumentResponse {
  data: Document
}

export interface CreateDocumentResponse {
  data: Document
}
