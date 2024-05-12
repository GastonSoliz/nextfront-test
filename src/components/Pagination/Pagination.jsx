"use client";

export default function Pagination({
  currentPage,
  prevPage,
  nextPage,
  selectPage,
  totalPages,
}) {
  const pageNumbers = [];

  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="flex justify-center py-8 space-x-2">
      {currentPage === 1 ? null : (
        <button
          onClick={prevPage}
          className="rounded-md px-3 py-1 bg-gray-200 font-semibold hover:bg-neutral-600"
        >
          {"<"}
        </button>
      )}
      {pageNumbers.map((pageNumber) => (
        <button
          className={`rounded-md px-3 py-1 hover:bg-neutral-600 ${
            currentPage === pageNumber ? "bg-neutral-600" : "bg-gray-200"
          }`}
          onClick={() => selectPage(pageNumber)}
        >
          {pageNumber}
        </button>
      ))}
      {currentPage === totalPages ? null : (
        <button
          onClick={nextPage}
          className="rounded-md px-3 py-1 bg-gray-200 font-semibold hover:bg-neutral-600"
        >
          {">"}
        </button>
      )}
    </div>
  );
}
