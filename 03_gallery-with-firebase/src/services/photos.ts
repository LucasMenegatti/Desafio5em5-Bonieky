import { IPhoto } from "../types/IPhoto";
import { storage } from "libs/firebase";
import { ref, listAll, getDownloadURL, uploadBytes, deleteObject } from "firebase/storage";
import { v4 as createID } from 'uuid'

export const getAll = async () => {
    let list: IPhoto[] = [];
    const imagesFolder = ref(storage, 'images');
    const photoList = await listAll(imagesFolder);

    for(let i in photoList.items) {
        let photoUrl = await getDownloadURL(photoList.items[i]);

        list.push({
            name: photoList.items[i].name,
            url: photoUrl
        })
    }

    return list;
}

export const insert = async (file: File) => {
    if(!['image/jpg', 'image/jpeg', 'image/png', 'image/webp'].includes(file.type)) return new Error('Tipo de arquivo não permitido');
    
    let randomName = createID();
    let newFile = ref(storage, `images/${randomName}`);
    
    let upload = await uploadBytes(newFile, file);
    let photoUrl = await getDownloadURL(upload.ref)

    return {
        name: upload.ref.name,
        url: photoUrl
    } as IPhoto
}

export const deletePhoto = async (name: string) => {
    let photoReference = ref(storage, `images/${name}`);
    deleteObject(photoReference);
}
