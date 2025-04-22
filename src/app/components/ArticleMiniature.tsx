import React, { FC } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

interface ArticleMiniatureProps {
    miniatureSrc: string
    selectedSrc: string;
    tituloMiniatura: string;
    subtituloMiniatura: string;
}

const ArticleMiniature: FC<ArticleMiniatureProps> = ({ miniatureSrc, selectedSrc, tituloMiniatura, subtituloMiniatura }) => {
    const router = useRouter()
    const handleRedirection = (srcSelected: string) => {
        router.push(`${srcSelected}`)
    }
    return (
        <div className='flex flex-col bg-white hover:bg-gray-100 p-5 m-5' onClick={() => { handleRedirection(miniatureSrc) }}>
            <Image height={100} width={100} src={`${selectedSrc}`} alt='miniatureImage' />
            <div className='p-3 flex flex-col'>
                <p className='text-xl'>{tituloMiniatura}</p>
                <p className='text-md'>{subtituloMiniatura}</p>
            </div>
        </div>
    );
};

export default ArticleMiniature;