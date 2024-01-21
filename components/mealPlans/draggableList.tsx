'use client';

import { Reorder } from "framer-motion"
import { useState } from "react"

export default function DraggableList() {
  const [items, setItems] = useState([0,1,2,3,4,5]);

  return (
    <Reorder.Group axis="y" values={items} onReorder={setItems}>
      {items.map((item) => (
        <Reorder.Item className="bg-white p-6 shadow-lg mb-6 cursor-pointer rounded-md text-black" key={item} value={item}>
          {item}
        </Reorder.Item>
      ))}
    </Reorder.Group>
  )
}


