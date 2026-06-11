import { useParams } from "react-router-dom"
import SoftBackdrop from "../components/SoftBackdrop"
import { useState } from "react";
import type { IThumbnail } from "../assets/assets";

const Generate = () => {
  const {id} = useParams();
  const [title, setTitle] = useState('')
  const [additional, setadditionalDetails] = useState('')
  const [thumbnail, setThumbnail] = useState<IThumbnail | null>(null)
  const [loading, setLoading] = useState(false)

  return (
   <>
   <SoftBackdrop/>
   <div className="pt-24 min-h-screen">

   </div>

   </>
  )
}

export default Generate
