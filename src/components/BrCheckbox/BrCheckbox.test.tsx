import { render, screen } from '@testing-library/react';

import BrCheckbox from '.';

describe('<BrCheckbox />', () => {
  it('deveria renderizar apenas um checkbox com o label informado', () => {
    const { container } = render(<BrCheckbox label="meu checkbox" />);

    expect(screen.getAllByRole('checkbox')).toHaveLength(1);
    expect(screen.getByText(/meu checkbox/i)).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });

  it('deveria renderizar com a classe br-checkbox', () => {
    const { container } = render(<BrCheckbox />);

    expect(container.firstChild).toHaveClass('br-checkbox');
  });

  it('deveria renderizar um checkbox checado', () => {
    render(<BrCheckbox checked onChange={() => ''} />);

    expect(screen.getByRole('checkbox')).toBeChecked();
  });

  it('deveria renderizar um checkbox desabilitado', () => {
    render(<BrCheckbox disabled />);

    expect(screen.getByRole('checkbox')).toBeDisabled();
  });

  it('deveria adicionar id com prefixo se prop não informada', () => {
    render(<BrCheckbox label="meu-check" />);
    expect(screen.getByRole('checkbox')).toMatchObject({ id: /^(checkbox-)(\/\w+)+$/ });
  });
});
