import {Icon, Image, Menu} from "semantic-ui-react";
import {useNavigate} from "react-router-dom";
import { text } from "../../static/data/text";
import './header-menu.css';

const HeaderMenu = () => {
    const navigate = useNavigate();

    const headerDataText = text.en.header;

    const handleItemClick = (to) => {
        navigate(to);
    }

    return (
        <div style={
            {
                marginTop: '1em',
                marginLeft: '3em',
                marginRight: '3em',
                marginBottom: '1em',
            }
        }>
            <Menu secondary stackable size='massive'>
                <Menu.Item header fitted onClick={() => handleItemClick('/')}>
                    <Image src={headerDataText.logoImgSrc}/>
                </Menu.Item>
                <Menu.Menu position='right'>
                    <Menu.Item
                        className='header-menu-item'
                        name={headerDataText.menuItemNameAbout}
                        onClick={() => handleItemClick('/about')}
                    />
                    <Menu.Item
                        className='header-menu-item'
                        name={headerDataText.menuItemNameContact}
                        onClick={() => handleItemClick('/contact')}
                    />
                    <Menu.Item fitted
                        href={headerDataText.menuItemHrefLinkedin}
                        target="_blank"
                        name={headerDataText.menuItemNameLinkedin}
                    >
                        <Icon name='linkedin' size='large'/>
                    </Menu.Item>
                </Menu.Menu>
            </Menu>
        </div>
    )
};

export default HeaderMenu;