
// drag and drop functionality

const cards = document.querySelectorAll(".card");
const lists = document.querySelectorAll("#columns");



cards.forEach((card) => {
    cardEventHandler(card)

    const id = card.getAttribute('data-card');
        
          
  const columnId = card.parentElement.getAttribute("data-column");
  


  if (id !== columnId) {

    card.classList.add("hide");
    
}});

lists.forEach((list) => {
    list.addEventListener('dragover', (e) => {
        e.preventDefault();
        let draggingCard = document.querySelector(".dragging");
        let cardAfterDraggingCard = getCardAfterDraggingCard(list, e.clientY)
        if(cardAfterDraggingCard) {
            cardAfterDraggingCard.parentNode.insertBefore(draggingCard, cardAfterDraggingCard);
        } else {
        list.appendChild(draggingCard);
        }
    });

});

// update column id 
function getCardAfterDraggingCard(list, yDraggingCard) {

    let listCards = [...list.querySelectorAll(".card:not(.dragging)")];

   return listCards.reduce((closestCard, nextCard) => {
        let nextCardRect = nextCard.getBoundingClientRect();
        let offset = yDraggingCard - nextCardRect.top - nextCardRect.height/2;

        if (offset < 0 && offset > closestCard.offset) {
            return {offset, element:nextCard}
        } else {
            return closestCard;
        }
    }, {offset: Number.NEGATIVE_INFINITY}).element;    
}

function cardEventHandler (card) {
    card.addEventListener("dragstart", (e)=>{
        card.classList.add("dragging");
    });

    card.addEventListener("dragend", (e)=>{
        card.classList.remove("dragging");

        const updateHandler = async (event) => {

          
          
            const id = card.getAttribute('data-id');
        
          
            const columnId = card.parentElement.getAttribute("data-column");
        
              const response = await fetch(`api/kanban/${id}`, {
                method: 'PUT',
                body: JSON.stringify({ columnId }),
                headers: {
                  'Content-Type': 'application/json',
                },
              });
          
              if (response.ok) {
                console.log("updated");
              } else {
                alert('Failed to update project');
              };
    }; updateHandler()});
}


// modal 

const modal = document.getElementById("email-modal");
const openBtn = document.querySelector(".createBtn");
const closeBtn = document.querySelector(".closeBtn");
const form = document.getElementById("modalForm")

openBtn.addEventListener("click", () => {
    modal.style.display = "block";
})

closeBtn.addEventListener("click", () => {
    modal.style.display = "none"
})

window.addEventListener("click", (e) => {
    if(e.target === modal) {
        modal.style.display = "none"; 
    }
})

// delete


const delButtonHandler = async (event) => {
    if (event.target.hasAttribute('data-id')) {
      const id = event.target.getAttribute('data-id');
  
      const response = await fetch(`api/kanban/${id}`, {
        method: 'DELETE',
      });
  
      if (response.ok) {
        document.location.replace('/kanban');
      } else {
        alert('Failed to delete project');
      }
    }
  };

  document.querySelectorAll(".dltCardBtn").forEach(e => e.addEventListener("click", delButtonHandler));

// create

const newTaskHandler = async (event) => {
  event.preventDefault();
  
    const name = document.querySelector('#name').value.trim();
    const task = document.querySelector('#task').value.trim();
    const description = document.querySelector('#description').value.trim();
  
    if (name && task && description) {

      const response = await fetch('api/kanban/create', {
        method: 'POST',
        body: JSON.stringify({ task, description, name }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.replace('/kanban');
      } else {
        alert('Failed to create project');
      }
    }
  };

  const modalSave = document.querySelector(".modalInputBtn")
  modalSave.addEventListener("click", newTaskHandler);


