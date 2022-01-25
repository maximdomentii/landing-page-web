import {Dropdown, Icon, Image, Menu} from "semantic-ui-react";
import {useNavigate} from "react-router-dom";
import './header-menu.css';
import {useStore} from "../../store/store";
import {setLanguage} from "../../store/reducer";

const HeaderMenu = () => {
    const [{textData}] = useStore();
    const [, dispatch] = useStore();

    const navigate = useNavigate();

    const headerDataText = textData.header;

    const handleItemClick = (to) => {
        navigate(to);
    }

    const handleLanguageChange = (e, { value }) => {
        dispatch(setLanguage(value));
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
                    <Menu.Item
                        href={headerDataText.menuItemHrefLinkedin}
                        target="_blank"
                        name={headerDataText.menuItemNameLinkedin}
                    >
                        <Icon name='linkedin' size='large'/>
                    </Menu.Item>
                    <Menu.Item
                               className='header-menu-item'
                               name={headerDataText.menuItemNameLanguage}
                    >
                        <Dropdown
                            simple
                            className='icon'
                            icon='world'
                            options={headerDataText.languageOptions}
                            onChange={handleLanguageChange}
                            defaultValue={headerDataText.languageOptions[0].value}
                            text=' '
                        />
                    </Menu.Item>
                </Menu.Menu>
            </Menu>
        </div>
    )
};

export default HeaderMenu;