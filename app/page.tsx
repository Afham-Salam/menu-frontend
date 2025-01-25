"use client"

import axios from "axios";
import { useEffect, useState } from "react";

type MenuItem = {
  _id: string;
  name: string;
  description: string;
  price: string;
};

type MenuCategory = {
  _id: string;
  name: string;
  items: MenuItem[];
};

export default function Home() {
  const [datas, setData] = useState<MenuCategory[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<MenuCategory | null>(null);

  useEffect(() => {
    const fetchMenus = async () => {
      try {
        const response = await axios.get('https://backend-menu-4nqs.onrender.com/api/menu/all');
        console.log('Fetched Menus:', response.data);
        setData(response.data);
        setSelectedCategory(response.data[0]); 
      } catch (error) {
        console.error('Error fetching menus:', error);
      }
    };

    fetchMenus();
  }, []);

  const handleCategoryClick = (category: MenuCategory) => {
    setSelectedCategory(category);
  };

  return (
    <>
      <div className="menuImg menuImgSM w-full lg:h-[311px] h-[231px] flex flex-col justify-center items-center">
        <h1 className="lg:text-[75px] text-[40px] font-semibold text-shadow-burgundy">
          MENU
        </h1>
        <div className="lg:w-[45%] text-center px-3">
          <p className="lg:text-[16px] tracking-wide text-[16px] font2">
            Please take a look at our menu featuring food, drinks, and brunch.
            If you'd like to place an order, use the "Order Online" button
            located below the menu.
          </p>
        </div>
      </div>

      <div className="bg2 w-full h-[75px] flex gap-4 justify-center items-center">
        {datas.map((data) => (
         <button
         key={data._id}
         className={`border-2 text-white lg:px-8 lg:py-3 py-2 px-4 border-[#0796EF] transition-all duration-300 uppercase ${
           selectedCategory?._id === data._id ? "bg-[#0796EF]" : "bg-transparent"
         }`}
         onClick={() => handleCategoryClick(data)}
       >
         {data.name}
       </button>
        ))}
      </div>

      <div className="bg3 w-full h-[672px]">
        <div className="float-left leftImg h-[672px] w-[149px] hidden lg:block"></div>
        <div className="float-right rightImg h-[672px] w-[149px] hidden lg:block"></div>

        <div className="flex items-center justify-center lg:h-[500px] px-3">
        <div className="border border-white lg:w-[90%] py-10 lg:px-16 px-5 mt-20 relative">
          <div>
            <img src="/glass1.png" className="lg:w-[100px] lg:h-[150px] h-[120px] w-[80px] absolute lg:-left-7 lg:-top-20 -top-2 -left-3" />
          </div>

          {selectedCategory && (
          <div key={selectedCategory._id}>
            <div className="flex lg:gap-8 gap-2 justify-center items-center">
              <hr className="w-12 border-t-2 border-[#857878]" />
              <h2 className="text-center text-[30px] lg:text-[50px] font-semibold lg:px-4 uppercase">
                {selectedCategory.name}
              </h2>
              <hr className="w-12 border-t-2 border-[#857878]" />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 lg:text-[26px] text-[20px] gap-5 mt-7">
              {selectedCategory.items.map((item) => (
               <div key={item._id} className="text-left">
               <div className="flex items-center">
                 <span className="font-semibold lg:text-[20px] text-[17px]  uppercase flex-1">
                   {item.name}
                 </span>
                 <span className="dots flex-1  mt-3 "></span>
                 <span className="font-semibold   lg:text-[20px] text-[17px] uppercase ml-2">
                   $ {item.price}
                 </span>
               </div>
               <p className="font2 lg:text-[16px] text-[13px]">
                 {item.description}
               </p>
             </div>
             
              ))}
            </div>
          </div>
        )}

         

          <div>
            <img src="/glass2.png" className="lg:w-[100px] lg:h-[120px] h-[90px] w-[70px] absolute lg:-right-2 lg:-bottom-7 right-0 -bottom-2" />
          </div>
        </div>
      </div>
      </div>

      
    </>
  );
}
