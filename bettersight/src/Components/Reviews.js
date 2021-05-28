import React from 'react'

export default function Reviews({reviews}) {

    let i = 0;
    const renderReviews = reviews.map((item) =>{
        return(
            <div 
                className={i++ % 2 === 0 ? "comment mt-4 text-justify float-left" : 
                            "comment mt-4 text-justify float-left bg-transparent"
                        }
                key={item.id} 
            >
                <img src={item.avatar} alt={item.first_name} className="rounded-circle" width="50" height="50" />
                <h4>{item.first_name} {item.last_name}</h4> <span>- {item.date}</span>
                <p> {item.comment} </p>
            </div>
        )
    });

    return (
        <div id="review">
            <div className="row">
                <div className="col-12">
                    <h1 className="ml-3">Customers Reviews</h1>
                </div>
            </div>

            <div className="row">            
                <div className="col-sm-5 col-md-6 col-12 pb-4">
                    {renderReviews}
                </div>

                <div className="col-lg-4 col-md-5 col-sm-4 offset-md-1 offset-sm-1 col-12 mt-4">
                    <form id="algin-form">
                        <div className="form-group">
                            <h4>Leave a comment</h4> <label for="message">Message</label> <textarea name="msg" id="" msg cols="30" rows="5" className="form-control"></textarea>
                        </div>
                        <div className="form-group"> <label for="name">Name</label> <input type="text" name="name" id="fullname" className="form-control" /> </div>
                        <div className="form-group"> <label for="email">Email</label> <input type="text" name="email" id="email" className="form-control" /> </div>
                        <div className="form-group">
                            <p>If you have a <a href="#" className="alert-link">gravatar account</a> your address will be used to display your profile picture.</p>
                        </div>
                        <div className="form-inline"> <input type="checkbox" name="check" id="checkbx" className="mr-1" /> <label for="subscribe">Subscribe me to the newlettter</label> </div>
                        <div className="form-group"> <button type="button" id="post" className="btn">Post Comment</button> </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
