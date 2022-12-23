import * as React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

import { useDispatch } from "react-redux";

import {priceShow,priceHide} from "../Worry/worrySlice";

import doctor from '../../public/images/icons/menu/doctor.svg';
import service from '../../public/images/icons/menu/service.svg';
import diploma from '../../public/images/icons/menu/diploma.svg';
import works from '../../public/images/icons/menu/works.svg';
import price from '../../public/images/icons/menu/price.svg';
import phone from '../../public/images/icons/menu/phone.svg';
import standart from '../../public/images/icons/menu/standart.svg';

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 }
    }
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 }
    }
  }
};

const objects = [
  [
    'послуги',
    '#worry',
    service
  ],
  [
    'ціни',
    '#worry',
    price
  ],
  [
    'лікарі',
    '#doctors',
    doctor
  ],
  [
    'стандари',
    '#standart',
    standart
  ],
  [
    'наші роботи',
    '#works',
    works
  ],
  [
    'про клініку',
    '#diploma',
    diploma
  ],
  [
    "зв'язатися",
    '#form',
    phone
  ],
]

export const MenuItem = ({ i, toggle }) => {


  const dispatch = useDispatch();

  return (
    <motion.li
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <div className="icon-placeholder"  ><Image width='100%' height="100%" src={objects[i][2]} alt="icon" /></div>
      {
        objects[i][0] !== 'ціни' && objects[i][0] !== 'послуги' ? <a onClick={() => toggle()} href={objects[i][1]} className="text-placeholder" >{objects[i][0]}</a> 
        : 
        objects[i][0] === 'ціни' ? <a onClick={() => {toggle(); dispatch(priceShow())}} href={objects[i][1]} className="text-placeholder" >{objects[i][0]}</a> 
        :
        <a onClick={() => {toggle(); dispatch(priceHide())}} href={objects[i][1]} className="text-placeholder" >{objects[i][0]}</a>
      }
    </motion.li>
  );
};
