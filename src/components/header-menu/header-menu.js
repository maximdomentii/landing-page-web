import {Dropdown, Icon, Image, Menu} from "semantic-ui-react";
import {useNavigate} from "react-router-dom";
import './header-menu.css';
import {useStore} from "../../store/store";
import {setLanguage} from "../../store/reducer";
import Responsive from "semantic-ui-react/dist/commonjs/addons/Responsive";
import useWindowDimensions from "./hooks/useWindowDimensions";
import {useState} from "react";

const HeaderMenu = () => {
    const [mobileDropdownButtonIcon, setMobileDropdownButtonIcon] = useState('bars');

    const [{textData}] = useStore();
    const [, dispatch] = useStore();

    const { height, width } = useWindowDimensions();

    const navigate = useNavigate();

    const headerDataText = textData.header;

    const handleItemClick = (to) => {
        navigate(to);
    }

    const handleLanguageChange = (e, {value}) => {
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
            <Menu secondary size='massive'>
                <Menu.Item header fitted onClick={() => handleItemClick('/')}>
                    <Image src={headerDataText.logoImgSrc}/>
                </Menu.Item>
                <Responsive as={Menu.Menu} minWidth={790} position='right'>
                    <Menu.Item
                        className='header-menu-item'
                        name={headerDataText.menuItemNameHome}
                        onClick={() => handleItemClick('/')}
                    />
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
                        fitted
                        className='header-menu-item'
                        href={headerDataText.menuItemHrefLinkedin}
                        target="_blank"
                        name={headerDataText.menuItemNameLinkedin}
                    >
                        <Icon name='linkedin' size='large'/>
                    </Menu.Item>
                    <Menu.Item
                        fitted
                        className='header-menu-item'
                        name={headerDataText.menuItemNameLanguage}
                    >
                        <Dropdown
                            className='icon'
                            icon='world'
                        >
                            <Dropdown.Menu>
                                {headerDataText.languageOptions.map((data, key) => {
                                    return (
                                        <Dropdown.Item
                                            key={key}
                                            text={data.text}
                                            value={data.value}
                                            active={data.active}
                                            onClick={handleLanguageChange}
                                        />
                                    )
                                })}
                            </Dropdown.Menu>
                        </Dropdown>
                    </Menu.Item>
                </Responsive>
                <Responsive as={Menu.Menu} maxWidth={789} position='right'>
                    <Dropdown className='mobile-dropdown-button'
                              item
                              icon={mobileDropdownButtonIcon}
                              onOpen={(e, data) => {setMobileDropdownButtonIcon('close')}}
                              onClose={(e, data) => {setMobileDropdownButtonIcon('bars')}}
                    >
                        {/*<Icon name='bars' size='large'/>*/}
                        <Dropdown.Menu
                            style={{
                                width: width
                            }}
                            className='mobile-dropdown-menu'
                        >
                            <Dropdown.Item className='mobile-dropdown-menu-item'>
                                <Menu.Item
                                    className='header-menu-item'
                                    name={headerDataText.menuItemNameHome}
                                    onClick={() => handleItemClick('/')}
                                />
                            </Dropdown.Item>
                            <Dropdown.Item className='mobile-dropdown-menu-item'>
                                <Menu.Item
                                    className='header-menu-item'
                                    name={headerDataText.menuItemNameAbout}
                                    onClick={() => handleItemClick('/about')}
                                />
                            </Dropdown.Item>
                            <Dropdown.Item className='mobile-dropdown-menu-item'>
                                <Menu.Item
                                    className='header-menu-item'
                                    name={headerDataText.menuItemNameContact}
                                    onClick={() => handleItemClick('/contact')}
                                />
                            </Dropdown.Item>
                            <Dropdown.Item className='mobile-dropdown-menu-item'>
                                <Menu.Item
                                    className='header-menu-item'
                                    href={headerDataText.menuItemHrefLinkedin}
                                    target="_blank"
                                    name={headerDataText.menuItemNameLinkedin}
                                >
                                    <Icon name='linkedin' size='large'/>
                                </Menu.Item>
                            </Dropdown.Item >
                            <Dropdown.Item className='mobile-dropdown-menu-item'>
                                <Menu.Item
                                    className='header-menu-item'
                                    name={headerDataText.menuItemNameLanguage}
                                >
                                    <Dropdown
                                        className='icon mobile-dropdown-menu-item-language'
                                        icon='world'
                                    >
                                        <Dropdown.Menu>
                                            {headerDataText.languageOptions.map((data, key) => {
                                                return (
                                                    <Dropdown.Item
                                                        key={key}
                                                        text={data.text}
                                                        value={data.value}
                                                        active={data.active}
                                                        onClick={handleLanguageChange}
                                                    />
                                                )
                                            })}
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </Menu.Item>
                            </Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </Responsive>
            </Menu>
        </div>
    )
};

export default HeaderMenu;