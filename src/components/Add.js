import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import Modal from 'react-bootstrap/Modal';
import { addVideoApi } from '../apiService/allApis';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Add({updateData}) {
  //state to store input data from form
    const [inputDatas,setinputDatas]=useState({
      title:'',coverImg:'',VideoUrl:'',id:''
    })
    const [show, setShow] = useState(false);

    //function to update input state
    const setData=(e)=>{
      let value = e.target.value
      let name = e.target.name;
    setinputDatas({...inputDatas,[name]:value})
    }

    //extract url
    const extractUrl=(e)=>{
      const {value,name}=e.target
      let urlCode=value.slice(-11,)
      //"https://www.youtube.com/embed/TmznXIylVJ0?autoplay=1"
      const finalURL=`https://www.youtube.com/embed/${urlCode}?autoplay=1`
      setinputDatas({...inputDatas,[name]:finalURL})
    }
    console.log(inputDatas);
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    const handleAdd=async(e)=> {
      //prevent the event
      e.preventDefault()

      const {title, coverImg, VideoUrl} = inputDatas

      if(!title || !coverImg || !VideoUrl){
        toast.error('Please fill all the datas', {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
      });
    }
      else{
        const result = await addVideoApi(inputDatas)
        if(result.status >= 200 && result.status < 300){
          updateData(result.data)
          toast.success('video uploaded succesfully', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            });
          handleClose()
        }
      }

    }
  return (
    <div> <Button className='container w-25 m-4' style={{backgroundColor:'#50006f', border:'none'}} onClick={handleShow}>
    Upload
  </Button>
  <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Upload Video</Modal.Title>
        </Modal.Header>
        <Form.Floating className="mb-3">
        <Form.Control name='title' onChange={(e)=>setData(e)}
          id="floatingInputCustom"
          type="text"
          placeholder="name@example.com"
        />
        <label htmlFor="floatingInputCustom">Video Caption</label>
      </Form.Floating>
      <Form.Floating>
        <Form.Control name='coverImg' onChange={(e)=>setData(e)}
          id="floatingPasswordCustom"
          type="text"
          placeholder="Password"
        />
        <label htmlFor="floatingPasswordCustom">Cover Image URL</label>
      </Form.Floating>
      <Form.Floating>
        <Form.Control name='VideoUrl' onChange={(e)=>extractUrl(e)}
          id="floatingPasswordCustom"
          type="text"
          placeholder="Password"
        />
        <label htmlFor="floatingPasswordCustom">Youtube Video URL</label>
      </Form.Floating>
        <Modal.Footer>
          <Button variant="secondary">
            Close
          </Button>
          <Button onClick={(e)=>handleAdd(e)} style={{backgroundColor:'#50006f', border:'none'}} variant="primary">
            Add
          </Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer />
      </div>
  )
}

export default Add