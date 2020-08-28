const registerArray = [
  {
    title: 'Title',
    name: 'title',
    type: 'input',
    placeholder: '',
  },
  {
    title: 'Price',
    name: 'price',
    type: 'price',
    placeholder: '',
  },
  {
    title: 'Category',
    name: 'category',
    type: 'dropdown',
    dropdownOptions: [
      { name: 'Bread', id: 'bread' },
      { name: 'Vegetables', id: 'vegetables' },
      { name: 'Fruits', id: 'fruits' },
      { name: 'Dairy', id: 'dairy' },
    ],
    placeholder: '',
  },
  {
    title: 'Image Url',
    name: 'imageUrl',
    type: 'input',
    placeholder: '',
  },
];

export default registerArray;
