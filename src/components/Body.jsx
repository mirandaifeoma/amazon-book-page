import React from 'react';
import {Books} from './Books';
import { Footer } from './Footer'


export const Body = () => {

    const items = [
      {
        id: 1,
        img: 'https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/91IVCIMJ0cL._AC_UY327_FMwebp_QL65_.jpg',
        title: 'Verity',
        price: '$75.00',
      },
      {
        id: 2,
        img: 'https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/81mXKPhbG1L._AC_UY327_FMwebp_QL65_.jpg',
        title: 'Mans Search for Meaning',
        price: '$180.75',
      },
      {
        id: 3,
        img: 'https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/81ZKwsb6djL._AC_UY327_FMwebp_QL65_.jpg',
        title: 'Wheres Bluey?: A Search-and-Find Book',
        price: '$25.00',
      },
      {
        id: 4,
        img: 'https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/71ppLVtrmnL._AC_UY327_FMwebp_QL65_.jpg',
        title:
          'One Hundred Saturdays: Stella Levi and the Search for a Lost World',
        price: '$25.00',
      },
      {
        id: 5,
        img: 'https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/31mOctOrkkL._AC_UY280_FMwebp_QL65_.jpg',
        title: 'Mans Search for Meaning 1st (first) edition Text Only',
        price: '$25.00',
      },
      {
        id: 6,
        img: 'https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/91W2ur2M6eL._AC_UY327_FMwebp_QL65_.jpg',
        title: 'Mans Search for Meaning: Young Adult Edition',
        price: '$25.00',
      },
      {
        id: 7,
        img: 'https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/71ppLVtrmnL._AC_UY327_FMwebp_QL65_.jpg',
        title: 'Brain Games - Everyday Mindfulness Word Search (White)',
        price: '$25.00',
      },
      {
        id: 8,
        img: 'https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/51b14tZXWpL._AC_UY327_FMwebp_QL65_.jpg',
        title: 'Communion: The Female Search for Love',
        price: '$25.00',
      },
      {
        id: 9,
        img: 'https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/81pO-tkeR1L._AC_UY327_FMwebp_QL65_.jpg',
        title:
          'Food of the Gods: The Search for the Original Tree of Knowledge',
        price: '$25.00',
      },
      {
        id: 10,
        img: 'https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/61u6VQtbckL._AC_UY327_FMwebp_QL65_.jpg',
        title: 'Quarterlife: The Search for Self in Early Adulthood',
        price: '$25.00',
      },
      {
        id: 11,
        img: 'https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/81n0OfRKH7L._AC_UY327_FMwebp_QL65_.jpg',
        title: 'Trauma and Memory',
        price: '$25.00',
      },
      {
        id: 12,
        img: 'https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/71PYIKRILSL._AC_UY327_FMwebp_QL65_.jpg',
        title: 'Crazy: A Fathers Search Through Americas Mental Health Madness',
        price: '$25.00',
      },
    ]
  return (
    <div className='body'>
      <div className='body2'>
        <h1>grab a copy of interesting books</h1>
        <div className='books'>
          {items.map((item) => {
            const { id, img, title, price } = item

            return (
              <Books
                id={id}
                img={img}
                title={title}
                price={price}
                color='red'
              />
            )
          })}
        </div>
      </div>

      <Footer />
    </div>
  )
}

