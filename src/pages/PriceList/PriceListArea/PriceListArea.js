import React, { useRef, useState } from 'react';
import priceListData from '../../../fakeData/priceListData';
import { useTranslation } from 'react-i18next';

const PriceListArea = () => {
   const [expandedItems, setExpandedItems] = useState({}); // Track expanded state of each item
   const [searchQuery, setSearchQuery] = useState(''); // Track the search input
   const refs = useRef([]); // Store refs for dynamic height calculation
   const { t } = useTranslation();

   const handleToggle = (index) => {
      setExpandedItems(prevState => ({
         ...prevState,
         [index]: !prevState[index] // Toggle the expanded state for the specific item
      }));
   };

   // Function to handle search input change
   const handleSearchChange = (event) => {
      setSearchQuery(event.target.value);
   };

   // Function to filter data based on search query
   const filterData = (data) => {
      if (!searchQuery) return data; // If there's no search query, return all data

      const searchTerm = searchQuery.toLowerCase();

      return data.map(item => {
         // Check if the item's label matches
         const itemMatches = item.label.toLowerCase().includes(searchTerm);

         // Check if any of the child's labels match
         const childMatches = item.childs?.some(child =>
            child.label.toLowerCase().includes(searchTerm) ||
            (child.childs && child.childs.some(pChild => pChild.label.toLowerCase().includes(searchTerm)))
         );

         // Return the item if it matches or if any child matches
         if (itemMatches || childMatches) {
            return {
               ...item,
               childs: item.childs?.filter(child =>
                  child.label.toLowerCase().includes(searchTerm) ||
                  (child.childs && child.childs.some(pChild => pChild.label.toLowerCase().includes(searchTerm)))
               ).map(child => ({
                  ...child,
                  childs: child.childs?.filter(pChild => pChild.label.toLowerCase().includes(searchTerm)) || []
               }))
            };
         }

         return null; // Exclude items that do not match
      }).filter(item => item !== null); // Filter out null values
   };

   // Get the filtered data
   const filteredData = filterData(priceListData);

   const cardStyles = {
      backgroundColor: '#ffffff',
      borderRadius: '10px',
      padding: '20px',
      boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
      marginBottom: '20px'
   };

   return (
      <div className="container" style={{ maxWidth: '1200px' }}>
         {/* Search input */}
         <div className="row pt-4 pb-4">
            <div className="col-12">
               <div className="team-search mb-30">
                  <form action="#">
                     <div className="row mb-4">
                        <div className="col-12">
                           <input
                              type="text"
                              placeholder={t('Որոնում․․․')}
                              value={searchQuery}
                              onChange={handleSearchChange}
                              className="form-control"
                           />
                        </div>
                     </div>
                  </form>
               </div>
            </div>
         </div>

         {/* Filtered price list data */}
         {filteredData.map((item, key) => {
            const isExpanded = expandedItems[key]; // Get the expanded state for the current item

            return (
               <div key={key} className="cardContainer" style={cardStyles}>

                  <ul
                     style={{
                        height: isExpanded ? 'auto' : 0,
                        overflow: 'hidden',
                        transition: 'height 0.3s ease-out',
                        paddingLeft: '20px'
                     }}
                  >
                     {item.childs?.map((child, index) => {
                        const childKey = `${key}-${index}`;
                        const childIsExpanded = expandedItems[childKey]; // Check if child is expanded

                        return (
                           <div key={childKey} className="card" style={cardStyles}>
                              <div style={{ display: 'flex', cursor: 'pointer', justifyContent: 'space-between' }} onClick={() => handleToggle(childKey)}>
                                 <h4 className="card-title">{child.label || <h3>Ենթավերնագիր</h3>}</h4>
                                 <svg style={{ transform: childIsExpanded ? 'rotate(90deg)' : 'rotate(0deg)', transition: 'transform 0.3s ease-out' }} xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                                    <path d="M7.293 4.707 14.586 12l-7.293 7.293 1.414 1.414L17.414 12 8.707 3.293 7.293 4.707z" />
                                 </svg>
                              </div>
                              <ul
                                 style={{
                                    height: childIsExpanded ? 'auto' : 0,
                                    overflow: 'hidden',
                                    transition: 'height 0.3s ease-out',
                                    paddingLeft: '20px'
                                 }}
                              >
                                 {child.childs?.map((pChild, pKey) => (
                                    <li key={pKey} style={{ display: 'flex', justifyContent: 'space-between' }}>
                                       <span className='h6'>{pChild.label}</span>
                                       <span className='h6'>{pChild.value} դրամ</span>
                                    </li>
                                 ))}
                              </ul>
                           </div>
                        );
                     })}
                  </ul>
               </div>
            );
         })}

         {/* Display a message if no results are found */}
         {filteredData.length === 0 && (
            <p>Տվյալներ չեն հայտնաբերվել "{searchQuery}".</p>
         )}
      </div>
   );
};

export default PriceListArea;
