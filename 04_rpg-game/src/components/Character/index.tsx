import { ICharacterSides } from 'types/ICharacterSides';
import * as C from './styles'

type Props = {
    x: number;
    y: number;
    side: ICharacterSides;
}

const Character = ({ x, y, side }: Props) => {
    const blockSize = 30;
    const sides = {
        down: 0,
        left: -30,
        right: -60,
        up: -90
    }

    return (
        <C.Container
            size={blockSize}
            left={x*blockSize}
            top={y*blockSize}
            sidePos={sides[side] ?? 0}
        >
        </C.Container>
    )
}

export default Character;