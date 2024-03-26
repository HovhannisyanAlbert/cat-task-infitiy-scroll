import React, { useState, ChangeEvent, FormEvent, useRef, FC } from "react";
import toast from "react-hot-toast";
import Spinner from "@/components/Spinner";
import { IImageUploadProps } from "@/Cats/types";
const UploadImage: FC<IImageUploadProps> = ({
  text,
  handleUploadImage,
  handleSuccess,
  handleError,
}) => {
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const formRef = useRef<HTMLFormElement>(null);
  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setFile(event.target.files[0]);
    }
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!file) {
      toast.error("Please select a file first!");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    try {
      setLoading(true);
      const response = await handleUploadImage(formData);
      handleSuccess(response.data);
    } catch (error) {
      handleError(error);
    } finally {
      setFile(null);
      setLoading(false);
      if (formRef.current) {
        formRef.current.reset();
      }
    }
  };
  return (
    <div className="p-4">
      <form className="flex items-center" ref={formRef} onSubmit={handleSubmit}>
        <input
          className="border rounded-lg p-2 mr-2"
          type="file"
          onChange={handleFileChange}
          accept="image/gif, image/jpeg, image/png"
        />
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded disabled:opacity-50"
          type="submit"
          disabled={loading}
        >
          {text}
          {loading && (
            <span className="ml-2">
              <Spinner />
            </span>
          )}
        </button>
      </form>
    </div>
  );
};

export default UploadImage;
