import React from 'react'

const Contact = (props) => {
  setTimeout(() => {
    props.history.push('/about') //programatic redirect in V4
  }, 2000);

  return (
    <div className="container">
      <h4 className="center">Contact Page</h4>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque est voluptate vitae provident illum, rerum laudantium id veniam deserunt dignissimos inventore, autem numquam alias similique unde laborum officiis aspernatur sol</p>
    </div>
  )
}

export default Contact;
