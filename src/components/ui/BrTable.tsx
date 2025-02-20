import React, { useState } from 'react';
import "@/styles/BrTable.css"

export interface BrTableRow {
    id: string;
    columns: string[]; // For example: ['Linha 1 coluna 1', 'Linha 1 coluna 2', ...]
    extraContent?: string; // Make extraContent optional
}

export interface BrTableProps {
    title: string;
    headers: string[]; // Header labels for the main columns (excluding checkbox & collapse columns)
    rows: BrTableRow[];
    totalItems: number;
    perPage: number;
    currentPage: number;
    onPageChange?: (page: number) => void;
}

const BrTable: React.FC<BrTableProps> = ({
    title,
    headers,
    rows,
    totalItems,
    perPage,
    currentPage,
    onPageChange,
}) => {
    // Density state (small, medium, large)
    const [density, setDensity] = useState('medium');
    // Search state
    const [searchActive, setSearchActive] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    // Row selection state
    const [selectedRows, setSelectedRows] = useState<Set<string>>(new Set());
    // Row collapse state
    const [expandedRows, setExpandedRows] = useState<Set<string>>(new Set());

    // Determine if at least one row is expandable (has extraContent)
    const hasExpandableRows = rows.some(row => row.extraContent && row.extraContent.trim() !== '');

    // Handlers
    const handleDensityChange = (value: string) => setDensity(value);
    const toggleSearch = () => setSearchActive(!searchActive);
    const handleRowSelect = (id: string) => {
        setSelectedRows(prev => {
            const newSet = new Set(prev);
            if (newSet.has(id)) {
                newSet.delete(id);
            } else {
                newSet.add(id);
            }
            return newSet;
        });
    };
    const toggleRowCollapse = (id: string) => {
        setExpandedRows(prev => {
            const newSet = new Set(prev);
            if (newSet.has(id)) {
                newSet.delete(id);
            } else {
                newSet.add(id);
            }
            return newSet;
        });
    };

    // Pagination
    const totalPages = Math.ceil(totalItems / perPage);
    const handlePageChange = (page: number) => {
        onPageChange && onPageChange(page);
    };

    // Filter rows based on search query (simple filtering on any column)
    const filteredRows = rows.filter(row =>
        row.columns.some(col => col.toLowerCase().includes(searchQuery.toLowerCase()))
    );

    return (
        <div className={`br-table density-${density}`} data-search="data-search" data-selection="data-selection" data-collapse="data-collapse">
            {/* BrTable Header */}
            <div className="table-header">
                <div className="top-bar d-flex justify-content-between align-items-center">
                    <div className="table-title">{title}</div>
                    <div className="d-flex align-items-center">
                        {/* Density Dropdown */}
                        <div className="actions-trigger text-nowrap position-relative">
                            <button
                                className="br-button circle"
                                type="button"
                                id="button-dropdown-density"
                                title="Ver mais opções"
                                aria-label="Definir densidade da tabela"
                                aria-haspopup="true"
                            >
                                <i className="fas fa-ellipsis-v" aria-hidden="true"></i>
                            </button>
                            <div className="br-list" id="target-dropdown-density" role="menu" aria-labelledby="button-dropdown-density" hidden>
                                {[
                                    { label: 'Densidade alta', value: 'small' },
                                    { label: 'Densidade média', value: 'medium' },
                                    { label: 'Densidade baixa', value: 'large' },
                                ].map(option => (
                                    <React.Fragment key={option.value}>
                                        <button
                                            className="br-item"
                                            type="button"
                                            data-density={option.value}
                                            onClick={() => handleDensityChange(option.value)}
                                            role="menuitem"
                                        >
                                            {option.label}
                                        </button>
                                        <span className="br-divider"></span>
                                    </React.Fragment>
                                ))}
                            </div>
                        </div>
                        {/* Search Trigger */}
                        <div className="search-trigger">
                            <button
                                className="br-button circle"
                                type="button"
                                id="button-input-search"
                                onClick={toggleSearch}
                                aria-label="Abrir busca"
                            >
                                <i className="fas fa-search" aria-hidden="true"></i>
                            </button>
                        </div>
                    </div>
                </div>
                {/* Search Bar */}
                {searchActive && (
                    <div className="search-bar d-flex align-items-center">
                        <div className="br-input flex-grow-1">
                            <label htmlFor="table-searchbox">Buscar na tabela</label>
                            <input
                                id="table-searchbox"
                                type="search"
                                placeholder="Buscar na tabela"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                aria-label="Buscar na tabela"
                            />
                            <button className="br-button" type="button" aria-label="Buscar">
                                <i className="fas fa-search" aria-hidden="true"></i>
                            </button>
                        </div>
                        <button className="br-button circle" type="button" onClick={toggleSearch} aria-label="Fechar busca">
                            <i className="fas fa-times" aria-hidden="true"></i>
                        </button>
                    </div>
                )}
                {/* Selected Bar */}
                {selectedRows.size > 0 && (
                    <div className="selected-bar d-flex justify-content-between align-items-center">
                        <div className="info">
                            <span className="count">{selectedRows.size}</span>
                            <span className="text">{selectedRows.size === 1 ? 'item selecionado' : 'itens selecionados'}</span>
                        </div>
                        <div className="actions-trigger text-nowrap position-relative">
                            <button
                                className="br-button circle inverted"
                                type="button"
                                id="button-dropdown-selection"
                                aria-label="Ver mais opções de ação"
                                aria-haspopup="true"
                            >
                                <i className="fas fa-ellipsis-v" aria-hidden="true"></i>
                            </button>
                            <div className="br-list" id="target-dropdown-selection" role="menu" aria-labelledby="button-dropdown-selection" hidden>
                                <button className="br-item" type="button" role="menuitem">
                                    Ação 1
                                </button>
                                <span className="br-divider"></span>
                                <button className="br-item" type="button" role="menuitem">
                                    Ação 2
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>

            {/* BrTable */}

            <div style={{ overflowX: 'auto' }}>
                <table>
                    <caption>{title}</caption>
                    <thead>
                        <tr>
                            {hasExpandableRows && (
                                <td className="column-collapse" scope="col" aria-hidden="true"></td>
                            )}
                            <th className="column-checkbox" scope="col">
                                <div className="br-checkbox hidden-label">
                                    <input
                                        id="check-all"
                                        name="check-all"
                                        type="checkbox"
                                        aria-label="Selecionar tudo"
                                        onChange={(e) => {
                                            if (e.target.checked) {
                                                setSelectedRows(new Set(filteredRows.map(row => row.id)));
                                            } else {
                                                setSelectedRows(new Set());
                                            }
                                        }}
                                    />
                                    <label htmlFor="check-all">Selecionar todas as linhas</label>
                                </div>
                            </th>
                            {headers.map((header, index) => (
                                <th scope="col" key={index}>
                                    {header}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {filteredRows.map(row => (
                            <React.Fragment key={row.id}>
                                <tr>
                                    {hasExpandableRows && (
                                        row.extraContent ? (
                                            <td>
                                                <button
                                                    className="br-button circle small"
                                                    type="button"
                                                    aria-label="Expandir/Retrair"
                                                    onClick={() => toggleRowCollapse(row.id)}
                                                >
                                                    <i
                                                        className={`fas ${expandedRows.has(row.id) ? 'fa-chevron-up' : 'fa-chevron-down'}`}
                                                        aria-hidden="true"
                                                    ></i>
                                                </button>
                                            </td>
                                        ) : (
                                            <td></td>
                                        )
                                    )}
                                    <td>
                                        <div className="br-checkbox hidden-label">
                                            <input
                                                id={`check-${row.id}`}
                                                type="checkbox"
                                                aria-label={`Selecionar linha ${row.id}`}
                                                checked={selectedRows.has(row.id)}
                                                onChange={() => handleRowSelect(row.id)}
                                            />
                                            <label htmlFor={`check-${row.id}`}>Selecionar linha {row.id}</label>
                                        </div>
                                    </td>
                                    {row.columns.map((col, index) => (
                                        <td key={index} data-th={headers[index] || `Título coluna ${index + 1}`}>
                                            <div
                                                style={{
                                                    maxWidth: '200px',
                                                    width: 'fit-content',
                                                    overflow: 'hidden',
                                                    whiteSpace: 'nowrap',
                                                    textOverflow: 'ellipsis'
                                                }}
                                            >
                                                {col}
                                            </div>
                                        </td>
                                    ))}
                                </tr>
                                {row.extraContent && (
                                    <tr className="collapse">
                                        <td colSpan={hasExpandableRows ? headers.length + 2 : headers.length + 1} hidden={!expandedRows.has(row.id)} id={`collapse-${row.id}`}>
                                            {row.extraContent}
                                        </td>
                                    </tr>
                                )}
                            </React.Fragment>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* BrTable Footer - Pagination */}
            <div className="table-footer">
                <nav className="br-pagination" aria-label="paginação">
                    <div className="pagination-per-page">
                        <div className="br-select">
                            <div className="br-input">
                                <label htmlFor="per-page-selection">Exibir</label>
                                <input id="per-page-selection" type="text" placeholder=" " readOnly value={perPage} />
                                <button className="br-button" type="button" aria-label="Exibir lista" tabIndex={-1} data-trigger="data-trigger">
                                    <i className="fas fa-angle-down" aria-hidden="true"></i>
                                </button>
                            </div>
                            <div className="br-list" tabIndex={0}>
                                {[10, 20, 30].map(num => (
                                    <div className="br-item" tabIndex={-1} key={num}>
                                        <div className="br-radio">
                                            <input
                                                id={`per-page-${num}`}
                                                type="radio"
                                                name="per-page"
                                                value={num}
                                                checked={perPage === num}
                                                onChange={() => {
                                                    // Implement per-page change if needed
                                                }}
                                            />
                                            <label htmlFor={`per-page-${num}`}>{num}</label>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <span className="br-divider d-none d-sm-block mx-3"></span>
                    <div className="pagination-information d-none d-sm-flex">
                        <span className="current">{currentPage}</span>&ndash;
                        <span className="per-page">{perPage}</span>&nbsp;de&nbsp;
                        <span className="total">{totalItems}</span>&nbsp;itens
                    </div>
                    <div className="pagination-go-to-page d-none d-sm-flex ml-auto">
                        <div className="br-select">
                            <div className="br-input">
                                <label htmlFor="go-to-selection">Página</label>
                                <input id="go-to-selection" type="text" placeholder=" " readOnly value={currentPage} />
                                <button className="br-button" type="button" aria-label="Exibir lista" tabIndex={-1} data-trigger="data-trigger">
                                    <i className="fas fa-angle-down" aria-hidden="true"></i>
                                </button>
                            </div>
                            <div className="br-list" tabIndex={0}>
                                {Array.from({ length: totalPages }).map((_, i) => (
                                    <div className="br-item" tabIndex={-1} key={i + 1}>
                                        <div className="br-radio">
                                            <input
                                                id={`go-to-${i + 1}`}
                                                type="radio"
                                                name="go-to-page"
                                                value={i + 1}
                                                checked={currentPage === i + 1}
                                                onChange={() => handlePageChange(i + 1)}
                                            />
                                            <label htmlFor={`go-to-${i + 1}`}>{i + 1}</label>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <span className="br-divider d-none d-sm-block mx-3"></span>
                    <div className="pagination-arrows ml-auto ml-sm-0">
                        <button className="br-button circle" type="button" aria-label="Voltar página">
                            <i className="fas fa-angle-left" aria-hidden="true"></i>
                        </button>
                        <button className="br-button circle" type="button" aria-label="Página seguinte">
                            <i className="fas fa-angle-right" aria-hidden="true"></i>
                        </button>
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default BrTable;
