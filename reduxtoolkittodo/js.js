const arr = [
  {
    id: 1,
    text: "hellow"
  },
  {
    id: 2,
    text: "id 2"
  },
  {
    id: 3,
    text: "hellow 3"
  },
  {
    id: 4,
    text: "id 4"
  },
  {
    id: 5,
    text: "hellow 5"
  },
  {
    id: 6,
    text: "id 6"
  },
]


function update(id, text) {
  const item = arr.find((item) => item.id === id)

  if (item) {
    item.text = text
  }
}

// update(3, "Naved will be change your id.........")
// console.log(arr)
const text = "Hello World"
console.log(text)
console.log(text.trim(1, 2))