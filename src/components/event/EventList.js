import React, { useEffect, useState } from "react"
import { useHistory } from "react-router-dom"
import { getEvents, joinEvent } from "./EventManager.js"
import "./Events.css"

export const EventList = () => {
    const history = useHistory()
    const [ events, assignEvents ] = useState([])

    const eventFetcher = () => {
        getEvents()
            .then(data => assignEvents(data))
    }

    useEffect(() => {
        eventFetcher()
    }, [])

    return (
        <article className="events">
            <button className="btn btn-2 btn-sep icon-create"
                onClick={() => {
                history.push({ pathname: "/events/new" })
            }}
            >Register New Event</button>

            {
                events.map(item => {
                    return <section key={`item--${item.id}`} className="event-container">
                        <div className="item__title">{item.title} by {item.organizer.user.username}</div>
                        <div className="item__descirption">{item.description} </div>
                        <div className="item__info">On {item.date} at {item.time}</div>
                        
                        <button className={item.joined ? "btn btn-3":"btn btn-2"}
                                onClick={
                                    () => {
                                        joinEvent(item.id, item.joined)
                                            .then(() => getEvents().then(data => setEvents(data)))
                                    }
                                }
                        >{item.joined ? "Leave" : "Join"}</button>
                    </section>
                })
            }
        </article>
    )
}