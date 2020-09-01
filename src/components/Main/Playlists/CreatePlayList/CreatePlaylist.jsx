import React, {useRef, useState} from "react";
import { Form, Field } from 'react-final-form'
import {createPlayList} from "../../../../redux/playlistsReducer";
import {connect} from "react-redux";
import useOnClickOutside from "../../../../Utils/clickOutSideHook/useOnClickOutside";
import style from "../../Movies/MovieDetails/Detailes.module.scss";

const CreatePlaylist = (props)=>{

    const [formOpen, toggleFormOpen] = useState(false);
    const formRef = useRef();


    const createPlayList = ({playlistTitle, playlistDescription})=>{
        props.createPlayList(playlistTitle, playlistDescription);
    };

    useOnClickOutside(formRef, ()=> toggleFormOpen(false));

    const validate = (values)=>{
        const errors = {};
        if (!values.playlistTitle) {
            errors.playlistTitle = 'Write playlist title'
        }else{
            if (!values.playlistTitle.length > 20) {
                errors.playlistTitle = 'Playlist title is too long'
            }
        }
        if (!values.playlistDescription) {
            errors.playlistDescription = 'Write playlist description'
        }
        return errors;
    };

    return (
        <div >
            {formOpen
               ? <div className={style.modal}>
                    <Form validate={validate} onSubmit={createPlayList} render={({handleSubmit})=>(
                        <form ref={formRef} className={style.modal_form}  onSubmit={handleSubmit}>
                            
                                <Field name={"playlistTitle"}>
                                    {({input, meta})=>(
                                        <div >
                                            <div className={style.modal_form_field}>
                                                <label>Playlist title</label>
                                                <input {...input} type="text" placeholder={"Enter title"} />
                                            </div>
                                            <div className={style.modal_field_error}>
                                                {meta.error && meta.touched && <span >{meta.error}</span>}
                                            </div>
                                        </div>
                                    )}
                                </Field>
                            

                                <Field name={"playlistDescription"}>
                                    {({input, meta})=>(
                                        <div >
                                            <div className={style.modal_form_field}>
                                                <label>Playlist description</label>
                                                <input {...input} type="textarea" placeholder={"Enter description"} />
                                            </div>
                                            <div className={style.modal_field_error}>
                                                {meta.error && meta.touched && <span >{meta.error}</span>}
                                            </div>

                                        </div>
                                    )}

                                </Field>

                            <button className={style.modal_form_btn} type={"submit"}>Create list</button>
                        </form>
                    )} />
                </div>
                : <button className={style.form_toggle_btn} onClick={()=>toggleFormOpen(true)} type={"submit"}>Create playlist</button>
            }
        </div>
    )
};

const mapStateToProps = (state)=>{
    return {}
};

export default connect(mapStateToProps, {createPlayList})(CreatePlaylist);