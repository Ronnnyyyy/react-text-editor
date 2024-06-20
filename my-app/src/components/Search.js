import React from 'react'

export default function Search() {
  return (
    <div>
        <>
        <button class="btn btn-primary" type="button" data-bs-scroll="true" data-bs-toggle="offcanvas" data-bs-target="#offcanvasTop" aria-controls="offcanvasTop">Search</button>

<div class="offcanvas offcanvas-top" data-bs-scroll="true" tabindex="-1" id="offcanvasTop" aria-labelledby="offcanvasTopLabel">
  <div class="offcanvas-header">
    <h5 id="offcanvasTopLabel"><input type="text" placeholder='search'/></h5>
    <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
   
</div>
        </>
    </div>
  )
}
