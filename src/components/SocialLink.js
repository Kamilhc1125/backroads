import React from 'react';

const SocialLink = ({ href, icon, itemClass, id }) => {
  return (
    <li key={id}>
        <a href={href} target="_blank" className={itemClass}>
            <i className={icon}></i>
        </a>
    </li>
  )
}

export default SocialLink;
