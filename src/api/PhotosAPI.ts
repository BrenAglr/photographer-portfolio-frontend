import { IPhotos, ISectionPhotos } from "@/interfaces/IPhotos";

const API_URL = process.env.NEXT_PUBLIC_API_URL

export const getPhotosbyGroup = async(section:string, group:string): Promise<IPhotos[]> => {
    try {
        const res = await fetch(`${API_URL}/gallery/${section}/${group}`, {
            next: { revalidate: 1200 }
        });

        if (!res.ok) {
            throw new Error(`Fallo al realizar el fetch al BACK por grupo: ${res.status} ${res.statusText}`)
        };

        const photosGroup: IPhotos[] = await res.json();

        return photosGroup;
    } catch (error: any) {
        console.error("Error in getPhotosByGroup:", error.message || error);
        throw new Error(error)
    }
}

export const getPhotosBySection = async(section: string):Promise<ISectionPhotos> => {
    try {
        const res = await fetch(`${API_URL}/gallery/${section}`, {
            next: { revalidate: 1200}
        });

        if (!res.ok) {
            throw new Error(`Fallo al realizar el fetch al BACK por sección: ${res.status} ${res.statusText}`);
        }

        const sectionPhotos: ISectionPhotos = await res.json();
        return sectionPhotos
    } catch (error: any) {
        console.error("Error en getPhotosBySection:", error.message || error);
        throw new Error(error);    
    }
}