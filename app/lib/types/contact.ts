export interface ContactSubmission {
  name: string;
  email: string;
  message: string;
}

export interface ContactSubmissionResponse {
  id: number;
  name: string;
  email: string;
  message: string;
  submittedAt: string;
  createdAt: string;
  updatedAt: string;
}
