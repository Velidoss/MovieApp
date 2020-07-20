import React from "react";
import style from "./Dropdown.module.scss";
import {NavLink} from "react-router-dom";

class Dropdown extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            listOpen: false,
            headerTitle: this.props.title
        }
    }

    clickOutside = ()=>{
        this.setState({
            listOpen: false
        })
    };

    toggleList=()=>{
        this.setState(prevState => ({
            listOpen: !prevState.listOpen
        }))
    };

    render(){
        const{list} = this.props;
        const{listOpen,  headerTitle} = this.state;
        return (
            <div onMouseLeave={this.clickOutside}>
                <div className={style.menu_item} onClick={()=>this.toggleList()}><p>{headerTitle}</p></div>
                <div className={style.dropdown}>
                    {listOpen && <ul className={style.dropdown_menu}>
                        {list.map(item=>(
                            <li className={style.item} key={item.id}><NavLink className={style.link} to={item.link}>{item.title}</NavLink></li>
                        ))}
                    </ul>}
                </div>
            </div>

        )
    }
}

export default Dropdown;