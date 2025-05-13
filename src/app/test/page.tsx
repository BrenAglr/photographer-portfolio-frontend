import PhotosPreview from "@/components/photoPreview";

const TestPage = () => {
    return (
        <div>
            <h1 className="text-2xl font-bold text-center my-4">Galería de Prueba</h1>
            <PhotosPreview section="naturaleza" group="montaña"/>
        </div>
    )
}

export default TestPage