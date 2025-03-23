"use client";
import CommentsRate from "@/components/Modules/store/Comments/CommentsRate";
import getAllComments from "@/components/serverActions/getComments";
import { Star1 } from "iconsax-react";
import React, { useEffect } from "react";
import Swal from "sweetalert2";

interface Comment {
  name: string;
  comment: string;
  rate: number;
  email: string;
  product: string;
  createdAt: Date;
}

function Comments({ productId }: { productId: string }) {
  const [rate, setRate] = React.useState<number>(0);
  const [comment, setComment] = React.useState<string>("");
  const [name, setName] = React.useState<string>("");
  const [email, setEmail] = React.useState<string>("");
  const [allComments, setAllCommetns] = React.useState([]);

  useEffect(() => {
    const fetchData = async () => {
      console.log(productId);
      const data = await fetch(`/api/Comments/${productId}`);
      const allDatas = await data.json();
      setAllCommetns(allDatas.comments);
    };
    fetchData();
  }, []);

  const submitHandler = async () => {
    if (!rate || !comment || !name || !email) {
      Swal.fire({
        title: "لطفا اطلاعات را کامل کنید",
        text: "دیدگاه شما با موفقیت ثبت نشد",
        icon: "warning",
        confirmButtonText: "باشه",
      });
    }
    console.log(productId);
    const PostData = await fetch("/api/Comments", {
      method: "POST",
      body: JSON.stringify({
        rate,
        productId,
        comment,
        name,
        email,
      }),
    });

    if (PostData.status == 201) {
      Swal.fire({
        title: "دیدگاه شما با موفقیت ثبت شد",
        icon: "success",
        confirmButtonText: "باشه",
      });
    }
  };
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10  max-md:p-5">
      <div className="col-span-1">
        <div className="flex flex-col gap-10">
          {/* comment body */}
          {allComments.length < 1 && <p>کامنتی پیدا نشد</p>}
          {allComments.map((comment: Comment) => {
            return (
              <>
                <div className="Comment w-full">
                  <div className="flex justify-between px-5 border-b border-gray-500 py-2 ">
                    <div className=" text-gray-400">{comment.name}</div>
                    <div className=" text-gray-400">
                      {new Date(comment.createdAt).toLocaleString("fa-ir")}
                    </div>
                  </div>
                  <p className="p-2 ">{comment.comment}</p>
                  <div className="flex border-b border-b-gray-500 py-2 ">
                    <p>امتیاز کاربر : </p>
                    {Array(comment.rate)
                      .fill(0)
                      .map((item, index) => {
                        return (
                          <Star1
                            key={index}
                            size={20}
                            color="#FFD700"
                            variant="Bold"
                          />
                        );
                      })}
                    {Array(5 - comment.rate)
                      .fill(0)
                      .map((item, index) => {
                        return (
                          <Star1
                            key={index}
                            size={20}
                            color="#ccc"
                            variant="Outline"
                          />
                        );
                      })}
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>

      <div className="col-span-1 flex-col flex gap-4">
        <p className=" font-DM">
          اولین کسی باشید که دیدگاهی می نویسدانگشتر مدل شماره ۱
        </p>
        <p className="text-sm text-gray-400">
          نشانی ایمیل شما منتشر نخواهد شد. بخش‌های موردنیاز علامت‌گذاری شده‌اند
          <span className="text-red-600">*</span>
        </p>
        <div className=" flex  gap-2">
          <p>
            امتیاز شما <span className="text-red-600">*</span> :
          </p>
          <CommentsRate rate={rate} setRate={setRate} />
        </div>

        <p>
          دیدگاه شما <span className="text-red-600">*</span>
        </p>
        <textarea
          onChange={(e) => setComment(e.target.value)}
          className="w-full h-32 border border-gray-700 bg-transparent rounded-3xl p-2"
          placeholder="دیدگاه خود را بنویسید..."
        >
          {" "}
        </textarea>

        <p>
          نام <span className="text-red-600">*</span>
        </p>
        <input
          onChange={(e) => setName(e.target.value)}
          type="text"
          className="w-full h-10 border border-gray-700 bg-transparent rounded-3xl "
        />
        <p>
          ایمیل <span className="text-red-600">*</span>
        </p>
        <input
          onChange={(e) => setEmail(e.target.value)}
          type="text"
          className="w-full h-10 border border-gray-700 bg-transparent rounded-3xl "
        />
        <button
          onClick={submitHandler}
          className=" w-36 h-10 bg-MainColor block text-black rounded-3xl p-2"
        >
          ارسال دیدگاه
        </button>
      </div>
    </div>
  );
}

export default Comments;
