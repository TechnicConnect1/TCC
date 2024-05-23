// src/components/NewCarrossel.js
import React, { useEffect, useState } from 'react';
import "./NewCarrossel.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoMdArrowRoundBack } from "react-icons/io";
import { GrFormNextLink } from "react-icons/gr";
import { Cards } from '../Cards/Cards';
import Slider from 'react-slick';
import { Orcamento } from '../Orcamento/Orcamento';

const simpleNextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <div className={className} style={{ ...style, display: "block", background: "red" }} onClick={onClick}>NEXT</div>
    );
}

const simplePrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <div className={className} style={{ ...style, display: "block", background: "green" }} onClick={onClick}>BACK</div>
    );
}

export const NewCarrossel = () => {
    const [recipes, setRecipes] = useState([]);
    const [selectedItem, setSelectedItem] = useState(null);
    const [formVisible, setFormVisible] = useState(false);
    const slider = React.useRef(null);

    useEffect(() => {
        fetch("/menu.json")
            .then(res => res.json())
            .then(data => {
                const specials = data.filter((item) => item.category === "celular");
                setRecipes(specials);
            });
    }, []);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ],

        nextArrow: <simpleNextArrow />,
        prevArrow: <simplePrevArrow />
    };

    const handleSolicitarOrcamento = (item) => {
        setSelectedItem(item);
        setFormVisible(true);
    };

    const handleCloseForm = () => {
        setFormVisible(false);
        setSelectedItem(null);
    };

    return (
        <div className='div'>
            <div className='buttons-next-back'>
                <button onClick={() => slider?.current?.slickPrev()} className='btn-back'>
                    <IoMdArrowRoundBack className='icon-back' />
                </button>
                <button onClick={() => slider?.current?.slickNext()} className='btn-next'>
                    <IoMdArrowRoundBack className='icon-back icon-next' />
                </button>
            </div>
            <Slider ref={slider} {...settings}>
                {
                    recipes.map((item, i) => (
                        <Cards key={i} item={item} onSolicitarOrcamento={() => handleSolicitarOrcamento(item)} />
                    ))
                }
            </Slider>
            {formVisible && <Orcamento item={selectedItem} onClose={handleCloseForm} />}
        </div>
    );
};
