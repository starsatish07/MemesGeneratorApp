import React, { useEffect, useState } from 'react';
import MemeCard from '../Card';
import { getAlMemes } from '../../api/meme';

const Home = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        getAlMemes().then((memes) => {
          //  console.log(memes);
            setData(memes.data.memes);
        });
    }, []);

    return (
        <div className="container">
            <div className="row">
                {data.map((el, index) => (
                    <div className="col-md-4 col-sm-6 col-lg-3" key={index}>
                        <MemeCard img={el.url} title={el.name} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Home;
