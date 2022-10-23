import routerPush from "@/utils/routerPush";
import { useRouter } from "next/router";
import React, { ChangeEvent } from "react";
import { Pagination } from "@mui/material";

const PaginationComponent = ({ totalPages, page }: any) => {
  const router = useRouter();

  const pageHandler = (e: ChangeEvent<unknown>, page: any) => {
    router.query.page = page;
    routerPush(router);
  };

  return (
    <>
      {totalPages > 1 && (
        <Pagination
          count={totalPages}
          page={page}
          onChange={pageHandler}
          color="primary"
        />
      )}
    </>
  );
};

export default PaginationComponent;
