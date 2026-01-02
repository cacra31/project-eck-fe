export type ApiError = {
  status: number;
  code?: string | number;
  message: string;
  data?: unknown;
};

export function toApiError(err: any): ApiError {
  const status = err?.response?.status ?? 0;
  const data = err?.response?.data;

  return {
    status,
    code: data?.code ?? data?.errorCode,
    message: data?.message ?? err?.message ?? 'Unknown error',
    data: data,
  };
}
