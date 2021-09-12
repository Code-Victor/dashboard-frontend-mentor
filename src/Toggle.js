import { useState } from 'react'
import { Switch } from '@headlessui/react'

function MyToggle() {
  const [theme, setTheme] = useState(true);
  const root=document.getElementById('root');
  const attribution=document.getElementsByClassName('attribution')[0];
  if (!theme){
    root.classList.add("dark")
    root.classList.add("black")
    attribution.classList.add("black")
}
else{
    root.classList.remove("dark")
    root.classList.remove("black");
    attribution.classList.remove("black");

  }

  
  return (
    <Switch
      checked={theme}
      onChange={setTheme}
      className={`${
        theme ? 'bg-gray-200' : 'bg-gradient-to-r from-indigo-500 via-green-500 to-green-300'
      } relative inline-flex items-center h-6 rounded-full w-12 transition-transform`}
    >
      <span className="sr-only">Enable dark Mode</span>
      <span
        className={`${
          theme ? 'translate-x-6 bg-white' : 'translate-x-1 bg-gray-900'
        } inline-block w-4 h-4 transform  rounded-full`}
      />
    </Switch>
  )
}

export default MyToggle