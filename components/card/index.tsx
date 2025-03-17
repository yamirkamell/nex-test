import Image from 'next/image'
import { MdFavorite, MdFavoriteBorder } from "react-icons/md";

 
const CardDemo = async() => {
    const animeList = [
        {
            title: 'Demon Slayer',
            isFavorite: false,
            headerImage: 'https://m.media-amazon.com/images/M/MV5BMGVhZTY1YTctOWJlYS00MjcxLTlkNDgtYTUxZTM5MzMzZjI2XkEyXkFqcGc@._V1_.jpg',
        },
        {
            title: 'Demon Slayer',
            isFavorite: true,
            headerImage: 'https://m.media-amazon.com/images/M/MV5BMGVhZTY1YTctOWJlYS00MjcxLTlkNDgtYTUxZTM5MzMzZjI2XkEyXkFqcGc@._V1_.jpg',
        },
        {
            title: 'Demon Slayer',
            isFavorite: false,
            headerImage: 'https://m.media-amazon.com/images/M/MV5BMGVhZTY1YTctOWJlYS00MjcxLTlkNDgtYTUxZTM5MzMzZjI2XkEyXkFqcGc@._V1_.jpg',
        }
    ]
   return (
    <>
    {animeList?.map((item: any, index: number) =>
    <div key={index} className='flex flex-col items-center min-w-[200px]'>
                { item?.headerImage ?
                <Image
                    className="rounded-xl border drop-shadow-[0_5px_10px_rgba(0,222,204,1)] w-[200px] h-[286px] mt-10"
                    src={item?.headerImage}
                    width={200}
                    height={286}
                    priority={true}
                    alt="Picture of the author"
                />
                : null }
                <div className='flex self-start justify-between w-full mt-5 px-2'>
                    <label className='text-sm text-[#8F8F8F] font-bold'>
                        {item?.title} 
                    </label>
                    {item?.isFavorite 
                        ? <MdFavorite className='text-base text-[#FF4B77]'/>
                        : <MdFavoriteBorder className='text-base text-[#FF4B77]'/>
                    }
                </div>
    </div>
    )}
    </>
    )
}
export default CardDemo;