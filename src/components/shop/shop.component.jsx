import React from 'react';
import SHOP_DATA from './shop.data';
import CollectionPreview from '../collection-preview/collection-preview.component.jsx';

 class ShopPage extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            collections: SHOP_DATA    
              
        };
    }

    render() {

        const {collections} = this.state;

       return  (
       <div classsName='shop-page'>
           {
               collections.map(({id, ...otherCollectionProps}) => (
                <CollectionPreview key={id} title={otherCollectionProps.title} items={otherCollectionProps.items}/>
               ))
           
            }
        </div>)
    }
}

export default ShopPage;