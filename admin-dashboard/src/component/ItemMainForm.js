import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import "react-datepicker/dist/react-datepicker.css";
import { editItem, editDiscount, addColor, removeColor, addExtent, removeExtent } from '../redux/action';
import ItemForm from './ItemForm';

const ItemMainForm = ({ onSubmit, edit }) => {
    const dispatch = useDispatch();
    const item = useSelector(state => state.item)

    const handleChange = (event) => {
        const { value, name } = event.target
        dispatch(editItem({ name, value }))
    };

    const handleClickState = (name, value) => {
        dispatch(editItem({ name, value }))
    }

    const handleDiscount = (name, value) => {
        dispatch(editDiscount({ name, value }))
    }

    const handleAddColor = (name, value) => {
        dispatch(addColor({ name, value }))
    }
    const handleRemoveColor = (key) => {
        dispatch(removeColor(key))
    }
    const handleAddExtent = (extent) => {
        dispatch(addExtent(extent))
    }
    const handleRemoveExtent = (index) => {
        dispatch(removeExtent(index))
    }

    return (
        <ItemForm
            onSubmit={onSubmit}
            name={item.name}
            description={item.description}
            price={item.price}
            type={item.type}
            sizeType={item.sizeType}
            handleChange={handleChange}
            newCollection={item.newCollection}
            recommended={item.recommended}
            handleClick={handleClickState}
            sizeType={item.sizeType}
            handleDiscount={handleDiscount}
            discount={item.discount}
            handleAddColor={handleAddColor}
            oneSize={item.oneSize}
            handleRemoveColor={handleRemoveColor}
            handleAddExtent={handleAddExtent}
            handleRemoveExtent={handleRemoveExtent}
            modelNumber={item.modelNumber}
            edit={edit}
        />
    )
}

export default ItemMainForm;
