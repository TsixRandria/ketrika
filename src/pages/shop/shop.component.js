import React, { Component } from 'react';
import CollectionPreview from '../../components/collection-preview/collection-preview.component';
import SHOP_DATA from './shop.data';

export default class Shop extends Component {
    state={
        collections: SHOP_DATA
    }

    render() {
        const collections = this.state.collections;
        return (
            <div>
                {collections.map(({id, ...otherCollectionProps}) =>(
                    <CollectionPreview key={id} {...otherCollectionProps}/>
                ))
                }
            </div>
        )
    }
}
