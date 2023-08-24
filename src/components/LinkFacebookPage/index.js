import React from 'react';

/**
 <LinkFacebookPage />

 <LinkFacebookPage
   label="Facebook Page" />
 */
export default function LinkFacebookPage(props) {
  return (
    <a href="https://www.facebook.com/profile.php?id=100095337571720" target="_blank">
      {props.label ? props.label : "SmartVan's Facebook Page"}
    </a>
  );
}
