export const getEvents = () => {
    return fetch("http://localhost:8000/events", {
        headers:{
            "Authorization": `Token ${localStorage.getItem("lu_token")}`
        }
    })
        .then(response => response.json())
}

export const createEvent = () => {
    return fetch("http://localhost:8000/events", {
        headers:{
            "Authorization": `Token ${localStorage.getItem("lu_token")}`
        }
    })
        .then(response => response.json())
}

export const joinEvent = (eventId, status) => {
    
    return fetch(`http://localhost:8000/events/${ eventId }/signup`, {
        method: status?"DELETE":"POST",
        headers:{
            "Authorization": `Token ${localStorage.getItem("lu_token")}`
        }
    })
        .then(response => (status ? null:response.json()))
}
