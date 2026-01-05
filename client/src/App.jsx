import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './components/Routes/Home'
import PatientWelcome from './components/Routes/PatientWelcome'
import CareGiverWelcome from './components/Routes/CareGiverWelcome'
import SetReminders from './components/Routes/SetReminders'
import SetMemoryAlbum from './components/Routes/SetMemoryAlbum'
import ViewLocation from './components/Routes/ViewLocation'
import MemoryTreeCanvas from './components/MemoryTreeCanvas'
import SeeReminder from './components/Routes/SeeReminder'
import SeeMemoryAlbum from './components/Routes/SeeMemoryAlbum'
import SeeMemoryGame from './components/Routes/seeMemoryGame'
import SetRecipes from './components/Routes/SetRecipes'
import SeeRecipe from './components/Routes/SeeRecipe'
import SeeWeather from './components/Routes/SeeWeather'

function App() {
  return (
    <div>
      <MemoryTreeCanvas />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/patient' element={<PatientWelcome />} />
        <Route path='/caregiver' element={<CareGiverWelcome />} />
        <Route path='/setReminders' element={<SetReminders />} />
        <Route path='/setMemoryAlbum' element={<SetMemoryAlbum />} />
        {/* <Route path='/SetRecipes' element={<SetRecipes />} /> */}
        <Route path='/viewLocation' element={<ViewLocation />} />
        <Route path='/seeReminder' element={<SeeReminder />} />
        <Route path='/seeMemoryAlbum' element={<SeeMemoryAlbum />} />
        <Route path='/seeMemoryGame' element={<SeeMemoryGame />} />
        {/* <Route path='/SeeRecipe' element={<SeeRecipe />} /> */}
        <Route path='/SeeWeather' element={<SeeWeather />} />

      </Routes>


    </div>
  )
}

export default App
