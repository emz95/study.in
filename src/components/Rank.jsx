import React, { useState } from 'react';
import {Reorder} from "framer-motion"

export default function Rank({items, setItems}) {

  return (
    <div>
        <Reorder.Group values={items} onReorder={setItems}>
        {items.map((item, index) => (
            <Reorder.Item value={item} key={item}>
            <div>
                <p>{index + 1} {item}</p>
            </div>
            </Reorder.Item>
        ))}
        </Reorder.Group>


    </div>
  )
}
