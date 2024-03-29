import React from 'react';
import './collection-preview.styles.scss';
import ColletionItem from '../collection-item/collection-item.component';



const CollectionPreview = ({ title, items }) => {
    return (
        <div className="collection-preview">
            <h1 className="title">{title.toUpperCase()}</h1>
            <div className="preview">
                {items
                .filter((item, idx) => idx < 4)
                .map((item) => (
                    <ColletionItem key={item.id} item={item}></ColletionItem>
                ))}
            </div>
        </div >

    );
}

export default CollectionPreview;