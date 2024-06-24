"use client";
import React, { useState, useEffect } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

// Eight Sample color palette colors
const initialColors = [
  "#ff0000",
  "#00ff00",
  "#0000ff",
  "#ffff00",
  "#ff00ff",
  "#00ffff",
  "#808080",
  "#800080",
];

const ColorPalette = () => {
  const [colors, setColors] = useState(initialColors);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Function handle color replacement option
  const handleColorChange = (index: number, newColor: string) => {
    const updatedColors = [...colors];
    updatedColors[index] = newColor;
    setColors(updatedColors);
  };

  // Function  handle color reordering option
  const handleDragEnd = (result: any) => {
    if (!result.destination) return;

    const updatedColors = [...colors];
    const [reorderedColor] = updatedColors.splice(result.source.index, 1);
    updatedColors.splice(result.destination.index, 0, reorderedColor);

    setColors(updatedColors);
  };

  if (!isClient) {
    return null;
  }

  return (
    <div className="flex flex-col items-center justify-center mt-20 text-black space-y-4">
      <div className="text-4xl font-medium md:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-[#00CCFF] to-[#f94aff]">
        Color Picker
      </div>
      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId="colors" direction="horizontal">
          {(provided) => (
            <div
              {...provided.droppableProps}
              ref={provided.innerRef}
              className="flex space-x-3"
            >
              {colors.map((color, index) => (
                <Draggable key={color} draggableId={color} index={index}>
                  {(provided) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      className="bg-gray-200 rounded-md p-2 shadow-sm hover:bg-gray-300"
                    >
                      <input
                        type="color"
                        value={color}
                        onChange={(e) =>
                          handleColorChange(index, e.target.value)
                        }
                        className="w-20 h-10 rounded-md"
                      />
                      <span className="ml-2 text-sm">{color}</span>
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
};

export default ColorPalette;
