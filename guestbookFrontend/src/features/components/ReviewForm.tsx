import React, {ChangeEvent, FormEvent, useState} from "react";
import {GuestBookMutation} from "../../types.ts";
import InputFile from "../../components/InputFile.tsx";
import {NavLink} from "react-router-dom";

interface ReviewFormProps {
    onSubmit: (review: GuestBookMutation) => void
}

const initialState = {
    name: '',
    description: '',
    image: null,
}

const ReviewForm: React.FC<ReviewFormProps> = ({onSubmit}) => {
    const [addNewReview, setAddNewReview] = useState(initialState);

    const onFormSubmit = (e: FormEvent) => {
        e.preventDefault();
        onSubmit({...addNewReview})
    };

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;

        setAddNewReview((prevState) => {
            return {...prevState, [name]: value}
        })
    }

    const fileHandleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const {name, files} = e.target;
        if(files) {
            setAddNewReview((prevState) => ({
                ...prevState,
                [name]: files[0]
            }))
        }
    }
    return (
        <form className='d-flex justify-content-center' onSubmit={onFormSubmit}>
            <div>
            <div className='group-form'>
                <label>
                    Name:
                    <input
                        type='text'
                        id='name'
                        name='name'
                        value={addNewReview.name}
                        onChange={handleChange}
                        className='form-control'
                    />
                </label>
            </div>

            <div className='group-form'>
                <label>
                   Description:
                    <input
                        type='text'
                        id='description'
                        name='description'
                        value={addNewReview.description}
                        onChange={handleChange}
                        className='form-control'
                    />
                </label>
            </div>

            <div className='group-form'>
                <label>
                   Image:
                    <InputFile name='image' label='Image' onGetFile={fileHandleChange}/>
                </label>
            </div>


            <button className='btn btn-dark mt-2 me-2'>Create</button>
                <NavLink to='/' className='btn btn-danger mt-2'>Cancel</NavLink>
            </div>
        </form>
    );
};

export default ReviewForm;