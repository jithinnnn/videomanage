import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { addHistoryApi, deleteVideoApi } from '../apiService/allApis';
import { ToastContainer, toast } from 'react-toastify';
import { format } from 'date-fns';


function VideoCard({video,deleteData}) {

    const deleteVideo=async(e,id)=>{
    const result = await deleteVideoApi(id)
     toast.success('Deleted', {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
  });
  deleteData(result.data)
    }
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = async () => {
      setShow(true);
      //history store

      //body data -title,time,videoUrl,id

      const title=video?.title
      const videoUrl=video?.videoUrl
      //time
      let time=format(new Date(), "dd-MM-yyyy , h:mm a")
      const reqBody={
        title,videoUrl,time,id:""
      }
      await addHistoryApi(reqBody)
    }

    const dragStart=(e,id)=>{
        console.log("dragging started, source card is"+id);
        //store the dragged data
        e.dataTransfer.setData("cardId",id)
    }

  return (
    <div>
        <Card onDragStart={(e)=>dragStart(e,video?.id)} draggable className='border border-danger' bg='dark' style={{ width: '18rem' }}>
    <Card.Img onClick={handleShow} className='w-100'style={{height:'160px'}} variant="top" src={video?.coverImg} />
    <Card.Body>
      <Card.Title className='text-light'><h4>{video?.title}</h4>
      <div><i onClick={(e)=>deleteVideo(e,video?.id)} class="fa-solid fs-5 fa-trash"></i></div></Card.Title>
    </Card.Body>
  </Card>
  <Modal
  centered size='lg'  show={show} onHide={handleClose}>
        <Modal.Header className='bg-dark text-white' closeButton>
          <Modal.Title>{video?.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body className='bg-dark text-white' ><iframe width="100%" height="480" src={video?.VideoUrl} title="LUMINARONAM - 2K23 - COCHIN BRANCH STUDENTS" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></Modal.Body>
      </Modal>
      <ToastContainer />
  </div>
  )
}

export default VideoCard