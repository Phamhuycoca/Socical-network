import { Button, Upload, message } from "antd";
import React, { useState } from "react";
import { DownloadOutlined, UploadOutlined } from "@ant-design/icons";

interface IUploadProps {
  disabled?: boolean;
}

interface UploadedFile {
  uid: string; // UID của Ant Design
  name: string;
  status: "done" | "error"; // Chỉ nhận giá trị "done" hoặc "error"
  id?: string; // UUID từ server,
  url?:string;
}

export const IUpload: React.FC<IUploadProps> = ({ disabled = false }) => {
  const url = "https://localhost:5000/api/FileUpload";
  const [fileList, setFileList] = useState<UploadedFile[]>([]);

  // Upload từng file
  const customUpload = async (options: any) => {
    const { file, onSuccess, onError } = options;

    const formData = new FormData();
    formData.append("files", file);

    try {
      const response = await fetch(url, {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        const result = await response.json(); // API trả về JSON có uuid
        console.log(result);

        const newFile: UploadedFile = {
          uid: file.uid,
          name: file.name,
          status: "done", // Đảm bảo giá trị đúng kiểu
          id: result.data[0].id,
          url:result.data[0].filePath
        };

        setFileList((prev) => [...prev, newFile]);
        message.success(`${file.name} uploaded successfully`);
        onSuccess("ok");
      } else {
        throw new Error("Upload failed");
      }
    } catch (error) {
      console.error("Upload error:", error);
      message.error(`${file.name} upload failed.`);
      onError(error);
    }
  };

  // Xóa file bằng UUID
  const handleRemove = async (extendedFile: UploadedFile) => {
    if (!extendedFile.id) {
      message.error("Không tìm thấy UUID của file!");
      return;
    }

    try {
      const response = await fetch(`${url}/${extendedFile.id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        setFileList((prev) =>
          prev.filter((item) => item.id !== extendedFile.id)
        );
        message.success("File deleted successfully");
      } else {
        throw new Error("Delete failed");
      }
    } catch (error) {
      console.error("Delete error:", error);
      message.error("Failed to delete file");
    }
  };
  const handleDownload = async (file: UploadedFile) => {
    if (!file.id) {
      message.error("Không tìm thấy UUID của file!");
      return;
    }
    try {
      const response = await fetch(`${url}/download/${file.id}`, {
        method: "GET",
      });

      if (response.ok) {
        console.log(response);
        window.open(response.url, '_self');
        message.success("File deleted successfully");
      } else {
        throw new Error("Delete failed");
      }
    } catch (error) {
      console.error("Delete error:", error);
      message.error("Failed to delete file");
    }
  };
  return (
    <Upload
      customRequest={customUpload}
      fileList={fileList}
      disabled={disabled}
      multiple
      showUploadList={{
        showDownloadIcon:!disabled,
        downloadIcon: <DownloadOutlined />
      }}
      onRemove={(file) => {
        handleRemove(file as UploadedFile);
      }}
      onDownload={(file) => {
        handleDownload(file as UploadedFile);
      }}
    >
      <Button icon={<UploadOutlined />} disabled={disabled}>
        Click to Upload
      </Button>
    </Upload>
  );
};
