

/home/cave/code/react/bookstore2/src/data/library/Jane Eyre: An Autobiography.txt


handleClick = () => {

    fetch('/sample.txt')
    .then((r) => r.text())
    .then(text  => {
      console.log(text);
    })  
  } 


  function FileUpload() {
    // State to store uploaded file
    const [file, setFile] = React.useState("");
  
    // Handles file upload event and updates state
    function handleUpload(event) {
      setFile(event.target.files[0]);
  
      // Add code here to upload file to server
      // ...
    }
  
    return (
      <div id="upload-box">
        <input type="file" onChange={handleUpload} />
        <p>Filename: {file.name}</p>
        <p>File type: {file.type}</p>
        <p>File size: {file.size} bytes</p>
        {file && <ImageThumb image={file} />}
      </div>
    );
  }
  
  /**
   * Component to display thumbnail of image.
   */
  const ImageThumb = ({ image }) => {
    return <img src={URL.createObjectURL(image)} alt={image.name} />;
  };
  
  
  export default function App() {
    return <FileUpload />;
  }