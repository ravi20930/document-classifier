import axios from "axios";
import FormData from "form-data";

const uploadImage = async (file: File, token: string) => {
  try {
    const data = new FormData();
    data.append("images", file);

    const config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "http://localhost:3009/api/user/upload-image",
      headers: {
        Authorization: `Bearer ${token}`,
        ...data.getHeaders(),
      },
      data: data,
    };

    const response = await axios.request(config);
    return response.data;
  } catch (error) {
    console.error("Error uploading image:", error);
    throw error;
  }
};

export { uploadImage };
