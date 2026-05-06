import { IMAGE_BASE_URL, PERSON_ENDPOINT } from '@/core';
import { useTmdb } from '@/hooks';
import { useParams } from 'react-router-dom';

export const ImagesView = () => {
    const { id } = useParams();
    const { data } = useTmdb<any>(`${PERSON_ENDPOINT}/${id}/images`, {}, [id]);

    if (!data) return <p >Loading images...</p>;

    return (
        <div className="columns-3 gap-4 space-y-4">
            {data.profiles.map((img: any) => (
                <img
                    key={img.file_path}
                    src={`${IMAGE_BASE_URL}${img.file_path}`}
                    className="w-full rounded-xl hover:scale-105 transition"
                />
            ))}
        </div>
  );
};