'use client'
import Image from "next/image";
import { useEffect, useState } from "react";
import { text } from "stream/consumers";

enum textModes {
  "numeric", "alphanumeric", "byte", "Kanji"
}
const ERROR_CORRECTION_LEVEL = {
  "L": {
    "numeric": 187,
    "alphanumeric": 114,
    "byte": 78,
    "Kanji": 48
  },
  "M": {
    "numeric": 149,
    "alphanumeric": 90,
    "byte": 62,
    "Kanji": 38
  }, "Q": {
    "numeric": 111,
    "alphanumeric": 67,
    "byte": 46,
    "Kanji": 28
  }, "H": {
    "numeric": 82,
    "alphanumeric": 50,
    "byte": 34,
    "Kanji": 21
  }
};
const MODE_INDICATOR = {
  "numeric": "0010",
  "alphanumeric": "0010",
  "byte": "0100",
  "Kanji": "1000"
}

export default function Home() {
  let [inputText, setInputText] = useState<string>('');
  let [inputTextType, setInputTextType] = useState<textModes>()

  useEffect(() => {inputText
    let textLen = inputText.length;
    if (textLen) {
      let textLenBytes = (textLen >>> 0).toString(2);

    }
  }, [inputText])

  return (
    <main className="flex min-h-screen flex-col  p-24">
      <div className="w-full max-w-md p-4">
        <form action="">
          <div className="mb-4">
            <label htmlFor="test-input" className="block text-gray-700 text-sm font-bold mb-2">
              Generate QR code for your text
            </label>
            <input type="text" id="test-input" placeholder="Enter your text here..." className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-blue-400"
              onChange={(event) => setInputText(event.target.value)}
            />
          </div>
          <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Submit</button>
        </form>
      </div>
    </main>
  );
}
