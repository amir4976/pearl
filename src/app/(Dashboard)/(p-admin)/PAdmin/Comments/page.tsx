import getAllComments from "@/components/serverActions/getAllComments.action";
import CommentsTable from "@/components/Modules/p-admin/Comments/Commnts";
import React from "react";

async function page() {
  const allComments = await getAllComments();
  return (
    <>
      <CommentsTable
        Comments={JSON.parse(JSON.stringify(allComments))}
      />
    </>
  );
}

export default page;
