import React from "react"

function Footer() {
  const date= new Date().getFullYear();

  return (
    <div className="flex align-bottom h-[100vh] place-items-end justify-center text-gray-500">
    <p>Copyright © {date} </p>
    </div>
  )
}
export default Footer
