import React , {useState} from 'react'

const Search = () => {
    let array = ["chennai", "chengalpattu", "Mysore", "Banglore", "Mandya"];
     let [search, setsearch] = useState("");

     let handleChange = e => {
       setsearch(e.target.value);
     };
     let filtered = array.filter(val => {
       if (search === "") {
         return val;
       }
       if (val.toLocaleLowerCase().includes(search.toLocaleLowerCase())) {
         return val;
       }
     });
  return (
      <div>
          <input type="text" list='city'/>
      <datalist id='city'>
        {filtered.map((val, index) => {
          return (
            <option
              key={index}
              value={index}
              name="city"
              onChange={handleChange}
            >
              {val}
            </option>
          );
        })}
      </datalist>
    </div>
  );
}

export default Search