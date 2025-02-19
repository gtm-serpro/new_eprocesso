/**
 * Definição de Custom HTML Attributes para elementos HTML,
 * necessários para aplicação de estilos do CSS do DSGov
 */

declare namespace React {
  interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
    expanded?: string | null;
  }
}
