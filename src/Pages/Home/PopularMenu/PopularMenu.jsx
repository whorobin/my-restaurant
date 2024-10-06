// import React from 'react';

import { useEffect, useState } from "react";
import MenuItem from "../../Shared/MenuItem/MenuItem";

const PopularMenu = () => {

    const [menu, setMenu] = useState([]);

    useEffect(() => {
        fetch('menu.json')
            .then(res => res.json())
            .then(data => {
                const popularItems = data.filter(item => item.category === 'popular');
                setMenu(popularItems);
            })
    }, [])

    return (
        <section className="mb-12 pr-3">
            <div className='md:w-4/12 mx-auto text-center my-8'>
                <p className='text-yellow-600 mb-2'>--- Check it out ---</p>
                <h3 className='text-3xl uppercase border-y-4 py-4'>FROM OUR MENU </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {
                    menu.map((item => <MenuItem
                        key={item._id}
                        item={item}
                    ></MenuItem>))
                }
            </div>
            <div className="text-center">
                <button className="btn btn-outline border-0 border-b-4 mt-4"> View Full Menu</button>
            </div>
        </section>
    );
};

export default PopularMenu;