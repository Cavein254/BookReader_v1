import React, { useState,useEffect } from "react";
import Container from 'react-bootstrap/Container'
import { Button } from "react-bootstrap";
import './styles.css'

function Book() {
    const [textFile,setTextFile] = useState('')

    useEffect(() => {
            fetch('/sample.txt')
            .then(r => r.text())
            .then(text=> setTextFile(text))
    }, [])

    const handleFileUpload = () => {
    }


  return(
      <div>
          <section className="book" id="book">
              {textFile}
          </section>
          <div className="book-btn">
              <Button variant="secondary" onClick={handleFileUpload}>Upload .txt File</Button>
              <Button variant="primary">Fullscreen</Button>
          </div>
      </div>
  )
}

export default Book;
