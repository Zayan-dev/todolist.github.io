 // FUNCTION FOR INSERTING DATA
 const add_Btn=document.getElementById('addBtn');
 add_Btn.addEventListener('click',add_Data);
 let alert=document.createElement('li');
 alert.className="listItem";
 alert.appendChild(document.createTextNode("Kindly Enter Data"));

 function add_Data(e){
     let input_Text=document.getElementById('inputText');
     if(input_Text.value!==""){
     alert.remove();
     let li_Text=input_Text.value;
     let new_Li = document.createElement('li');
     new_Li.innerHTML=`<li class="listItem">${li_Text} 
             <div class="removeBtn">
             <button id="removeBtn" class="remBtn" onclick="delete_Data(this)" >&check;</button>
         </div>
     </li>`;
     let parent_List=document.getElementById('parentList');
     parent_List.append(new_Li);
     input_Text.value="";
     }
     else{
         let pl=document.getElementById('parentList');
         if(pl.childElementCount==0){
         // let parent_List=document.getElementById('parentList');
         console.log(pl.childElementCount);
         pl.appendChild(alert);
         }
     }
 }

 // FUNCTION FOR DELETING DATA
 function delete_Data(event){
     console.log(event.parentElement); 
     let delete_Ele=event.parentElement.parentElement;
     // console.log(current_Ele.previousElementSibling); 
     delete_Ele.remove();
 }