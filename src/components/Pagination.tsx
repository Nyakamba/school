"use client";
import { ITEM_PER_PAGE } from "@/lib/constants";
import { useRouter } from "next/navigation";

interface PaginationProps {
  page: number;
  count: number;
}

const Pagination = ({ page, count }: PaginationProps) => {
  const router = useRouter();

  const handlePageChange = (newPage: number) => {
    const params = new URLSearchParams(window.location.search);
    params.set("page", newPage.toString());
    router.push(`${window.location.pathname}?${params}`);
  };
  return (
    <div className="p-4 flex items-center justify-between text-gray-500">
      <button
        className="py-2 px-2 sm:px-4 rounded-md bg-slate-200 text-xs font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
        onClick={() => handlePageChange(page - 1)}
        disabled={page === 1}
      >
        Prev
      </button>
      <div className="flex items-center mx-1 sm:mx-0 sm:gap-2 text-xs sm:text-sm ">
        {Array.from(
          {
            length: Math.ceil(count / ITEM_PER_PAGE),
          },
          (_, index) => {
            const pageIndex = index + 1;
            return (
              <button
                key={pageIndex}
                className={`px-2 rounded-sm ${
                  page === pageIndex ? "bg-sky" : ""
                } `}
                onClick={() => handlePageChange(pageIndex)}
              >
                {pageIndex}
              </button>
            );
          }
        )}
      </div>
      <button
        className="py-2 px-2 sm:px-4 rounded-md bg-slate-200 text-xs font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
        onClick={() => handlePageChange(page + 1)}
        disabled={page === Math.ceil(count / ITEM_PER_PAGE)}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
