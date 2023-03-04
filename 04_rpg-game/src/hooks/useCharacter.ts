import { useState } from "react"
import { ICharacterSides } from 'types/ICharacterSides'
import { mapSpots } from 'data/mapSpots'

export const useCharacter = () => {
    const [pos, setPos] = useState({ x: 3, y: 5 });
    const [side, setSide] = useState<ICharacterSides>('down');

    const moveLeft = () => {
        setPos(pos => ({
            x: canMove(pos.x-1, pos.y) ? pos.x-1 : pos.x,
            y: pos.y,
        }));
        setSide('left');
    }

    const moveRight = () => {
        setPos(pos => ({
            x: canMove(pos.x+1, pos.y) ? pos.x+1 : pos.x,
            y: pos.y
        }));
        setSide('right');
    }

    const moveDown = () => {
        if(canMove(pos.x, pos.y+1)){
            setPos(pos => ({
                x: pos.x,
                y: canMove(pos.x, pos.y+1) ? pos.y+1 : pos.y,
            }));
        }
        setSide("down");
    }

    const moveUp = () => {
        if(canMove(pos.x, pos.y-1)){
            setPos(pos => ({
                x: pos.x,
                y: canMove(pos.x, pos.y-1) ? pos.y-1 : pos.y,
            }));
        }
        setSide('up')
    }

    const canMove = (x: number, y: number) => {
        if((mapSpots[y] || mapSpots[x][y]) !== undefined) {
            return (mapSpots[y][x] === 1);
        }
        return false;
    }
    
    return {
        x: pos.x,
        y: pos.y,
        moveLeft,
        moveRight,
        moveDown,
        moveUp,
        side
    }
}