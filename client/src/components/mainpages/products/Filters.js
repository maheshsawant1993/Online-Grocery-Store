import React, {useContext} from 'react';
import {GlobalState} from '../../../GlobalState';
import {TextField} from "@material-ui/core";

function Filters() {
    const state = useContext(GlobalState);
    const [categories] = state.categoriesAPI.categories;

    const [category, setCategory] = state.productsAPI.category;
    const [search, setSearch] = state.productsAPI.search;


    const handleCategory = e => {
        setCategory(e.target.value);
        setSearch('');
    }

    return (
        <div className="category_menu">
            <div className="row">
                <span>Categories: </span>
                <select name="category" value={category} onChange={handleCategory} >
                    <option value=''>All Products</option>
                    {
                        categories.map(category => (
                            <option value={"category=" + category._id} key={category._id}>
                                {category.name}
                            </option>
                        ))
                    }
                </select>
            </div>

            <TextField variant="outlined" size="small" type="text" value={search} style={{width:"50%", margin: "auto auto", paddingTop:"4px"}} placeholder="Enter your search!"
            onChange={e => setSearch(e.target.value.toLowerCase())} />
        </div>
    )
}

export default Filters;
