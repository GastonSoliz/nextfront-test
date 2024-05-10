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
    <>
      {currentPage === 1 ? null : <button onClick={prevPage}>{"<"}</button>}
      {pageNumbers.map((pageNumber) => (
        <button onClick={() => selectPage(pageNumber)}>{pageNumber}</button>
      ))}
      {currentPage === totalPages ? null : (
        <button onClick={nextPage}>{">"}</button>
      )}
    </>
  );
}
