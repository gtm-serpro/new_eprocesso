import classNames from "classnames";

import Container from "@/common/Container";
import { Col, Row } from "@/common/Grid";

import { useMtProps } from "@/hooks/useMtProps";
import { useSpreadProps } from "@/hooks/useSpreadProps";
import IMtProps from "@/types/IMtProps";
import { IconSize } from "@/types/icons";

type BadgeProps = {
  badge: React.ReactNode;
  children: React.ReactNode;
};

type IconProps = {
  icon: string;
  size?: IconSize;
  badge?: React.ReactNode;
} & IMtProps;

const Badge = ({ badge, children }: BadgeProps) => {
  return (
    <Container fluid margin={0} padding={0}>
      <Row>
        <Col sm="auto" padding={{ r: 0 }}>
          {children}
        </Col>
        <Col sm="auto" padding={{ l: 0 }}>
          {badge}
        </Col>
      </Row>
    </Container>
  );
};

const Content = ({ icon, size, ...rest }: IconProps) => {
  const mtProps = useMtProps(rest);
  const spreadProps = useSpreadProps(rest);
  const svg = icon.endsWith(".svg");
  const classes = classNames(
    size && `fa-${size}`,
    !svg && (icon.includes("fas ") || icon.includes("fab ") || icon.includes("fa "))
      ? icon
      : `fas fa-${icon}`,
    ...mtProps
  );

  return svg ? (
    <img className={classes} src={icon} {...spreadProps} />
  ) : (
    <i className={classes} aria-hidden="true" {...spreadProps} />
  );
};

const Icon = ({ badge, ...rest }: IconProps) => {
  return badge ? (
    <Badge badge={badge}>
      <Content {...rest} />
    </Badge>
  ) : (
    <Content {...rest} />
  );
};

export default Icon;
