import { Link } from 'react-router-dom';
import * as C from './styles';
import { ReactComponent as ProfileIcon } from 'svgs/profile.svg'
import { ReactComponent as BookIcon } from 'svgs/book.svg'
import { ReactComponent as MailIcon } from 'svgs/mail.svg'

type IProps = {
    title: string;
    description: string;
    icon: 'profile' | 'book' | 'mail';
    path: string;
    active: boolean;
}

const renderIcon = (icon: string) => {
    switch(icon) {
        case 'profile':
            return <ProfileIcon fill="white" width={24} height={24} />
        case 'book':
            return <BookIcon fill="white" width={24} height={24} />
        case 'mail':
            return <MailIcon fill="white" width={24} height={24} />
        default:
            return <ProfileIcon fill="white" width={24} height={24} />
    }
}

const SidebarItem = ({ title, description, icon, path, active }: IProps) => {
    return (
        <C.Container>
            <Link to={path}>
                <C.Info>
                    <C.Title>{title}</C.Title>
                    <C.Description>{description}</C.Description>
                </C.Info>
                <C.IconArea active={active}>
                    {renderIcon(icon)} 
                </C.IconArea>
                <C.Point active={active}></C.Point>
            </Link>
        </C.Container>
    )
}

export default SidebarItem;