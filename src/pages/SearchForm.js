import { useDispatch } from "react-redux";
import { setSearchText } from "../store";

export function SearchForm(){
  
  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(setSearchText(document.getElementById('searchText').value))
  }
  
  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <div className='form-row'>
        <label htmlFor='searchText'>Movie Search</label>
        <input type='text' id='searchText' />
      </div>
      <button className='btn'>Search</button>
    </form>
  )
}