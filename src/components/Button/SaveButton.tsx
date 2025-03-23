import React from "react";
import { Button, Flex } from "antd";
import { SaveOutlined } from "@ant-design/icons";

interface Props {
  icon?: string;
  onClick?: () => void;
  text?: string;
  disabled?: boolean;
  variant?: "text" | "link" | "solid" | "outlined" | "dashed" | "filled";
}

export const SaveButton: React.FC<Props> = ({
  onClick,
  text = "Lưu",
  icon = null,
  disabled = false,
  variant = "solid",
}) => {
  return (
    <Flex gap="small" wrap>
      <Button
        color="cyan"
        disabled={disabled}
        variant={variant}
        icon={icon == null ? <SaveOutlined /> : icon}
        onClick={onClick}
      >
        {text}
      </Button>
    </Flex>
  );
};
