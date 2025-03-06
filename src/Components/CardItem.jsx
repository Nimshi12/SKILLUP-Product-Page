const CardItem = ({ card }) => {
  return (
    <div className="rounded shadow-xl my-4 text-center flex flex-col items-center justify-center hover:scale-105 transition-transform duration-300">
      <div
        style={{ backgroundImage: `url(${card.image})` }}
        className="size-[90px] mx-auto  bg-cover bg-center bg-no-repeat "
      ></div>
      <div className="">
        <h2 className="font-bold text-[25px] pt-4">{card.title}</h2>
        <h1 className="text-3xl font-bold py-6">{card.price}</h1>
        <div className="items-center justify-center flex flex-col">
          <li className="list-none leading-10 font-semibold border-b border-gray-200 w-[300px]">
            {card.l2}
          </li>
          <li className="list-none leading-10 font-semibold border-b border-gray-200 w-[300px]">
            {card.l1}
          </li>
          <li className="list-none leading-10 font-semibold border-b border-gray-200 w-[300px]">
            {card.l3}
          </li>
        </div>
      </div>
      <button className="p-2.5 w-[200px] sm:w-[150px] lg:w-50 rounded-md text-black font-medium bg-[#00df9a] hover:bg-[#00bf85] hover:cursor-pointer active:border-[1px] my-7">
        Start Trial
      </button>
    </div>
  );
};

export default CardItem;
