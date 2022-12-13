import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import ytdl from 'ytdl-core';
import { makeObservable, observable, action } from "mobx"
import { observer } from "mobx-react-lite" 
import dynamic from 'next/dynamic'
// const electron = window.require('electron');
const fs = dynamic(()=>import("fs"), {ssr:false});

const DownloadPage = observer(props => {
    const [ytUrl, setYtUrl] = useState("");
    const [directory, setDirectory] = useState("");
    // console.log(dialog.showOpenDialog({ properties: ['openFile', 'multiSelections'] }))
    return <div className='flex flex-col w-full'>
    <div>
        <h1>YT Donwload</h1>
    </div>
    <div className='w-1/2 flex flex-col items-center'>
      <label htmlFor="search" className="block text-sm font-medium text-gray-700">
        youtube url
      </label>
      <div className="relative mt-1 flex items-center">
        <input
          type="text"
          name="search"
          id="search"
          className="block w-full rounded-md border-gray-300 pr-12 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        />        
      </div>
    </div>
    <div className='w-1/2 flex flex-col items-center'>
      <label htmlFor="search" className="block text-sm font-medium text-gray-700">
        youtube url
      </label>
      <div className="relative mt-1 flex items-center">
        
        
      <button onClick={()=>{
        fs.opendirSync()
        // console.log(dialog)
        // dialog.showOpenDialog({ properties: ['openFile', 'multiSelections'] })
        }}>Show Error Box</button>     
      </div>
    </div>
    </div>
})

export default DownloadPage;