import React, { useEffect, useState } from 'react'
import { Button, Form, Modal } from 'react-bootstrap'
import { addCategoryApi, deleteCategoryApi, getCategoryApi, getVideo, updateCatApi } from '../apiService/allApis';
import { Trash2 } from 'feather-icons-react/build/IconComponents';

function Categories() {

  const [categories,setCategories]=useState(false)
  const getCategories=async()=>{
    const result=await getCategoryApi()
    setCategories(result.data);
  }

  useEffect(()=>{
    getCategories()
  },[])
  
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => {
    setShow(false)
    setCatInputs({id:'',title:'',videos:[]})
  };
  const [catInputs, setCatInputs]=useState({
    id:'',title:'',videos:[]
  })
  console.log(catInputs);
  const handleAdd=async(e)=>{
    e.preventDefault()
    if(!catInputs.title){
      alert("please fill all inputs")
    }
    else{
      const result = await addCategoryApi(catInputs)
      if(result.status>=200 && result.status<300){
        await getCategories()
        alert('category added')
        handleClose()
      }
    }
    
  }
  const handleDelete=async(e,id)=>{
    e.preventDefault()
    await deleteCategoryApi(id)
    getCategories()

  }

  const draggingOver=(e)=>{
    e.preventDefault()
    console.log("dragging over the category");
  }

  const dropped=async(e,id)=>{
    console.log("dropped" +id);
    const vidId=e.dataTransfer.getData("cardId")
    console.log("dragged data",vidId);

    //access video
    const result=await getVideo(vidId)
    const video=result.data

    //select cat
    let selectedCat=categories.find(i=>i.id==id)
    selectedCat.videos.push(video)

    await updateCatApi(id,selectedCat)
    getCategories()
  }
  return (
    <div className='text-center'><Button onClick={handleShow} style={{backgroundColor:'#50006f', border:'none'}}>Add Category</Button>
    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Category</Modal.Title>
        </Modal.Header>
        <Form.Floating className="mb-3">
        <Form.Control 
          onChange={(e)=>setCatInputs({...catInputs,["title"]:e.target.value})}
          id="floatingInputCustom"
          type="email"
          placeholder="name@example.com"
        />
        <label htmlFor="floatingInputCustom">Category Name</label>
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
      {
            categories?.length>0?
            categories?.map(i=>(
              <div droppable onDragOver={e=>draggingOver(e)} onDrop={(e)=>dropped(e,i?.id)} className='p-5 rounded bg-dark my-4'>
                <Trash2 size="56" className="text-danger btn" onClick={(e)=>handleDelete(e,i?.id)}></Trash2>
                <h5 className='text-center text-light'>{i?.title}</h5>
                <div className='d-flex'>
                  {i?.videos.length>0 ? (
                    i.videos.map(j=>(
                      <div style={{width:'100px'}}>
                        <img style={{height:'60px'}} className='w-100 px-2' src={j?.coverImg} alt="" />
                      </div>
                    ))
                  ):""}
                </div>
              </div>
            ))
            :
            <h1>No Categories Added</h1>
          }
          <br /><br />
    <h3 style={{fontFamily:'Teko',}} className='text-light'>No Categories added yet</h3></div>
  )
}

export default Categories