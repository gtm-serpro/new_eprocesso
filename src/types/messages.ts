export type MessageStatus = "info" | "success" | "warning" | "danger";

export const MessageIcon: Record<MessageStatus, string> = {
  success: "check-circle",
  info: "info-circle",
  warning: "exclamation-triangle",
  danger: "times-circle",
};
