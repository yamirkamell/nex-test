
import Image from 'next/image'
import { MdFavorite, MdFavoriteBorder } from "react-icons/md";

const CardDemo = (item: any) => {
    const anime: any = item.item;
   return (
    <>
    <div className='flex flex-col items-center min-w-[200px]'>
                { anime?.coverImage?.large ?
                <Image
                    className="rounded-xl border drop-shadow-[0_5px_10px_rgba(0,222,204,1)] w-[190px] h-[246px] mt-2"
                    src={anime?.coverImage?.large}
                    width={190}
                    height={246}
                    priority={true}
                    alt="Picture of the author"
                />
                : null }
                <div className='flex self-start justify-between w-full mt-5 px-2'>
                    <label className='text-sm text-[#8F8F8F] font-bold w-44'>
                        {anime?.title?.english == null ? anime?.title?.native : anime?.title?.english} 
                    </label>
                    {anime?.isFavourite 
                        ? <MdFavorite className='text-base text-[#FF4B77]'/>
                        : <MdFavoriteBorder className='text-base text-[#FF4B77]'/>
                    }
                </div>
    </div>
    </>
    )
}
export default CardDemo;