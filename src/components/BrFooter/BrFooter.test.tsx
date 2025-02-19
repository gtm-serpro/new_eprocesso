import { render } from "@testing-library/react";

import BrFooter from ".";

describe("<BrFooter />", () => {
  it("deveria renderizar o footer padrão", () => {
    const { container } = render(
      <BrFooter
        urlLogo="/some-image"
        links={[
          {
            category: "Categoria 1",
            items: [
              {
                label: "Ad deserunt nostrud",
                link: "#",
              },
              {
                label: "Nulla occaecat eiusmod",
                link: "#",
              },
              {
                label: "Nulla occaecat eiusmod",
                link: "#",
              },
            ],
          },
        ]}
        socialNetworks={[
          { name: "Facebook", link: "#", icon: "fab fa-facebook-square" },
          { name: "Twitter", link: "#", icon: "fab fa-twitter-square" },
          { name: "Linkedin", link: "#", icon: "fab fa-linkedin" },
        ]}
        userLicenseText={
          <>
            Texto destinado a exibição de informações relacionadas à&nbsp;<b>licença de uso.</b>
          </>
        }
        footerImages={[{ name: "Image 1", link: "#", url: "/some-image" }]}
      />
    );
    expect(container.firstChild).toHaveClass("br-footer");
    expect(container.firstChild).toMatchSnapshot();
  });
});
