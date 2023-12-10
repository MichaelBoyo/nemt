import Link from "next/link";
import { ChevronLeft, ChevronRight } from "react-feather";

interface Props {
  searchParams: any;
  totalPages: number;
}

function Pagination({ searchParams, totalPages }: Props) {
  const { page } = searchParams;

  return (
    <div className="join">
      <Link
        href={{
          pathname: "/manage-jobs",
          query: {
            page: (Number(page) || 0) - 1,
          },
        }}
        className="join-item btn"
      >
        «
      </Link>
      <button className="join-item btn">Page {page || 1}</button>
      <Link
        href={{
          pathname: "/manage-jobs",
          query: {
            page: (Number(page) || 0) + 1,
          },
        }}
        className="join-item btn"
      >
        »
      </Link>
    </div>
  );
}

export default Pagination;
