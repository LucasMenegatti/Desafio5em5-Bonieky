import * as C from './styles'
import { AiFillCloseCircle } from 'react-icons/ai'

type Props = {
    url: string;
    name: string;
    onDelete: (name: string) => void
}

const PhotoItem = ({ url, name, onDelete }: Props) => {
    return (
        <C.Container>
            <img src={url} alt={name} />
            {name}
            <AiFillCloseCircle className='icon' size={28} onClick={e => onDelete(name)}/>
        </C.Container>
    )
}

export default PhotoItem;