function Searchbar() {
  return (
    <div className='input-box'>
      <input
        type='text'
        name='search'
        className='search'
        placeholder='Search for location'
      />
      <button type='submit' className='btn btn-primary btn-search'>
        Search
      </button>
    </div>
  )
}

export default Searchbar
