interface PaginationProps {
  currentPage: number;
  totalItems: number;
  itemsPerPage: number;
  onPageChange: (page: number) => void;
}

export function Pagination({ currentPage, totalItems, itemsPerPage, onPageChange }: PaginationProps) {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  if (totalPages <= 1) {
    return null;
  }

  const handlePrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  return (
    <div className="flex items-center justify-between mt-4">
      <span className="text-sm text-gray-700">Total de itens: {totalItems}</span>
      <div className="flex items-center">
        <span className="text-sm text-gray-700 mr-4">
          Página {currentPage} de {totalPages}
        </span>
        <div className="inline-flex">
          <button
            onClick={handlePrevious}
            disabled={currentPage === 1}
            className="px-4 py-2 text-sm font-medium text-white bg-gray-800 rounded-l hover:bg-gray-900 disabled:bg-gray-400 disabled:cursor-not-allowed"
          >
            Anterior
          </button>
          <button
            onClick={handleNext}
            disabled={currentPage === totalPages}
            className="px-4 py-2 text-sm font-medium text-white bg-gray-800 border-0 border-l border-gray-700 rounded-r hover:bg-gray-900 disabled:bg-gray-400 disabled:cursor-not-allowed"
          >
            Próxima
          </button>
        </div>
      </div>
    </div>
  );
}
