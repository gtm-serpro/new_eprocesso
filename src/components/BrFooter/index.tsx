import Icon from "@/common/Icon";
import { useMtProps } from "@/hooks/useMtProps";
import { useSpreadProps } from "@/hooks/useSpreadProps";
import IMtProps from "@/types/IMtProps";
import { ColSize } from "@/types/layout";
import classNames from "classnames";
import React from "react";
import Container from "../../common/Container";
import CustomTag from "../../common/CustomTag";
import Col from "../../common/Grid/Col";
import Row from "../../common/Grid/Row";
import Divider from "../BrDivider";
import Item from "../BrItem";
import List from "../BrList";

export interface BrFooterProps extends React.HTMLAttributes<HTMLDivElement>, IMtProps {
  /** URL da Logo */
  urlLogo?: string;
  /** Links do footer */
  links?: Array<{
    category: string;
    size?: ColSize;
    items: Array<{
      label: string;
      link: string;
    }>;
  }>;
  /** Redes sociais do footer. */
  socialNetworks?: Array<{
    icon: string;
    link: string;
    name: string;
  }>;
  /** Texto ao fim do footer, sobre a licença ou termos de uso. */
  userLicenseText?: React.ReactNode;
  /** Imagens no fim do footer. */
  footerImages?: Array<{
    url: string;
    link: string;
    name: string;
  }>;
  /** Tema invertido */
  inverted?: boolean;
}

const BrFooter = React.forwardRef<HTMLDivElement, BrFooterProps>(
  (
    {
      className,
      children,
      urlLogo,
      links,
      socialNetworks,
      userLicenseText,
      footerImages,
      inverted = false,
      ...props
    },
    ref
  ) => {
    const mtProps = useMtProps(props);
    const spreadProps = useSpreadProps(props);

    return (
      <footer
        ref={ref}
        className={classNames("br-footer", { inverted: inverted }, className, ...mtProps)}
        {...spreadProps}
      >
        <Container fluid="lg">
          <div className="logo">{urlLogo && <img src={urlLogo} alt="Logo" />}</div>
          {links && (
            <List horizontal>
              {links.map((link, index) => (
                <Col key={index} md={link.size || 2}>
                  <Item link="#">
                    <div className="content text-down-01 text-bold text-uppercase">
                      {link.category}
                    </div>
                    <div className="support">
                      <i className="fas fa-angle-down" aria-hidden="true"></i>
                    </div>
                  </Item>
                  <List>
                    <Divider className="d-md-none" />
                    {link.items.map((item, index) => (
                      <Item key={index} link={item.link}>
                        {item.label}
                      </Item>
                    ))}
                  </List>
                </Col>
              ))}
            </List>
          )}
          <div className="d-none d-sm-block">
            <Row className="align-items-end justify-content-between" padding={{ t: 5, b: 5 }}>
              <Col className="social-network">
                {socialNetworks && (
                  <p className="text-up-01 text-extra-bold text-uppercase">Redes Sociais</p>
                )}
                {socialNetworks?.map((socialNetwork, index) => (
                  <a
                    key={index}
                    href={socialNetwork.link}
                    className="mr-3"
                    aria-label={`Rede Social ${socialNetwork.name}`}
                  >
                    <Icon icon={socialNetwork.icon} size="2x" />
                  </a>
                ))}
              </Col>
              {footerImages && (
                <Col className="assigns text-right">
                  {footerImages?.map((footerImage, index) => (
                    <CustomTag
                      key={index}
                      tagName={footerImage.link ? "a" : "div"}
                      href={footerImage.link}
                    >
                      <img className="ml-4" src={footerImage.url} alt={footerImage.name} />
                    </CustomTag>
                  ))}
                </Col>
              )}
            </Row>
          </div>
        </Container>
        {userLicenseText && (
          <>
            <Divider my={3} />
            <Container fluid="lg">
              <div className="info">
                <div className="text-down-01 text-medium pb-3">{userLicenseText}</div>
              </div>
            </Container>
          </>
        )}
        {children}
      </footer>
    );
  }
);

export default BrFooter;
