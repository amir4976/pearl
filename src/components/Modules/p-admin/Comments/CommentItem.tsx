"use client";

import { CommentType } from "@/types/types";
import { CloseCircle, TickCircle, Trash } from "iconsax-react";
import { useState } from "react";
import Swal from "sweetalert2";

const CommentItem = ({
  Comment,
  deleteComment,
}: {
  Comment: CommentType;
  deleteComment: (id: string) => void;
}) => {
  const [CommentData, setCommentData] = useState<CommentType>(Comment);

  const showComment = () => {
    Swal.fire({
      title: "کامنت",
      text: Comment.comment,
      icon: "info",
      confirmButtonText: "باشه",
      background: "#2A2D3E",
      color: "white",
    });
  };

  const showEmail = () => {
    Swal.fire({
      title: "ایمیل",
      text: Comment.email,
      icon: "info",
      confirmButtonText: "باشه",
      background: "#2A2D3E",
      color: "white",
    });
  };

  const ChangeStatus = () => {
    Swal.fire({
      title: "تایید کامنت",
      text: "آیا از تغییر وظعیت کامنت مطمئن هستید؟",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "تایید",
      cancelButtonText: "انصراف",
      background: "#2A2D3E",
      color: "white",
    }).then(async (result) => {
      if (result.isConfirmed) {
        await fetch(`/api/Comments/${Comment._id}`, {
          method: "PUT",
        });
        setCommentData({ ...Comment, isAccsepted: !Comment.isAccsepted });
      }
    });
  };

  return (
    <tr className="odd:bg-gray-800 [&>td]:p-2 ">
      <td>{CommentData?.name}</td>
      <td>{CommentData?.product.name}</td>
      <td>
        <button
          className="p-2 bg-MainColor text-black rounded-xl"
          onClick={showEmail}
        >
          نمایش ایمیل
        </button>
      </td>
      <td>
        <button
          className="p-2 bg-MainColor text-black rounded-xl"
          onClick={showComment}
        >
          نمایش کامنت
        </button>
      </td>
      <td>
        {CommentData?.rate} <span className="text-MainColor">/5</span>
      </td>
      <td>{CommentData?.isAccsepted ? "تایید شده" : "تایید نشده"}</td>
      <td>{new Date(CommentData.createdAt).toLocaleString("fa-IR")}</td>
      <td className="flex gap-1">
        <button
          className="p-2 bg-red-500 rounded-xl "
          onClick={() => deleteComment(Comment._id)}
        >
          <Trash size={20} />
        </button>
        {CommentData.isAccsepted ? (
          <button className="p-2 bg-red-500 rounded-xl" onClick={ChangeStatus}>
            <CloseCircle size={20} />
          </button>
        ) : (
          <button
            className="p-2 bg-green-500 rounded-xl"
            onClick={ChangeStatus}
          >
            <TickCircle size={20} />
          </button>
        )}
      </td>
    </tr>
  );
};

export default CommentItem;
