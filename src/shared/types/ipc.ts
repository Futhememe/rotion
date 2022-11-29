export interface IDocument {
  id: string
  title: string
  content: string
}

/**
 * Request
 */

/**
 * Response
 */

export interface FetchAllDocumentsResponse {
  data: IDocument[]
}
