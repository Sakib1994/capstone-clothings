import React from 'react'
import CategoryItem from './../category-item/category-item.component';
import './categories.styles.scss'

export default function CategoryMenu({categories}) {
  
  return (
    <section className='categories-container'>
      {categories.map((category) => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </section>
  )
}
