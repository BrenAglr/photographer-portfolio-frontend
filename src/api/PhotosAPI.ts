import { IPhotos, ISectionPhotos, ISectionGroup } from "@/interfaces/IPhotos";

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
        const res = await fetch(`${API_URL}/gallery/Preseccion/${section}`, {
            next: { revalidate: 1200}
        });

        if (!res.ok) {
            throw new Error(`Fallo al realizar el fetch al BACK por sección: ${res.status} ${res.statusText}`);
        }

        const backendData: ISectionGroup[] = await res.json();

        const transformedData: ISectionPhotos = {};
        backendData.forEach((group) => {
            transformedData[group.groupSlug] = {
                title:group.groupName,
                images:group.images,
            };
        });

        return transformedData;
    } catch (error: any) {
        console.error("Error en getPhotosBySection:", error.message || error);
        throw new Error(error);    
    }
}

export const getPhotosHome = async(section: string):Promise<IPhotos[]> => {
    try {
        const res = await fetch(`${API_URL}/gallery/Home/${section}`, {
            next: { revalidate: 1200}
        });

        if (!res.ok) {
            throw new Error(`Fallo al realizar el fetch al BACK para home/sección: ${res.status} ${res.statusText}`);
        }

        const homePhotos: IPhotos[] = await res.json();
        return homePhotos
    } catch (error: any) {
        console.error("Error en getPhotosHome:", error.message || error);
        throw new Error(error);    
    }
}