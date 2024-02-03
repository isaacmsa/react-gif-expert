import { useState } from 'react'
import { AddCategory, GifGrid } from './components'

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(['One Punch'])

  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return
    // 1Era forma basica de insertar un nuevo elemento en un array de estado
    setCategories([newCategory, ...categories])

    // 2da forma basica de insertar un nuevo elemento en un array de estado
    // setCategories((category) => [...category, 'valorant'])
  }

  return (
    <>
      <h1>GifExpertApp</h1>

      <AddCategory onNewCategory={onAddCategory} />

      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}
    </>
  )
}
