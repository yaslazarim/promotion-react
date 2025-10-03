function PromotionCard({ promotion }) {
  return (
    <div className="flex items-start rounded-lg border-2 border-solid border-[#c3c3c3] p-[15px] shadow-[0_2px_7px_0_rgba(0,0,0,0.15)] w-full">
      <img className="w-[100px] mr-5" src={promotion.imageUrl} />
      <div className="w-full">
        <h1 className="text-[16px] font-bold text-[#2C3E50]">
          {promotion.title}
        </h1>
        <span className="text-[26px] font-bold text-[#3498DB]">
          R${promotion.price}
        </span>
        <footer className="flex items-center">
          {promotion.comments.length > 0 && (
            <div className="text-[#95A5A6] font-bold ">
              "{promotion.comments[0].comment}"
            </div>
          )}
          <div className="ml-auto mr-[20px] text-[#3498db]">
            {promotion.comments.length}{" "}
            {promotion.comments.length > 1 ? "Comentários" : "Comentário"}
          </div>
          <a
            href={promotion.url}
            target="_blank"
            className="border-[1px] border-solid border-[#3498db] rounded-[4px] text-[#3498DB] py-[8px] px-[10px]"
          >
            IR PARA O SITE
          </a>
        </footer>
      </div>
    </div>
  );
}

export default PromotionCard;
