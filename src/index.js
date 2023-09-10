import React from 'react'
import ReactDom from 'react-dom'
import './index.css'
import Props from './Props'
import Arr from './Arr'




function nfun(val){
  return(<Props
     img = {val.img}
h5 = {val.h5}
p= {val.p}
watch = {val.watch}
  />
  );
}

ReactDom.render(
  <>
 <div class="card-header ">
  <h1 className='mb-6 mt-6'>List of Top 5 Netflex Series</h1>
  </div>
  <div class="card-body">
      <div class="container text-center">
        <div class="row align-items-start">
  
  
<Props
img = {Arr[0].img}
h5 = {Arr[0].h5}
p= "2018 | Maturity Rating:U/A 13+ | 2h 17m | Romance A young villager moves to Chandigarh and falls for his bubbly neighbor, but their love story is affected by several heartbreaking twists of fate."
watch = "https://www.netflix.com/in/title/81217747"
/>
<Props
img = "https://juksun.com/wp-content/uploads/2023/02/Adipurush-Movie-Theatrical-Poster.jpg"
h5 = 'Adipurush'
p= "2015 | Maturity Rating:U/A 13+ | 2h 33m | Action A young couple falls in love, but conflicting loyalties drive them apart. Years later, fate intervenes and hands them a second chance."
watch = "https://www.netflix.com/in/title/81519291?source=35"
/>
<Props
img = "https://occ-0-299-56.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABS5MyxOOPHSznvW7BMemSjs7bRFZfsDvv46OdSN2XwL5BA6HPcimI1mp-qSCrlm4Zw90V5p3NqfVwYooiq9nWQvjDEoKp4toUI0J.jpg?r=3de"
h5 = 'Oh My God'
p= "2012 | Maturity Rating:U/A 13+ | 2h 8m | Comedies Mumbai shopkeeper Kanji Bhai files a lawsuit against God when an earthquake destroys his store and his insurance policy won't cover the damage."
watch = "https://www.netflix.com/in/title/70258366?source=35"
/>

<Props
img = "https://a10.gaanacdn.com/images/albums/97/1573497/crop_480x480_1573497.jpg"
h5 = 'Dilwale'
p= "2015 | Maturity Rating:U/A 13+ | 2h 33m | Action A young couple falls in love, but conflicting loyalties drive them apart. Years later, fate intervenes and hands them a second chance."
watch = "https://www.netflix.com/in/title/80091866"
/>

<Props
img = "https://images-na.ssl-images-amazon.com/images/S/pv-target-images/734652bc9260ea22410d769bd5a6c36fec563318f8dbe97f9306f41fb2015949._UY500_UX667_RI_TTW_.jpg"
h5 = 'Kabhi Khushi Kabhie Gham'
p= "2001 | Maturity Rating:U/A 13+ | 3h 29m | Drama Years after his father disowns his adopted brother for marrying a woman of lower social standing, a young man goes on a mission to reunite his family."
watch = "https://www.netflix.com/in/title/60036750"

// you cab also map for more easy..

// other method also with fat array ( const __name__ = (val) => { return(__); })
/>






</div>
</div>
</div>
</>

,document.getElementById('root'));
