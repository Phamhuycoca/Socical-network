import React from "react";
import { Button, Flex } from "antd";
import { EditOutlined } from "@ant-design/icons";

interface Props {
  icon?: string;
  onClick?: () => void;
  text?: string;
}

export const EditButton: React.FC<Props> = ({
  onClick,
  text = "Chỉnh sửa",
  icon = null,
}) => {
  return (
    <Flex gap="small" wrap>
      <Button
        color="orange"
        variant="solid"
        icon={icon == null ? <EditOutlined /> : icon}
        onClick={onClick}
      >
        {text}
      </Button>
    </Flex>
  );
};
