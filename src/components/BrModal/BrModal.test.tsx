import { fireEvent, render, screen } from "@testing-library/react";
import BrInput from "../BrInput";

import BrModal from ".";

describe("<BrModal />", () => {
  it("deveria renderizar modal com conteúdo passado", () => {
    const { container } = render(
      <BrModal isOpen={true} onClose={() => null}>
        <BrInput label="Conteúdo do Modal" />
      </BrModal>
    );

    screen.getByLabelText(/conteúdo do modal/i);
    expect(container.firstChild).toMatchSnapshot();
  });

  it("deveria renderizar modal com título se informado", () => {
    render(
      <BrModal isOpen={true} onClose={() => null} title="Título">
        Conteúdo
      </BrModal>
    );

    const titleElement = screen.getByTitle(/título/i);
    expect(titleElement).toHaveClass("br-modal-title");
    expect(titleElement.parentElement).toHaveClass("br-modal-header");
  });

  it("deveria renderizar modal com botão fechar se existir título", () => {
    render(
      <BrModal isOpen={true} onClose={() => null} title="Título">
        Conteúdo
      </BrModal>
    );

    const closeButton = screen.getByLabelText(/fechar/i);
    expect(closeButton).toHaveClass("br-button small");
  });

  it('deveria chamar "onClose" modal se botão "fechar" acionado', () => {
    const handleClose = jest.fn();
    const { getByLabelText } = render(
      <BrModal isOpen={true} onClose={handleClose} title="Título">
        Conteúdo
      </BrModal>
    );

    fireEvent.click(getByLabelText(/fechar/i));
    expect(handleClose).toHaveBeenCalledTimes(1);
  });

  it('deveria chamar "onClose" modal scrim for clicado', () => {
    const handleClose = jest.fn();
    const { container } = render(
      <BrModal isOpen={true} onClose={handleClose} title="Título">
        Conteúdo
      </BrModal>
    );

    const element = container.firstElementChild || new Element();
    fireEvent.click(element);
    expect(handleClose).toHaveBeenCalledTimes(1);
  });

  it("deveria exibir ação primária centralizada", () => {
    render(
      <BrModal
        isOpen={true}
        onClose={() => null}
        primaryAction={{ label: "Confirmar", action: () => null }}
      >
        Conteúdo
      </BrModal>
    );

    const botaoPrimario = screen.getByText(/confirmar/i);
    expect(botaoPrimario.parentElement).toHaveClass("br-modal-footer justify-content-center");
  });

  it("deveria exibir ação secundária centralizada", () => {
    render(
      <BrModal
        isOpen={true}
        onClose={() => null}
        secondaryAction={{ label: "Cancelar", action: () => null }}
      >
        Conteúdo
      </BrModal>
    );

    const botaoSecundario = screen.getByText(/cancelar/i);
    expect(botaoSecundario.parentElement).toHaveClass("br-modal-footer justify-content-center");
  });

  it("deveria exibir ambas as ações alinhadas à direita", () => {
    render(
      <BrModal
        isOpen={true}
        onClose={() => null}
        primaryAction={{ label: "Ok", action: () => null }}
        secondaryAction={{ label: "Cancel", action: () => null }}
      >
        Conteúdo
      </BrModal>
    );

    const botaoPrimario = screen.getByText(/ok/i);
    expect(botaoPrimario.parentElement).toHaveClass("br-modal-footer justify-content-end");
    const botaoSecundario = screen.getByText(/cancel/i);
    expect(botaoSecundario.parentElement).toHaveClass("br-modal-footer justify-content-end");
  });

  it("deveria exibir ambas as ações com texto padrão, se não informado", () => {
    render(
      <BrModal
        isOpen={true}
        onClose={() => null}
        primaryAction={{ action: () => null }}
        secondaryAction={{ action: () => null }}
      >
        Conteúdo
      </BrModal>
    );

    screen.getByText(/confirmar/i);
    screen.getByText(/cancelar/i);
  });

  it("deveria fechar modal se ação primária executada", () => {
    const handleClose = jest.fn();
    const handleConfirmar = jest.fn();

    render(
      <BrModal
        isOpen={true}
        onClose={handleClose}
        primaryAction={{ label: "Confirmar", action: handleConfirmar }}
      >
        Conteúdo
      </BrModal>
    );

    fireEvent.click(screen.getByText(/confirmar/i));
    expect(handleClose).toHaveBeenCalledTimes(1);
    expect(handleConfirmar).toHaveBeenCalledTimes(1);
  });

  it("deveria fechar modal se ação secundária executada", () => {
    const handleClose = jest.fn();
    const handleCancelar = jest.fn();

    render(
      <BrModal
        isOpen={true}
        onClose={handleClose}
        secondaryAction={{ label: "Cancelar", action: handleCancelar }}
      >
        Conteúdo
      </BrModal>
    );

    fireEvent.click(screen.getByText(/cancelar/i));
    expect(handleClose).toHaveBeenCalledTimes(1);
    expect(handleCancelar).toHaveBeenCalledTimes(1);
  });
});
