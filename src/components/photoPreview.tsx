"use client"

import { getPhotosbyGroup } from "@/api/PhotosAPI"
import { IPhotos } from "@/interfaces/IPhotos"
import { useEffect, useState } from "react"

interface Props {
    section: string,
    group: string
}

const PhotosPreview = ({ section, group }: Props) => {
    const [photos, setPhotos] = useState<IPhotos[]>([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState("")

    useEffect(() => {
        const fetchPhotos = async () => {
            try {
                const data = await getPhotosbyGroup(section, group)
                setPhotos(data)
            } catch(err: any) {
                setError("No se pudieron cargar las fotos.")
                console.log(err);
            } finally {
                setLoading(false)
            }
        }

        fetchPhotos()
    }, [section, group])

    if (loading) return <p>Cargando fotos...</p>
    if (error) return <p>{error}</p>

    return (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
            {photos.map((photo,index) => (
                <img 
                    key={index} 
                    src={photo.url} 
                    alt={`Foto ${index + 1}`}
                    className="rounded-lg shadow-md object-cover w-full h-64 transition-transform duration-300 ease-in-out hover:scale-105" 
                />
            ))}
        </div>
    )
}

export default PhotosPreview