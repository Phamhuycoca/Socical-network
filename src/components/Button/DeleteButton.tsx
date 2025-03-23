import React from "react";
import { Button, Flex } from "antd";
import { DeleteOutlined } from "@ant-design/icons";

interface Props {
  icon?: string;
  onClick?: () => void;
  text?: string;
}

export const DeleteButton: React.FC<Props> = ({
  onClick,
  text = "Xóa",
  icon = null,
}) => {
  return (
    <Flex gap="small" wrap>
      <Button
        color="danger"
        variant="solid"
        icon={icon == null ? <DeleteOutlined /> : icon}
        onClick={onClick}
      >
        {text}
      </Button>
    </Flex>
  );
};
