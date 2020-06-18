import React, {useEffect, useState} from 'react';
import Navigation from './Navigation';
import { getCategories, isAuthenticated, createVideogame} from './apiCore'

const AddVideogame = () => {
  const [values, setValues] = useState({
    name: '',
    description: '',
    price: '',
    categories: [],
    category: '',
    quantity: '',
    photo: '',
    loading: false,
    error: '',
    createdVideogame: '',
    redirectToProfile: false,
    formData: ''
  })  
  const { user, token } = isAuthenticated()
  const {
    name,
    description,
    price,
    categories,
    category,
    quantity,
    photo,
    loading,
    error,
    createdVideogame,
    redirectToProfile,
    formData
  } = values;

  const init = () => {
    getCategories().then(data => {
      if (data.error) {
        setValues({ ...values, error: data.error })
      } else {
        setValues({ ...values, categories: data, formData: new FormData() })
      }
    })
  }

  useEffect(() => {
    setValues({...values, formData: new FormData()});
    init();
  }, []); 

  const handleChange = name => event => {
    const value = name === 'photo' ? event.target.files[0] : event.target.value
    formData.set(name, value)
    setValues({ ...values, [name]: value })
  }

  const showError = () => (
    <div
      className='alert alert-danger'
      style={{ display: error ? '' : 'none' }}
    >
      {error}
    </div>
  )

  const showSuccess = () => (
    <div
      className='alert alert-info'
      style={{ display: createdVideogame ? '' : 'none' }}
    >
      <h2>{`${createdVideogame} was succesfully created`}</h2>
    </div>
  )

  const showLoading = () =>
    loading && (
      <div className='alert alert-success'>
        <h2>Loading ...</h2>
      </div>
    )

  const clickSubmit = event => {
    event.preventDefault()
    setValues({ ...values, error: '', loading: true })
    createVideogame(user._id, token, formData).then(data => {
      if (data.error) {
        setValues({ ...values, error: data.error })
      } else {
        setValues({
          ...values,
          name: '',
          description: '',
          photo: '',
          price: '',
          quantity: '',
          loading: false,
          createdVideogame: data.name
        })
      }
    })
  }

  const newVideogameForm = () => (
    <form className='mb-3' onSubmit={clickSubmit}>
      <h4>Post Photo</h4>
      <div className='form-group'>
        <label className='btn btn-secondary'>
          <input
            onChange={handleChange('photo')}
            type='file'
            name='photo'
            accept='image/*'
          />
        </label>
      </div>
      <div className='form-group'>
        <label className='text-muted'>Name</label>
        <input
          onChange={handleChange('name')}
          type='text'
          className='form-control'
          value={name}
        />
      </div>
      <div className='form-group'>
        <label className='text-muted'>Description</label>
        <input
          onChange={handleChange('description')}
          type='text'
          className='form-control'
          value={description}
        />
      </div>
      <div className='form-group'>
        <label className='text-muted'>Price</label>
        <input
          onChange={handleChange('price')}
          type='text'
          className='form-control'
          value={price}
        />
      </div>
      <div className='form-group'>
        <label className='text-muted'>Category</label>
        <select
          onChange={handleChange('category')}
          type='text'
          className='form-control'
        >
          <option>Select Category</option>
          {categories &&
            categories.map((c, i) => (
              <option key={i} value={c._id}>
                {c.name}
              </option>
            ))}
        </select>
      </div>
      <div className='form-group'>
        <label className='text-muted'>Quantity</label>
        <input
          onChange={handleChange('quantity')}
          type='number'
          className='form-control'
          value={quantity}
        />
      </div>
      <button className='btn btn-outline-primary'>Create Product</button>
    </form>
  )

  return (
    <>
      <Navigation/>
      <div className="conatiner mt-5">
        <div className="row">
          <div className="col-md-8 offset-md-2">
            <h2>Add a videogame</h2>
            {showLoading()}
            {showSuccess()}
            {showError()}
            {newVideogameForm()}
          </div>
        </div>
      </div>
    </>
  )
}

export default AddVideogame;