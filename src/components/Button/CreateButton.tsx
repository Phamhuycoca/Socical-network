import React from "react";
import { Button, Flex } from "antd";
import { PlusOutlined } from "@ant-design/icons";

interface Props {
  icon?: string;
  onClick?: () => void;
  text?: string;
}

export const CreateButton: React.FC<Props> = ({
  onClick,
  text = "Thêm mới",
  icon = null,
}) => {
  return (
    <Flex gap="small" wrap>
      <Button
        variant="solid"
        icon={icon == null ? <PlusOutlined /> : icon}
        onClick={onClick}
        type="primary"
      >
        {text}
      </Button>
    </Flex>
  );
};
