import React, { useState } from "react";
import { IUpload } from "../../components/Upload";
import { Tinymce } from "../../components/Tinymce";
import { Button, Form } from "antd";
import type { FormProps } from 'antd';
type FieldType = {
  rich_text?: string;

};
const ListHanhDong: React.FC = () => {
  const [editMode, setEditMode] = useState<boolean>(false);
  const [form] = Form.useForm();
  const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
    console.log('Success:', values);
    setEditMode(true);
  };

  return (
    <>
      <IUpload />
      <Form form={form} onFinish={onFinish}>
        <Form.Item name={"rich_text"}>
          <Tinymce disabled={editMode} />
        </Form.Item>
        <Button onClick={form.submit}>onSubmit</Button>
        <Button
          onClick={() => {
            setEditMode(!editMode);
          }}
        >
          editMode
        </Button>
      </Form>
    </>
  );
};

export default ListHanhDong;
