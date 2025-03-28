"use client";
import { Heart } from "iconsax-react";
import React from "react";
import Swal from "sweetalert2";
type Props = {
  id: string;
};

function FavoriteBtn({ id }: Props) {
  const [isFav, setIsFav] = React.useState(false);

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        console.log(id);
        const res = await fetch(`/api/favorites/${id}`);
        if (res.status === 200) {
          setIsFav(true);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  const handleAddToFavorit =async () => {
        const requast = await fetch("/api/favorites",{
            method:"POST",
            body:JSON.stringify({productID:id})
        })
        if(requast.status === 200){
            setIsFav(true)
            Swal.fire({
                icon:"success",
                title:"با موفقیت اضافه شد",
                background: "#121212",
                color: "#fff",
            })
        }else if (requast.status === 400) {
            Swal.fire({
                icon:"error",
                title:"این محصول در لیست علاقه مندی ها قرار دارد",
                background: "#121212",
                color: "#fff",
            })
        }else{
            Swal.fire({
                icon:"error",
                title:"خطایی رخ داده است",
                background: "#121212",
                color: "#fff",
            })
        }
  };

  const handleRemoveFromFavorit = async () => {
    const requast = await fetch(`/api/favorites/${id}`, {
      method: "DELETE",
    });
    console.log(id)
    console.log(await requast.json())
    if (requast.status === 200) {
      setIsFav(false);
      Swal.fire({
        icon: "success",
        title: "با موفقیت حذف شد",
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "خطایی رخ داده است",
      });
    }
  };

  return (
    <div>
      <button className="flex items-center gap-2  text-white py-2 " onClick={!isFav ?  handleAddToFavorit : handleRemoveFromFavorit}>
        <Heart size="24" color="red" variant={isFav ? "Bold" : "Linear"} />
        افزودن به علاقه مندی ها
      </button>
    </div>
  );
}

export default FavoriteBtn;
