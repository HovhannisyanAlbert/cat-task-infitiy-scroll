export interface IelemDate {
  id: string;
  url: string;
}

export interface IImageUploadProps {
  text: string;
  handleUploadImage: (formData: FormData) => Record<string, any>;
  handleSuccess: (data: any) => void;
  handleError: (error: any) => void;
}
