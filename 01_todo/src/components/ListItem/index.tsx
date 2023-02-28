import * as C from './styles'
import { Item } from '../../types/Item'
import { useState } from 'react'
import { CiCircleRemove } from 'react-icons/ci'

type Props = {
    item: Item
    handleChekedStatus: (item: Item) => void
    handleRemoveTask: (item: Item) => void
}

const ListItem = ({ item, handleChekedStatus, handleRemoveTask }: Props) => {
    const [isChecked, setIsChecked] = useState(item.done);

    const changeChekedStatus = (e: React.ChangeEvent<HTMLInputElement>) => {
        setIsChecked(e.target.checked)
        item.done = e.target.checked
        handleChekedStatus(item)
    } 

    return (
        <C.Container done={isChecked}>
            <input 
                type="checkbox"
                checked={isChecked}
                onChange={e => changeChekedStatus(e)}
            />
            <label>{item.name}</label>
            <C.BotaoExcluir onClick={() => handleRemoveTask(item)}><CiCircleRemove size={25}/></C.BotaoExcluir>
        </C.Container>
    )
}

export default ListItem;