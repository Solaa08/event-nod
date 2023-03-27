import React from 'react'

interface CardProps {
    children: React.ReactNode
}

export const Card = ({ children } :CardProps ) : JSX.Element => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg ">
      <div className="px-6 py-4 bg-gray-200">
        {children}
      </div>
    </div>
  )
} 
export const CardTitle = ({ children } : CardProps) : JSX.Element => {
  return (
    <div className="font-bold text-xl mb-2 text-center"> {children}</div>
  )
}
export const CardSubTitle = ({ children } : CardProps) : JSX.Element => {
  return (
    <div className="font-bold text-l text-gray-400 mb-2"> {children}</div>
  )
}

export const CardBody = ({ children }: CardProps) : JSX.Element => {
  return (
    <p className="text-gray-700 text-base">
      {children}
    </p>
  )
}