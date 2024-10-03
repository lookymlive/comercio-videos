import React from 'react'

const ProtectedPage = (
  {
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>
  
) => {
  return (
    <div>
      {children}
    </div>
  )
}

export default ProtectedPage