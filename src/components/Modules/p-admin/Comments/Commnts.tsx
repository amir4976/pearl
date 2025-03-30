"use client";
import { CommentType } from "@/types/types";
import React from "react";
import CommentItem from "./CommentItem";
import Swal from "sweetalert2";

function CommntsTable({ Comments }: { Comments: CommentType[] }) {
  const [AllComments, setAllComments] = React.useState<CommentType[]>(Comments);

  const deleteComment = (id:string) => {
    Swal.fire({
      title: "تایید حذف",
      text: "آیا از حذف کامنت مطمئن هستید؟",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "تایید",
      cancelButtonText: "انصراف",
      background: "#2A2D3E",
      color: "white",
    }).then(async (result) => {
      if (result.isConfirmed) {
        await fetch(`/api/Comments/${id}`, {
          method: "DELETE",
        });
        setAllComments(AllComments.filter((comment) => comment._id !== id));
      }
    });
  };

  return (
    <>
      <div className="bg-transparent p-3 rounded-md  min-h-96">
        <div className="flex justify-between items-center  border-b border-b-gray-500 pb-3  ">
          <div className="flex flex-col ">
            {" "}
            <p className="font-DB  ">لیست محصولات</p>
            <p className="text-sm text-gray-500">
              برای مدیریت بهتر لطفا به صفحه محصولات مراجعه کنید
            </p>
          </div>
          <button className="p-2 bg-MainColor rounded-lg text-black">
            بیشتر{" "}
          </button>
        </div>
        <div className="w-full mt-3">
          <div className="table w-full">
            <table className=" table table-auto  w-full text-center">
              <thead className=" py-10">
                <tr className="bg-black text-gray-200 ">
                  <th>نام کاربر</th>
                  <th>نام محصول</th>
                  <th>نمایش ایمیل</th>
                  <th>نمایش کامنت</th>
                  <th>امتیاز</th>
                  <th>وضعیت</th>
                  <th>تاریخ</th>
                  <th>کنترل</th>
                </tr>
              </thead>
              <tbody>
                {AllComments.length === 0 && (
                  <tr>
                    <td colSpan={3}>محصولی برای نمایش وجود ندارد</td>
                  </tr>
                )}
                {AllComments.map((comment) => (
                  <CommentItem key={comment._id} Comment={comment} deleteComment={deleteComment} />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default CommntsTable;
