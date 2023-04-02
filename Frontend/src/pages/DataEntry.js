import { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { Form, json, redirect } from 'react-router-dom';

function DataEntry() {
  const [inputCategory, setInputCategory] = useState('Dialysis');
  const [inputId, setInputId] = useState("");
  const [inputTitle, setInputTitle] = useState('');
  const [inputDescription, setInputDescription] = useState('');
  const [inputImage1, setInputImage1] = useState('');
  const [inputImage2, setInputImage2] = useState('');
  const [inputImage3, setInputImage3] = useState('');

  const notComplete = inputId.trim().length === 0 || inputTitle.trim().length === 0 || inputDescription.trim().length === 0 || inputImage1.trim().length === 0;

  const submitHandler = async (event) => {
    event.preventDefault();
    const newItem = {
      id: inputId,
      title: inputTitle,
      category: inputCategory,
      description: inputDescription,
      image1: inputImage1,
      image2: inputImage2,
      image3: inputImage3,
    };
    const response = await fetch('https://reacthttp-50bcb-default-rtdb.firebaseio.com/data.json', {
    method: 'POST',
    body: JSON.stringify(newItem)
  });
  if (!response.ok) {
    throw json({ message: 'Could not save .' }, { status: 500 });
  }
  setInputDescription('');
  setInputId('');
  setInputTitle('');
  setInputImage1('');
  setInputImage2('');
  setInputImage3('');
}

  return (
    <form className='container mt-5' style={{width: '70%'}} onSubmit={submitHandler}>
      <select className="form-select mb-3" onChange={(event)=> setInputCategory(event.target.value)}>
      <option value='Dialysis' defaultValue='Dialysis'>Dialysis</option>
      <option value='Surgical'>Surgical</option>
      <option value='Labs'>Labs and Researches</option>
      <option value='Dental'>Dental</option>
      <option value='Cosmatics'>Cosmatics</option>
    </select>
    <p>
      <label className='d-block' htmlFor='id'>Item ID</label>
      <input id='id' type="text" name="id" style={{width: '100%'}} value={inputId} onChange={(event)=> setInputId(event.target.value)}/>
    </p>
    <p>
      <label className='d-block' htmlFor='title'>Title</label>
      <input id='title' type="text" name="title" style={{width: '100%'}} value={inputTitle} onChange={(event)=> setInputTitle(event.target.value)}/>
    </p>
    <p>
      <label className='d-block' htmlFor='description'>Description</label>
      <textarea id='description' name="description" style={{width: '100%'}} value={inputDescription} onChange={(event)=> setInputDescription(event.target.value)}/>
    </p>
    <p>
      <label className='d-block' htmlFor='image1'>Image1</label>
      <input id='image1' type="text" name="image1" style={{width: '100%'}} value={inputImage1} onChange={(event)=> setInputImage1(event.target.value)}/>
    </p>
    <p>
      <label className='d-block' htmlFor='image2'>Image2</label>
      <input id='image2' type="text" name="image2" style={{width: '100%'}} value={inputImage2} onChange={(event)=> setInputImage2(event.target.value)}/>
    </p>
    <p>
      <label className='d-block' htmlFor='image3'>Image3</label>
      <input id='image3' type="text" name="image3" style={{width: '100%'}} value={inputImage3} onChange={(event)=> setInputImage3(event.target.value)}/>
    </p>
    {notComplete && <p>Please Complete the data to enable submit</p>}
    <Button type='submit' disabled={notComplete}>Submit</Button>
    </form>
  )
}

export default DataEntry;

// export async function action({request, params}) {
//   const data = await request.formData();
//   const newItem = {
//     id: data.get('id'),
//     title: data.get('title'),
//     description: data.get('description'),
//     category: data.get('category'),
//   }
//   const response = await fetch('https://reacthttp-50bcb-default-rtdb.firebaseio.com/data.json', {
//     method: 'POST',
//     body: JSON.stringify(newItem)
//   });
//   if (!response.ok) {
//     throw json({ message: 'Could not save .' }, { status: 500 });
//   }
//   return redirect('..');}
