import { Pagination, PaginationContent } from "@/components/ui/pagination";
import { generatePaginationLinks } from "./Pages.tsx";
import { Button } from "@/components/ui/button.tsx";
import { ChevronLeft, ChevronRight } from "lucide-react";

type PaginatorProps = {
  currentPage: number;
  totalPages: number;
  onPageChange: (pageNumber: number) => void;
};

export default function Paginator({
  currentPage,
  totalPages,
  onPageChange,
}: PaginatorProps) {
  if (totalPages > 1)
    return (
      <Pagination className="w-fit mx-0">
        <PaginationContent>
          {totalPages ? (
            <Button
              variant="outline"
              size="icon"
              onClick={() => onPageChange(currentPage - 1)}
              disabled={currentPage - 1 < 1}
              className="mr-2 rounded-full bg-blue-100 text-blue-600 hover:bg-blue-500 hover:text-white"
            >
              <ChevronLeft />
            </Button>
          ) : null}
          {generatePaginationLinks(currentPage, totalPages, onPageChange)}
          {totalPages ? (
            <Button
              variant="outline"
              size="icon"
              onClick={() => onPageChange(currentPage + 1)}
              disabled={currentPage > totalPages - 1}
              className=" ml-2 rounded-full bg-blue-100 text-blue-600 hover:bg-blue-500 hover:text-white"
            >
              <ChevronRight />
            </Button>
          ) : null}
        </PaginationContent>
      </Pagination>
    );
}
